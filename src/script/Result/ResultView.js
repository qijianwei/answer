export default class ResultView extends PaoYa.View {
    constructor(){
        super();
    }
    onAwake(){
       // this.resultData=this.params;
       this.configListView();
    }
    onEnable(){
        this.initUserView();
        this.lblTip.text=`【答题${PaoYa.DataCenter.loginData.award_score}分以上可抽奖一次】`;
    }
    initUserView(){
        this.userName.text=PaoYa.Utils.formatName(PaoYa.DataCenter.loginData.nick);
        this.userIcon.skin=PaoYa.Utils.makeIcon(PaoYa.DataCenter.loginData.icon_big);
        this.bestScore.text=this.params.history_score;
        this.lblRank.text='NO.'+this.params.rank;
        this.lblCurScore.text=this.params.score+'分';
        this.lblRightNum.text=(this.params.score/10);
    }
    configListView(){
        let listView = this.listView;
        listView.vScrollBarSkin = ""
        listView.renderHandler =  Laya.Handler.create(this,function(cell,index){
            console.log('列表数据:',listView.array)
            let item = listView.array[index]
            cell.setItem(item)
        },null,false)
    }
    reloadData(list){
        this.listView.repeatY = 3
        this.listView.array = list
        this.listView.refresh()
    }
    
}