export default class RouletteControl extends PaoYa.Component {
      /** @prop {name:rouletteView,tips:'',type:Node} */
    constructor() {
        super();
    }
    onClick(e) {
        switch (e.target.name) {
            case 'btnPrize':
                //展示我的奖品
                break
            case 'btnStart':
                this.startRoulette();
                break;
        }
    }
    startRoulette() {
        var _this=this;
        this.rouletteView.rotation = 0
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