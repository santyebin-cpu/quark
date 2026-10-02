export type NewsItem = {
  date: string;
  title: string;
  summary: string;
  tag: 'Press Release' | 'Milestone' | 'In the News' | 'Event';
};

export const news: NewsItem[] = [
  {
    date: '2026-09-18',
    title: 'Quark pours first nuclear concrete at the Hadron Idaho plant',
    summary:
      'The pour marks the start of safety-related construction for the first commercial Hadron module and keeps the project on schedule for fuel load in 2028.',
    tag: 'Milestone',
  },
  {
    date: '2026-07-30',
    title: 'NRC issues construction permit for the Hadron demonstration plant',
    summary:
      'Following a 26-month review, the U.S. Nuclear Regulatory Commission has approved the construction permit application for a six-module, 480 MWe Hadron plant.',
    tag: 'Press Release',
  },
  {
    date: '2026-06-11',
    title: 'Quark and Great Basin Power sign agreement for a second Hadron site',
    summary:
      'The agreement covers early site work and long-lead procurement for a four-module plant that will replace a retiring coal station in northern Nevada.',
    tag: 'Press Release',
  },
  {
    date: '2026-04-22',
    title: 'Quark Heat selected to supply process steam to a Gulf Coast chemical complex',
    summary:
      'Two Hadron modules will deliver 320 ºC steam to a petrochemical facility, displacing roughly 1.2 million tonnes of CO₂ per year.',
    tag: 'Press Release',
  },
  {
    date: '2026-03-05',
    title: 'Hadron forging line reaches full production rate',
    summary:
      'Our Columbus, Ohio module factory completed its first production vessel on schedule, and is now capable of producing one integral reactor vessel every nine weeks.',
    tag: 'Milestone',
  },
  {
    date: '2026-02-14',
    title: 'How a small reactor company plans to build like a car company',
    summary: 'Feature coverage of the Hadron factory and the economics of standardized reactor modules.',
    tag: 'In the News',
  },
  {
    date: '2025-11-20',
    title: 'Quark closes $650 million Series D to scale Hadron manufacturing',
    summary:
      'The round funds a second forging line, long-lead procurement for the Idaho plant and growth of the licensing and engineering teams.',
    tag: 'Press Release',
  },
  {
    date: '2025-10-02',
    title: 'Quark to present at the American Nuclear Society Winter Meeting',
    summary: 'Our CTO will present results from the Hadron integral effects test loop in Boise.',
    tag: 'Event',
  },
];

export function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
