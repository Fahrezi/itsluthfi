import styles from './Header.module.scss';
import { motion } from 'motion/react';

const Header = () => {
  const translations: { [key: string]: string } = {
    en: 'Hi, I\'m',
    es: 'Hola, soy',
    fr: 'Bonjour, je suis',
    ar: 'مرحبا، أنا', // Arabic
    zh: '你好，我是', // Simplified Chinese
    ko: '안녕하세요, 저는', // Korean
    ru: 'Привет, я', // Russian
    de: 'Hallo, ich bin', // German
    it: 'Ciao, sono', // Italian
    ja: 'こんにちは、私は', // Japanese
  };
  
  const translationKeys = Object.keys(translations);

  return (
    <header className={styles.header}>
      <div className={styles.header__description}>
        <h1>
          <div>
            <ul style={{ "--length": translationKeys.length } as React.CSSProperties}>
              {[...translationKeys, ...translationKeys].map((key, index) => (
                <li key={index}>{translations[key]}</li>
              ))}
            </ul>
          </div>
          Muhammad Luthfi Fahrezi
        </h1>
        <p>
          Dedicated to building websites that <span>engage</span>, <span>perform</span>, and <span>inspire</span>.
        </p>
        <p>Experienced and passionate Front-end Developer with more than 4 years of expertise. Enjoy challenges, embraces learning, and adapts easily.</p>
      </div>
      <div className={styles.header__image}>
        <motion.img src="/assets/me.png" alt="me" />
      </div>
    </header>
  )
}

export default Header
