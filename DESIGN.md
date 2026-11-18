# Postcards & Plates
## Art direction for the creative-profile travel journal

### The idea
This profile is a personal travel fieldbook, not a travel-agency landing page and not a tech portfolio with a map pasted on top. Its narrative has four chapters: **places, the table, reflections, and the curiosity brought back home**.

The design should feel like an independent travel magazine assembled from a real person's notebook: annotated photographs, imperfect stamp marks, paper edges, ticket fragments, hand-drawn lines, marginal notes and a confident editorial grid.

### The narrative sequence
1. **The cover:** a portrait and the premise: places, plates and perspective.
2. **The passport pages:** seven country names shown as a loose collection, explicitly not a dated or chronological route.
3. **The table:** a hand-drawn setting and a short personal note about being a food lover.
4. **The reflections:** what travel leaves behind, expressed without inventing specific anecdotes.
5. **Back at the desk:** a quiet return to AI, technology, business and creative projects.

### Palette: ink, paper and travel ephemera
| Token | Hex | Purpose |
|---|---|---|
| Notebook paper | `#F1E7D7` | Main paper surface |
| Deep ink | `#26312C` | Primary text and print marks |
| Brick stamp | `#A84F3A` | Editorial emphasis and stamp ink |
| Field green | `#536D60` | Secondary ink and table chapter |
| Faded indigo | `#566C8A` | One of the archival stamp inks |
| Ochre | `#B38B4A` | Paper backing, ticket details and small marks |
| Soft paper | `#F5EBDD` | Photo borders and stamp interiors |

No neon, no gradient backgrounds, no blue-violet AI glow, no candy-colour blocks. Colour should resemble a small set of pigment inks printed on paper, not a preset AI palette.

### Typography
- **Display:** DM Serif Display for large editorial statements.
- **Condensed labels:** Barlow Condensed for stamp titles, chapter numbers and short emphasis.
- **Body:** DM Sans for natural, readable copy.
- **Handwritten marginalia:** Caveat, sparingly, as a human annotation rather than a decorative font everywhere.
- **Metadata:** IBM Plex Mono for file-like labels and small index text.

Keep the typography mixed but disciplined. Large serif phrases create the mood; body copy stays quiet; condensed stamps and monospaced details add the fieldbook character.

### Composition rules
- No repeated equal-width cards.
- No rows of pill badges.
- No generic icon grids or world-map stock graphic.
- No synthetic travel photography, invented destinations, dates, restaurants or anecdotes.
- Use the supplied original portraits only. Crops may change; identity and facial features must not.
- Country names are set as stamps with different sizes and rotations, not as flags or stereotypes.
- Use irregular alignment, fine rules, perforation marks, ruled paper, taped photo corners and hand-drawn annotation lines.
- Every important statement remains in Markdown outside the artwork for mobile accessibility and image fallbacks.

### Motion direction
- **Cover:** a hand-drawn route line traces in, then the title underline; the photo and stamp settle gently into place.
- **Passport pages:** stamps arrive one by one with slight differences in timing and rotation. No flashing, no fast zooms.
- **Table:** steam drifts slowly and a small ink annotation draws on. Keep the plate illustration still.
- **Reflections:** one quiet compass mark turns slowly while the paper stays calm.

Motion should feel like pages being made and annotated, not UI components animating on a dashboard. GIFs are used because GitHub profile READMEs cannot run custom JavaScript or page-level scroll animations.

### GitHub implementation
Static SVG panels are committed first so the complete design is immediately previewable. GitHub Actions converts them into optimized looping GIFs. Only after all renders finish does the workflow swap README references from SVG to GIF. The live `main` branch is not part of this preview process.
