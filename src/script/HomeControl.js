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
        PaoYa.Request.GET('get_signature',{url:encodeURIComponent(window.location.href.split('#')[0])},(res)=>{
            console.log("获取签名成功");
            PaoYa.DataCenter.authData=res;
            this.adapterJS();
       })
    }
    adapterJS() {
		wx.config({
			debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
			appId: 'wx9adc82e8be26b1db', // 必填，公众号的唯一标识
			timestamp: PaoYa.DataCenter.authData.timestamp, // 必填，生成签名的时间戳
			nonceStr: PaoYa.DataCenter.authData.nonceStr, // 必填，生成签名的随机串
			signature: PaoYa.DataCenter.authData.signature,// 必填，签名
			jsApiList: [
				'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ','updateAppMessageShareData',
				'updateTimelineShareData','scanQRCode'
			] // 必填，需要使用的JS接口列表
		});
	
		wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
		 	wx.updateAppMessageShareData({ 
				title: '分享666', // 分享标题
				desc: '牛逼的人做牛逼的事情', // 分享描述
				link: 'http://lobby.xingqiu123.com/gx/web/index.html?timestamp='+new Date().getTime(), // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				imgUrl: 'https://res.xingqiu123.com/meishijia/share_icon.png', // 分享图标
				success: function () {
				  // 设置成功
				   alert('设置成功')
				},
				fail:function(){
				   alert('失败')
				}
			}); 
			
		});
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
                this.navigator.popup('/RankView');
              // this.navigator.popup('RewardDialog',{type:'hah'});
                break;
        }
    }
    //扫描二维码相关
    qrcode(){
        var img=document.createElement("img");
        img.style.position ="absolute";
        img.src="home/qrcode.jpg";
        img.index=999999;
        document.body.appendChild(img);
        Laya.Utils.fitDOMElementInArea(img,this.owner.imgQr,0,0,this.owner.imgQr.width,this.owner.imgQr);
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