

To add a theme variation:
1. Add the variables at the bottom of `/styles/variables.scss`
2. Add a reference to a [Lucide](https://lucide.dev/icons/) svg toward the bottom of `/components/Darkmode.tsx`, between `</svg>` of the last one and `</button>`, referencing `class="themeNameIcon"`
	1. Copy the title and aria attributes from the relevant dark or light mode svg
3. Edit to add the theme name at the top of `/components/scripts/darkmode.inline.ts`
4. Add text to bottom of `/components/styles/darkmode.scss`, copying those already there, but changing the `:root[theme-variant="themeName"]` and to show `.themeNameIcon` and **hide the others**

Current wishlist:
- style scrollbar
- make mobile title slightly smaller + fix weird styling (bg color) at top of mobile
- fix bug where "paths" turns back to "explorer" when looking at folder pages
- replace book icon with a finger-shush icon instead
- turning on comments (maybe - or maybe a guestbook is enough)
- make the footnotes header a bit smaller
- change the section breaks to be more interesting; maybe a more print-looking symbol
- try out mermaid diagrams
- build a link-rotator with random links to which the blazes can lead (links from are.na? nimble links?)