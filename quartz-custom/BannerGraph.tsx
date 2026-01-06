import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import Graph from "./Graph"

interface Options {
  localGraph: {
    depth: number
    scale: number
    linkDistance: number
    fontSize: number
    opacityScale: number
    showTags: boolean
  }
  globalGraph: {
    depth: number
    scale: number
  }
}

const defaultOptions: Options = {
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
}

const BannerGraph: QuartzComponentConstructor<Partial<Options>> = (userOpts?: Partial<Options>) => {
  const opts = { ...defaultOptions, ...userOpts }
  const GraphComponent = Graph(opts)

  const Component: QuartzComponent = (props: QuartzComponentProps) => {
    return (
      <div class="banner-graph">
        <GraphComponent {...props} />
      </div>
    )
  }

  Component.css = `
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
    /* Hide banner graph in popover previews */
    .popover .banner-graph {
      display: none;
    }
  `

  Component.afterDOMLoaded = GraphComponent.afterDOMLoaded

  return Component
}

export default BannerGraph
