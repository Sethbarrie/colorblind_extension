let page = document.getElementById('buttonDiv');
const typesOfColorBlind = ['Protanopia', 'Deuteranopia', 'Tritanopia'];
function constructOptions(typesOfColorBlind) {
  for (let item of typesOfColorBlind) {
    let button = document.createElement('button');
    button.textContent = item;
    button.addEventListener('click', function() {
      chrome.storage.sync.set({type: item}, function() {
        console.log('colorblind preference set');
        chrome.storage.sync.get('type', result => console.log(result))
      })
    });
    page.appendChild(button);
  }
}
constructOptions(typesOfColorBlind);