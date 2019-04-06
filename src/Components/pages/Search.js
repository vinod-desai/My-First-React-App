import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';

export class Search extends Component {
    state = {
        srchTxt: '',
        results: []
    }
    onChange = (e) => this.setState( { srchTxt: e.target.value });
    onSubmit = (e) => {
        e.preventDefault();
        //this.props.addTodo(this.state.srchTxt);
        // axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=a12275b1')
       let url = `http://www.omdbapi.com/?s=${this.state.srchTxt}&apikey=a12275b1`;
        axios.get(url)
        .then(res => this.setState( { results: res.data.Search }));

        // this.setState({ title: '' });
    };

  render() {
    return (
      <div>
        <h3>Search for any Movie, TV Shows ...</h3>
        <form style={{display: 'flex'}} onSubmit={this.onSubmit} >
          <input type='text' name='srchTxt' style={{flex: '10', padding: '10px'}} 
          placeholder='Search for movie, TV show ... '
          value = {this.state.srchTxt} onChange={this.onChange} />
          <input type='submit' value='Search' className='btn btn-primary' style={{flex: '1'}} />
        </form>
        <div className="row pager">
        <Card results={this.state.results} />
        </div>
      </div>
    )
  }
}

export default Search;
