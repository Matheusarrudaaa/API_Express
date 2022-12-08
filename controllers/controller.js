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
    res.send(`<h1>Mensagem recebida e salva!!! </h1>`)
}