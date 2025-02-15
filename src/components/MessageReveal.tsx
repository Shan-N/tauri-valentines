"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function MessageReveal() {
  const [isRevealed, setIsRevealed] = useState(false)

  return (
    <div className="mb-8">
        {
            isRevealed === false &&
      <button
        onClick={() => setIsRevealed(true)}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
      >
        Reveal Message
      </button>
        }
      {isRevealed && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-4 text-xl text-red-600 font-semibold"
        >
          I love you💗
        </motion.div>
      )}
    </div>
  )
}

