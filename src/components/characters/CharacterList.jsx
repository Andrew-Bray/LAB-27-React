import React from 'react';
import Character from './Character';
import { Link } from 'react-router-dom';
import styles from './characterlist.css';

const CharacterList = ({ characters }) => {
  const characterElements = characters.map(character => (
    <li className={styles.MyList} key={character.id}>
      <Link to={`/character/${character.name}`}>
        <Character {...character} />
      </Link>
    </li>
  ));

  return (
    <ul>
      {characterElements}
    </ul>  
    
  );
};

export default CharacterList;

