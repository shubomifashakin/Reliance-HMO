import Lenis from "lenis";
import "./output.css";
import { gsap } from "gsap";

import { SlowMo } from "gsap/EasePack";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SlowMo);

const lenis = new Lenis({ duration: 4 });

function raf(time: number): void {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

interface App {
  fadeInElementsFn(): void;
  heroAnimation(): void;
}

class App implements App {
  fadeInEls = document.querySelectorAll(".fadeIn");
  hamburgerIcon = document.querySelector("#hamburger-icon");
  dropdown = document.querySelector("#dropdown");
  dropdownOverlay = document.querySelector("#dropdown-overlay");
  stickyNav = document.querySelector("#sticky-nav");
  navbar = document.querySelector("#navbar");

  constructor() {
    this.fadeInElementsFn();

    this.heroAnimation();

    this.hamburgerIcon?.addEventListener("click", () => {
      const tl = gsap.timeline({ defaults: { duration: 0.7 } });

      tl.to(this.dropdownOverlay, { opacity: 1, display: "block" }).fromTo(
        this.dropdown,
        { top: "-100%" },
        {
          top:
            this.navbar && this.stickyNav
              ? this.navbar.clientHeight + this.stickyNav?.clientHeight + "px"
              : "150px",
          display: "block",
        },
        "<",
      );
    });

    this.dropdownOverlay?.addEventListener("click", () => {
      const tl = gsap.timeline({ defaults: { duration: 1 } });

      tl.to(this.dropdownOverlay, { opacity: 0, display: "none" }).to(
        this.dropdown,
        { top: "-100%", display: "none" },
        "<",
      );
    });
  }

  fadeInElementsFn(): void {
    this.fadeInEls?.forEach((c): void => {
      // let mm = gsap.matchMedia();

      // mm.add("(min-width: 1024px)", () => {
      gsap.from(c, {
        opacity: 0,
        duration: 2,
        scale: 0,
        ease: "slow(0.6,0.6,false)",

        scrollTrigger: {
          trigger: c,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
      });
      // });
    });
  }

  heroAnimation(): void {
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power1.inOut" },
    });

    tl.from("#navbar", { opacity: 0, delay: 0.5 })
      .from("#hero-left", { opacity: 0, scale: 0, transformOrigin: "left" })
      .from("#hero-right", { opacity: 0, scale: 0, transformOrigin: "left" });
  }
}
new App();
