const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Usar body-parser para manejar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Servir la página HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Manejar el envío del formulario
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    console.log('Formulario enviado:');
    console.log('Nombre: ${name}');
    console.log('Correo electrónico: ${email}');
    
    // Responder con un mensaje de éxito
    res.send('<h1>Formulario recibido</h1><p>Gracias por enviar tus datos.</p>');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log('Servidor corriendo en http://localhost:${PORT}');
});