let ctx, thisImage;

$(function(){
    // <input type="date"> bind an onchange event , invoke showDate function
    $("[type = 'date']").on("change", showDate);
    ctx = $("#myCanvas")[0].getContext("2d");
});

function showDate (){
    // debugger;
    console.log(this.value);
    let thisDate = this.value;
    // let newDate = thisDate.replaceAll('-',''); ↓same result
    thisDate = thisDate.replace(/-/g,"");
    //g means global
    //If you want to replace all matches, use a regular expression with the /g flag set.
    thisImage = new Image();
    thisImage.src = 'flipClockNumbers.png';
    thisImage.onload = function(){
        for(let i = 0; i < thisDate.length; i++){
            //thisDate[i] * 80 = 圖片從0~9 i * 80切出對應的數字   60 * i 為#myCanvas的繪圖(日期總共8碼, 總寬度 = 480)
            //thisDate[i] = 20221212 第i項的value , this.Date[i] is string, it'll return the value of index[i]
            ctx.drawImage(thisImage, thisDate[i] * 80, 0, 90, 130, 60 * i, 0, 60, 100);
        }
    }
}