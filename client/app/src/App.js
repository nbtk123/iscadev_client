import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './containers/navbar/navbar.js';
import Video from './containers/video/video.js';
import About from './containers/about/about.js';
import Team from './containers/team/team.js';
import ContactUs from './containers/contactus/contactus.js';
import ScrollEvent from 'react-onscroll';
import ISCAFacebook from './containers/facebook/facebook.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {highlighted:'none'}
    this.handleScrollCallback = this.handleScrollCallback.bind(this);
  }

  isHighlighted(component) {
    return (component.getBoundingClientRect().top < 325 && component.getBoundingClientRect().top);
  }

  handleScrollCallback() {
      var somethingighlighted = false;
      
      if (this.isHighlighted(this.about)) {
        somethingighlighted = true;
        this.setState({highlighted:'about'});
      }
      if (this.isHighlighted(this.team)) {
        somethingighlighted = true;
        this.setState({highlighted:'team'});
      }
      if (this.isHighlighted(this.contactus)) {
        somethingighlighted = true;
        this.setState({highlighted:'contactus'});
      }
      if (!somethingighlighted) {
        this.setState({highlighted:'none'});
      }
  }

  render() {
    return (
      <div ref={node => this.page = node} className="App container-fluid">
        <ScrollEvent handleScrollCallback={this.handleScrollCallback} />
        <div className="row">
          <NavBar highlighted={this.state.highlighted}/>
        </div>
        <div ref={node => this.video = node} id="video" className="row" style={{'paddingTop':'3.5em'}}>
          <Video />
        </div>
        <div ref={node => this.about = node} id="about" className="row" style={{'display':'flex', 'alignItems':'center'}}>
          <div className="col-xs-7">
            <About />
          </div>
          <div className="col-xs-5" style={{'display':'flex', 'alignItems':'center'}}>
              <ISCAFacebook />
          </div>
        </div>
        <div ref={node => this.team = node} id="team" className="row">
          <Team />
        </div>
          <div ref={node => this.contactus = node} id="contactus" className="row">
          <ContactUs />
        </div>
      </div>
    );
  }
}

export default App;
