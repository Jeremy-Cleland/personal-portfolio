import { motion as m } from "framer-motion";

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
      <div className="my-5 mt-10 border-b-4 border-violet-400 py-5 text-center font-SourceCodePro text-dark-900 dark:text-gray-200 sm:mt-20 md:my-10 xl:mt-36 2xl:mt-48">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "10vh" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center font-ChillaxBold text-4xl font-bold tracking-wide md:text-right"
        >
          Blog
        </m.h1>
        <m.h2
          animate={{ y: 0 }}
          initial={{ y: "10vh" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="pt-3 text-right font-SourceCodePro tracking-wide"
        >
          Coming Soon
        </m.h2>
      </div>
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
