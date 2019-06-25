export default class RankControl extends PaoYa.Component {
   constructor(){
       super();
   }
    onAwake() {
        super.onAwake()
        this.owner.reloadData([])
        this.requestRankList()
        this.typeText=['','1等奖','2等奖','3等奖','4等奖','5等奖']
    }
    onClick(e) {
        switch (e.target.name) {
            case 'btnRank':
                this.owner.changeBtnHandler(0)
                break
            case 'btnIntroduct':
                this.owner.changeBtnHandler(1)
                break
            case 'btnPrize':
                this.owner.changeBtnHandler(2)
                this.requestPrizeList();
                break
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
            console.log(res)
            console.log(this.getLocalTime(res[0].createDate))
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