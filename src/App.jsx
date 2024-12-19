import './App.css'
import { ProductProvider } from './context/ProductContext/ProductState'
import Products from './components/Products/Products'

function App() {
  

  return (
    <>
    <ProductProvider>
    <Products/>
    </ProductProvider>
    </>
  )
}

export default App
