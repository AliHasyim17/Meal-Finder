class CustomHeader extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
       @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');

           * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
           }
           :host {
               display: block;
               width: 100%;
               background-color: yellow;
               color: brown;
               text-align: center;
               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
           }
           header{
               font-family: 'Patrick Hand', cursive;
           }
           h2 {
               padding: 20px;
           }
           h4{
               padding-bottom: 10px;
           }
       </style>
       <header>
       <h2>Meal Finder</h2>
       <h4>Find your favorite meal and learn how to make them</h4>
       </header>`
       ;
    }
}

customElements.define("custom-header", CustomHeader);
