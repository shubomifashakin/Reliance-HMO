import Lenis from "lenis";
import "./output.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({ duration: 4 });

function raf(time: number): void {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

interface App {
  section2: Element | null;
  fadeInElementsFn(): void;
  heroAnimation(): void;
}

class App implements App {
  fadeInEls = document.querySelectorAll(".fadeIn");

  constructor() {
    this.fadeInElementsFn();

    this.heroAnimation();
  }

  fadeInElementsFn(): void {
    this.fadeInEls?.forEach((c): void => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.from(c, {
          opacity: 0,
          duration: 1,
          scale: 0,

          scrollTrigger: {
            trigger: c,
            start: "bottom bottom",
            end: "bottom bottom",
            scrub: 1,
          },
        });
      });
    });
  }

  heroAnimation(): void {
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power1.inOut" },
    });

    tl.from("#navbar", { opacity: 0, delay: 0.5 })
      .from("#hero-heading", {
        opacity: 0,
        scale: 0,
      })
      .from("#hero-left", { opacity: 0, scale: 0, transformOrigin: "left" })
      .from("#hero-right", { opacity: 0, scale: 0, transformOrigin: "left" });
  }
}
new App();
