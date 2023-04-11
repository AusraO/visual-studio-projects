export default class UpdateModalas{
    constructor(id, vardas, pavarde, card){ // priimti visą card
      this.id = id;
      this.vardas = vardas;
      this.pavarde = pavarde;
      this.card = card; // užsivadinti visą card
      this.render();
    }
    render(){
      this.updateDiv = document.createElement('div');
      this.updateDiv.classList.add('updateForma');
  
      this.closeButton = document.createElement('button');
      this.closeButtonText = document.createTextNode('Close');
      this.closeButton.appendChild(this.closeButtonText);
      this.closeModal();
  
      this.form = document.createElement('form');
      this.update();
      this.updateDiv.append(this.closeButton, this.form);
  
      this.vardasInput = document.createElement('input');
      this.vardasInput.setAttribute('type', 'text');
      this.vardasInput.setAttribute('name', 'vardas');
      this.vardasInput.setAttribute('id', 'vardas');
      this.vardasInput.setAttribute('value', this.vardas);
  
      this.pavardeInput = document.createElement('input');
      this.pavardeInput.setAttribute('type', 'text');
      this.pavardeInput.setAttribute('name', 'pavarde');
      this.pavardeInput.setAttribute('id', 'pavarde');
      this.pavardeInput.setAttribute('value', this.pavarde);
  
      this.submitInput = document.createElement('input');
      this.submitInput.setAttribute('type', 'submit');
      this.submitInput.setAttribute('value', 'Update');
  
      this.form.append(this.vardasInput, this.pavardeInput, this.submitInput);
  
      document.body.appendChild(this.updateDiv);
    }
    closeModal(){
      this.closeButton.addEventListener('click', () => {
        this.updateDiv.remove();
      });
    }
    update(){
      this.form.addEventListener('submit', e => {
        e.preventDefault();
        this.data = {
          vardas: e.target.elements.vardas.value,
          pavarde: e.target.elements.pavarde.value
        };
        this.card.children[0].innerHTML = `${e.target.elements.vardas.value} ${e.target.elements.pavarde.value}`; // card'o viduje pakeisti h1 elementą (šičia reiktų gražiau aprašyt, skubu, neturiu kada);
        fetch(`http://localhost:3000/asmenys/${this.id}`, {
          method: "PUT",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(this.data)
        });
        // window.location.reload(); // nebereikia su tuo ugly fix'u
        this.updateDiv.remove(); // be window reload reikia panaikinti modalą
      });
    }
  }
  