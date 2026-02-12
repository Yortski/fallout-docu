const features = [
  {
    title: "STIMPAK",
    description:
      "A ubiquitous post-war medical injector used to rapidly restore health. Standard issue for Vault dwellers and Wasteland survivors alike.",
    image: "./resources/stimpak.jpg",
  },
  {
    title: "PIP-BOY 3000",
    description:
      "A wrist-mounted personal information processor issued by Vault-Tec. Tracks health, inventory, radiation levels, and survival statistics.",
    image: "./resources/pip-boy.jpg",
  },
  {
    title: "NUKA-COLA",
    description:
      "The most popular soft drink in pre-war America. Its radioactive formula remains refreshing—and mildly hazardous—after the bombs fell.",
    image: "./resources/nuka-cola.jpg",
  },
  {
    title: "POWER ARMOR",
    description:
      "Pre-war military exoskeleton designed to enhance strength and protection. Highly sought after by factions and mercenaries across the Wasteland.",
    image: "./resources/power-armor.jpg",
  },
];

const container = document.getElementById("features");

features.forEach(item => {
  const card = document.createElement("div");
  card.className =
    "card image-full w-86 md:w-96 shadow-sm rounded-sm relative overflow-hidden";

  card.innerHTML = `
    <figure class="absolute inset-0">
      <img src="${item.image}" class="w-full h-full object-cover blur-xs" />
      <div class="vignette-vertical absolute inset-0"></div>
    </figure>
    <div class="card-body">
      <h2 class="card-title text-2xl text-white font-semibold">${item.title}</h2>
      <p>${item.description}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">More Info</button>
      </div>
    </div>
  `;

  container.appendChild(card);
});

// const injectCRT = () => {
//     const chatEl = document.querySelector('n8n-chat');
//     if (!chatEl || !chatEl.shadowRoot) return false;

//     const style = document.createElement('style');
//     style.textContent = `
//     .n8n-chat-window {
//         position: relative;
//         overflow: hidden;
//     }

//     /* Scanlines */
//     .n8n-chat-window::before {
//         content: "";
//         position: absolute;
//         inset: 0;
//         pointer-events: none;
//         z-index: 5;

//         background: repeating-linear-gradient(
//             to bottom,
//             rgba(0, 0, 0, 0.95) 10px,
//             rgba(0, 0, 0, 0.95) 1px,
//             rgba(0, 0, 0, 0.8) 2px,
//             rgba(0, 0, 0, 0.8) 4px
//         );

//         animation: scanlines 4s linear infinite;
//         mix-blend-mode: multiply;
//     }

//     /* Static noise */
//     .n8n-chat-window::after {
//         content: "";
//         position: absolute;
//         inset: 0;
//         pointer-events: none;
//         z-index: 6;
//         background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E");
//         opacity: 0.25;
//         animation: static 0.4s steps(2) infinite;
//     }

//     .n8n-chat-window * {
//         animation: crt-flicker 3.5s infinite;
//     }

//     @keyframes scanlines {
//         to { transform: translateY(4px); }
//     }

//     @keyframes static {
//         0% { transform: translate(0,0); }
//         25% { transform: translate(-2px,1px); }
//         50% { transform: translate(1px,-1px); }
//         75% { transform: translate(-1px,2px); }
//         100% { transform: translate(0,0); }
//     }

//     @keyframes crt-flicker {
//         0%,97% { opacity: 1; }
//         98% { opacity: 0.96; }
//         99% { opacity: 1; }
//         100% { opacity: 0.98; }
//     }
//     `;

//     chatEl.shadowRoot.appendChild(style);
//     return true;
// };

// const wait = setInterval(() => {
//     if (injectCRT()) clearInterval(wait);
// }, 50);