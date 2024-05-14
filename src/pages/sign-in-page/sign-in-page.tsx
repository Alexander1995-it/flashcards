import { useNavigate } from 'react-router-dom'

import { Page, SignIn } from '@/components'
import { useLoginMutation } from '@/services/auth/auth.service'
import { LoginArgs } from '@/services/auth/auth.types'

export const SignInPage = () => {
  const [login] = useLoginMutation()
  const navigate = useNavigate()
  const handleSignIn = async (args: LoginArgs) => {
    try {
      await login(args)
      navigate('/')
    } catch (e) {}
  }

  return (
    <Page>
      <SignIn onSubmit={handleSignIn} />
    </Page>
  )
}
