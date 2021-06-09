// SPDX-License-Identifier: MIT
// Copyright (c) 2021 Chua Hou

browser.tabs.onCreated.addListener(async (tab) => {
	const timeout = 1000;
	setTimeout(async () => {
		if (tab.url === "about:newtab") {
			const url =
				(await browser.browserSettings.homepageOverride.get({})).value;
			browser.tabs.update(tab.id, { url: url, loadReplace: true });
		}
	}, timeout);
});
