import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <div class="footer-blaze">
          <img
          src="/static/blaze-light.png"
          alt="Three blazes denote the end of the path. Turn back? Or explore the unknown..."
          title="Three blazes denote the end of the path. Turn back? Or explore the unknown..."
          className="blaze blaze-light"
          />
          <img
          src="/static/blaze-dark.png"
          alt="Three blazes denote the end of the path. Turn back? Or explore the unknown..."
          title="Three blazes denote the end of the path. Turn back? Or explore the unknown..."
          className="blaze blaze-dark"
          />
        </div>
        <p>
          <a href="https://hew.tt">⌂</a> | © {year} Nathan Hewitt (made with <a href="https://quartz.jzhao.xyz">Quartz</a>)
        </p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
