import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyCustomProductCard from './components/MyCustomProductCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <MyCustomProductCard data={{
          id: "1",
          name: "Product 243345",
          description: undefined,
          otherVariants: [
            {
              name: "Variant 1",
            }
          ]
        }} />
      </div>
    </>
  )
}

export default App
