//init
$(function(){
  $("#dropbox").on("dragenter", dragenter);
  $("#dropbox").on("dragleave", dragleave);
  $("#dropbox").on("dragover", dragover);
  $("#dropbox").on("drop", drop);
});

function dragenter(){
  $("#dropbox").css('background-color', 'red');
  $("#dropbox").text('Drop it!');
  
}

function dragleave(){
  $("#dropbox").css('background-color', 'blue');
  $("#dropbox").text('Come here.');
  
}

function dragover(e){
  e.preventDefault();
}

function drop(e){
  e.preventDefault();
  //origninalEvent 為jQuery語法
  let files = e.originalEvent.dataTransfer.files;
  if(files.length == 0){
    return false;
  }
  //只會convert第一個檔案
  convert(files[0]);
  // $("#dropbox").css('background-color', 'blue');
  // $("#dropbox").text('Text Down Below.');
}

function convert(file){
  //file.type.match() > match()為string的function
  if(!file.type.match(/text.*/)){
    alert("請拖放文字檔");
    dragleave();
    return false;
  }
  //FileReader Object 
  let reader = new FileReader();
  //make sure reader 已經完成讀取 > onloadend 
  reader.onloadend = function(){
    let s = reader.result;
    console.log(reader);
    $("#preview").append("\n"+s);
    dragleave();
  };
  //FileReader function
  reader.readAsText(file);
}