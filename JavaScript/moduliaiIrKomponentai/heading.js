export default class Heading{
    constructor(props){
        this.props=props;
        return this.render();
    }
    render(){
        this.htmlElement = document.createElement(`h${this.props.size}`);
        this.textElement = document.createTextNode(this.props.text);
        this.htmlElement.appendChild(this.textElement);
        return this.htmlElement
    }
}