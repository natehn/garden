import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/telescopic.inline"

const Telescopic: QuartzComponent = () => null
Telescopic.afterDOMLoaded = script

export default (() => Telescopic) satisfies QuartzComponentConstructor