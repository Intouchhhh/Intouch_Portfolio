export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  fullDescription: string
  media: {
    type: "image" | "video" | "youtube"
    url: string
    caption?: string
  }[]
  gddUrl?: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    id: "Ninja-runner",
    title: "Ninja runner",
    description: "A fast-paced endless runner featuring smooth jump-and-run mechanics.Run and dodge obstacles and see how far you can go.",
    image: "/ER_menu.png",
    tags: ["Unity", "C#", "Game programmer"],
    githubUrl: "https://github.com/Intouchhhh/Ninja-Runner",
    fullDescription:
      "A simple endless runner with jump-to-survive gameplay. Created as a 3-day solo Unity challenge to practice core game development fundamentals.",
    media: [
      {
        type: "image",
        url: "/ER_menu.png",
        caption: "Ninja runner menu",
      },
      {
        type: "image",
        url: "/ER_gameplay.png",
        caption: "gameplay",
      },
      {
        type: "image",
        url: "/ER_gameplay2.png",
        caption: "gameplay",
      },
    ],
    demoUrl: "#",
  },
  {
    id: "Rival-island",
    title: "Rival island",
    description: "an exhilarating turn-based survival card game designed for players seeking both enjoyment and friendly competition.",
    image: "/RI_menu.png",
    tags: ["Unity", "C#", "Game designer", "Game programmer"],
    githubUrl: "https://github.com/Intouchhhh/Rival-island",
    fullDescription:
      "Rival Island is a turn-based survival card game focused on strategic play, enjoyment, and friendly competition. This core-mechanics prototype was developed as a university project in my third year, where I worked as the lead game designer and Unity game programmer.",
    media: [
      {
        type: "image",
        url: "/RIgameplay1.gif",
        caption: "Drawing cards",
      },
      {
        type: "image",
        url: "/RIgameplay2.gif ",
        caption: "Using action cards and crafting systems",
      },
    ],
    gddUrl: "https://docs.google.com/document/d/e/2PACX-1vR8Uvlc4icxLO34aDkVJx6_E4sLoPkoFpSwaQixgOvmZr6fjAi0zcR5e9YycmMLKmB-p-qbq8POrTYL/pub",
  },
  {
    id: "AAIA",
    title: "ADAPTIVE ARTIFICIAL INTELLIGENCE AGENT IN GAMEDEVELOPMENT",
    description: "Competitive space shooter with realistic physics and team-based tactical gameplay",
    image: "/AAIA.png",
    tags: ["Unity", "C#", "ML", "Training level designer", "Unity programmer","Research"],
    githubUrl: "https://github.com/Intouchhhh/AAIA",
    fullDescription:
      "Adaptive 2D platformer AI system designed for intelligent agent behavior and seamless Unity integration. Developed as part of my final year project in computer engineering, this AI system utilizes machine learning techniques to create adaptive and challenging enemy behaviors in a competitive space shooter game. The project involved designing training levels, implementing realistic physics-based movement, and creating team-based tactical gameplay to enhance player engagement.",
    media: [
      {
        type: "image",
        url: "/AAIA.png",
        caption: "Training level for AI agents",
      },
      {
        type: "image",
        url: "/AAIA_rewardtrack.png",
        caption: "Reward tracking during training",
      },
      {
        type: "image",
        url: "/AiPerspective.png",
        caption: "AI agent's perspective of the level",
      },
    ],
    demoUrl: "https://drive.google.com/file/d/1238FCVVNiouylJAjSvUmcE05rEb3tnH1/view?usp=sharing",
  },
  {
    id: "The-bus-stop",
    title: "The bus stop",
    description: "A first-person psychological horror game where you must survive a late-night bus ride home through 5 stops.",
    image: "/TBS_menu.png",
    tags: ["Unity", "C#", "Game programmer", "Game designer", "Level designer"],
    githubUrl: "https://github.com/witeseb/IAmNotThePassanger",
    fullDescription:
      "A first-person psychological horror game where you must survive a late-night bus ride home through 5 stops. Anomalies lurk both on the bus and at each stop—board the wrong bus or exit at the wrong stop, and you'll face the consequences. With only 3 prayers to save yourself, every observation and decision matters.",
    media: [
      {
        type: "image",
        url: "/TBS_menu.png",
        caption: "The bus stop menu screen",
      },
      {
        type: "image",
        url: "/TBS_gameplay.png",
        caption: "Gameplay screenshot",
      },
      {
        type: "image",
        url: "/TBS_anomaly1.png",
        caption: "Anomaly encounter on the bus",
      },
      {
        type: "image",
        url: "/TBS_anomaly2.png",
        caption: "Anomaly encounter outside the bus",
      }
    ],
    gddUrl: "https://docs.google.com/document/d/1GX5DQpiGxLjoa8kcfimqL33aRTOsdNb6jfmLSKZZb8w/edit?usp=sharing",
    demoUrl: "https://kahn88.itch.io/the-bus-stop"
  },
]
