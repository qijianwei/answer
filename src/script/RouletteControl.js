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
        this.params=this.owner.params;
    }
    onAppear(){
        Laya.stage.scaleMode =Laya.Stage.SCALE_FIXED_WIDTH;
        Laya.stage.alignV = Laya.Stage.ALIGN_TOP; 
        this.blingbling();
    }
    onDisappear(){
        Laya.stage.scaleMode =Laya.Stage.EXACTFIT;
		Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
    }
    onEnable(){
       this.iniView();
    }
    onDestroy(){
        Laya.stage.scaleMode =Laya.Stage.EXACTFIT;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
    }
    iniView(){
        if(PaoYa.DataCenter.awardRest&&this.params.score>=PaoYa.DataCenter.loginData.award_score){
            this.owner.lblTip.text='您还有'+PaoYa.DataCenter.awardRest+'次抽奖机会';
        }else{
            this.owner.btnStart.disabled=true;
            this.owner.lblTip.text='您还有0次抽奖机会';
        }  
    }
    onClick(e) {
        switch (e.target.name) {
            case 'btnPrize':
                //展示我的奖品
                this.navigator.popToRootScene();
                this.navigator.popup('/RankView',{type:1}) 
                break
            case 'btnStart':
           console.log(this.imgRound)
            PaoYa.Request.POST('draw_lucky',{},(res)=>{
                    PaoYa.DataCenter.awardRest=PaoYa.DataCenter.awardRest-1;
                    this.iniView();
                    this.rotateIndex=this.rewardTypeArrs[Number(res.awardType)].randomItem;
                    this.rewardType=Number(res.awardType);
                    this.hasUserInfo=res.has_sumit_info;
                    this.startRoulette();
                })  
                break; 
            case 'btnBack':
                this.navigator.pop(); 
                break;
        }
    }
    startRoulette() {
        var _this=this;
        var index=this.rotateIndex;
        this.rouletteView.rotation = 0;
      //  this.blingbling();
        Laya.Tween.to(this.rouletteView, {
            rotation: 360 - 45 * index + 360 * 4
        }, 5000, Laya.Ease.circOut, Laya.Handler.create(this, ()=> {
             _this.stopBling();
             if(_this.rewardType!=5){
                 if(!this.hasUserInfo){
                    _this.navigator.popup('rewardDialog',{rewardType:_this.rewardType}) 
                 }else{
                    _this.navigator.popup('rewardOneDialog',{rewardType:_this.rewardType})  
                 }
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