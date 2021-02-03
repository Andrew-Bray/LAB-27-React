
// eslint-disable-next-line max-len
const xFilesURL = 'https://xfiles-api.herokuapp.com/api/v1/characters?category=Main_characters';

export const getCharacters = () => {
  return fetch(xFilesURL)
    .then(res => res.json())
    .then(json => json.results);
};


export const getOneCharacter = (name) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${name}`)
    .then(res => res.json());
};

