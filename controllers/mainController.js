let mainController ={
index: function (req,res){
    res.send('Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne hueso que encontrarás en este sitio.' + '\n' + 'Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos.'+'\n'+ 'Recuerda: ¡nunca pares de creer en ti!')
    },
creditos: function (req,res){
    res.send('Estos son los créditos')
    }
}

module.exports = mainController;