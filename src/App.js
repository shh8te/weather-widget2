import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestData } from './actions';
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
        <input className="input" value="" />
        <div className="input__list">
          {dataRU.slice(-4, -1).map(item => {
            return <div key={item.name}>{item.name}</div>;
          })}
        </div>
        <button
          type="button"
          onClick={() =>
            this.props.requestData(dataRU.slice(-2, -1)[0].id)
          }
        >
          click
        </button>
      </div>
    );
  }
}

export default connect(
  state => ({
    count: state.count,
  }),
  { requestData },
)(App);
