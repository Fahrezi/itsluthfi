import styles from './StackIcon.module.scss';

type StackIconProps = {
  icon: string;
  title: string;
}

const StackIcon: React.FC<StackIconProps> = ({ icon, title }) => {
  return (
    <div className={styles['stack-icon']}>
      <h3>{title}</h3>
      <img src={icon} alt={title} />
    </div>
  )
}

export default StackIcon
