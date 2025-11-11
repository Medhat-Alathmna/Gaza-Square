export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[#17ffdc]">Testimonials</p>
          <h2 className="font-display text-3xl text-white">People who trusted us</h2>
        </div>
        <p className="max-w-2xl text-white/70">
          Operators, founders, and support teams across the region count on our team to keep their data reliable and
          their automations safe.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.author} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-[#06060c] p-6">
            <p className="text-lg text-white/90">&ldquo;{testimonial.quote}&rdquo;</p>
            <figcaption>
              <p className="font-display text-white">{testimonial.author}</p>
              <p className="text-sm text-white/60">{testimonial.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
