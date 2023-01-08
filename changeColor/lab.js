$(function(){
    $("[type = 'color']").on('change', changeColor);
})

function changeColor(){
    // debugger;
    console.log(this.value);
    //怎麼send顏色到canvas
    // body.style.backgroundColor = this.value;
    $('body').css("background-color",this.value)
}