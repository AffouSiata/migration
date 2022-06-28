const data = require("../routes/requete")


const controlle =class{
    static insertionGet= async(req=request,res=response)=>{
      
        const insert= await data.insertion(req.body)
        
        if(insert.erreur){
            res.json(insert.erreur)
        }else{
         console.log(insert);
         res.json(insert.success)
        }
        
    }

    static affiche = async(req=request,res=response)=>{
        const sel = await data.selection(req.body)
        res.json(sel)
    }
    static modifier = async(req=request,res=response)=>{
        const mod = await data.modifie_util(req.body,req.params.id)
     
        console.log(req.params.id);
         if(mod.erreur){
             res.json("echec de modification")
         }else{
         console.log(mod);
         res.json("modification reussie")
         }
    }
    static supprime =  async(req=request,res=response)=>{
        const sup = await data.supprime_util(req.params.id)
         if(sup.erreur){
             res.json("echec de suppression")
         }else{
         console.log(sup);
         res.json("suppression reussie")
         }
     }
}
module.exports =controlle;