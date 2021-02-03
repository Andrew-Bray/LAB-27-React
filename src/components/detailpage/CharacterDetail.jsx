import React from 'react';
import styles from './detailpage.css';
function CharacterDetail({ name, image }) {

  return (
    <main className={styles.detailBox}>
      <div className={styles.CharacterDetail}>
        <img src={image} />
        <h3>{name}</h3>
      </div>
    </main>
  );
}

export default CharacterDetail;
