// @ts-ignore
import clipboardScript from "./scripts/clipboard.inline"
import clipboardStyle from "./styles/clipboard.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
return (
    <div id="quartz-body">
      {children}
      <img
  src="/blaze-light.png"
  alt="Three blaze marks denoting the end of this path."
  className="blaze blaze-light"
/>
<img
  src="/blaze-dark.png"
  alt="Three blaze marks denoting the end of this path."
  className="blaze blaze-dark"
/>
    </div>
  )
}

Body.afterDOMLoaded = clipboardScript
Body.css = clipboardStyle

export default (() => Body) satisfies QuartzComponentConstructor
