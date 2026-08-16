import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Auth } from './pages/Auth/Auth'
import { Payment } from './pages/Payment/Payment'
import { PropertyDetail } from './pages/PropertyDetail/PropertyDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/payment/:key" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
