//TODO: Implementar Modelo con Mongoose:
import mongoose from "mongoose";

const collectionName = 'students';

const stringTypeSchemaUniqueRequired = {
    type: String,
    unique: true,
    required: true
};

const stringTypeSchemaNonUniqueRequired = {
    type: String,
    required: true
};


const courseSchema = new mongoose.Schema({
    name: String,
    last_name: String,
    age:Number,
    id:stringTypeSchemaUniqueRequired,
    courses:[]
});

export const studentModel = mongoose.model(collectionName, courseSchema);