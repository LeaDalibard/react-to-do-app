import React, { useState, useEffect } from "react"
import TodosList from "./TodosList";
import Header from "./Header"
import InputTodo from "./InputTodo"
import {v4 as uuidv4} from "uuid";
import axios from "axios";

const TodoContainer = props => {
    const [todos, setTodos] = useState([])
    const [show, setShow] = useState(false)

    const handleChange = id => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
        setShow(!show)
    }

    const delTodo = id => {
        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id
            }),
        ])
    }

    const addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false,
        }
        setTodos([...todos, newTodo])
    }
    useEffect(() => {
        console.log("test run")
        axios
            .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then(response => setTodos(response.data))
    }, [])
    // array to specify if the effect should re-run/prevent infinite loop => componentDidMount
    return (
        <div className="container">
            <Header headerSpan={show} />
            <InputTodo addTodoProps={addTodoItem} />
            <TodosList
                todos={todos}
                handleChangeProps={handleChange}
                deleteTodoProps={delTodo}
            />
        </div>
    )
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