"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import WaitlistForm from "./WaitlistForm";

const SLIDES = [
  { src: "/images/hero-tire.jpg", alt: "Close-up of an off-road tyre" },
  { src: "/images/alloy-wheel.jpg", alt: "Sports car alloy wheel" },
  { src: "/images/tire-stack.jpg", alt: "Stacked tyres in a workshop" },
];

export default function Hero() {
  const [slide, setSlide] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;

    const quickX = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" });
    const quickY = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" });

    function handleMove(e: MouseEvent) {
      const { innerWidth, innerHeight } = window;
      const relX = (e.clientX / innerWidth - 0.5) * 24;
      const relY = (e.clientY / innerHeight - 0.5) * 24;
      quickX(relX);
      quickY(relY);
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-background">
      <div ref={parallaxRef} className="absolute inset-[-3%]">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.4, ease: "easeInOut" }, scale: { duration: 7, ease: "linear" } }}
            className="absolute inset-0"
          >
            <Image
              src={SLIDES[slide].src}
              alt={SLIDES[slide].alt}
              fill
              priority={slide === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/70" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/fst-logo.png"
            alt="FST Global"
            width={280}
            height={280}
            className="mx-auto mb-6 h-36 w-36 sm:h-48 sm:w-48"
            priority
          />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-foreground-dim backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
          Launching Soon
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl font-semibold uppercase leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Coming
          <br />
          <span className="text-accent-light">Soon.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32 }}
          className="mx-auto mt-6 max-w-lg text-base text-foreground-dim sm:text-lg"
        >
          FST Global is bringing trade-priced tyres, alloy wheels and expert
          fitting online. Be first to know when we go live.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.44 }}
          className="mt-9 flex justify-center"
        >
          <WaitlistForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-medium uppercase tracking-wider text-foreground-dim"
        >
          <span>Trade Pricing</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>Expert Fitting</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>UK-Wide Delivery</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.6 }, y: { repeat: Infinity, duration: 1.8, ease: "easeInOut" } }}
        className="relative z-10 mb-8 flex justify-center text-foreground-dim"
      >
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
          <rect x="1" y="1" width="18" height="26" rx="9" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="10" cy="9" r="2" fill="currentColor" />
        </svg>
      </motion.div>
    </section>
  );
}
