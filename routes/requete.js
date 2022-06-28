const connection = require("../database/connexion")
const { Sequelize } = require("../models")
const  models = require("../models/user")(connection,Sequelize)
const controlle = require("../controllers/control")




const data =class{
    static insertion  =(donne)=>{ 
        return new Promise(async (next)=>{
            let {firstName,lastName,email} =donne
                    models.create({firstName,lastName,email}).then(result =>{
                        
                next({
                   success:result 
                  
                })
            })
            .catch(error =>{
             
               next({
                erreur:error
               })
            })
          
        })
    }
    static selection =(dd)=>{
        return new Promise(async (next) =>{
            const util = await models.findAll().then(result =>{
                next({
                    success:result 
                
                })
                
            })
            .catch(error =>{
                
                next({
                    erreur:error
                })
            })
        })
       
        
    }


    static modifie_util = (modifi,id)=>{
        console.log("gffgdgf",modifi);
        let {firstName,lastName,email} =modifi
  
        return new Promise(async (next)=>{
            await models.update({firstName,lastName,email},{where: {id:id}})
            .then(result =>{
                console.log("rfrfr",result);
                    next({
                         success:result 
                       
                    })
            })
            .catch(error=>{
                next({
                    erreur:error 
                   
                })
            })
        })
    }
    static supprime_util = (id)=>{
  
        return new Promise(async (next)=>{
            await models.destroy({where: {id:id}})
            .then(result =>{
                console.log("rfrfr",result);
                    next({
                         success:result 
                       
                    })
            })
            .catch(error=>{
                next({
                    erreur:error 
                   
                })
            })
        })
    }
}
module.exports=data