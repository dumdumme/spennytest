/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import exportButton from '../../assets/exportButton.png';
import styles from './styles.module.css';

type HeaderProps = {
  title: String,
  buttonAction: Function,
};

// eslint-disable-next-line no-unused-vars
function Header({ title, buttonAction }: HeaderProps) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <button
        type="button"
        onClick={buttonAction}
        style={{
          border: 'none',
          background: 'transparent',
          outline: 'none',
          paddingRight: 0,
        }}
      >
        <img src={exportButton} alt="" style={{ height: '22px' }} />
      </button>
    </div>
  );
}

export default Header;
