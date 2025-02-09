import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.css'
import Layout from "./component/Layout"
import Home from "./component/home"
import Shop from "./component/Shop"
import Vendors from "./component/Vendor"
import Contact from "./component/contact"
import Blog from "./component/Blog"
import User from "./component/User"
import Login from "./component/login"
import Register_own from "./component/Registration Own"
import BlogDetails from "./component/BlogDetails"
import BlogDetails2 from "./component/blogDetails2"
import ProductDetails from "./component/ProductCardDetails"
import UserDashboard from "./component/dashboard"
import ProductDetails2 from "./component/productCard2Details"
import ProductDetails3 from "./component/productCard3Details"
import ImageGallery from "./component/imageGallery"
import AuthProvider from "./component/AuthProvider"
import ManageUsers from "./component/ManageUsers"
import AdminDashboard from "./component/adminDashboard"
function App() {
  

  return (
    <AuthProvider>
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
        <Route path="register" element={<Register_own />} />
        <Route path="login" element={<Login/>}/>
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/blog2/:id" element={<BlogDetails2 />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/product2/:id" element={<ProductDetails2 />} />
        <Route path="/product3/:id" element={<ProductDetails3 />} />
        <Route path="gallery" element={<ImageGallery />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="manage-users" element={<ManageUsers />} />
        <Route path="admin-dashboard" element={<AdminDashboard />} />

        </Route>
      </Routes>
    </Router>
    </AuthProvider>
  )
}
export default App

