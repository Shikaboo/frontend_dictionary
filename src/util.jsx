import html from './assets/icons8-html-96.png'
import css from './assets/icons8-css-96.png'
import js from './assets/icons8-js-96.png'
import node from './assets/icons8-node-js-96.png'
import react from './assets/icons8-react-a-javascript-library-for-building-user-interfaces-96.png'

const getLogo = (category)=>{
    console.log(category)
    switch (category.toLowerCase()){
        case 'html' : 
            return html;
        case 'css' : 
            return css;
        case 'javascript' : 
            return js;
        case 'node' : 
            return node;
        case 'react' : 
            return react;
    }
}

export {getLogo};