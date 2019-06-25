export default class ResultControl extends PaoYa.Component {
  constructor() {
    super();
  }
  onAwake() {
    super.onAwake();
    this.owner.reloadData([]);
    this.params = this.owner.params;

    this.requestRankList();
  }
  onEnable() {

  }
  onClick(e) {
    switch (e.target.name) {
      case "btnAgain":
        console.log("回到游戏界面");
        var scene = PaoYa.navigator.findSceneByName("GameScene");
        this.GET("get_question_list", {
          user_token: PaoYa.RequestConfig.token
        }, function (value) {
          PaoYa.navigator.replace('GameScene',value);
        },
          function () {

          })
        
        // PaoYa.navigator.push('GameScene');
        break;
      case "btnPrize":
        this.navigator.push('RouletteView');
        //console.log("展开排行榜");
        break;
      case "btnShare":
        console.log("分享功能");
        break;
    }
  }
  requestRankList() {
    var res = this.params;
    console.log("排行榜数据", res.user_rank);
    if (!res.user_rank || !res.user_rank.length) {
      return;
    }
    let list = [];
    console.log(res.user_rank);
    res.user_rank.forEach(function (item, index) {
      let i = {
        name: PaoYa.Utils.formatName(item.nick),
        icon: PaoYa.Utils.makeIcon(item.icon_big),
        rank: "NO." + (index + 1),
        des: item.score
      };
      list.push(i);
    });
    this.owner.reloadData(list);
  }
}
