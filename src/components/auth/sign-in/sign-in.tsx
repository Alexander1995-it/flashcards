import { useController, useForm } from 'react-hook-form'

import { Button, Checkbox, TextField } from '@/components/ui'
import { ControlledCheckbox } from '@/components/ui/controlled'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

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
    register,
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField errorMessage={errors.email?.message} {...register('email')} label={'email'} />
      <TextField
        errorMessage={errors.password?.message}
        {...register('password')}
        label={'password'}
      />
      <ControlledCheckbox control={control} label={'remember me'} name={'rememberMe'} />
      {/*<Checkbox checked={value} label={'remember me'} onChange={onChange} />*/}
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
