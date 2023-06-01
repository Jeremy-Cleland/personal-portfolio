import Masonry from "../../utils/Masonry.jsx";
import { motion as m } from "framer-motion";

const ImageComponent = ({ value }) => (
  <img src={value.url} alt={value.alt} className="h-auto w-full object-cover" />
);

const Resume = () => {
  const images = [
    {
      id: 1,
      url: "https://cdn.midjourney.com/27b19788-5fc1-475f-9f04-029d7b15dfbe/0_1.png",
      alt: "Image 1",
    },
    {
      id: 2,
      url: "https://cdn.midjourney.com/240de15d-f695-4aea-bed6-8546177db761/0_1.png",
      alt: "Image 2",
    },
    {
      id: 3,
      url: "https://cdn.midjourney.com/240de15d-f695-4aea-bed6-8546177db761/0_0.png",
      alt: "Image 3",
    },
    {
      id: 4,
      url: "https://cdn.midjourney.com/4f8439d6-2271-489f-8c8e-a737d9567d86/0_0.png",
      alt: "Image 4",
    },
    {
      id: 5,
      url: "https://cdn.midjourney.com/4f8439d6-2271-489f-8c8e-a737d9567d86/0_3.png",
      alt: "Image 5",
    },
    {
      id: 6,
      url: "https://cdn.midjourney.com/4f8439d6-2271-489f-8c8e-a737d9567d86/0_2.png",
      alt: "Image 6",
    },
  ];

  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Masonry
        dataArray={images}
        columnCount={3}
        ChildsElement={ImageComponent}
      />
    </m.section>
  );
};

export default Resume;
