export default class RankPrize extends Laya.Box {
    onAwake(){
        this.lblPrizeName = this.getChildByName('lblPrizeName')
        this.lblTime = this.getChildByName('lblTime')
    }
    setItem(item){
        this.lblPrizeName.text = item.name;
        this.lblTime.text = item.des
        
    }
}