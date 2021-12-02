import {Usuarios} from "../data/usuarios";
import Usuario from "../models/Usuarios";
import bcryp from "bcrypt";

export const resolvers = {
    Query : {
        
        Usuarios (){
            //console.log("Hola",Usuarios);
            return Usuario.find(); 
        },

       async Loguin(_, {email, password}){
            //return "Probando el Loguin";
            const usuario = await Usuario.findOne({
                email
            })
            //  console.log(usuario);
            //  console.log("arsg",email, password);
            if(!usuario){
                return "Email y/o contraseña incorrecto";
            }
            const validarPassword = bcryp.compareSync(password, usuario.password)

            if(validarPassword){
                return "REGISTRO EXITOSO: Email y/o contraseña Validos";
            }
            else {
                return "Email y/o contraseña incorrecto";
            }
        }
    },

    Mutation:{
       async AgregarUsuario(_, {usuario}){
                // const nUsuario = new Usuario(
                //    {
                //   nombre : usuario.nombre,
                //   apellido : usuario.apellido,
                //   fecha_nacimiento : usuario.fecha_nacimiento,
                //   edad: usuario.edad,
                //   email: usuario.email,
                //   password: usuario.password,
                //   rol: usuario.rol
                // }
                // );
                const salt = bcryp.genSaltSync();
                let nUsuario = new Usuario(usuario);
                nUsuario.password=bcryp.hashSync(usuario.password,salt);
                return await nUsuario.save();
              }
        }
    };

