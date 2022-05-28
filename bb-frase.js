import { LitElement, html, css } from "lit-element";


const plantilla = html `
    <strong> Veni Vini Vici </strong>
    `;

const estilo = css`
    .contenedor {
        border: 2px solid blue;
        background-color: gray;
        padding: 20px;
        width: 50%;
        text-align: center;
    }
    `;

class A extends LitElement{

    static get styles(){
        return estilo;
    }

    render(){
        return html`
        <div class = "contenedor">
        Elemento de la Clase A
        ${plantilla}
        </div>
        `;
    }
}

//Registro
window.customElements.define("bb-a", A);


class B extends LitElement{
    
    static get styles(){
        return estilo;
    }

    render(){
        return html`
        <div class = "contenedor">
        Elemento de la Clase B
        ${plantilla}
        </div>
        `;
    }

}

window.customElements.define("bb-b", B);


class C extends LitElement{

    static get styles(){
        return css`
        :host{
            background-color: red;
            display: inline-block;
        }
            bb-a, bb-b{
                display: inline-block;
                margin: 5px;
                padding: 10px;
            }        
        `;
    }

    render(){
        return html`
        <h4> Clase C </h4>
        <bb-a> </bb-a>
        <bb-b> </bb-b>
        `;
    }
}

window.customElements.define("bb-c", C);