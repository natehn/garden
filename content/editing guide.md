---
publish: "false"
---
### General tips

- `![](link)` for embedding videos
- `![[]]` for photos that are in the files area
- `index` file in a folder adds text to folder page, and then you need to add a `title` attribute (make sure to set `publish` to `true` or else it messes things up)
- Add a (case-sensitive) index for each tag desired in the `tags` folder in this vault

### Easter eggs and hidden pages

- Use the `hidden` tag for things that will be eggs
- Update anniversary easter egg links at `egg-links.ts` in the main `quartz` folder
### Telescopic text (i.e., “verses” poems)

- Use `[!telescopic]` callout type, no title and put the whole thing in a quote block
- Indent to make children
- Only link on the last line, otherwise the highlighting is confused between links and telescoping
- Add the `telescopic` tag!