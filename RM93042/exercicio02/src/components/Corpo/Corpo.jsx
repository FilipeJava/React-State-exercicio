import React from "react";
import imagem from "./img/thumb-1920-107504.jpg"


export default function Corpo(){
    return(

        <div>
          <section>
            <h2>Titulo</h2>

            <div>
                <img src={imagem} alt="Darth" />
            </div>

            <p>paragrafo1</p>
            <p>paragrafo2</p>
            <p>paragrafo3</p>
            <p>paragrafo4</p>
          </section>
        </div>

    )
}