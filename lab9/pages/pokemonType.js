import Head from "next/head";
import Link from "next/link";
import styles from '../components/styles/styles.module.css';

class App extends React.Component{

    getType(){
        let typeList = document.querySelector("#pokemonType");

        fetch("/api/pokemon/type"+typeList.value).then((res)=>{return res.json();}).then((processed)=>{
            let resultElement = document.querySelector("#results");

            if(processed.error){
                resultElement.innerHTML= "The type you entered is not found. Try another.";
            }else{
                resultElement.innerHTML= "You chose"+typeList.processed+" type, here are the following Pokemon that match: "+name.processed+" .";
            }
        });
    }
    
    render(){
        return(
            <div className={styles.general}>
                <Head><title>Find a Pokemon by Type</title></Head>        
                <h3>Search by Type:</h3>
                <input className={styles.input} type="text" id="pokemonType" className={styles.input}/>
                <button className ={styles.button} onClick={() => {this.getType()}}>Search</button>
                
                <div className={styles.links}>
                    <Link href="/pokemonName"><a>Click here to search by name</a></Link>
                    <br></br>
                    <Link href = "/pokemonId"><a>Click here to search by ID</a></Link>
                </div>
                <div id="results" className={styles.result}></div>
        </div>
        )
    }
}

export default App;
