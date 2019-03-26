// importar AXIOS (ver App.js)
import React, { Component } from 'react';

class Book extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <img src="/:id" alt="lorem pixum"/>
                <div>
                    <h1>Titulo</h1>
                    <h2>Autor</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nihil. Officia blanditiis minima placeat, quos eos ea ipsam cupiditate, magni vitae libero at laborum possimus aliquam incidunt. Omnis, pariatur esse. Libero facilis aliquid, optio, saepe neque maiores quis officia incidunt nostrum nisi, ratione fuga quidem maxime harum labore iusto minus!</p>
                </div>
            </div>
         );
    }
}
 
export default Book;