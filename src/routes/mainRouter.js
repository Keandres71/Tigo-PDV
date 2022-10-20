import { Router } from "express";
import ejs from 'ejs';
const mainRouter = Router();

mainRouter.get('/login', (req, res) => {
    res.render('thing.ejs',{
        thing: 'Inicio de sesion.'
    });
});

export default mainRouter;