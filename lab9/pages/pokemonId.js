import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/styles/styles.module.css';

class App extends React.Component{

    getId(){
        let pokeId = document.querySelector("#pokemonId");

        fetch("/api/pokemon/id/" + pokeId.value).then((res)=>{return res.json();}).then((processed)=> {
            
            let resultElement = document.querySelector("#results");

            if(processed.error){
                resultElement.innerHTML ="Could not find your search. Please try another.";
            } else{
                resultElement.innerHTML = "The Pokemon ID you entered is: "+ processed.id+" and the it belongs to: "+processed.name+". This Pokemon is a "+processed.typeList+" type.";

            }
        });
    }
    render(){
        return(
            <div className={styles.general}>
                <Head><title>Find a Pokemon by ID</title></Head>        
                <h3>Search by ID:</h3>
                <input className={styles.input} type="text" id="pokemonId" className={styles.input}/>
                <button className ={styles.button} onClick={() => {this.getId()}}>Search</button>
                
                <div className={styles.links}>
                    <Link href="/pokemonName">Click here to search by name</Link>
                    <br></br>
                    <Link href = "/pokemonType">Click here to search by types</Link>
                </div>
                <div id="results" className={styles.result}></div>
        </div>
        )
    }
}
export default App
