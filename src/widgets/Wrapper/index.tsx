import styles from './Wrapper.module.css'

interface WrapperProps {
    children: React.ReactNode;
}


const Wrapper = ({children}: WrapperProps) => {
  return (
    <section className={styles.wrapper}>{children}</section>
  )
}

export default Wrapper