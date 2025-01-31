import BlogCard1 from "./BlogCard1";
import BlogCard2 from "./BlogCard2";
const Blog=()=>
{
return(
    <div>
  <div style={{width:"100%",height:"100px",alignItems:"center",justifyContent:"center", textAlign:"center",backgroundColor:"white",paddingTop:"40px"}}><h1 style={{fontStyle:"italic",fontFamily:"monospace",fontSize:"40px"}}>Blog</h1></div>
        <BlogCard1 />
        <BlogCard2 />
    </div>
)
}
export default Blog