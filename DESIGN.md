# Electric Field
## Visual system for the creative-profile preview

### Purpose
A personal GitHub profile that feels like a small creative studio journal: expressive, colourful, human and a little unexpected. It should not resemble a generic AI portfolio, corporate résumé, SaaS dashboard or developer template.

### Creative thesis
**Electric Field** is a chromatic editorial system. Warm paper gives the composition breathing room, while electric violet, tangerine coral, citrus lime and pool teal create rhythm and personality. Colour is used as structure: separate ideas get their own colour and typographic voice rather than being squeezed into one brand tint.

The visual references supplied by the user informed the bold scale, typographic contrast and poster-like confidence. The profile does not reproduce their wording, logos or watermarks.

### Palette
| Token | Hex | Use |
|---|---|---|
| Ink | `#1B2032` | Main text and dark workbench |
| Warm Paper | `#F7F0E5` | Editorial canvas and breathing space |
| Electric Violet | `#5E5AE8` | High-energy panels, accents and graphic fields |
| Tangerine Coral | `#FF704F` | Signature emphasis and strong transitions |
| Citrus Lime | `#D9F45C` | Contrast blocks, labels and highlight type |
| Pool Teal | `#45CDBD` | Counterpoint, small shapes and motion details |

Avoid monotone layouts, default blue-violet AI gradients, overused neon glows and applying one colour to every section. The palette should feel vivid but remain readable.

### Typography
- **Oversized display:** Bricolage Grotesque, bold and playful for short statements.
- **Editorial contrast:** Instrument Serif, especially italic, for expressive phrases.
- **Contemporary support:** Space Grotesk for readable short-form copy.
- **Index / metadata:** IBM Plex Mono for labels, numbering and tiny annotations.
- **Handwritten accent:** Caveat for a small number of human, informal notes.

Typography is a design element, not just a content container. Mix weights, widths, serif and sans-serif, but keep body text simple and legible.

### Layout grammar
- Asymmetric poster-like compositions with bold colour blocks and purposeful empty space.
- Strong oversized headlines balanced by small index labels and concise supporting copy.
- Each panel has a different composition and a distinct colour role.
- Use photography as part of the layout, not as repeated profile-card decoration.
- Avoid repetitive equal-sized cards, excessive rounded glass panels and long paragraphs inside artwork.

### Motion grammar
- **Hero:** staggered kinetic type, a softly changing colour field, moving marquee and a framed original portrait.
- **Curiosity panel:** four differently coloured subject blocks with staggered entrances and small micro-motions.
- **Workbench:** floating experiment cards, a portrait plate and small orbiting graphic marks.
- **Closing panel:** oversized type reveals and a rotating directional mark.

Export the artwork as optimized looping GIFs for GitHub compatibility. Motion should have rhythm and variation, not identical entrances on every section. Keep movement readable and avoid flashing or fast strobing.

### Image direction
Use original photographs supplied by the user. The new hero uses the formal portrait in the warm, ornate interior; the workbench uses the full-length cream-suit portrait. Preserve identity and facial features. The photos are cropped for composition but not transformed into synthetic portraits.

### GitHub constraints
A Profile README is not a normal website runtime. It cannot provide custom page CSS, JavaScript interactions, WebGL, scroll-triggered animation or user-controlled smooth scrolling. Motion is authored inside SVG panels and rendered to optimized GIFs through GitHub Actions.

Static SVG versions remain in the repository as readable preview fallbacks. Once all GIF renders complete, the workflow switches the README image references to the animated versions. The key message and links remain ordinary Markdown so the profile still makes sense if an image fails to load.

The layout is designed to scale down for mobile. Motion is decorative storytelling, while the accompanying Markdown carries the meaning and links.
