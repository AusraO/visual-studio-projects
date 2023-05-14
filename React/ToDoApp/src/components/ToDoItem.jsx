const ToDoItem = ({ data, istrinti, toggle }) => { //pagamina konstanta kas bus toDoItem, perduodame data, trinti ir keisti reiksme
    console.log(data);
    return (
      <div 
        className={//divui duodama klase toDoElement
          `toDoElement 
          ${
            data.completed ? 'completed': 'notCompleted' //jei data completed tada completed klase priskiria, o jei ne tai kita klase
          }`
        }
      >
        <p onClick={()=>toggle(data.id)}> 
          {
            data.completed ? 'Atlikta' : 'Neatlikta'//paspaudus ziuri koks data id ir pagal tai raso atlikta arba neatlikta
          }
        </p>
        <h3>{data.title}</h3>
        <button 
          onClick={() => istrinti(data.id)}//uzduoties pavadinimas ir mygtukas kuri paspaudus istrynimo f-ja iskviecia pagal data id
        >Trinti</button>
      </div>
    );
  }
   
  export default ToDoItem;