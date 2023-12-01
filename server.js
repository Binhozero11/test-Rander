const express = require("express")
const {z, Schema, ZodError} = require("zod")
const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient();

const app = express()

app.use(express.json())

app.get("/professores", async function (req, res) {
    const professores =  await prisma.professor.findMany()
    res.status(200).json(professores)
})

app.post("/professores", function (req, res) {
    try {
        const createProfessorSchema = z.object({
            nome: z.string(),
            email: z.string().email(),
            matricula: z.string()
        })
        const {nome, email, matricula} = createProfessorSchema.parse(req.body)
        console.log("nome", nome)
        console.log("email", email)
        console.log("matricula", matricula)
        res.status(200).send("Deu Certo")
    }catch(err){
        if(err instanceof ZodError){
            res.status(422).send(err.message)
            return
        }
        res.status(500). send(err.message)
    }finally {

    }
})

app.listen(3333, function () {
    console.log(`Http running server`);
})