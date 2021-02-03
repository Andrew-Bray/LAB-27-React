import React, { Component } from 'react';
import { getOneCharacter } from '../../services/xFilesApi';
import CharacterDetail from './CharacterDetail.jsx';


export default class AllCharacters extends Component {
  state = {
    character: {}
  }

  componentDidMount() {
    getOneCharacter(this.props.match.params.name)
      .then(([character]) => this.setState({ character }));
  }

  render() {
    const { character } = this.state;

    return (
      <>
        <CharacterDetail {...character} />
      </>
    );
  }
}
