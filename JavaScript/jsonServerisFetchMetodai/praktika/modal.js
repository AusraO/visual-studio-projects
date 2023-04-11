export default class Modal {
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
        const modalasContentBox = document.createElement('div');
        modalasContentBox.classList.add("modal-content");

        const heading = document.createElement('h1');
        const headingText = document.createTextNode(this.name);
        heading.appendChild(headingText);

        const image = document.createElement('img');
        image.setAttribute('src', this.picture);
        image.classList.add('image');
        image.setAttribute('alt', 'movie poster');

        const productionPar = document.createElement('p');
        const productionParText = document.createTextNode(`Production: ${this.production}`);
        productionPar.append(productionParText);

        const genrePar = document.createElement('p');
        const genreParText = document.createTextNode(`Genre: ${this.genre}`);
        genrePar.append(genreParText);

        const yearPar = document.createElement('p');
        const yearParText = document.createTextNode(`Production year: ${this.year}`);
        yearPar.append(yearParText);

        const lengthPar = document.createElement('p');
        const lengthParText = document.createTextNode(`Length: ${this.length}`);
        lengthPar.append(lengthParText);

       


        const closeButton = document.createElement('button');
        const closeButtonText = document.createTextNode('Close');
        closeButton.appendChild(closeButtonText)
        closeButton.addEventListener('click', () => {
            modalasContentBox.remove();
        });

        modalasContentBox.append(heading, image, productionPar, genrePar, yearPar, lengthPar, closeButton);
        return modalasContentBox;
    }

    OscarsFunc() {
        if (oscars === true) {
            return 'This production has won oscar(s)'
        }
        else if (oscars === false) {
            return 'This production has NOT won oscar(s)'
        }


    }



}



