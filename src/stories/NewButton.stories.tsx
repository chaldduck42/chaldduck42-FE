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
    size: 'large',
    label: 'Large',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small',
  },
}
