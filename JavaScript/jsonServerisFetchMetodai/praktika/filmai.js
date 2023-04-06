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

        this.productionPar = document.createElement('p');
        this.productionParText = document.createTextNode(`Production: ${this.production}`);
        this.productionPar.append(this.productionParText);

        this.yearPar = document.createElement('p')
        this.yearParText = document.createTextNode(`Production year: ${this.year}`)
        this.yearPar.append(this.yearParText);

        this.modalButton = document.createElement('button');
        this.modalButtonText = document.createTextNode('Learn more')
        this.modalButton.append(this.modalButtonText)

        this.deleteButton = document.createElement('button');
        this.deleteButtonText = document.createTextNode('Delete this movie');
        this.deleteButton.append(this.deleteButtonText)
        this.delete()



        this.modalButton.addEventListener('click', e => {
            const modalas = document.querySelector('#modalas');

            console.log("labas")
            openModal();

            this.modalasBox = document.createElement('div');
            modalas.append(this.modalasBox);
            this.modalasBox.classList.add("modal-content")


            this.heading = document.createElement('h1');
            this.headingText = document.createTextNode(this.name);
            this.heading.appendChild(this.headingText);

            this.image = document.createElement('img');
            this.image.setAttribute('src', this.picture);
            this.image.classList.add('image');
            this.image.setAttribute('alt', 'movie poster');

            this.productionPar = document.createElement('p');
            this.productionParText = document.createTextNode(`Production: ${this.production}`);
            this.productionPar.append(this.productionParText);

            this.genrePar = document.createElement('p');
            this.genreParText = document.createTextNode(`Genre: ${this.genre}`);
            this.genrePar.append(this.genreParText);

            this.yearPar = document.createElement('p');
            this.yearParText = document.createTextNode(`Production year: ${this.year}`);
            this.yearPar.append(this.yearParText);

            this.lengthPar = document.createElement('p');
            this.lengthParText = document.createTextNode(`Length: ${this.length}`);
            this.lengthPar.append(this.lengthParText);

            this.imdbRatingPar = document.createElement('p');
            this.imdbRatingParText = document.createTextNode(`IMDB score: ${this.imdbRating}`);
            this.imdbRatingPar.append(this.imdbRatingParText);


            this.oscarsPar = document.createElement('p');
            this.oscarsParText = document.createTextNode(`Oscars: ${this.OscarsFunc()}`);
            this.oscarsPar.append(this.oscarsParText);

            this.aboutPar = document.createElement('p');
            this.aboutParText = document.createTextNode(`About: ${this.about}`);
            this.aboutPar.append(this.aboutParText)

            this.closeButton = document.createElement('button');
            this.closeButtonText = document.createTextNode('Close')
            this.closeButton.append(this.closeButtonText)
            
            this.closeButton.addEventListener('click', () => {      //??????????????????????????????????
                
            })




            this.modalasBox.append(this.heading, this.image, this.productionPar, this.genrePar, this.yearPar, this.lengthPar, this.imdbRatingPar, this.oscarsPar, this.aboutPar, this.closeButton)
            return this.modalas
        })

     

        const openModal = function () {
            modalas.classList.replace('modal', 'modal2');
        };

        this.divCard.append(this.heading, this.image, this.productionPar, this.yearPar, this.modalButton, this.deleteButton);
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














}
