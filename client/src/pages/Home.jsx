import React from "react";
import { motion } from "motion/react"


const Home = () => {
  return (
    <div> 
      <motion.div whileTap={{ scale: 0.1}} >HOME</motion.div>
    </div>
  );
};

export default Home;
