/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import styles from './styles.module.css';

type DropdownProps = {
  title: String,
  list: Array,
};

// eslint-disable-next-line no-unused-vars
const demoData = [
  {
    id: 0,
    label: 'Monthly',
    value: 'monthly',
    selected: false,
  },
  {
    id: 1,
    label: 'Weekly',
    value: 'weekly',
    selected: false,
  },
  {
    id: 2,
    label: 'Daily',
    value: 'daily',
    selected: false,
  },
  {
    id: 3,
    label: 'Yearly',
    value: 'yearly',
    selected: false,
  },
];

function Dropdown({ title, list }: DropdownProps) {
  const [listItems, setListItems] = useState(demoData);
  const [isOpen, setIsOpen] = useState(false);
  const [newTitle, setTitle] = useState('Monthly');

  const toggleIsOpen = () => {
    setIsOpen((prevVal) => {
      return {
        isOpen: !prevVal,
      };
    });
  };

  const toggleSelected = (id) => {
    // setListItems((prevList) => {
    //   console.log('prevlist: ', id, prevList, prevList[id]);
    //   const temp = prevList;
    //   temp[id].selected = !prevList[id].selected;
    //   return {
    //     list: temp,
    //   };
    // });
  };

  return (
    <div className={styles.ddWrapper}>
      <div className={styles.ddHeader} onClick={() => {}}>
        <div className={styles.ddHeaderTitle}>{newTitle}</div>
        {isOpen ? (
          <div className={`${styles.arrow} ${styles.up}`} />
        ) : (
          <div className={`${styles.arrow} ${styles.down}`} />
        )}
      </div>
      {isOpen && (
        <ul className={styles.ddItemList}>
          {demoData &&
            demoData.map((item) => (
              <li
                className={styles.listItem}
                key={item.label}
                onClick={() => {}}
              >
                {item.label}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
