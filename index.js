import React from 'react';
import {render} from 'react-dom';
import Media from './src/playlist/components/media';


const app = document.getElementById('app');
const saludo = <h1>Hola mundo5</h1>;

//react nos sirve para crear componentes 
//react-dom sirve para renderizar los componentes

//recibe dos parametros
//Que voy a renderizar y donde lo voy hacer
render(<Media/> ,app);
