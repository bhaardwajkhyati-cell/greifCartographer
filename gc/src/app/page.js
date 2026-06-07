'use client'

import { motion } from 'framer-motion'
import {useEffect} from "react"
import {useRouter} from "next/navigation"

const title = "Grief Cartographer"

const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}



export default function Home() {
const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/theme')
    }, 6000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center relative overflow-hidden">

      {/* Radial fog glow behind text */}
      {/* Radial fog glow behind text */}
      <div className="absolute w-[700px] h-[400px] rounded-full bg-[#ffffff] opacity-[0.07] blur-[100px] z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Title with typewriter effect */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-white text-4xl font-light tracking-widest mb-6 flex"
        >
          {title.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              transition={{ duration: 0.3 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Still Here - fog emergence then eternal twinkle */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={{opacity: 1, filter: "blur(0px)"}}
          transition={{ duration: 3, delay: 0.5}}
          className="text-gray-400 text-4xl font-[family-name:var(--font-dancing)]"
        >
          Still Here.
        </motion.p>

      </div>

    </main>
  )
}