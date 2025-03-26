import { motion } from 'motion/react';
import styles from './StackIcon.module.scss';

type StackIconProps = {
  icon: string;
  title: string;
}

const StackIcon: React.FC<StackIconProps> = ({ icon, title }) => {
  return (
    <motion.div className={styles['stack-icon']} whileHover="hover">
      <motion.span variants={{ hover: { y: "-100%" } }}>
        <img src={icon} alt={title} />
      </motion.span>
      <motion.h3 variants={{ hover: { y: "-100%" } }}>{title}</motion.h3>
    </motion.div>
  )
}

export default StackIcon
