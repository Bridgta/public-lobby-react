import React, { useState, useEffect } from "react";
import axios from "axios";

export const Context = React.createContext();

export function ContextController({ children }) {
    let intialState = {
        bill_list: [],
        heading: ""
        // dispatch: action => this.setState(state => reducer(state, action))
    };

    const [state, setState] = useState(intialState);

    useEffect(() => {
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://api.propublica.org/congress/v1/bills/subjects/search.jsonapikey=${process.env.REACT_APP_PP_KEY}`
            )
            .then(res => {
                // console.log(res.data);
                setState({
                    bill_list: res.data.message.body.bill_list,
                    heading: "Top Lobbying Efforts"
                });
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <Context.Provider value={[state, setState]}>
            {children}
        </Context.Provider>
    );
}
