import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.css'
import Layout from "./component/Layout"

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        {/* Add your routes here */}
      </Routes>
    </Router>
  )
}

export default App
