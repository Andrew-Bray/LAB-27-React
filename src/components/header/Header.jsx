import React from 'react';
import styles from './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={styles.MyHeader}>
      <h1>Welcome to my X-Files React Page</h1>
      <div className="my-links">
        <Link to="/">Home Page</Link>
        <Link to="/list">X-Files Character List</Link>
      </div>
    </header>
  );
}
