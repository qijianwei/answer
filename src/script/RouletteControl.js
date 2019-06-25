export default class RouletteControl extends PaoYa.Component {
      /** @prop {name:rouletteView,tips:'',type:Node} */
    constructor() {
        super();
    }
    /*    一等奖:500元现金 二等奖:茶艺体验课1节 三等奖:手绘团扇体验课1节 四等奖:七修定制合香香囊1个 对应位置*/
    onAwake(){
        this.rewardTypeArrs=[[],[0],[3,7],[2,5],[4,6],[1]];
        this.rewardType=3;
    }
    onClick(e) {
        switch (e.target.name) {
            case 'btnPrize':
                //展示我的奖品
                this.navigator.popToRootScene();
                this.navigator.popup('/RankView',{type:1})
                break
            case 'btnStart':
                this.startRoulette();
                break;
        }
    }
    startRoulette() {
        var _this=this;
        var index=this.rewardType;
        this.rouletteView.rotation = 0;
        this.blingbling();
        Laya.Tween.to(this.rouletteView, {
            rotation: 360 - 45 * index + 360 * 4
        }, 5000, Laya.Ease.circOut, Laya.Handler.create(this, function () {
             _this.stopBling();
        }));

    }
    //展示闪烁灯效果
    blingbling() {

    }
    stopBling(){

    }
}