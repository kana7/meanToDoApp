var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.get('/api/todos/:uname', (req, res) => {
        Todos.find({
            username: req.params.uname
        }, (err, todos) => {
            if (err) throw err;
            res.send(todos);
        });
    });

    app.get('/api/todo/:id', (req, res) => {
        Todos.findById({_id: '5875582b8e3f0d54ec5ed4a3'}, (err, todo) => {
            if (err) throw err;
            res.send(todo);
        });
    });

    app.post('/api/todo', (req, res) => {
        if (req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, (err, todo) => {
                res.send('Success');
            });
        } else {
            var newTodo = Todos({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            newTodo.save((err) => {
                if (err) throw err;
                res.send('success');
            });
        }
    });

    app.delete('/api/todo', (req, res) => {
        Todos.findByIdAndRemove(req.body.id, err => {
            if (err) throw err;
            res.send('success');
        });
    });

};