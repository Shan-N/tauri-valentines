"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ValentinesCard() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="w-64 h-80 cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        className="w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg flex items-center justify-center p-4">
          <p className="text-red-600 text-xl font-semibold text-center">Click to open your Valentine&apos;s card!</p>
        </div>
        <div
          className="absolute w-full h-full backface-hidden bg-red-100 rounded-lg shadow-lg flex items-center justify-center p-4"
          style={{ transform: "rotateY(180deg)" }}
        >
          <p className="text-red-600 text-xl font-semibold text-center">
           you&apos; the sweetest valentine I could ask for! Happy Valentine&apos;s Day though!💗 
          </p>
        </div>
      </motion.div>
    </div>
  )
}

