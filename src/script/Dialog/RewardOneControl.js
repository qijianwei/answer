export default class RewardOneControl extends PaoYa.Component{
    constructor(){
        super();
    }
    onAwake(){
        this.typeArr=["","一等奖","二等奖","三等奖","四等奖","五等奖"];
        this.typeArrText=["","500元现金","茶艺体验课1节","手绘团扇体验课1节","七修定制合香香囊1个",""];
        console.log(this.owner.params); 
        if(this.owner.params){
            this.owner.lblReward.text=this.typeArr[this.owner.params.rewardType];
            this.owner.lblRewardTip.text=this.typeArrText[this.owner.params.rewardType];
        }     
    }
}