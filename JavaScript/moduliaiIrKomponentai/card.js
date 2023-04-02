import H from './heading.js';
import P from './paragraph.js';
import Image from './image.js';

export default class Card {
    constructor(props) {
        this.props = props;
        return this.render();
    }

    render() {
        this.cardDiv = document.createElement('div');
        this.cardDiv.classList.add('card');
        if (this.props.class) {
            this.cardDiv.classList.add(...this.props.class);
        }
        this.image = new Image(this.props.image);
        this.cardDiv.appendChild(this.image)
        // this.cardImage = document.createElement('img');
        // this.cardImage.setAttribute('src', this.props.image.src);
        // this.props.image.alt && this.cardImage.setAttribute('alt', this.props.image.alt);
        // this.cardDiv.appendChild(this.cardImage);

        this.textDiv = document.createElement('div');
        this.cardDiv.appendChild(this.textDiv);

        this.heading = new H(this.props.heading);
        this.paragraph = new P(this.props.paragraph);
        this.textDiv.append(this.heading, this.paragraph);

        return this.cardDiv;
    }
}