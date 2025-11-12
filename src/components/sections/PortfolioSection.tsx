'use client';

import Image from "next/image";
import type { CSSProperties } from "react";

import { useSectionInView } from "@/hooks/useSectionInView";

export type PortfolioProject = {
  title: string;
  description: string;
  image: string;
  tag: string;
};

export type PortfolioCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

type PortfolioSectionProps = {
  projects: PortfolioProject[];
} & PortfolioCopy;

export function PortfolioSection({ projects, eyebrow, title, description }: PortfolioSectionProps) {
  const { ref, isVisible } = useSectionInView({ threshold: 0.25 });

  return (
    <section
      id="projects"
      ref={ref}
      data-section-visible={isVisible ? "true" : "false"}
      className="space-y-8"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="reveal-item" data-anim="left">
          <p className="text-xs uppercase tracking-[0.4em] text-[#17ffdc]">{eyebrow}</p>
          <h2 className="font-display text-3xl text-white sm:text-4xl">{title}</h2>
        </div>
        <p className="reveal-item max-w-2xl text-white/70" data-anim="right">
          {description}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="reveal-item group flex flex-col gap-5 rounded-3xl border border-white/10 bg-[#080911] p-6 shadow-[0_0_0_rgba(0,0,0,0)] transition duration-500 hover:-translate-y-1 hover:border-[#17ffdc]/40 hover:shadow-[0_35px_80px_rgba(0,0,0,0.35)]"
            data-anim="zoom-out"
            style={{ "--stagger": `${index * 90}ms` } as CSSProperties}
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <Image
                src={project.image}
                alt={project.title}
                width={420}
                height={260}
                className="h-auto w-full transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff9f40]">
              <span>{project.tag}</span>
              <div className="h-px flex-1 bg-white/20" />
            </div>
            <h3 className="font-display text-2xl text-white">{project.title}</h3>
            <p className="text-white/70">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
