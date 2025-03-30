import { FormEvent, useRef, useState } from 'react';
import styles from './ContactMe.module.scss';
import emailjs from '@emailjs/browser';  

const ContactMe = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formRef = useRef(null);
  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    emailjs
      .sendForm('contact_service', 'template_3z3h4lr', formRef.current ?? '', {
        publicKey: 'fSOeRlU9IX1N6FlkG'
      })
      .then((result) => {
        console.log("Message Sent", result.text);
      })
      .catch(error => {
        console.log(error);
      }).finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <section className={styles.container}>
      <div className={styles.contactme}>
        <div className={styles.contactme__title}>
          <h3>Contact Me</h3>
        </div>
        <form action="#" ref={formRef} className={styles.contactme__form} onSubmit={sendEmail}>
          <input type="text" name="name" id="name" placeholder="Tell me your name" />
          <input type="text" name="email" id="email" placeholder='and your email' />
          <textarea name="message" id="message" cols={30} rows={10} placeholder="Let me know your message" />
          <button type="submit" disabled={isLoading}>{!isLoading ? 'Send to me' : 'Sending...'}</button>
        </form>
      </div>
    </section>
  )
}

export default ContactMe
