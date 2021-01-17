// First, we add the lightrope CSS to the DOM
let scriptPath = getScriptPath();
let stylesheet = document.createElement('link');
stylesheet.setAttribute('rel', 'stylesheet');
stylesheet.setAttribute('href', scriptPath.replace(/[^\/]*$/, '') + 'lightrope.css');
document.head.appendChild(stylesheet);

// Then we calculate how meny lights are required to fill the window's width
let width = window.outerWidth;
let lights = (width / 28) + 1;

// Create the "rope" container
let body = document.querySelector('body');
let rope = document.createElement('ul');
rope.className = 'lightrope';
body.prepend(rope);

// And finally, add the light bulbs!
for (let i = 0; i < lights; i++) {
    let bulb = document.createElement('li');
    rope.append(bulb);
}

// Optional: for very light backgrounds you might want some darker shadow
if (getURLParameter('darkShadow')) {
    let shadow = document.createElement('div');
    shadow.className = 'lightrope-shadow';
    body.prepend(shadow);
}

/**
* Get this javascript's path
* @return {String} this javascript's path
*/
function getScriptPath() {
    let scripts = document.getElementsByTagName('script');

    for (let i = 0; i < scripts.length; i += 1) {
        if (scripts[i].hasAttribute('src')) {
            path = scripts[i].src;
            if (path.indexOf('lightrope') > -1) {
                return path;
            }
        }
    }

    return '';
}

/**
 * Get ul parameter to look for
 * @param {string} name - param name
 * @return {String|Boolean} param value (false if parameter is not found)
 */
function getURLParameter(name) {
    var set = scriptPath.split(name + '=');
    if (set[1]) {
      return set[1].split(/[&?]+/)[0];
    } else {
      return false;
    }
}