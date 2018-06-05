import React, {Component} from 'react';
import {Header} from '../app/header';
import {Footer} from '../app/footer';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export class Detail extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <main style={styles.main}>
          <h1>test for me</h1>
        </main>
        <Footer/>
      </div>
    );
  }
  componentDidMount() {
    console.log('test func');
    const key = () => {
      console.log('es6');
    };
    key();
  }
}
