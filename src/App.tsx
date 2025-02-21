import MyCustomProductCard from './components/MyCustomProductCard'
import './App.css'

function App() {

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
