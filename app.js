// //containers
// const hamburgerContainer = document.querySelector('.hamburger-container');
//component
const ComponentHeader = document.querySelector('#componentHeader');
const ComponentInfo = document.querySelector('#componentInfo');
const locationInfo = document.querySelector('#locationInfo');
//navigation
const homeNav = document.querySelector('#homeNav');
const rangeNav = document.querySelector('#rangeNav');
const instructionsNav = document.querySelector('#instructionsNav');
const locationNav = document.querySelector('#locationNav');

//content
const slogan = `
DELIVERING HIGH QUALITY AFFORDABLE 
FREE-RANGE CHICKENS`;
const mission =
  'Coming from a family of hard-workers, we take pride in providing our customers with high quality free-range chickens that they can take home and enjoy with their families. We feed our chickens with broiler-feed, and make sure they are well-kept before sale';
const rangeTitle = 'OUR RANGE';
const range = `
<span class="bold-span">Age: </span>6-Weeks 
<br>
<span class="bold-span">Color: </span>White
<br>
<span class="bold-span">Type: </span>Broiler-Chickens
`;
const instructionsTitle = 'HOW TO ORDER';
const instructions = `
1. Call: +268 765266003
<br>
2. Tell us how much you need
<br>
3. Tell us the date you plan to collect your chicken order
`;
const locationTitle = 'WHERE TO FIND US';
const address = `
<i class="map marker alternate icon"></i>
Croydon, Dvokolwako
`;

//CLASSES

class Components {
  constructor(header, info) {
    this.header = header;
    this.info = info;
  }
}

const HomeState = new Components(slogan, mission);
const RangeState = new Components(rangeTitle, range);
const InstructionsState = new Components(instructionsTitle, instructions);
const LocationState = new Components(locationTitle, address);

Components.prototype.createPage = function () {
  ComponentHeader.innerText = this.header;
  ComponentInfo.innerHTML = `<p>${this.info}</p>`;
};

Components.prototype.clearPage = function () {
  this.header = '';
  this.info = '';
};

// class Toggle {
//     constructor(element) {
//         this.element = element;
//     }
// }

// Toggle.prototype.hide = function() {
//     this.element.style.display = 'none';
// };

// Toggle.prototype.show = function() {
//     this.element.style.display = 'flex';
// };

// const hamburgerBars = new Toggle(hamburgerContainer);

//Start App
window.addEventListener('load', () => {
  HomeState.createPage();
});

// if (window.outerWidth > 375) {
//     hamburgerBars.hide();
// } else {
//     hamburgerBars.show();
// }

homeNav.addEventListener('click', () => {
  HomeState.createPage();
});

rangeNav.addEventListener('click', () => {
  RangeState.createPage();
});

instructionsNav.addEventListener('click', () => {
  InstructionsState.createPage();
});

locationNav.addEventListener('click', () => {
  LocationState.createPage();
});
