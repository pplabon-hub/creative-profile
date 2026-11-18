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
| Brick stamp | `#D34E35` | Brighter vermilion editorial emphasis and stamp ink |
| Field green | `#2F6B50` | Richer, deeper secondary ink and table chapter |
| Lapis accent | `#267B9A` | Stronger blue-green stamp and photo-spread accent |
| Ochre | `#C88C19` | Rich saffron paper backing and details |
| Soft paper | `#F5EBDD` | Photo borders and stamp interiors |
| Lapis accent | `#267B9A` | Noticeable but restrained blue-green stamp and photo-spread accent |
| Saffron accent | `#E4AE2D` | Warm marigold highlights and printed details |

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

### Photo treatment and identity
- The formal cream-suit mirror portrait and the outdoor blue-jacket portrait are original user-supplied photos, embedded in one balanced photo-spread SVG and rendered as part of a dedicated GIF.
- Preserve each photograph exactly apart from proportional export compression. No face generation, retouching, face reshaping or synthetic portrait replacement.
- Do not leave separate Markdown table cells with unequal intrinsic image heights. The dedicated photo spread embeds both original WebP files and crops them to equal-height frames without geometric distortion or face alteration.

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

### Accent restraint
The print palette remains dominant, but the pigments are more saturated: vermilion, blue-green and marigold. Keep them in clearly placed graphic bands, stamps and photo framing, not in gradients or glowing UI elements.
