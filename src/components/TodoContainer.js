import React from "react"
import TodosList from "./TodosList";
import Header from "./Header"
import InputTodo from "./InputTodo"
import {v4 as uuidv4} from "uuid";
import axios from "axios";

class TodoContainer extends React.Component {

    state = {
        todos: []
    };

    handleChange = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }),
        }))
    };

    delTodo = id => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response =>
                this.setState({
                    todos: [
                        ...this.state.todos.filter(todo => {
                            return todo.id !== id;
                        })
                    ],
                })
            )
    }

    addTodoItem = title => {
        axios
            .post("https://jsonplaceholder.typicode.com/todos", {
                title: title,
                completed: false,
            })
            .then(response =>
                this.setState({
                    todos: [...this.state.todos, response.data],
                })
            )
    };

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then(response => this.setState({todos: response.data}));
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <InputTodo addTodoProps={this.addTodoItem}/>
                <TodosList
                    todos={this.state.todos}
                    handleChangeProps={this.handleChange}
                    deleteTodoProps={this.delTodo}/>
            </div>
        )
    }
}

export default TodoContainer

//render => to return the JSX
// todos = {} allow to pass state Data to TodosList

//Former code :

//state = {
// todos: [
//  {
//      id:  uuidv4(),
//      title: "Setup development environment",
//       completed: true
//   },
//   {
//       id:  uuidv4(),
//        title: "Develop website and add content",
//       completed: false
//    },
//    {
//        id:  uuidv4(),
//        title: "Deploy to live server",
//        completed: false
//   }
// ]
//};

// addTodoItem = title => {
//         const newTodo = {
//             id: uuidv4(),
//             title: title,
//             completed: false
//         };
//         this.setState({
//             todos: [...this.state.todos, newTodo]
//         });
//     };