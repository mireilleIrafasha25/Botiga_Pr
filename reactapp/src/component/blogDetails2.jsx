import React from "react";
import { useParams } from "react-router-dom";

const blogData = [
    {
      id: 1,
      image: "/Nam.jpg",
      date: "July 18, 2021",
      title: "Nam pharetra fringilla justo, et commodo lacus molestie ut",
      description: "An insightful look into how modern lifestyles can be transformed through small, sustainable changes.",
      fullDescription: "In this blog, we explore how minor adjustments to your daily routines can make a significant difference in your overall well-being. From incorporating mindful practices to decluttering your living space, this guide is all about embracing a more harmonious lifestyle. Discover how to balance work, health, and personal growth in a fast-paced world while staying true to your values. Practical advice and real-life examples will inspire you to start your transformative journey."
    },
    {
      id: 2,
      image: "/fusceVeljpg.jpg",
      date: "July 18, 2021",
      title: "Fusce vel tellus vulputate, dignissim turpis sit amet, aliquet mi",
      description: "A comprehensive guide to staying active and healthy with simple home workout routines.",
      fullDescription: "Staying active doesn’t always mean hitting the gym. In this blog, we provide effective home workout routines that require little to no equipment, perfect for all fitness levels. Learn how to build strength, boost cardiovascular health, and improve flexibility from the comfort of your home. Tips on setting realistic fitness goals and staying motivated are also included, along with nutritional advice to support your exercise journey."
    },
    {
      id: 3,
      image: "/duis.jpg",
      date: "July 18, 2021",
      title: "Duis lacinia convallis odio, quis efficitur dolor pulvinar nec",
      description: "Understanding the importance of mental well-being and how to cultivate a healthy mindset.",
      fullDescription: "Mental health is just as important as physical health. This blog dives deep into strategies for managing stress, improving resilience, and cultivating a positive mindset. We’ll explore techniques such as mindfulness, journaling, and the importance of connecting with others. Real-life stories and expert insights will help you build a stronger foundation for your mental well-being, empowering you to face life’s challenges with confidence."
    }
  ];
  
  

const BlogDetails2 = () => {
  const { id } = useParams();  // Get the blog ID from the URL
  const blog = blogData.find((item) => item.id === parseInt(id));  // Find the corresponding blog

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div style={{marginLeft:"80px",marginRight:"80px",marginTop:"80px",marginBottom:"60px"}}>
      <div>
      <h1>{blog.title}</h1>
      <p>{blog.date}</p>
      <img src={blog.image} alt="blog" style={{ width: "100%", maxHeight: "400px" }} />   
      </div>
      <div style={{marginLeft:"40px",marginRight:"40px",marginTop:"20px",marginBottom:"60px"}}>
        <p>{blog.fullDescription}</p>
      </div>
    </div>
    
  );
};

export default BlogDetails2;
