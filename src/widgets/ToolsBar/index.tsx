import React, { type FC } from 'react';

import styles from '../ToolsBar/ToolsBar.module.css';

interface IToolsBar {
  children: React.ReactNode;
}

const ToolsBar: FC<IToolsBar> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default ToolsBar;
