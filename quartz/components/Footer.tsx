import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"
import { specialDays, randomLinks, arenaEndpoint } from "../../egg-links"

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
          </a> | <a href="mailto:nathan@hew.tt" target='_blank' rel="me">✉</a> | <a href="https://store.hew.tt/" target='_blank' rel="me">☕</a> | <a href="https://hew-tt.atabook.org" target='_blank'>✍️</a> | <a id="egg-link" href="/Hidden/Egg">🥚</a> | © {year} Nathan Hewitt (made with <a href="https://quartz.jzhao.xyz" target='_blank'>Quartz</a>) 
        </p> 
        </div>
      </footer>
    )
  }

  Footer.css = style

      Footer.afterDOMLoaded = `
document.addEventListener("nav", async () => {
  const specialDays = ${JSON.stringify(specialDays)}
  const fallbackLinks = ${JSON.stringify(randomLinks)}
  const endpoint = ${JSON.stringify(arenaEndpoint)}

  const egg = document.getElementById("egg-link")
  if (!egg) return

  const now = new Date()
  const key =
    String(now.getMonth() + 1).padStart(2, "0") + "-" + String(now.getDate()).padStart(2, "0")

  let url = specialDays[key]
  if (!url) {
    let links = []
    try {
      const cached = sessionStorage.getItem("egg-links")
      if (cached) {
        links = JSON.parse(cached)
      } else {
        const res = await fetch(endpoint)
        if (res.ok) {
          const json = await res.json()
          const items = Array.isArray(json) ? json : (json.data ?? json.contents ?? [])
          links = items.map((b) => (typeof b === "string" ? b : b?.source?.url)).filter(Boolean)
          if (links.length) sessionStorage.setItem("egg-links", JSON.stringify(links))
        }
      }
    } catch {}
    if (links.length === 0) links = fallbackLinks
    url = links[Math.floor(Math.random() * links.length)]
  }
  if (!url) return

  const target = new URL(url, window.location.origin)
  const isOwnSite =
    target.origin === window.location.origin || target.hostname === "fragments.hew.tt"

  if (isOwnSite) {
    egg.href = target.pathname + target.search + target.hash
    egg.removeAttribute("target")
    egg.removeAttribute("rel")
  } else {
    egg.href = url
    egg.target = "_blank"
    egg.rel = "noopener noreferrer"
  }
})
`

  return Footer
}) satisfies QuartzComponentConstructor
