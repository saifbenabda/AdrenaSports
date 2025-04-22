import Hero from "@/components/hero"
import PingPongSection from "@/components/ping-pong-section"
import FootballSection from "@/components/football-section"
import Footer from "@/components/footer"
import { registerPingPong, registerFootball } from "@/app/actions"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <Hero />
      <PingPongSection registerAction={registerPingPong} />
      <FootballSection registerAction={registerFootball} />
      <Footer />
    </main>
  )
}
