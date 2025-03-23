import {Router,Request,Response,NextFunction} from "express"
const router = Router();

import { Todo } from '../models/todo'

let todos: Todo[] = []

router.get('/', (req, res, next) => { 
    res.status(200).json({ todos: todos });
})

router.post('/todo', (req, res, next) => {
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: req.body.text,
    } //forces typescript to force me to add correct data to this object
    todos.push(newTodo);
    res.status(201).json({ message: 'Todo added successfully', newTodo: newTodo,todos:todos })
})
router.put('/todo/:todoId', (req, res, next):any => {
    const tid = req.params.todoId
    const index = todos.findIndex(todo => todo.id === tid)
    if (index >= 0) {
        todos[index] = { id: todos[index].id, text: req.body.text };
     return res.status(200).json({ message: 'Todo updated successfully' })
    }
    res.status(404).json({ message: "error finding the id" })
})
router.delete('/delete/:id', (req, res, next) => {
    todos=todos.filter(todoItem=>todoItem.id!==req.params.id)
   res.status(200).json({ message:'Todo deleted successfully' })
    
    res.status(404).json({message:"error finding the id"})
})
export default router;
