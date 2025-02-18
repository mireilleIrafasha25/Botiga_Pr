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
import UserList from "./component/userList"
import AdminDashboardPro from "./dashboard/DashboardView"
import DashboardLayout from "./dashboard/dashboardLayout"
import { DarkModeProvider } from "./dashboard/context/DarkModeContext" 
import  AddProduct from "./dashboard/AddProduct"
import Report from "./dashboard/Report"
import ManageUserDash from "./dashboard/UserTable"
import Settings from "./dashboard/settings"
import DashTaskLayout from "./DashboardTask2/dashLayout"
import DashViewTask from "./DashboardTask2/DashViewTask"
function App() {
  

  return (
    <DarkModeProvider>
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
        <Route path="user-list" element={<UserList />} />
        </Route>
        <Route path="/" element={<DashboardLayout/>}>
          <Route path="/dashboard123" index element={<AdminDashboardPro/>} />
          <Route path="/add-product" element={<AddProduct/>}/>
          <Route path="/report" element={<Report/>} />
          <Route path="/UserDash" element={<ManageUserDash/>} />
          <Route path="/setting" element={<Settings/>} /> 
        </Route>
        <Route path="/" element={<DashTaskLayout/>}>
         <Route path="/DashboardTask" index element={<DashViewTask/>} />
        </Route>
      </Routes>
    </Router>
    </AuthProvider>
    </DarkModeProvider>
  )
}
export default App

