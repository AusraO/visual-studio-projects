export default class Post{
    constructor(props){
      this.props = props;
      return this.render();
    }
    render(){
      this.postDiv = document.createElement('div');
      this.postDiv.classList.add('post')
  
      this.postSpan = document.createElement('span');
      this.postSpanText = document.createTextNode(this.props.id);
      this.postSpan.appendChild(this.postSpanText);
  
      this.postTitle = document.createElement('h1');
      this.postTitleText = document.createTextNode(this.props.title);
      this.postTitle.appendChild(this.postTitleText);
  
      this.postPar = document.createElement('p');
      this.postParText = document.createTextNode(this.props.body);
      this.postPar.appendChild(this.postParText);
  
      this.postDiv.append(this.postSpan, this.postTitle, this.postPar);
  
      return this.postDiv;
    }
  }