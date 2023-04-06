export default class Data {
    constructor(props) {
        this.props = props;
        return this.render();
    }


    render() {
       
        const userCard = document.querySelector('#userCard')
        userCard.classList.add('box')
        this.picture = document.createElement('img');
        this.picture.setAttribute('src', this.props.picture.medium)


        this.name = document.createElement('p');
        this.nameText = document.createTextNode(this.props.name.first);
        this.name.append(this.nameText)

        this.lastName = document.createElement('p');
        this.lastNameText = document.createTextNode(this.props.name.last);
        this.lastName.append(this.lastNameText)

        this.age = document.createElement('p');
        this.ageText = document.createTextNode(this.props.dob.age);
        this.age.append(this.ageText)

        this.country = document.createElement('p');
        this.countryText = document.createTextNode(this.props.location.country);
        this.country.append(this.countryText)

        this.email = document.createElement('p');
        this.emailText = document.createTextNode(this.props.email);
        this.email.append(this.emailText)

        userCard.append(this.picture, this.name, this.lastName, this.age, this.country, this.email)



    }

}