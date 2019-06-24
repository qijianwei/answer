import Sound from './Sound';
export default class HomeControl extends PaoYa.Component {
    constructor() {
        super();

    }
    onEnable() {
        Sound.ins.homeBg();
        var tween = new Laya.Tween();
        tween.to(this.owner.textIcon, {
            y: 307
        }, 1000, Laya.Ease.backOut, Laya.Handler.create(this, function () { }));
        this.tween = tween;
    }
    onClick(e) {
        switch (e.target.name) {
            case 'btnStart':
                this.GET("get_question_list", {
                    user_token: PaoYa.RequestConfig.token
                }, function (value) {
                    PaoYa.navigator.push('GameScene',value);
                },
                    function () {

                    }) 
                   
                break;
            case 'actIcon':
                //console.log("展开排行榜");
                this.navigator.push('RankView');
                break;
        }
    }
    onAppear() {
        if (!this.timeLine) { this.timeLine = new Laya.TimeLine() }
        this.breathEffect();
    }
    breathEffect() {
        var target = this.owner.activityIcon;
        this.timeLine.to(target, {
            scaleX: 1.2,
            scaleY: 1.2
        }, 500, null, 0).to(target, {
            scaleX: 1,
            scaleY: 1
        }, 500, null, 1).to(target, {
            scaleX: 0.8,
            scaleY: 0.8
        }, 500, null, 1).to(target, {
            scaleX: 1,
            scaleY: 1
        }, 500, null, 1)
        this.timeLine.play(0, true);
    }
    onDisappear() {
        if (this.timeLine) {
            this.timeLine.pause();
        }
    }

    onDisable() {

    }
    onDestroy() {
        if (this.timeLine) {
            this.timeLine.pause();
            this.timeLine.destroy();
            this.timeLine = null;
        }
        this.tween && this.tween.clear();
    }
}