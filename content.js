export default {
  color: '#ff00b8',
  name: 'Elli Greaves',
  pronouns: 'she/her',
  description: `
Final year MEng Computer Science student at University of Southampton
`,
  about: `
Hi, I'm Elli! I'm currently in my final year of my masters in Computer Science at the University of Southampton. During my time at university, I have been involved in developing software for the University's Formula Student team (SUFST) and I've been on committee for the Zumba Society since 2024!
Outside of university I've been working on a few projects, including a Progressive Web App for budgeting using React and Django, and a console to display telemetry when playing a Forza game using an Arduino!
`,
  photo: 'me.jpeg',
  socials: [
    'https://github.com/Grvs44',
    'https://linkedin.com/in/grvs44',
    'https://bsky.app/profile/grvs44.bsky.social',
  ],
  projects: [
    {
      name: 'Inclusive Venues',
      text: `Inclusive Venues is a Progressive Web App I made as part of my third-year dissertation which lets users leave reviews for places they've been based on inclusivity and safety.
The ratings for each venue are combined into a score which shows how inclusive each venue is and helps other people decide on which venues to visit.
The two main perspectives I explored in my dissertation were: for people, helping others find places to go; for venue stakeholders/organisations, improving their inclusivity in order to encourage more people to visit them.
As well as leaving reviews, anyone can add venues, so there is no limit to which venues can be reviewed.
User-centred design was an important part of this project, with the rating criteria and usability feedback gathered from a survey and focus group to help create an application that works for everyone.`,
      links: [
        {
          text: 'View on GitHub',
          url: 'https://github.com/Grvs44/Inclusive-Venues',
        },
        {
          text: 'View on LinkedIn',
          url: 'https://www.linkedin.com/posts/grvs44_hi-everyone-i-thought-id-share-inclusive-activity-7357014264403881984-SOmq',
        },
      ],
    },
    {
      name: 'Budget Manager',
      text: `A Progressive Web App for budgeting and keeping track of payments that I started in Summer 2023.
This was my first major personal project with React, Redux, and Material UI, which I picked up from working on the SUFST Wireless Telemetry GUI.
Initially, the Django and React code were stored in separate repositories, then for a while the React code moved to the Django repository to simplify installation, then in 2025 the React code moved back to its own repository, to simplify serving and loosen coupling between the two projects, making individual updates easier.`,
      links: [
        {
          text: 'View on GitHub (Django)',
          url: 'https://github.com/Grvs44/budgetmanager',
        },
        {
          text: 'View on GitHub (React)',
          url: 'https://github.com/Grvs44/budgetmanagerpwa',
        },
      ],
    },
    {
      name: 'ARMv1 Interpreter',
      photo: 'armv1.png',
      text: `An assembler and interpreter for ARMv1 Assembly code written in Haskell, initially for a history research project during my third year at university.
Despite being a "simple processor", ARM1 was still very complex so I was only able to create the assembler with partial functionality for my university project. I plan to continue working on this project when I have some spare time.
I chose to create this project to explore the history of the ARM1 processor and its instruction set, which was written by Sophie Wilson, a trans woman who worked at Acorn Computers.
This project is important to me, in these times of trans erasure, to show a slice of how trans people have contributed to computer science and, given how most mobile devices and many laptops are now ARM-based, changed the world.`,
      links: [
        {
          text: 'View on GitHub',
          url: 'https://github.com/Grvs44/ARMv1-Interpreter',
        },
      ],
    },
    {
      name: 'Forza Telemetry Console',
      photo: 'console.jpeg',
      text: `An Arduino-based telemetry console compatible with the Forza racing games.
It uses the games' UDP data out feature to display the RPM (the row of LEDs at the top), lap times (best lap and last lap), current game, whether the game is in menu or in a race, acceleration (in g, displayed on the LED matrix), and acceleration direction on the arrow LEDs.`,
      links: [
        {
          text: 'View on GitHub',
          url: 'https://github.com/Grvs44/Forza-Telemetry-Arduino',
        },
        {
          text: 'View on LinkedIn',
          url: 'https://www.linkedin.com/posts/grvs44_recently-ive-been-working-on-a-new-project-activity-7367209791565254658-SOQg',
        },
      ],
    },
    {
      name: 'LiveFeed',
      photo:
        'https://raw.githubusercontent.com/Grvs44/LiveFeed/refs/heads/main/Frontend/src/assets/LogoClear.png',
      text: `A cloud-based cooking livestreaming platform created as part of a group project during my third year at university.
Chefs upload a recipe and schedule a livestream, where they will cook that recipe. During the livestream, they can move through the steps of the recipe so viewers can follow along. Once the livestream has finished, it is converted to an MP4 file and uploaded to an Azure Blob Storage container, so it can be viewed on-demand. The timings for stepping through the recipe are also saved, so viewers can follow the recipe in the same way. 
The front-end is a React app written in TypeScript and the back-end is an Azure FunctionApp written in Python. Various other cloud services were used, including Azure Static Web Apps, Azure Cosmos DB, Azure Web PubSub, and Google Cloud Livestreaming.`,
      links: [
        { text: 'View on GitHub', url: 'https://github.com/Grvs44/LiveFeed' },
      ],
    },
    {
      name: 'Portfolio Page',
      text: `The code behind this page! This page is a single-page React PWA, installable on supported browsers, using the Material UI library for the design.
I designed this page so that the code and the content are separate, so anyone can use this page with their own content if they like.`,
      links: [
        {
          text: 'View code on GitHub',
          url: 'https://github.com/Grvs44/portfolio-page',
        },
        {
          text: 'View content on GitHub',
          url: 'https://github.com/Grvs44/portfolio-page-content',
        },
      ],
    },
  ],
  skills: [
    'React',
    'Progressive Web Apps (PWAs)',
    'Django',
    'TypeScript/JavaScript',
    'Python',
    'Haskell',
    'C/C++',
    'C#',
    'Java',
    'GitHub',
    'Azure',
    'Agile Methodologies',
    'User-centred Design',
  ],
}
