import styles from './ContactMe.module.scss';

const ContactMe = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contactme}>
        <div className={styles.contactme__title}>
          <h3>Contact Me</h3>
        </div>
        <form action="#" className={styles.contactme__form}>
          <input type="text" name="name" id="name" placeholder="Tell me your name" />
          <input type="text" name="email" id="email" placeholder='and your email' />
          <textarea name="message" id="message" cols={30} rows={10} placeholder="and now your message" />
          <button type="submit">Send to me</button>
        </form>
      </div>
    </section>
  )
}

export default ContactMe
