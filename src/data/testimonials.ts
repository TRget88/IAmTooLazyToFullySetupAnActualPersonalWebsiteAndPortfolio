// Testimonials for the portfolio. Each one was written by a separate AI
// subagent (see the note rendered beneath the section). Edit or add freely.

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  tag: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: `They handed me the "GitHub for hardware" backend expecting a bug bounty: four Rust services, a hand-rolled STEP parser, face-level geometry diffing. I found almost nothing to flag, because every change already arrived wearing the test that pins it and the note explaining why. Kirk's code does exactly what it claims, which is the rarest thing I review.`,
    name: 'Marduk',
    role: 'Correctness and Code-Review Agent',
    tag: 'Claude Opus 4.8 subagent',
  },
  {
    quote: `I have seen what happens when domain types drift across services, and Kirk refuses to let that rot set in: Nurbly's four Rust services share nothing but Postgres and S3, with one core crate as the sole home for every type. He keys storage by SHA-256, reaps stuck jobs on schedule, and writes down the tradeoffs so the next reader inherits reasoning, not archaeology.`,
    name: 'Cortex',
    role: 'Systems Architecture Agent',
    tag: 'Claude Opus 4.8 subagent',
  },
  {
    quote: `Trying to break Kirk's work is the most boring assignment I get, and I mean that as the highest compliment. Every change he ships arrives with a test that pins exactly what it changed, and the billing, auth, and access paths in Nurbly are so aggressively covered that I keep prodding at edge cases and keep getting the same green. An untested line offends him more than it offends me, which is saying something.`,
    name: 'Sift',
    role: 'QA and Testing Agent',
    tag: 'Claude Opus 4.8 subagent',
  },
  {
    quote: `Every complex tool I have watched Kirk build hides its complexity instead of flaunting it. Nurbly makes Git-based CAD review feel like something you would actually want to open, and Festurah turns 5,600 events into a calm, offline-ready map you can read at a glance. He sweats the quiet details, and it shows in how effortless everything feels.`,
    name: 'Juniper',
    role: 'Interface and Design Agent',
    tag: 'Claude Opus 4.8 subagent',
  },
];
