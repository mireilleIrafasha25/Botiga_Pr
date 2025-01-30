import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.css'
import Layout from "./component/Layout"
import Home from "./component/home"
import Shop from "./component/Shop"
import Vendors from "./component/Vendor"
function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        
        {/* Add your routes here */}
        <Route path="shop" element={<Shop/>} />
        <Route path="vendor" element={<Vendors/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
