export default class RankControl extends PaoYa.Component {
   constructor(){
       super();
   }
    onAwake() {
        super.onAwake()
        this.owner.reloadData([])
        this.requestRankList()
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
                break
        }
    }
    requestRankList() {
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
             /*    let info = {
                    name: PaoYa.Utils.formatName(res.member_nick),
                    icon: PaoYa.Utils.makeIcon(res.member_avstar),
                    rank: (!res.ranking || (res.ranking <= 0)) ? "未上榜" : ("NO." + res.ranking),
                    des: res.score_with_unit
                }
                this.owner.reloadMyRankViewData(info) */
            }, () => {

            })
        }
   
}