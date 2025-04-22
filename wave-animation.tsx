"use client"

import { useEffect, useRef } from "react"

interface WaveAnimationProps {
  color?: string
  speed?: number
  amplitude?: number
  frequency?: number
  className?: string
}

export default function WaveAnimation({
  color = "rgba(255, 255, 255, 0.05)",
  speed = 0.02,
  amplitude = 20,
  frequency = 0.02,
  className = "",
}: WaveAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let offset = 0

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = color
      ctx.lineWidth = 1.5

      // Draw multiple waves with different phases
      for (let i = 0; i < 3; i++) {
        const phaseOffset = (i * Math.PI) / 3
        const waveAmplitude = amplitude * (1 - i * 0.2)

        ctx.beginPath()

        for (let x = 0; x < canvas.width; x += 5) {
          const y =
            canvas.height / 2 +
            Math.sin(x * frequency + offset + phaseOffset) * waveAmplitude +
            Math.sin(x * frequency * 0.5 + offset * 1.5) * (waveAmplitude * 0.5)

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()
      }

      offset += speed
      animationRef.current = requestAnimationFrame(drawWaves)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    drawWaves()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [color, speed, amplitude, frequency])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} />
}
