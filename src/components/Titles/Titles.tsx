import { motion, useScroll } from "motion/react";
import styles from "./Titles.module.scss";
import { useEffect, useRef, useState } from "react";

type titleProps = {
  listTitle: string[];
  listObserve: boolean[];
};

const Titles: React.FC<titleProps> = ({ listTitle, listObserve }) => {
  const [titleIndex, setTitleIndex] = useState<number>(0);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: titleRef, offset: ["end end", "start start"] });
  
  useEffect(() => {
    for (let i=0; i<listObserve.length; i++) {
      if (listObserve[i]) {
        setTitleIndex(i);
        break;
      }
    }
  }, [listObserve]);

  return (
    <div ref={titleRef} className={`${styles.titles}`}>
      <motion.div className={styles.titles__indicator} style={{ originX: 0, scaleX: scrollYProgress}}></motion.div>
      {
        listTitle.map((item, index) => (
          <motion.h2
            className="title"
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
