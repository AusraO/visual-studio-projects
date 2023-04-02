export default class Heading{
    constructor(props){
      this.props = props;
      return this.render();
    }
  
    render(){
      this.htmlElement = document.createElement(`h${this.props.size}`);
      this.textElement = document.createTextNode(this.props.text);
      this.htmlElement.appendChild(this.textElement);
  
      if(this.props.class){
        // this.props.class.forEach(element => {
        //   this.htmlElement.classList.add(element);
        // });
        this.htmlElement.classList.add(...this.props.class);
      }
  
      return this.htmlElement;
    }
  }
  