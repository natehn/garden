import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="popover-hint">
      <h1><i>Ceci n'est pas une page.</i></h1>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
        <img 
          src="/static/tomeishi.png" 
          title="A fist-sized stone sits on the path, tied over crosswise with black-dyed hemp-palm rope. It is called a tomeishi, or barrier stone, and warns against taking the wrong path." 
          alt="A fist-sized stone sits on the path, tied over crosswise with black-dyed hemp-palm rope. It is called a tomeishi, or barrier stone, and warns against taking the wrong path."
          style={{ maxWidth: "200px", flexShrink: 0 }}
        />
        <div style={{ flex: 1 }}>
          <p>Whoops! There's an error: <code>HTTP 404: Page Not Found</code>. This page is private, changed names, changed locations, or doesn't exist.</p>
          <p> If you believe the page exists, use the search bar on the home page to find what you are looking for! </p>
          <p><a href={baseDir}>Click here to return home.</a></p>
        </div>
      </div>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
