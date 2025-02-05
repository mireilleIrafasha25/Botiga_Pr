import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.css'
import Layout from "./component/Layout"
import Home from "./component/home"
import Shop from "./component/Shop"
import Vendors from "./component/Vendor"
import Contact from "./component/contact"
import Blog from "./component/Blog"
import User from "./component/User"
import LoginForm from "./component/form"
import Register_own from "./component/Registration Own"
import BlogDetails from "./component/BlogDetails"
import BlogDetails2 from "./component/blogDetails2"
function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        
        {/* Add your routes here */}
        <Route path="shop" element={<Shop/>} />
        <Route path="vendor" element={<Vendors/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="user" element={<User />} />
        <Route path="form" element={<LoginForm />} />
        <Route path="register" element={<Register_own />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/blog2/:id" element={<BlogDetails2 />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
