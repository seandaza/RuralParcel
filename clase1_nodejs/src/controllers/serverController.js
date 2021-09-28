
const person = require('../models/person');

var users = [
    { id: 1, nombre: "Juan", apellido: "Quintana" },
    { id: 2, nombre: "Laura", apellido: "Rodriguez" },
    { id: 3, nombre: "Javier", apellido: "Urbina" },
    { id: 4, nombre: "Luis", apellido: "Pinzón" }
]

class ServerController {
    constructor() {

    }

    register(req, res, next) {
        person.create(req.body, (error, data) => {
            if (error) {
                //next(error);
                res.status(500).send();
            } else {
                res.status(201).json(data);
            }
        });
    }
    /*
    register(req, res){
        
        let { nombre, apellido } = req.body;
        console.log("Usuario registrado con éxito");
        console.table({nombre, apellido});
        
       users.push(req.body);
        res.status(201).json({
            message: "Usuario registrado con éxito"
        });
    }
    */

    update(req, res) {
        let { id, nombre, apellido, edad, email } = req.body;
        let obj = {
            nombre,
            apellido,
            edad,
            email
        }
        person.findByIdAndUpdate(id, {
            $set: obj
        }, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        });
    }
    /*
    update(req, res){
        let {id, nombre, apellido} = req.body;
        users.forEach(element => {
            if(id == element.id){
                element.nombre = nombre;
                element.apellido = apellido;
            }
        });

        res.status(200).json({message: 'Actualización con éxito'});
    }
    */
    getAllUsers(req, res) {
        person.find((err, data, next) => {
            if (err) {
                //next(error)
                ; res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        });
    }
    /*
    getAllUsers(req, res){
        res.status(200).json(users);
    }
    */

    getUserById(req, res) {
        let id = req.params.id;
        person.findById(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        });
    }

    /*
    getUserById(req, res) {
        let id = req.params.id;
        let userResp = null;
        users.forEach(element => {
            if (id == element.id) {
                userResp = element;
            }
        });

        if (userResp != null) {
            res.status(200).json(userResp);
        } else {
            res.status(400).json({ message: "Usuario no encontrado" });
        }
    }
    */

    delete(req, res) {
        let { id } = req.body;
        person.findByIdAndRemove(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        });
    }

    /*
    deleteUser(req, res) {
        let { id } = req.body;
        //Eliminar un elemento por id del arreglo users
        let tempoUsers = [];
        users.forEach(element => {
            if (element.id != id) {
                tempoUsers.push(element);
            }
        });

        users = tempoUsers;
        res.status(200).json({ message: "All OK" });
    }
    */

}

exports.default = ServerController;

/****************
 * DESARROLLE UN CRUD DE LA ENTIDAD CARRO CON LOS SIGUIENTES 
 * ATRIBUTOS:
 * placa, modelo, color
*/