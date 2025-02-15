"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function AnimatedHeart() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        repeat: Number.POSITIVE_INFINITY,
      }}
      className="text-red-500 mb-8"
    >
      <Heart size={100} fill="currentColor" />
    </motion.div>
  )
}

