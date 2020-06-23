/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import styles from './styles.module.css';

type HeaderButtonProps = {
  onButtonClick: Function,
};

function HeaderButton({ onButtonClick }: HeaderButtonProps) {
  return (
    <div className={styles.container} onClick={onButtonClick}>
      <div className={styles.rectangleRight} />
      <div className={styles.triangleWhite} />
      <div className={styles.rectangleLeft} />
      <div className={styles.triangleBlue} />
      {/* <div className={styles.diffArrow} /> */}
    </div>
  );
}

export default HeaderButton;
