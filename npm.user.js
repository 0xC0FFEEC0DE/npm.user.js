// ==UserScript==
// @name         npm.user.js
// @namespace    npm-user-js
// @version      0.1
// @description  Load npm packages on any website from browser console
// @homepageURL  https://github.com/0xC0FFEEC0DE/npm.user.js
// @supportURL   https://github.com/0xC0FFEEC0DE/npm.user.js/issues
// @downloadURL  https://raw.githubusercontent.com/0xC0FFEEC0DE/npm.user.js/master/npm.user.js
// @updateURL    https://raw.githubusercontent.com/0xC0FFEEC0DE/npm.user.js/master/npm.user.js
// @author       0xC0FFEEC0DE
// @match        *://*/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function(window) {
    'use strict';

    function onLoadDefault(e) {
        console.log('loaded ', this.packageName)
    }

    function pkg() {

        function require(packageName, onLoad = onLoadDefault) {
            let script = document.createElement('script')
            script.packageName = packageName
            script.type = 'text/javascript'
            script.src = `https://unpkg.com/${packageName}`
            if(onLoad) {
                script.addEventListener('load', onLoad)
            }
    
            let root = document.getElementsByTagName('head')[0] || document
            root.appendChild(script)
        }

        return {
            require,
        }
    }

    window.pkg = pkg()

})(window);
