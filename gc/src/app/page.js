'use client'
import {motion} from 'framer-motion'

export default function Home(){
  return (
    <main className = "min-h-screen bg-black flex flex-col items-center justify-center ">
      {/* Title */}
      <motion.h1
      initial = {{ opacity: 0}}
      animate = {{ opacity:1 }}
      transition= {{duration: 2.5}}
      className = "text-white text-4xl font-light tracking-widest mb-6"
      >
        Grief Cartographer
      </motion.h1>
      {/* Still Here */}
      <motion.p
        initials={{ opacity: 0}}
        animate={{opacity:1}}
        transition={{ duration: 2.5, delay: 3}}
        className=" text-grey-600 text-4xl font-light tracking-widest font-[family-name:var(--font-dancing)]"
      >
        Still Here.
      </motion.p>

    </main>
  )
}