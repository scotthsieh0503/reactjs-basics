import React from "react";

export class Home extends React.Component {

    constructor(props) {
        super();
        this.size = props.size;
    }

    onFeed() {
    this.size += 20;
    }

    onStarve() {
      this.size -= 20;
    }

    render() {
        const image = require.context('../../../assets', true);
        const pet_img = image(`./${this.props.name}.png`); // with require
        const size = this.size;
        return (
            <div>
                <h3>This is your pet: {this.props.name}!</h3>
                <img src={pet_img} height={size} width={size}/>
                <p>You're almost {size}px big</p>
                <button className="btn btn-danger" onClick={this.onStarve.bind(this)}>- Starve </button>
                &nbsp;
                <button className="btn btn-success" onClick={this.onFeed.bind(this)}>+ Feed </button>
            </div>
        );
    }
}
