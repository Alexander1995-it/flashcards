import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './'

const meta = {
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
  },
}

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Password',
    type: 'password',
  },
}

export const Search: Story = {
  args: {
    placeholder: 'Search',
    search: true,
    type: 'text',
  },
}

export const Error: Story = {
  args: {
    errorMessage: 'Error message',
    value: 'Wrong value',
  },
}
