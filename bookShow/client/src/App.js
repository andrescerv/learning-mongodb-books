import React, { Component } from 'react';
import './App.css';
import Book from './components/Book/Book';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Axios from 'axios';
import {Link} from 'react-router-dom'


class App extends Component {
state={
  data: []
}

  componentDidMount() {
    Axios.get('http://localhost:3002/books')
    .then(res => { //axios sólo maneja arrow functions
      console.log(res.data);
      this.setState({data: res.data.dbBooks})
      console.log(this.state.data)
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  render() {
    console.log(this.state.data.titulo)
    return (
      <div className="App">
      <Header />
      {/* <Book/> */}
      <Home/>
      <ul>
        {this.state.data.map(x => {
          return (
            <li>
              <p>{x.titulo}</p>
              <Link to={`${x.idLibro}`}>More info</Link>
            </li>
          )
        })}
      </ul>
        <header className="App-header">
        </header>
        <Footer/>
      </div>
    );
  }
}

export default App;
