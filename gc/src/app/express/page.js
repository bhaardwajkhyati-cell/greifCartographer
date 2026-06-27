'use client'

import { motion } from "framer-motion";
import DrawingCanvas from '../components/DrawingCanvas';

export default function Express() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center px-8 py-10">

      {/* Header */}
      <div className="w-full max-w-5xl flex justify-between items-center mb-10">
        <button className="text-gray-500 hover:text-white transition">
          ← Back
        </button>

        <p className="text-gray-500 tracking-widest text-sm">
          Reflection
        </p>
      </div>

      {/* Question */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl text-center mb-10"
      >
        <h1 className="text-3xl font-light leading-relaxed">
          Draw an object that feels heavier than it should.
        </h1>
      </motion.div>

      {/* Canvas Placeholder */}
      <DrawingCanvas  />

      {/* Toolbar */}
      <div className="flex gap-6 mt-6 text-gray-400">
        <button>✏ Pencil</button>
        <button>⌫ Eraser</button>
        <button>🗑 Clear</button>
      </div>

      {/* Continue */}
      <button
        className="
        mt-10
        px-8
        py-3
        border
        border-gray-600
        rounded-full
        hover:bg-white
        hover:text-black
        transition
        "
      >
        Continue →
      </button>

    </main>
  );
}