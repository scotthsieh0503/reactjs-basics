import React from "react";

export class Home extends React.Component {
    render() {
        const image = require.context('../../../assets', true);
        const pet_img = image(`./${this.props.name}.png`); // with require

        return (
            <div>
                <h3>This is your pet: {this.props.name}!</h3>
                 <img src={pet_img} height={this.props.size} width={this.props.size}/>
                <p>You're almost {this.props.size}px big</p>
            </div>
        );
    }
}
