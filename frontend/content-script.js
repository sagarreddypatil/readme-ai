// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.

console.log("Hello from content script");
const pageContent = document.documentElement.outerHTML;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Message received", request, sender);
    if (request.action === "get-page-content") {
        sendResponse({
            content: pageContent
        });
    }
});
