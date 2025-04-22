"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import WaveAnimation from "./wave-animation"
import RulesAccordion from "./rules-accordion"

export default function FootballSection({ registerAction }: { registerAction: any }) {
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
        description: "Your team has been registered for the Football tournament.",
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
    <section id="football" className="relative w-full py-24 overflow-hidden bg-black">
      {/* Wave Animation Background */}
      <div className="absolute inset-0 w-full h-full">
        <WaveAnimation color="rgba(34, 197, 94, 0.05)" amplitude={20} frequency={0.015} />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-8 text-center text-green-400">Register Your Team</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="teamName" className="text-gray-300">
                    Team Name
                  </Label>
                  <Input
                    id="teamName"
                    name="teamName"
                    required
                    className="bg-gray-900/50 border-gray-700 focus:border-green-500 focus:ring-green-500/20 h-12"
                    placeholder="Enter your team name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="captainName" className="text-gray-300">
                    Captain Name
                  </Label>
                  <Input
                    id="captainName"
                    name="captainName"
                    required
                    className="bg-gray-900/50 border-gray-700 focus:border-green-500 focus:ring-green-500/20 h-12"
                    placeholder="Enter captain's name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="captainEmail" className="text-gray-300">
                    Captain Email
                  </Label>
                  <Input
                    id="captainEmail"
                    name="captainEmail"
                    type="email"
                    required
                    className="bg-gray-900/50 border-gray-700 focus:border-green-500 focus:ring-green-500/20 h-12"
                    placeholder="Enter captain's email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="captainPhone" className="text-gray-300">
                    Captain Phone
                  </Label>
                  <Input
                    id="captainPhone"
                    name="captainPhone"
                    type="tel"
                    required
                    className="bg-gray-900/50 border-gray-700 focus:border-green-500 focus:ring-green-500/20 h-12"
                    placeholder="Enter captain's phone"
                  />
                </div>

                <div className="pt-2">
                  <RulesAccordion id="football-rules" name="rules" required />
                </div>

                <Button
                  type="submit"
                  className="w-full mt-4 bg-green-600 hover:bg-green-500 text-white font-bold transition-all text-lg py-6 rounded-xl hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Register Team"}
                </Button>
              </form>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">5v5 Football Tournament</h2>
            <p className="text-xl font-semibold text-green-400 mb-6">April 30, 2025</p>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                <strong className="text-white">Location:</strong> ISETCOM
              </p>
              <p className="text-lg flex flex-wrap gap-2">
                <span className="bg-green-500/10 px-3 py-1 rounded-full text-green-300">4-team bracket</span>
                <span className="bg-green-500/10 px-3 py-1 rounded-full text-green-300">Squad: 5+1+2</span>
                <span className="bg-green-500/10 px-3 py-1 rounded-full text-green-300">Entry Fee: 40 DT</span>
                <span className="bg-green-500/10 px-3 py-1 rounded-full text-green-300">Prize Pool: Surprise!</span>
              </p>
            </div>

            <div className="mt-10 p-6 border border-green-500/20 rounded-xl bg-black/40 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity">
                <WaveAnimation color="rgba(34, 197, 94, 0.2)" amplitude={15} speed={0.03} />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-green-400 mb-3">About the Tournament</h3>
                <p className="text-gray-300 mb-4">
                  Gather your team and compete in our 5v5 football tournament! Each team should have 5 outfielders, 1
                  goalkeeper, and 2 substitutes. Show your skills and teamwork to win the grand prize!
                </p>
                <div className="flex items-center justify-center mt-6">
                  <div className="inline-block p-2 border-2 border-green-500/30 rounded-full animate-pulse">
                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
                      <span className="text-green-400 font-bold text-xl">40 DT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
