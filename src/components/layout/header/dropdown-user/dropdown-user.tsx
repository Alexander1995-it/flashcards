import { Avatar } from '@/components'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown-user.module.scss'

type DropdownUserProps = {
  avatar: null | string
}

export const DropdownUser = ({ avatar }: DropdownUserProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={s.trigger}>
          <Avatar src={avatar ? avatar : ''} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Label />
          <DropdownMenu.Item />

          <DropdownMenu.Group>
            <DropdownMenu.Item />
          </DropdownMenu.Group>

          <DropdownMenu.CheckboxItem>
            <DropdownMenu.ItemIndicator />
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.RadioGroup>
            <DropdownMenu.RadioItem>
              <DropdownMenu.ItemIndicator />
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger />
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent />
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator />
          <DropdownMenu.Arrow />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
