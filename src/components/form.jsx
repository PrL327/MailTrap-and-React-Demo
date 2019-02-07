import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/css/App.css';
import '../assets/css/hero.css'
import tick from "../assets/img/tick-inside-a-circle.png";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit(evt) {
        let display = this.state.firstName;
        let headers = new Headers({
            "Content-Type": "application/json",
        });
        fetch('/send', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(this.state),
        }).then(function(response) {
            console.log('RESPONSE ', response);
            if(response.status === 200) {
                const confirmation = (
                    <div id = {'container'} className="confirmation w3-animate-opacity">
                        <img id = {'image'} alt="Check mark" src={tick}/>
                        <h1 id = {'text'}>Thank you, {display}!</h1>
                    </div>
                );

                ReactDOM.render(confirmation, document.getElementById('hero'));
                ReactDOM.unmountComponentAtNode(document.getElementById('root'));
            } else {

            }
            return response;
        }).then(function() {

        });

        evt.preventDefault();
    }

    render() {
        return (
            <div className="form-page">
                <div className="header">
                    <h1> Sign Up. </h1>
                    <p> Submit to get an Email</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <div className="col">
                            <div className="row">
                                <input className="inputText" type="text" placeholder="First name" name="firstName" value={this.firstName}  onChange={this.handleChange}/>
                            </div>
                            <div className="row">
                                <input className="inputText" type="text" placeholder="Last Name"  name="lastName" value={this.lastName} onChange={this.handleChange}/>
                            </div>
                            <div className="row">
                                <input className="inputText" type="email" placeholder="Email"  name="email" value={this.email} onChange={this.handleChange}/>
                            </div>
                            <div className="row">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;