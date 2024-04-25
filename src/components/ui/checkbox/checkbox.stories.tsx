import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './'
const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>
export const Uncontrolled: Story = {
  args: {
    disabled: false,
    label: 'Click here',
  },
}

export const Controlled: Story = {
  render: args => {
    const [checked, setChecked] = useState(false)

    return (
      <Checkbox
        {...args}
        checked={checked}
        label={'Click me'}
        onChange={() => setChecked(!checked)}
      />
    )
  },
}
