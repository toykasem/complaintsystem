(function (global, factory) {
	typeof exports === "object" && typeof module !== "undefined"
		? (module.exports = factory())
		: typeof define === "function" && define.amd
		? define(factory)
		: ((global =
				typeof globalThis !== "undefined" ? globalThis : global || self),
		  (global.config = factory()));
})(this, function () {
	"use strict";

	const configQueryMap = {
			"navbar-vertical-collapsed": "complianIsNavbarVerticalCollapsed",
			"color-scheme": "complianTheme",
			"navigation-type": "complianNavbarPosition",
			"vertical-navbar-appearance": "complianNavbarVerticalStyle",
			"horizontal-navbar-shape": "complianNavbarTopShape",
			"horizontal-navbar-appearance": "complianNavbarTopStyle",
		},
		initialConfig = {
			complianIsNavbarVerticalCollapsed: !1,
			complianTheme: "light",
			complianNavbarTopStyle: "default",
			complianNavbarVerticalStyle: "default",
			complianNavbarPosition: "vertical",
			complianNavbarTopShape: "default",
			complianIsRTL: !1,
			complianSupportChat: !0,
		},
		CONFIG = { ...initialConfig },
		setConfig = (e, a = !0) => {
			Object.keys(e).forEach((t) => {
				(CONFIG[t] = e[t]), a && localStorage.setItem(t, e[t]);
			});
		},
		resetConfig = () => {
			Object.keys(initialConfig).forEach((e) => {
				(CONFIG[e] = initialConfig[e]),
					localStorage.setItem(e, initialConfig[e]);
			});
		},
		urlSearchParams = new URLSearchParams(window.location.search),
		params = Object.fromEntries(urlSearchParams.entries());
	Object.keys(params).length > 0 &&
		Object.keys(params).includes("theme-control") &&
		(resetConfig(),
		Object.keys(params).forEach((e) => {
			configQueryMap[e] && localStorage.setItem(configQueryMap[e], params[e]);
		})),
		Object.keys(CONFIG).forEach((e) => {
			if (null === localStorage.getItem(e)) localStorage.setItem(e, CONFIG[e]);
			else
				try {
					setConfig({ [e]: JSON.parse(localStorage.getItem(e)) });
				} catch {
					setConfig({ [e]: localStorage.getItem(e) });
				}
		}),
		JSON.parse(localStorage.getItem("complianIsNavbarVerticalCollapsed")) &&
			document.documentElement.classList.add("navbar-vertical-collapsed"),
		"dark" === localStorage.getItem("complianTheme")
			? document.documentElement.setAttribute("data-bs-theme", "dark")
			: "auto" === localStorage.getItem("complianTheme") &&
			  document.documentElement.setAttribute(
					"data-bs-theme",
					window.matchMedia("(prefers-color-scheme: dark)").matches
						? "dark"
						: "light"
			  ),
		"horizontal" === localStorage.getItem("complianNavbarPosition") &&
			document.documentElement.setAttribute(
				"data-navigation-type",
				"horizontal"
			),
		"combo" === localStorage.getItem("complianNavbarPosition") &&
			document.documentElement.setAttribute("data-navigation-type", "combo");
	var config = { config: CONFIG, reset: resetConfig, set: setConfig };

	return config;
});
//# sourceMappingURL=config.js.map
