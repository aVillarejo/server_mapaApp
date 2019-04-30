import mongoose from "mongoose";

mongoose.Promise = global.Promise;

let mongoUserCredentials = "";
if (process.env.MONGO_USER && process.env.MONGO_PASSWORD) {
  mongoUserCredentials = `${process.env.MONGO_USER}:${
    process.env.MONGO_PASSWORD
  }@`;
}

const MONGO_URL = process.env.MONGO_URL || "localhost:27017";
const DB_NAME = process.env.MONGO_DB_NAME || "MAPA_DB";
const MONGO_ENV = process.env.MONGO_ENV || "mongodb";

const MONGO_CONNECTION_STRING = `${MONGO_ENV}://${mongoUserCredentials}${MONGO_URL}/${DB_NAME}`;
mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useFindAndModify: false
});

//#region schemas
const USUARIO_SCHEMA = new mongoose.Schema({
  usuario: String,
  password: String,
  tipo: String
});
//#endregion schemas

//#region models
export const Usuarios = mongoose.model("Usuarios", USUARIO_SCHEMA);
//#endregion models
