export default class RankView extends PaoYa.Dialog {
    onAwake(){
        this.configListView()
        this.initUserInfo();
        this.configPrizeListView();
        this.changeBtnHandler(0);
    }
    initUserInfo(){
        this.lblIcon.texture=PaoYa.Utils.makeIcon(PaoYa.DataCenter.loginData.icon_big);
        this.lblName.text=PaoYa.Utils.formatName(PaoYa.DataCenter.loginData.nick);
    }
    configListView(){
        let listView = this.listView;
        listView.vScrollBarSkin = ""
        listView.renderHandler =  Laya.Handler.create(this,function(cell,index){
            let item = listView.array[index]
            cell.setItem(item)
        
        },null,false)
    }
    configPrizeListView(){
        let prizeList=this.prizeList;
        prizeList.vScrollBarSkin='';
        prizeList.renderHandler =  Laya.Handler.create(this,function(cell,index){
            let item = prizeList.array[index]
            cell.setItem(item)
        },null,false)
    }
    reloadData(list){
        this.listView.repeatY = list.length > 7 ? 7:list.length
        this.listView.array = list
        this.listView.refresh()
    }
    reloadPrizeData(list){
        this.prizeList.repeatY = list.length > 5 ? 5:list.length
        this.prizeList.array = list
        this.prizeList.refresh()
    }
    //index :0 排行榜 2奖品榜 3 比赛说明
    changeBtnHandler(index){
        if(index == 0){
            this.boxUserInfo.visible=true;
            this.listView.visible = true;
            this.boxRankList.visible=true;
            this.boxRankInfo.visible=true;
            this.boxPrizeInfo.visible=false;
            this.boxPrizeList.visible=false;
            this.btnRank.color="#000000";
            this.btnIntroduct.color="#565d68";
            this.btnPrize.color="#565d68";
            this.btnRank.bold=true;
            this.btnIntroduct.bold=false;
            this.btnPrize.bold=false;   
            this.ImgIntroduct.visible=false;
        } else if(index==2){
            this.boxUserInfo.visible=true;
            this.listView.visible = false;
            this.boxRankList.visible=false;
            this.boxRankInfo.visible=false;
            this.boxPrizeInfo.visible=true;
            this.boxPrizeList.visible=true;
            this.btnRank.color="#565d68";
            this.btnIntroduct.color="#565d68";
            this.btnPrize.color="#00000";
            this.btnRank.bold=false;
            this.btnIntroduct.bold=false;
            this.btnPrize.bold=true;   
            this.ImgIntroduct.visible=false;     
        }else{
            this.boxUserInfo.visible=false;
            this.listView.visible = false;
            this.boxRankList.visible=false;
            this.boxRankInfo.visible=false;
            this.boxPrizeInfo.visible=false;
            this.boxPrizeList.visible=false;
            this.btnRank.color="#565d68";
            this.btnIntroduct.color="#000000";
            this.btnPrize.color="#565d68";
            this.btnRank.bold=false;
            this.btnIntroduct.bold=true;
            this.btnPrize.bold=false;
            //只展示比赛说明
            this.ImgIntroduct.visible=true;     
        }
    }
}