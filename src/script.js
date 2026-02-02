import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const config = {
    responsive: [
      {
        maxWidth: 1400,
        options: {
          motion: {
            enable: false
          },
          particles: {
            number: {
              value: 0
            },

            links: {
              enable: false
            }

          },
          interactivity: {
            enable: false,
            events: {
              onHover: {
                enable: false
              }
            }
          }
      }
    }
    ],
    autoplay: true,
    fullscreen: {
      enable: false,
      zIndex: -1
    },
    background: {
        color: {
            value: "#0f1a27"
        }},
    interactivity: {
      modes: {
        grab: {
          distance: 400,
        }
      },
      events: {
        onHover: {
          enable: false,
          mode: "grab",
      }}
    },
    particles: {
        links: {
          enable: true,
          distance: 150,
        },
        number: { 
          value: 20
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type:'circle'},
        size: {
            value: { max: 5, min: 1 }
        },
        move: {
            enable: true,
            speed: 2
        },
        opacity: {
          value: 1

        }
    
}};


async function main() {
    await loadSlim(tsParticles);
    await tsParticles.load({
      id: "tsparticles",
      options: config,
  })
    .then((container) => {
    console.log("callback - tsparticles config loaded");
  })
  .catch((error) => {
    console.error(error);
  });
      }
const particles = tsParticles.domItem(0);

main();

