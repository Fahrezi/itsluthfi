interface workingData {
  company: string;
  image: string;
  title: string;
  timeStart: string;
  timeFinish: string;
  description: string;
  detail?: string[];
}

interface workingDataList {
  [key: string]: workingData[],
}

export const WORKING_DATA: workingDataList = {
  fulltime: [
    {
      company: 'Super Apps Project',
      image: 'https://imageplaceholder.net/50x30',
      title: 'Frontend Developer',
      timeStart: '02/2025',
      timeFinish: 'present',
      description: 'Developed Super Apps Projects with React JS with Vite.',
      detail: [
        "Involved in the preparation of a dynamic project repository using Vite, ensuring scalability and maintainability.",
        "Developed a Progressive Web App (PWA) repository to enhance performance and user experience."
      ],
    },
    {
      company: 'USU',
      image: 'https://imageplaceholder.net/50x30',
      title: 'Frontend Developer',
      timeStart: '10/2024',
      timeFinish: '12/2024',
      description: 'Developed Dashboard for USU (Universitas Sumatera Utara) Office with Angular JS.',
      detail: [
        "Spearheaded the UI revamp with pixel-perfect precision, elevating the platform's visual appeal and usability.",
        "Integrated real-time data seamlessly into the dashboard, optimizing data presentation and insights.",
      ],
    },
    {
      company: 'INA Digital',
      image: 'https://imageplaceholder.net/50x30',
      title: 'Frontend Developer',
      timeStart: '05/2024',
      timeFinish: '09/2024',
      description: 'Developed government’s Application front-end using Next JS.',
      detail: [
        "Delivered high-quality, pixel-perfect UI slicing for multiple flagship projects, including BPJS Kesehatan, BPJS Ketenagakerjaan, Dukcapil, and Kartu Indonesia Pintar Kuliah.",
        "Contributed to the development of INA Digital’s official website using Astro JS, enhancing performance and maintainability.",
      ],
    },
    {
      company: 'myIndihome',
      image: 'https://imageplaceholder.net/50x30',
      title: 'Frontend Developer',
      timeStart: '05/2020',
      timeFinish: '05/2024',
      description: 'Developed My Indihome Web Application front-end using ReactJS.',
      detail: [
        "Designed and implemented a CMS integrated with the user-facing website, improving content update efficiency by 50%.",
        "Resolved critical bugs and introduced new features, ensuring a smoother user experience and increased platform stability.",
      ],
    },
  ],
  others: [
    {
      company: 'Menata Hati Website',
      image: 'https://imageplaceholder.net/50x30',
      title: 'Fullstack Developer',
      timeStart: '10/2024',
      timeFinish: '12/2024',
      description: 'Developed Event Websites with Next JS Monolith.',
      detail: [
        "Enhancing the homepage UI, finalizing the ticketing feature, and optimizing the user and dashboard pages to ensure the platform is fully prepared for public use."
      ]
    },
    {
      company: 'YMB Furniture',
      image: 'https://imageplaceholder.net/50x30',
      title: 'UI/UX, Frontend Developer',
      timeStart: '05/2024',
      timeFinish: '07/2024',
      description: 'Created design using Figma and developed a furniture website using WordPress.',
      detail: [
        "Conducting a complete UI revamp across all pages to improve user experience and visual appeal."
      ]
    },
    {
      company: 'El Huffadz',
      image: 'https://imageplaceholder.net/50x30',
      title: 'UI/UX, Frontend Developer',
      timeStart: '04/2024',
      timeFinish: '05/2024',
      description: 'Created design using Figma and developed a wedding organizer using WordPress.',
      detail: [
        "Developing a wedding organizer website from UI/UX design to deployment, ensuring a seamless and engaging user experience."
      ]
    },
  ]
}
