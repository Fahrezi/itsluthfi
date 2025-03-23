import styles from './Stacks.module.scss';
import { STACKS } from './Stacks.const';
import StackIcon from './StackIcon';

const Stacks = () => {
  return (
    <section className={styles.stacks}>
      <div className={styles.stacks__title}>
        <h3>
          Stacks
          <span>
            My cappable stacks!
          </span>
        </h3>
      </div>
      <div className={styles.stacks__list}>
        {
          STACKS.map((item, index) => (
            <StackIcon key={index} icon={item.icon} title={item.title} />
          ))
        }
      </div>
    </section>
  )
}

export default Stacks
