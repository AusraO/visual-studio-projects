export default class Table {
    constructor(props) {
        this.props = props;
        return this.render();
    }


    render() {
        const tableSection = document.querySelector('#tableSec')
        // userCard.classList.add('box')



        this.table = document.createElement('table');
    //    this.tr1=document.createElement('tr');

    //     this.th1 = document.createElement('th');
    //     this.th1Text = document.createTextNode('id');
    //     this.th1.append(this.th1Text)
    //     this.th2 = document.createElement('th');
    //     this.th2Text = document.createTextNode('name');
    //     this.th2.append(this.th2Text)
    //     this.th3 = document.createElement('th');
    //     this.th3Text = document.createTextNode('city');
    //     this.th3.append(this.th3Text)
    //     this.th4 = document.createElement('th');
    //     this.th4Text = document.createTextNode('fav.color');
    //     this.th4.append(this.th4Text)
    //     this.tr1.append(this.th1, this.th2, this.th3, this.th4)



        this.tr2=document.createElement('tr');

        this.th1 = document.createElement('th');
        
        this.th1Text = document.createTextNode(this.props.id);
        this.th1.append(this.th1Text);
        this.th2 = document.createElement('th');
        this.th2Text = document.createTextNode(this.props.name);
        this.th2.append(this.th2Text);
        this.th3 = document.createElement('th');
        this.th3Text = document.createTextNode(this.props.city);
        this.th3.append(this.th3Text);
        this.th4 = document.createElement('th');
        this.th4Text = document.createTextNode(this.props.fav_color);
        this.th4.append(this.th4Text);
        this.tr2.append(this.th1, this.th2, this.th3, this.th4)

        this.table.append(this.tr1, this.tr2)


        tableSection.append(this.table)
        console.log(Table)
    }

}