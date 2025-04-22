"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import WaveAnimation from "./wave-animation"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Wave Animation Background */}
      <div className="absolute inset-0 w-full h-full">
        <WaveAnimation color="rgba(255, 255, 255, 0.05)" amplitude={30} />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
          Welcome to{" "}
          <span className="text-yellow-400 inline-block transform hover:scale-105 transition-transform duration-300">
            AdrenaSports
          </span>
          <span className="block mt-2">Elevate Your Game</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl font-light">Join our upcoming tournaments at ISETCOM</p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg px-8 py-6 transition-all transform hover:scale-105 hover:shadow-[0_0_25px_rgba(250,204,21,0.7)] rounded-xl"
            onClick={() => scrollToSection("ping-pong")}
          >
            Register for Ping-Pong
          </Button>
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-400 text-black font-bold text-lg px-8 py-6 transition-all transform hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.7)] rounded-xl"
            onClick={() => scrollToSection("football")}
          >
            Register Your Football Team
          </Button>
        </div>

        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="h-10 w-10 text-gray-400" />
        </div>
      </div>
    </section>
  )
}
