import { useForm } from 'react-hook-form'

import { Button, Card, Typography } from '@/components'
import { ControlledTextField } from '@/components/ui/controlled'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-up.module.scss'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  passwordConfirmation: z.string().min(3),
})

type FormValues = z.infer<typeof schema>

export const SignUp = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'large'}>
        Sign Up
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          containerProps={{ className: s.fieldEmail }}
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
        <ControlledTextField
          containerProps={{ className: s.passwordConfirmation }}
          control={control}
          errorMessage={errors.password?.message}
          label={'Confirm Password'}
          name={'passwordConfirmation'}
          type={'password'}
        />
        <Button className={s.button} fullWidth type={'submit'}>
          Sign Up
        </Button>
      </form>
      <Typography className={s.caption} variant={'body2'}>
        Already have an account?
      </Typography>
      <Typography as={'a'} className={s.signInLink} to={'/sign-in'} variant={'link1'}>
        Sign In
      </Typography>
    </Card>
  )
}
