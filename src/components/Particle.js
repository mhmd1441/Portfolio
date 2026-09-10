import React, { useCallback } from "react";
import Particles from "react-tsparticles";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Particle() {
  const particlesInit = useCallback(async () => {}, []);

  // Skip the animation entirely for visitors who asked their OS to reduce motion.
  if (prefersReducedMotion()) return null;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        detectRetina: false,
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 1500,
            },
          },
          links: {
            enable: false,
          },
          move: {
            enable: true,
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              quantity: 1,
            },
          },
        },
      }}
    />
  );
}

export default Particle;
