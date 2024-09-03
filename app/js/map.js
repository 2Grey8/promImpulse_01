const change = (obj, positionX, positionY) => {
  const polygon = document.querySelector(obj);
  const box = document.querySelector('.objects__box');

  polygon.addEventListener('click', () => {
    if(polygon.src.indexOf("polygon.png") > 0) {
       polygon.src = "polygon2.png";
       box.style.transform = `translate(${positionX}px, ${positionY}px)`;
       box.style.display = "block";
    } else {
       polygon.src = "polygon.png";
       box.style.display = "none";
    }

  });
}

change('.objects__polygon_1', 90, 10);
change('.objects__polygon_2', -10, 20);
change('.objects__polygon_3', -90, 320);
change('.objects__polygon_4', -140, 400);
change('.objects__polygon_5', 0, 340);
change('.objects__polygon_6', 5, 240);
change('.objects__polygon_7', 100, 330);
change('.objects__polygon_8', 220, 340);
change('.objects__polygon_9', 60, 460);
change('.objects__polygon_10', 245, 250);
change('.objects__polygon_11', 180, 160);
change('.objects__polygon_12', 380, 200);
change('.objects__polygon_13', 360, 310);
change('.objects__polygon_14', 550, 40);
change('.objects__polygon_15', 520, 250);
change('.objects__polygon_16', 650, 320);
change('.objects__polygon_17', 680, 10);
