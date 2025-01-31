import React from "react";

const blogData = [
  {
    id: 1,
    image: "/sedmagna.jpg", 
    date: "July 18, 2021",
    title: "Sed magna dui, dignissim id felis vitae, consectetur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
    readmore:"Read more"
  },
  {
    id: 2,
    image: "/fusce.jpg", 
    date: "July 18, 2021",
    title: "Fusce suscipit risus tempor, blandit urna at, laoreet ex",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
    readmore:"Read more"
  },
  {
    id: 3,
    image: "/pellente.jpg",
    date: "July 18, 2021",
    title: "Pellentesque varius, diam vitae mattis luctus, mi mi cursus",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
    readmore:"Read more"
  },
];

const BlogCard1 = () => {
  return (
    <>
      <style>
        {`
          .blog-list {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
            margin-top: 40px;
            margin-bottom:40px;
          }

          .blog-card {
            width: 350px;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease-in-out;
          }

          .blog-card:hover {
            transform: scale(1.05);
          }

          .blog-card img {
            width: 100%;
            height: auto;
          }

          .blog-content {
            padding: 15px;
          }

          .date {
            font-size: 14px;
            color: gray;
          }

          h3 {
            font-size: 18px;
            margin: 10px 0;
          }

          .description {
            font-size: 14px;
            color: #555;
          }
        `}
      </style>

      <div className="blog-list">
        {blogData.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt="blog" />
            <div className="blog-content">
              <p className="date">{blog.date}</p>
              <h3>{blog.title}</h3>
              <p className="description">{blog.description}</p>
              <div style={{marginTop:"30px"}}><a href="#" className="readmore" style={{color:"black",fontSize:"15px"}}>{blog.readmore}</a></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogCard1;
