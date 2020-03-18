import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './Country.css';


class Country extends Component {
    handleBack() {
        this.props.history.push('/');
    }
    render() {
        if (this.props.countryInfo) {
            return (
                <div id="country">
                    <table>
                        <tbody>
                            <tr>
                                <td className="text">Confirmed: </td>
                                <td className="data">{this.props.countryInfo.confirmed}</td>
                            </tr>
                            <tr>
                                <td className="text">Deaths: </td>
                                <td className="data">{this.props.countryInfo.deaths}</td>
                            </tr>
                            <tr>
                                <td className="text">Recovered: </td>
                                <td className="data">{this.props.countryInfo.recovered}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="countryButton" onClick={(e) => this.handleBack(e)}>Go back</button>
                </div>
            );
        }
        return (
            <div>
                <p className="message">ERROR: wrong URL selected</p>
                <button className="countryButton" onClick={(e) => this.handleBack(e)}>Go Home Page</button>
            </div>
        );
    }


}

export default withRouter(Country);