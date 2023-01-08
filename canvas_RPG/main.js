let mapArray, ctx, currentImgMain;
let imgMoutain, imgMain, imgEnemy;
//mapArray : map element data
//ctx : HTML5 Canvas
//currentImgMain : x, y location
//imgXXX : image Object
const gridLength = 200; //畫面是 600*600 分成九宮格用 200*200

function loadImages(sources, callback) {
  var images = {};
  var loadedImages = 0;
  var numImages = 0;
  // get num of sources
  for (var src in sources) {
    numImages++;
  }
  for (var src in sources) {
    images[src] = new Image();
    images[src].onload = function () {
      if (++loadedImages >= numImages) {
        callback(images);
      }
    };
    images[src].src = sources[src];
  }
}

//Game initial

$(function () {
  // 0 = 可以走的, 1 = 障礙物, 2 = 終點, 3 = 敵人
  mapArray = [
    [0, 1, 1],
    [0, 0, 0],
    [3, 1, 2],
  ];

  ctx = $("#myCanvas")[0].getContext("2d");
  //把主角擺上畫面
  imgMain = new Image();
  imgMain.src = "./images/spriteSheet.png";
  currentImgMain = {
    x: 0,
    y: 0,
  };

  imgMain.onload = function () {
    // context.drawImage(img,source_x,source_y,swidth,sheight,x,y,width,height);
    ctx.drawImage(
      imgMain,
      0,
      0,
      80,
      130,
      currentImgMain.x,
      currentImgMain.y,
      gridLength,
      gridLength
    );
  };

  var sources = {
    moutain: "./images/material.png",
    enemy: "./images/Enemy.png",
  };

  loadImages(sources, function (images) {
    for (let x in mapArray) {
      for (let y in mapArray[x]) {
        if (mapArray[x][y] == 1) {
          //moutain
          ctx.drawImage(
            images.moutain,
            32,
            65,
            32,
            32,
            y * gridLength,
            x * gridLength,
            gridLength,
            gridLength
          );
        } else if (mapArray[x][y] == 3) {
          //moutain
          ctx.drawImage(
            images.enemy,
            7,
            40,
            104,
            135,
            y * gridLength,
            x * gridLength,
            gridLength,
            gridLength
          );
        }
      }
    }
  });
  // imgMoutain = new Image();
  // imgMoutain.src = "/canvas_RPG/images/material.png";
  // imgEnemy = new Image();
  // imgEnemy.src = "/canvas_RPG/images/Enemy.png";

  // imgMoutain.onload = function(){
  //     imgEnemy.onload = function(){
  //         for(let x in mapArray){
  //             for(let y in mapArray[x]){
  //                 if(mapArray[x][y] == 1){
  //                     //moutain
  //                     ctx.drawImage(imgMoutain, 32, 65, 32, 32, y*gridLength, x*gridLength, gridLength, gridLength);
  //                 }else if(mapArray[x][y] == 3){
  //                     //moutain
  //                     ctx.drawImage(imgEnemy, 7, 40, 104, 135, y*gridLength, x*gridLength, gridLength, gridLength);
  //                 }
  //             }
  //         }
  //     }
  // }
});

//User Event
$(document).on("keydown", (event) => {
  // debugger;
  let targetImg, targetBlock, cutImagePositionX;
  targetImg = {
    //主角的目標座標 (0,0) ~ (400,400)
    x: -1,
    y: -1,
  };
  targetBlock = {
    //主角的目標(對應2維陣列) [0][0] ~ [2][2]
    x: 2,
    y: 2,
  };

  event.preventDefault();

  // console.log(event.code);

  switch (event.code) {
    case "ArrowLeft":
      targetImg.x = currentImgMain.x - gridLength; //現在的位置減掉每個移動單位
      targetImg.y = currentImgMain.y;
      cutImagePositionX = 175;
      console.log(event.code);
      break;
    case "ArrowUp":
      targetImg.x = currentImgMain.x;
      targetImg.y = currentImgMain.y - gridLength;
      cutImagePositionX = 355;
      console.log(event.code);
      break;
    case "ArrowRight":
      targetImg.x = currentImgMain.x + gridLength;
      targetImg.y = currentImgMain.y;
      cutImagePositionX = 540;
      console.log(event.code);
      break;
    case "ArrowDown":
      targetImg.x = currentImgMain.x;
      targetImg.y = currentImgMain.y + gridLength;
      cutImagePositionX = 0;
      console.log(event.code);
      break;
    default: //Other key - no effect
      return;
  }

  //confirm the main role will not leave the map
  if (
    targetImg.x <= 400 &&
    targetImg.x >= 0 &&
    targetImg.y <= 400 &&
    targetImg.y >= 0
  ) {
    targetBlock.x = targetImg.y / gridLength; //2維陣列Block對應到
    targetBlock.y = targetImg.x / gridLength;
  } else {
    targetBlock.x = -1; //設成-1, 讓他不能去
    targetBlock.y = -1;
  }

  //clear main role清除原本角色位置
  ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);

  if (targetBlock.x != -1 && targetBlock.y != -1) {
    switch (mapArray[targetBlock.x][targetBlock.y]) {
      case 0: //如果mapArray查詢是0, can go
        currentImgMain.x = targetImg.x;
        currentImgMain.y = targetImg.y;
        $("#talkBox").text("");
        break;
      case 1: //如果mapArray查詢是1, moutain
        $("#talkBox").text("有山");
        // currentImgMain.x = targetImg.x;
        // currentImgMain.y = targetImg.y;
        // ctx.drawImage(imgMoutain, 32, 65, 32, 32, targetBlock.y*gridLength, targetBlock.x*gridLength, gridLength, gridLength)

        break;
      case 2: //如果mapArray查詢是2, final stop
        $("#talkBox").text("終點");
        $("#video").css("animation", "videoAppear 2s ease-in forwards");
        setTimeout(() => {
          $("video")[0].play();
        }, 2000);
        $(document).off("keydown");
        currentImgMain.x = targetImg.x;
        currentImgMain.y = targetImg.y;
        break;
      case 3: //如果mapArray查詢是3, enemy
        $("#talkBox").text("遇到敵人");
        break;
    }
  } else {
    $("#talkBox").text("邊界");
  }

  //重新繪製主角
  ctx.drawImage(
    imgMain,
    cutImagePositionX,
    0,
    80,
    130,
    currentImgMain.x,
    currentImgMain.y,
    gridLength,
    gridLength
  );
});

$("#reload").on("click", () => {
  location.reload();
});
