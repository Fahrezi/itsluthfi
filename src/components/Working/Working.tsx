import styles from './Working.module.scss';
import { WORKING_DATA } from './Working.const';

const Working = () => {
  const workingKeys: string[] = Object.keys(WORKING_DATA);
  return (
    <section className={styles.working}>
      <div className={styles.working__detail}>
        {
          workingKeys.map((item: string, index: number) => (
            <>
              <h3 className={`${styles[`working__header`]} ${styles[`working__header--${item}`]}`}>{item}</h3>
              <ul className={styles['working__list-working']} key={index}>
                {
                  WORKING_DATA[item].map((item, index) => (
                    <li key={index}>
                      <header>
                        {/* <img src={item.image} alt={item.company} /> */}
                        <strong>{item.company}</strong>
                      </header>
                      <div>
                        <h3>{item.title}</h3>
                        <span>{item.timeStart} - {item.timeFinish}</span>
                      </div>
                      <p>{item.description}</p>
                    </li>
                  ))
                }
              </ul>
            </>
          ))
        }
      </div>
    </section>
  )
}

export default Working
