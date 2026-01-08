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
    const title = frontmatter.title as string
    const subtitle = frontmatter.subtitle as string | undefined
    const goodreadsUrl = frontmatter.goodreads_url as string | undefined
    const synopsis = frontmatter.synopsis as string | undefined

    return (
      <div class="book-header">
        <div class="book-cover">
          <img src={coverImageUrl} alt={`Cover of ${title}`} />
        </div>
        <div class="book-meta">
          <div class="book-title-section">
            {goodreadsUrl ? (
              <a href={goodreadsUrl} target="_blank" rel="noopener noreferrer" class="book-title-link">
                <div class="book-title">{title}</div>
                {subtitle && <div class="book-subtitle">{subtitle}</div>}
              </a>
            ) : (
              <>
                <div class="book-title">{title}</div>
                {subtitle && <div class="book-subtitle">{subtitle}</div>}
              </>
            )}
          </div>
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
          {publishedDate && readDate && (
            <hr class="book-date-separator" />
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
        {synopsis && (
          <div class="book-synopsis-column">
            <div class="book-synopsis">
              {synopsis}
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

    .book-title-section {
      margin-bottom: 0.5rem;
    }

    .book-title-link {
      text-decoration: none;
      color: inherit;
    }

    .book-title {
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 1.3;
      color: var(--secondary);
      margin-bottom: 0.25rem;
    }

    .book-title-link:hover .book-title {
      color: var(--secondary);
    }

    .book-subtitle {
      font-size: 1.1rem;
      font-weight: 500;
      line-height: 1.4;
      color: var(--secondary);
    }

    .book-title-link:hover .book-subtitle {
      color: var(--secondary);
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

    .book-date-separator {
      border: none;
      border-top: 1px solid var(--lightgray);
      margin: 0.25rem 0;
    }

    .book-rating {
      font-weight: 500;
      color: var(--secondary);
    }

    .book-synopsis-column {
      display: flex;
      align-items: flex-start;
    }

    .book-synopsis {
      font-size: 0.95rem;
      line-height: 1.6;
      color: var(--gray);
      font-style: italic;
      padding: 0.5rem;
      border-radius: 4px;
      border-left: 3px solid var(--secondary);
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
        height: 200px;
      }

      .book-synopsis-column {
        justify-content: center;
      }
    }
  `

  return Component
}

export default BookHeader
