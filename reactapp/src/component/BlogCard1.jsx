import React from "react";
import { Link } from "react-router-dom";

const blogData = [
  {
    id: 1,
    image: "/sedmagna.jpg",
    date: "July 18, 2021",
    title: "Sed magna dui, dignissim id felis vitae, consectetur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
    readmore: "Read more"
  },
  {
    id: 2,
    image: "/fusce.jpg",
    date: "July 18, 2021",
    title: "Fusce suscipit risus tempor, blandit urna at, laoreet ex",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
    readmore: "Read more"
  },
  {
    id: 3,
    image: "/pellente.jpg",
    date: "July 18, 2021",
    title: "Pellentesque varius, diam vitae mattis luctus, mi mi cursus",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
    readmore: "Read more"
  }
];

const BlogCard1 = () => {
  return (
    <div className="blog-list">
      {blogData.map((blog) => (
        <div key={blog.id} className="blog-card">
          <Link to={`/blog/${blog.id}`}>
            <img src={blog.image} alt="blog" />
          </Link>
          <div className="blog-content">
            <p className="date">{blog.date}</p>
            <h3>{blog.title}</h3>
            <p className="description">{blog.description}</p>
            <div style={{ marginTop: "30px" }}>
              <Link to={`/blog/${blog.id}`} className="readmore" style={{ color: "black", fontSize: "15px" }}>
                {blog.readmore}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard1;
