import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDosData, trinimoFunkcija, statusoKeitimoFunkcija }) => { //visi ateinantys is app.jsx yra prilyginami ToDoList konstantai
  console.log(toDosData);
  return (
    <section id="toDoList">
      {
        toDosData.map(toDoElement => //per toDosData eina ciklas ir kiekvienam elementui priskiria
          <ToDoItem //toDoItem kuriame yra key, data, istrinti ir statuso keitimas kuriuos pasiima is toDoitem
            key={toDoElement.id}
            data={toDoElement}
            istrinti={trinimoFunkcija}
            toggle={statusoKeitimoFunkcija}
          />
        )
      }
    </section>
  );
}
 
export default ToDoList;