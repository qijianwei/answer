export default class QrDialog extends PaoYa.Dialog{
    onEnable(){
       this.qrcode();
    }
    qrcode(){
        var img=document.createElement("img");
        img.style.position ="absolute";
        img.src="rank/qrCode.jpg";
        img.index=999999;
        document.body.appendChild(img);
        this.img=img;
        Laya.Utils.fitDOMElementInArea(img,this.imgQr,0,0,this.imgQr.width,this.imgQr);
    }
    onClosed(){
       document.body.removeChild(this.img)
    }
}