import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/styles/styles.module.css';

class App extends React.Component{

  getName(){

      let name = document.querySelector("#pokemonName");

      fetch("/api/pokemon/name/" + name.value).then((res)=>{return res.json();}).then((processed)=>{
          
          let resultElement = document.querySelector("#results");

          if(processed.error){
              resultElement.innerHTML = "Could not find your search. Please try another.";
          } else{
              resultElement.innerHTML = "The Pokemon ID is: "+ processed.id+ " and you chose: "+processed.name+".";
          }
      });
  }

  getId(){
      let pokeId = document.querySelector("#pokemonId");

      fetch("/api/pokemon/id/" + pokeId.value).then((res)=>{return res.json();}).then((processed)=> {
          
          let resultElement = document.querySelector("#results");

          if(processed.error){
              resultElement.innerHTML ="Could not find your search. Please try another.";
          } else{
              resultElement.innerHTML = "The Pokemon ID you entered is: "+ processed.id+" and the it belongs to: "+processed.name+". This Pokemon is a "+processed.type+" type .";

          }
      });
  }
  getType(){
    let type = document.querySelector("#pokemonType");

    fetch("/api/pokemon/type"+ type.value).then((res)=> {return res.json();}).then((processed)=>{
        let resultElement = document.querySelector("#results");

        if(processed.error){
            resultElement.innerHTML = "Types not found, try another.";
        }else{
            resultElement.innerHTML = "You chose "+type.processed+" type, and the following pokemons match: "+name.processed+".";
        }
    });
}

  render(){
      return(
          <div class= "home">
              <Link href="/pokemonName">Search Pokemon by Name</Link>
              <br></br>
              <Link href="/pokemonId">Search Pokemon by ID</Link>
              <br></br>
              <Link href="/pokemonType">Search Pokemon by Type</Link>
          </div>
      )
  }
}

export default App;
