const { Todo, Item } = require('../../db/models');

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await Todo.findAll({
                attributes: ['id', 'name'],
                include: {
                    model: Item,
                    attributes: ['id', 'name', 'todoId']
                }
            });
            res.status(200).json({ message: "succes", data: result });
        } catch (err) {
            console.log(err);
        }
    },
    create: async (req, res) => {
        try {
            const { name } = req.body
            const result = await Todo.create({ name });
            res.status(201).json({ message: 'succes', data: result });
        } catch (err) {
            console.log(err);
        }
    },
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const result = await Todo.findOne({ where: { id: id } });
            res.status(200).json({ message: 'succes', data: result });
        } catch (err) {
            console.log(err);
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { name } = req.body;
            await Todo.update({ name: name }, {
                where: {
                    id: id
                }
            });
            res.status(200).json({ message: 'updating succeeded', data: { id, name } });
        } catch (err) {
            console.log(err);
        }
    },
    destroy: async (req, res) => {
        try {
            const { id } = req.params;
            const { name } = req.body;
            await Todo.destroy({
                where: {
                    id: id
                }
            });
            res.status(200).json({ message: 'deleting succeeded', data: { id, name } });
        } catch (err) {
            console.log(err);
        }
    }
}