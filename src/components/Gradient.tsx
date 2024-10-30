"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Gradient() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const throttle = (callback: (ev: MouseEvent) => void, delay: number) => {
        let lastCall = 0
        return (event: MouseEvent) => {
            const now = new Date().getTime()
            if (now - lastCall >= delay) {
                lastCall = now
                callback(event)
            }
        }
    }

    useEffect(() => {
        const updateMousePosition = throttle((ev: MouseEvent) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY })
        }, 16)

        window.addEventListener('mousemove', updateMousePosition)

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
        }
    }, [])

    return (
        <motion.div
            className="fixed w-48 h-48 rounded-full opacity-70 blur-[100px] pointer-events-none"
            animate={{
                x: mousePosition.x - 128,
                y: mousePosition.y - 128,
                background: [
                    'linear-gradient(to right, #cd7de3, #734092)', 
                    'linear-gradient(to right, #cd7de3, #734092)',
                ],
                scale: [1, 1.2, 1]
            }}
            transition={{
                x: { type: 'spring', damping: 10 },
                y: { type: 'spring', damping: 10 },
                background: { duration: 2, repeat: Infinity },
                scale: { duration: 2, repeat: Infinity },
            }}
        />
    )
}
