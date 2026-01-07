

To add a theme variation:
1. Add the variables at the bottom of `/styles/variables.scss`
2. Add a reference to a [Lucide](https://lucide.dev/icons/) svg toward the bottom of `/components/Darkmode.tsx`, between `</svg>` of the last one and `</button>`, referencing `class="themeNameIcon"`
	1. Copy the title and aria attributes from the relevant dark or light mode svg
3. Edit to add the theme name at the top of `/components/scripts/darkmode.inline.ts`
4. Add text to bottom of `/components/styles/darkmode.scss`, copying those already there, but changing the `:root[theme-variant="themeName"]` and to show `.themeNameIcon` and **hide the others**

Also, make a new blaze for each. Will need to ask for help on making it change with each.