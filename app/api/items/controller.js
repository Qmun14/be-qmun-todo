const { Item } = require('../../db/models');

module.exports = {
    create: async (req, res, next) => {
        try {
            const { name, TodoId } = req.body
            const result = await Item.create({ name, TodoId });
            res.status(201).json({ message: 'success', data: result });
        } catch (err) {
            next()
        }
    },
    getOne: async (req, res, next) => {
        try {
            const { id } = req.params;
            const result = await Item.findOne({ where: { id: id } });
            res.status(200).json({ message: 'success', data: result });
        } catch (err) {
            next()
        }
    },
    update: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { name } = req.body;
            await Item.update({ name }, {
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
            await Item.destroy({
                where: {
                    id: id
                }
            });
            res.status(200).json({ message: 'deleting succeeded', data: { id, name } });
        } catch (err) {
            next()
        }
    },
    move: async (req, res) => {
        try {
            const { id } = req.params;
            const { targetTodoId } = req.body;
            const result = await Item.findOne({ where: { id: id } });

            result.TodoId = targetTodoId;

            await result.save();

            res.status(200).json({ message: 'success', data: result });
        } catch (err) {
            next()
        }
    }
}