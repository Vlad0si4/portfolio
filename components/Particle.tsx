"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);
  return (
    <Particles
      className="h-screen"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 120,
              duration: 0.5,
            },
          },
        },

        particles: {
          color: {
            value: "#EE0F0F",
          },
          links: {
            color: "#EE0F0F",
            distance: 170,
            enable: true,
            opacity: 0.5,
            width: 2.5,
          },
          collisions: {
            enable: true,
          },
          move: {
            enable: true,
            direction: "top-left",
            outModes: {
              default: "bounce",
            },
            random: true,
            straight: false,
            speed: 1.2,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 150,
          },
          opacity: {
            value: 0.4,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
