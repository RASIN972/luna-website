"use client"

import Image from "next/image"
import Link from "next/link"
import { Moon, Waves, Timer, Flame, Check, ChevronDown } from "lucide-react"
import { useState } from "react"

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#3A3554]/70 border-b border-[rgba(184,160,214,0.12)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/luna-logo.png"
            alt="Luna owl mascot"
            width={40}
            height={40}
            className="rounded-xl"
          />
          <span className="text-xl font-semibold text-foreground tracking-tight">Luna</span>
        </div>
        <a
          href="#pricing"
          className="bg-secondary text-secondary-foreground px-6 py-2 rounded-full font-semibold text-sm hover:bg-[#E0D4F8] transition-colors shadow-[0_4px_8px_rgba(0,0,0,0.12)]"
        >
          Try Free
        </a>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Image
            src="/luna-logo.png"
            alt="Luna the owl - your sleep companion"
            width={180}
            height={180}
            className="mx-auto rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            priority
          />
        </div>
        <div className="mb-2">
          <span className="text-sm font-medium text-[#3A3554] uppercase tracking-widest">Luna: Sleep Sounds</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 tracking-tight text-balance">
          White Noise for Better Sleep
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
          Fall asleep faster with Luna—your personal sleep companion using white noise and calming soundscapes.
        </p>
        <div className="flex flex-col items-center gap-4">
          <a
            href="#pricing"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#f0f0f0] transition-colors shadow-[0_4px_8px_rgba(0,0,0,0.12)]"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download on App Store
          </a>
          <p className="text-sm text-muted-foreground">
            3-day free trial &bull; No credit card required
          </p>
        </div>
      </div>
    </section>
  )
}

function ProblemSection() {
  const problems = [
    {
      icon: <Moon className="w-8 h-8" />,
      title: "Racing thoughts keeping you awake",
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Noise from neighbors, traffic, or partners",
    },
    {
      icon: <Timer className="w-8 h-8" />,
      title: "Taking 30+ minutes to fall asleep",
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-12 tracking-tight text-balance">
          {"Can't shut your brain off?"}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-8 text-center hover:bg-card/80 transition-colors"
            >
              <div className="text-primary mb-4 flex justify-center">
                {problem.icon}
              </div>
              <p className="text-foreground font-medium text-lg">{problem.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SolutionSection() {
  const features = [
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Premium Sleep Sounds",
      description: "Ocean waves, brown noise, rain, and more",
    },
    {
      icon: <Timer className="w-8 h-8" />,
      title: "Smart Sessions",
      description: "Custom timers with gentle fade-outs",
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Build Your Streak",
      description: "Track your progress, build better sleep habits",
    },
  ]

  return (
    <section className="py-20 px-6 bg-[rgba(58,53,84,0.3)]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-12 tracking-tight text-balance">
          {"Luna's got you covered"}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-colors shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-primary">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AppPreviewSection() {
  const screens = [
    {
      image: "/mockups/welcome.jpg",
      title: "Meet Luna",
      subtitle: "Your friendly sleep companion who helps you drift off when your mind won't quiet down",
    },
    {
      image: "/mockups/dashboard.png",
      title: "Sleep Dashboard",
      subtitle: "Set your bedtime, choose your sound, and start a session with smart fade-out timers",
    },
    {
      image: "/mockups/library.png",
      title: "Sound Library",
      subtitle: "Browse 50+ premium sounds from ocean waves to brown noise, rain, and more",
    },
    {
      image: "/mockups/profile.png",
      title: "Track Your Progress",
      subtitle: "Build daily streaks and watch your sleep habits improve over time",
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-4 tracking-tight text-balance">
          See Luna in Action
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A beautifully simple app designed to help you fall asleep faster and sleep better
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {screens.map((screen, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-card border border-border rounded-3xl p-3 shadow-[0_8px_24px_rgba(0,0,0,0.2)] mb-4 hover:border-primary/30 transition-colors">
                <Image
                  src={screen.image || "/placeholder.svg"}
                  alt={screen.title}
                  width={200}
                  height={433}
                  className="rounded-2xl"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground text-center mb-1">{screen.title}</h3>
              <p className="text-sm text-muted-foreground text-center text-pretty leading-relaxed">{screen.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Choose your sound",
      description: "Browse our library of 50+ sleep sounds",
    },
    {
      number: "2",
      title: "Start your session",
      description: "Set your timer and hit play",
    },
    {
      number: "3",
      title: "Fall asleep faster",
      description: "Track your progress and build your streak",
    },
  ]

  return (
    <section className="py-20 px-6 bg-[rgba(58,53,84,0.3)]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-12 tracking-tight text-balance">
          Sleep in 3 simple steps
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-[0_4px_12px_rgba(184,160,214,0.3)]">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  const benefits = [
    "Mix multiple sounds together",
    "Smart fade-out timers",
    "50+ premium sleep sounds",
    "Unlimited sleep sessions",
    "Progress tracking & streaks",
  ]

  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-12 tracking-tight text-balance">
          Try Luna free for 3 days
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Monthly Plan */}
          <div className="bg-card border border-border rounded-3xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.2)] flex flex-col h-full">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Monthly</h3>
              <p className="text-4xl font-bold text-foreground">
                $3<span className="text-lg font-normal text-muted-foreground">/month</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1 invisible">
                Placeholder
              </p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
            <div>
              <a
                href="#"
                className="block w-full bg-secondary text-secondary-foreground py-3 rounded-full font-semibold text-center hover:bg-[#E0D4F8] transition-colors shadow-[0_4px_8px_rgba(0,0,0,0.12)]"
              >
                Start Free Trial
              </a>
              <p className="text-center text-xs text-muted-foreground mt-3">
                Cancel anytime
              </p>
            </div>
          </div>

          {/* Yearly Plan */}
          <div className="bg-card border-2 border-primary rounded-3xl p-8 shadow-[0_8px_24px_rgba(184,160,214,0.3)] relative flex flex-col h-full">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Save 58%
              </span>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Yearly</h3>
              <p className="text-4xl font-bold text-foreground">
                $15<span className="text-lg font-normal text-muted-foreground">/year</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Just $1.25/month
              </p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
            <div>
              <a
                href="#"
                className="block w-full bg-secondary text-secondary-foreground py-3 rounded-full font-semibold text-center hover:bg-[#E0D4F8] transition-colors shadow-[0_4px_8px_rgba(0,0,0,0.12)]"
              >
                Start Free Trial
              </a>
              <p className="text-center text-xs text-muted-foreground mt-3">
                Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/luna-logo.png"
              alt="Luna owl mascot"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-lg font-semibold text-foreground tracking-tight">Luna</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Terms of Service
            </Link>
            <a href="mailto:info@lunanoise.tech" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Support
            </a>
          </nav>
        </div>
        <p className="text-center text-muted-foreground text-sm mt-8">
          Luna: Sleep Sounds — White Noise for Better Sleep
        </p>
      </div>
    </footer>
  )
}



export default function LunaLandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#D4C4F0] via-[#9B87C7] to-[#3A3555]">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <AppPreviewSection />
      <HowItWorksSection />
      <PricingSection />
      <Footer />
    </main>
  )
}
