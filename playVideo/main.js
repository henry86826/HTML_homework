$(function(){
    // debugger;
    // document.getElementById("myVideo");
    // $(".video").attr("src", "sample-mp4-file.mp4");
    $('#myVideo').attr("src", "sample-mp4-file.mp4");
    //set play button <-click event
    // onclick, addEventListener
    $("#playBtn").on("click", () => {
        $("#volumeDisplay").text($("#myVideo")[0].volume.toFixed(2));
        $("#progressBar")[0].max = $("#myVideo")[0].duration;
      
        // 1.Play Video or Pause Video <-- check vidoe current status
        // 2.Set Button Text <-- innerHTMl
        if($("#myVideo")[0].paused){
            $("#myVideo")[0].play();
            $("#playBtn").text("Pause");
        }else{
            $("#myVideo")[0].pause();
            $("#playBtn").text("Play");
        }
    });
    $("#fullBtn").on("click", () => {
        // $("#myVideo")不會直接指向HTML上的按鈕(DOM元件), 要加上[0], 指DOM裡第一個元件
        $("#myVideo")[0].webkitEnterFullscreen();
    })
});
    $("#lowerVolumeBtn").on("click", downVolume);
    $("#higherVolumeBtn").on("click", upVolume);
    $("#myVideo").on("timeupdate", updateProgress);
    $("#progressBar").on("change", changeProgress);

    function downVolume()  {
        var myVideo = $("#myVideo")[0];
        if(myVideo.volume == 0){
        }else if(myVideo.volume < 0.1){
            myVideo.volume = 0;
        }else{
            myVideo.volume = myVideo.volume - 0.1;
        }
        $("#volumeDisplay").text(myVideo.volume.toFixed(2));
    }


    function upVolume() {
        var myVideo = $("#myVideo")[0];
        if(myVideo.volume == 1){
        }else if(myVideo.volume > 0.9){
            myVideo.volume = 1;
        }else{
            myVideo.volume = myVideo.volume + 0.1;
        }
        $("#volumeDisplay").text(myVideo.volume.toFixed(2));
    }

    function updateProgress() {
        $("#timeDisplay").text(Math.floor($("#myVideo")[0].currentTime));
        $("#timeDisplay").append("/"+Math.floor($("#myVideo")[0].duration)+ "秒");
        $("#progressBar")[0].value = $("#myVideo")[0].currentTime;
    }

    function changeProgress() {
        $("#myVideo")[0].pause();
        $("#myVideo")[0].currentTime = $("#progressBar")[0].value;
        $("#myVideo")[0].play(); 
    }
