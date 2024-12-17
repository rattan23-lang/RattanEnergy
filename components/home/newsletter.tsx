"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Newsletter = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 50 },
  };

  const emailVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } },
    hidden: { opacity: 0, x: -20 },
  };

  const buttonVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
    hidden: { opacity: 0, x: 20 },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className=" mx-2 md:mx-8 p-8 rounded-lg shadow-lg border border-gray-600 -mt-2"
    >
      <h2 className="text-white text-2xl font-bold mb-4 text-center">Sign up for our newsletter</h2>
      <p className="text-gray-400 mb-6 text-center">
        Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.
      </p>
      <div className="flex items-center">
        <motion.input
          variants={emailVariants}
          type="email"
          placeholder="Enter your email"
          className=" text-white rounded-l-md px-4 py-2 flex-1 shadow-foreground"
        />
        <motion.button
          variants={buttonVariants}
          className="bg-primary hover:bg-secondary text-white rounded-r-md px-6 py-2"
        >
          Subscribe
        </motion.button>
      </div>
      <p className="text-white mt-4">
        We care about the protection of your data. <a href="#" className="text-secondary">Read our Privacy Policy.</a>
      </p>
    </motion.div>
  );
};

export default Newsletter;