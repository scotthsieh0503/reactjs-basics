import React from "react";

export class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
             size: props.size,
             name: props.name
         };
    }

    onFeed = () => {
      this.setState({
                 size: this.state.size + 20
             });
    }

    onStarve = () => {
      this.setState({
                 size: this.state.size - 20
             });
    }

    onHandleChange = (event) => {
      this.setState({
                 name: event.target.value
               });
    }

    render() {
        const image = require.context('../../../assets', true);
        let pet_img = image(`./${this.state.name}.png`); // with require

        return (
            <div>
                <select className="form-control" id="pets" onChange={(event) => this.onHandleChange(event)} value={this.state.name}>
                   <option value="kau">kau</option>
                   <option value="aisha">aisha</option>
                   <option value="acara">acara</option>
                   <option value="lenny">lenny</option>
                </select>

                <h3>This is your pet: {this.state.name}!</h3>
                <img src={pet_img} height={this.state.size} width={this.state.size}/>
                <p>You're almost {this.state.size}px big</p>
                <button className="btn btn-danger" onClick={this.onStarve}>- Starve </button>
                &nbsp;
                <button className="btn btn-success" onClick={this.onFeed.bind(this)}>+ Feed </button>
            </div>
        );
    }
}
