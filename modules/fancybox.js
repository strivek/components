'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/fancyapps/fancyBox',
        version: 'v2.1.5',
        description: 'fancyBox is a tool that offers a nice and elegant way to add zooming functionality for images, html content and multi-media on your webpages. http://fancyapps.com/fancybox/',
        name: 'fancybox',
        main: 'jquery.fancybox.js',
        dependencies: [
            "jquery@>=1.7.0"
        ],
        mapping: [
            {
                reg: '/source/jquery.fancybox.js',
                release: 'jquery.fancybox.js'
            },
            {
                reg: '/source/jquery.fancybox.css',
                release: 'jquery.fancybox.css'
            },
             {
                reg: /^\/source\/([^\/]*\.(png|gif))$/,
                release: '$1'
            },
            {
                reg: /^\/README\.md$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ],
        shim: {
            'jquery.fancybox.js': {
                deps: ["jquery"],
                vars: ["jQuery"]
            }
        }
    }]
})();
