// OnlyPhone - Continuous User-Agent Scanner
// Checks every 2 seconds if the User-Agent is still valid
// Works from any directory depth

(function() {
    var validAgents = [
        "Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/146.0.7680.38 Mobile/15E148 Safari/604.1",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Brave/1 Mobile/15E148 Safari/604.1",
        "Mozilla/5.0 (iPhone; CPU iPhone OS [version] like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/[version] Mobile/15E148 Safari/605.1.15"
    ];
    
    function getBasePath() {
        var path = window.location.pathname;
        var depth = (path.match(/\//g) || []).length - 1;
        if (depth < 0) depth = 0;
        return '../'.repeat(depth) || './';
    }
    
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
            var base = getBasePath();
            window.location.href = base + 'desktop.html';
        }
    }
    
    checkUserAgent();
    setInterval(checkUserAgent, 2000);
})();
