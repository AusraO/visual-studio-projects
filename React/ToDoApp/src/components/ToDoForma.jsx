const ToDoForm = ({ taskInput, changeTaskInput, tasks, changeTasks }) => {//visi keturi kurie ateina is app.jsx
  
    const formSubmitFunction = e => {  //f-ja su eventu kuri turi submitint atsakyma
      e.preventDefault();  //paspaudus mygt. apsaugo nuo persikrovimo
      console.log(taskInput);  //atejo is default use State reiksmes
      changeTasks([...tasks, {//funkcija changeTasks kuri turi keisti state, isskaido defaultines uzduotis
        id: Date.now(),//prideda data kaip id
        completed: false,//prideda, kad nepabaigta uzduotis
        title: taskInput //tai ka iraso vadins dabar title (is app.jsx useState form input'o )
      }]);
      changeTaskInput('');//padaro, kad ten kur rasome vel pasidarytu tuscia eilute paspaudus mygtuka.
    }
    
    return (//paspaudus mygtuka kad grazintu sekcija your tasks su forma kuri paspaudus submit iskviecia formSubmitFunction kuri aprasyta auksciau
      <section>
        <h1>Your Tasks</h1>
        <form onSubmit={formSubmitFunction}>
          <input
            type="text"
            value={taskInput}
            placeholder="Naujas task'as"
            onChange={(e) => changeTaskInput(e.target.value)}//kai pasikeicia inputas yra eventas, iskviecia changeTaskInput f-jos reiksme(t.y. tuscia reiksme)
          />
          <input 
            type="submit"
            value="Add"
          />
        </form>
      </section>
    );//inputo reiksme yra taskInput kuris is App.jsx ateina

  }
   
  export default ToDoForm;