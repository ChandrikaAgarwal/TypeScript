"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const body = req.body; //using type conversion 
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    }; //forces typescript to force me to add correct data to this object
    todos.push(newTodo);
    res.status(201).json({ message: 'Todo added successfully', newTodo: newTodo, todos: todos });
});
router.put('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const tid = params.todoId;
    const body = req.body;
    const index = todos.findIndex(todo => todo.id === tid);
    if (index >= 0) {
        todos[index] = { id: todos[index].id, text: body.text };
        return res.status(200).json({ message: 'Todo updated successfully' });
    }
    res.status(404).json({ message: "error finding the id" });
});
router.delete('/delete/:todoId', (req, res, next) => {
    const params = req.params;
    todos = todos.filter(todoItem => todoItem.id !== params.todoId);
    res.status(200).json({ message: 'Todo deleted successfully' });
    res.status(404).json({ message: "error finding the id" });
});
exports.default = router;
