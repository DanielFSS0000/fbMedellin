import mongoose from "mongoose";

const conexionDB = async () => {
  try {
    await mongoose.connect(
      `mongodb://localhost:27017/${process.env.NAME_DATABASE}`
    );
    console.log('Conexion BD')
  } catch (error) {
    console.error(error);
    console.log("No se pudo conectar a mongoose");
  }
};

export default conexionDB;
