import { Typography } from '@/components'
import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div>
      <Button disabled>Button</Button>
      <div>Text</div>
      <Typography as={'h1'} variant={'h1'}>
        Typography
      </Typography>
      <Typography>Typography2</Typography>
    </div>
  )
}

export default App
