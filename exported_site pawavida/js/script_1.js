
                var css = '';
                if (document.querySelector('#_style_qQJ09n3')) css = document.querySelector('#_style_qQJ09n3').innerHTML;
                if (css !== '') {
                    var head = document.getElementsByTagName('head')[0];
                    var s = document.createElement('style');
                    s.appendChild(document.createTextNode(css));
                    head.appendChild(s);
                }
                var navbarReady = function(fn) {
                    var stateCheck = setInterval(function() {
                        if (typeof NavBar === "undefined") return;
                        clearInterval(stateCheck);
                        try {
                            fn()
                        } catch (e) {}
                    }, 1);
                };
                navbarReady(function() {
                    var obj = new NavBar({
                        onSearch: (keywords) => {
                            var domain = window.location.hostname;
                            window.open("https://www.google.com/search?q=" + keywords + " site:" + domain, "G1window");
                        }
                    });
                    obj.init();
                });
            