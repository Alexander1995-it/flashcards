import { Outlet } from 'react-router-dom'

import { Header } from '@/components/layout/header'

import s from './layout.module.scss'

export const Layout = () => {
  return (
    <div className={s.root}>
      <Header />
      <div className={s.content}>
        <Outlet />
      </div>
    </div>
  )
}
