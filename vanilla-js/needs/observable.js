class Observable {
  constructor() {
    this._observers = new Set();
  }
  subscribe(observer) {
    this._observers.add(observer);
    return () => {
      this._observers = [...this._observers].filter((subscriber) => subscriber !== observer);
    };
  }
  unsubscribe(observer) {
    this._observers = [...this._observers].filter((subscriber) => subscriber !== observer);
  }
  notify(data) {
    this._observers.forEach((observer) => observer(data));
  }
}

// examples: 투두리스트
/* 
class TodosModel extends Observable {
  constructor() {
    super();
    this.todos = [];
  }

  addTodo(todo) {
    this.todos = [...this.todos, todo];
    this.notify(this.todos);
  }
}

const todosModel = new TodosModel();
const unsubscribe = todosModel.subscribe((todos) => {
  console.log(`todos: ${JSON.stringify(todos)}`);
});

todosModel.addTodo({ title: 'title', description: 'description' });
unsubscribe();
todosModel.addTodo({ title: 'title2', description: 'description2' });
*/
