// OnlyPhone - Continuous User-Agent Scanner
// Checks every 2 seconds if the User-Agent is still valid
// Redirects to desktop.html in the Server-2 root directory

(function() {
    var validAgents = [
        "Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/146.0.7680.38 Mobile/15E148 Safari/604.1",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Brave/1 Mobile/15E148 Safari/604.1",
        "Mozilla/5.0 (iPhone; CPU iPhone OS [version] like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/[version] Mobile/15E148 Safari/605.1.15"
    ];
    
    function getRootPath() {
        var path = window.location.pathname;
        var parts = path.split('/');
        
        // Remove filename if present
        if (parts[parts.length - 1].indexOf('.') !== -1) {
            parts.pop();
        }
        
        // Find Server-2 in path
        var server2Index = parts.indexOf('Server-2');
        if (server2Index === -1) return './';
        
        // Count levels deep from Server-2
        var levels = parts.length - server2Index - 1;
        if (levels <= 0) return './';
        
        // Return correct number of ../
        return '../'.repeat(levels);
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
            var root = getRootPath();
            window.location.href = root + 'desktop.html';
        }
    }
    
    checkUserAgent();
    setInterval(checkUserAgent, 2000);
})();
