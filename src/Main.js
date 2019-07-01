import GameConfig from "./GameConfig";
import ui from "./ui/layaMaxUI";
class Main {
	constructor() {
	   
		
		//根据IDE设置初始化引擎		
		if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height);
		else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
		Laya["Physics"] && Laya["Physics"].enable();
		Laya["DebugPanel"] && Laya["DebugPanel"].enable();
		//Laya.Stage.EXACTFIT;
		Laya.stage.scaleMode =Laya.Stage.EXACTFIT;
		Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
		Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
		//兼容微信不支持加载scene后缀场景
		Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;

		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
		if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
		if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
		if (GameConfig.stat) Laya.Stat.show();
		Laya.alertGlobalError = true;
		//  this.adapterScreen();
		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
		Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
	}
	
	adapterScreen() {
		var stage = Laya.stage;
		var screenWidth = Laya.Browser.width;
		var screenHeight = Laya.Browser.height;
		var width = stage.designWidth;
		var height = stage.designHeight;
		var scaleX = screenWidth / width;
		var y = (screenHeight - height * scaleX >> 1) / scaleX;
		Laya.Scene.root.y = Math.floor(y);
	}
	onVersionLoaded() {
		//
		PaoYa.navigator = new PaoYa.Navigator;
		PaoYa.LaunchScreenView.show();
		//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
		Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
	}

	onConfigLoaded() {
		 var _this=this;
		//localStorage.setItem('userTokenKey','7TD562pfG74jjtapdDw5aCpIoXKzDDAN18QjeVhmPJM=')
		if (!localStorage.getItem('userTokenKey')) { //没有token，走授权
			if (window.location.href.indexOf('nick') == -1) {
				window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9adc82e8be26b1db&redirect_uri=http://lobby.xingqiu123.com/gx/register&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirects";
			} else {	
				var data = {};
				var arr = window.location.href.split("?")[1].split('&');
				var key = "", value = "";
				for (let i = 0; i < arr.length; i++) {
					key = arr[i].split('=')[0];
					value = arr[i].split('=')[1];
					data[key] = value;
				}
				localStorage.setItem('userTokenKey',data['user_token']);
				PaoYa.RequestConfig.token=data['user_token']
				PaoYa.DataCenter.loginData = data;
					//先走登陆流程,登陆成功后loadingWaitView,再initRootScene 异步				
					_this.preload();
			}
		} else {
			var token = localStorage.getItem('userTokenKey');
			PaoYa.RequestConfig.token = token;
			PaoYa.Request.POST('user_login', { user_token: token }, function (res) {
				PaoYa.DataCenter.loginData = res;
				//先走登陆流程,登陆成功后loadingWaitView,再initRootScene 异步
		        _this.preload();
			}, function (res) {
			
				localStorage.removeItem('userTokenKey');
				_this.onConfigLoaded(); 
			})
    	} 
		
	}
	/* adapter(){
		this.adapterJS();
		this.preload();
	}; */
	preload(){
		this.setUpGameRes()
		Laya.loader.load(PaoYa.DataCenter.GAMERES,Laya.Handler.create(this,()=>{
        this.setupLoadingView();
		}),Laya.Handler.create(this,(progress)=>{
			  PaoYa.LaunchScreenView.setProgress(progress);
		},null,false))
	}
	setUpGameRes(){
		PaoYa.DataCenter.GAMERES=[
			"res/atlas/game.atlas", 
			"res/atlas/home.atlas",
			"res/atlas/rank.atlas"
		]
	}
	setupLoadingView() {
		Laya.Scene.load('scenes/Loading/LoadWaitingView.scene', Laya.Handler.create(this, function (scene) {
			PaoYa.Navigator.adjustViewPosition(scene)
			Laya.Scene.setLoadingPage(scene)
			Laya.AtlasInfoManager.enable('fileconfig.json', Laya.Handler.create(this, this.initRootScene))
		}))
		
	}
	//初始化首屏
	initRootScene() {
		
		PaoYa.navigator.push("HomeView");
		PaoYa.LaunchScreenView.hide(); 
	}
}
//激活启动类
new Main();
console.log=function(){};
