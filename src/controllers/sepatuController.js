import { SepatuModel } from "../models/sepatuModel.js";

export const SepatuController = {
    async list(req, res) {
        try {
            const { status } = req.query;
            const data = await SepatuModel.getAll({ status });
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async get(req, res) {
        try {
            const data = await SepatuModel.getById(req.params.id);
            res.json(data);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    },

    async create(req, res) {
        try {
            const newData = await SepatuModel.create(req.body);
            res.status(201).json(newData);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async update(req, res) {
        try {
            const updated = await SepatuModel.update(req.params.id, req.body);
            res.json(updated);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async remove(req, res) {
        try {
            await SepatuModel.remove(req.params.id);
            res.json({ message: "Data sepatu dihapus" });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
};
