export default class Sound{
  static get ins(){
      if(!this._ins)
          this._ins=new Sound();
      return this._ins;
  }

  constructor(){
     this.url=PaoYa.DataCenter.RESURL+'sound/';
     //this.url='sound/';
      this.suffix=Laya.Render.isConchApp?'.wav':'.mp3';
  }

  playMusic(fileName){
     // if(!Laya.SoundManager.musicMuted){
          var url=this.url+fileName+this.suffix;
          this.currentChannel=Laya.SoundManager.playMusic(url, 0);
     // }
  }

  playSound(fileName,loop,cb){
      (loop===void 0)&&(loop=1);
      (cb===void 0)&&(cb=null);
      if(!Laya.SoundManager.soundMuted){
          var url=this.url+fileName+this.suffix;
          Laya.SoundManager.playSound(url, loop);
      }
  }
 /*  
 */
  homeBg(){
    this.playMusic('background');
  }

  gameBg(){
      this.playMusic('gameBg');
  }

 
  right(){
      this.playSound('right');
  }

  wrong(){
      this.playSound('wrong');
  }
  gameOver(){
    this.playSound('gameover');
  }
}
Sound._ins;