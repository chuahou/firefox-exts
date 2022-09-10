// SPDX-License-Identifier: MIT
// Copyright (c) 2022 Chua Hou

// Check rating safe if not selected yet.
let radio_buttons = document.querySelector(".radio_buttons.required.post_rating");
if (radio_buttons.querySelectorAll(":checked").length === 0)
	radio_buttons.querySelector("#post_rating_s").checked = true;
