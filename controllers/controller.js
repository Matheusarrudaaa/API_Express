const fs = require('fs').promises;
exports.pong = (req, res) => {

    res.send(`
        <form action="/ping/msg" method="POST">
        <label>Mensagem:</label>
        <input type="text" name="Mensagem">
        <button>Enviar</button> 
        </form>    
        `);
}

exports.pong_msg = (req, res) => {
    console.log(req.body)

    const json = JSON.stringify(req.body);
    fs.writeFile("./teste.json", json, { flag: 'w' });
    res.send(`<h1>Mensagem recebida e salva!!! </h1>`)
}
