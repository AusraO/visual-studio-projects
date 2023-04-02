export default class Image {
    constructor(props) {
        this.props = props;
        return this.render();
    }

    render() {
        this.image = document.createElement('img');
        this.image.setAttribute('src', this.props.src)
        this.image.setAttribute('alt', this.props.alt);


        if (this.props.class) {
            this.image.classList.add(...this.props.class);
        }


        return this.image;
    }
}
