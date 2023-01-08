let wheelSpeed = 10;

$("#speedUp").on("click", function () {
  let parSpeed = Math.round(wheelSpeed * 100) / 100;
  console.log(parSpeed);
  console.log(wheelSpeed);
  if (wheelSpeed > 1) {
    wheelSpeed -= 1;
    $(".wheel").css("animation", `rotating ${wheelSpeed}s linear infinite`);
  } else if (wheelSpeed >= 0.2) {
    wheelSpeed -= 0.1;
    $(".wheel").css("animation", `rotating ${wheelSpeed}s linear infinite`);
  } else if (wheelSpeed >= 9) {
    wheelSpeed += 0;
  }

  switch (parSpeed) {
    case 10:
      $("#curSpeed").text(20);
      break;
    case 9:
      $("#curSpeed").text(30);
      break;
    case 8:
      $("#curSpeed").text(40);
      break;
    case 7:
      $("#curSpeed").text(50);
      break;
    case 6:
      $("#curSpeed").text(60);
      break;
    case 5:
      $("#curSpeed").text(70);
      break;
    case 4:
      $("#curSpeed").text(80);
      break;
    case 3:
      $("#curSpeed").text(90);
      break;
    case 2:
      $("#curSpeed").text(100);
      break;
    case 1:
      $("#curSpeed").text(110);
      break;
    case 0.9:
      $("#curSpeed").text(120);
      break;
    case 0.8:
      $("#curSpeed").text(130);
      break;
    case 0.7:
      $("#curSpeed").text(140);
      break;
    case 0.6:
      $("#curSpeed").text(150);
      break;
    case 0.5:
      $("#curSpeed").text(160);
      break;
    case 0.4:
      $("#curSpeed").text(170);
      break;
    case 0.3:
      $("#curSpeed").text(180);
      break;
    case 0.2:
      $("#curSpeed").text(190);
      break;
    case 0.1:
      $("#curSpeed").text(200);
      break;
  }
});

$("#speedDown").on("click", function () {
  let parSpeed = Math.round(wheelSpeed * 100) / 100;
  console.log(parSpeed);
  console.log(wheelSpeed);
  if (wheelSpeed >= 10) {
    wheelSpeed += 0;
  } else if (wheelSpeed > 1 || Number.isInteger(parSpeed)) {
    wheelSpeed += 1;
    $(".wheel").css("animation", `rotating ${wheelSpeed}s linear infinite`);
  } else if (wheelSpeed >= 0.2 || Number.isInteger(parSpeed) == false) {
    wheelSpeed += 0.1;
    $(".wheel").css("animation", `rotating ${wheelSpeed}s linear infinite`);
  }

  switch (parSpeed) {
    case 10:
      $("#curSpeed").text(20);
      break;
    case 9:
      $("#curSpeed").text(30);
      break;
    case 8:
      $("#curSpeed").text(40);
      break;
    case 7:
      $("#curSpeed").text(50);
      break;
    case 6:
      $("#curSpeed").text(60);
      break;
    case 5:
      $("#curSpeed").text(70);
      break;
    case 4:
      $("#curSpeed").text(80);
      break;
    case 3:
      $("#curSpeed").text(90);
      break;
    case 2:
      $("#curSpeed").text(100);
      break;
    case 1:
      $("#curSpeed").text(110);
      break;
    case 0.9:
      $("#curSpeed").text(120);
      break;
    case 0.8:
      $("#curSpeed").text(130);
      break;
    case 0.7:
      $("#curSpeed").text(140);
      break;
    case 0.6:
      $("#curSpeed").text(150);
      break;
    case 0.5:
      $("#curSpeed").text(160);
      break;
    case 0.4:
      $("#curSpeed").text(170);
      break;
    case 0.3:
      $("#curSpeed").text(180);
      break;
    case 0.2:
      $("#curSpeed").text(190);
      break;
    case 0.1:
      $("#curSpeed").text(200);
      break;
  }
});
