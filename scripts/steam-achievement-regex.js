// SPDX-License-Identifier: MIT
// Copyright (c) 2021 Chua Hou

function filterAchievements(regex) {
	const rows = Array.from(document.querySelectorAll(".achieveRow"));
	rows.forEach(row => row.style.display = ""); // reset previous runs
	const nonMatches = rows.filter(x =>
		!x.querySelector(".achieveTxt").innerText.match(regex));
	nonMatches.forEach(row => row.style.display = "none");
}

const input = document.createElement("INPUT");
input.addEventListener("change", x => {
	filterAchievements(new RegExp(x.currentTarget.value));
});

const headerContent = document.querySelector("#headerContent");
headerContent.parentNode.insertBefore(input, headerContent);
