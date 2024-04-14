//import React from "react";
import { motion } from "framer-motion";

const Test = () => {
    const variants = {
        visible:{opacity:1},
        hidden: {opacity:0},
    }

  return (
    <div className="course">
      <motion.div
        className="box"
        variants={variants}
        initial="hiddem"
        animate="visuble"
        transition={{duration:2    }}
       
      ></motion.div>
    </div>
  );
};

export default Test;
