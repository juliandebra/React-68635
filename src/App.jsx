import { Route, Routes } from 'react-router-dom'
import { Header, ItemListContainer } from './Components'
import ItemDetailContainer from './pages/ItemDetailContainer'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import About from './pages/About'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:category' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<h1>Error 404 - Page not found</h1>} />
      </Routes>
    </>
  )
}

export default App
