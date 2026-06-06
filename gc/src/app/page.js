'use client'
import Fog from './fog'
import {motion} from 'framer-motion'

const title = "Grief Cartographer"

const letterVariants = {
  hidden: {opacity: 0},
  visible: {opacity: 1},
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export default function Home(){
  return (
    <main className = "min-h-screen bg-black flex flex-col items-center justify-center ">
      {/*fog*/}
      <div className ="absolute inset-0 z-0"> <Fog/> </div>
      
      <div className="relative z-10 flex flex-col items-center">

        {/* Title */}
      <motion.h1
      variants = {containerVariants}
      initial = "hidden"
      animate = "visible"
      className = "text-white text-4xl font-light tracking-widest mb-6 flex"
      >
        {title.split("").map((char,index)=>(
          <motion.span
          key={index}
          variants = {letterVariants}
          transition={{ duration:0.3}}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
      {/* Still Here */}
      <motion.p
        initial={{ opacity: 0, filter: "blur(12px)"}}
        animate={{opacity:1 , filter:"blur(0px)"}
      }
        transition={{ duration: 3, delay: 0.5}}
        className=" text-Gray-600 text-4xl font-light tracking-widest font-[family-name:var(--font-dancing)]"
      >
        Still Here.
      </motion.p>



      </div>
      
    </main>
  )
}