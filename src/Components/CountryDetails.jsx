
import { Link } from "react-router-dom";
import countries from "../countries.json";

import React from 'react'

const CountryDetails = (props) => {
    console.log(props.match.params.id);

    const foundCountry = countries.find((country) => {
        return country.cca3 === props.match.params.cca3;
    });

    return (
        <div>
            <h1>Country detail !</h1>
        </div>
    )
}

export default CountryDetails
