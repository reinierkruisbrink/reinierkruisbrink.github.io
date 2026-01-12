"""
Script to create book markdown files from blog.html
Extracts book information and creates individual .md files based on the template.
"""

from bs4 import BeautifulSoup
import re
import os
from datetime import datetime

def clean_filename(title):
    """Convert book title to a clean filename."""
    # Remove special characters and convert to lowercase
    filename = title.lower()
    filename = re.sub(r'[^\w\s-]', '', filename)
    filename = re.sub(r'[-\s]+', '_', filename)
    return filename + '.md'

def extract_rating(stars_html):
    """Count active star images to determine rating."""
    active_stars = stars_html.count('gr_red_star_active.png')
    # Convert 0-5 stars to 0-10 rating
    return active_stars * 2

def extract_tags(category_text):
    """Extract tags from category text."""
    # Remove brackets and split by closing bracket
    categories = re.findall(r'\[([^\]]+)\]', category_text)
    # Convert to lowercase and replace spaces with hyphens
    tags = [cat.lower().replace(' ', '-') for cat in categories]
    return tags

def extract_content(details_tag):
    """Extract the main content from the details tag."""
    # Find the <p class="wow fadeIn"> tag
    p_tag = details_tag.find('p', class_='wow fadeIn')
    if not p_tag:
        return ""
    
    # Get the HTML content and clean it up
    content = str(p_tag)
    # Remove the opening and closing p tags
    content = re.sub(r'^<p[^>]*>', '', content)
    content = re.sub(r'</p>$', '', content)
    # Clean up extra whitespace
    content = content.strip()
    
    return content

def html_to_markdown_structure(html_content):
    """Convert HTML content to markdown structure."""
    # Replace HTML tags with markdown equivalents
    content = html_content
    
    # Convert <ul> and <li> to markdown lists
    content = re.sub(r'<ul>', '', content)
    content = re.sub(r'</ul>', '', content)
    content = re.sub(r'<li><b>([^<]+)</b>:', r'\n### \1\n', content)
    content = re.sub(r'<li><b>([^<]+)</b>', r'\n**\1**', content)
    content = re.sub(r'</li>', '', content)
    
    # Convert nested lists
    content = re.sub(r'<ul>', '\n', content)
    content = re.sub(r'</ul>', '', content)
    
    # Remove remaining HTML tags but keep content
    content = re.sub(r'<br\s*/?>', '\n', content)
    content = re.sub(r'<center>', '\n', content)
    content = re.sub(r'</center>', '\n', content)
    content = re.sub(r'<i>([^<]+)</i>', r'*\1*', content)
    content = re.sub(r'<a[^>]*>([^<]+)</a>', r'\1', content)
    
    # Clean up extra whitespace
    content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
    content = content.strip()
    
    return content

def parse_blog_and_create_files(blog_path, output_dir):
    """Parse blog.html and create individual markdown files for each book."""
    
    # Read the blog.html file
    with open(blog_path, 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Find all book containers - using lambda to match multiple classes
    book_containers = soup.find_all('div', class_=lambda x: x and 'searchable-item' in x and 'container' in x)
    
    print(f"Found {len(book_containers)} books in blog.html")
    
    books_created = []
    books_skipped = []
    
    for container in book_containers:
        try:
            # Extract book information
            title_tag = container.find('a', class_='fs-large')
            if not title_tag:
                continue
                
            title = title_tag.text.strip()
            goodreads_url = title_tag.get('href', '')
            
            # Extract category
            category_tag = container.find('h5', class_='fg-theme mb-3')
            category_text = category_tag.text.strip() if category_tag else ''
            tags = extract_tags(category_text)
            
            # Extract synopsis from summary
            details_tag = container.find('details', class_='text-muted')
            if not details_tag:
                continue
                
            summary_tag = details_tag.find('summary')
            synopsis = summary_tag.text.strip() if summary_tag else ''
            
            # Extract main content
            content_html = extract_content(details_tag)
            content_markdown = html_to_markdown_structure(content_html)
            
            # Extract author information
            author_link = container.find('a', class_='fg-theme', rel='nofollow')
            author_name = author_link.text.strip() if author_link else 'Unknown'
            author_url = author_link.get('href', '') if author_link else ''
            
            # Extract read date
            date_tag = container.find('span', class_='post-date')
            read_year = date_tag.text.strip().replace('Read in ', '') if date_tag else '2025'
            
            # Extract rating
            rating_div = container.find_all('span')[-1]  # Last span contains star images
            rating = extract_rating(str(rating_div))
            
            # Extract cover image
            img_tag = container.find('img')
            cover_url = img_tag.get('src', '') if img_tag else ''
            
            # Generate filename
            filename = clean_filename(title)
            filepath = os.path.join(output_dir, filename)
            
            # Check if file already exists
            if os.path.exists(filepath):
                books_skipped.append(title)
                continue
            
            # Create markdown content
            markdown_content = f"""---
title: "{title}"
subtitle: ""
author: "{author_name}"
author_url: "{author_url}"
goodreads_url: "{goodreads_url}"
published_date: ""
cover_image_url: "{cover_url}"
read_date: "{read_year}"
date: "{read_year}-01-01"
my_rating: {rating}
synopsis: "{synopsis}"
tags:
{chr(10).join([f'  - "{tag}"' for tag in tags])}
---

# {title}

## Overview

{synopsis}

## Key Concepts

{content_markdown}

## Personal Reflection

[To be added]

## Related Books

- [[Book Title 1]] - [Brief reason for connection]

---

**Parent:** [[Books/index|Books]]
"""
            
            # Write to file
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(markdown_content)
            
            books_created.append(title)
            print(f"✓ Created: {filename}")
            
        except Exception as e:
            print(f"✗ Error processing book: {e}")
            continue
    
    # Print summary
    print(f"\n{'='*60}")
    print(f"Summary:")
    print(f"  Books created: {len(books_created)}")
    print(f"  Books skipped (already exist): {len(books_skipped)}")
    print(f"{'='*60}")
    
    if books_skipped:
        print("\nSkipped books (already exist):")
        for book in books_skipped:
            print(f"  - {book}")
    
    return books_created, books_skipped

if __name__ == "__main__":
    # Set paths
    blog_path = "blog.html"
    output_dir = "content-library/Books"
    
    # Ensure output directory exists
    os.makedirs(output_dir, exist_ok=True)
    
    # Parse and create files
    print("Starting book file creation from blog.html...\n")
    books_created, books_skipped = parse_blog_and_create_files(blog_path, output_dir)
    
    print(f"\n✓ Process complete!")
    print(f"  Total books processed: {len(books_created) + len(books_skipped)}")
