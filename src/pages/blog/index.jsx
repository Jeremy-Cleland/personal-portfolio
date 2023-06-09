import { motion as m } from "framer-motion";
import Header from "../../components/reusable/Header.jsx";

const Blog = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
      className="container mx-auto"
    >
      <Header title=" Blog" subtitle="Coming Soon" />
    </m.div>
  );
};

export default Blog;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Blog = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios.get("https://yourdomain.com/wp-json/wp/v2/posts")
//       .then(response => {
//         setPosts(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching posts", error);
//       });
//   }, []);

//   return (
//     <div>
//       {posts.map(post => (
//         <div key={post.id}>
//           <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
//           <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Blog;
