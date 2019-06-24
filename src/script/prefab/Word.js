
export default class Word extends Laya.Script {

    constructor() { 
        super(); 
        this.seleted=false;
    }
    
    onEnable() {
        this.owner.on(Laya.Event.CLICK, this, function(){
            if(!this.seleted){
                this.seleted=true;
            }     
        })
    }
    setText(value){
        this.lblChoice.text=value;
    }
    onDisable() {
    }
}