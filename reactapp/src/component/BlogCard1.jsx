import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BlogCard1 = () => {
  const [blogs, setBlogs] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/Botiga/blog/getblog");
        console.log("Fetched Blogs:", response.data); 
        setBlogs(response.data.blogs || []); // Ensure it's an array
        setMessage(response.data.message || "");
      } catch (error) {
        setMessage(error.response?.data?.message || "Failed to fetch blogs");
        console.error("Error fetching blogs:", error);
        setBlogs([]); // Ensure blogs is always an array
      }
    };
    fetchBlogs();
  }, []);

  const renderBlogs = () => {
    return blogs.map((blog) => (
      <div key={blog.blogId} className="blog-card">
        <div onClick={() => window.location.href = `/blog/${blog.blogId}`} style={{ cursor: "pointer" }}>
          <img src={blog.image.url} alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">{blog.date}</p>
          <h3>{blog.title}</h3>
          <p className="description">{blog.description}</p>
          <div style={{ marginTop: "30px" }}>
            <Link to={`/blog/${blog.blogId}`} className="readmore" style={{ color: "black", fontSize: "15px" }}>
              ReadMore
            </Link>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      {message && <div className="message">{message}</div>}
      <div className="blog-list">{renderBlogs()}</div>
    </div>
  );
};

export default BlogCard1;
