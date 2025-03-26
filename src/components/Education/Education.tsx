import { motion } from 'motion/react';
import styles from './Education.module.scss';

const EDUCATION = [
  {
    yearStart: 2022,
    yearEnd: 2026,
    institution: 'Universitas Bina Sarana Informatika',
    major: 'Teknologi Informasi',
    title: 'Bachelor Degree (Strata 1)'
  },
  {
    yearStart: 2016,
    yearEnd: 2019,
    institution: 'SMKN 2 Jakarta',
    major: 'Rekayasa Perangkat Lunak',
    title: ''
  },
];

const Education = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className={styles.education}>
      <ul className={styles.education__detail}>
        {
          EDUCATION.map((item, index) => (
            <li className='' key={index}>
              <motion.strong initial={{ y: -40 }} whileInView={{ y: -20 }} transition={{ delay: 0.3 * (index + 1), ease: "backInOut", bounce: 1 }} viewport={{ once: true }}>{item.yearStart} - {item.yearEnd}<span>{item.yearEnd > currentYear ? '*' : ''}</span></motion.strong>
              <p>{item.institution}, {item.major}</p>
              <p>{item.title}</p>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Education
