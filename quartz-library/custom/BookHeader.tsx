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
        </div>
      </div>
    )
  }

  Component.css = `
    .book-header {
      display: flex;
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
      width: 120px;
      height: auto;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .book-meta {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 0.75rem;
      flex: 1;
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

    .book-published {
      font-size: 0.95rem;
      color: var(--gray);
    }

    @media (max-width: 600px) {
      .book-header {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .book-cover img {
        width: 100px;
      }
    }
  `

  return Component
}

export default BookHeader
