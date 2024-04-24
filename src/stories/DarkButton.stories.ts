// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react'
import DarkButton from '../components/button/DarkButton'

const meta: Meta<typeof DarkButton> = {
  title: 'DarkButton',
  component: DarkButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof DarkButton>

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large',
  },
}

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Medium',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small',
  },
}
