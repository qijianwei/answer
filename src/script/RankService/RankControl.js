export default class RankControl extends PaoYa.Component {
   constructor(){
       super();
   }
    onAwake() {
        super.onAwake()
        this.owner.reloadData([])
        if(this.owner.params.type){
            this.requestPrizeList();
        }else{
            this.requestRankList()
        }  
        this.typeText=['','500元现金','茶艺体验课1节','手绘团扇体验课1节','七修定制合香香囊1个','感谢参与']
    }
    onClick(e) {
        switch (e.target.name) {
            case 'btnRank':
                this.owner.changeBtnHandler(0)
                this.requestRankList();
                break
            case 'btnIntroduct':
                this.owner.changeBtnHandler(1)
                break
            case 'btnPrize':
                this.owner.changeBtnHandler(2)
                this.requestPrizeList();
                break
            case 'btnLook':
              this.navigator.popup('QrDialog',null,null,null,false);
              break;
        }
    }
    requestRankList() {
        var _this=this;
      PaoYa.Request.GET("rank_list", { }, (res) => {
                if (!res.user_rank||!res.user_rank.length) { return }
                let list = []
                res.user_rank.forEach(function (item, index) {
                    let i = {
                        name: PaoYa.Utils.formatName(item.nick),
                        icon: PaoYa.Utils.makeIcon(item.icon_big),
                        rank: "NO." + (index + 1),
                        des: item.score
                    }
                    list.push(i)
                });
                this.owner.reloadData(list)
                this.owner.lblRankPos.text=res.rank;
            }, () => {

            })
        }
    requestPrizeList(){
        PaoYa.Request.GET("reward_list",{},(res)=>{
            if(!res||!res.length){return;} //预防空数据
            let list=[];
            res.forEach((item,index)=>{
                let i={
                    name:this.typeText[item.awardType],
                    des:this.getLocalTime(item.createDate*1000)
                }
                list.push(i);
            })
           this.owner.reloadPrizeData(list);
        })
    }
    getLocalTime(time) {     
        var date = new Date(time + 8 * 3600 * 1000);
        return date.toJSON().substr(0, 10);
     }
   
}