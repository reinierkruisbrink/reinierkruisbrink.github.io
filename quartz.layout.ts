import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { QuartzComponentConstructor, QuartzComponentProps } from "./quartz/components/types"

// Simple back-to-main-site link shown in the top-left header
const HomeLink: QuartzComponentConstructor = () => {
  const Link = () => (
    <a class="home-link" href="https://reinierkruisbrink.github.io/">← Back to main site</a>
  )

  Link.css = `
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

  return Link
}

// Banner-style graph placed above the page content
const BannerGraph: QuartzComponentConstructor = () => {
  const Graph = Component.Graph({
    localGraph: {
      depth: 2,
      scale: 1.2,
      linkDistance: 45,
      fontSize: 0.75,
      opacityScale: 1.15,
      showTags: true,
    },
    globalGraph: {
      depth: -1,
      scale: 1.0,
    },
  })

  const GraphBanner = (props: QuartzComponentProps) => (
    <div class="banner-graph">
      <Graph {...props} />
    </div>
  )

  GraphBanner.css = `
    .banner-graph {
      width: min(1200px, 100%);
      margin: 0 auto 1.5rem auto;
    }
    .banner-graph .graph {
      padding: 0;
    }
    .banner-graph .graph > h3 {
      display: none;
    }
    .banner-graph .graph > .graph-outer {
      height: 420px;
      margin: 0;
      border-radius: 10px;
    }
    @media (max-width: 768px) {
      .banner-graph .graph > .graph-outer {
        height: 320px;
      }
    }
  `

  return GraphBanner
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [HomeLink()],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/reinierkruisbrink",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    BannerGraph(),
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
  afterBody: [],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  afterBody: [],
  right: [],
}
