import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import NuevoDepartamento from './pages/NuevoDepartamento'
import EditarDepartamento from './pages/EditarDepartamento'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dpto" element={<Layout />}>
          <Route path="new" element={<NuevoDepartamento />} />
          <Route path="edit" element={<EditarDepartamento />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
