import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Banner: QuartzComponentConstructor = () => {
  const Component: QuartzComponent = (_props: QuartzComponentProps) => {
    return (
      <header class="site-banner">
        <div class="banner-container">
          <nav class="banner-nav">
            <div class="nav-brand">
              <a href="https://github.com/reinierkruisbrink" class="nav-icon" title="GitHub">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="https://nl.linkedin.com/in/reinier-kruisbrink-846795153" class="nav-icon" title="LinkedIn">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.goodreads.com/user/show/157295953-reinier" class="nav-icon" title="Goodreads">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                  <path d="M11.43 23.995c-3.608-.208-6.274-2.077-6.448-5.078.695.007 1.375-.013 2.07-.006.224 1.342 1.065 2.43 2.683 3.026 1.558.496 3.532.285 4.878-.488 1.706-.958 2.418-2.778 2.418-4.813-.003-1.416-.006-2.838-.01-4.255l-.006-.072c-.642 1.347-1.607 2.123-2.757 2.678-1.327.627-2.98.738-4.478.395-3.164-.747-5.094-3.187-5.413-6.343-.392-3.812 1.088-7.247 4.453-8.932 1.694-.849 3.768-.947 5.478-.328 1.142.404 2.236 1.173 2.917 2.163v-1.86h1.804l.003 13.848c.007.714-.063 1.39-.186 2.01-.433 2.333-1.857 4.263-4.092 5.155-1.089.43-2.376.62-3.314.9zm1.575-8.082c1.617-.282 2.836-1.205 3.543-2.587.624-1.196.766-2.743.536-4.135-.263-1.617-.918-2.925-2.162-3.818-1.066-.76-2.442-1.016-3.726-.782-1.56.284-2.74 1.11-3.456 2.455-.742 1.39-.88 3.181-.588 4.794.296 1.6 1.04 2.924 2.373 3.672.896.5 2.098.628 3.48.4z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/reinierkruisbrink/" class="nav-icon" title="Instagram">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
            <div class="nav-links">
              <a href="https://reinierkruisbrink.github.io/" class="nav-link">Home</a>
              <a href="https://reinierkruisbrink.github.io/#about" class="nav-link">About</a>
              <a href="https://reinierkruisbrink.github.io/#portfolio" class="nav-link">Portfolio</a>
              <a href="https://reinierkruisbrink.github.io/#blog" class="nav-link">Book Blog</a>
              <a href="/notes" class="nav-link active">Notes</a>
              <a href="https://reinierkruisbrink.github.io/#contact" class="nav-link">Contact</a>
            </div>
          </nav>
        </div>
      </header>
    )
  }

  Component.css = `
    .site-banner {
      width: 100%;
      background: var(--light);
      border-bottom: 1px solid var(--lightgray);
      padding: 0.75rem 0;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    
    .banner-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    
    .banner-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }
    
    .nav-brand {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    
    .nav-icon {
      color: var(--darkgray);
      transition: color 0.2s ease;
      display: flex;
      align-items: center;
    }
    
    .nav-icon:hover {
      color: var(--secondary);
    }
    
    .nav-links {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      flex-wrap: wrap;
    }
    
    .nav-links .nav-link {
      padding: 0.5rem 0.75rem;
      color: var(--darkgray);
      text-decoration: none;
      font-weight: 500;
      font-size: 0.95rem;
      border-radius: 4px;
      transition: all 0.2s ease;
    }
    
    .nav-links .nav-link:hover {
      background: var(--lightgray);
      color: var(--dark);
    }
    
    .nav-links .nav-link.active {
      background: var(--secondary);
      color: var(--light);
    }
    
    @media (max-width: 768px) {
      .banner-nav {
        justify-content: center;
      }
      
      .nav-links {
        justify-content: center;
      }
      
      .nav-links .nav-link {
        padding: 0.4rem 0.5rem;
        font-size: 0.85rem;
      }
    }
    
    /* Hide banner in popovers */
    .popover .site-banner {
      display: none;
    }
  `

  return Component
}

export default Banner
