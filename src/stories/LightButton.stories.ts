// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react'
import LightButton from '../components/button/LightButton'

const meta: Meta<typeof LightButton> = {
  title: 'LightButton',
  component: LightButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof LightButton>

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
