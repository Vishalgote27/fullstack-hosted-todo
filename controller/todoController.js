const asynchandler = require("express-async-handler")
const Todo = require("../modles/Todo")

exports.addTodo = asynchandler(async (req, res) => {
    await Todo.create(req.body)
    res.json({ message: "Todo craete success" })
})

exports.getTodo = asynchandler(async (req, res) => {
    const result = await Todo.find(req.body)
    res.json({ message: "Todo Featch success", result })
})

exports.updateTodo = asynchandler(async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "Todo Update success" })
})

exports.deleteTodo = asynchandler(async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.json({ message: "Todo Delete success" })
})

