export default class RouletteControl extends PaoYa.Component {
      /** @prop {name:rouletteView,tips:'',type:Node} */
       /** @prop {name:imgRound,tips:'',type:Node} */
    constructor() {
        super();
    }
    /*    一等奖:500元现金 二等奖:茶艺体验课1节 三等奖:手绘团扇体验课1节 四等奖:七修定制合香香囊1个 对应位置*/
    onAwake(){
        this.rewardTypeArrs=[[],[0],[3,7],[2,5],[4,6],[1]];
        this.rotateIndex=1;
    }
    onClick(e) {
        switch (e.target.name) {
            case 'btnPrize':
                //展示我的奖品
                this.navigator.popToRootScene();
                this.navigator.popup('/RankView',{type:1})
                break
            case 'btnStart':
                this.POST('draw_lucky',{},(res)=>{
                    console.log("返回数据",res);
                    this.rotateIndex=this.rewardTypeArrs[res.awardType].randomItem;
                    this.rewardType=res.awardType;
                    this.hasUserInfo=res.has_sumit_info;
                    this.startRoulette();
                })    
                break;
        }
    }
    startRoulette() {
        var _this=this;
        var index=this.rotateIndex;
        this.rouletteView.rotation = 0;
        this.blingbling();
        Laya.Tween.to(this.rouletteView, {
            rotation: 360 - 45 * index + 360 * 4
        }, 5000, Laya.Ease.circOut, Laya.Handler.create(this, ()=> {
             _this.stopBling();
             if(_this.rewardType!=5&&!this.hasUserInfo){
                 _this.navigator.popup('RewardDialog',{rewardType:_this.rewardType})
             }
        }));

    }
    //展示闪烁灯效果
    blingbling() {
       Laya.timer.loop(200,this,()=>{
           if(this.imgRound.skin=="routtle/circle1.png"){
             this.imgRound.skin="routtle/circle2.png"
           }else{
            this.imgRound.skin="routtle/circle1.png"
           }       
       })
    }
    stopBling(){
      Laya.timer.clearAll(this);
    }
}