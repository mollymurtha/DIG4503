import Head from "next/head";
import Link from "next/link";
import styles from '../components/styles/styles.module.css';

class App extends React.Component{

    getName(){

        let name = document.querySelector("#pokemonName");

        fetch("/api/pokemon/name/" + name.value).then((res)=>{return res.json();}).then((processed)=>{
            
            let resultElement = document.querySelector("#results");

            if(processed.error){
                resultElement.innerHTML = "Could not find your search. Please try another.";
            } else{
                resultElement.innerHTML = "The Pokemon ID is: "+ processed.id+ " and you chose: "+processed.name+". This Pokemon is a "+processed.typeList+" type.";
            }
        });
    }
render(){
    return(
        <div className={styles.general}>
            <Head><a>Search Pokemon by Name</a></Head>        
            <h3>Search by Name:</h3>
                <input className={styles.input} type="text" id="pokemonName"/>
                <button className ={styles.button} onClick={() => {this.getName()}}>Search</button>
                <div className={styles.links}>
                    <Link href= "/pokemonId"><a>Click here to search by Id</a></Link>
                    <br></br>
                    <Link href= "/pokemonType"><a>Click here to search by Type</a></Link>
                </div>
                <div id="results" className={styles.result}></div>
        </div>

    )
    };
}
    export default App;
