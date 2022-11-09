/* import mongoose from "mongoose";


export const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    },(err, res) => {
        if(!err){
            console.log(`*** CONEXION A MONGOOSE REALIZADA CORRECTAMENTE ***`);
        } else {
            console.log(`*** CONEXION ERRONEA ***`);
        }
    })
}

export {dbConnect};
 */