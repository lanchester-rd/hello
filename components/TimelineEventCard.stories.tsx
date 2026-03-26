import TimelineEventCard from './timeline/TimelineEventCard'
import type { TimelineEvent } from '../data/timeline'

const sampleMedia = [
  { id: 'img-1', type: 'image' as const, src: '/images/timeline/placeholder-10.jpg', alt: 'Lab setup', depth: 0.2 },
  { id: 'img-2', type: 'image' as const, src: '/images/timeline/placeholder-11.jpg', alt: 'Strategy session', depth: 0.5 },
];

const sampleEvent: TimelineEvent = {
  id: 'story-demo',
  start: '2016',
  end: '2019',
  title: 'Lanchester R&D',
  subtitle: 'Founder Phase',
  category: 'Venture',
  location: 'London / Remote',
  era: 'founder',
  summary: 'Established Lanchester R&D as a dedicated research and design laboratory.',
  achievements: [
    'Launched Lanchester R&D brand and methodology',
    'First consulting engagement with Fortune 500 client',
  ],
  tags: ['strategy', 'methodology'],
  quote: 'The purpose of Lanchester is to make complex things feel inevitable.',
  milestone: 'Founded',
  media: sampleMedia,
  images: sampleMedia,
}

export default {
  title: 'Components/Timeline/TimelineEventCard',
  component: TimelineEventCard,
}

export const Active = {
  args: {
    event: sampleEvent,
    isActive: true,
  },
}

export const Inactive = {
  args: {
    event: sampleEvent,
    isActive: false,
  },
}

export const NoAchievements = {
  args: {
    event: { ...sampleEvent, achievements: undefined },
    isActive: true,
  },
}

export const SingleImage = {
  args: {
    event: { ...sampleEvent, media: [sampleMedia[0]], images: [sampleMedia[0]] },
    isActive: true,
  },
}

export const WithExpand = {
  args: {
    event: sampleEvent,
    isActive: true,
    onExpand: () => console.log('expand'),
  },
}
