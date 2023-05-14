
import { useState } from 'react';
import './App.css';
import Card from './components/card';
import Header from './components/header';

const App = () => {
  const [korteles, changeKorteles] = useState([
    {
      id:0,
      image: {
        src: 'https://i.pinimg.com/originals/3e/91/a7/3e91a7ace70169d8699250205f3aa2b9.png',
        alt: 'cat sleeping',
        classList: 'cardImg'
      },
      catJobName: 'Miegoti',
      completed: true
    },
    {
      id:1,
      image: {
        src: 'https://st2.depositphotos.com/2222964/7003/v/950/depositphotos_70035335-stock-illustration-orange-cat-grooming.jpg',
        alt: 'cat grooming',
        classList: 'cardImg'
      },
      catJobName: 'Praustis',
      completed: false
    },
    {
      id:2,
      image: {
        src: 'https://static.vecteezy.com/system/resources/previews/005/055/783/original/cute-cat-eating-fish-cartoon-icon-illustration-flat-cartoon-style-vector.jpg',
        alt: 'cat eating',
        classList: 'cardImg'
      },
      catJobName: 'Pavalgyti',
      completed: true
    },
    {
      id:3,
      image: {
        src: 'https://as1.ftcdn.net/v2/jpg/01/09/97/06/1000_F_109970626_uPREIARkavURtySudM0BZAWztp7pTXSD.jpg',
        alt: 'cat bringing dead mouse',
        classList: 'cardImg'
      },
      catJobName: 'Atnešti šeimininkui negyvą pelę',
      completed: false
    },
    {
      id:4,
      image: {
        src: 'https://thumbs.dreamstime.com/b/ginger-cat-scratching-chair-nasty-kitten-destroying-home-furniture-claws-bad-behaved-pet-tearing-sofa-flat-style-ginger-cat-243482079.jpg',
        alt: 'cat destroying couch',
        classList: 'cardImg'
      },
      catJobName: 'Sudraskyti šeimininkų baldus',
      completed: true
    },
    {
      id:5,
      image: {
        src: 'https://previews.123rf.com/images/lineartestpilot/lineartestpilot1802/lineartestpilot180267960/95551038-happy-cartoon-cat-meowing.jpg',
        alt: 'cat meowing',
        classList: 'cardImg'
      },
      catJobName: 'Garsiai miauksėti',
      completed: false
    },
    {
      id:6,
      image: {
        src: 'https://img.freepik.com/premium-vector/cute-cat-hiding-box-funny-feeling-character-sitting-inside-cardboard-vector_107547-1067.jpg?w=2000',
        alt: 'cat playing with a box',
        classList: 'cardImg'
      },
      catJobName: 'Pažaisti su dėže',
      completed: false
    },
    {
      id:7,
      image: {
        src: 'https://i.pinimg.com/originals/0b/75/d5/0b75d55765239d067e5e62ecce1fde57.jpg',
        alt: 'cat climbing on curtains',
        classList: 'cardImg'
      },
      catJobName: 'Palaipioti per užuolaidas',
      completed: true
    },
  ])

  const keistiStatusa = (id) => {
   
    changeKorteles(korteles.map(kortele => {
      console.log(id)
      if (kortele.id === id) {
        return {
          ...kortele,
          completed: !kortele.completed
         
        }
      }
      else {
        return kortele
      
      }
     
    }))
  }

  return (
    <>
      <Header />
      <div className='allCards'>
        {
          korteles.map(kortele => {
         
            return <Card
              key={kortele.id}
              image={{
                src: kortele.image.src,
                alt: kortele.image.alt,
                classList: kortele.image.classList
              }}
              catJobName={kortele.catJobName}
              id={kortele.id}
              completed={kortele.completed}
              // kortelesInfo={kortele}
              keistiStatusa={keistiStatusa}
            />
          }
          )
        }
      </div>
    </>

  );
}

export default App;
