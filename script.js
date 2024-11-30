let layer1 = document.getElementById('layer1');
let layer2 = document.getElementById('layer2');
let layer3 = document.getElementById('layer3');
let layer4 = document.getElementById('layer4');
let layer5 = document.getElementById('layer5');
let layer6 = document.getElementById('layer6');
let layer7 = document.getElementById('layer7');
let layer8 = document.getElementById('layer8');
let layer9 = document.getElementById('layer9');
let layer10 = document.getElementById('layer10');
let layer11 = document.getElementById('layer11');
let layer12 = document.getElementById('layer12');
let layer13 = document.getElementById('layer13');
let text = document.getElementById('shin-Text');
let scrollText = document.getElementById('scroll-text');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginBottom = value * 2.5 + 'px';
    layer5.style.top = value * 2.5 + 'px';
    layer4.style.marginTop = value * 1.5 + 'px';
    layer8.style.top = value * 1.5 + 'px';
    layer8.style.marginLeft = value * 1.5 + 'px';
    layer9.style.marginLeft = value * 1.5 + 'px';
    layer9.style.marginLeft = value * 1.5 + 'px';
    layer1.style.marginTop = value * 1.5 + 'px';

  

 
});
