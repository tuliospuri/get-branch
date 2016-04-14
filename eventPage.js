chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {hostEquals: "trello.com", schemes: ["https"], pathPrefix: "/c/"},
                        css: [".icon-card"]
                    })
                ],
                actions: [
                    new chrome.declarativeContent.ShowPageAction()
                ]
            }
        ]);
    });
});

chrome.pageAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {file: "contentScript.js"});
});