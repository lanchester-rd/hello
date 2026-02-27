import ProjectCard from './ProjectCard'

const sample = {
  slug: 'sample',
  title: 'Sample Project',
  category: 'Design Systems',
  shortDescription: 'Short placeholder description for storybook sample.',
  engagementModes: ['design-systems']
}

export default {
  title: 'Components/ProjectCard',
  component: ProjectCard
}

export const Default = {
  args: {
    project: sample
  }
}
