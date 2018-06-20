import React, { Component } from 'react';
import '../styles/header.css';
export default class Header extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {

    return (
      <div className='header-container'>
        <div id="masthead">
          <h1><a href="http://www.botron.com/">Botron Company Inc.</a></h1>
          <input type="text" class="search-input" placeholder="Part Number, Keyword or Cross Reference" />
        </div>
        <div className='nav-container'>
          <div><a href="https://www.botron.com">home</a></div>
          <div><a href="https://www.botron.com/archives/">catalog</a></div>
          <div><a href="https://www.botron.com/about/">about</a></div>
          <div><a href="https://www.botron.com/spec-sheets/">spec sheets</a></div>
          <div><a href="https://www.botron.com/contact-us/">contact us</a></div>
        </div>
        <div className='image-container'>
          <img src="https://www.botron.com/wp-content/themes/Cutline/Cutline%201.1/images/header_2.jpg"/>
          <div className='image-container-content'>
            <h2>Botron Company Inc.,</h2>
            <h4>
              A leader in ESD safety, with a broad depth of products including anti static wrist staps, table mats, ESD footwear and test equipment.
              <br />
              <br />
              We have all the static control products you will need to outfit your work stations and static safe environments.
            </h4>
          </div>
        </div>
      </div>
    );
  }
}