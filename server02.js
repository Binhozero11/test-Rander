const express = require("express")

const app = express()

app.use(express.json())

const testHtml = `
    <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Testando</title>
</head>
<body>
    <h1>Fábio de Jesus Xavier</h1>
    <p>Técnico em innformática</p>
</body>
</html>
`

app.get("/", function (req, res) {
 //   res.status(200).json({
 //       nome: "Bruno Túlio",
 //       version: "1.0.0",
 //       curso: "Info"
//  })
    res.status(200).json(testHtml)
})

const port = process.env.PORT || 3333

app.listen(port, function() {
    console.log(`Http running server`);
})
