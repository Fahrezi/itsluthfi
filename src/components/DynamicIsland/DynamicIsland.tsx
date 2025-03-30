import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import styles from './DynamicIsland.module.scss';
import React, { useEffect, useRef, useState } from 'react';

const ArrowLeft: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0"/><path d="M13 18l6 -6"/><path d="M13 6l6 6"/></svg>
  )
}

const DynamicIsland = () => {
  const { scrollY } = useScroll();
  const ref = useRef<HTMLDivElement>(null!);
  const [isActive, setIsActive] = useState(false);
  const [presentLeftOffset, setPresentLeftOffset] = useState<number>(0);
  const [titleWidth, setTitleWidth] = useState<number>(0);
  const presentSection = document.getElementById("present-section");
  const presentSectionLeft = presentSection?.offsetLeft;
  const titleClientWidth = document.getElementsByClassName("title")[0]?.clientWidth;
  const [fixedBottom, setFixedBottom] = useState<number>(0);

  const animateStyleDynamic = {
    top: fixedBottom || "90%",
    transform: "translateX(0)",
    left: presentLeftOffset,
    width: titleWidth,
    // bottom: fixedBottom ? fixedBottom : "unset"
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    if ((latest > (ref.current.clientHeight + 72))) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    if(latest > (presentSection?.getBoundingClientRect().height ?? 0)) {
      const fixedBottomResult = typeof presentSection?.getBoundingClientRect().bottom === "number" ? presentSection?.getBoundingClientRect().bottom - 48 : 0;
      setFixedBottom(fixedBottomResult);
    } else {
      setFixedBottom(0);
    }
  });

  useEffect(() => {
    const windowInnerWidth = window.innerWidth;
    const taxWidth = windowInnerWidth < 768 ? 32 : 0;
    setPresentLeftOffset(presentSectionLeft ?? 0);
    setTitleWidth(titleClientWidth ? titleClientWidth - taxWidth : 0);
  }, [presentSectionLeft, titleClientWidth]);


  return (
    <motion.div
      className={styles['dynamic-island']}
      ref={ref}
      animate={isActive ? animateStyleDynamic : {}}
      transition={{ ease: "easeInOut", type: "tween" }}
      style={{ textAlign: isActive ? "left" : "center" }}
    >
      <motion.div animate={{ x: isActive ? "0%" : "-100%" }} transition={{ duration: 0.5, ease: "circInOut" }}>
        <span style={{ marginRight: isActive ? "2rem" : "0", display: "flex", alignItems: "center", transform: !isActive ? "translateX(-50%)" : "translateX(0)" }}>
          <p style={{ flexGrow: 1 }}>Click detail to expand</p>
          <motion.span
            initial={{ x: 0 }}
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            style={{ display: 'inline-flex', width: 24, justifyContent: "center" }}
          >
            <ArrowLeft />
          </motion.span>
        </span>
        <span>Dynamic Island 🏝</span>
      </motion.div>
      {/* I'll explain for you {Array.from({ length: 3 }).map((_, index) => (
        <motion.span initial={{ translateY: 0 }} animate={{ translateY: 2 }} transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 }} style={{ display: 'inline-block' }} key={index}>.</motion.span>
      ))} */}
    </motion.div>
  );
}

export default DynamicIsland;
