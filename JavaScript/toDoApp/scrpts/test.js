export class kurtiNaujaKortele {
    constructor(props) {
        this.props = props;
        this.render();
    }

    render() {
        let toDoElement = document.createElement('div');
        toDoElement.classList.add('toDoBox');

        let itsDone = document.createElement('button');
        let itsDoneText = document.createTextNode('Done!');
        itsDone.classList.add('doneButton');
        itsDone.append(itsDoneText);
        toDoElement.append(itsDone);

        let toDoElementTextBox = document.createElement('div');

        // Replace input.value with this.props.value or another value passed in through props
        let toDoElementText = document.createTextNode(this.props.value);
        toDoElement.append(toDoElementTextBox);
        toDoElementTextBox.append(toDoElementText);
        nodeSection.append(toDoElement);

        itsDone.addEventListener('click', crossOut);

        function crossOut(event) {
            event.preventDefault();
            toDoElementTextBox.classList.add('lineThrough');
            itsDoneText.textContent = 'Undo';

            itsDone.addEventListener('click', () => {
                if (toDoElementTextBox.classList.contains('lineThrough')) {
                    toDoElementTextBox.classList.remove('lineThrough');
                    itsDoneText.textContent = 'Done!';
                }
                else if (!toDoElementTextBox.classList.contains('lineThrough')) {
                    toDoElementTextBox.classList.add('lineThrough');
                    itsDoneText.textContent = 'Undo';
                }
            });
        }

        let trynimoMygtukas = document.createElement('button');
        toDoElement.append(trynimoMygtukas);
        let trynimoMygtukoTekstas = document.createTextNode('Delete Task');
        trynimoMygtukas.classList.add('deleteTaskButton');
        trynimoMygtukas.append(trynimoMygtukoTekstas);
        trynimoMygtukas.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        });

        return toDoElement;
    }
}
