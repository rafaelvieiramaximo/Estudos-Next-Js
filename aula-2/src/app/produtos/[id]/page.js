"use client" //Faz com que o código seja executado no client e não no server

import Image from "next/image";
import styles from "../../page.module.css";

//Para capturar o valor da url, o parametro da url, usamos o UserParams
import { useParams } from "next/navigation";

export default function Products() {
  
    const params = useParams();
    //Aqui vamos buscar os dados do produto na Url
    return (
    <div className={styles.page}>
      <h1>Detalhes do Produto # {params.id}</h1>
    </div>
  );
}
