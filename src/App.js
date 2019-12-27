import React, { Component } from 'react';
import { connect } from 'react-redux';
import { helloSagas } from './sagas';
import data from './assets/city.list.json';
import cyrillicToTranslit from 'cyrillic-to-translit-js';

class App extends Component {
  render() {
    const dataRU = data
      .filter(item => item.country === 'RU')
      .map(item => {
        return {
          ...item,
          name: cyrillicToTranslit().reverse(item.name),
        };
      })
      .sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });

    return (
      <div className="app">
        You clicked {this.props.count} times!
        <button type="button" onClick={this.props.helloSagas}>
          click
        </button>
        <div>
          {dataRU.splice(-10, 10).map(item => {
            return <div key={item.name}>{item.name}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    count: state.count,
  }),
  { helloSagas },
)(App);
