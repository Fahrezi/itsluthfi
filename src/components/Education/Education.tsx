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
      <div className={styles.education__title}>
        <h3>Education</h3>
      </div>
      <ul className={styles.education__detail}>
        {
          EDUCATION.map((item, index) => (
            <li className='' key={index}>
              <span>{item.yearStart} - {item.yearEnd}{item.yearEnd > currentYear ? '*' : ''}</span>
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
