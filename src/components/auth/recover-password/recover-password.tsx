import { useForm } from 'react-hook-form'

import { Button, Card, Typography } from '@/components/ui'
import { ControlledTextField } from '@/components/ui/controlled'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './recover-password.module.scss'
const schema = z.object({
  email: z.string().email('Invalid email address').nonempty('Enter email'),
})

type FormType = z.infer<typeof schema>

export const RecoverPassword = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormType>({
    defaultValues: {
      email: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  })
  const onSubmit = (data: FormType) => {
    console.log(data)
  }

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'large'}>
        Forgot your password?
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          className={s.textField}
          control={control}
          errorMessage={errors.email?.message}
          label={'Email'}
          name={'email'}
        />
        <Typography className={s.instructions} variant={'body2'}>
          Enter your email address and we will send you further instructions
        </Typography>

        <Button className={s.button} fullWidth type={'submit'}>
          Send Instructions
        </Button>
      </form>
      <Typography className={s.caption} variant={'body2'}>
        Did you remember your password?
      </Typography>
      <Typography as={'a'} className={s.loginLink} to={'/sign-in'} variant={'link1'}>
        Try logging in
      </Typography>
    </Card>
  )
}
