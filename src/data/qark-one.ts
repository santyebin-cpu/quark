/**
 * Qark One reference data, from general-arrangement drawing QE-GA-001 (rev A, concept status,
 * 2026-10-03), itself indicative of published AHWR-300 LEU data. One source for every page.
 */
export const principalData: [string, string][] = [
  ['Reference design', 'AHWR-300 LEU (BARC, published data)'],
  ['Thermal / electric', '920 MWth / ≈300 MWe'],
  ['Coolant', 'Boiling light water, natural circulation'],
  ['Moderator', 'Heavy water (D₂O), low pressure and temperature'],
  ['Fuel', '(Th–HALEU)O₂, 54-pin clusters'],
  ['Fuel channels', '452 vertical, 225 mm square pitch'],
  ['Main heat transport', '7 MPa, 285 °C coolant outlet'],
  ['Refuelling', 'On power, top entry'],
  ['Shutdown', 'SDS-1 shut-off rods, SDS-2 liquid poison'],
  ['Passive cooling', '72 h grace period, ≈8,000 m³ gravity-driven water pool'],
];

/** Extra rows shown only in the full data table on the Qark One page. */
export const detailData: [string, string][] = [
  ['Lattice', '513 positions: 452 fuel channels, 61 reactivity and shutdown devices'],
  ['Active core length', '3.5 m'],
  ['Pressure tubes', '120 mm inside diameter'],
  ['Steam drums', 'Four'],
  ['Natural-circulation loop height', '≈39 m'],
  ['Decay-heat removal', 'Isolation condensers in the gravity-driven water pool'],
  ['Status', 'Concept design; not for construction'],
];

export const threeStages = [
  {
    stage: 'Stage 1',
    title: 'Pressurised heavy-water reactors',
    text: 'Natural uranium fuels India’s working fleet and produces plutonium.',
  },
  {
    stage: 'Stage 2',
    title: 'Fast breeder reactors',
    text: 'Plutonium-fuelled reactors breed more fissile material and can turn thorium into uranium-233.',
  },
  {
    stage: 'Stage 3',
    title: 'Thorium reactors',
    text: 'Thorium and uranium-233 become the fuel for the long term.',
  },
];
