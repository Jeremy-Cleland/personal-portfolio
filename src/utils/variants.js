export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay,
      },
    },
  };
};
export const cardVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

export const fadeInVariant = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type || "tween",
        delay: delay || 0,
        duration: duration || 0.5,
        ease: "easeOut",
      },
    },
  };
};

fadeInVariant.defaultProps = {
  direction: "left",
  type: "tween",
  delay: 0,
  duration: 0.5,
  // This variant fades in an element from a specified direction
};

export const zoomInVariant = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay || 0,
        duration: duration || 0.5,
        ease: "easeOut",
      },
    },
  };
};

zoomInVariant.defaultProps = {
  delay: 0,
  duration: 0.5,
  // This variant zooms in an element from its center point
};

export const slideInVariant = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type || "tween",
        delay: delay || 0,
        duration: duration || 0.5,
        ease: "easeOut",
      },
    },
  };
};

slideInVariant.defaultProps = {
  direction: "left",
  type: "tween",
  delay: 0,
  duration: 0.5,
  // This variant slides in an element from a specified direction
};

export const rotateInVariant = (delay, duration) => {
  return {
    hidden: {
      rotate: -180,
      opacity: 0,
    },
    show: {
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: delay || 0,
        duration: duration || 0.5,
        ease: "easeOut",
      },
    },
  };
};

rotateInVariant.defaultProps = {
  delay: 0,
  duration: 0.5,
  // This variant rotates an element in from -180 degrees to 0 degrees
};

export const scaleInVariant = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        delay: delay || 0,
        duration: duration || 0.5,
        ease: "easeOut",
      },
    },
  };
};

scaleInVariant.defaultProps = {
  delay: 0,
  duration: 0.5,
  // This variant scales an element in from 0 to 1
};

export const flipInVariant = (direction, delay, duration) => {
  return {
    hidden: {
      rotateY: direction === "left" ? -90 : direction === "right" ? 90 : 0,
      opacity: 0,
    },
    show: {
      rotateY: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: delay || 0,
        duration: duration || 0.5,
        ease: "easeOut",
      },
    },
  };
};

flipInVariant.defaultProps = {
  direction: "left",
  delay: 0,
  duration: 0.5,
  // This variant flips an element in from a specified direction
};

export const staggerContainerVariant = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren || 0.1,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
export const shakeVariant = (duration) => {
  return {
    hidden: {},
    show: {
      x: [-5, 5, -5, 5, -5, 5, -5, 5, -5, 5, 0],
      transition: {
        duration: duration || 0.5,
        ease: "easeOut",
      },
    },
  };
};

shakeVariant.defaultProps = {
  duration: 0.5,
  // This variant shakes an element back and forth
};

export const explodeVariant = (duration) => {
  return {
    hidden: {},
    show: {
      scale: [1, 1.5, 2, 2.5, 3, 3.5, 4],
      opacity: [1, 0],
      transition: {
        duration: duration || 0.5,
        ease: "easeOut",
      },
    },
  };
};

explodeVariant.defaultProps = {
  duration: 0.5,
  // This variant makes an element expand and fade out
};

export const bounceVariant = (duration) => {
  return {
    hidden: {},
    show: {
      y: [0, -20, 0],
      transition: {
        duration: duration || 0.5,
        ease: "easeOut",
      },
    },
  };
};

bounceVariant.defaultProps = {
  duration: 0.5,
  // This variant makes an element bounce up and down
};

export const glitchVariant = (duration) => {
  return {
    hidden: {},
    show: {
      clipPath: [
        "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        "polygon(0 0, 100% 0, 100% 90%, 0 10%)",
        "polygon(0 0, 100% 0, 100% 80%, 0 20%)",
        "polygon(0 0, 100% 0, 100% 70%, 0 30%)",
        "polygon(0 0, 100% 0, 100% 60%, 0 40%)",
        "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
        "polygon(0 0, 100% 0, 100% 40%, 0 60%)",
        "polygon(0 0, 100% 0, 100% 30%, 0 70%)",
        "polygon(0 0, 100% 0, 100% 20%, 0 80%)",
        "polygon(0 0, 100% 0, 100% 10%, 0 90%)",
        "polygon(0 0, 100% 0, 100% 0, 0 100%)",
      ],
      transition: {
        duration: duration || 0.5,
        ease: "easeOut",
        times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      },
    },
  };
};

glitchVariant.defaultProps = {
  duration: 0.5,
  // This variant makes an element glitch and distort
};

export const spinVariant = (duration) => {
  return {
    hidden: {},
    show: {
      rotate: [0, 360],
      transition: {
        duration: duration || 0.5,
        ease: "easeOut",
      },
    },
  };
};

spinVariant.defaultProps = {
  duration: 0.5,
  // This variant makes an element spin around its center point
};

staggerContainerVariant.defaultProps = {
  staggerChildren: 0.1,
  delayChildren: 0,
  // This variant staggers the animation of child elements within a container
};

export const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { delay: 0.8 } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
