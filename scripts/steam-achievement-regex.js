// SPDX-License-Identifier: MIT
// Copyright (c) 2021 Chua Hou

// Insert into DOM.
const select = document.createElement("SELECT");
["all", "locked", "unlocked"].forEach(x => {
	const option = document.createElement("OPTION");
	option.value = x; option.innerText = x;
	select.appendChild(option);
});
const input = document.createElement("INPUT");
const extras = document.createElement("DIV");
extras.appendChild(input); extras.appendChild(select);
const headerContent = document.querySelector("#headerContent");
headerContent.parentNode.insertBefore(extras, headerContent);

// Actual filtering function.
function filterAchievements(regex, states) {
	const rows = Array.from(document.querySelectorAll(".achieveRow"));
	rows.forEach(row => row.style.display = ""); // reset previous runs
	rows.filter(row =>
			!row.querySelector(".achieveTxt").innerText.match(regex))
		.forEach(row => row.style.display = "none");
	const isUnlocked = x => x.classList.contains("unlocked");
	switch (String(states)) {
		case "unlocked":
			rows.filter(x => !isUnlocked(x)).forEach(row =>
				row.style.display = "none");;
			break;
		case "locked":
			rows.filter(x => isUnlocked(x)).forEach(row =>
				row.style.display = "none");;
			break;
		case "all":
		default:
			break;
	}
}

// Event listener.
const update = () => filterAchievements(new RegExp(input.value), select.value);
input.addEventListener("input", update);
select.addEventListener("change", update);
