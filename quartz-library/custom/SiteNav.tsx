import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../quartz/components/types"

const SiteNav: QuartzComponentConstructor = () => {
  const Component: QuartzComponent = (_props: QuartzComponentProps) => {
    return (
      <nav class="site-nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/Books">Library</a>
        <a href="/Forest">Forest</a>
      </nav>
    )
  }

  Component.css = `
    .site-nav {
      display: flex;
      gap: 1.5rem;
      align-items: center;
    }
    .site-nav a {
      font-size: 0.9rem;
      font-weight: 600;
      text-decoration: none;
      color: var(--dark);
      opacity: 0.75;
    }
    .site-nav a:hover {
      opacity: 1;
      color: var(--secondary);
    }
  `

  return Component
}

export default SiteNav
