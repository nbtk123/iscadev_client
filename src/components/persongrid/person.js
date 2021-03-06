import React, { Component, PropTypes } from 'react';
import './person.css';

class Person extends Component {
    render() {

        if (!this.props.isEdit) {
            return (
                        <div className="container-fluid person-container primary-text-color primary-bg-color">
                            <div className="row">
                                <img src={this.props.imgsrc} className="image"/>
                                <h2 className="name">{this.props.name}</h2>
                            </div>
                            <div className="row" style={{'margin':'0 auto'}}>
                                <h3 className="text">{this.props.text}</h3>
                            </div>
                            <div className="row bottom-line"/>
                        </div>
                    );
        } else {
            return (
                        <div className="person-container primary-text-color primary-bg-color">
                            <input type="text" name="imgsrc" placeholder="Image URL" value={this.props.imgsrc} />
                            <input type="text" name="name" placeholder="Full name" value={this.props.name} />
                            <input type="text" name="text" placeholder="Few words" value={this.props.text} />
                        </div>
                    );
        }
    }
}

Person.propTypes = {
    imgsrc: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    // isEdit: React.PropTypes.bool.isRequired
};

export default Person;