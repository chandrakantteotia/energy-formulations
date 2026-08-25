/**
 * Infrastructure Facilities & Lightbox Gallery Data
 * Asymmetrical editorial grid configuration with technical specs.
 */

export const INFRASTRUCTURE_MODULES = [
  {
    id: "production",
    title: "Commercial Production Cleanrooms",
    subtitle: "Class D / ISO 8 Cleanroom Suites",
    category: "Primary Manufacturing",
    size: "large", // Grid sizing: large, medium, small
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80",
    specs: [
      "Dedicated AHU systems with HEPA air filtration",
      "Differential pressure cascade monitoring",
      "High-speed rotary tablet compression suites",
      "Automated hard gelatin capsule filling lines"
    ],
    description: "Designed according to cGMP layout principles, our manufacturing suites maintain unidirectional material and personnel flows to eliminate cross-contamination risks."
  },
  {
    id: "quality-control",
    title: "Quality Control & Analytical Laboratories",
    subtitle: "Advanced Chemical & Microbiological Testing",
    category: "Analytical Testing",
    size: "medium",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80",
    specs: [
      "High Performance Liquid Chromatography (HPLC)",
      "Gas Chromatography (GC) with headspace",
      "UV-Vis spectrophotometry & dissolution testers",
      "Sterility testing laminar workstations"
    ],
    description: "Equipped with state-of-the-art analytical instrumentation for comprehensive raw material assay, finished product release, and ICH stability studies."
  },
  {
    id: "packaging",
    title: "Automated Packaging Lines",
    subtitle: "High-Speed Blister & Bottling Facilities",
    category: "Secondary Operations",
    size: "medium",
    image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=1000&q=80",
    specs: [
      "High-speed cold form Alu-Alu blister packing",
      "Aqueous/PVC-PVDC thermoforming lines",
      "Automatic cartoning & leaflet insertion",
      "Integrated 2D Datamatrix serialization systems"
    ],
    description: "Precision packaging lines delivering high-barrier protection, optical inspection for defective blister pockets, and automated bundle wrapping."
  },
  {
    id: "storage",
    title: "Controlled Storage & Raw Material Warehousing",
    subtitle: "Temperature & Humidity Controlled Logistics",
    category: "Supply Chain",
    size: "small",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    specs: [
      "24/7 continuous temperature & humidity data logging",
      "Dedicated segregated quarantine, approved & rejected areas",
      "Cold room storage (2°C - 8°C) for thermosensitive APIs",
      "Heavy-duty narrow-aisle racking systems"
    ],
    description: "Optimized warehouse infrastructure ensuring environmental integrity of APIs, excipients, and finished goods awaiting distribution."
  },
  {
    id: "rd-lab",
    title: "Formulation R&D & Pilot Scale Lab",
    subtitle: "Advanced Formulation Development Center",
    category: "Research & Development",
    size: "large",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
    specs: [
      "Benchtop fluid bed processors and granulators",
      "Single-punch & 8-station R&D tablet presses",
      "Stability testing chambers (Zone II & IVb)",
      "Formulation taste-masking & solubility workstations"
    ],
    description: "Dedicated to exploratory formulation, prototype stabilization, excipient compatibility screening, and smooth tech-transfer to commercial production."
  }
];
