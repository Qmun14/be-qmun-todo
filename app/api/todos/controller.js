const { Todo, Item } = require('../../db/models');

module.exports = {
    getAll: async (req, res, next) => {
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
            next()
        }
    },
    create: async (req, res, next) => {
        try {
            const { name } = req.body
            const result = await Todo.create({ name });
            res.status(201).json({ message: 'succes', data: result });
        } catch (err) {
            next()
        }
    },
    getOne: async (req, res, next) => {
        try {
            const { id } = req.params;
            const result = await Todo.findOne({ where: { id: id } });
            res.status(200).json({ message: 'succes', data: result });
        } catch (err) {
            next()
        }
    },
    update: async (req, res, next) => {
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
            next()
        }
    },
    destroy: async (req, res, next) => {
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
            next()
        }
    }
}