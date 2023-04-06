export default class Zmogus {
    constructor({ vardas, pavarde, amzius, vedes, lytis, profileImage, id }) {
        this.vardas = vardas;
        this.pavarde = pavarde;
        this.amzius = amzius;
        this.vedes = vedes;
        this.lytis = lytis;
        this.profileImage = profileImage;
        this.id = id
        return this.render();
    }
    render() {
        this.divCard = document.createElement('div');
        this.divCard.classList.add('card');

        this.heading = document.createElement('hi');
        this.headingText = document.createTextNode(`${this.vardas}${this.pavarde}`);
        this.heading.appendChild(this.headingText);

        this.image = document.createElement('img');
        this.image.setAttribute('src', this.profileImage);
        this.image.setAttribute('alt', 'profile photo');

        this.agePar = document.createElement('p');
        this.ageParText = document.createTextNode(`Amzius: ${this.amzius}`);
        this.agePar.append(this.ageParText);

        this.statusPar = document.createElement('p')
        this.statusParText = document.createTextNode(`Seimyninis statusas ${this.seimosStatusas()}`)
        this.statusPar.append(this.statusParText);

        this.deleteButton = document.createElement('button');
        this.deleteButtonText = document.createTextNode('delete this card');
        this.deleteButton.append(this.deleteButtonText)
        this.delete()


        this.divCard.append(this.heading, this.image, this.image, this.agePar, this.statusPar, this.deleteButton);
        return this.divCard
    }

    seimosStatusas() {
        if (this.lytis === 'vyr' && this.vedes) {
            return 'vedes'
        }
        else if (this.lytis === 'vyr' && !this.vedes) {
            return 'nevedes'
        }
        else if (this.lytis === 'mot' && !this.vedes) {
            return 'neistekejusi'
        }
        else if (this.lytis === 'mot' && !this.vedes) {
            return 'istekejusi'
        }
    }

    delete() {
        this.deleteButton.addEventListener('click', () => {
            this.divCard.remove()
            fetch(`http://localhost:3000/asmenys/${this.id}`, {
                method: "DELETE"
            })
        })
    }



}