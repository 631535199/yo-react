import React, {Component} from 'react';
import axios from 'axios';

import {Tech} from './tech';

import {Link} from 'react-router';

const styles = {
  container: {
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '1.5rem'
  },
  techs: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  link: {
    color: '#aaaaaa'
  }
};

export class Techs extends Component {
  constructor() {
    super();
    this.state = {techs: []};
  }

  componentDidMount() {
    axios
      .get('app/techs/techs.json')
      .then(response => {
        this.setState({techs: response.data});
      });
  }

  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.h2}>
          <h3 style={styles.link}>better more</h3>
          <Link to="/detail">Cooked with all these awesome technologies:</Link>
        </h2>
        <div style={styles.techs}>
          {this.state.techs.map((tech, i) => (
            <Tech key={i} tech={tech}/>
          ))}
        </div>
      </div>
    );
  }
}
