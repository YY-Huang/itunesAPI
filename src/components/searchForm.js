import React from "react";
import { 
    ReactDOM,
    render
} from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from 'react-router-dom';

  class searchForm extends React.Component {
      constructor(props) {
          super(props);
          this.searchMusic = this.searchMusic.bind(this);
      }

    //   searchMusic(e) {
    //     e.preventDefault();
    //     const searchInput = document.querySelector('#search-music').addEventListener('change');


    //   }

      render() {
          return (
              <div>
                <input type="text" name="searchForm" placeholder="Search by Artist" />
                <button className="search"> Search </button>
              </div>
          )
      }
  }

  export default searchForm;