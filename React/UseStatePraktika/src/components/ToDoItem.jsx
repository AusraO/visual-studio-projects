const ToDoItem = (props) => {
    console.log(props)
    return (
        <>
            <div className={
                `allCards.
            ${props.completed ? 'completed' : 'notCompleted'
                }`
            }
                onClick={() => props.keistiStatusa(props.id)}>
                {
                    <p>{props.completed ? 'Atlikta' : "Neatlikta"} </p>
                }
            </div>
        </>
    );
}

export default ToDoItem;