const express = require('express');
const router = express.Router();

// Task Model
const Task = require('../models/estudiantes');

// GET all Tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// GET all Tasks
router.get('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});

// ADD a new task
router.post('/', async (req, res) => {
  const { ci,nombre, gradoacademico } = req.body;
  const task = new Task({ci,nombre, gradoacademico});
  await task.save();
  res.json({status: 'Estudiante Saved'});
});

// UPDATE a new task
router.put('/:id', async (req, res) => {
  const { ci,nombre, gradoacademico } = req.body;
  const newTask = {ci,nombre, gradoacademico};
  await Task.findByIdAndUpdate(req.params.id, newTask);
  res.json({status: 'Estudiante Updated'});
});

router.delete('/:id', async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({status: 'Estudiante Deleted'});
});

module.exports = router;
