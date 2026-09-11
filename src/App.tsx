import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Payment } from './pages/Payment/Payment'
import { PropertyDetail } from './pages/PropertyDetail/PropertyDetail'
import { HostRoute } from './components/HostRoute/HostRoute'
import CreateProperty from './pages/Host/CreateProperty/CreateProperty'
import { Hostings } from './pages/Host/Hostings/Hostings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/payment/:key" element={<Payment />} />
        <Route
          path="/host/create"
          element={
            <HostRoute>
              <CreateProperty />
            </HostRoute>
          }
        />
        <Route
          path="/host/hostings"
          element={
            <HostRoute>
              <Hostings />
            </HostRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
