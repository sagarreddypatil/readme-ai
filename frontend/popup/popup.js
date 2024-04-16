
document.addEventListener('DOMContentLoaded', async function () {
  console.log("hello");
  const response = await chrome.runtime.sendMessage({
    action: "get-page-content",
  });

  document.getElementById("test").innerText = response.content;
});
