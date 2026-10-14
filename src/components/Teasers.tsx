"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ITEMS = [
  {
    title: "Tyres",
    copy: "Leading brands and reliable budget options, matched exactly to your vehicle.",
    img: "/images/hero-tire.jpg",
  },
  {
    title: "Wheels",
    copy: "Staggered fits and custom finishes for everyday cars and performance builds.",
    img: "/images/alloy-wheel.jpg",
  },
  {
    title: "Fitting",
    copy: "Balancing, alignment and TPMS handled by trusted local fitting partners.",
    img: "/images/workshop.jpg",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Teasers() {
  return (
    <section className="relative bg-background px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-xl text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-accent-light">
            What&apos;s Coming
          </span>
          <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
            Everything on Four Wheels
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-3"
        >
          {ITEMS.map((item) => (
            <motion.div
              key={item.title}
              variants={card}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-dim">
                  {item.copy}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
