import styles from '../../styles/Button.module.css'

export default function Button({children}) {
  return (
    <button type="button" className={styles.itsCool}>
      Get Quorte
    </button>
  )
}