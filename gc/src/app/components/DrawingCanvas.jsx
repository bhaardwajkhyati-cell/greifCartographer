'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";


const colors = [
  '#FFFFFF',
  '#CFCFCF',
  '#8B8B8B',
  '#6C8EBF',
  '#5C8D6D',
  '#A67C52',
  '#7B5FA1',
  '#8C3A3A',
];

export default function DrawingCanvas() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  

  const [drawing, setDrawing] = useState(false);
  const [color, setColor] = useState('#FFFFFF');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringCanvas, setIsHoveringCanvas] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.width = 1000;
    canvas.height = 600;

    const ctx = canvas.getContext('2d');

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 3;
    ctx.strokeStyle = color;

    ctxRef.current = ctx;

    // Background
    ctx.fillStyle = '#111111';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

  }, []);

  useEffect(() => {
    if (ctxRef.current) {
      ctxRef.current.strokeStyle = color;
    }
  }, [color]);

  const getMousePosition = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    return {
      x: (e.clientX - rect.left) * (canvas.width / rect.width),
      y: (e.clientY - rect.top) * (canvas.height / rect.height),
    };
  };

  const startDrawing = (e) => {
  const rect = canvasRef.current.getBoundingClientRect();

  setMousePosition({
    x: e.clientX,
    y: e.clientY,
  });

  const { x, y } = getMousePosition(e);

  ctxRef.current.beginPath();
  ctxRef.current.moveTo(x, y);

  setDrawing(true);
};
  const draw = (e) => {
  const rect = canvasRef.current.getBoundingClientRect();

  setMousePosition({
    x: e.clientX,
    y: e.clientY,
  });

  if (!drawing) return;

  const { x, y } = getMousePosition(e);

  ctxRef.current.lineTo(x, y);
  ctxRef.current.stroke();
};
  const stopDrawing = () => {
    ctxRef.current.closePath();
    setDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;

    ctxRef.current.fillStyle = '#111111';
    ctxRef.current.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="flex flex-col items-center gap-6">

      <canvas
       ref={canvasRef}
       onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={(e) => {
          stopDrawing();
          setIsHoveringCanvas(false);
        }}
        onMouseEnter={() => setIsHoveringCanvas(true)}
        className={`border border-gray-700 rounded-xl w-full max-w-5xl bg-[#111111] ${
          isHoveringCanvas ? "cursor-none" : "cursor-default"
        }`}
      />
      {isHoveringCanvas && (
  <motion.div
    style={{
      left: mousePosition.x,
      top: mousePosition.y,
     }}
    className="
      fixed
      pointer-events-none
      w-3
      h-3
      rounded-full
      bg-white
      -translate-x-1/2
      -translate-y-1/2
      z-[999]
      shadow-[0_0_10px_rgba(255,255,255,0.9),0_0_20px_rgba(255,255,255,0.45)]
    "
  />
)}

      <div className="flex items-center gap-6">

        <button
          onClick={clearCanvas}
          className="px-4 py-2 border border-gray-600 rounded-full text-white hover:bg-white hover:text-black transition"
        >
          Clear
        </button>

        <div className="flex gap-3">
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className={`w-8 h-8 rounded-full border-2 ${
                color === c
                  ? 'border-white'
                  : 'border-gray-600'
              }`}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>

      </div>

    </div>
  );
}