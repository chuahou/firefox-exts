// SPDX-License-Identifier: MIT
// Copyright (c) 2022 Chua Hou
//
// Allow copying tags easily.

// Copy tags, source and parent when button clicked.
function copyTags() {

	// Enable edit menu.
	document.querySelector("#post-edit-link").click();

	// Get tags, source, parent of current post.
	let tags = document.querySelector("#post_tag_string").textContent;
	let source = document.querySelector("#post_source").value;
	let parentId = document.querySelector("#post_parent_id").value;

	// Set parent as current post if no parent set.
	if (parentId == "") {
		let postIdText = document.querySelector("#post-info-id").textContent;
		parentId = postIdText.match(/[0-9]+/);
	}

	// Create temporary textarea to write tags to to copy.
	let tmpTextArea = document.createElement("textarea");
	tmpTextArea.value = `${tags} source:"${source}" parent:${parentId}`;
	document.body.appendChild(tmpTextArea);
	tmpTextArea.select();
	document.execCommand("copy");
	document.body.removeChild(tmpTextArea);
}

// Add button to interface.
let button = document.createElement("button");
button.innerHTML = "Copy Tags";
document.querySelector("#post-sections").appendChild(button);
button.addEventListener("click", copyTags);
