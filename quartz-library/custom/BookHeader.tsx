import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../quartz/components/types"

const BookHeader: QuartzComponentConstructor = () => {
  const Component: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const frontmatter = fileData.frontmatter
    
    // Only render for content with book-specific metadata
    if (!frontmatter?.author || !frontmatter?.cover_image_url) {
      return null
    }

    const author = frontmatter.author as string
    const authorUrl = frontmatter.author_url as string | undefined
    const coverImageUrl = frontmatter.cover_image_url as string
    const publishedDate = frontmatter.published_date as string | undefined
    const readDate = frontmatter.read_date as string | undefined
    const myRating = frontmatter.my_rating as number | undefined
    const tags = frontmatter.tags as string[] | undefined

    return (
      <div class="book-header">
        <div class="book-cover">
          <img src={coverImageUrl} alt={`Cover of ${frontmatter.title}`} />
        </div>
        <div class="book-meta">
          <div class="book-author">
            {authorUrl ? (
              <a href={authorUrl} target="_blank" rel="noopener noreferrer">
                {author}
              </a>
            ) : (
              <span>{author}</span>
            )}
          </div>
          {publishedDate && (
            <div class="book-published">
              Published: {publishedDate}
            </div>
          )}
          {readDate && (
            <div class="book-read-date">
              Read: {readDate}
            </div>
          )}
          {myRating && (
            <div class="book-rating">
              My Rating: {myRating}/10
            </div>
          )}
        </div>
        {tags && tags.length > 0 && (
          <div class="book-tags-column">
            <div class="book-tags">
              {tags.map((tag) => (
                <span class="book-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  Component.css = `
    .book-header {
      display: grid;
      grid-template-columns: 120px 1fr 1fr;
      gap: 1.5rem;
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: var(--light);
      border-radius: 8px;
      border: 1px solid var(--lightgray);
      align-items: flex-start;
    }

    .book-cover {
      flex-shrink: 0;
    }

    .book-cover img {
      width: 150px;
      height: auto;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .book-meta {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 0.75rem;
    }

    .book-author {
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.4;
    }

    .book-author a {
      color: var(--secondary);
      text-decoration: none;
    }

    .book-author a:hover {
      text-decoration: underline;
    }

    .book-published,
    .book-read-date,
    .book-rating {
      font-size: 0.95rem;
      color: var(--gray);
    }

    .book-rating {
      font-weight: 500;
      color: var(--secondary);
    }

    .book-tags-column {
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
    }

    .book-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: flex-end;
    }

    .book-tag {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background: var(--lightgray);
      color: var(--dark);
      border-radius: 12px;
      font-size: 0.85rem;
      font-weight: 500;
      transition: background 0.2s ease;
    }

    .book-tag:hover {
      background: var(--gray);
      color: var(--light);
    }

    @media (max-width: 600px) {
      .book-header {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .book-cover {
        margin: 0 auto;
      }

      .book-cover img {
        width: 100px;
      }

      .book-tags-column {
        justify-content: center;
      }

      .book-tags {
        justify-content: center;
      }
    }
  `

  return Component
}

export default BookHeader
