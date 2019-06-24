export default class Option extends Laya.Script {

    constructor() { 
        super(); 
        this.seleted=false
    }
    
    onEnable() {
        this.owner.on(Laya.Event.CLICK, this, function(){
            if(!this.seleted){
                this.seleted=true;
                this.owner.texture='game/optionSeletedBg.png';
            }     
        })
    }
    setText(value){
        this.lblAns.text=value;
    }
    onDisable() {
    }
}