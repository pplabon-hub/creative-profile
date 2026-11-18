# Postcards & Plates
## Motion-led art direction for the creative-profile travel journal

### Core idea
A personal travel fieldbook with a clear narrative: **places → the table → reflection → what comes home**. It should feel like an independent travel magazine with real photographs, inked passport marks, paper edges, annotated notes and typography that behaves like a designed sequence.

This is not a travel-agency page, a portfolio dashboard or an animated template. Every section gets its own visual rhythm and type choreography.

### Palette: print ink on warm stock
| Token | Hex | Purpose |
|---|---|---|
| Notebook paper | `#F1E7D7` | Main paper surface |
| Deep ink | `#26312C` | Primary text and print marks |
| Brick stamp | `#A84F3A` | Editorial emphasis and stamp ink |
| Field green | `#536D60` | Secondary ink and table chapter |
| Faded indigo | `#566C8A` | Archival stamp ink |
| Ochre | `#B38B4A` | Paper backing and small details |
| Soft paper | `#F5EBDD` | Photo borders and stamp interiors |

Avoid neon, gradients, electric blue-violet glow, candy blocks and one-colour-everywhere styling. Colour is treated like a small set of pigment inks on physical paper.

### Type system
- **DM Serif Display:** literary display headlines, used with restraint.
- **Barlow Condensed:** passport stamps, chapter labels and large all-caps typography.
- **DM Sans:** clear body copy.
- **Caveat:** handwritten margin notes, not general UI text.
- **IBM Plex Mono:** chapter index and small metadata.

### Section-by-section typography choreography
1. **Cover / Places, plates & perspective:** the chapter label tracks in, “Places,” rises into view, italic “plates &” slides from the margin, then “PERSPECTIVE.” lands in condensed capitals. The route line traces first; supporting copy is wiped on after the headline.
2. **Passport / Seven stamps:** headline expands from loose tracking to tight editorial spacing. Each country stamp enters at a different beat and settles into its own angle. Country labels tighten their tracking as each stamp arrives. This is a collected set, not an invented travel chronology.
3. **The table / Another map:** the first phrase enters with a soft vertical lift; italic second line moves in from the left. A hand-drawn underline follows. Body copy is revealed with a paper-mask wipe; the Caveat annotation writes on after it. Steam moves slowly and independently.
4. **Reflections / What I bring back:** serif display line settles vertically, “back.” arrives in handwritten type, then the paragraph is uncovered in ruled lines. The compass turns very slowly as a quiet secondary motion.
5. **Homecoming / The journey keeps working:** condensed capitals enter from the margin, italic serif line rises, and the notebook entries appear one by one in three different type voices. The page illustration stays still so typography remains the lead actor.

### Motion principles
- The motion explains reading order. It is not decoration applied to every object.
- Each panel has its own entrance pattern, pace and pause.
- Use small travel-paper imperfections, not generic motion presets.
- No flashing, rapid zooms, bouncing UI cards or identical fade-ups on all sections.
- Loops hold on a finished composition long enough to read.

### Deterministic GIF rendering
The build waits for web fonts, pauses SVG animation time, then samples each SVG at exact timeline intervals. This prevents the first moments of typography choreography being skipped while external fonts load. GIFs use 8 fps and a short editorial loop, with static SVG sources retained as accessible fallbacks.

### GitHub constraints
GitHub Profile README does not support custom JavaScript, scroll-triggered page animation, WebGL or user-controlled smooth scrolling. The motion is authored in SVG and exported to GIF for reliable inline playback. The `main` branch remains untouched; preview changes are isolated to `design/creative-preview`.
