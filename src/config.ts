// Site config. Edit this one file to update your name, tagline, and links.
// Everything on the site (nav, hero, footer, page <title>s) reads from here.

export const site = {
  /** Your name, shown in the nav, hero, and footer. */
  name: 'Kirk Brooks',

  /** A short role or eyebrow label. */
  role: 'Engineer and Founder',

  /** The hero line, the big statement on the home page. */
  tagline: 'I find the real problem and build the fix.',

  /** A short positioning paragraph shown beneath the hero line. */
  intro:
    'I am a mechanical engineer with aerospace roots who became a software ' +
    'builder. The constant across everything I do is the same move: find a ' +
    'real problem people are working around badly, make the durable call, and ' +
    'own the thing that solves it. I am domain-agnostic on purpose, but one ' +
    'thread does run through all of it: I love building things that help other ' +
    'builders.',

  /** Where you are based, shown as a small line in the hero. */
  location: 'Savannah, Georgia',

  /** Availability line, shown in the hero and the About contact section. */
  availability: 'Open to full-time roles and consulting. Remote, or happy to relocate.',

  // Contact and social links. Leave a value blank to hide that link.
  email: 'hello@kirklandbrooks.com',
  socials: {
    github: 'https://github.com/TRget88',
    linkedin: 'https://www.linkedin.com/in/kirkland-brooks',
  },
};

export type SiteConfig = typeof site;
