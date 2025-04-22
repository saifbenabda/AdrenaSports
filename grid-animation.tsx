"use client"

import { useEffect, useRef } from "react"

interface GridAnimationProps {
  color?: string
  lineWidth?: number
  speed?: number
  density?: number
  className?: string
}

export default function GridAnimation({
  color = "#333",
  lineWidth = 1,
  speed = 0.5,
  density = 30,
  className = "",
}: GridAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Grid lines
    const gridLines: { x: number; y: number; dir: "h" | "v"; offset: number; speed: number }[] = []

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initGrid()
    }

    const initGrid = () => {
      gridLines.length = 0
      const cellSize = Math.floor(canvas.width / density)

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += cellSize) {
        gridLines.push({
          x: 0,
          y,
          dir: "h",
          offset: 0,
          speed: (Math.random() * 0.5 + 0.2) * speed,
        })
      }

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += cellSize) {
        gridLines.push({
          x,
          y: 0,
          dir: "v",
          offset: 0,
          speed: (Math.random() * 0.5 + 0.2) * speed,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = color
      ctx.lineWidth = lineWidth

      gridLines.forEach((line) => {
        ctx.beginPath()

        if (line.dir === "h") {
          // Draw horizontal line with offset
          line.offset = (line.offset + line.speed) % (canvas.width * 0.4)
          const waveHeight = Math.sin(line.offset / 20) * 5

          ctx.moveTo(0, line.y + waveHeight)

          for (let x = 0; x <= canvas.width; x += 5) {
            const y = line.y + Math.sin((x + line.offset) / 20) * 5
            ctx.lineTo(x, y)
          }
        } else {
          // Draw vertical line with offset
          line.offset = (line.offset + line.speed) % (canvas.height * 0.4)
          const waveWidth = Math.sin(line.offset / 20) * 5

          ctx.moveTo(line.x + waveWidth, 0)

          for (let y = 0; y <= canvas.height; y += 5) {
            const x = line.x + Math.sin((y + line.offset) / 20) * 5
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [color, lineWidth, speed, density])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} />
}
