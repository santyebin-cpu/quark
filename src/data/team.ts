export type Person = {
  name: string;
  role: string;
  bio?: string;
};

export const board: Person[] = [
  {
    name: 'Elena Marchetti',
    role: 'Chair of the Board',
    bio: 'Elena Marchetti co-founded Quark after two decades leading grid-scale infrastructure investments. She chairs the board and previously served as chief executive of a transmission developer that built more than 4,000 miles of high-voltage lines across the western United States.',
  },
  {
    name: 'Dr. Tomas Lindqvist',
    role: 'Vice Chair of the Board',
    bio: 'Tomas Lindqvist is a reactor physicist and the technical founder of Quark. He led the integral-PWR research group at a national laboratory for twelve years, where the core concepts behind the Hadron module were first demonstrated.',
  },
  { name: 'Priya Raghunathan', role: 'President and Chief Executive Officer' },
  { name: 'Marcus Oyelaran', role: 'Independent Director' },
  { name: 'Dr. Hannah Weiss', role: 'Independent Director' },
  { name: 'Robert Castellano', role: 'Independent Director' },
  { name: 'Ingrid Solheim', role: 'Independent Director' },
];

export const leadership: Person[] = [
  {
    name: 'Priya Raghunathan',
    role: 'President and Chief Executive Officer',
    bio: 'Priya Raghunathan has led Quark since 2019. She spent 25 years in the nuclear industry, including senior roles delivering new-build projects in the United States and Finland, and began her career as a reactor engineer aboard a nuclear-powered submarine.',
  },
  { name: 'Daniel Okafor', role: 'Executive Vice President and Chief Financial Officer' },
  { name: 'Dr. Tomas Lindqvist', role: 'Chief Technology Officer' },
  { name: 'Sofia Bergström', role: 'Executive Vice President and General Counsel' },
  { name: 'Grace Nakamura', role: 'Chief Nuclear Officer and Senior Vice President, Regulatory Affairs' },
  { name: 'Luis Ferreira', role: 'Senior Vice President, Hadron Project Director' },
  { name: 'Amara Diallo', role: 'Senior Vice President, Quark Heat' },
  { name: 'Jonathan Reyes', role: 'Senior Vice President, Business Development' },
  { name: 'Mei-Lin Chao', role: 'Chief Human Resources Officer' },
  { name: 'Owen Gallagher', role: 'Vice President, Manufacturing and Supply Chain' },
  { name: 'Dr. Fatima El-Sayed', role: 'Vice President, Fuel Supply and Development' },
  { name: 'Henrik Aalto', role: 'Head of Quark Europe' },
  { name: 'Rachel Whitfield', role: 'Vice President, Government Affairs' },
  { name: 'Samuel Adeyemi', role: 'Vice President, Plant Delivery – Hadron' },
  { name: 'Clara Novak', role: 'Director of Communications and Marketing' },
];
