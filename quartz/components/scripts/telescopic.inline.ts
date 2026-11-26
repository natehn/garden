declare const createTelescopicTextFromBulletedList: (content: string, config?: any) => HTMLElement
declare const TextMode: any

let loading: Promise<void> | null = null

// Load the library only on pages that actually contain telescopic text
function loadLibrary(): Promise<void> {
  if (loading) return loading
  loading = new Promise((resolve, reject) => {
    const css = document.createElement("link")
    css.rel = "stylesheet"
    css.href = "/static/telescopic/index.css"
    css.setAttribute("spa-preserve", "")
    document.head.appendChild(css)

    const js = document.createElement("script")
    js.src = "/static/telescopic/index.js"
    js.setAttribute("spa-preserve", "")
    js.onload = () => resolve()
    js.onerror = reject
    document.head.appendChild(js)
  })
  return loading
}

// Turn a nested <ul> back into the "* item" format the library expects
function listToBullets(list: Element, depth = 0): string {
  let out = ""
  for (const li of Array.from(list.children)) {
    if (li.tagName !== "LI") continue
    const clone = li.cloneNode(true) as HTMLElement
    clone.querySelectorAll("ul, ol").forEach((n) => n.remove())
    const html = clone.innerHTML.replace(/\s+/g, " ").trim()
    out += "  ".repeat(depth) + "* " + html + "\n"
    for (const sub of Array.from(li.children)) {
      if (sub.tagName === "UL" || sub.tagName === "OL") out += listToBullets(sub, depth + 1)
    }
  }
  return out
}

document.addEventListener("nav", async () => {
  const blocks = document.querySelectorAll<HTMLElement>('.callout[data-callout="telescopic"]')
  if (blocks.length === 0) return

  try {
    await loadLibrary()
  } catch {
    return // library failed to load: leave the plain callout in place
  }

  blocks.forEach((block) => {
    const list = block.querySelector(".callout-content > ul, .callout-content > ol")
    if (!list) return
    const node = createTelescopicTextFromBulletedList(listToBullets(list), {
      textMode: TextMode.Html,
    })
    const wrapper = document.createElement("div")
    wrapper.className = "telescopic-wrapper"
    wrapper.appendChild(node)
    block.replaceWith(wrapper)
  })
})