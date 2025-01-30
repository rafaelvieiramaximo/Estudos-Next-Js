import Image from "next/image";
import styles from "../page.module.css";


    //Teste de API
    async function getData(){
        const response = await fetch(' https://pokeapi.co/api/v2/pokemon-species/');
        return response.json();
    }

export default async function Pokemons() {
  
    const {results} = await getData();
    
    return (
    <div className={styles.page}>
      <h1>Pokemons</h1>
        <ul>
            {
                // Gera uma condição SE, que responde se caso nao encontre nada na array pokemons
                results
                    ? results.map(p => (<li>{p.name}</li>))
                    : <li>Carregando...</li>
            }
        </ul>
    </div>
  );
}
