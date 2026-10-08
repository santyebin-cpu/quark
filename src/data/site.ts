// Placeholder until the real domain is confirmed; every email address on the site derives from it.
const emailDomain = 'qark.energy';

export const site = {
  name: 'Qark Energy',
  shortName: 'Qark',
  legalName: 'Qark Energy',
  tagline: 'Thorium-fuelled power for India.',
  description:
    'Qark Energy is developing Qark One, a thorium-fuelled small modular reactor for India: natural circulation, passive safety and about 300 MWe of firm, carbon-free power from each unit.',
  product: 'Qark One',
  productLong: 'Qark One · Thorium SMR',
  country: 'India',
  // The registered office address has not been supplied yet; the second line marks the placeholder.
  address: ['Registered office, India', 'Full address to follow'],
  email: {
    general: `hello@${emailDomain}`,
    partners: `partners@${emailDomain}`,
    suppliers: `suppliers@${emailDomain}`,
    investors: `investors@${emailDomain}`,
    careers: `careers@${emailDomain}`,
    media: `media@${emailDomain}`,
    privacy: `privacy@${emailDomain}`,
  },
  year: new Date().getFullYear(),
  social: {
    linkedin: 'https://www.linkedin.com/',
    x: 'https://x.com/',
  },
};

export const primaryNav = [
  { label: 'Qark One', href: '/qark-one' },
  { label: 'Thorium', href: '/thorium' },
  { label: 'India', href: '/india' },
];

export const secondaryNav = [
  { label: 'Industry & Steam', href: '/industry' },
  { label: 'FAQ', href: '/faq' },
  { label: 'About Us', href: '/about' },
  { label: 'News', href: '/news' },
  { label: 'Suppliers', href: '/suppliers' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const legalNav = [
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cookie Notice', href: '/cookie' },
];
