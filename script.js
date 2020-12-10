let colorPref;
const typesOfColorBlind = ['Protanopia', 'Deuteranopia', 'Tritanopia'];

chrome.storage.sync.get('type', result => colorPref = result.type);


chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
    //   swapColors(document.body);
    }
  })




function swapColors( element ){
    if( element.hasChildNodes()){
        element.childNodes.forEach(swapColors);
    } else {
        if( !acceptableColors(element.style['background-color'] || !acceptableColors(element.style['color']))){
            if(replaceCSS(element)){
                replaceCSS(element);
            }
        }
    }
};


function acceptableColors( rgbValue ){
    rgbValue = readableColor(rgbValue);
    switch(colorPref){
        case typesOfColorBlind[0]:
            if(rgbValue === ''){
                return true;
            }
            if(rgbValue === ''){
                return true;
            }
            return false;
        case typesOfColorBlind[1]:
            if(rgbValue === ''){
                return true;
            }
            if(rgbValue === ''){
                return true;
            }
            return false;
        case typesOfColorBlind[2]:
            if(rgbValue === ''){
                return true;
            }
            if(rgbValue === ''){
                return true;
            }
            return false;
            // case:
        default:
            console.log('unmatched colorPref, somethings wrong in acceptableColors')
    }
};
                
function readableColor(colorInput){
    
    if(typeof colorInput === 'string' && colorInput.length === 6){
        let r = colorInput.parseInt(colorInput.slice(0,2), 16);
        let g = colorInput.parseInt(colorInput.slice(2,4), 16);
        let b = colorInput.parseInt(colorInput.slice(4), 16);
        
        return [r,g,b];
    }
    if(typeof colorInput === 'string' && colorInput.includes('rgb')){
        colorInput = colorInput.replace('rgb', '').replace('(', '').replace(')', '').split(',');
        return colorInput.map( num => parseInt(num));
    }
    console.log('no rgb value to return, something wrong in readableColor');
}



function replaceCSS( element ){


};