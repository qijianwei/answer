export default class RankView extends PaoYa.Dialog {
    onAwake(){
        this.configListView()
        
        this.changeBtnHandler(0);
    }
    configListView(){
        let listView = this.listView;
        listView.vScrollBarSkin = ""
        listView.renderHandler =  Laya.Handler.create(this,function(cell,index){
            let item = listView.array[index]
            cell.setItem(item)
           /*  if (index == 0) {
                cell.lblRank.color = "#ff7e00";
                cell.lblRank.bold = true;
            } else if (index == 1 || index == 2){
                cell.lblRank.color = "#404040";
                cell.lblRank.bold = true;
            } else {
                cell.lblRank.color = "#7c7c7c";
                cell.lblRank.bold = false;
            } */
        },null,false)
    }
    reloadData(list){
        this.listView.repeatY = list.length > 7 ? 7:list.length
        this.listView.array = list
        this.listView.refresh()
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
        }
    }
}