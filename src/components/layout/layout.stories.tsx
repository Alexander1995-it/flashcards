import type { Meta, StoryObj } from '@storybook/react'

import { Layout } from '@/components'

const meta = {
  argTypes: {
    onLogout: { action: 'logout' },
  },
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'Components/Layout',
} satisfies Meta<typeof Layout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
