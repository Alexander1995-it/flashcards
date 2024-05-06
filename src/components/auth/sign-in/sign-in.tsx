import { useForm } from 'react-hook-form'

import { Button, Card, Typography } from '@/components/ui'
import { ControlledCheckbox, ControlledTextField } from '@/components/ui/controlled'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-in.module.scss'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean(),
})

type FormValues = z.infer<typeof loginSchema>

export const SignIn = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'large'}>
        Sign In
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          className={s.fieldEmail}
          control={control}
          errorMessage={errors.email?.message}
          label={'Email'}
          name={'email'}
        />
        <ControlledTextField
          containerProps={{ className: s.fieldPassword }}
          control={control}
          errorMessage={errors.password?.message}
          label={'Password'}
          name={'password'}
          type={'password'}
        />
        <ControlledCheckbox
          className={s.rememberMe}
          control={control}
          label={'Remember me'}
          name={'rememberMe'}
        />
        <div className={s.recoverPasswordLinkWrapper}>
          <Typography as={'a'} className={s.recoverPasswordLink} variant={'link1'}>
            Forgot Password?
          </Typography>
        </div>
        <Button className={s.button} fullWidth type={'submit'}>
          Sign In
        </Button>
        <Typography className={s.caption} variant={'body2'}>
          {`Don't have an account?`}
        </Typography>
        <div className={s.signUpLinkWrapper}>
          <Typography as={'div'} className={s.signUpLink} to={'/sign-up'} variant={'link1'}>
            Sign Up
          </Typography>
        </div>
      </form>
    </Card>
  )
}
