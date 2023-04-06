
export class kurtiNaujaKortele {
    constructor(input, nodeSection) {
        this.nodeSection = nodeSection
        this.input = input;
        return this.render()
    }

    render() {

        event.preventDefault();

        this.toDoElement = document.createElement('div');
        this.toDoElement.classList.add('toDoBox');

        this.itsDone = document.createElement('button');
        this.itsDoneText = document.createTextNode('Done!');
        this.itsDone.classList.add('doneButton');
        this.itsDone.append(this.itsDoneText);
        this.toDoElement.append(this.itsDone);

        this.toDoElementTextBox = document.createElement('div');// ne tekst elementas

        this.toDoElementText = document.createTextNode(this.input.value);
        this.toDoElement.append(this.toDoElementTextBox);
        this.toDoElementTextBox.append(this.toDoElementText);
        this.nodeSection.append(this.toDoElement);

        this.itsDone.addEventListener('click', this.crossOut(event, this.toDoElementTextBox));


        this.trynimoMygtukas = document.createElement('button');
        this.toDoElement.append(this.trynimoMygtukas);
        this.trynimoMygtukoTekstas = document.createTextNode('Delete Task');
        this.trynimoMygtukas.classList.add('deleteTaskButton');
        this.trynimoMygtukas.append(this.trynimoMygtukoTekstas);
        this.trynimoMygtukas.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        });
        return this.toDoElement
    }
 crossOut(event) {

        event.preventDefault();

        this.itsDone.addEventListener('click', () => {
            if (this.toDoElementTextBox.classList.contains('lineThrough')) {
                this.toDoElementTextBox.classList.remove('lineThrough');
                this.itsDoneText.textContent = 'Done!';
            }
            else if (!this.toDoElementTextBox.classList.contains('lineThrough')) {
                this.toDoElementTextBox.classList.add('lineThrough');
                this.itsDoneText.textContent = 'Undo';
            }
        });

    }

}

