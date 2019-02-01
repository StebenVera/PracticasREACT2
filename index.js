import React from 'react';
import {render} from 'react-dom';
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json'

const app = document.getElementById('app');
const saludo = <h1>Hola mundo5</h1>;

//react nos sirve para crear componentes 
//react-dom sirve para renderizar los componentes

//recibe dos parametros
//Que voy a renderizar y donde lo voy hacer
render(<Playlist datos = {data}/> ,app);
