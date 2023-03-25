import express from 'express';
import mongoose from 'mongoose';
import { RecepieModel } from '../Models/Recepie.js';
import { UserModel } from '../Models/Users.js';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await RecepieModel.find({});
    res.json(response);
  } catch (error) {
    res.json(err);
  }
});
router.post('/', async (req, res) => {
  const recepie = new RecepieModel(req.body);
  try {
    const response = await recepie.save();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});
router.put('/', async (req, res) => {
  try {
    const recepie = await RecepieModel.findById(req.body.recepieID);
    const user = await UserModel.findById(req.body.userID);
    user.savedRecepies.push(recepie);
    await user.save();
    res.json({ savedRecepies: user.savedRecepies });
  } catch (error) {
    res.json(error);
  }
});
router.get('/savedRecepies/ids/:userID', async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userID);
    res.json({ savedRecepies: user?.savedRecepies });
  } catch (error) {
    res.json(error);
  }
});
router.get('/savedRecepies/:userID', async (req, res) => {
  try {
    const user = await UserModel.findbyId(req.params.userID);
    // const savedRecepies = await RecepieModel.find({
    //   _id: { $in: user.savedRecepies },
    // });
    // const savedRecepies = user.savedRecepies;
    console.log(user);
    res.status(201).json({ savedRecepies });
  } catch (error) {
    res.json(error);
  }
});

export { router as recepiesRouter };
