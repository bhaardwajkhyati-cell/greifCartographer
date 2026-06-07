'use client'

import { motion } from 'framer-motion'

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
        <div className="absolute inset-0 z-0 overflow-hidden">
         {[
           { top: '10%', left: '20%', duration: '3s', delay: '0s' },
           { top: '25%', left: '50%', duration: '4.5s', delay: '2s' },
           { top: '15%', left: '70%', duration: '3.5s', delay: '4s' },
            { top: '40%', left: '10%', duration: '5s', delay: '1s' },
           { top: '5%', left: '40%', duration: '4s', delay: '3s' },
            { top: '50%', left: '80%', duration: '3s', delay: '5s' },
         ].map((star, i) => (
            <div
              key={i}
              className="shooting-star"
              style={{
               top: star.top,
                left: star.left,
               animationDuration: star.duration,
                animationDelay: star.delay,
              }}
            />
          ))}
        </div>
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
              className="flex flex-col items-center gap-4 border border-gray-600 rounded-lg p-10 w-48 cursor-pointer hover:border-gray-600 transition-colors"
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
    <motion.div
     initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 2 }}
      className="mt-8"     
    >
      <svg width="300" height="60" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main stem */}
        <path d="M 20 30 Q 150 30 280 30" stroke="#8c96a7" strokeWidth="0.8" fill="none"/>
    
    {/* Left branches */}
        <path d="M 80 30 Q 70 20 60 15" stroke="#8c96a7" strokeWidth="0.6" fill="none"/>
        <path d="M 80 30 Q 70 40 62 44" stroke="#8c96a7" strokeWidth="0.6" fill="none"/>
        <path d="M 110 30 Q 100 18 92 12" stroke="#8c96a7" strokeWidth="0.6" fill="none"/>
    
    {/* Right branches */}
    <path d="M 220 30 Q 230 20 240 15" stroke="#8c96a7" strokeWidth="0.6" fill="none"/>
        <path d="M 220 30 Q 230 40 238 44" stroke="#8c96a7" strokeWidth="0.6" fill="none"/>
        <path d="M 190 30 Q 200 18 208 12" stroke="#8c96a7" strokeWidth="0.6" fill="none"/>
    
    {/* Centre dot */}
        <circle cx="150" cy="30" r="2" fill="#8c96a7"/>
    
    {/* Small leaves - left */}
        <ellipse cx="58" cy="14" rx="4" ry="2" transform="rotate(-30 58 14)" fill="#8c96a7" opacity="0.6"/>
        <ellipse cx="60" cy="45" rx="4" ry="2" transform="rotate(30 60 45)" fill="#8c96a7" opacity="0.6"/>
        <ellipse cx="90" cy="11" rx="4" ry="2" transform="rotate(-40 90 11)" fill="#8c96a7" opacity="0.6"/>
    
    {/* Small leaves - right */}
        <ellipse cx="242" cy="14" rx="4" ry="2" transform="rotate(30 242 14)" fill="#8c96a7" opacity="0.6"/>
        <ellipse cx="240" cy="45" rx="4" ry="2" transform="rotate(-30 240 45)" fill="#8c96a7" opacity="0.6"/>
        <ellipse cx="210" cy="11" rx="4" ry="2" transform="rotate(40 210 11)" fill="#8c96a7" opacity="0.6"/>
      </svg>
    </motion.div>

      </div>

    </main>
  )
}