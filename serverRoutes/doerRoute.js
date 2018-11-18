const express= require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

router.get('/', async (req, res) => {
  try {
    const doers = await db('doers')
    res.status(200).json(doers)
  } catch (err) {
    res.status(500).json({ message: 'There was an error accessing the database' })
  }
})

router.get('/:id', async (req, res) => {
  try {
      const tasks = await db('doers')
        .join('doerAvail', 'doerAvail.doerId', 'doers.id')
        .where('doers.id', req.params.id)
        .join('availableTasks', 'availableTasks.id', 'doerAvail.taskId')
        .select('availableTasks.name as Task')
        const doer = await db('doers').where({ 'id': req.params.id}).select('doers.name as Name')
        doer.length !== 0
        ? res.status(200).json({
          ...doer,
          tasks: tasks,
        })
        : res.status(404).json({ message: 'Could not find that doer in the system'})
  } catch (err) {
    res.status(500).json({ error: 'The information could not be retrieved. '})
  }
})

router.post('/', async (req, res) => {
  try {
    const doer = await db('doers').insert(req.body)
    res.status(201).json(doer)
  } catch (err) {
    res.status(500).json({ error: 'There was an error adding the user' })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const updatedDoer = await db('doers').update(req.body).where({ 'doers.id': req.params.id })
    updatedDoer
    ? res.status(200).json(updatedDoer)
    : res.status(404).json({ message: 'A user with that ID could not be found' })
  } catch (err) {
    res.status(500).json({ error: 'The project could not be saved' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const dCount = await db('doers').where({ 'doers.id': req.params.id }).del()
    if (dCount !== 0){
      try {
        const tCount = await db('doerAvail').where({ 'doerId': req.params.id }).del()
        console.log(tCount)
        tCount !== 0
        ? res.status(200).json({ message: 'User deleted' })
        : res.status(400).json({ message: 'There was an error while deleting the user'})
      } catch (err) {
        res.status(500).json({ error: 'The user could not be deleted' })
      }
    } else {
      res.status(404).json({ message: 'The requested user could not be found' })
    }
  } catch (err) {
    res.status(500).json({ error: 'The user could not be deleted' })
  }
})

module.exports = router;
