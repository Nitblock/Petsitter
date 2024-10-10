const express = require('express');
const fs = require('fs');

const app = express();
let visitas = 0;

// Ruta para obtener el contador
app.get('/api/contador', (req, res) => {
    visitas++;
    res.json({ visitas });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
