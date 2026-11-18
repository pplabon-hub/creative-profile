# Madder Index
## Visual system for the creative-profile preview

### Purpose
A personal GitHub profile presented as a living field journal. It should feel authored, tactile and curious rather than like a corporate résumé, a SaaS dashboard or a pre-built developer template.

### Creative thesis
**Madder Index** combines independent print-editorial design with the quiet precision of an archival specimen library. The base feels like warm paper. Ink carries the hierarchy. Madder red and lichen green act as deliberate marks. Smoked-lilac glass is used as a physical layer for image plates and selected content, never as generic card decoration.

This is a new visual world. It does not inherit the DAWAN navy, petrol, cyan or champagne palette.

### Palette
| Token | Hex | Use |
|---|---|---|
| Carbon Violet | `#211D24` | Primary ink and dark surfaces |
| Vellum | `#F0EADF` | Main paper field |
| Madder | `#B64F3D` | Signature accent and editorial marks |
| Lichen | `#8C997A` | Secondary accent |
| Smoked Lilac | `#AAA0AE` | Glass tint and quiet contrast |
| Aged Copper | `#A97E61` | Fine rules and small details |

No neon cyan/purple gradient, generic blue-violet AI gradient, gradient headline text or glow-heavy backgrounds.

### Typography
- **Display:** Fraunces, expressive variable serif for large headlines and short statements.
- **Body:** Manrope, clear contemporary sans-serif for readable copy.
- **Index / metadata:** IBM Plex Mono, used only for labels, paths and small annotations.

Typography is the main expressive tool. Avoid default system-sans hero headings, faux-tech monospace paragraphs and excessive all-caps.

### Layout grammar
- Asymmetric editorial compositions, not repeated equal-sized cards.
- Strong margins, calm paper space and precise alignment.
- Hairline rules, crop marks, index labels and carefully placed annotations.
- Large visual plates alternate with readable Markdown text.
- Every essential idea remains available as ordinary text for mobile and image-load failures.

### Glass treatment
Glass is a material, not a theme. Use a small number of smoked-lilac translucent panes with a fine pale edge, a soft inner highlight and a blurred colour field behind them. Reserve it for the portrait plate and one or two intentional overlays. Never stack glass cards or blur every section.

### Motion grammar
- Hero: staggered typographic reveal, a single line drawing across the composition, and restrained movement in the glass portrait plate.
- Curiosity panel: short label reveals and a slow registration-line pass.
- Closing panel: one quiet moving accent that guides the eye to the repository link.
- Use looping GIF exports for GitHub compatibility. Keep motion slow, low-amplitude and legible; do not scatter identical entrance animations across every element.

### Image direction
The portrait position is reserved for an original photo supplied by the user. Do not generate a synthetic face, use stock photography or alter the person's identity. When the photo arrives, preserve the original facial features and choose a crop and tonal treatment that belongs to this visual system.

### GitHub constraints
A Profile README is not a normal website runtime. It cannot provide custom page CSS, JavaScript interactions, WebGL, scroll-triggered animation or user-controlled smooth scrolling. The profile uses Markdown and self-contained SVG artwork, with GitHub Actions rendering selected motion SVGs to optimized GIFs. Smoothness refers to the authored motion inside those assets, not custom page scrolling.

The design must remain readable on mobile. GIFs are decorative storytelling panels; the meaning and links are repeated in Markdown. The GitHub-native contribution graph and activity timeline are left to GitHub.
