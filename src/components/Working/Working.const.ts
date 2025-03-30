interface workingData {
  company: string;
  image: string;
  title: string;
  timeStart: string;
  timeFinish: string;
  description: string;
  detail?: detailWorkingData;
}

interface detailWorkingData {
  description: string;
  achievments: string[];
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
      description: 'Developed  Super Apps Projects with Rea ct JS with Vite.',
      detail: {
        description: 'Developed  Super Apps Projects with React JS with Vite.',
        achievments: [
          "Involved in the preparation of a dynamic project repository using Vite, ensuring scalability and maintainability.",
          "Developed a Progressive Web App (PWA) repository to enhance performance and user experience."
        ]
      }
    },
    {
      company: 'USU',
      image: 'https://imageplaceholder.net/50x30',
      title: 'Frontend Developer',
      timeStart: '10/2024',
      timeFinish: '12/2024',
      description: 'Developed Dashboard for USU (Universitas Sumatera Utara) Office with Angular JS.',
    },
    {
      company: 'INA Digital',
      image: 'https://imageplaceholder.net/50x30',
      title: 'Frontend Developer',
      timeStart: '05/2024',
      timeFinish: '09/2024',
      description: 'Developed government’s Application front-end using Next JS.',
    },
    {
      company: 'myIndihome',
      image: 'https://imageplaceholder.net/50x30',
      title: 'Frontend Developer',
      timeStart: '05/2020',
      timeFinish: '05/2024',
      description: 'Developed My Indihome Web Application front-end using ReactJS.',
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
    },
    {
      company: 'YMB Furniture',
      image: 'https://imageplaceholder.net/50x30',
      title: 'UI/UX, Frontend Developer',
      timeStart: '05/2024',
      timeFinish: '07/2024',
      description: 'Created design using Figma and developed a furniture website using WordPress.',
    },
    {
      company: 'El Huffadz',
      image: 'https://imageplaceholder.net/50x30',
      title: 'UI/UX, Frontend Developer',
      timeStart: '04/2024',
      timeFinish: '05/2024',
      description: 'Created design using Figma and developed a wedding organizer using WordPress.',
    },
  ]
}
