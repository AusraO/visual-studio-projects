//1) Sukurti Klasę, kurios pagalba galima būtų kurti OL arba UL elementus su LI jų viduje. 
//(kas be ko, galimybė suteikti tekstus ir atributus) P.S. Stilizuoti :)


export default class List {
    constructor(props) {
        this.props = props;
        return this.render();
    }

    render() {


        this.list = document.createElement(this.props.listType);  //is main'o this.props.listType

        if (this.props.listClass) {
            this.list.classList.add(...this.props.listClass);  //sukuriam klase list itemams
        }

        this.props.listItems.forEach((listItem) => {
            this.listItem = document.createElement('li');
            this.listText = document.createTextNode(listItem.text);
            this.listItem.append(this.listText);
            if (this.props.listItemsClass) {
                this.listItem.classList.add(...this.props.listItemsClass)   //bendros klases kiekvienam li
            }
            if (listItem.class) {
                this.listItem.classList.add(...listItem.class)   //specifines klases vienam li elementui
            }

            this.list.append(this.listItem);
        });

      
        return this.list
    }
}