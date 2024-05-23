import type { Meta, StoryObj } from '@storybook/react'

import { DropdownUser } from '@/components/layout/header'

const meta = {
  component: DropdownUser,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof DropdownUser>

export default meta
type Story = StoryObj<typeof meta>

export const Learn: Story = {
  args: {},
  render: () => <div>Learn</div>,
}

export const HeaderDropdown: Story = {
  args: {
    avatar: 'https://avatars.githubusercontent.com/u/1196870?v=4',
  },
}
