(function() {
    var validAgents = [
        "Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/146.0.7680.38 Mobile/15E148 Safari/604.1",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Brave/1 Mobile/15E148 Safari/604.1",
        "Mozilla/5.0 (iPhone; CPU iPhone OS [version] like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/[version] Mobile/15E148 Safari/605.1.15"
    ];
    
    var DESKTOP_URL = "https://enric-xx.github.io/Server-2/desktop.html";
    
    function checkUserAgent() {
        var ua = navigator.userAgent;
        var allowed = false;
        
        for (var i = 0; i < validAgents.length; i++) {
            if (ua.indexOf(validAgents[i]) !== -1) {
                allowed = true;
                break;
            }
        }
        
        if (!allowed) {
            window.location.href = DESKTOP_URL;
        }
    }
    
    checkUserAgent();
    setInterval(checkUserAgent, 1000);
})();
