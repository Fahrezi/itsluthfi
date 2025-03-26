import React, { useEffect, useState } from "react"
import Education from "../Education";
import Stacks from "../Stacks";
import Working from "../Working";
import Titles from "../Titles";

import styles from './PresentSection.module.scss';
import { useMultiRefs } from "../../hooks";


const listSection = [
  { title: 'Education', comp: <Education /> },
  { title: 'Stacks', comp: <Stacks /> },
  { title: 'Working Experience', comp: <Working /> },
];

const listTitle = listSection.map((item) => item.title);  
const PresentSection: React.FC = () => {
  const { getRefs, addRef } = useMultiRefs();
  const [sectionRefs, setSectionRefs] = useState<unknown[]>([]);
  const [listOnView, setListOnView] = useState<boolean[]>([]);

  useEffect(() => {
    const elements = getRefs();
    setSectionRefs(elements);
  }, []);

  useEffect(() => {
    sectionRefs.forEach((item, index) => {
      const observer = new IntersectionObserver((entries) => {
        setListOnView((prev) => {
          const newPrev = [...prev];
          newPrev[index] = entries[0].isIntersecting;
          return newPrev;
        });
      });
      observer.observe(item as Element);
    })
  }, [sectionRefs]);
 
  return (
    <section className={styles['present-section']}>
      <Titles listTitle={listTitle} listObserve={listOnView} />
      <div className={styles['present-section__content']}>
        {
          listSection.map((item) => (
            <div ref={addRef} key={item.title}>{item.comp}</div>
          ))
        }
      </div>
    </section>
  )
}

export default PresentSection
