import Hero from "@/components/Hero"
import About from "@/components/About"
import RecentWork from "@/components/RecentWork"
import Contact from "@/components/Contact"
import Education from "@/components/Education"
import Navbar from "@/components/Navbar"


export default function Home() {
  return (
<main className="pt-24 min-h-screen bg-gradient-to-b from-[#0a0015] via-[#1a0a2e] to-[#0a0015]">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <RecentWork />
      <Contact />
    </main>
  )
}
