/* COMPOSITOR NODEGROUPS
   Auto-generated split from index.html — each nodegroup here belongs to this
   category/subcategory. Add a new nodegroup by pushing another object into
   this array; no need to touch index.html or app.js. */
window.NODEGROUPS.push(
  {
    id: "retro-bloom",
    category: "compositor",
    name: "Retro Bloom",
    tagline: "Cel-exposed bloom aesthetic",
    description: "Adds a bloom effect to your scene or image with a retro aesthetic, representing how light would be exposed on a cel.",
    images: {
      preview: "images/compositor/retro-bloom-node.webp"
    },
    inputs: [
      { name:"Image", type:"image", desc:"The source image or render to bloom." },
      { name:"Blend", type:"value", desc:"Works like an opacity slider, controlling the strength of the bloom effect." },
      { name:"Multiply", type:"value", desc:"Controls the strength of the bloom." },
      { name:"Add", type:"value", desc:"Adds extra strength on top of your original bloom." },
      { name:"Falloff", type:"value", desc:"Controls the curve shape of the bloom." },
      { name:"Brightness", type:"value", desc:"Offset the exposure of the bloom." },
      { name:"Bloom Color", type:"color", desc:"Changes the color of the bloom." }
    ],
    outputs: [
      { name:"Image", type:"image", desc:"The source image with the retro bloom effect applied." }
    ],
    note: "This nodegroup also exposes an Advanced sub-panel for finer control. Expand it in the node itself; the sockets above cover the top-level controls most users will touch."
  },
  {
    id: "ntsc-filter",
    category: "compositor",
    name: "Full NTSC V0_5",
    tagline: "Analog broadcast signal degradation",
    description: "Reproduces the look of a composite NTSC video signal — chroma bleed, luma smear, reduced scanline resolution, aperture blur, and white-balance drift — by resampling the image, running it through an encode/degrade/decode pass, and recompositing. Covers everything from a light broadcast pass to a fully worn-out VHS capture.",
    images: {
      preview: "images/compositor/ntsc-filter-node.webp"
    },
    inputs: [
      { name:"Image", type:"image", desc:"The source image or render to degrade. Connect any render layer, image, or upstream compositor output here." },
      { name:"SuperSample Scale", type:"value", default:"1.000", desc:"Oversampling factor applied before the signal simulation runs. Higher values reduce aliasing in the generated scanline and chroma-bleed artifacts at the cost of render time; lower values give a rawer, more aliased look that reads as lower quality capture hardware." },
      { name:"Interlace Processing", type:"value", default:"off", desc:"Toggles simulated interlaced fields (odd/even scanline separation) instead of a progressive frame, for the combing/ghosting look typical of interlaced broadcast and tape playback." },
      { name:"Exposure", type:"value", default:"0.000", desc:"Exposure offset applied during the Preprocess stage, before the signal degradation runs — lets you correct brightness going into the filter rather than after." },
      { name:"View Transform", type:"value", default:"Custom", desc:"Selects the tone-mapping curve used going into the filter — Custom, Standard, Filmic, or AgX — matching whichever view transform the rest of the scene is using." },
      { name:"Bokeh Size", type:"value", default:"0", desc:"Size of the bokeh shape used by the Aperture Blur pass, part of the Bokeh Settings group." },
      { name:"Bokeh Strength", type:"value", default:"0.500", desc:"Blend strength of the bokeh-based aperture blur, simulating a lens/capture device with imperfect focus." },
      { name:"Aperture Blur", type:"vector", default:"0.100 / 0.100", desc:"Two-axis blur amount simulating the softness introduced by the capture lens or aperture, applied independently on each axis." },
      { name:"Pre White Balance Factor", type:"value", default:"0.650", desc:"Blend factor for the Pre White Balance stage — how strongly the Temperature/Tint shift below is mixed in before the signal is degraded." },
      { name:"Temperature", type:"value", default:"9300 K", desc:"White balance temperature applied in the Pre White Balance pass, simulating a broadcast camera or tape deck's color calibration drift." },
      { name:"Tint", type:"value", default:"-6.000", desc:"Green/magenta tint offset applied alongside Temperature in the Pre White Balance pass." }
    ],
    outputs: [
      { name:"Image", type:"image", desc:"The processed image with all NTSC artifacts applied, ready to plug into further compositing or the final output." }
    ],
    note: "This nodegroup also exposes deeper sub-panels — Output, Encode, Degradation, Decode, PostProcess, Opacity, and Developer Internal Settings — for finer control. Expand each in the node itself; the sockets above cover the top-level controls most users will touch."
  },
  {
    id: "halation",
    category: "compositor",
    name: "Halation",
    tagline: "Bright-highlight halo bloom",
    description: "TEMPLATE — replace with final description. Simulates halation: the soft red-orange halo that blooms around bright highlights on film stock, caused by light scattering back through the film base and re-exposing the emulsion.",
    inputs: [
      { name:"Image", type:"image", desc:"TEMPLATE — the source image or render to process." },
      { name:"Threshold", type:"value", desc:"TEMPLATE — brightness level above which highlights start producing halation." },
      { name:"Intensity", type:"value", desc:"TEMPLATE — strength of the halation glow." },
      { name:"Size", type:"value", desc:"TEMPLATE — radius of the halo spreading out from bright highlights." },
      { name:"Tint", type:"color", desc:"TEMPLATE — color of the halation glow, typically a warm red-orange." }
    ],
    outputs: [
      { name:"Image", type:"image", desc:"TEMPLATE — the processed image with halation applied." }
    ],
    note: "Placeholder entry — swap in the real slider names, defaults, and a node preview screenshot once this nodegroup is finalized."
  },
  {
    id: "color-vignette",
    category: "compositor",
    name: "Color Vignette",
    tagline: "Tinted edge darkening",
    description: "TEMPLATE — replace with final description. Darkens and/or tints the edges of the frame, drawing the eye toward the center of the image.",
    inputs: [
      { name:"Image", type:"image", desc:"TEMPLATE — the source image or render to process." },
      { name:"Amount", type:"value", desc:"TEMPLATE — overall strength of the vignette effect." },
      { name:"Roundness", type:"value", desc:"TEMPLATE — how circular vs. rectangular the vignette shape is." },
      { name:"Feather", type:"value", desc:"TEMPLATE — softness of the transition between the vignette and the untouched center." },
      { name:"Color", type:"color", desc:"TEMPLATE — tint color applied at the vignette edges." }
    ],
    outputs: [
      { name:"Image", type:"image", desc:"TEMPLATE — the processed image with the vignette applied." }
    ],
    note: "Placeholder entry — swap in the real slider names, defaults, and a node preview screenshot once this nodegroup is finalized."
  },
  {
    id: "color-grading",
    category: "compositor",
    name: "Color Grading",
    tagline: "Lift / gamma / gain style grade",
    description: "TEMPLATE — replace with final description. A general-purpose color grading stack for shifting the overall look of the image across shadows, midtones, and highlights.",
    inputs: [
      { name:"Image", type:"image", desc:"TEMPLATE — the source image or render to process." },
      { name:"Lift", type:"color", desc:"TEMPLATE — shifts the shadow/black point of the image." },
      { name:"Gamma", type:"color", desc:"TEMPLATE — shifts the midtones of the image." },
      { name:"Gain", type:"color", desc:"TEMPLATE — shifts the highlight/white point of the image." },
      { name:"Saturation", type:"value", desc:"TEMPLATE — overall color saturation of the graded image." },
      { name:"Contrast", type:"value", desc:"TEMPLATE — overall contrast of the graded image." }
    ],
    outputs: [
      { name:"Image", type:"image", desc:"TEMPLATE — the graded output image." }
    ],
    note: "Placeholder entry — swap in the real slider names, defaults, and a node preview screenshot once this nodegroup is finalized."
  },
  {
    id: "tonemapper-stack",
    category: "compositor",
    name: "Tonemapper Stack",
    tagline: "Stacked highlight/shadow tone mapping",
    description: "TEMPLATE — replace with final description. Compresses the dynamic range of the image through a stack of tone-mapping operators, rolling off blown highlights and crushed shadows.",
    inputs: [
      { name:"Image", type:"image", desc:"TEMPLATE — the source image or render to process." },
      { name:"Exposure", type:"value", desc:"TEMPLATE — exposure offset applied before tone mapping." },
      { name:"Highlights", type:"value", desc:"TEMPLATE — controls how aggressively bright highlights are rolled off." },
      { name:"Shadows", type:"value", desc:"TEMPLATE — controls how aggressively dark shadows are lifted or crushed." },
      { name:"Mix", type:"value", desc:"TEMPLATE — blend factor between the original and tone-mapped image." }
    ],
    outputs: [
      { name:"Image", type:"image", desc:"TEMPLATE — the tone-mapped output image." }
    ],
    note: "Placeholder entry — swap in the real slider names, defaults, and a node preview screenshot once this nodegroup is finalized."
  },
  {
    id: "film-specks",
    category: "compositor",
    name: "Film Specks",
    tagline: "Dust and speck overlay",
    description: "TEMPLATE — replace with final description. Overlays small dust specks and debris on the image, simulating dirt on the film gate or a scanned print.",
    inputs: [
      { name:"Image", type:"image", desc:"TEMPLATE — the source image or render to process." },
      { name:"Density", type:"value", desc:"TEMPLATE — how many specks appear per frame." },
      { name:"Size", type:"value", desc:"TEMPLATE — size of individual specks." },
      { name:"Opacity", type:"value", desc:"TEMPLATE — how visible the specks are against the image." },
      { name:"Seed", type:"value", desc:"TEMPLATE — randomization seed controlling speck placement." }
    ],
    outputs: [
      { name:"Image", type:"image", desc:"TEMPLATE — the processed image with specks overlaid." }
    ],
    note: "Placeholder entry — swap in the real slider names, defaults, and a node preview screenshot once this nodegroup is finalized."
  },
  {
    id: "basic-film-damage",
    category: "compositor",
    name: "Basic Film Damage",
    tagline: "Scratches, flicker, and wear",
    description: "TEMPLATE — replace with final description. Adds simple film-damage artifacts — vertical scratches, brightness flicker, and dust — for a worn print look.",
    inputs: [
      { name:"Image", type:"image", desc:"TEMPLATE — the source image or render to process." },
      { name:"Scratch Amount", type:"value", desc:"TEMPLATE — density and visibility of vertical scratches." },
      { name:"Flicker", type:"value", desc:"TEMPLATE — amount of frame-to-frame brightness flicker." },
      { name:"Dust Amount", type:"value", desc:"TEMPLATE — density of dust/debris overlaid on the image." },
      { name:"Seed", type:"value", desc:"TEMPLATE — randomization seed controlling damage placement." }
    ],
    outputs: [
      { name:"Image", type:"image", desc:"TEMPLATE — the processed image with damage applied." }
    ],
    note: "Placeholder entry — swap in the real slider names, defaults, and a node preview screenshot once this nodegroup is finalized."
  },
  {
    id: "compensate-view",
    category: "compositor",
    name: "Compensate View",
    tagline: "View-transform compensation utility",
    description: "TEMPLATE — replace with final description. A utility nodegroup that compensates for the scene's active view transform, so filters further down the stack see consistent values regardless of whether Standard, Filmic, or AgX is active.",
    inputs: [
      { name:"Image", type:"image", desc:"TEMPLATE — the source image or render to process." },
      { name:"View Transform", type:"value", desc:"TEMPLATE — which view transform to compensate for (Standard / Filmic / AgX)." },
      { name:"Direction", type:"value", desc:"TEMPLATE — whether to convert into or out of the compensated space." }
    ],
    outputs: [
      { name:"Image", type:"image", desc:"TEMPLATE — the compensated output image." }
    ],
    note: "Placeholder entry — swap in the real slider names, defaults, and a node preview screenshot once this nodegroup is finalized."
  }
);
