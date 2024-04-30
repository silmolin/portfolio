import "./parallax.scss";
//import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({type}) => {

    const {scrollYProgress} = useScroll({
        //target: ref,
        offset: ["start start", "end start"]
    })


    const yText=useTransform(scrollYProgress, [0,1], ["0%", "500%"])
    const yBg=useTransform(scrollYProgress, [0,1], ["0%", "100%"])


  return (
    <div 
    className="parallax" 
    
    style={{
        background:
        type === "services"
     ? "linear-gradient(180deg, #111132, #0c0c1d)"
     : "linear-gradient(180deg, #111132, #505064)"
    
    }}
    >
        <motion.h1 >
            {type === "services" ? "Mis servicios" : "Trabajos realizados"}
            </motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div  className="planets"></motion.div>
        <motion.div  className="planets"></motion.div>
        <motion.div className="starts"></motion.div>

    </div>
  )
}

export default Parallax


// import "./parallax.scss";
// //import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const Parallax = ({type}) => {

//     const {scrollYProgress} = useScroll({
//         target: ref,
//         offset: ["start start", "end start"]
//     })


//     const yText=useTransform(scrollYProgress, [0,1], ["0%", "500%"])
//     const yBg=useTransform(scrollYProgress, [0,1], ["0%", "100%"])


//   return (
//     <div 
//     className="parallax" 
//     ref={ref}
//     style={{
//         background:
//         type === "services"
//      ? "linear-gradient(180deg, #111132, #0c0c1d)"
//      : "linear-gradient(180deg, #111132, #505064)"
    
//     }}
//     >
//         <motion.h1 style={{ y : yText }}>
//             {type === "services" ? "What we do?" : "What we did?"}
//             </motion.h1>
//         <motion.div className="mountains"></motion.div>
//         <motion.div style={{ y : yBg }} className="planets"></motion.div>
//         <motion.div style={{ y : yBg }} className="planets"></motion.div>
//         <motion.div className="starts"></motion.div>

//     </div>
//   )
// }

// export default Parallax