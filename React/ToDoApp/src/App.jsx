import './App.css';
import ToDoForm from './components/ToDoForma';
import ToDoList from './components/ToDoList';
import { useState } from 'react';

const App = () => {

  const [formInput, setFormInput] = useState('');  //ima default formInput ir f-ja setFormInput ir pradeda nuo tuscios vietos

  const [toDos, setToDos] = useState([  //ima default toDos ir f-ja setToDos ir default reiksme yra siti objektai masyve
    {
      id: 1,
      completed: true,
      title: 'Patobulinti aplikaciją'
    },{
      id: 2,
      completed: false,//objektai masyve kuriuos matom ekrane
      title: 'Pamiegoti'
    },{
      id: 3,
      completed: false,
      title: 'Paminti dviratį'
    }
  ]);

  const keistiStatusa = (id) => {//funkcija, kad is neatliktos padarytu atlikta uzduoti
    setToDos(toDos.map(toDo => { //imam funkcija bekeiciancia toDos ir tuos toDos map'inam, sukam cikla su toDo elementu
      if(toDo.id === id){ //jei toDo elemento id(data) yra id, t.y., kad ivyko tuo pat metu. Jei paspaudimas ne tuo pat metu tai tada pazymi, kad ivykdyta
        return {
          ...toDo,//grazinti destrukturizuota to do
          completed: !toDo.completed//grazinti kad uzduotis neatlikta
        }
      } else {
        return toDo;
      }
    }));
  }

  const trintiToDo = (id) => {//kuriam f-ja trintiToDo, paimam id
    setToDos(toDos.filter(toDo => toDo.id !== id));//per setToDos eina filtravimas ir jei toDo id nera toks pats jo negrazina
  }

  return (
    <>
      <ToDoForm
        taskInput={formInput} //defaultine reiksme is useState paskeista is formInput i taskInput ir keliauja i toDoForma
        changeTaskInput={setFormInput}//funkcija kuri keicia kas inpute pervadinama ir eina i toDoForm
        tasks={toDos}//default esancios uzduotys atidarius tinklapi pervadinamos i tasks
        changeTasks={setToDos}//funkcija kuri turi keisti toDos reiksmes pervadinama i changeTasks ir eina i toDoForm
      />
      <ToDoList
        toDosData={toDos}//pervadina toDos i toDosData
        trinimoFunkcija={trintiToDo}//trynimo f-ja auksciau aprasyta adiduoda i toDoList
        statusoKeitimoFunkcija={keistiStatusa} //statuso keitimo f-ja pervadina ir atiduoda i toDolist
      />
    </>
  );
}

export default App;
