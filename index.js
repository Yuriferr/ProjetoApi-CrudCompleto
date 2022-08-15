import express from 'express';
import alunoRouter from './routes/aluno.js';
import fs  from 'fs';
import swaggerUi from 'swagger-ui-express';
import {swaggerDocument} from './doc.js';

const { readFile, writeFile} = fs;

global.fileName = 'grades.json';

const app = express();
app.use(express.json());
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/grade', alunoRouter);
app.listen(3000, async () => {
    try{
        await readFile(global.fileName);
    }
    catch (err){
        const initialJson = {
            nextId: 1,
            grades: []
        }
    }
})
