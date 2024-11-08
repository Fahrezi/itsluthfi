'use client'

import Icon from "@/components/Icon";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { IconBriefcase2, IconSchool, IconStack2 } from "@tabler/icons-react";
import Image from "next/image";
import * as motion from "framer-motion/client";

export default function Home() {
  const educations = [
    { title: "Bina Sarana Informatika", date: "2022 - Present", major: "Teknik Informatika, S1" },
    { title: "SMKN 2 Jakarta", date: "2016 - 2019", major: "Rekayasa Perangkat Lunak" },
  ];
  
  const experiencesFullTime = [
    {
      workplace: "INA Digital",
      logo: "ina-digital-logo.png",
      heightLogo: 68,
      widthLogo: 105,
      position: "Frontend Developer",
      date: "2024 - present",
      description: "Developed Goverment’s Application front-end using Next JS.",
    },
    {
      workplace: "MyIndihome",
      logo: "indihome-logo.png",
      heightLogo: 56,
      widthLogo: 200,
      position: "Frontend Developer",
      date: "2020 - 2024",
      description: "Developed My Indihome Web Application front-end using React JS.",
    },
  ];

  const experiencesOthers = [
    {
      workplace: "YMB Furniture",
      logo: "ymb-logo.png",
      heightLogo: 66,
      widthLogo: 140,
      position: "UI/UX, Frontend Developer",
      date: "2024",
      description: "Created design using Figma and developed a Furniture Website using WordPress.",
    },
    {
      workplace: "El Huffadz",
      logo: "elhuffadz-logo.png",
      heightLogo: 66,
      widthLogo: 140,
      position: "UI/UX, Frontend Developer",
      date: "2024",
      description: "Created design using Figma and developed a Furniture Website using WordPress.",
    },
  ];

  const MotionCard = motion.create(Card);
  const MotionBadge = motion.create(Badge);

  return (
    <div className="container p-4">
      <nav className="flex items-center justify-center p-4 mb-6 rounded-full border border-border shadow-lg">
        <h2 className="font-bold text-lg">It's Luthfi</h2>
      </nav>
      <main className="p-4 mb-12">
        <header className="grid grid-cols-2 gap-4 items-center text-primary mb-12 ">
          <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }} className="h-40 w-40 rounded-full bg-[url('../../public/profile_bg.png')] bg-center overflow-hidden">
              <Image src="/me.png" alt="profile" width={474} height={658} />
          </motion.div>
          <motion.h1 
            className="text-xl"
            initial={{ translateX: 100, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
          >
              Hi, I'm <br/><span className="font-bold">Muhammad Luthfi Fahrezi</span>
          </motion.h1>
          <motion.p 
            className="col-span-2 text-xl mt-4"
            initial={{ translateX: -200, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            Dedicated to building websites that 
            <span className="text-blue-700"> engage</span>, 
            <span className="text-blue-700"> perform</span>, 
            and <span className="text-blue-700"> inspire</span>.
          </motion.p>
          <motion.p 
            className="col-span-2 text-xl"
            initial={{ translateX: -200, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Experienced and passionate Front-end Developer with more than 4 years of expertise. 
            Enjoy challenges, embraces learning, and adapts easily.
          </motion.p>
        </header>
        <div className="space-y-4 mb-12">
          <h4 className="flex items-center gap-2 text-primary text-xl">
            <IconStack2 size={32} />
            <span className="font-bold">Stacks</span>
          </h4>
          <div className="space-y-4 mb-8">
            <div className="flex gap-4 items-center justify-center">
              {["react", "nextjs", "tailwind"].map((name, index) => (
                <Icon key={index} name={name} />
              ))}
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {
                ["jest", "git", "nodejs", "astrojs", "redux", "vuejs", "laravel"].map((badge, index) => (
                  <MotionBadge
                    key={index}
                    icon={badge}
                    variant={badge}
                    initial={{ translateX: -100, opacity: 0 }}
                    whileInView={{ translateX: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 + (index * 0.2) }}
                  >
                    {badge}
                  </MotionBadge>
                ))
              }
            </div>
          </div>
          <Card className="p-4 border border-border">
            <CardTitle className="text-[22px] text-center">Result</CardTitle>
          </Card>
        </div>
        <div className="space-y-4 mb-12">
          <motion.h4
            className="flex items-center gap-2 text-primary text-xl"
            initial={{ translateX: -200, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <IconSchool size={32} />
            <span className="font-bold">Education</span>
          </motion.h4>
          {educations.map((education, index) => (
            <MotionCard
              className="flex flex-col p-4 min-h-[180px] mb-4" 
              key={index}
              initial={{ translateX: -200, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.4 + (index * 0.1) }}
            >
              <div>
                <CardTitle className="text-primary font-medium text-[22px]">{education.title}</CardTitle>
                <p className="text-sm text-[#404040]">{education.date}</p>
              </div>
              <p className="text-primary text-xl font-semibold text-right mt-auto">{education.major}</p>
            </MotionCard>
          ))}
        </div>
        <div>
          <div className="space-y-6 mb-8">
            <motion.h4
              className="flex items-center gap-2 text-primary text-xl"
              initial={{ translateX: -200, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <IconBriefcase2 size={32} />
              <span className="font-bold">Experience</span>
            </motion.h4>
            <div className="space-y-6">
              <h3 className="font-medium text-2xl mb-4">Full time</h3>
              {experiencesFullTime.map((experience, index) => (
                <MotionCard
                  className="flex flex-col space-y-4 p-4 min-h-[150px] mb-4"
                  key={index}
                  initial={{ translateX: -200, opacity: 0 }}
                  whileInView={{ translateX: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", bounce: 0.4, duration: 0.4 + (index * 0.1) }}
                >
                  <CardHeader className="flex flex-row gap-4 items-center">
                    <Image className="h-8 w-auto" src={`/${experience.logo}`} alt={experience.workplace} width={experience.widthLogo} height={experience.heightLogo} />
                    <h3 className="font-semibold text-[22px]">{experience.workplace}</h3>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium text-[22px]">{experience.position}</h4>
                    <CardDescription className="text-lg">{experience.date}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <p className="text-lg">{experience.description}</p>
                  </CardFooter>
                </MotionCard>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="font-medium text-2xl mb-4">Others</h3>
            {experiencesOthers.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ translateX: -200, opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.4, duration: 0.4 + (index * 0.1) }}
              >
                <Card className="flex flex-col space-y-4 p-4 min-h-[150px] mb-4" key={index}>
                  <CardHeader className="flex flex-row gap-4 items-center">
                    <Image className="h-8 w-auto" src={`/${experience.logo}`} alt={experience.workplace} width={experience.widthLogo} height={experience.heightLogo} />
                    <h3 className="font-semibold text-[22px]">{experience.workplace}</h3>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium text-[22px]">{experience.position}</h4>
                    <CardDescription className="text-lg">{experience.date}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <p className="text-lg">{experience.description}</p>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <footer className="border border-border shadow-lg rounded-3xl p-6">
        <h4 className="font-bold text-2xl mb-4">Contact me on</h4>
        <div className="flex items-center just gap-x-2 mb-8">
          <Icon name="linkedin" />
          <Icon name="github" />
        </div>
        <div className="flex flex-col gap-y-4 items-end">
          <div className="flex items-center justify-end">
            <input className="border border-border rounded-full pl-4 pr-14 py-2 max-w-[80%]" type="text" name="email" id="email" placeholder="Enter your email" />
            <button className="bg-primary text-white rounded-full px-6 py-2 -ml-12">Send</button>
          </div>
          <p className="text-primary">© 2024 Itsluthfi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
