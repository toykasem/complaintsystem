let orders = [];

(function (global, factory) {
	typeof exports === "object" && typeof module !== "undefined"
		? (module.exports = factory(require("bootstrap")))
		: typeof define === "function" && define.amd
		? define(["bootstrap"], factory)
		: ((global =
				typeof globalThis !== "undefined" ? globalThis : global || self),
		  (global.complian = factory(global.bootstrap)));
})(this, function (bootstrap) {
	"use strict";

	const docReady = (e) => {
	  "loading" === document.readyState
		? document.addEventListener("DOMContentLoaded", e)
		: setTimeout(e, 1);
	};
	const toggleColor = (e, t) => {
	  const o = getItemFromStore("complianTheme");
	  return "light" === ("auto" === o ? getSystemTheme() : o) ? e : t;
	};
	const resize = (e) => window.addEventListener("resize", e);
	const isIterableArray = (e) => Array.isArray(e) && !!e.length;
	const camelize = (e) => {
	  const t = e.replace(/[-_\s.]+(.)?/g, (e, t) => (t ? t.toUpperCase() : ""));
	  return `${t.substr(0, 1).toLowerCase()}${t.substr(1)}`;
	};
	const getData = (e, t) => {
	  try {
		return JSON.parse(e.dataset[camelize(t)]);
	  } catch (o) {
		return e.dataset[camelize(t)];
	  }
	};
	const hexToRgb = (e) => {
	  let t;
	  t = 0 === e.indexOf("#") ? e.substring(1) : e;
	  const o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
		t.replace(
		  /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
		  (e, t, o, r) => t + t + o + o + r + r
		)
	  );
	  return o
		? [parseInt(o[1], 16), parseInt(o[2], 16), parseInt(o[3], 16)]
		: null;
	};
	const rgbaColor = (e = "#fff", t = 0.5) => `rgba(${hexToRgb(e)}, ${t})`;
	const getColor = (e, t = document.documentElement) =>
	  getComputedStyle(t).getPropertyValue(`--complian-${e}`).trim();
	const hasClass = (e, t) => e.classList.value.includes(t);
	const addClass = (e, t) => {
	  e.classList.add(t);
	};
	const getOffset = (e) => {
	  const t = e.getBoundingClientRect(),
		o = window.pageXOffset || document.documentElement.scrollLeft,
		r = window.pageYOffset || document.documentElement.scrollTop;
	  return { top: t.top + r, left: t.left + o };
	};
	const isScrolledIntoView = (e) => {
	  let t = e.offsetTop,
		o = e.offsetLeft;
	  const r = e.offsetWidth,
		s = e.offsetHeight;
	  for (; e.offsetParent; )
		(t += (e = e.offsetParent).offsetTop), (o += e.offsetLeft);
	  return {
		all:
		  t >= window.pageYOffset &&
		  o >= window.pageXOffset &&
		  t + s <= window.pageYOffset + window.innerHeight &&
		  o + r <= window.pageXOffset + window.innerWidth,
		partial:
		  t < window.pageYOffset + window.innerHeight &&
		  o < window.pageXOffset + window.innerWidth &&
		  t + s > window.pageYOffset &&
		  o + r > window.pageXOffset,
	  };
	};
	const breakpoints = { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1540 };
	const getBreakpoint = (e) => {
	  const t = e && e.classList.value;
	  let o;
	  return (
		t &&
		  (o =
			breakpoints[
			  t
				.split(" ")
				.filter((e) => e.includes("navbar-expand-"))
				.pop()
				.split("-")
				.pop()
			]),
		o
	  );
	};
	const setCookie = (e, t, o) => {
	  const r = new Date();
	  r.setTime(r.getTime() + o),
		(document.cookie = `${e}=${t};expires=${r.toUTCString()}`);
	};
	const getCookie = (e) => {
	  const t = document.cookie.match(`(^|;) ?${e}=([^;]*)(;|$)`);
	  return t ? t[2] : t;
	};
	const settings = {
	  tinymce: { theme: "oxide" },
	  chart: { borderColor: "rgba(255, 255, 255, 0.8)" },
	};
	const newChart = (e, t) => {
	  const o = e.getContext("2d");
	  return new window.Chart(o, t);
	};
	const getItemFromStore = (e, t, o = localStorage) => {
	  try {
		return JSON.parse(o.getItem(e)) || t;
	  } catch {
		return o.getItem(e) || t;
	  }
	};
	const setItemToStore = (e, t, o = localStorage) => o.setItem(e, t);
	const getStoreSpace = (e = localStorage) =>
	  parseFloat(
		(escape(encodeURIComponent(JSON.stringify(e))).length / 1048576).toFixed(
		  2
		)
	  );
	const getDates = (e, t, o = 864e5) => {
	  const r = (t - e) / o;
	  return Array.from(
		{ length: r + 1 },
		(t, r) => new Date(e.valueOf() + o * r)
	  );
	};
	const getPastDates = (e) => {
	  let t;
	  switch (e) {
		case "week":
		  t = 7;
		  break;
		case "month":
		  t = 30;
		  break;
		case "year":
		  t = 365;
		  break;
		default:
		  t = e;
	  }
	  const o = new Date(),
		r = o,
		s = new Date(new Date().setDate(o.getDate() - (t - 1)));
	  return getDates(s, r);
	};
	const getRandomNumber = (e, t) => Math.floor(Math.random() * (t - e) + e);
	const getSystemTheme = () =>
	  window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
	var utils = {
	  docReady: docReady,
	  toggleColor: toggleColor,
	  resize: resize,
	  isIterableArray: isIterableArray,
	  camelize: camelize,
	  getData: getData,
	  hasClass: hasClass,
	  addClass: addClass,
	  hexToRgb: hexToRgb,
	  rgbaColor: rgbaColor,
	  getColor: getColor,
	  breakpoints: breakpoints,
	  getOffset: getOffset,
	  isScrolledIntoView: isScrolledIntoView,
	  getBreakpoint: getBreakpoint,
	  setCookie: setCookie,
	  getCookie: getCookie,
	  newChart: newChart,
	  settings: settings,
	  getItemFromStore: getItemFromStore,
	  setItemToStore: setItemToStore,
	  getStoreSpace: getStoreSpace,
	  getDates: getDates,
	  getPastDates: getPastDates,
	  getRandomNumber: getRandomNumber,
	  getSystemTheme: getSystemTheme,
	};

	const fetchData = () => {
		fetch("/grs/Admin/datatablecomplain")
		// fetch("/complaintsystem/Admin/datatablecomplain") //ของ localhost
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				console.log("Data received from server:", data); // Log the received data
				orders = data;
				advanceAjaxTableInit();
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	};
	const advanceAjaxTableInit = () => {
		const e = (e, a) => {
				(e.disabled = a), e.classList[a ? "add" : "remove"]("disabled");
			},
			a = document.getElementById("advanceAjaxTablecomplian");
		if (a) {
			const d = {
					page: 10,
					pagination: {
						item: "<li><button class='page' type='button'></button></li>",
					},
					item: (e) => {
						const {
							row: row,
							petition_id: petition_id,
							petition_type: petition_type,
							topic: topic,
							detail: detail,
							titlename: titlename,
							firstname: firstname,
							lastname: lastname,
							idcard: idcard,
							phonenumber: phonenumber,
							email: email,
							homenumber: homenumber,
							alley: alley,
							moo: moo,
							road: road,
							province: province,
							district: district,
							sub_district: sub_district,
							postcode: postcode,
							filedata: filedata,
							savedate: savedate,
							status: status,
							province_th: province_th,
							district_th: district_th,
							supdistrict_th: supdistrict_th,
							zip_code: zip_code,
							subtopic_name: subtopic_name,
							main_topic: main_topic,
							name: name,
						} = e;
						return `\n 
                            <tr class="btn-reveal-trigger">\n
                            <td class="order py-2  ps-3 align-middle white-space-nowrap">\n
                            <a class="fw-semibold">\n
                              ${row}\n
                            </a>\n
                            </td>\n
                            <td class="py-2 align-middle fw-bold">\n
                              ${main_topic} <br/> (${subtopic_name}) \n
                            </td>\n
                            <td class="py-2 align-middle">\n
                            ${topic}\n
                            </td>\n
                            <td class="py-2 align-middle white-space-nowrap">\n
                            ${detail}\n
                            </td>\n
                            <td class="py-2 align-middle white-space-nowrap">\n
                            <p class="mb-0">${name} ${firstname} ${lastname}</p>\n
                            </td>\n
                            <td class="py-2 align-middle white-space-nowrap">\n
                            <p class="mb-0">${idcard}</p>\n
                            </td>\n
                            <td class="py-2 align-middle white-space-nowrap">\n
                            <p class="mb-0">${phonenumber}</p>\n
                            </td>\n
                            <td class="py-2 align-middle white-space-nowrap">\n
                            <p class="mb-0">${email}</p>\n
                            </td>\n
                            <td class="py-2 align-middle white-space-nowrap">\n
                            <p class="mb-0">${homenumber}</p>\n
                            </td>\n
                            <td class="py-2 align-middle white-space-nowrap">\n
                            <p class="mb-0">${alley}</p>\n
                            </td>\n
                            <td class="py-2 align-middle white-space-nowrap">\n
                            <p class="mb-0">${moo}</p>\n
                            </td>\n
                            <td class="py-2 align-middle white-space-nowrap">\n
                            <p class="mb-0">${road}</p>\n
                            </td>\n
                            <td class="py-2 align-middle white-space-nowrap">\n
                            <p class="mb-0">${province_th}</p>\n
                            </td>\n
                            <td class="py-2 align-middle white-space-nowrap">\n
                            <p class="mb-0">${district_th}</p>\n
                            </td>\n
                            <td class="py-2 align-middle white-space-nowrap">\n
                            <p class="mb-0">${supdistrict_th}</p>\n
                            </td>\n
                            <td class="py-2 align-middle white-space-nowrap">\n
                            <p class="mb-0">${zip_code}</p>\n
                            </td>\n
                            <td class="py-2 align-middle white-space-nowrap">\n
                            <p class="mb-0">${status}</p>\n
                            </td>\n
                            <td class="py-2 align-middle white-space-nowrap">\n
                            <p class="mb-0">${filedata}</p>\n
                            </td>\n
                            <td class="py-2 align-middle white-space-nowrap">\n
                            <p class="mb-0">${savedate}</p>\n
                            </td>\n
                            </tr>\n`;
					},
				},
				o = a.querySelector('[data-list-pagination="next"]'),
				r = a.querySelector('[data-list-pagination="prev"]'),
				n = a.querySelector('[data-list-view="*"]'),
				t = a.querySelector('[data-list-view="less"]'),
				i = a.querySelector("[data-list-info]"),
				s = document.querySelector("[data-list-filter]"),
				l = new window.List(a, d, orders);
			l.on("updated", (e) => {
				const o =
					a.querySelector(".fallback") || document.getElementById(d.fallback);
				o &&
					(0 === e.matchingItems.length
						? o.classList.remove("d-none")
						: o.classList.add("d-none"));
			});
			const p = l.items.length,
				c = l.page,
				m = l.listContainer.querySelector(".btn-close");
			let u = Math.ceil(p / c),
				y = l.visibleItems.length,
				f = 1;
			m && m.addEventListener("search.close", () => l.fuzzySearch(""));
			const w = () => {
				i && (i.innerHTML = `${l.i} to ${y} of ${p}`),
					r && e(r, 1 === f),
					o && e(o, f === u),
					f > 1 && f < u && (e(o, !1), e(r, !1));
			};
			w(),
				o &&
					o.addEventListener("click", (e) => {
						e.preventDefault(), (f += 1);
						const a = l.i + c;
						a <= l.size() && l.show(a, c), (y += l.visibleItems.length), w();
					}),
				r &&
					r.addEventListener("click", (e) => {
						e.preventDefault(), (f -= 1), (y -= l.visibleItems.length);
						const a = l.i - c;
						a > 0 && l.show(a, c), w();
					});
			const g = () => {
				t.classList.toggle("d-none"), n.classList.toggle("d-none");
			};
			if (
				(n &&
					n.addEventListener("click", () => {
						l.show(1, p), (u = 1), (f = 1), (y = p), w(), g();
					}),
				t &&
					t.addEventListener("click", () => {
						l.show(1, c),
							(u = Math.ceil(p / c)),
							(f = 1),
							(y = l.visibleItems.length),
							w(),
							g();
					}),
				d.pagination &&
					a.querySelector(".pagination").addEventListener("click", (e) => {
						"page" === e.target.classList[0] &&
							((f = Number(e.target.innerText)), w());
					}),
				d.filter)
			) {
				const { key: e } = d.filter;
				s.addEventListener("change", (a) => {
					l.filter(
						(d) =>
							"" === a.target.value ||
							d.values()[e].toLowerCase().includes(a.target.value.toLowerCase())
					);
				});
			}
		}
	};

	const sortableInit = () => {
		const { getData: e } = window.complian.utils,
			o = document.querySelectorAll("[data-sortable]"),
			t = {
				animation: 150,
				group: { name: "shared" },
				delay: 100,
				delayOnTouchOnly: !0,
				forceFallback: !0,
				onStart() {
					document.body.classList.add("sortable-dragging");
				},
				onEnd() {
					document.body.classList.remove("sortable-dragging");
				},
			};
		o.forEach((o) => {
			const a = e(o, "sortable"),
				n = window._.merge(t, a);
			return window.Sortable.create(o, n);
		});
	};

	const kanbanInit = () => {
		const t = document.querySelector("[data-kanban-container]");
		if (t) {
			t.addEventListener("click", (t) => {
				t.target.hasAttribute("data-kanban-collapse") &&
					t.target.closest(".kanban-column").classList.toggle("collapsed");
			});
			t.querySelectorAll("[data-sortable]").forEach((t) => {
				window.Sortable.get(t).option("onStart", (t) => {
					document.body.classList.add("sortable-dragging"),
						window.Sortable.ghost
							.querySelector(".dropdown-menu")
							.classList.remove("show");
					const e = t.item.querySelector("[data-bs-toggle='dropdown']");
					window.bootstrap.Dropdown.getInstance(e)?.hide();
				});
			});
		}
	};
	const togglePaginationButtonDisable = (e, t) => {
		(e.disabled = t), e.classList[t ? "add" : "remove"]("disabled");
	  },
	listInit = () => {
		const { getData: e } = window.complian.utils;
		if (window.List) {
			const t = document.querySelectorAll("[data-list]");
			console.log("querySelectorAll",t)
			t.length &&
				t.forEach((t) => {
					const a = t.querySelector("[data-bulk-select]");
					let n = e(t, "list");
					n.pagination &&
						(n = {
							...n,
							pagination: {
								item: "<li><button class='page' type='button'></button></li>",
								...n.pagination,
							},
						});
					const i = t.querySelector('[data-list-pagination="next"]'),
						s = t.querySelector('[data-list-pagination="prev"]'),
						l = t.querySelector('[data-list-view="*"]'),
						o = t.querySelector('[data-list-view="less"]'),
						c = t.querySelector("[data-list-info]"),
						r = t.querySelector("[data-list-filter]"),
						g = new List(t, n);
					let d = g.items.length;
					const h = g.page,
						u = g.listContainer.querySelector(".btn-close");
					let m = Math.ceil(g.size() / g.page),
						p = 1,
						b = (p - 1) * Number(g.page) + g.visibleItems.length,
						y = !1;
					u &&
						u.addEventListener("search.close", () => {
							g.fuzzySearch("");
						});
					const v = () => {
						c &&
							(c.innerHTML = `${g.i} to ${b} <span class='text-body-tertiary'> Items of </span>${d}`),
							s && togglePaginationButtonDisable(s, 1 === p || 0 === p),
							i && togglePaginationButtonDisable(i, p === m || 0 === p),
							p > 1 &&
								p < m &&
								(togglePaginationButtonDisable(i, !1),
								togglePaginationButtonDisable(s, !1));
					};
					v(),
						i &&
							i.addEventListener("click", (e) => {
								e.preventDefault(), (p += 1);
								const t = g.i + h;
								t <= g.size() && g.show(t, h);
							}),
						s &&
							s.addEventListener("click", (e) => {
								e.preventDefault(), (p -= 1);
								const t = g.i - h;
								t > 0 && g.show(t, h);
							});
					const f = () => {
						o.classList.toggle("d-none"), l.classList.toggle("d-none");
					};
					if (
						(l &&
							l.addEventListener("click", () => {
								g.show(1, d), (p = 1), f();
							}),
						o &&
							o.addEventListener("click", () => {
								g.show(1, h), (p = 1), f();
							}),
						n.pagination &&
							t.querySelector(".pagination").addEventListener("click", (e) => {
								if ("page" === e.target.classList[0]) {
									const t = Number(e.target.getAttribute("data-i"));
									t && (g.show(h * (t - 1) + 1, g.page), (p = t));
								}
							}),
						n.filter)
					) {
						const { key: e } = n.filter;
						r.addEventListener("change", (t) => {
							g.filter(
								(a) =>
									"" === t.target.value ||
									((m = Math.ceil(g.matchingItems.length / g.page)),
									(p = 1),
									v(),
									a
										.values()
										[e].toLowerCase()
										.includes(t.target.value.toLowerCase()))
							);
						});
					}
					if (a) {
						window.complian.BulkSelect.getInstance(a).attachRowNodes(
							g.items.map((e) => e.elm.querySelector("[data-bulk-select-row]"))
						),
							a.addEventListener("change", () => {
								g &&
									(a.checked
										? g.items.forEach((e) => {
												e.elm.querySelector("[data-bulk-select-row]").checked =
													!0;
										  })
										: g.items.forEach((e) => {
												e.elm.querySelector("[data-bulk-select-row]").checked =
													!1;
										  }));
							});
					}
					g.on("searchStart", () => {
						y = !0;
					}),
						g.on("searchComplete", () => {
							y = !1;
						}),
						g.on("updated", (e) => {
							(m = g.matchingItems.length
								? Math.ceil(g.matchingItems.length / g.page)
								: Math.ceil(g.size() / g.page)),
								(b = (p - 1) * Number(g.page) + g.visibleItems.length),
								v(),
								y &&
									((p = 0 === g.matchingItems.length ? 0 : 1),
									(d = g.matchingItems.length),
									(b =
										(0 === p ? 1 : p - 1) * Number(g.page) +
										g.visibleItems.length),
									v(),
									c &&
										(c.innerHTML = `${
											0 === g.matchingItems.length ? 0 : g.i
										} to ${
											0 === g.matchingItems.length ? 0 : b
										} <span class='text-body-tertiary'> Items of </span>${
											g.matchingItems.length
										}`));
							const a =
								t.querySelector(".fallback") ||
								document.getElementById(n.fallback);
							a &&
								(0 === e.matchingItems.length
									? a.classList.remove("d-none")
									: a.classList.add("d-none"));
						});
				});
		}
	};
	docReady(listInit),
		docReady(sortableInit),
		docReady(kanbanInit),
		docReady(fetchData),
		docReady(advanceAjaxTableInit),
		docReady(() => {
			const t = document.querySelector("[data-selected-rows]"),
				o = document.getElementById("selectedRows");
			if (t) {
				const e = document.getElementById("bulk-select-example"),
					i = window.complian.BulkSelect.getInstance(e);
				t.addEventListener("click", () => {
					o.innerHTML = JSON.stringify(i.getSelectedRows(), void 0, 2);
				});
			}
		});
		const complian = { utils: utils};

		return complian;
});
//# sourceMappingURL=complian.js.map
