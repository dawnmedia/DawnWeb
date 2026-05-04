import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

// --- Hero animations (run on page load) ---
function initHeroAnimations() {
  const heroSection = document.querySelector("[data-hero]");
  if (!heroSection || prefersReducedMotion) return;

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Badge fade in
  tl.from("[data-hero-badge]", {
    opacity: 0,
    y: 20,
    duration: 0.5,
  });

  // Title
  tl.from(
    "[data-hero-title]",
    {
      opacity: 0,
      y: 32,
      duration: 0.6,
    },
    "-=0.2",
  );

  // Subtitle
  tl.from(
    "[data-hero-subtitle]",
    {
      opacity: 0,
      y: 20,
      duration: 0.5,
    },
    "-=0.3",
  );

  // CTA buttons
  tl.from(
    "[data-hero-cta]",
    {
      opacity: 0,
      y: 20,
      duration: 0.4,
    },
    "-=0.2",
  );

  // Trust indicators
  tl.from(
    "[data-hero-trust] > *",
    {
      opacity: 0,
      y: 15,
      duration: 0.3,
      stagger: 0.1,
    },
    "-=0.1",
  );

  // Hero image
  tl.from(
    "[data-hero-image]",
    {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      ease: "power2.out",
    },
    "-=0.5",
  );
}

// --- Scroll-triggered section reveals ---
function initScrollAnimations() {
  if (prefersReducedMotion) return;

  // Generic reveal for sections
  const revealSections = document.querySelectorAll("[data-reveal]");
  revealSections.forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: "power2.out",
    });
  });

  // Staggered card reveals
  const staggerGroups = document.querySelectorAll("[data-stagger-parent]");
  staggerGroups.forEach((group) => {
    const children = group.querySelectorAll("[data-stagger-child]");
    gsap.from(children, {
      scrollTrigger: {
        trigger: group,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 30,
      duration: 0.5,
      stagger: 0.12,
      ease: "power2.out",
    });
  });

  // Process timeline animation
  const processLine = document.querySelector("[data-process-line]");
  if (processLine) {
    gsap.from(processLine, {
      scrollTrigger: {
        trigger: processLine,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1.2,
      ease: "power2.inOut",
    });
  }

  // Process step dots
  const processDots = document.querySelectorAll("[data-process-dot]");
  gsap.from(processDots, {
    scrollTrigger: {
      trigger: processDots[0]?.parentElement,
      start: "top 85%",
      toggleActions: "play none none none",
    },
    scale: 0,
    duration: 0.4,
    stagger: 0.2,
    ease: "back.out(2)",
    delay: 0.5,
  });
}

// --- Parallax on decorative elements ---
function initParallax() {
  if (prefersReducedMotion) return;

  const parallaxElements = document.querySelectorAll("[data-parallax]");
  parallaxElements.forEach((el) => {
    const speed = parseFloat(el.getAttribute("data-parallax") || "0.5");
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: () => speed * 100,
      ease: "none",
    });
  });
}

// Initialize all animations
document.addEventListener("DOMContentLoaded", () => {
  initHeroAnimations();
  initScrollAnimations();
  initParallax();
});

// Re-initialize on Astro page transitions
document.addEventListener("astro:page-load", () => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
  initHeroAnimations();
  initScrollAnimations();
  initParallax();
});
