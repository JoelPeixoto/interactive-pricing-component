const slider = document.querySelector('.dynamic-slider');
const toggle = document.querySelector('.toggle');
const pricing = document.querySelector('.pricing');

function changeBarFillValue(value) {
  const fill = document.querySelector('.dynamic-fill');
  fill.style.width = `${value}%`;
}

function changePrice(price) {
  if (toggle.checked) {
    pricing.textContent = `$${price - price * 0.25}.00`;
  } else {
    pricing.textContent = `$${price}.00`;
  }
}
  
changeBarFillValue(50);

slider.oninput = function () {

  const selectedPrice = Number(this.value);
  const pageViews = document.querySelector('.page-views');
  /* const pricing = document.querySelector('.pricing'); */

  function changePageViews(view) {
    view !== 1 ? pageViews.textContent = `${view}k` : pageViews.textContent = '1M';
  }

  changeBarFillValue(selectedPrice);

  switch (true) {
    case selectedPrice === 20:
      changeBarFillValue(0);
      changePageViews(10);
      changePrice(8);
      break;
    case selectedPrice === 40:
      changeBarFillValue(25);
      changePageViews(50);
      changePrice(12);
      break;
    case selectedPrice === 60:
      changeBarFillValue(50);
      changePageViews(100);
      changePrice(16);
      break;
    case selectedPrice === 80:
      changeBarFillValue(75);
      changePageViews(500);
      changePrice(24);
      break;
    case selectedPrice === 100:
      changeBarFillValue(100);
      changePageViews(1);
      changePrice(36);
      break;
  }
};

toggle.onchange = function () {
  const price = Number(pricing.textContent.split('$')[1]);
  changePrice(price);
}
