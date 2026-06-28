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
  const [tool, setTool] = useState("pencil");

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
    ctx.fillStyle = '#111111';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  useEffect(() => {
    if (!ctxRef.current) return;
    if (tool === "pencil") {
      ctxRef.current.strokeStyle = color;
      ctxRef.current.lineWidth = 3;
    } else {
      ctxRef.current.strokeStyle = "#111111";
      ctxRef.current.lineWidth = 18;
    }
  }, [color, tool]);

  const getMousePosition = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left) * (canvas.width / rect.width),
      y: (e.clientY - rect.top) * (canvas.height / rect.height),
    };
  };

  const startDrawing = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    const { x, y } = getMousePosition(e);
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(x, y);
    ctxRef.current.strokeStyle = tool === "eraser" ? "#111111" : color;
    ctxRef.current.lineWidth = tool === "eraser" ? 18 : 3;
    setDrawing(true);
  };

  const draw = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
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
  onMouseLeave={() => { stopDrawing(); setIsHoveringCanvas(false); }}
  onMouseEnter={() => setIsHoveringCanvas(true)}
  className={`rounded-xl w-full bg-[#111111] block canvas-border ${
    isHoveringCanvas ? "cursor-none" : "cursor-default"
  }`}
/>

      {isHoveringCanvas && (
        <motion.div
          style={{ left: mousePosition.x, top: mousePosition.y }}
          className="fixed pointer-events-none w-3 h-3 rounded-full bg-white -translate-x-1/2 -translate-y-1/2 z-[999] shadow-[0_0_10px_rgba(255,255,255,0.9),0_0_20px_rgba(255,255,255,0.45)]"
        />
      )}

      <div className="flex items-center gap-4">

        <button
          onClick={clearCanvas}
          className="px-4 py-2 border border-gray-600 rounded-full text-white hover:bg-white hover:text-black transition"
        >
          Clear
        </button>

        <button
          onClick={() => setTool('pencil')}
          className={`px-4 py-2 border rounded-full transition ${
            tool === 'pencil'
              ? 'bg-white text-black border-white'
              : 'border-gray-600 text-white hover:bg-white hover:text-black'
          }`}
        >
          Pencil
        </button>

        <button
          onClick={() => setTool('eraser')}
          className={`px-4 py-2 border rounded-full transition ${
            tool === 'eraser'
              ? 'bg-white text-black border-white'
              : 'border-gray-600 text-white hover:bg-white hover:text-black'
          }`}
        >
          Eraser
        </button>

      </div>
       <div className="flex gap-3">
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => { setColor(c); setTool('pencil'); }}
              className={`w-8 h-8 rounded-full border-2 ${
                color === c && tool === 'pencil' ? 'border-white' : 'border-gray-600'
              }`}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>

    </div>
  );
}