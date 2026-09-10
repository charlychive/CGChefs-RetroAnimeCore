/* SHADER NODES — Core
   Auto-generated split from index.html — each nodegroup here belongs to this
   category/subcategory. Add a new nodegroup by pushing another object into
   this array; no need to touch index.html or app.js. */
window.NODEGROUPS.push(
  {
    id: "smart-bevel",
    category: "shader",
    sub: "core",
    name: "Smart Bevel SN (Shader Nodes)",
    tagline: "Fully customizable procedural bevel and edge-wear normal generator.",
    description: "Simulates realistic chamfers, corner rounding's, procedurally varied edges, and surface damage across both EEVEE and Cycles while keeping the mesh editable.",
    images: {
      preview: "images/shaders/smart-bevel-node.webp"
    },
    inputs: [
      {
        label: "Basic Bevel Control",
        fields: [
          { name:"Width", type:"value", desc:"Sets the overall size and extent of the bevel along model edges." },
          { name:"Hardness", type:"value", desc:"Controls the shading falloff gradient across the bevel width, moving from a soft curve to a sharp profile." },
          { name:"Corner Rounding", type:"value", desc:"Blends sharp geometric corner junctions into rounded spherical intersections." },
          { name:"Taper Factor", type:"value", desc:"Pinches the bevel width toward the ends of an edge." },
          { name:"Taper Shape", type:"value", desc:"Adjusts the curve profile of the taper along the edge length." },
          { name:"Bevel Weight Effect Scale", type:"value", desc:"Multiplies how vertex or edge bevel weights influence the generated effect size. (Manually add Bevel Weights to use it)" },
          { name:"Corner Shape", type:"value", desc:"Controls the profile shape specifically at corner apexes." }
        ]
      },
      {
        label: "Texture Settings",
        fields: [
          { name:"Off", type:"value", desc:"No Texture." },
          { name:"Texture", type:"value", desc:"Choose between Noise and Closure type." }
        ],
        subpanels: [
          {
            label: "Noise Settings",
            fields: [
              { name:"Scale", type:"value", desc:"Sets the global frequency and size of the noise pattern applied to the edge." },
              { name:"Detail", type:"value", desc:"Controls the number of octave passes to add fine micro-breakups to the edge boundaries." },
              { name:"Roughness", type:"value", desc:"Multiplies the contrast and sharpness between noise octaves." },
              { name:"Distortion", type:"value", desc:"Warps the noise mapping to create swirled or organic edge breakups." }
            ]
          },
          {
            label: "Closure Settings",
            fields: [
              { name:"Closure", type:"value", desc:"Use a texture closure node as the input (can be reused elsewhere in the material to save memory and shader calculation)." }
            ]
          },
          {
            label: "Width Variation",
            fields: [
              { name:"Strength", type:"value", desc:"Sets the total influence of noise over edge width and hardness." },
              { name:"Threshold", type:"value", desc:"Sets the cutoff point where edge variations begin to be visible into the bevel profile." },
              { name:"Smoothness", type:"value", desc:"Softens the transitions between varied width/hardness sections." },
              { name:"Shape", type:"value", desc:"Changes the curve of the hardness profile." }
            ]
          },
          {
            label: "Masking",
            fields: [
              { name:"Strength", type:"value", desc:"Master intensity for the edge variation and wear masking." },
              { name:"Threshold", type:"value", desc:"Clamps the noise to isolate wear into distinct sections." },
              { name:"Smoothness", type:"value", desc:"Softens the falloff boundaries of the generated wear mask." },
              { name:"Midlevel", type:"value", desc:"Sets the pivot point for the mask contrast." }
            ]
          }
        ]
      },
      {
        label: "Chips Settings",
        fields: [
          { name:"Off", type:"value", desc:"No Chips." },
          { name:"Chips", type:"value", desc:"Add Chips (Edge Damage)." },
          { name:"Scale", type:"value", desc:"Controls the overall physical size of individual chip indentations." },
          { name:"Width / Width Random", type:"value", desc:"Sets the base width of chip gouges along the edge and adds random size variation." },
          { name:"Length / Length Random", type:"value", desc:"Sets how far chips bite along the edge axis and introduces length randomness." },
          { name:"Normal Depth", type:"value", desc:"Controls the perceived visual depth indentation of the chip normal map." },
          { name:"Edge Sharpness", type:"value", desc:"Sharpens or dulls the internal bevel slope inside individual chip gouges." }
        ],
        subpanels: [
          {
            label: "Chips Distribution",
            fields: [
              { name:"Chip Probability", type:"value", desc:"Controls the frequency and density of chip occurrences along the mesh edges." },
              { name:"Points (1 / 2)", type:"value", desc:"Toggles the seed point distribution for single or multi-point chip clusters." },
              { name:"Randomness", type:"value", desc:"Scatters the placement positions of chip gouges along the edge." }
            ],
            subpanels: [
              {
                label: "Points 2 Settings",
                fields: [
                  { name:"Points Random Size", type:"value", desc:"Randomizes point distribution and sizes." },
                  { name:"2nd Points Offset", type:"value", desc:"Offset the 2nd points according to the main points." }
                ]
              }
            ]
          }
        ]
      },
      {
        label: "Mapping Settings",
        subpanels: [
          {
            label: "Mapping Mode (2D Triplanar / 3D Position / UV)",
            desc: "Selects coordinate space mapping to project procedural noise across surfaces.",
            fields: [
              { name:"Stretch Across Edge", type:"value", desc:"Re-orientates procedural noise features along the edge flow direction." },
              { name:"Blend Amount", type:"value", desc:"Softens seams where Triplanar projection planes meet." },
              { name:"UV Mode Behavior", type:"value", desc:"UV Mapping mode adds a UV input for manual control over the projection." }
            ]
          },
          {
            label: "Object Transforms",
            fields: [
              { name:"Location / Rotation / Scale (Toggles)", type:"value", desc:"Locks the noise mapping for world-space stability per transform." }
            ]
          }
        ]
      },
      {
        label: "Advanced Mapping",
        fields: [
          { name:"Nudge Rotation", type:"value", desc:"Enables slight coordinate rotational offsets to break up repetition." },
          { name:"Nudge Factor", type:"value", desc:"Controls the strength of the rotational coordinate offset." }
        ],
        subpanels: [
          {
            label: "Repeat Fix",
            desc: "Prevents repeating tiling artifacts across large procedural surfaces.",
            fields: [
              { name:"Segment Size", type:"value", desc:"Defines the coordinate stepping segment length along edges." },
              { name:"Dither Amount", type:"value", desc:"Injects subtle jitter to eliminate banding along procedural gradients." },
              { name:"Offset Scale", type:"value", desc:"Scales internal coordinate offset vectors." }
            ]
          }
        ]
      }
    ],
    outputs: [
      { name:"Bevel Normal", type:"vector", desc:"Main modified normal map output to plug into your shader's or node's Normal input." },
      { name:"Bevel Mask", type:"value", desc:"Grayscale mask isolating the full bevel area for masking and visualization purposes." },
      { name:"Clean SDF", type:"value", desc:"Signed distance field representing the pristine, un-damaged bevel geometry." },
      { name:"Rounded Corner SDF", type:"value", desc:"Signed distance field isolating spherical corner blends." },
      { name:"Convex SDF", type:"value", desc:"Mask targeting outer convex edge gradients." },
      { name:"Concave SDF", type:"value", desc:"Mask targeting inner crevice gradients." },
      { name:"Chip Mask", type:"value", desc:"Grayscale mask isolating only the procedural chip gouges." },
      { name:"Packed Data", type:"color", desc:"Bundle of the previously mentioned outputs, packed together so they can be used elsewhere more efficiently." },
      { name:"UVs", type:"vector", desc:"Passes the Mapping UV channel through." },
      { name:"Extra Data", type:"color", desc:"Auxiliary output providing extended mask channels for advanced custom shading setups (separate bundle for visualization)." },
      { name:"Extra Data Mapping", type:"vector", desc:"Auxiliary output providing secondary coordinate mapping for advanced custom shading setups (separate bundle for visualization)." }
    ]
  }
);
