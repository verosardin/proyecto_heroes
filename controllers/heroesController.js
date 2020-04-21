// Require de FS
const fs = require('fs');
// Leyendo y parseando (en array) el contenido de heroes.json. __dirname te trae el directorio completo, la ruta del archivo completo.
let heroes = JSON.parse(fs.readFileSync('../data/héroes.json', 'utf-8'));

let heroesController = {
heroes: function (req,res) {
	res.send(heroes);
},
heroesDetalle: (req,res) => {
	let heroe = heroes.find(x => x.id == req.params.id);
	console.log(heroe)
	if (heroe){
		res.end ('Hola, mi nombre es '+ heroe.nombre + ' y soy '+ heroe.profesion)
		// Si NO se encuentra se envía el mensaje de no encontrado
	}else{
		res.send('Héroe no encontrado')	
	}
    },
heroesBio: (req,res) => {
    let heroe = heroes.find(x => x.id == req.params.id);
    if (!heroe){
        res.send('No encontramos un héroe para mostrarte su biografía')
    } else {
    if (req.params.ok == 'ok'){
            res.send(heroe.nombre + 'Bio: ' + heroe.resenia)
    } else {
    res.send(heroe.nombre + ': Lamento que no desees saber más de mi :(')
    }
}
    }

}

module.exports = heroesController;