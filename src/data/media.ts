/**
 * Placeholder photography served from Unsplash's CDN. Every image is free to
 * use under the Unsplash License (https://unsplash.com/license); credits are
 * kept here for reference. Swap `id` for Qark Energy's own photography before launch.
 */
export interface Photo {
  id: string;
  alt: string;
  credit: string;
}

export const photos = {
  processPlant: {
    id: 'photo-1670689334015-299d6559b3c3',
    alt: 'Pipework and towers of a process plant lit at dusk',
    credit: 'mos design',
  },
  coast: {
    id: 'photo-1668518891186-c07180869132',
    alt: 'Waves breaking on a sand beach below coastal cliffs',
    credit: 'Nakkeeran Raveendran',
  },
  cityDusk: {
    id: 'photo-1666843527155-14ec5f016802',
    alt: 'City lights along a seafront at dusk',
    credit: 'Nishith Parikh',
  },
  gridSunset: {
    id: 'photo-1704854706895-19885fd44759',
    alt: 'The sun setting behind high-voltage transmission towers',
    credit: 'Debabrata Hazra',
  },
} satisfies Record<string, Photo>;

const widths = [640, 960, 1280, 1920, 2560];

export function photoUrl(id: string, width: number): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=max&q=78&w=${width}`;
}

export function photoSrcset(id: string): string {
  return widths.map((w) => `${photoUrl(id, w)} ${w}w`).join(', ');
}
