chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {hostEquals: "trello.com", schemes: ["https"], pathPrefix: "/c/"},
                    css: [".icon-card"]
                })
            ],
            actions: [
                new chrome.declarativeContent.ShowPageAction()
            ]
        }]);
    });
    chrome.tabs.create({url: "installed.html"});
});

chrome.pageAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {file: "contentScript.js"});
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.status) {
            chrome.pageAction.setIcon({tabId: sender.tab.id, path: 'icon_feedback_19.png'});
            setTimeout(function() {
                chrome.pageAction.setIcon({tabId: sender.tab.id, path: 'icon_19.png'});
            }, 200);
        }
    }
);