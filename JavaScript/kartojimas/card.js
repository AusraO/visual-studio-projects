import UpdateModalas from "./updateModalas.js";

export default class Zmogus{
  constructor({vardas, pavarde, id}){
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.id = id;
    return this.render();
  }
  render(){
    this.card = document.createElement('div');
    this.card.classList.add('card');

    this.heading = document.createElement('h1');
    this.headingText = document.createTextNode(`${this.vardas} ${this.pavarde}`);
    this.heading.appendChild(this.headingText);

    this.updateButton = document.createElement('button');
    this.updateButtonText = document.createTextNode('Update');
    this.updateButton.appendChild(this.updateButtonText);
    this.update();

    this.card.append(this.heading, this.updateButton);

    return this.card;
  }
  update(){
    this.updateButton.addEventListener('click', () => {
      console.log('paspaudei ant', this.id);
      console.log(this.vardas, this.pavarde);
      new UpdateModalas(this.id, this.vardas, this.pavarde, this.card); // ugly fix kad neperkraut - perduoti visą card
    });
  }
}