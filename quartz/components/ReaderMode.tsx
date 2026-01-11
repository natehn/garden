// @ts-ignore
import readerModeScript from "./scripts/readermode.inline"
import styles from "./styles/readermode.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"

const ReaderMode: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
  return (
    <button class={classNames(displayClass, "readermode")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        class="readerIcon"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="0.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 66 66"
        aria-label={i18n(cfg.locale).components.readerMode.title}
      >
        <title>{i18n(cfg.locale).components.readerMode.title}</title>
        <g transform="translate(-1.8, -1.8) scale(1.15, 1.2)">
          <path d="m33.09 18.29c0-2.49-2.9-4.43-6.6-4.43s-6.61 1.94-6.61 4.43 2.9 4.42 6.61 4.42 6.6-1.94 6.6-4.42z"></path><path d="m16.4 30.54c-3.08 0-5.49 1.65-5.49 3.75s2.41 3.74 5.49 3.74 5.48-1.65 5.48-3.74-2.41-3.75-5.48-3.75z"></path><path d="m36.58 38.54c-3.08 0-5.49 1.65-5.49 3.75s2.41 3.74 5.49 3.74 5.48-1.65 5.48-3.74-2.41-3.75-5.48-3.75z"></path><path d="m54.52 13.86c-.21 0-.42.01-.63.04-1.3-2.13-3.61-3.47-6.1-3.47-1.62 0-3.15.57-4.39 1.55-4.21-3.21-9.38-4.98-14.67-4.98-13.53 0-24.54 11.21-24.54 25 0 5.05 1.44 9.84 4.19 13.97-2.5.52-4.38 2.77-4.38 5.46 0 3.07 2.46 5.57 5.48 5.57 1.12 0 2.21-.35 3.12-1 2.19 1.31 5.03 1.31 7.22 0 .92.65 2 1 3.12 1 .65 0 1.28-.12 1.86-.34 1.29.22 2.61.34 3.93.34 13.53 0 24.54-11.21 24.54-25 0-2.6-.41-5.14-1.17-7.58.74.38 1.57.58 2.42.58 3.02 0 5.48-2.5 5.48-5.57s-2.46-5.57-5.48-5.57zm-25.79 41.14c-.51 0-1.02-.03-1.53-.07.76-.96 1.22-2.17 1.22-3.5 0-3.07-2.46-5.57-5.48-5.57-.21 0-.42.01-.63.04-1.29-2.13-3.61-3.47-6.1-3.47-2.29 0-4.43 1.15-5.76 2.99-2.78-3.92-4.26-8.53-4.26-13.42 0-12.68 10.11-23 22.54-23 4.78 0 9.45 1.58 13.28 4.44-.11.15-.22.3-.32.46-.21-.03-.42-.04-.63-.04-3.02 0-5.48 2.5-5.48 5.57s2.46 5.57 5.48 5.57c1.12 0 2.2-.35 3.12-1 1.76 1.06 3.94 1.25 5.87.6.8 2.38 1.22 4.86 1.22 7.4 0 12.68-10.11 23-22.54 23z"></path>
        </g>
      </svg>
    </button>
  )
}

ReaderMode.beforeDOMLoaded = readerModeScript
ReaderMode.css = styles

export default (() => ReaderMode) satisfies QuartzComponentConstructor
