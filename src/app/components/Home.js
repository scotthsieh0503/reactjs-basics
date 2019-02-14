import React from "react";

export class Home extends React.Component {
    render() {
        const pet_img = require('../../../assets/acara.png'); // with require

        return (
            <div>
                <h3>This is your pet: {this.props.name}!</h3>
                 <img src={pet_img}/>
                <p>You're almost {this.props.size}px big</p>
            </div>
        );
    }
}
