import styles from './Stacks.module.scss';
import { STACKS } from './Stacks.const';
import StackIcon from './StackIcon';

const Stacks = () => {
  return (
    <div className={styles.stacks__list}>
      {
        STACKS.map((item, index) => (
          <StackIcon key={index} icon={item.icon} title={item.title} />
        ))
      }
    </div>
  )
}

export default Stacks
