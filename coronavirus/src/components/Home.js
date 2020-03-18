import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './Home.css';
class Home extends Component {

    constructor(props) {
        super(props);
        const DEFAULT_COUNTRY = null;
        this.state = {
            deaths: props.deaths,
            confirmed: props.confirmed,
            recovered: props.recovered,
            selectedOption: DEFAULT_COUNTRY,
            options: props.countryNameList,
            isDisabledButton: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const selectedOption = e.target.options[e.target.selectedIndex].value;
        this.setState({ selectedOption: selectedOption });
        this.setState({ isDisabledButton: false });
        this.props.onSelectedCountry(selectedOption);
        
    }
    handleSubmit() {
        this.props.history.push('/country');
    }

    render() {
        return (
            <div id="Home">
                <section id="Summary">
                    <table>
                        <tbody>
                            <tr>
                                <td className="text">Confirmed: </td>
                                <td className="data">{this.state.confirmed}</td>
                            </tr>
                            <tr>
                                <td className="text">Deaths: </td>
                                <td className="data">{this.state.deaths}</td>
                            </tr>
                            <tr>
                                <td className="text">Recovered: </td>
                                <td className="data">{this.state.recovered}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section id="Selection">
                    <p className="description">Choose an specific country: </p>
                    <div id="CountrySelection">
                        <select onChange={(e) => this.handleChange(e)}>
                            {this.state.options.map((country, i) => (<option key={country.id} value={country.id}>{country.name}</option>))}
                        </select>
                        <button id="Submit" disabled={this.state.isDisabledButton}onClick={(e) => this.handleSubmit(e)}> Search </button>
                    </div>
                </section>
            </div>
        );
    }


}

export default withRouter(Home);