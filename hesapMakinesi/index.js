// Genel Değişkenler
var durum=false, opt="", sonuc=0;

// Nesnelerin Oluşturulması
let rakam=document.querySelectorAll(".rakam");
let islem=document.querySelector("#islem");
var OPR=document.querySelectorAll(".OPR");
let gosterge =document.querySelector("#gosterge");
let btnCE =document.querySelector(".btnCE");
let btnC =document.querySelector(".btnC");
let nokta =document.querySelector(".nokta");
let esit =document.querySelector(".esit");

rakam.forEach(function(element){
    // forEach ile tüm elemanları gezmesiniz sagliyoruz
    // element ile de hangisi seçildiyse ona işlem yapmasını sağlıyoruz
    element.onclick= function(){
        // sıfırı kaldırmak için
        if(islem.textContent=="0" || durum){
            islem.textContent=""
        }
        islem.textContent+=this.textContent;
        durum=false;
    }
})
OPR.forEach(function(element){
    element.onclick= function(){
        durum=true; // durum hatalı mı , basılıp basılmadıgını kontrol eder . 
        var OPR =this.textContent;
        gosterge.textContent= gosterge.textContent+""+islem.textContent+""+OPR;
        // switch case ile işlemler bir defa döner ve isteigimiz kısmı döndürür
        // switch(opt) hafızaya alınan işlem
        switch(opt){
            case"+": islem.textContent = (sonuc + Number(islem.textContent));break;
            case"-": islem.textContent = (sonuc - Number(islem.textContent));break;
            case"/": islem.textContent = (sonuc / Number(islem.textContent));break;
            case"x": islem.textContent = (sonuc * Number(islem.textContent));break;
        }
        sonuc=Number(islem.textContent);
        opt=OPR;
    }
})
btnC.onclick=function(){
    islem.textContent= "0";
}
btnCE.onclick=function(){
    islem.textContent= "0";
    gosterge.textContent ="";
    sonuc=0;
    opt="";
}
esit.onclick=function(){
    gosterge.textContent="";
    durum=true;
    switch(opt){
        case"+": islem.textContent = (sonuc + Number(islem.textContent));break;
        case"-": islem.textContent = (sonuc - Number(islem.textContent));break;
        case"/": islem.textContent = (sonuc / Number(islem.textContent));break;
        case"x": islem.textContent = (sonuc * Number(islem.textContent));break;
        default:break;
    }
    sonuc=Number(islem.textContent);
    islem.textContent=sonuc;
    sonuc=0;
    opt="";
}
nokta.onclick=function(){
    if(!durum && !islem.textContent.includes(".")){
        islem.textContent+=".";
    }
    else if(durum){
        // durum hatalıysa sıfır yap 
        islem.textContent="0";
    }
    if(!islem.textContent.includes(".")){
        islem.textContent+=".";
    }
    durum=false;
}
