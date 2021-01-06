// First, we add the lightrope CSS
var stylesheet = document.createElement('link');
stylesheet.setAttribute('rel', 'stylesheet');
stylesheet.setAttribute('href', 'lightrope.css');
document.head.appendChild(stylesheet);

// How meny lights are required to fill the window's width?
var width = window.outerWidth;
var lights = width / 28;

// Create the "rope" container
var body = document.querySelector('body');
var rope = document.createElement('ul');
rope.className = 'lightrope';
body.prepend(rope);

// And finally, add the light bulbs!
for (var i = 0; i <= lights; i++) {
    var bulb = document.createElement('li');
    rope.append(bulb);
}
