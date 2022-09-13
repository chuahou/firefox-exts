// SPDX-License-Identifier: MIT
// Copyright (c) 2022 Chua Hou
//
// Block people whose names match the given regex in the online bar.

// Hide specific person given their username element.
function hideUserInBar(usernameElem) {
	const userLayout = usernameElem.parentElement.parentElement.parentElement.parentElement.parentElement;
	usernameElem.parentElement.textContent = "BLOCKED";
	// Check we have gotten the right parent.
	if (userLayout.matches("[class^=layout]")) {
		userLayout.style.display = "none";
	} else {
		console.log("PES: Error getting layout element.");
	}
}

// Hide all people matching the regex.
function hideMatchedUsersInBar() {
	const usernames = Array.from(
		document.querySelectorAll("div[class^=member] .username-u-ebrn"));

	function go(result) {
		const regex = new RegExp(result.username_regex);
		usernames
			.filter(username => username.textContent.match(regex) !== null)
			.forEach(hideUserInBar);
	}
	function onError(error) { console.log(`PES: ${error}`); }

	const getting = browser.storage.sync.get("username_regex");
	getting.then(go, onError);
}

// Hide usernames from blocked message replies.
function hideReplyUsernames() {
	const replyPlaceholders = Array.from(
		document.querySelectorAll("span[class^=repliedTextPlaceholder]"));
	replyPlaceholders.forEach(placeholder => {
		try {
			placeholder.parentElement.previousElementSibling.style.display = "none";
		} catch (e) {
			console.log("PES: " + e);
		}
	});
}

function doAll() {
	hideMatchedUsersInBar();
	hideReplyUsernames();
}

// Hide at start.
doAll();

// Hide on mutation.
const observer = new MutationObserver((mutList, obs) => {
	doAll();
});
observer.observe(document.documentElement || document.body,
	{ attributes: true, childList: true, subtree: true });
