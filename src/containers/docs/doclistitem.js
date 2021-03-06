import React, { Component, PropTypes } from 'react';
import './doclistitem.css';

class DocListItem extends Component {
    render() {
        return (
            <div className="container doclistitem-container">
                <a className="doclistitem-href" href={this.props.link}>
                    <div className="row">
                        <div className="col-md-12">
                            <img className="doclistitem-image" src={this.props.imgsrc}/>
                            <ul className="doclistitem-ul">
                                <li className="doclistitem-title"><h2>{this.props.title}</h2></li>
                                <li className="doclistitem-text">{this.props.text}</li>
                            </ul>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}

DocListItem.propTypes = {
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    imgsrc: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired
};

export default DocListItem;