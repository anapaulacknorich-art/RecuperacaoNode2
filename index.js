import express from 'express'

const app = express();
app.use(express.json())

app.get('/api/operacoes', (req,res) => {
    res.send({
        mensagem: 'Celsius ,Fahrenheit,Kelvin'
    });
});

app.post('/api/celsius',(req,res) => {
    const{celsius} = req.body;

    const fahrenheit = (celsius * 9/5) + 32

    res.json({fahrenheit})
});

app.post('/api/fahrenheit',(req,res) => {
    const{fahrenheit} = req.body;

    const resultado = (fahrenheit - 32) * 5/9

    res.json({
        resultado
    })
});

app.post('/api/kelvin',(req,res) => {
    const{celsius} = req.body;

    const resultado = (celsius + 273.15)

    res.json({
        resultado:resultado
    })
});


app.listen(3000, () => {
    console.log('Serividor rodando na porta 3000')
});



