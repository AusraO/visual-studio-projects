import Modal from "./modal.js";

export default class Filmai {
    constructor({ id, name, production, genre, year, length, imdbRating, oscars, picture, about }) {
        this.id = id;
        this.name = name;
        this.production = production;
        this.genre = genre;
        this.year = year;
        this.length = length;
        this.imdbRating = imdbRating;
        this.oscars = oscars;
        this.picture = picture;
        this.about = about;
        return this.render();
    }
    render() {
        this.divCard = document.createElement('div');
        this.divCard.classList.add('cardAppearance');

        this.heading = document.createElement('h1');
        this.headingText = document.createTextNode(this.name);
        this.heading.appendChild(this.headingText);

        this.image = document.createElement('img');
        this.image.setAttribute('src', this.picture);
        this.image.classList.add('image');
        this.image.setAttribute('alt', 'movie poster');
        this.openModal()

        this.productionPar = document.createElement('p');
        this.productionParText = document.createTextNode(`Production: ${this.production}`);
        this.productionPar.append(this.productionParText);

        this.yearPar = document.createElement('p')
        this.yearParText = document.createTextNode(`Production year: ${this.year}`)
        this.yearPar.append(this.yearParText);

        this.deleteButton = document.createElement('button');
        this.deleteButtonText = document.createTextNode('Delete this movie');
        this.deleteButton.append(this.deleteButtonText)
        this.delete()

        this.divCard.append(this.heading, this.image, this.productionPar, this.yearPar, this.deleteButton);
        return this.divCard
    }


    OscarsFunc() {
        if (this.oscars === true) {
            return 'This production has won oscar(s)'
        }
        else if (this.oscars === false) {
            return 'This production has NOT won oscar(s)'
        }

    }
    delete() {
        this.deleteButton.addEventListener('click', () => {
            this.divCard.remove()
            fetch(`http://localhost:3000/MoviesAndSeries/${this.id}`, {
                method: "DELETE"
            })
        })
    }



    openModal() {
        this.image.addEventListener('click', e => {
            e.preventDefault();
            fetch(`http://localhost:3000/MoviesAndSeries/${this.id}`)
                .then(res => res.json())
                .then(filmas => {
                    const modalas = document.querySelector('#modalas');
                    modalas.classList.replace('modal', 'modal2');
                    const modaloDiv = new Modal(filmas);
                    modalas.appendChild(modaloDiv);



                });
        })







    }



}
