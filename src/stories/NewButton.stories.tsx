// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react'
import Button from '../components/button/Button'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Button>

export const Large: Story = {
  args: {
    width: '80',
    height: '14',
    label: 'Large',
  },
}

export const Medium: Story = {
  args: {
    width: '44',
    height: '14',
    label: 'Medium',
  },
}

export const Small: Story = {
  args: {
    width: '20',
    height: '12',
    label: 'Small',
  },
}
