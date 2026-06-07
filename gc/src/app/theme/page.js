'use client'

import { motion } from 'framer-motion'
import FogGlow from '../components/Botanical'
import StarParticles from '../components/StarParticles'
import Botanical from '../components/Botanical'

const themes = [
  {
    id: 'object',
    name: 'Object',
    description: 'Symbols that remain.',
    icon: '○'
  },
  {
    id: 'room',
    name: 'Room',
    description: 'Spaces that hold.',
    icon: '⌂'
  },
  {
    id: 'path',
    name: 'Path',
    description: 'Journeys that linger.',
    icon: '↝'
  },
]

export default function Theme() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center relative overflow-hidden px-8">
          {/* Shooting stars */}
        <StarParticles/>
      {/* Fog glow */}
      <div className="absolute w-[700px] h-[400px] rounded-full bg-[#ffffff] opacity-[0.04] blur-[100px] z-0" />
    
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Top line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-gray-500 text-sm tracking-widest mb-16"
        >
          Some losses become rooms. Some become objects. Some become journeys.
        </motion.p>

        {/* Three theme cards */}
        <div className="flex gap-8">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: index * 0.3 }}
              className="flex flex-col items-center gap-4 border border-gray-600 rounded-lg p-10 w-48 cursor-pointer transition-all duration-500 hover:border-gray-300 hover:bg-[#1a1a1a] hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              <span className="text-gray-400 text-3xl">{theme.icon}</span>
              <p className="text-white text-lg tracking-widest font-light">{theme.name}</p>
              <p className="text-gray-400 text-sm text-center">{theme.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="text-gray-400 text-sm tracking-widest mt-16 font-[family-name:var(--font-dancing)] text-xl"
        >
          Choose how your grief wishes to appear.
        </motion.p>
        {/* Botanical divider */}
        <Botanical/>
    

      </div>

    </main>
  )
}