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
        <div>
        <p>
          <a href="https://hew.tt" target='_blank'>⌂</a> | <a href="https://webring.xxiivv.com/#icons" target="_blank" class="inline-icon">
            <img
              src="/static/xxiivv.gray.svg"
              alt="XXIIVV Webring"
              width="11.5"
              height="11.5"
            />
          </a> | <a href="mailto:nathan@hew.tt" target='_blank' rel="me">✉</a> | <a href="https://store.hew.tt/" target='_blank' rel="me">☕</a> | <a href="https://hew-tt.atabook.org" target='_blank'>Guestbook</a> | © {year} Nathan Hewitt (made with <a href="https://quartz.jzhao.xyz" target='_blank'>Quartz</a>) 
        </p> 
        </div>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
