import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const HomeLinkCustom: QuartzComponentConstructor = () => {
  const Component: QuartzComponent = (_props: QuartzComponentProps) => {
    return (
      <a class="home-link" href="https://reinierkruisbrink.github.io/">
        ← Back to main site
      </a>
    )
  }

  Component.css = `
    .home-link {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-weight: 600;
      text-decoration: none;
      color: var(--dark);
    }
    .home-link:hover {
      text-decoration: underline;
    }
  `

  return Component
}

export default HomeLinkCustom
