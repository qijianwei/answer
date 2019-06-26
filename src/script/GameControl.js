import Sound from "./Sound";

/* import Request, { RequestConfig } from './network/Request'; */

export default class GameControl extends PaoYa.Component {

    constructor() { 
        /** @prop {name:word, tips:"字预制件", type:Prefab}*/
         /** @prop {name:option, tips:"选项预制件", type:Prefab}*/
        super(); 
        this.topicSum=10;
        this.index=-1;//当前的题目编号
        this.idiomIndex=0;//当前点击成语第几个
        this.idiomStr="";//选中的成语字符串
        this.words=[];//存储所有成语的字的实例
        this.options=[];//存储所有选项  存4个
        this.correctNum=0;
        this.answerOK=true;
        this.gameOver=false;
        var _this=this;
        console.log(_this)
       
    }
    onAwake(){
        this.params=this.owner.params;
    }
    
    onEnable() {
        var _this=this;   
        this.questions=this.params.question;
        this.awardRest=this.params.game_rest_num;
        PaoYa.DataCenter.awardRest=this.awardRest;

        this.okNum=this.owner.okNum;//答对题数对象
        this.idiomBox=this.owner.idiomBox;
        this.optionBox=this.owner.optionBox;
        this.lblTopic=this.owner.lblTopic;
        this.imgTopic=this.owner.imgTopic;//成语题目图片
        this.idiomAnsBg=this.owner.idiomAnsBg;
        this.idiomAnsBox=this.owner.idiomAnsBox;
        this.idiomChilds=this.idiomAnsBox._children;
        this.btnNext=this.owner.btnNext;//下一题
        this.btnHome=this.owner.btnHome;//首页按钮
        //时间
        this.timeLabel=this.owner.timeLabel;
        this.idiomLabels=[];
        for(var i=0;i<this.idiomChilds.length;i++){
            this.idiomLabels.push(this.idiomChilds[i].getChildByName('lbl'));
            this.idiomChilds[i].on(Laya.Event.CLICK, this.idiomChilds[i], function(){
                console.log("当前点的字")
                // console.log(this.text);
                this.visible=false;
                this.getChildByName('lbl').text="";
                _this.idiomIndex-=1;
            });
           // this.idiomLabels[i].on
        }

        this.titleType=this.owner.titleType;
        this.lblTip=this.owner.lblTip;
        //用户信息相关
        this.userName=this.owner.userName;
        this.userIcon=this.owner.userIcon;

       
        this.initUserInfo();
        this.initView();
        this.showTopic();
        this.startTimer();
        
       // this.showTopic();
    }
    //initUserInfo
    initUserInfo(){
        this.userName.text=PaoYa.Utils.formatName(PaoYa.DataCenter.loginData.nick);
        this.userIcon.texture=PaoYa.Utils.makeIcon(PaoYa.DataCenter.loginData.icon_big);
    }
    //开启倒计时
    //初始化成语和选择题的样式，以后每题只要填充数据即可
    initView(){
       this.initIdiom();
       this.initOption();
       this.idiomBox.on(Laya.Event.CLICK, this, function(e){  
           
           if(e.target.value!==void 0&&this.answerOK){
            console.log("选中的对象",e.target);
            e.target.seleted=true;
            this.idiomClickHandler(e);
          } 
       });
       this.optionBox.on(Laya.Event.CLICK,this,function(e){
          if(e.target.value!==void 0&&this.answerOK){
            this.optionClickHandler(e);
          }    
       })
       this.btnNext.on(Laya.Event.CLICK,this,function(e){
           this.showTopic();
       })
       this.btnHome.on(Laya.Event.CLICK,this,function(){
         //  console.log("返回首页");
         this.gameOver=true;
         this.timerService.stop();
         
          PaoYa.navigator.popToRootScene();
       })

    }
    startTimer(){
        var time=this.params.game_time;
        var _this=this;
        //开启一个倒计时定时器
        this.timerService=new PaoYa.TimerService(time);
        this.timerService.on(PaoYa.TimerService.PROGRESS, this, function (minute) {
        
            _this.timeLabel.text=minute.formatTime('M:S')
        });
        this.timerService.on(PaoYa.TimerService.STOP, this, function () {
            if(!this.gameOver){//一直等待不答题
                this.gameEnd();
            }
           console.log("倒计时结束");
        });
        this.timerService.start();
    }
    idiomClickHandler(e){
        //this.idiomIndex++;
        /* this.idiomChilds[this.idiomIndex].visible=true;
        this.idiomLabels[this.idiomIndex].text=e.target.value; */
        for(var i=0;i<4;i++){
            if(!this.idiomChilds[i].visible){
                this.idiomChilds[i].visible=true;
                this.idiomLabels[i].text=e.target.value; 
                break;
            }
        }
        //this.idiomStr+=e.target.value;
        this.idiomIndex++; //计数用
        if(this.idiomIndex==4){//答完当前题目，判断对错，开启下一轮
           // this.index+=1;
           this.getIdiomStr();
           if(!this.judgeCurTopic(this.idiomStr)){
               Sound.ins.wrong();
               this.showRightIdiom();//展示正确的 
               Laya.timer.once(2000,this,this.showTopic);//开启下一题     
           }else{
               Sound.ins.right();
               Laya.timer.once(1000,this,this.showTopic);//开启下一题
           }
            
        }
        
    }
    getIdiomStr(){
        for(var i=0;i<4;i++){
            this.idiomStr+=this.idiomLabels[i].text;
        }
    }
    optionClickHandler(e){
       if(this.judgeCurTopic(e.target.value)){
           Sound.ins.right();
           e.target.texture="game/optionRight.png";
       }else{
           Sound.ins.wrong();
           e.target.texture="game/optionWrong.png";
       }
       
       Laya.timer.once(1000,this,this.showTopic);//开启下一题
    }
    //type 0表示选择 1表示成语
    judgeCurTopic(ans){
        this.answerOK=false;//此时不允许答题
        if(ans==this.questions[this.index].answer){
           this.correctNum+=1;
           this.okNum.text=this.correctNum;
           return true;
        }else{
           return false;
        }
    }
    showRightIdiom(){
        var ans=this.questions[this.index].answer;
        for(var i=0;i<12;i++){
            if(ans.indexOf(this.words[i].value)!=-1){
                this.words[i].texture="game/choiceRight.png";
            }else{
                this.words[i].texture="game/choiceWrong.png";
            }
        }
    }
      //成语
      initIdiom(){
        for(var i=0; i<3; i++){
            for(var j=0; j<4; j++){
                var word=Laya.Pool.getItemByCreateFun('word', this.word.create, this.word);
                this.idiomBox.addChild(word);
                word.pos(j*100, i*80);
                this.words.push(word);
            }
        }
    }
    //选择题
    initOption(){
      this.optionBox.width=465;
      for(var i=0;i<3;i++){
          var option=Laya.Pool.getItemByCreateFun('option',this.option.create,this.option);
          this.optionBox.addChild(option);
          option.pos(0,i*100);       
          option.visible=false;
          this.options.push(option);
      }
    }
    showTopic(){
        //1是选择题
        if(this.index==8){//倒数第二道题，不允许跳下一题
            //console.log("展示结果,没题目了")
            this.owner.btnNext.disabled=true;
           
        }
        if(this.index==9){
            this.gameOver=true;
            this.timerService.stop();
            this.gameEnd();
            return;
        }
        this.index+=1;
        this.answerOK=true;
        this.currentOptions=this.questions[this.index].options.split(';');
        this.currentTitle=this.questions[this.index].title;
        if(this.questions[this.index].type==1){
           this.showOption();
        }else if(this.questions[this.index].type==2){//2代表成语题目
           this.showIdiom();
        }    
    }
    showOption(){
       this.titleType.text="选择题";
       this.lblTip.text="请选择正确答案";
       this.idiomAnsBg.visible=false;
       this.idiomAnsBox.visible=false;

       this.optionBox.visible=true;
       this.idiomBox.visible=false;
       this.lblTopic.visible=true;
       this.imgTopic.visible=false;
       this.lblTopic.text=this.currentTitle;
       for(var i=0;i<this.options.length;i++){
           if(i<this.currentOptions.length){
             this.options[i].visible=true;
             this.options[i].getChildByName('lblAns').text=this.currentOptions[i];
             this.options[i].texture="game/optionBg.png";
             this.options[i].value=this.currentOptions[i];
           }else{
             this.options[i].visible=false;
           }     
       }
    }
    showIdiom(){
       this.idiomIndex=0;//每次重新展现题目的时候初始化
       this.idiomStr="";
       this.titleType.text="成语题";
       this.lblTip.text="请按顺序选择文字组成成语";
       this.idiomAnsBg.visible=true;
       this.idiomAnsBox.visible=true;
   
       this.idiomBox.visible=true;
       this.optionBox.visible=false;
       this.lblTopic.visible=false;
       this.imgTopic.visible=true;
       this.imgTopic.skin=PaoYa.DataCenter.CDNURL+this.questions[this.index].title;
       //this.imgTopic.skin=RequestConfig.CDNURL+this.currentTitle;
       for(var i=0;i<12;i++){
           this.words[i].getChildByName('lblChoice').text=this.currentOptions[i];
           this.words[i].value=this.currentOptions[i];
           this.words[i].texture="game/choiceBg.png";
           this.words[i].seleted=false;
       }
       //每次展示题目 隐藏答案区
       for(var j=0;j<4;j++){
          // this.idiomLabels[i].visible=f
          this.idiomChilds[j].visible=false;
       }
    }
    gameEnd(){
        PaoYa.LaunchScreenView.show();
        PaoYa.LaunchScreenView.Settlement();
        console.log('最后userToken是:',PaoYa.RequestConfig.token)
        this.POST('submit_credits',{score:this.correctNum*10},(res)=>{
            //console.log('服务端返回的东西')
            PaoYa.navigator.present('GameResultView',res);
            PaoYa.LaunchScreenView.hide();
        })
    }
    onDisable() {
    }
}