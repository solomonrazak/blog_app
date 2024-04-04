import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Dexter Inc.</div>
      <div className={styles.text}>
        Solomon Razak Creative and Design Consult  © All rights reserved.
      </div>
    </div>
  )
}

export default Footer;