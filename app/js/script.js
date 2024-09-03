  const selector = (
    selector1, class1, class2, class3, selector2, class4, class5, class6, class7, class8, class9, count
  ) => {
    let slider = document.querySelector(selector1);

    let container = document.createElement('div');
    container.classList.add(class1);
    slider.insertAdjacentElement('afterbegin', container);

    let track = document.createElement('div');
    track.classList.add(class2);
    container.insertAdjacentElement('afterbegin', track);

    let item = document.createElement('div');
    item.classList.add(class3);
    track.insertAdjacentElement('afterbegin', item);

    let group = document.querySelector(selector2);
    item.insertAdjacentElement('afterbegin', group);

    let btnPrev = document.createElement('button');
    btnPrev.classList.add(class4);
    btnPrev.classList.add(class5);
    container.insertAdjacentElement('afterend', btnPrev);

    let btnNext = document.createElement('button');
    btnNext.classList.add(class4);
    btnNext.classList.add(class6);
    container.insertAdjacentElement('afterend', btnNext);

    let dotsCount = count;
    let elem = dotsCount - 1;

    for (let i = 1; i <= elem; i++) {
      let itemCopy = item.cloneNode(true);
      track.insertAdjacentElement('afterbegin',itemCopy);
    }

    let dots = document.createElement('div');
    dots.classList.add(class7);
    container.insertAdjacentElement('afterend', dots);

    for (let i = 1; i <= count; i++) {
      if(i == 1){
        let dot = document.createElement('a');
        dot.classList.add(class8);
        dot.classList.add(class9);
        dots.insertAdjacentElement('beforeend', dot);
      } else {
        let dot = document.createElement('a');
        dot.classList.add(class8);
        dots.insertAdjacentElement('beforeend', dot);
      }
    }
  }

  selector(
    '.partner__wrap',
    'partner__container',
    'partner__track',
    'partner__item',
    '.partner__group',
    'partner__btn',
    'partner__btn_next',
    'partner__btn_prev',
    'partner__dots',
    'partner__dot',
    'partner__dot_active',
    5
  );

  selector(
    '.company__wrap',
    'company__container',
    'company__track',
    'company__item',
    '.company__group',
    'company__btn',
    'company__btn_next',
    'company__btn_prev',
    'company__dots',
    'company__dot',
    'company__dot_active',
    5
  );

  const move = (selector3, selector4, selector5, selector6, selector7, selector8, selector9, class10) => {
    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;

    const container = document.querySelector(selector3);
    const track = document.querySelector(selector4);
    const items = document.querySelectorAll(selector5);
    const dots = document.querySelector(selector6);
    const btnPrev = document.querySelector(selector7);
    const btnNext = document.querySelector(selector8);

    const itemsCount = items.length;
    const itemWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    items.forEach((item) => {
      item.style.minWidth = `${itemWidth}px`;
    });

    btnNext.addEventListener('click', () => {
      const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

      position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

      let dot = dots.querySelector(selector9);
      dot.classList.remove(class10);
      dot.nextElementSibling.classList.add(class10);

      setPosition();
      checkBtns();
    });

    btnPrev.addEventListener('click', () => {
      const itemsLeft = Math.abs(position) / itemWidth;

      position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

      let dot = dots.querySelector(selector9);
      dot.classList.remove(class10);
      dot.previousElementSibling.classList.add(class10);

      setPosition();
      checkBtns();
    });

    const setPosition = () => {
      track.style.transform = `translateX(${position}px)`;
    }

    const checkBtns = () => {
      btnPrev.disabled = position == 0;
      btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    }

    checkBtns();
  }

  move(
    '.partner__container',
    '.partner__track',
    '.partner__item',
    '.partner__dots',
    '.partner__btn_prev',
    '.partner__btn_next',
    '.partner__dot_active',
    'partner__dot_active'
  );

  move(
    '.company__container',
    '.company__track',
    '.company__item',
    '.company__dots',
    '.company__btn_prev',
    '.company__btn_next',
    '.company__dot_active',
    'company__dot_active'
  );

  const change = (obj, positionX, positionY) => {
    let polygon = document.querySelector(obj);
    let box = document.querySelector('.objects__box');

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

  const accord = (selector1, selector2, selector3, selector4) => {
    let accordion = document.querySelector(selector1);
    accordion.classList.add('accordion');

    let accordion_item = document.querySelectorAll(selector2);
    accordion_item.forEach((elem) => {
      elem.classList.add('accordion-item');
    });

    let trigger = document.querySelectorAll(selector3);
    trigger.forEach((elem) => {
      elem.classList.add('accordion-item__trigger');
    });


    let content = document.querySelectorAll(selector4);
    content.forEach((elem) => {
      elem.classList.add('accordion-item__content');
    });
  }

  accord('.news__inner', '.news__wrap', '.news__btn', '.news__group_hidden');

  document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
    item.addEventListener('click', () => {
      item.parentNode.classList.toggle('accordion-item_active');
    })
  );
