import  express  from "express";    
import morgan from "morgan";
import ejs from 'ejs';
import path from 'path';
import {dirname, join} from 'path';
import { fileURLToPath } from "url";

// MAIN PATH
const __dirname = dirname(fileURLToPath(import.meta.url));
//console.log(__dirname) // = 'D:\Usuarios\kquiroca\Documents\Tigo\src'


//ROUTES
import mainRouter from "./routes/mainRouter.js";

// APLICATION
const app = express();  


// SETTINGS
app.set('case sensitive routing', true); //ESTRICTO CON CARACTERES DE RUTA

app.set('view engine','ejs'); // Configuracion para ejs
app.set('views', path.join(__dirname, 'views')); //Unificar ruta de configuracion



//MIDDLEWARES
app.use(morgan('dev')); //Middleware de registro de solicitudes HTTP (Desarrollo)
app.use(express.json());

//ROUTERS
app.use(mainRouter);



app.get('/', (req,res) => {
    res.render('index.ejs',{
        tittle:'Data de los puntos de venta',
    })

});



app.use((req,res) => {
    throw `EL PATH SOLICITADO ES INCORRECTO O NO EXISTE.`
});

app.listen(3000);
console.log('server in the port 3000');