import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../../context";

const SearchBills = () => {
    const [state, setState] = useContext(Context);
    const [userInput, setUserInput] = useState("");
    const [billTitle, setBillTitle] = useState("");

    useEffect(() => {
        axios
            .get(
                `https://www.opensecrets.org/api/?method=candIndustry&cid=N00007360&cycle=2020&apikey=${process.env.REACT_APP_OS_KEY}`
            )
            .then(res => {
                let bill_list = res.data.message.body.bill_list;
                setState({ bill_list: bill_list, heading: "Search Results" });
            })
            .catch(err => console.log(err));
    }, [billTitle]);

    const findBill = e => {
        e.preventDefault();
        setBillTitle(userInput);
    };

    const onChange = e => {
        setUserInput(e.target.value);
    };

    return (
        <div className="card card-body mb-4 p-4">
            <h1 className="display-4 text-center">
                <i /> Search For A Bill
            </h1>
            <p className="lead text-center">Get the info for any bill</p>
            <form onSubmit={findBill}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Bill title"
                        name="userInput"
                        value={userInput}
                        onChange={onChange}
                    />
                </div>
                <button
                    className="btn btn-primary btn-lg btn-block mb-5"
                    type="submit"
                >
                    Get Bill ssponsors
                </button>
            </form>
        </div>
    );
};

export default SearchBills;
