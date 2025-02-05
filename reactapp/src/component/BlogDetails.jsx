import React from "react";
import { useParams } from "react-router-dom";

const blogData = [
    {
      id: 1,
      image: "/sedmagna.jpg",
      date: "July 18, 2021",
      title: "Sed magna dui, dignissim id felis vitae, consectetur",
      description: "In this blog, we dive into the art of minimalism and how adopting a minimalist lifestyle can bring clarity and peace to your daily life. Discover practical tips to simplify your living space, declutter your mind, and focus on what truly matters.",
      fullDescription: "Living a minimalist lifestyle doesn’t mean giving up everything you own or embracing an extreme approach to life. Instead, it focuses on removing the unnecessary to make room for what truly brings value. This blog covers practical steps for simplifying your home, reducing digital distractions, and finding joy in the little things. Embrace the power of less and unlock a more meaningful and stress-free life."
    },
    {
      id: 2,
      image: "/fusce.jpg",
      date: "July 18, 2021",
      title: "Fusce suscipit risus tempor, blandit urna at, laoreet ex",
      description: "Explore how mindfulness can help reduce stress and improve your mental well-being. Learn how to integrate mindfulness into your daily routine and achieve a better balance between work and personal life.",
      fullDescription: "Mindfulness is a practice that encourages living in the present moment without judgment. In this blog, we’ll explore techniques such as meditation, mindful breathing, and grounding exercises. You’ll also discover how being mindful can boost productivity, improve relationships, and lead to greater emotional stability. Start your journey toward a more mindful and balanced life."
    },
    {
      id: 3,
      image: "/pellente.jpg",
      date: "July 18, 2021",
      title: "Pellentesque varius, diam vitae mattis luctus, mi mi cursus",
      description: "Healthy eating is not just about dieting—it’s a lifestyle change. This blog highlights the benefits of a balanced diet and provides tips for sustainable and enjoyable healthy eating habits.",
      fullDescription: "Achieving a healthy lifestyle begins with making conscious choices about your diet. This blog offers insight into creating a balanced meal plan, understanding nutrition labels, and the importance of staying hydrated. Learn how to incorporate whole foods, avoid processed snacks, and create delicious, nutrient-packed meals that nourish your body and mind. Discover how small changes can lead to long-term health benefits."
    }
  ];
  

const BlogDetails = () => {
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

export default BlogDetails;
