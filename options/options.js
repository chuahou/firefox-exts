function saveOptions(e) {
	browser.storage.sync.set({
		username_regex: document.querySelector("#username_regex").value
	});
}

function restoreOptions() {
	function setCurrentChoice(result) {
		document.querySelector("#username_regex").value =
				result.username_regex || "";
	}

	function onError(error) { console.log(`Error: ${error}`); }

	const getting = browser.storage.sync.get("username_regex");
	getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
