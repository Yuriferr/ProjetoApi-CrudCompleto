import express from 'express';
import { promises as fs} from 'fs';

const { readFile, writeFile} = fs;

const router = express.Router();

router.post("/", async (req, res, next) => {
    try {
        let grade = req.body;

        if (!grade.student || !grade.subject || !grade.type || !grade.value || !grade.timestamp) {
            throw new Error("student, subject, type, value e timestamp são obrigatórios.");
        }

        const data = JSON.parse(await readFile(global.fileName));

        grade = { 
            id: data.nextId++, 
            student: grade.student,
            subject: grade.subject,
            type: grade.type,
            value: grade.value,
            timestamp: grade.timestamp
        };
        data.grades.push(grade);

        await writeFile(global.fileName, JSON.stringify(data, null, 2));

        res.send(grade);

        logger.info(`POST /grade - ${JSON.stringify(grade)}`);
    } catch (err) {        
        next(err);
    }
});

router.get("/", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(global.fileName));
        delete data.nextId;
        res.send(data);
        logger.info("GET /account");
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(global.fileName));
        var grade = data.grades.find( grade => grade.id === parseInt(req.params.id));
        res.send(grade)
    } catch (err) {
        next(err);
    }
});

router.get("/:student", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(global.fileName));
        var grade = data.grades.filter( grade => grade.student === req.params.student);
        res.send(grade)
    } catch (err) {
        next(err);
    }
});

router.get("/:student/:subject", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(global.fileName));
        var soma = 0;
        var cont = 0;
        var melhor = [];
        var grade = data.grades.filter(
            grade => {
                if(grade.student === req.params.student && grade.subject === req.params.subject) {
                    cont++;
                    soma += parseInt(grade.value)
                };
            });
            var media = soma / cont
        res.send(`A soma é de ${soma} \n A media é ${media.toFixed(2)}`);
    } catch (err) {
        next(err);
    }
});

router.get("/melhorNota/:student/:subject", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(global.fileName));
        var melhor = [];
        var grade = data.grades.filter(
            grade => {
                if(grade.student === req.params.student && grade.subject === req.params.subject) {
                    melhor.push(grade)
                };
            });
            melhor.sort(function(a,b) {
                return a.value > b.value ? -1 : a.value < b.value ? 1 : 0;
            });
        res.send(melhor.slice(0,3));
    } catch (err) {
        next(err);
    }
});



router.delete("/:id", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(global.fileName));    
        data.grades = data.grades.filter(
            grade => grade.id !== parseInt(req.params.id));        
        await writeFile(global.fileName, JSON.stringify(data, null, 2));        
        res.end();
        logger.info(`DELETE /account/:id - ${req.params.id}`)
    } catch (err) {
        next(err);  
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const grade = req.body;
        const idGrade = req.params.id;
        console.log(idGrade)
        console.log(grade)

        if (!grade.student || !grade.subject || !grade.type || !grade.value || !grade.timestamp) {
            throw new Error("student, subject, type, value e timestamp são obrigatórios.");
        }

        const data = JSON.parse(await readFile(global.fileName));
        const index = data.grades.findIndex(a => a.id == idGrade); 

        if (index === -1) {
            throw new Error("Registro não encontrado.");
        }
        
        data.grades[index].student = grade.student;
        data.grades[index].subject = grade.subject;
        data.grades[index].type = grade.type;
        data.grades[index].value = grade.value;
        data.grades[index].timestamp = grade.timestamp;

        await writeFile(global.fileName, JSON.stringify(data, null, 2));

        res.send(grade);

    } catch (err) {
        next(err);               
    }
});



export default router;