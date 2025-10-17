import styles from '../ToolsBar/ToolsBar.module.css';

const ToolsBar = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default ToolsBar;
