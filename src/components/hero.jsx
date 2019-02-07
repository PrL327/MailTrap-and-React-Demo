import React, { Component } from 'react';
import '../assets/css/hero.css';
import downArrow from '../assets/img/expand-button.png';

class Hero extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    }

    render() {
        return (
            <section className = "hero">
                <div className = "inner">
                    <h1>Lorem Ipsum.</h1>
                    <div className = "arrowDown">
                        <img alt="Down arrow" src={downArrow}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;