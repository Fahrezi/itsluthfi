import { motion } from "motion/react";
import styles from "./Titles.module.scss";
import { useEffect, useState } from "react";

type titleProps = {
  listTitle: string[];
  listObserve: boolean[];
};

const Titles: React.FC<titleProps> = ({ listTitle, listObserve }) => {
  const [titleIndex, setTitleIndex] = useState<number>(0);
  
  useEffect(() => {
    for (let i=0; i<listObserve.length; i++) {
      if (listObserve[i]) {
        setTitleIndex(i);
        break;
      }
    }
  }, [listObserve]);

  return (
    <div className={styles.titles}>
      {
        listTitle.map((item, index) => (
          <motion.h2
            key={index}
            animate={{ x: `${titleIndex * -100}%` }}
            transition={{ duration: 0.5, ease: "circInOut" }}
          >
            {item}
          </motion.h2>
        ))
      }
    </div>
  );
}

export default Titles
