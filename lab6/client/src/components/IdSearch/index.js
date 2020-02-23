import React from "react";

class IdSearch extends React.Component {
    readId(event) {

        event.preventDefault();
    
            let element = document.querySelector("#ID");
    
            fetch("http://localhost:80/id/" + element.value).then((res) => {
                return res.json();
            })
            .then((processed) =>{
    
                let reporting = document.querySelector("#reportingArea");
            
                if(processed.error){
                    reporting.innerHTML = processed.error;
                }
                else{
                    reporting.innerHTML = processed.name;
                }
            });
    }
    render() {
        return(
            <div>
            <form onSubmit={this.readId}>
                <p>Enter Pokemon ID</p>
                <input id="ID" type ="text" />
                <button>Submit</button>
            </form>
            </div>
        );
    }
}

export default IdSearch;