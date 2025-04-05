import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import styles from './DynamicIsland.module.scss';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { DetailContext } from '../../context';

type InterfaceArrowLeftProps = {
  width?: number;
  height?: number;
}

const ArrowLeft: React.FC<InterfaceArrowLeftProps> = ({ width=24, height=24 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0"/><path d="M13 18l6 -6"/><path d="M13 6l6 6"/></svg>
  )
}

const DynamicIsland = () => {
  const { detail, setDetail, title, setTitle } = useContext(DetailContext);
  const { scrollY } = useScroll();
  const ref = useRef<HTMLDivElement>(null!);

  const [isActive, setIsActive] = useState(false);
  const [presentLeftOffset, setPresentLeftOffset] = useState<number>(0);
  const [titleWidth, setTitleWidth] = useState<number>(0);
  const [fixedBottom, setFixedBottom] = useState<number>(0);

  const presentSection = document.getElementById("present-section");
  const presentSectionLeft = presentSection?.offsetLeft;
  const titleClientWidth = document.getElementsByClassName("title")[0]?.clientWidth;

  const animateStyleDynamic = {
    bottom: isActive ? (fixedBottom || '48px') : '',
    transform: "translateX(0)",
    left: presentLeftOffset,
    width: titleWidth,
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    if ((latest > (ref.current.clientHeight + 72))) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    if(latest > (presentSection?.getBoundingClientRect().height ?? 0)) {
      const fixedBottomResult = typeof presentSection?.getBoundingClientRect().bottom === "number"
        ? window.innerHeight - presentSection?.getBoundingClientRect().bottom : 0;
      setFixedBottom(fixedBottomResult);
    } else {
      setFixedBottom(0);
    }
  });

  useEffect(() => {
    const windowInnerWidth = window.innerWidth;
    const taxWidth = windowInnerWidth < 768 ? 36 : 0;
    setPresentLeftOffset(typeof presentSectionLeft === "number" ? presentSectionLeft + 2 : presentSectionLeft ?? 0);
    setTitleWidth(titleClientWidth ? titleClientWidth - taxWidth : 0);
  }, [presentSectionLeft, titleClientWidth]);


  return (
    <motion.div
      className={styles['dynamic-island']}
      ref={ref}
      animate={isActive ? animateStyleDynamic : {}}
      transition={{ ease: "easeInOut", type: "tween" }}
      style={{
        textAlign: isActive ? "left" : "center",
        maxHeight: detail ? "unset" : "calc(32px + (2 * 0.5rem))",
      }}
    >
      {detail ? (
        <motion.div className={styles['dynamic-island__detail']}>
          <h3>{title}</h3>
          <ul>
            {
              detail.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
          </ul>
          <motion.div
            whileHover="hovered"
            onClick={() => {
              setDetail(null);
              setTitle("");
            }}
          >
            <span>Hide</span>
            <motion.div
              initial={{ y: "-30%" }}
              variants={{ hovered: { y: "30%" } }}
              transition={{ duration: 0.6, ease: "circInOut" }}
              style={{ display: "flex", flexDirection: "column", gap: "0.5rem", transform: "translateY(-30%)" }}
            >
              <span style={{ rotate: "90deg" }}><ArrowLeft width={16} height={16} /></span>
              <span style={{ rotate: "90deg" }}><ArrowLeft width={16} height={16} /></span>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : (
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
      )}
      {/* I'll explain for you {Array.from({ length: 3 }).map((_, index) => (
        <motion.span initial={{ translateY: 0 }} animate={{ translateY: 2 }} transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 }} style={{ display: 'inline-block' }} key={index}>.</motion.span>
      ))} */}
    </motion.div>
  );
}

export default DynamicIsland;
