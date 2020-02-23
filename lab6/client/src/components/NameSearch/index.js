import React from "react";

class NameSearch extends React.Component {
    readName(event) {

        event.preventDefault();

        let element = document.querySelector("#NAME");

        fetch("http://localhost:3000/id/" + element.value).then((res) => {
                return res.json();
        })
        .then((processed) => {

            let reporting = document.querySelector("#reportingArea");

            if(processed.error) {
                reporting.innerHTML = processed.error;
            } else {
                reporting.innerHTML = processed.number;
            }
        });
    }
    render() {
        return(
            <div>
            <form onSubmit={this.readName}>
                <p>Enter Pokemon Name</p>
                <input id="NAME" type ="text" />
                <button>Submit</button>
            </form>
            </div>
        );
    }
}

export default NameSearch;