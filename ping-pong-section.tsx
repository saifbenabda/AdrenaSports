"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import WaveAnimation from "./wave-animation"
import RulesAccordion from "./rules-accordion"

export default function PingPongSection({ registerAction }: { registerAction: any }) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)

    try {
      await registerAction(formData)
      toast({
        title: "Registration successful!",
        description: "You've been registered for the Ping-Pong tournament.",
      })
      event.currentTarget.reset()
    } catch (error) {
      toast({
        title: "Registration failed",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="ping-pong" className="relative w-full py-24 overflow-hidden bg-black">
      {/* Wave Animation Background */}
      <div className="absolute inset-0 w-full h-full">
        <WaveAnimation color="rgba(250, 204, 21, 0.05)" amplitude={20} frequency={0.015} />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">Ping-Pong Showdown</h2>
            <p className="text-xl font-semibold text-yellow-400 mb-6">May 14, 2025</p>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                <strong className="text-white">Location:</strong> ISETCOM
              </p>
              <p className="text-lg">
                <span className="bg-yellow-500/10 px-3 py-1 rounded-full text-yellow-300">Individual format</span>
                <span className="mx-2">•</span>
                <span className="bg-yellow-500/10 px-3 py-1 rounded-full text-yellow-300">Entry Fee: 3 DT</span>
                <span className="mx-2">•</span>
                <span className="bg-yellow-500/10 px-3 py-1 rounded-full text-yellow-300">Prize Pool: Surprise!</span>
              </p>
            </div>

            <div className="mt-10 p-6 border border-yellow-500/20 rounded-xl bg-black/40 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity">
                <WaveAnimation color="rgba(250, 204, 21, 0.2)" amplitude={15} speed={0.03} />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">About the Tournament</h3>
                <p className="text-gray-300 mb-4">
                  Test your skills against the best ping-pong players at ISETCOM! This individual tournament will
                  challenge your reflexes, strategy, and mental fortitude.
                </p>
                <div className="flex items-center justify-center mt-6">
                  <div className="inline-block p-2 border-2 border-yellow-500/30 rounded-full animate-pulse">
                    <div className="w-20 h-20 rounded-full bg-yellow-500/10 flex items-center justify-center">
                      <span className="text-yellow-400 font-bold text-xl">3 DT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-gray-800 text-white">
            <h3 className="text-2xl font-bold mb-8 text-center text-yellow-400">Register for Ping-Pong</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-gray-300">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  required
                  className="bg-gray-900/50 border-gray-700 focus:border-yellow-500 focus:ring-yellow-500/20 h-12"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-gray-900/50 border-gray-700 focus:border-yellow-500 focus:ring-yellow-500/20 h-12"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-300">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="bg-gray-900/50 border-gray-700 focus:border-yellow-500 focus:ring-yellow-500/20 h-12"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="pt-2">
                <RulesAccordion id="pingpong-rules" name="rules" required />
              </div>

              <Button
                type="submit"
                className="w-full mt-4 border-2 border-yellow-500 bg-transparent hover:bg-yellow-500 text-yellow-400 hover:text-black font-bold transition-all text-lg py-6 rounded-xl hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Registration"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
