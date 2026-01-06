// @ts-ignore
import clipboardScript from "./scripts/clipboard.inline"
import clipboardStyle from "./styles/clipboard.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
return (
    <div id="quartz-body">
      {children}
      <img
  src="/files/blaze-light.png"
  alt="Three blazes denote the end of the path. Turn back? Or explore the unknown..."
  title="Three blazes denote the end of the path. Turn back? Or explore the unknown..."
  className="blaze blaze-light"
/>
<img
  src="/files/blaze-dark.png"
  alt="Three blazes denote the end of the path. Turn back? Or explore the unknown..."
  title="Three blazes denote the end of the path. Turn back? Or explore the unknown..."
  className="blaze blaze-dark"
/>
    </div>
  )
}

Body.afterDOMLoaded = clipboardScript
Body.css = clipboardStyle

export default (() => Body) satisfies QuartzComponentConstructor
