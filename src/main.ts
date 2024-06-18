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
  section2Anim(): void;
}

class App implements App {
  fadeInEls = document.querySelectorAll(".fadeIn");

  constructor() {
    this.fadeInElementsFn();
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
}
new App();
