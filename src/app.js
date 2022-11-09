import dotenv from "dotenv"; // VARIABLES DE ENTORNO
import  express  from "express"; //FRAMEWORK O LIBRERIA    
import ejs from 'ejs'; // MOTOR DE PLANTILLAS
import cors from "cors"; 
import morgan from "morgan";
import path from 'path';
import {dirname, join} from 'path';
import { fileURLToPath } from "url";

//import dbConnect from "../config/mongo";

// MAIN PATH
dotenv.config(); // Toma por defecto el ( .env )
const PORT = process.env.PORT;
const __dirname = dirname(fileURLToPath(import.meta.url));
//console.log(__dirname) // = 'D:\Usuarios\kquiroca\Documents\Tigo\src'


//ROUTERS
import mainRouter from "./routes/mainRouter.js";

// APLICATION
const app = express();  

// SETTINGS
app.set('case sensitive routing', true); //ESTRICTO CON CARACTERES DE RUTA

app.set('view engine','ejs'); // Configuracion para ejs - Motor de plantillas
app.set('views', path.join(__dirname, 'views')); //Unificar ruta de configuracion



//MIDDLEWARES
app.use(cors()); // Cors para todos los origenes sean permitidos
app.use(morgan('dev')); //Middleware de registro de solicitudes HTTP (Desarrollo)
app.use(express.json());

//USE ROUTERS
app.use(mainRouter);

app.use(express.static(join(__dirname, 'public')));


app.get('/', (req,res) => {
    res.render('index.ejs',{
        tittle:'Data de los puntos de venta',
    })
    
});

app.use((req,res) => {
    throw `EL PATH SOLICITADO ES INCORRECTO O NO EXISTE.`
});



//dbConnect();
app.listen(PORT);
console.log(`Server in port ${PORT}`);