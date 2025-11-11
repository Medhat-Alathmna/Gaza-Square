import Image from "next/image";

export type PortfolioProject = {
  title: string;
  description: string;
  image: string;
  tag: string;
};

type PortfolioSectionProps = {
  projects: PortfolioProject[];
};

export function PortfolioSection({ projects }: PortfolioSectionProps) {
  return (
    <section id="projects" className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[#17ffdc]">Portfolio / Case Studies</p>
          <h2 className="font-display text-3xl text-white sm:text-4xl">Proof in production</h2>
        </div>
        <p className="max-w-2xl text-white/70">
          A sampling of the operating systems, booking tools, and ERP suites we have launched in Gaza, the Gulf, and
          Europe. Every engagement integrates tightly with legacy hardware and modern cloud.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="group flex flex-col gap-5 rounded-3xl border border-white/10 bg-[#080911] p-6">
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
