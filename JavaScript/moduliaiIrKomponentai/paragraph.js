export default class Paragraph {
    constructor(props) {
        this.props = props;
        return this.render()
    }
    render() {
        this.htmlElement = document.createElement('p');
        this.textElement = document.createTextNode(this.props.text);
        this.htmlElement.appendChild(this.textElement);

        if (this.props.class) {
            this.props.class.forEach(element => {
                this.htmlElement.classList.add(element);
            });
        }
        return this.htmlElement;
    }

}