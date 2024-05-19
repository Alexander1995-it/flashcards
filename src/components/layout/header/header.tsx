import { Link } from 'react-router-dom'

import { Logo } from '@/assets/icons'
import { Button } from '@/components'

import s from './header.module.scss'
export const Header = () => {
  return (
    <header className={s.root}>
      <div className={s.content}>
        <Link to={'/'}>
          <Logo />
        </Link>
        <Button as={Link} to={'/sign-in'}>
          Sign In
        </Button>
      </div>
    </header>
  )
}
