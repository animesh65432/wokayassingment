import { useState } from 'react'
import { Button } from "@/components/ui/button"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex h-dvh w-full justify-center items-center'>
      <Button className='mx-auto'>Click Me</Button>
    </div>
  )
}

export default App
