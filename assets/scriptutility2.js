!(function (X, Y, G, J) {
	"use strict";
	(Y =
		void 0 !== Y && Y.Math == Math
			? Y
			: "undefined" != typeof self && self.Math == Math
			? self
			: Function("return this")()),
		(X.fn.dropdown = function (z) {
			var P,
				H = X(this),
				j = X(G),
				N = H.selector || "",
				U = "ontouchstart" in G.documentElement,
				K = new Date().getTime(),
				W = [],
				B = z,
				$ = "string" == typeof B,
				Q = [].slice.call(arguments, 1);
			return (
				H.each(function (n) {
					var e,
						t,
						i,
						a,
						o,
						s,
						r,
						m,
						h = X.isPlainObject(z)
							? X.extend(!0, {}, X.fn.dropdown.settings, z)
							: X.extend({}, X.fn.dropdown.settings),
						g = h.className,
						c = h.message,
						l = h.fields,
						p = h.keys,
						b = h.metadata,
						u = h.namespace,
						d = h.regExp,
						w = h.selector,
						v = h.error,
						f = h.templates,
						x = "." + u,
						C = "module-" + u,
						S = X(this),
						y = X(h.context),
						A = S.find(w.text),
						T = S.find(w.search),
						k = S.find(w.sizer),
						L = S.find(w.input),
						I = S.find(w.icon),
						D =
							0 < S.prev().find(w.text).length
								? S.prev().find(w.text)
								: S.prev(),
						q = S.children(w.menu),
						R = q.find(w.item),
						O = !1,
						V = !1,
						E = !1,
						M = this,
						F = S.data(C);
					(m = {
						initialize: function () {
							m.debug("Initializing dropdown", h),
								m.is.alreadySetup()
									? m.setup.reference()
									: (m.setup.layout(),
									  h.values && m.change.values(h.values),
									  m.refreshData(),
									  m.save.defaults(),
									  m.restore.selected(),
									  m.create.id(),
									  m.bind.events(),
									  m.observeChanges(),
									  m.instantiate());
						},
						instantiate: function () {
							m.verbose("Storing instance of dropdown", m),
								(F = m),
								S.data(C, m);
						},
						destroy: function () {
							m.verbose("Destroying previous dropdown", S),
								m.remove.tabbable(),
								S.off(x).removeData(C),
								q.off(x),
								j.off(a),
								m.disconnect.menuObserver(),
								m.disconnect.selectObserver();
						},
						observeChanges: function () {
							"MutationObserver" in Y &&
								((s = new MutationObserver(m.event.select.mutation)),
								(r = new MutationObserver(m.event.menu.mutation)),
								m.debug("Setting up mutation observer", s, r),
								m.observe.select(),
								m.observe.menu());
						},
						disconnect: {
							menuObserver: function () {
								r && r.disconnect();
							},
							selectObserver: function () {
								s && s.disconnect();
							},
						},
						observe: {
							select: function () {
								m.has.input() &&
									s.observe(S[0], { childList: !0, subtree: !0 });
							},
							menu: function () {
								m.has.menu() && r.observe(q[0], { childList: !0, subtree: !0 });
							},
						},
						create: {
							id: function () {
								(o = (Math.random().toString(16) + "000000000").substr(2, 8)),
									(a = "." + o),
									m.verbose("Creating unique id for element", o);
							},
							userChoice: function (e) {
								var n, i, a;
								return (
									!!(e = e || m.get.userValues()) &&
									((e = X.isArray(e) ? e : [e]),
									X.each(e, function (e, t) {
										!1 === m.get.item(t) &&
											((a = h.templates.addition(
												m.add.variables(c.addResult, t)
											)),
											(i = X("<div />")
												.html(a)
												.attr("data-" + b.value, t)
												.attr("data-" + b.text, t)
												.addClass(g.addition)
												.addClass(g.item)),
											h.hideAdditions && i.addClass(g.hidden),
											(n = n === J ? i : n.add(i)),
											m.verbose("Creating user choices for value", t, i));
									}),
									n)
								);
							},
							userLabels: function (e) {
								var t = m.get.userValues();
								t &&
									(m.debug("Adding user labels", t),
									X.each(t, function (e, t) {
										m.verbose("Adding custom user value"), m.add.label(t, t);
									}));
							},
							menu: function () {
								q = X("<div />").addClass(g.menu).appendTo(S);
							},
							sizer: function () {
								k = X("<span />").addClass(g.sizer).insertAfter(T);
							},
						},
						search: function (e) {
							(e = e !== J ? e : m.get.query()),
								m.verbose("Searching for query", e),
								m.has.minCharacters(e) ? m.filter(e) : m.hide();
						},
						select: {
							firstUnfiltered: function () {
								m.verbose("Selecting first non-filtered element"),
									m.remove.selectedItem(),
									R.not(w.unselectable)
										.not(w.addition + w.hidden)
										.eq(0)
										.addClass(g.selected);
							},
							nextAvailable: function (e) {
								var t = (e = e.eq(0)).nextAll(w.item).not(w.unselectable).eq(0),
									n = e.prevAll(w.item).not(w.unselectable).eq(0);
								0 < t.length
									? (m.verbose("Moving selection to", t),
									  t.addClass(g.selected))
									: (m.verbose("Moving selection to", n),
									  n.addClass(g.selected));
							},
						},
						setup: {
							api: function () {
								var e = {
									debug: h.debug,
									urlData: { value: m.get.value(), query: m.get.query() },
									on: !1,
								};
								m.verbose("First request, initializing API"), S.api(e);
							},
							layout: function () {
								S.is("select") && (m.setup.select(), m.setup.returnedObject()),
									m.has.menu() || m.create.menu(),
									m.is.search() &&
										!m.has.search() &&
										(m.verbose("Adding search input"),
										(T = X("<input />")
											.addClass(g.search)
											.prop("autocomplete", "off")
											.insertBefore(A))),
									m.is.multiple() &&
										m.is.searchSelection() &&
										!m.has.sizer() &&
										m.create.sizer(),
									h.allowTab && m.set.tabbable();
							},
							select: function () {
								var e = m.get.selectValues();
								m.debug("Dropdown initialized on a select", e),
									S.is("select") && (L = S),
									0 < L.parent(w.dropdown).length
										? (m.debug(
												"UI dropdown already exists. Creating dropdown menu only"
										  ),
										  (S = L.closest(w.dropdown)),
										  m.has.menu() || m.create.menu(),
										  (q = S.children(w.menu)),
										  m.setup.menu(e))
										: (m.debug("Creating entire dropdown from select"),
										  (S = X("<div />")
												.attr("class", L.attr("class"))
												.addClass(g.selection)
												.addClass(g.dropdown)
												.html(f.dropdown(e))
												.insertBefore(L)),
										  L.hasClass(g.multiple) &&
												!1 === L.prop("multiple") &&
												(m.error(v.missingMultiple), L.prop("multiple", !0)),
										  L.is("[multiple]") && m.set.multiple(),
										  L.prop("disabled") &&
												(m.debug("Disabling dropdown"), S.addClass(g.disabled)),
										  L.removeAttr("class").detach().prependTo(S)),
									m.refresh();
							},
							menu: function (e) {
								q.html(f.menu(e, l)), (R = q.find(w.item));
							},
							reference: function () {
								m.debug(
									"Dropdown behavior was called on select, replacing with closest dropdown"
								),
									(S = S.parent(w.dropdown)),
									(F = S.data(C)),
									(M = S.get(0)),
									m.refresh(),
									m.setup.returnedObject();
							},
							returnedObject: function () {
								var e = H.slice(0, n),
									t = H.slice(n + 1);
								H = e.add(S).add(t);
							},
						},
						refresh: function () {
							m.refreshSelectors(), m.refreshData();
						},
						refreshItems: function () {
							R = q.find(w.item);
						},
						refreshSelectors: function () {
							m.verbose("Refreshing selector cache"),
								(A = S.find(w.text)),
								(T = S.find(w.search)),
								(L = S.find(w.input)),
								(I = S.find(w.icon)),
								(D =
									0 < S.prev().find(w.text).length
										? S.prev().find(w.text)
										: S.prev()),
								(q = S.children(w.menu)),
								(R = q.find(w.item));
						},
						refreshData: function () {
							m.verbose("Refreshing cached metadata"),
								R.removeData(b.text).removeData(b.value);
						},
						clearData: function () {
							m.verbose("Clearing metadata"),
								R.removeData(b.text).removeData(b.value),
								S.removeData(b.defaultText)
									.removeData(b.defaultValue)
									.removeData(b.placeholderText);
						},
						toggle: function () {
							m.verbose("Toggling menu visibility"),
								m.is.active() ? m.hide() : m.show();
						},
						show: function (e) {
							if (
								((e = X.isFunction(e) ? e : function () {}),
								!m.can.show() &&
									m.is.remote() &&
									(m.debug("No API results retrieved, searching before show"),
									m.queryRemote(m.get.query(), m.show)),
								m.can.show() && !m.is.active())
							) {
								if (
									(m.debug("Showing dropdown"),
									!m.has.message() ||
										m.has.maxSelections() ||
										m.has.allResultsFiltered() ||
										m.remove.message(),
									m.is.allFiltered())
								)
									return !0;
								!1 !== h.onShow.call(M) &&
									m.animate.show(function () {
										m.can.click() && m.bind.intent(),
											m.has.menuSearch() && m.focusSearch(),
											m.set.visible(),
											e.call(M);
									});
							}
						},
						hide: function (e) {
							(e = X.isFunction(e) ? e : function () {}),
								m.is.active() &&
									!m.is.animatingOutward() &&
									(m.debug("Hiding dropdown"),
									!1 !== h.onHide.call(M) &&
										m.animate.hide(function () {
											m.remove.visible(), e.call(M);
										}));
						},
						hideOthers: function () {
							m.verbose("Finding other dropdowns to hide"),
								H.not(S)
									.has(w.menu + "." + g.visible)
									.dropdown("hide");
						},
						hideMenu: function () {
							m.verbose("Hiding menu  instantaneously"),
								m.remove.active(),
								m.remove.visible(),
								q.transition("hide");
						},
						hideSubMenus: function () {
							var e = q.children(w.item).find(w.menu);
							m.verbose("Hiding sub menus", e), e.transition("hide");
						},
						bind: {
							events: function () {
								U && m.bind.touchEvents(),
									m.bind.keyboardEvents(),
									m.bind.inputEvents(),
									m.bind.mouseEvents();
							},
							touchEvents: function () {
								m.debug(
									"Touch device detected binding additional touch events"
								),
									m.is.searchSelection() ||
										(m.is.single() &&
											S.on("touchstart" + x, m.event.test.toggle)),
									q.on("touchstart" + x, w.item, m.event.item.mouseenter);
							},
							keyboardEvents: function () {
								m.verbose("Binding keyboard events"),
									S.on("keydown" + x, m.event.keydown),
									m.has.search() &&
										S.on(m.get.inputEvent() + x, w.search, m.event.input),
									m.is.multiple() &&
										j.on("keydown" + a, m.event.document.keydown);
							},
							inputEvents: function () {
								m.verbose("Binding input change events"),
									S.on("change" + x, w.input, m.event.change);
							},
							mouseEvents: function () {
								m.verbose("Binding mouse events"),
									m.is.multiple() &&
										S.on("click" + x, w.label, m.event.label.click).on(
											"click" + x,
											w.remove,
											m.event.remove.click
										),
									m.is.searchSelection()
										? (S.on("mousedown" + x, m.event.mousedown)
												.on("mouseup" + x, m.event.mouseup)
												.on("mousedown" + x, w.menu, m.event.menu.mousedown)
												.on("mouseup" + x, w.menu, m.event.menu.mouseup)
												.on("click" + x, w.icon, m.event.icon.click)
												.on("focus" + x, w.search, m.event.search.focus)
												.on("click" + x, w.search, m.event.search.focus)
												.on("blur" + x, w.search, m.event.search.blur)
												.on("click" + x, w.text, m.event.text.focus),
										  m.is.multiple() && S.on("click" + x, m.event.click))
										: ("click" == h.on
												? S.on("click" + x, m.event.test.toggle)
												: "hover" == h.on
												? S.on("mouseenter" + x, m.delay.show).on(
														"mouseleave" + x,
														m.delay.hide
												  )
												: S.on(h.on + x, m.toggle),
										  S.on("click" + x, w.icon, m.event.icon.click)
												.on("mousedown" + x, m.event.mousedown)
												.on("mouseup" + x, m.event.mouseup)
												.on("focus" + x, m.event.focus),
										  m.has.menuSearch()
												? S.on("blur" + x, w.search, m.event.search.blur)
												: S.on("blur" + x, m.event.blur)),
									q
										.on("mouseenter" + x, w.item, m.event.item.mouseenter)
										.on("mouseleave" + x, w.item, m.event.item.mouseleave)
										.on("click" + x, w.item, m.event.item.click);
							},
							intent: function () {
								m.verbose("Binding hide intent event to document"),
									U &&
										j
											.on("touchstart" + a, m.event.test.touch)
											.on("touchmove" + a, m.event.test.touch),
									j.on("click" + a, m.event.test.hide);
							},
						},
						unbind: {
							intent: function () {
								m.verbose("Removing hide intent event from document"),
									U && j.off("touchstart" + a).off("touchmove" + a),
									j.off("click" + a);
							},
						},
						filter: function (e) {
							var t = e !== J ? e : m.get.query(),
								n = function () {
									m.is.multiple() && m.filterActive(),
										(e || (!e && 0 == m.get.activeItem().length)) &&
											m.select.firstUnfiltered(),
										m.has.allResultsFiltered()
											? h.onNoResults.call(M, t)
												? h.allowAdditions
													? h.hideAdditions &&
													  (m.verbose(
															"User addition with no menu, setting empty style"
													  ),
													  m.set.empty(),
													  m.hideMenu())
													: (m.verbose(
															"All items filtered, showing message",
															t
													  ),
													  m.add.message(c.noResults))
												: (m.verbose("All items filtered, hiding dropdown", t),
												  m.hideMenu())
											: (m.remove.empty(), m.remove.message()),
										h.allowAdditions && m.add.userSuggestion(e),
										m.is.searchSelection() &&
											m.can.show() &&
											m.is.focusedOnSearch() &&
											m.show();
								};
							(h.useLabels && m.has.maxSelections()) ||
								(h.apiSettings
									? m.can.useAPI()
										? m.queryRemote(t, function () {
												h.filterRemoteData && m.filterItems(t), n();
										  })
										: m.error(v.noAPI)
									: (m.filterItems(t), n()));
						},
						queryRemote: function (e, n) {
							var t = {
								errorDuration: !1,
								cache: "local",
								throttle: h.throttle,
								urlData: { query: e },
								onError: function () {
									m.add.message(c.serverError), n();
								},
								onFailure: function () {
									m.add.message(c.serverError), n();
								},
								onSuccess: function (e) {
									var t = e[l.remoteValues];
									X.isArray(t) && 0 < t.length
										? (m.remove.message(),
										  m.setup.menu({ values: e[l.remoteValues] }))
										: m.add.message(c.noResults),
										n();
								},
							};
							S.api("get request") || m.setup.api(),
								(t = X.extend(!0, {}, t, h.apiSettings)),
								S.api("setting", t).api("query");
						},
						filterItems: function (e) {
							var i = e !== J ? e : m.get.query(),
								a = null,
								t = m.escape.string(i),
								o = new RegExp("^" + t, "igm");
							m.has.query() &&
								((a = []),
								m.verbose("Searching for matching values", i),
								R.each(function () {
									var e,
										t,
										n = X(this);
									if ("both" == h.match || "text" == h.match) {
										if (-1 !== (e = String(m.get.choiceText(n, !1))).search(o))
											return a.push(this), !0;
										if ("exact" === h.fullTextSearch && m.exactSearch(i, e))
											return a.push(this), !0;
										if (!0 === h.fullTextSearch && m.fuzzySearch(i, e))
											return a.push(this), !0;
									}
									if ("both" == h.match || "value" == h.match) {
										if (-1 !== (t = String(m.get.choiceValue(n, e))).search(o))
											return a.push(this), !0;
										if ("exact" === h.fullTextSearch && m.exactSearch(i, t))
											return a.push(this), !0;
										if (!0 === h.fullTextSearch && m.fuzzySearch(i, t))
											return a.push(this), !0;
									}
								})),
								m.debug("Showing only matched items", i),
								m.remove.filteredItem(),
								a && R.not(a).addClass(g.filtered);
						},
						fuzzySearch: function (e, t) {
							var n = t.length,
								i = e.length;
							if (((e = e.toLowerCase()), (t = t.toLowerCase()), n < i))
								return !1;
							if (i === n) return e === t;
							e: for (var a = 0, o = 0; a < i; a++) {
								for (var s = e.charCodeAt(a); o < n; )
									if (t.charCodeAt(o++) === s) continue e;
								return !1;
							}
							return !0;
						},
						exactSearch: function (e, t) {
							return (
								(e = e.toLowerCase()), -1 < (t = t.toLowerCase()).indexOf(e)
							);
						},
						filterActive: function () {
							h.useLabels && R.filter("." + g.active).addClass(g.filtered);
						},
						focusSearch: function (e) {
							m.has.search() &&
								!m.is.focusedOnSearch() &&
								(e
									? (S.off("focus" + x, w.search),
									  T.focus(),
									  S.on("focus" + x, w.search, m.event.search.focus))
									: T.focus());
						},
						forceSelection: function () {
							var e = R.not(g.filtered)
									.filter("." + g.selected)
									.eq(0),
								t = R.not(g.filtered)
									.filter("." + g.active)
									.eq(0),
								n = 0 < e.length ? e : t;
							if (0 < n.length && !m.is.multiple())
								return (
									m.debug("Forcing partial selection to selected item", n),
									void m.event.item.click.call(n, {}, !0)
								);
							h.allowAdditions && m.set.selected(m.get.query()),
								m.remove.searchTerm();
						},
						change: {
							values: function (e) {
								h.allowAdditions || m.clear(),
									m.debug("Creating dropdown with specified values", e),
									m.setup.menu({ values: e }),
									X.each(e, function (e, t) {
										if (1 == t.selected)
											return (
												m.debug("Setting initial selection to", t.value),
												m.set.selected(t.value),
												!0
											);
									});
							},
						},
						event: {
							change: function () {
								E ||
									(m.debug("Input changed, updating selection"),
									m.set.selected());
							},
							focus: function () {
								h.showOnFocus && !O && m.is.hidden() && !t && m.show();
							},
							blur: function (e) {
								(t = G.activeElement === this),
									O || t || (m.remove.activeLabel(), m.hide());
							},
							mousedown: function () {
								m.is.searchSelection() ? (i = !0) : (O = !0);
							},
							mouseup: function () {
								m.is.searchSelection() ? (i = !1) : (O = !1);
							},
							click: function (e) {
								X(e.target).is(S) &&
									(m.is.focusedOnSearch() ? m.show() : m.focusSearch());
							},
							search: {
								focus: function () {
									(O = !0),
										m.is.multiple() && m.remove.activeLabel(),
										h.showOnFocus && m.search();
								},
								blur: function (e) {
									(t = G.activeElement === this),
										m.is.searchSelection() &&
											!i &&
											(V ||
												t ||
												(h.forceSelection && m.forceSelection(), m.hide())),
										(i = !1);
								},
							},
							icon: {
								click: function (e) {
									I.hasClass(g.clear) ? m.clear() : m.can.click() && m.toggle();
								},
							},
							text: {
								focus: function (e) {
									(O = !0), m.focusSearch();
								},
							},
							input: function (e) {
								(m.is.multiple() || m.is.searchSelection()) && m.set.filtered(),
									clearTimeout(m.timer),
									(m.timer = setTimeout(m.search, h.delay.search));
							},
							label: {
								click: function (e) {
									var t = X(this),
										n = S.find(w.label),
										i = n.filter("." + g.active),
										a = t.nextAll("." + g.active),
										o = t.prevAll("." + g.active),
										s =
											0 < a.length
												? t.nextUntil(a).add(i).add(t)
												: t.prevUntil(o).add(i).add(t);
									e.shiftKey
										? (i.removeClass(g.active), s.addClass(g.active))
										: e.ctrlKey
										? t.toggleClass(g.active)
										: (i.removeClass(g.active), t.addClass(g.active)),
										h.onLabelSelect.apply(this, n.filter("." + g.active));
								},
							},
							remove: {
								click: function () {
									var e = X(this).parent();
									e.hasClass(g.active)
										? m.remove.activeLabels()
										: m.remove.activeLabels(e);
								},
							},
							test: {
								toggle: function (e) {
									var t = m.is.multiple() ? m.show : m.toggle;
									m.is.bubbledLabelClick(e) ||
										m.is.bubbledIconClick(e) ||
										(m.determine.eventOnElement(e, t) && e.preventDefault());
								},
								touch: function (e) {
									m.determine.eventOnElement(e, function () {
										"touchstart" == e.type
											? (m.timer = setTimeout(function () {
													m.hide();
											  }, h.delay.touch))
											: "touchmove" == e.type && clearTimeout(m.timer);
									}),
										e.stopPropagation();
								},
								hide: function (e) {
									m.determine.eventInModule(e, m.hide);
								},
							},
							select: {
								mutation: function (e) {
									m.debug("<select> modified, recreating menu");
									var n = !1;
									X.each(e, function (e, t) {
										if (
											X(t.target).is("select") ||
											X(t.addedNodes).is("select")
										)
											return (n = !0);
									}),
										n &&
											(m.disconnect.selectObserver(),
											m.refresh(),
											m.setup.select(),
											m.set.selected(),
											m.observe.select());
								},
							},
							menu: {
								mutation: function (e) {
									var t = e[0],
										n = t.addedNodes ? X(t.addedNodes[0]) : X(!1),
										i = t.removedNodes ? X(t.removedNodes[0]) : X(!1),
										a = n.add(i),
										o = a.is(w.addition) || 0 < a.closest(w.addition).length,
										s = a.is(w.message) || 0 < a.closest(w.message).length;
									o || s
										? (m.debug("Updating item selector cache"),
										  m.refreshItems())
										: (m.debug("Menu modified, updating selector cache"),
										  m.refresh());
								},
								mousedown: function () {
									V = !0;
								},
								mouseup: function () {
									V = !1;
								},
							},
							item: {
								mouseenter: function (e) {
									var t = X(e.target),
										n = X(this),
										i = n.children(w.menu),
										a = n.siblings(w.item).children(w.menu),
										o = 0 < i.length;
									!(0 < i.find(t).length) &&
										o &&
										(clearTimeout(m.itemTimer),
										(m.itemTimer = setTimeout(function () {
											m.verbose("Showing sub-menu", i),
												X.each(a, function () {
													m.animate.hide(!1, X(this));
												}),
												m.animate.show(!1, i);
										}, h.delay.show)),
										e.preventDefault());
								},
								mouseleave: function (e) {
									var t = X(this).children(w.menu);
									0 < t.length &&
										(clearTimeout(m.itemTimer),
										(m.itemTimer = setTimeout(function () {
											m.verbose("Hiding sub-menu", t), m.animate.hide(!1, t);
										}, h.delay.hide)));
								},
								click: function (e, t) {
									var n = X(this),
										i = X(e ? e.target : ""),
										a = n.find(w.menu),
										o = m.get.choiceText(n),
										s = m.get.choiceValue(n, o),
										r = 0 < a.length,
										l = 0 < a.find(i).length;
									m.has.menuSearch() && X(G.activeElement).blur(),
										l ||
											(r && !h.allowCategorySelection) ||
											(m.is.searchSelection() &&
												(h.allowAdditions && m.remove.userAddition(),
												m.remove.searchTerm(),
												m.is.focusedOnSearch() || 1 == t || m.focusSearch(!0)),
											h.useLabels ||
												(m.remove.filteredItem(), m.set.scrollPosition(n)),
											m.determine.selectAction.call(this, o, s));
								},
							},
							document: {
								keydown: function (e) {
									var t = e.which;
									if (m.is.inObject(t, p)) {
										var n = S.find(w.label),
											i = n.filter("." + g.active),
											a = (i.data(b.value), n.index(i)),
											o = n.length,
											s = 0 < i.length,
											r = 1 < i.length,
											l = 0 === a,
											c = a + 1 == o,
											u = m.is.searchSelection(),
											d = m.is.focusedOnSearch(),
											v = m.is.focused(),
											f = d && 0 === m.get.caretPosition();
										if (u && !s && !d) return;
										t == p.leftArrow
											? (!v && !f) || s
												? s &&
												  (e.shiftKey
														? m.verbose("Adding previous label to selection")
														: (m.verbose("Selecting previous label"),
														  n.removeClass(g.active)),
												  l && !r
														? i.addClass(g.active)
														: i.prev(w.siblingLabel).addClass(g.active).end(),
												  e.preventDefault())
												: (m.verbose("Selecting previous label"),
												  n.last().addClass(g.active))
											: t == p.rightArrow
											? (v && !s && n.first().addClass(g.active),
											  s &&
													(e.shiftKey
														? m.verbose("Adding next label to selection")
														: (m.verbose("Selecting next label"),
														  n.removeClass(g.active)),
													c
														? u
															? d
																? n.removeClass(g.active)
																: m.focusSearch()
															: r
															? i.next(w.siblingLabel).addClass(g.active)
															: i.addClass(g.active)
														: i.next(w.siblingLabel).addClass(g.active),
													e.preventDefault()))
											: t == p.deleteKey || t == p.backspace
											? s
												? (m.verbose("Removing active labels"),
												  c && u && !d && m.focusSearch(),
												  i.last().next(w.siblingLabel).addClass(g.active),
												  m.remove.activeLabels(i),
												  e.preventDefault())
												: f &&
												  !s &&
												  t == p.backspace &&
												  (m.verbose("Removing last label on input backspace"),
												  (i = n.last().addClass(g.active)),
												  m.remove.activeLabels(i))
											: i.removeClass(g.active);
									}
								},
							},
							keydown: function (e) {
								var t = e.which;
								if (m.is.inObject(t, p)) {
									var n,
										i = R.not(w.unselectable)
											.filter("." + g.selected)
											.eq(0),
										a = q.children("." + g.active).eq(0),
										o = 0 < i.length ? i : a,
										s =
											0 < o.length
												? o.siblings(":not(." + g.filtered + ")").addBack()
												: q.children(":not(." + g.filtered + ")"),
										r = o.children(w.menu),
										l = o.closest(w.menu),
										c =
											l.hasClass(g.visible) ||
											l.hasClass(g.animating) ||
											0 < l.parent(w.menu).length,
										u = 0 < r.length,
										d = 0 < o.length,
										v = 0 < o.not(w.unselectable).length,
										f = t == p.delimiter && h.allowAdditions && m.is.multiple();
									if (
										(h.allowAdditions &&
											h.hideAdditions &&
											(t == p.enter || f) &&
											v &&
											(m.verbose("Selecting item from keyboard shortcut", o),
											m.event.item.click.call(o, e),
											m.is.searchSelection() && m.remove.searchTerm()),
										m.is.visible())
									) {
										if (
											((t == p.enter || f) &&
												(t == p.enter && d && u && !h.allowCategorySelection
													? (m.verbose(
															"Pressed enter on unselectable category, opening sub menu"
													  ),
													  (t = p.rightArrow))
													: v &&
													  (m.verbose(
															"Selecting item from keyboard shortcut",
															o
													  ),
													  m.event.item.click.call(o, e),
													  m.is.searchSelection() && m.remove.searchTerm()),
												e.preventDefault()),
											d &&
												(t == p.leftArrow &&
													l[0] !== q[0] &&
													(m.verbose("Left key pressed, closing sub-menu"),
													m.animate.hide(!1, l),
													o.removeClass(g.selected),
													l.closest(w.item).addClass(g.selected),
													e.preventDefault()),
												t == p.rightArrow &&
													u &&
													(m.verbose("Right key pressed, opening sub-menu"),
													m.animate.show(!1, r),
													o.removeClass(g.selected),
													r.find(w.item).eq(0).addClass(g.selected),
													e.preventDefault())),
											t == p.upArrow)
										) {
											if (
												((n =
													d && c
														? o
																.prevAll(
																	w.item + ":not(" + w.unselectable + ")"
																)
																.eq(0)
														: R.eq(0)),
												s.index(n) < 0)
											)
												return (
													m.verbose(
														"Up key pressed but reached top of current menu"
													),
													void e.preventDefault()
												);
											m.verbose("Up key pressed, changing active item"),
												o.removeClass(g.selected),
												n.addClass(g.selected),
												m.set.scrollPosition(n),
												h.selectOnKeydown &&
													m.is.single() &&
													m.set.selectedItem(n),
												e.preventDefault();
										}
										if (t == p.downArrow) {
											if (
												0 ===
												(n =
													d && c
														? (n = o
																.nextAll(
																	w.item + ":not(" + w.unselectable + ")"
																)
																.eq(0))
														: R.eq(0)).length
											)
												return (
													m.verbose(
														"Down key pressed but reached bottom of current menu"
													),
													void e.preventDefault()
												);
											m.verbose("Down key pressed, changing active item"),
												R.removeClass(g.selected),
												n.addClass(g.selected),
												m.set.scrollPosition(n),
												h.selectOnKeydown &&
													m.is.single() &&
													m.set.selectedItem(n),
												e.preventDefault();
										}
										t == p.pageUp && (m.scrollPage("up"), e.preventDefault()),
											t == p.pageDown &&
												(m.scrollPage("down"), e.preventDefault()),
											t == p.escape &&
												(m.verbose("Escape key pressed, closing dropdown"),
												m.hide());
									} else
										f && e.preventDefault(),
											t != p.downArrow ||
												m.is.visible() ||
												(m.verbose("Down key pressed, showing dropdown"),
												m.show(),
												e.preventDefault());
								} else
									m.has.search() ||
										m.set.selectedLetter(String.fromCharCode(t));
							},
						},
						trigger: {
							change: function () {
								var e = G.createEvent("HTMLEvents"),
									t = L[0];
								t &&
									(m.verbose("Triggering native change event"),
									e.initEvent("change", !0, !1),
									t.dispatchEvent(e));
							},
						},
						determine: {
							selectAction: function (e, t) {
								m.verbose("Determining action", h.action),
									X.isFunction(m.action[h.action])
										? (m.verbose("Triggering preset action", h.action, e, t),
										  m.action[h.action].call(M, e, t, this))
										: X.isFunction(h.action)
										? (m.verbose("Triggering user action", h.action, e, t),
										  h.action.call(M, e, t, this))
										: m.error(v.action, h.action);
							},
							eventInModule: function (e, t) {
								var n = X(e.target),
									i = 0 < n.closest(G.documentElement).length,
									a = 0 < n.closest(S).length;
								return (
									(t = X.isFunction(t) ? t : function () {}),
									i && !a
										? (m.verbose("Triggering event", t), t(), !0)
										: (m.verbose(
												"Event occurred in dropdown, canceling callback"
										  ),
										  !1)
								);
							},
							eventOnElement: function (e, t) {
								var n = X(e.target),
									i = n.closest(w.siblingLabel),
									a = G.body.contains(e.target),
									o = 0 === S.find(i).length,
									s = 0 === n.closest(q).length;
								return (
									(t = X.isFunction(t) ? t : function () {}),
									a && o && s
										? (m.verbose("Triggering event", t), t(), !0)
										: (m.verbose(
												"Event occurred in dropdown menu, canceling callback"
										  ),
										  !1)
								);
							},
						},
						action: {
							nothing: function () {},
							activate: function (e, t, n) {
								if (((t = t !== J ? t : e), m.can.activate(X(n)))) {
									if (
										(m.set.selected(t, X(n)),
										m.is.multiple() && !m.is.allFiltered())
									)
										return;
									m.hideAndClear();
								}
							},
							select: function (e, t, n) {
								if (((t = t !== J ? t : e), m.can.activate(X(n)))) {
									if (
										(m.set.value(t, e, X(n)),
										m.is.multiple() && !m.is.allFiltered())
									)
										return;
									m.hideAndClear();
								}
							},
							combo: function (e, t, n) {
								(t = t !== J ? t : e),
									m.set.selected(t, X(n)),
									m.hideAndClear();
							},
							hide: function (e, t, n) {
								m.set.value(t, e, X(n)), m.hideAndClear();
							},
						},
						get: {
							id: function () {
								return o;
							},
							defaultText: function () {
								return S.data(b.defaultText);
							},
							defaultValue: function () {
								return S.data(b.defaultValue);
							},
							placeholderText: function () {
								return "auto" != h.placeholder &&
									"string" == typeof h.placeholder
									? h.placeholder
									: S.data(b.placeholderText) || "";
							},
							text: function () {
								return A.text();
							},
							query: function () {
								return X.trim(T.val());
							},
							searchWidth: function (e) {
								return (
									(e = e !== J ? e : T.val()),
									k.text(e),
									Math.ceil(k.width() + 1)
								);
							},
							selectionCount: function () {
								var e = m.get.values();
								return m.is.multiple()
									? X.isArray(e)
										? e.length
										: 0
									: "" !== m.get.value()
									? 1
									: 0;
							},
							transition: function (e) {
								return "auto" == h.transition
									? m.is.upward(e)
										? "slide up"
										: "slide down"
									: h.transition;
							},
							userValues: function () {
								var e = m.get.values();
								return (
									!!e &&
									((e = X.isArray(e) ? e : [e]),
									X.grep(e, function (e) {
										return !1 === m.get.item(e);
									}))
								);
							},
							uniqueArray: function (n) {
								return X.grep(n, function (e, t) {
									return X.inArray(e, n) === t;
								});
							},
							caretPosition: function () {
								var e,
									t,
									n = T.get(0);
								return "selectionStart" in n
									? n.selectionStart
									: G.selection
									? (n.focus(),
									  (t = (e = G.selection.createRange()).text.length),
									  e.moveStart("character", -n.value.length),
									  e.text.length - t)
									: void 0;
							},
							value: function () {
								var e = 0 < L.length ? L.val() : S.data(b.value),
									t = X.isArray(e) && 1 === e.length && "" === e[0];
								return e === J || t ? "" : e;
							},
							values: function () {
								var e = m.get.value();
								return "" === e
									? ""
									: !m.has.selectInput() && m.is.multiple()
									? "string" == typeof e
										? e.split(h.delimiter)
										: ""
									: e;
							},
							remoteValues: function () {
								var e = m.get.values(),
									i = !1;
								return (
									e &&
										("string" == typeof e && (e = [e]),
										X.each(e, function (e, t) {
											var n = m.read.remoteData(t);
											m.verbose("Restoring value from session data", n, t),
												n && (i || (i = {}), (i[t] = n));
										})),
									i
								);
							},
							choiceText: function (e, t) {
								if (((t = t !== J ? t : h.preserveHTML), e))
									return (
										0 < e.find(w.menu).length &&
											(m.verbose("Retrieving text of element with sub-menu"),
											(e = e.clone()).find(w.menu).remove(),
											e.find(w.menuIcon).remove()),
										e.data(b.text) !== J
											? e.data(b.text)
											: t
											? X.trim(e.html())
											: X.trim(e.text())
									);
							},
							choiceValue: function (e, t) {
								return (
									(t = t || m.get.choiceText(e)),
									!!e &&
										(e.data(b.value) !== J
											? String(e.data(b.value))
											: "string" == typeof t
											? X.trim(t.toLowerCase())
											: String(t))
								);
							},
							inputEvent: function () {
								var e = T[0];
								return (
									!!e &&
									(e.oninput !== J
										? "input"
										: e.onpropertychange !== J
										? "propertychange"
										: "keyup")
								);
							},
							selectValues: function () {
								var a = { values: [] };
								return (
									S.find("option").each(function () {
										var e = X(this),
											t = e.html(),
											n = e.attr("disabled"),
											i = e.attr("value") !== J ? e.attr("value") : t;
										"auto" === h.placeholder && "" === i
											? (a.placeholder = t)
											: a.values.push({ name: t, value: i, disabled: n });
									}),
									h.placeholder &&
										"auto" !== h.placeholder &&
										(m.debug("Setting placeholder value to", h.placeholder),
										(a.placeholder = h.placeholder)),
									h.sortSelect
										? (a.values.sort(function (e, t) {
												return e.name > t.name ? 1 : -1;
										  }),
										  m.debug("Retrieved and sorted values from select", a))
										: m.debug("Retrieved values from select", a),
									a
								);
							},
							activeItem: function () {
								return R.filter("." + g.active);
							},
							selectedItem: function () {
								var e = R.not(w.unselectable).filter("." + g.selected);
								return 0 < e.length ? e : R.eq(0);
							},
							itemWithAdditions: function (e) {
								var t = m.get.item(e),
									n = m.create.userChoice(e);
								return (
									n && 0 < n.length && (t = 0 < t.length ? t.add(n) : n), t
								);
							},
							item: function (i, a) {
								var e,
									o,
									s = !1;
								return (
									(i =
										i !== J
											? i
											: m.get.values() !== J
											? m.get.values()
											: m.get.text()),
									(e = o ? 0 < i.length : i !== J && null !== i),
									(o = m.is.multiple() && X.isArray(i)),
									(a = "" === i || 0 === i || a || !1),
									e &&
										R.each(function () {
											var e = X(this),
												t = m.get.choiceText(e),
												n = m.get.choiceValue(e, t);
											if (null !== n && n !== J)
												if (o)
													(-1 === X.inArray(String(n), i) &&
														-1 === X.inArray(t, i)) ||
														(s = s ? s.add(e) : e);
												else if (a) {
													if (
														(m.verbose(
															"Ambiguous dropdown value using strict type check",
															e,
															i
														),
														n === i || t === i)
													)
														return (s = e), !0;
												} else if (String(n) == String(i) || t == i)
													return (
														m.verbose("Found select item by value", n, i),
														(s = e),
														!0
													);
										}),
									s
								);
							},
						},
						check: {
							maxSelections: function (e) {
								return (
									!h.maxSelections ||
									((e = e !== J ? e : m.get.selectionCount()) >= h.maxSelections
										? (m.debug("Maximum selection count reached"),
										  h.useLabels &&
												(R.addClass(g.filtered),
												m.add.message(c.maxSelections)),
										  !0)
										: (m.verbose("No longer at maximum selection count"),
										  m.remove.message(),
										  m.remove.filteredItem(),
										  m.is.searchSelection() && m.filterItems(),
										  !1))
								);
							},
						},
						restore: {
							defaults: function () {
								m.clear(), m.restore.defaultText(), m.restore.defaultValue();
							},
							defaultText: function () {
								var e = m.get.defaultText();
								e === m.get.placeholderText
									? (m.debug("Restoring default placeholder text", e),
									  m.set.placeholderText(e))
									: (m.debug("Restoring default text", e), m.set.text(e));
							},
							placeholderText: function () {
								m.set.placeholderText();
							},
							defaultValue: function () {
								var e = m.get.defaultValue();
								e !== J &&
									(m.debug("Restoring default value", e),
									"" !== e
										? (m.set.value(e), m.set.selected())
										: (m.remove.activeItem(), m.remove.selectedItem()));
							},
							labels: function () {
								h.allowAdditions &&
									(h.useLabels || (m.error(v.labels), (h.useLabels = !0)),
									m.debug("Restoring selected values"),
									m.create.userLabels()),
									m.check.maxSelections();
							},
							selected: function () {
								m.restore.values(),
									m.is.multiple()
										? (m.debug(
												"Restoring previously selected values and labels"
										  ),
										  m.restore.labels())
										: m.debug("Restoring previously selected values");
							},
							values: function () {
								m.set.initialLoad(),
									h.apiSettings && h.saveRemoteData && m.get.remoteValues()
										? m.restore.remoteValues()
										: m.set.selected(),
									m.remove.initialLoad();
							},
							remoteValues: function () {
								var e = m.get.remoteValues();
								m.debug("Recreating selected from session data", e),
									e &&
										(m.is.single()
											? X.each(e, function (e, t) {
													m.set.text(t);
											  })
											: X.each(e, function (e, t) {
													m.add.label(e, t);
											  }));
							},
						},
						read: {
							remoteData: function (e) {
								var t;
								if (Y.Storage !== J)
									return (t = sessionStorage.getItem(e)) !== J && t;
								m.error(v.noStorage);
							},
						},
						save: {
							defaults: function () {
								m.save.defaultText(),
									m.save.placeholderText(),
									m.save.defaultValue();
							},
							defaultValue: function () {
								var e = m.get.value();
								m.verbose("Saving default value as", e),
									S.data(b.defaultValue, e);
							},
							defaultText: function () {
								var e = m.get.text();
								m.verbose("Saving default text as", e),
									S.data(b.defaultText, e);
							},
							placeholderText: function () {
								var e;
								!1 !== h.placeholder &&
									A.hasClass(g.placeholder) &&
									((e = m.get.text()),
									m.verbose("Saving placeholder text as", e),
									S.data(b.placeholderText, e));
							},
							remoteData: function (e, t) {
								Y.Storage !== J
									? (m.verbose("Saving remote data to session storage", t, e),
									  sessionStorage.setItem(t, e))
									: m.error(v.noStorage);
							},
						},
						clear: function () {
							m.is.multiple() && h.useLabels
								? m.remove.labels()
								: (m.remove.activeItem(), m.remove.selectedItem()),
								m.set.placeholderText(),
								m.clearValue();
						},
						clearValue: function () {
							m.set.value("");
						},
						scrollPage: function (e, t) {
							var n,
								i,
								a = t || m.get.selectedItem(),
								o = a.closest(w.menu),
								s = o.outerHeight(),
								r = o.scrollTop(),
								l = R.eq(0).outerHeight(),
								c = Math.floor(s / l),
								u = (o.prop("scrollHeight"), "up" == e ? r - l * c : r + l * c),
								d = R.not(w.unselectable);
							(i = "up" == e ? d.index(a) - c : d.index(a) + c),
								0 <
									(n = ("up" == e ? 0 <= i : i < d.length)
										? d.eq(i)
										: "up" == e
										? d.first()
										: d.last()).length &&
									(m.debug("Scrolling page", e, n),
									a.removeClass(g.selected),
									n.addClass(g.selected),
									h.selectOnKeydown && m.is.single() && m.set.selectedItem(n),
									o.scrollTop(u));
						},
						set: {
							filtered: function () {
								var e = m.is.multiple(),
									t = m.is.searchSelection(),
									n = e && t,
									i = t ? m.get.query() : "",
									a = "string" == typeof i && 0 < i.length,
									o = m.get.searchWidth(),
									s = "" !== i;
								e &&
									a &&
									(m.verbose("Adjusting input width", o, h.glyphWidth),
									T.css("width", o)),
									a || (n && s)
										? (m.verbose("Hiding placeholder text"),
										  A.addClass(g.filtered))
										: (!e || (n && !s)) &&
										  (m.verbose("Showing placeholder text"),
										  A.removeClass(g.filtered));
							},
							empty: function () {
								S.addClass(g.empty);
							},
							loading: function () {
								S.addClass(g.loading);
							},
							placeholderText: function (e) {
								(e = e || m.get.placeholderText()),
									m.debug("Setting placeholder text", e),
									m.set.text(e),
									A.addClass(g.placeholder);
							},
							tabbable: function () {
								m.is.searchSelection()
									? (m.debug("Added tabindex to searchable dropdown"),
									  T.val("").attr("tabindex", 0),
									  q.attr("tabindex", -1))
									: (m.debug("Added tabindex to dropdown"),
									  S.attr("tabindex") === J &&
											(S.attr("tabindex", 0), q.attr("tabindex", -1)));
							},
							initialLoad: function () {
								m.verbose("Setting initial load"), (e = !0);
							},
							activeItem: function (e) {
								h.allowAdditions && 0 < e.filter(w.addition).length
									? e.addClass(g.filtered)
									: e.addClass(g.active);
							},
							partialSearch: function (e) {
								var t = m.get.query().length;
								T.val(e.substr(0, t));
							},
							scrollPosition: function (e, t) {
								var n, i, a, o, s, r;
								(n = (e = e || m.get.selectedItem()).closest(w.menu)),
									(i = e && 0 < e.length),
									(t = t !== J && t),
									e &&
										0 < n.length &&
										i &&
										(e.position().top,
										n.addClass(g.loading),
										(a = (o = n.scrollTop()) - n.offset().top + e.offset().top),
										t || ((r = o + n.height() < a + 5), (s = a - 5 < o)),
										m.debug("Scrolling to active item", a),
										(t || s || r) && n.scrollTop(a),
										n.removeClass(g.loading));
							},
							text: function (e) {
								"select" !== h.action &&
									("combo" == h.action
										? (m.debug("Changing combo button text", e, D),
										  h.preserveHTML ? D.html(e) : D.text(e))
										: (e !== m.get.placeholderText() &&
												A.removeClass(g.placeholder),
										  m.debug("Changing text", e, A),
										  A.removeClass(g.filtered),
										  h.preserveHTML ? A.html(e) : A.text(e)));
							},
							selectedItem: function (e) {
								var t = m.get.choiceValue(e),
									n = m.get.choiceText(e, !1),
									i = m.get.choiceText(e, !0);
								m.debug("Setting user selection to item", e),
									m.remove.activeItem(),
									m.set.partialSearch(n),
									m.set.activeItem(e),
									m.set.selected(t, e),
									m.set.text(i);
							},
							selectedLetter: function (e) {
								var t,
									n = R.filter("." + g.selected),
									i = 0 < n.length && m.has.firstLetter(n, e),
									a = !1;
								i &&
									((t = n.nextAll(R).eq(0)),
									m.has.firstLetter(t, e) && (a = t)),
									a ||
										R.each(function () {
											if (m.has.firstLetter(X(this), e))
												return (a = X(this)), !1;
										}),
									a &&
										(m.verbose("Scrolling to next value with letter", e),
										m.set.scrollPosition(a),
										n.removeClass(g.selected),
										a.addClass(g.selected),
										h.selectOnKeydown &&
											m.is.single() &&
											m.set.selectedItem(a));
							},
							direction: function (e) {
								"auto" == h.direction
									? (m.remove.upward(),
									  m.can.openDownward(e)
											? m.remove.upward(e)
											: m.set.upward(e),
									  m.is.leftward(e) ||
											m.can.openRightward(e) ||
											m.set.leftward(e))
									: "upward" == h.direction && m.set.upward(e);
							},
							upward: function (e) {
								(e || S).addClass(g.upward);
							},
							leftward: function (e) {
								(e || q).addClass(g.leftward);
							},
							value: function (e, t, n) {
								var i = m.escape.value(e),
									a = 0 < L.length,
									o = m.get.values(),
									s = e !== J ? String(e) : e;
								if (a) {
									if (
										!h.allowReselection &&
										s == o &&
										(m.verbose(
											"Skipping value update already same value",
											e,
											o
										),
										!m.is.initialLoad())
									)
										return;
									m.is.single() &&
										m.has.selectInput() &&
										m.can.extendSelect() &&
										(m.debug("Adding user option", e), m.add.optionValue(e)),
										m.debug("Updating input value", i, o),
										(E = !0),
										L.val(i),
										!1 === h.fireOnInit && m.is.initialLoad()
											? m.debug(
													"Input native change event ignored on initial load"
											  )
											: m.trigger.change(),
										(E = !1);
								} else
									m.verbose("Storing value in metadata", i, L),
										i !== o && S.data(b.value, s);
								m.is.single() &&
									h.clearable &&
									(i ? m.set.clearable() : m.remove.clearable()),
									!1 === h.fireOnInit && m.is.initialLoad()
										? m.verbose("No callback on initial load", h.onChange)
										: h.onChange.call(M, e, t, n);
							},
							active: function () {
								S.addClass(g.active);
							},
							multiple: function () {
								S.addClass(g.multiple);
							},
							visible: function () {
								S.addClass(g.visible);
							},
							exactly: function (e, t) {
								m.debug("Setting selected to exact values"),
									m.clear(),
									m.set.selected(e, t);
							},
							selected: function (e, r) {
								var l = m.is.multiple();
								(r = h.allowAdditions
									? r || m.get.itemWithAdditions(e)
									: r || m.get.item(e)) &&
									(m.debug("Setting selected menu item to", r),
									m.is.multiple() && m.remove.searchWidth(),
									m.is.single()
										? (m.remove.activeItem(), m.remove.selectedItem())
										: h.useLabels && m.remove.selectedItem(),
									r.each(function () {
										var e = X(this),
											t = m.get.choiceText(e),
											n = m.get.choiceValue(e, t),
											i = e.hasClass(g.filtered),
											a = e.hasClass(g.active),
											o = e.hasClass(g.addition),
											s = l && 1 == r.length;
										l
											? !a || o
												? (h.apiSettings &&
														h.saveRemoteData &&
														m.save.remoteData(t, n),
												  h.useLabels
														? (m.add.label(n, t, s),
														  m.add.value(n, t, e),
														  m.set.activeItem(e),
														  m.filterActive(),
														  m.select.nextAvailable(r))
														: (m.add.value(n, t, e),
														  m.set.text(m.add.variables(c.count)),
														  m.set.activeItem(e)))
												: i ||
												  (m.debug("Selected active value, removing label"),
												  m.remove.selected(n))
											: (h.apiSettings &&
													h.saveRemoteData &&
													m.save.remoteData(t, n),
											  m.set.text(t),
											  m.set.value(n, t, e),
											  e.addClass(g.active).addClass(g.selected));
									}));
							},
							clearable: function () {
								I.addClass(g.clear);
							},
						},
						add: {
							label: function (e, t, n) {
								var i,
									a = m.is.searchSelection() ? T : A,
									o = m.escape.value(e);
								h.ignoreCase && (o = o.toLowerCase()),
									(i = X("<a />")
										.addClass(g.label)
										.attr("data-" + b.value, o)
										.html(f.label(o, t))),
									(i = h.onLabelCreate.call(i, o, t)),
									m.has.label(e)
										? m.debug("User selection already exists, skipping", o)
										: (h.label.variation && i.addClass(h.label.variation),
										  !0 === n
												? (m.debug("Animating in label", i),
												  i
														.addClass(g.hidden)
														.insertBefore(a)
														.transition(h.label.transition, h.label.duration))
												: (m.debug("Adding selection label", i),
												  i.insertBefore(a)));
							},
							message: function (e) {
								var t = q.children(w.message),
									n = h.templates.message(m.add.variables(e));
								0 < t.length
									? t.html(n)
									: (t = X("<div/>").html(n).addClass(g.message).appendTo(q));
							},
							optionValue: function (e) {
								var t = m.escape.value(e);
								0 <
									L.find('option[value="' + m.escape.string(t) + '"]').length ||
									(m.disconnect.selectObserver(),
									m.is.single() &&
										(m.verbose("Removing previous user addition"),
										L.find("option." + g.addition).remove()),
									X("<option/>")
										.prop("value", t)
										.addClass(g.addition)
										.html(e)
										.appendTo(L),
									m.verbose("Adding user addition as an <option>", e),
									m.observe.select());
							},
							userSuggestion: function (e) {
								var t,
									n = q.children(w.addition),
									i = m.get.item(e),
									a = i && i.not(w.addition).length,
									o = 0 < n.length;
								(h.useLabels && m.has.maxSelections()) ||
									("" === e || a
										? n.remove()
										: (o
												? (n
														.data(b.value, e)
														.data(b.text, e)
														.attr("data-" + b.value, e)
														.attr("data-" + b.text, e)
														.removeClass(g.filtered),
												  h.hideAdditions ||
														((t = h.templates.addition(
															m.add.variables(c.addResult, e)
														)),
														n.html(t)),
												  m.verbose(
														"Replacing user suggestion with new value",
														n
												  ))
												: ((n = m.create.userChoice(e)).prependTo(q),
												  m.verbose(
														"Adding item choice to menu corresponding with user choice addition",
														n
												  )),
										  (h.hideAdditions && !m.is.allFiltered()) ||
												n
													.addClass(g.selected)
													.siblings()
													.removeClass(g.selected),
										  m.refreshItems()));
							},
							variables: function (e, t) {
								var n,
									i,
									a = -1 !== e.search("{count}"),
									o = -1 !== e.search("{maxCount}"),
									s = -1 !== e.search("{term}");
								return (
									m.verbose("Adding templated variables to message", e),
									a &&
										((n = m.get.selectionCount()),
										(e = e.replace("{count}", n))),
									o &&
										((n = m.get.selectionCount()),
										(e = e.replace("{maxCount}", h.maxSelections))),
									s && ((i = t || m.get.query()), (e = e.replace("{term}", i))),
									e
								);
							},
							value: function (e, t, n) {
								var i,
									a = m.get.values();
								m.has.value(e)
									? m.debug("Value already selected")
									: "" !== e
									? ((i = X.isArray(a)
											? ((i = a.concat([e])), m.get.uniqueArray(i))
											: [e]),
									  m.has.selectInput()
											? m.can.extendSelect() &&
											  (m.debug("Adding value to select", e, i, L),
											  m.add.optionValue(e))
											: ((i = i.join(h.delimiter)),
											  m.debug(
													"Setting hidden input to delimited value",
													i,
													L
											  )),
									  !1 === h.fireOnInit && m.is.initialLoad()
											? m.verbose(
													"Skipping onadd callback on initial load",
													h.onAdd
											  )
											: h.onAdd.call(M, e, t, n),
									  m.set.value(i, e, t, n),
									  m.check.maxSelections())
									: m.debug("Cannot select blank values from multiselect");
							},
						},
						remove: {
							active: function () {
								S.removeClass(g.active);
							},
							activeLabel: function () {
								S.find(w.label).removeClass(g.active);
							},
							empty: function () {
								S.removeClass(g.empty);
							},
							loading: function () {
								S.removeClass(g.loading);
							},
							initialLoad: function () {
								e = !1;
							},
							upward: function (e) {
								(e || S).removeClass(g.upward);
							},
							leftward: function (e) {
								(e || q).removeClass(g.leftward);
							},
							visible: function () {
								S.removeClass(g.visible);
							},
							activeItem: function () {
								R.removeClass(g.active);
							},
							filteredItem: function () {
								(h.useLabels && m.has.maxSelections()) ||
									(h.useLabels && m.is.multiple()
										? R.not("." + g.active).removeClass(g.filtered)
										: R.removeClass(g.filtered),
									m.remove.empty());
							},
							optionValue: function (e) {
								var t = m.escape.value(e),
									n = L.find('option[value="' + m.escape.string(t) + '"]');
								0 < n.length &&
									n.hasClass(g.addition) &&
									(s &&
										(s.disconnect(),
										m.verbose("Temporarily disconnecting mutation observer")),
									n.remove(),
									m.verbose("Removing user addition as an <option>", t),
									s && s.observe(L[0], { childList: !0, subtree: !0 }));
							},
							message: function () {
								q.children(w.message).remove();
							},
							searchWidth: function () {
								T.css("width", "");
							},
							searchTerm: function () {
								m.verbose("Cleared search term"), T.val(""), m.set.filtered();
							},
							userAddition: function () {
								R.filter(w.addition).remove();
							},
							selected: function (e, t) {
								if (
									!(t = h.allowAdditions
										? t || m.get.itemWithAdditions(e)
										: t || m.get.item(e))
								)
									return !1;
								t.each(function () {
									var e = X(this),
										t = m.get.choiceText(e),
										n = m.get.choiceValue(e, t);
									m.is.multiple()
										? h.useLabels
											? (m.remove.value(n, t, e), m.remove.label(n))
											: (m.remove.value(n, t, e),
											  0 === m.get.selectionCount()
													? m.set.placeholderText()
													: m.set.text(m.add.variables(c.count)))
										: m.remove.value(n, t, e),
										e.removeClass(g.filtered).removeClass(g.active),
										h.useLabels && e.removeClass(g.selected);
								});
							},
							selectedItem: function () {
								R.removeClass(g.selected);
							},
							value: function (e, t, n) {
								var i,
									a = m.get.values();
								m.has.selectInput()
									? (m.verbose("Input is <select> removing selected option", e),
									  (i = m.remove.arrayValue(e, a)),
									  m.remove.optionValue(e))
									: (m.verbose("Removing from delimited values", e),
									  (i = (i = m.remove.arrayValue(e, a)).join(h.delimiter))),
									!1 === h.fireOnInit && m.is.initialLoad()
										? m.verbose("No callback on initial load", h.onRemove)
										: h.onRemove.call(M, e, t, n),
									m.set.value(i, t, n),
									m.check.maxSelections();
							},
							arrayValue: function (t, e) {
								return (
									X.isArray(e) || (e = [e]),
									(e = X.grep(e, function (e) {
										return t != e;
									})),
									m.verbose("Removed value from delimited string", t, e),
									e
								);
							},
							label: function (e, t) {
								var n = S.find(w.label).filter(
									"[data-" + b.value + '="' + m.escape.string(e) + '"]'
								);
								m.verbose("Removing label", n), n.remove();
							},
							activeLabels: function (e) {
								(e = e || S.find(w.label).filter("." + g.active)),
									m.verbose("Removing active label selections", e),
									m.remove.labels(e);
							},
							labels: function (e) {
								(e = e || S.find(w.label)),
									m.verbose("Removing labels", e),
									e.each(function () {
										var e = X(this),
											t = e.data(b.value),
											n = t !== J ? String(t) : t,
											i = m.is.userValue(n);
										!1 !== h.onLabelRemove.call(e, t)
											? (m.remove.message(),
											  i
													? (m.remove.value(n), m.remove.label(n))
													: m.remove.selected(n))
											: m.debug("Label remove callback cancelled removal");
									});
							},
							tabbable: function () {
								m.is.searchSelection()
									? (m.debug("Searchable dropdown initialized"),
									  T.removeAttr("tabindex"))
									: (m.debug("Simple selection dropdown initialized"),
									  S.removeAttr("tabindex")),
									q.removeAttr("tabindex");
							},
							clearable: function () {
								I.removeClass(g.clear);
							},
						},
						has: {
							menuSearch: function () {
								return m.has.search() && 0 < T.closest(q).length;
							},
							search: function () {
								return 0 < T.length;
							},
							sizer: function () {
								return 0 < k.length;
							},
							selectInput: function () {
								return L.is("select");
							},
							minCharacters: function (e) {
								return (
									!h.minCharacters ||
									(e = e !== J ? String(e) : String(m.get.query())).length >=
										h.minCharacters
								);
							},
							firstLetter: function (e, t) {
								var n;
								return (
									!(!e || 0 === e.length || "string" != typeof t) &&
									((n = m.get.choiceText(e, !1)),
									(t = t.toLowerCase()) == String(n).charAt(0).toLowerCase())
								);
							},
							input: function () {
								return 0 < L.length;
							},
							items: function () {
								return 0 < R.length;
							},
							menu: function () {
								return 0 < q.length;
							},
							message: function () {
								return 0 !== q.children(w.message).length;
							},
							label: function (e) {
								var t = m.escape.value(e),
									n = S.find(w.label);
								return (
									h.ignoreCase && (t = t.toLowerCase()),
									0 <
										n.filter(
											"[data-" + b.value + '="' + m.escape.string(t) + '"]'
										).length
								);
							},
							maxSelections: function () {
								return (
									h.maxSelections && m.get.selectionCount() >= h.maxSelections
								);
							},
							allResultsFiltered: function () {
								var e = R.not(w.addition);
								return e.filter(w.unselectable).length === e.length;
							},
							userSuggestion: function () {
								return 0 < q.children(w.addition).length;
							},
							query: function () {
								return "" !== m.get.query();
							},
							value: function (e) {
								return h.ignoreCase
									? m.has.valueIgnoringCase(e)
									: m.has.valueMatchingCase(e);
							},
							valueMatchingCase: function (e) {
								var t = m.get.values();
								return !!(X.isArray(t) ? t && -1 !== X.inArray(e, t) : t == e);
							},
							valueIgnoringCase: function (n) {
								var e = m.get.values(),
									i = !1;
								return (
									X.isArray(e) || (e = [e]),
									X.each(e, function (e, t) {
										if (String(n).toLowerCase() == String(t).toLowerCase())
											return !(i = !0);
									}),
									i
								);
							},
						},
						is: {
							active: function () {
								return S.hasClass(g.active);
							},
							animatingInward: function () {
								return q.transition("is inward");
							},
							animatingOutward: function () {
								return q.transition("is outward");
							},
							bubbledLabelClick: function (e) {
								return (
									X(e.target).is("select, input") &&
									0 < S.closest("label").length
								);
							},
							bubbledIconClick: function (e) {
								return 0 < X(e.target).closest(I).length;
							},
							alreadySetup: function () {
								return (
									S.is("select") &&
									S.parent(w.dropdown).data(C) !== J &&
									0 === S.prev().length
								);
							},
							animating: function (e) {
								return e
									? e.transition && e.transition("is animating")
									: q.transition && q.transition("is animating");
							},
							leftward: function (e) {
								return (e || q).hasClass(g.leftward);
							},
							disabled: function () {
								return S.hasClass(g.disabled);
							},
							focused: function () {
								return G.activeElement === S[0];
							},
							focusedOnSearch: function () {
								return G.activeElement === T[0];
							},
							allFiltered: function () {
								return (
									(m.is.multiple() || m.has.search()) &&
									!(0 == h.hideAdditions && m.has.userSuggestion()) &&
									!m.has.message() &&
									m.has.allResultsFiltered()
								);
							},
							hidden: function (e) {
								return !m.is.visible(e);
							},
							initialLoad: function () {
								return e;
							},
							inObject: function (n, e) {
								var i = !1;
								return (
									X.each(e, function (e, t) {
										if (t == n) return (i = !0);
									}),
									i
								);
							},
							multiple: function () {
								return S.hasClass(g.multiple);
							},
							remote: function () {
								return h.apiSettings && m.can.useAPI();
							},
							single: function () {
								return !m.is.multiple();
							},
							selectMutation: function (e) {
								var n = !1;
								return (
									X.each(e, function (e, t) {
										if (t.target && X(t.target).is("select")) return (n = !0);
									}),
									n
								);
							},
							search: function () {
								return S.hasClass(g.search);
							},
							searchSelection: function () {
								return m.has.search() && 1 === T.parent(w.dropdown).length;
							},
							selection: function () {
								return S.hasClass(g.selection);
							},
							userValue: function (e) {
								return -1 !== X.inArray(e, m.get.userValues());
							},
							upward: function (e) {
								return (e || S).hasClass(g.upward);
							},
							visible: function (e) {
								return e ? e.hasClass(g.visible) : q.hasClass(g.visible);
							},
							verticallyScrollableContext: function () {
								var e = y.get(0) !== Y && y.css("overflow-y");
								return "auto" == e || "scroll" == e;
							},
							horizontallyScrollableContext: function () {
								var e = y.get(0) !== Y && y.css("overflow-X");
								return "auto" == e || "scroll" == e;
							},
						},
						can: {
							activate: function (e) {
								return (
									!!h.useLabels ||
									!m.has.maxSelections() ||
									!(!m.has.maxSelections() || !e.hasClass(g.active))
								);
							},
							openDownward: function (e) {
								var t,
									n,
									i = e || q,
									a = !0;
								return (
									i.addClass(g.loading),
									(n = {
										context: {
											offset: y.get(0) === Y ? { top: 0, left: 0 } : y.offset(),
											scrollTop: y.scrollTop(),
											height: y.outerHeight(),
										},
										menu: { offset: i.offset(), height: i.outerHeight() },
									}),
									m.is.verticallyScrollableContext() &&
										(n.menu.offset.top += n.context.scrollTop),
									(a = (t = {
										above:
											n.context.scrollTop <=
											n.menu.offset.top - n.context.offset.top - n.menu.height,
										below:
											n.context.scrollTop + n.context.height >=
											n.menu.offset.top - n.context.offset.top + n.menu.height,
									}).below
										? (m.verbose("Dropdown can fit in context downward", t), !0)
										: t.below || t.above
										? (m.verbose(
												"Dropdown cannot fit below, opening upward",
												t
										  ),
										  !1)
										: (m.verbose(
												"Dropdown cannot fit in either direction, favoring downward",
												t
										  ),
										  !0)),
									i.removeClass(g.loading),
									a
								);
							},
							openRightward: function (e) {
								var t,
									n,
									i = e || q,
									a = !0;
								return (
									i.addClass(g.loading),
									(n = {
										context: {
											offset: y.get(0) === Y ? { top: 0, left: 0 } : y.offset(),
											scrollLeft: y.scrollLeft(),
											width: y.outerWidth(),
										},
										menu: { offset: i.offset(), width: i.outerWidth() },
									}),
									m.is.horizontallyScrollableContext() &&
										(n.menu.offset.left += n.context.scrollLeft),
									(t =
										n.menu.offset.left - n.context.offset.left + n.menu.width >=
										n.context.scrollLeft + n.context.width) &&
										(m.verbose("Dropdown cannot fit in context rightward", t),
										(a = !1)),
									i.removeClass(g.loading),
									a
								);
							},
							click: function () {
								return U || "click" == h.on;
							},
							extendSelect: function () {
								return h.allowAdditions || h.apiSettings;
							},
							show: function () {
								return !m.is.disabled() && (m.has.items() || m.has.message());
							},
							useAPI: function () {
								return X.fn.api !== J;
							},
						},
						animate: {
							show: function (e, t) {
								var n,
									i = t || q,
									a = t
										? function () {}
										: function () {
												m.hideSubMenus(), m.hideOthers(), m.set.active();
										  };
								(e = X.isFunction(e) ? e : function () {}),
									m.verbose("Doing menu show animation", i),
									m.set.direction(t),
									(n = m.get.transition(t)),
									m.is.selection() &&
										m.set.scrollPosition(m.get.selectedItem(), !0),
									(m.is.hidden(i) || m.is.animating(i)) &&
										("none" == n
											? (a(), i.transition("show"), e.call(M))
											: X.fn.transition !== J && S.transition("is supported")
											? i.transition({
													animation: n + " in",
													debug: h.debug,
													verbose: h.verbose,
													duration: h.duration,
													queue: !0,
													onStart: a,
													onComplete: function () {
														e.call(M);
													},
											  })
											: m.error(v.noTransition, n));
							},
							hide: function (e, t) {
								var n = t || q,
									i =
										(t ? h.duration : h.duration,
										t
											? function () {}
											: function () {
													m.can.click() && m.unbind.intent(), m.remove.active();
											  }),
									a = m.get.transition(t);
								(e = X.isFunction(e) ? e : function () {}),
									(m.is.visible(n) || m.is.animating(n)) &&
										(m.verbose("Doing menu hide animation", n),
										"none" == a
											? (i(), n.transition("hide"), e.call(M))
											: X.fn.transition !== J && S.transition("is supported")
											? n.transition({
													animation: a + " out",
													duration: h.duration,
													debug: h.debug,
													verbose: h.verbose,
													queue: !1,
													onStart: i,
													onComplete: function () {
														e.call(M);
													},
											  })
											: m.error(v.transition));
							},
						},
						hideAndClear: function () {
							m.remove.searchTerm(),
								m.has.maxSelections() ||
									(m.has.search()
										? m.hide(function () {
												m.remove.filteredItem();
										  })
										: m.hide());
						},
						delay: {
							show: function () {
								m.verbose("Delaying show event to ensure user intent"),
									clearTimeout(m.timer),
									(m.timer = setTimeout(m.show, h.delay.show));
							},
							hide: function () {
								m.verbose("Delaying hide event to ensure user intent"),
									clearTimeout(m.timer),
									(m.timer = setTimeout(m.hide, h.delay.hide));
							},
						},
						escape: {
							value: function (e) {
								var t = X.isArray(e),
									n = "string" == typeof e,
									i = !n && !t,
									a = n && -1 !== e.search(d.quote),
									o = [];
								return i || !a
									? e
									: (m.debug("Encoding quote values for use in select", e),
									  t
											? (X.each(e, function (e, t) {
													o.push(t.replace(d.quote, "&quot;"));
											  }),
											  o)
											: e.replace(d.quote, "&quot;"));
							},
							string: function (e) {
								return (e = String(e)).replace(d.escape, "\\$&");
							},
						},
						setting: function (e, t) {
							if ((m.debug("Changing setting", e, t), X.isPlainObject(e)))
								X.extend(!0, h, e);
							else {
								if (t === J) return h[e];
								X.isPlainObject(h[e]) ? X.extend(!0, h[e], t) : (h[e] = t);
							}
						},
						internal: function (e, t) {
							if (X.isPlainObject(e)) X.extend(!0, m, e);
							else {
								if (t === J) return m[e];
								m[e] = t;
							}
						},
						debug: function () {
							!h.silent &&
								h.debug &&
								(h.performance
									? m.performance.log(arguments)
									: ((m.debug = Function.prototype.bind.call(
											console.info,
											console,
											h.name + ":"
									  )),
									  m.debug.apply(console, arguments)));
						},
						verbose: function () {
							!h.silent &&
								h.verbose &&
								h.debug &&
								(h.performance
									? m.performance.log(arguments)
									: ((m.verbose = Function.prototype.bind.call(
											console.info,
											console,
											h.name + ":"
									  )),
									  m.verbose.apply(console, arguments)));
						},
						error: function () {
							h.silent ||
								((m.error = Function.prototype.bind.call(
									console.error,
									console,
									h.name + ":"
								)),
								m.error.apply(console, arguments));
						},
						performance: {
							log: function (e) {
								var t, n;
								h.performance &&
									((n = (t = new Date().getTime()) - (K || t)),
									(K = t),
									W.push({
										Name: e[0],
										Arguments: [].slice.call(e, 1) || "",
										Element: M,
										"Execution Time": n,
									})),
									clearTimeout(m.performance.timer),
									(m.performance.timer = setTimeout(
										m.performance.display,
										500
									));
							},
							display: function () {
								var e = h.name + ":",
									n = 0;
								(K = !1),
									clearTimeout(m.performance.timer),
									X.each(W, function (e, t) {
										n += t["Execution Time"];
									}),
									(e += " " + n + "ms"),
									N && (e += " '" + N + "'"),
									(console.group !== J || console.table !== J) &&
										0 < W.length &&
										(console.groupCollapsed(e),
										console.table
											? console.table(W)
											: X.each(W, function (e, t) {
													console.log(
														t.Name + ": " + t["Execution Time"] + "ms"
													);
											  }),
										console.groupEnd()),
									(W = []);
							},
						},
						invoke: function (i, e, t) {
							var a,
								o,
								n,
								s = F;
							return (
								(e = e || Q),
								(t = M || t),
								"string" == typeof i &&
									s !== J &&
									((i = i.split(/[\. ]/)),
									(a = i.length - 1),
									X.each(i, function (e, t) {
										var n =
											e != a
												? t +
												  i[e + 1].charAt(0).toUpperCase() +
												  i[e + 1].slice(1)
												: i;
										if (X.isPlainObject(s[n]) && e != a) s = s[n];
										else {
											if (s[n] !== J) return (o = s[n]), !1;
											if (!X.isPlainObject(s[t]) || e == a)
												return (
													s[t] !== J ? (o = s[t]) : m.error(v.method, i), !1
												);
											s = s[t];
										}
									})),
								X.isFunction(o) ? (n = o.apply(t, e)) : o !== J && (n = o),
								X.isArray(P)
									? P.push(n)
									: P !== J
									? (P = [P, n])
									: n !== J && (P = n),
								o
							);
						},
					}),
						$
							? (F === J && m.initialize(), m.invoke(B))
							: (F !== J && F.invoke("destroy"), m.initialize());
				}),
				P !== J ? P : H
			);
		}),
		(X.fn.dropdown.settings = {
			silent: !1,
			debug: !1,
			verbose: !1,
			performance: !0,
			on: "click",
			action: "activate",
			values: !1,
			clearable: !1,
			apiSettings: !1,
			selectOnKeydown: !0,
			minCharacters: 0,
			filterRemoteData: !1,
			saveRemoteData: !0,
			throttle: 200,
			context: Y,
			direction: "auto",
			keepOnScreen: !0,
			match: "both",
			fullTextSearch: !1,
			placeholder: "auto",
			preserveHTML: !0,
			sortSelect: !1,
			forceSelection: !0,
			allowAdditions: !1,
			ignoreCase: !1,
			hideAdditions: !0,
			maxSelections: !1,
			useLabels: !0,
			delimiter: ",",
			showOnFocus: !0,
			allowReselection: !1,
			allowTab: !0,
			allowCategorySelection: !1,
			fireOnInit: !1,
			transition: "auto",
			duration: 200,
			glyphWidth: 1.037,
			label: { transition: "scale", duration: 200, variation: !1 },
			delay: { hide: 300, show: 200, search: 20, touch: 50 },
			onChange: function (e, t, n) {},
			onAdd: function (e, t, n) {},
			onRemove: function (e, t, n) {},
			onLabelSelect: function (e) {},
			onLabelCreate: function (e, t) {
				return X(this);
			},
			onLabelRemove: function (e) {
				return !0;
			},
			onNoResults: function (e) {
				return !0;
			},
			onShow: function () {},
			onHide: function () {},
			name: "Dropdown",
			namespace: "dropdown",
			message: {
				addResult: "Add <b>{term}</b>",
				count: "{count} selected",
				maxSelections: "Max {maxCount} selections",
				noResults: "No results found.",
				serverError: "There was an error contacting the server",
			},
			error: {
				action: "You called a dropdown action that was not defined",
				alreadySetup:
					"Once a select has been initialized behaviors must be called on the created ui dropdown",
				labels: "Allowing user additions currently requires the use of labels.",
				missingMultiple:
					"<select> requires multiple property to be set to correctly preserve multiple values",
				method: "The method you called is not defined.",
				noAPI: "The API module is required to load resources remotely",
				noStorage: "Saving remote data requires session storage",
				noTransition:
					"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",
			},
			regExp: { escape: /[-[\]{}()*+?.,\\^$|#\s]/g, quote: /"/g },
			metadata: {
				defaultText: "defaultText",
				defaultValue: "defaultValue",
				placeholderText: "placeholder",
				text: "text",
				value: "value",
			},
			fields: {
				remoteValues: "results",
				values: "values",
				disabled: "disabled",
				name: "name",
				value: "value",
				text: "text",
			},
			keys: {
				backspace: 8,
				delimiter: 188,
				deleteKey: 46,
				enter: 13,
				escape: 27,
				pageUp: 33,
				pageDown: 34,
				leftArrow: 37,
				upArrow: 38,
				rightArrow: 39,
				downArrow: 40,
			},
			selector: {
				addition: ".addition",
				dropdown: ".ui.dropdown",
				hidden: ".hidden",
				icon: "> .dropdown.icon",
				input: '> input[type="hidden"], > select',
				item: ".item",
				label: "> .label",
				remove: "> .label > .delete.icon",
				siblingLabel: ".label",
				menu: ".menu",
				message: ".message",
				menuIcon: ".dropdown.icon",
				search: "input.search, .menu > .search > input, .menu input.search",
				sizer: "> input.sizer",
				text: "> .text:not(.icon)",
				unselectable: ".disabled, .filtered",
			},
			className: {
				active: "active",
				addition: "addition",
				animating: "animating",
				clear: "clear",
				disabled: "disabled",
				empty: "empty",
				dropdown: "ui dropdown",
				filtered: "filtered",
				hidden: "hidden transition",
				item: "item",
				label: "ui label",
				loading: "loading",
				menu: "menu",
				message: "message",
				multiple: "multiple",
				placeholder: "default",
				sizer: "sizer",
				search: "search",
				selected: "selected",
				selection: "selection",
				upward: "upward",
				leftward: "left",
				visible: "visible",
			},
		}),
		(X.fn.dropdown.settings.templates = {
			dropdown: function (e) {
				var t = e.placeholder || !1,
					n = (e.values, "");
				return (
					(n += '<i class="dropdown icon"></i>'),
					e.placeholder
						? (n += '<div class="default text">' + t + "</div>")
						: (n += '<div class="text"></div>'),
					(n += '<div class="menu">'),
					X.each(e.values, function (e, t) {
						n += t.disabled
							? '<div class="disabled item" data-value="' +
							  t.value +
							  '">' +
							  t.name +
							  "</div>"
							: '<div class="item" data-value="' +
							  t.value +
							  '">' +
							  t.name +
							  "</div>";
					}),
					(n += "</div>")
				);
			},
			menu: function (e, a) {
				var t = e[a.values] || {},
					o = "";
				return (
					X.each(t, function (e, t) {
						var n = t[a.text] ? 'data-text="' + t[a.text] + '"' : "",
							i = t[a.disabled] ? "disabled " : "";
						(o +=
							'<div class="' +
							i +
							'item" data-value="' +
							t[a.value] +
							'"' +
							n +
							">"),
							(o += t[a.name]),
							(o += "</div>");
					}),
					o
				);
			},
			label: function (e, t) {
				return t + '<i class="delete icon"></i>';
			},
			message: function (e) {
				return e;
			},
			addition: function (e) {
				return e;
			},
		});
})(jQuery, window, document);
("use strict");
function _possibleConstructorReturn(a, b) {
	if (!a)
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called"
		);
	return !b || ("object" != typeof b && "function" != typeof b) ? a : b;
}
function _inherits(a, b) {
	if ("function" != typeof b && null !== b)
		throw new TypeError(
			"Super expression must either be null or a function, not " + typeof b
		);
	(a.prototype = Object.create(b && b.prototype, {
		constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
	})),
		b &&
			(Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
}
function _classCallCheck(a, b) {
	if (!(a instanceof b))
		throw new TypeError("Cannot call a class as a function");
}
function __guard__(a, b) {
	return void 0 !== a && null !== a ? b(a) : void 0;
}
function __guardMethod__(a, b, c) {
	return void 0 !== a && null !== a && "function" == typeof a[b]
		? c(a, b)
		: void 0;
}
var _createClass = (function () {
		function a(a, b) {
			for (var c = 0; c < b.length; c++) {
				var d = b[c];
				(d.enumerable = d.enumerable || !1),
					(d.configurable = !0),
					"value" in d && (d.writable = !0),
					Object.defineProperty(a, d.key, d);
			}
		}
		return function (b, c, d) {
			return c && a(b.prototype, c), d && a(b, d), b;
		};
	})(),
	Emitter = (function () {
		function a() {
			_classCallCheck(this, a);
		}
		return (
			_createClass(a, [
				{
					key: "on",
					value: function (a, b) {
						return (
							(this._callbacks = this._callbacks || {}),
							this._callbacks[a] || (this._callbacks[a] = []),
							this._callbacks[a].push(b),
							this
						);
					},
				},
				{
					key: "emit",
					value: function (a) {
						this._callbacks = this._callbacks || {};
						var b = this._callbacks[a];
						if (b) {
							for (
								var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), e = 1;
								e < c;
								e++
							)
								d[e - 1] = arguments[e];
							for (var f = b, g = 0, f = f; ; ) {
								var h;
								if (g >= f.length) break;
								h = f[g++];
								h.apply(this, d);
							}
						}
						return this;
					},
				},
				{
					key: "off",
					value: function (a, b) {
						if (!this._callbacks || 0 === arguments.length)
							return (this._callbacks = {}), this;
						var c = this._callbacks[a];
						if (!c) return this;
						if (1 === arguments.length) return delete this._callbacks[a], this;
						for (var d = 0; d < c.length; d++) {
							if (c[d] === b) {
								c.splice(d, 1);
								break;
							}
						}
						return this;
					},
				},
			]),
			a
		);
	})(),
	Dropzone = (function (a) {
		function b(a, c) {
			_classCallCheck(this, b);
			var d = _possibleConstructorReturn(
					this,
					(b.__proto__ || Object.getPrototypeOf(b)).call(this)
				),
				e = void 0,
				f = void 0;
			if (
				((d.element = a),
				(d.version = b.version),
				(d.defaultOptions.previewTemplate =
					d.defaultOptions.previewTemplate.replace(/\n*/g, "")),
				(d.clickableElements = []),
				(d.listeners = []),
				(d.files = []),
				"string" == typeof d.element &&
					(d.element = document.querySelector(d.element)),
				!d.element || null == d.element.nodeType)
			)
				throw new Error("Invalid dropzone element.");
			if (d.element.dropzone) throw new Error("Dropzone already attached.");
			b.instances.push(d), (d.element.dropzone = d);
			var g = null != (f = b.optionsForElement(d.element)) ? f : {};
			if (
				((d.options = b.extend({}, d.defaultOptions, g, null != c ? c : {})),
				d.options.forceFallback || !b.isBrowserSupported())
			) {
				var h;
				return (
					(h = d.options.fallback.call(d)), _possibleConstructorReturn(d, h)
				);
			}
			if (
				(null == d.options.url &&
					(d.options.url = d.element.getAttribute("action")),
				!d.options.url)
			)
				throw new Error("No URL provided.");
			if (d.options.acceptedFiles && d.options.acceptedMimeTypes)
				throw new Error(
					"You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated."
				);
			if (d.options.uploadMultiple && d.options.chunking)
				throw new Error("You cannot set both: uploadMultiple and chunking.");
			return (
				d.options.acceptedMimeTypes &&
					((d.options.acceptedFiles = d.options.acceptedMimeTypes),
					delete d.options.acceptedMimeTypes),
				null != d.options.renameFilename &&
					(d.options.renameFile = function (a) {
						return d.options.renameFilename.call(d, a.name, a);
					}),
				(d.options.method = d.options.method.toUpperCase()),
				(e = d.getExistingFallback()) &&
					e.parentNode &&
					e.parentNode.removeChild(e),
				!1 !== d.options.previewsContainer &&
					(d.options.previewsContainer
						? (d.previewsContainer = b.getElement(
								d.options.previewsContainer,
								"previewsContainer"
						  ))
						: (d.previewsContainer = d.element)),
				d.options.clickable &&
					(!0 === d.options.clickable
						? (d.clickableElements = [d.element])
						: (d.clickableElements = b.getElements(
								d.options.clickable,
								"clickable"
						  ))),
				d.init(),
				d
			);
		}
		return (
			_inherits(b, a),
			_createClass(b, null, [
				{
					key: "initClass",
					value: function () {
						(this.prototype.Emitter = Emitter),
							(this.prototype.events = [
								"drop",
								"dragstart",
								"dragend",
								"dragenter",
								"dragover",
								"dragleave",
								"addedfile",
								"addedfiles",
								"removedfile",
								"thumbnail",
								"error",
								"errormultiple",
								"processing",
								"processingmultiple",
								"uploadprogress",
								"totaluploadprogress",
								"sending",
								"sendingmultiple",
								"success",
								"successmultiple",
								"canceled",
								"canceledmultiple",
								"complete",
								"completemultiple",
								"reset",
								"maxfilesexceeded",
								"maxfilesreached",
								"queuecomplete",
							]),
							(this.prototype.defaultOptions = {
								url: null,
								method: "post",
								withCredentials: !1,
								timeout: 3e4,
								parallelUploads: 2,
								uploadMultiple: !1,
								chunking: !1,
								forceChunking: !1,
								chunkSize: 2e6,
								parallelChunkUploads: !1,
								retryChunks: !1,
								retryChunksLimit: 3,
								maxFilesize: 256,
								paramName: "file",
								createImageThumbnails: !0,
								maxThumbnailFilesize: 10,
								thumbnailWidth: 120,
								thumbnailHeight: 120,
								thumbnailMethod: "crop",
								resizeWidth: null,
								resizeHeight: null,
								resizeMimeType: null,
								resizeQuality: 0.8,
								resizeMethod: "contain",
								filesizeBase: 1e3,
								maxFiles: null,
								headers: null,
								clickable: !0,
								ignoreHiddenFiles: !0,
								acceptedFiles: null,
								acceptedMimeTypes: null,
								autoProcessQueue: !0,
								autoQueue: !0,
								addRemoveLinks: !1,
								previewsContainer: null,
								hiddenInputContainer: "body",
								capture: null,
								renameFilename: null,
								renameFile: null,
								forceFallback: !1,
								dictDefaultMessage: "Drop files here to upload",
								dictFallbackMessage:
									"Your browser does not support drag'n'drop file uploads.",
								dictFallbackText:
									"Please use the fallback form below to upload your files like in the olden days.",
								dictFileTooBig:
									"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
								dictInvalidFileType: "You can't upload files of this type.",
								dictResponseError: "Server responded with {{statusCode}} code.",
								dictCancelUpload: "Cancel upload",
								dictUploadCanceled: "Upload canceled.",
								dictCancelUploadConfirmation:
									"Are you sure you want to cancel this upload?",
								dictRemoveFile: "Remove file",
								dictRemoveFileConfirmation: null,
								dictMaxFilesExceeded: "You can not upload any more files.",
								dictFileSizeUnits: {
									tb: "TB",
									gb: "GB",
									mb: "MB",
									kb: "KB",
									b: "b",
								},
								init: function () {},
								params: function (a, b, c) {
									if (c)
										return {
											dzuuid: c.file.upload.uuid,
											dzchunkindex: c.index,
											dztotalfilesize: c.file.size,
											dzchunksize: this.options.chunkSize,
											dztotalchunkcount: c.file.upload.totalChunkCount,
											dzchunkbyteoffset: c.index * this.options.chunkSize,
										};
								},
								accept: function (a, b) {
									return b();
								},
								chunksUploaded: function (a, b) {
									b();
								},
								fallback: function () {
									var a = void 0;
									this.element.className =
										this.element.className + " dz-browser-not-supported";
									for (
										var c = this.element.getElementsByTagName("div"),
											d = 0,
											c = c;
										;

									) {
										var e;
										if (d >= c.length) break;
										e = c[d++];
										var f = e;
										if (/(^| )dz-message($| )/.test(f.className)) {
											(a = f), (f.className = "dz-message");
											break;
										}
									}
									a ||
										((a = b.createElement(
											'<div class="dz-message"><span></span></div>'
										)),
										this.element.appendChild(a));
									var g = a.getElementsByTagName("span")[0];
									return (
										g &&
											(null != g.textContent
												? (g.textContent = this.options.dictFallbackMessage)
												: null != g.innerText &&
												  (g.innerText = this.options.dictFallbackMessage)),
										this.element.appendChild(this.getFallbackForm())
									);
								},
								resize: function (a, b, c, d) {
									var e = {
											srcX: 0,
											srcY: 0,
											srcWidth: a.width,
											srcHeight: a.height,
										},
										f = a.width / a.height;
									null == b && null == c
										? ((b = e.srcWidth), (c = e.srcHeight))
										: null == b
										? (b = c * f)
										: null == c && (c = b / f),
										(b = Math.min(b, e.srcWidth)),
										(c = Math.min(c, e.srcHeight));
									var g = b / c;
									if (e.srcWidth > b || e.srcHeight > c)
										if ("crop" === d)
											f > g
												? ((e.srcHeight = a.height),
												  (e.srcWidth = e.srcHeight * g))
												: ((e.srcWidth = a.width),
												  (e.srcHeight = e.srcWidth / g));
										else {
											if ("contain" !== d)
												throw new Error("Unknown resizeMethod '" + d + "'");
											f > g ? (c = b / f) : (b = c * f);
										}
									return (
										(e.srcX = (a.width - e.srcWidth) / 2),
										(e.srcY = (a.height - e.srcHeight) / 2),
										(e.trgWidth = b),
										(e.trgHeight = c),
										e
									);
								},
								transformFile: function (a, b) {
									return (this.options.resizeWidth ||
										this.options.resizeHeight) &&
										a.type.match(/image.*/)
										? this.resizeImage(
												a,
												this.options.resizeWidth,
												this.options.resizeHeight,
												this.options.resizeMethod,
												b
										  )
										: b(a);
								},
								previewTemplate:
									'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',
								drop: function (a) {
									return this.element.classList.remove("dz-drag-hover");
								},
								dragstart: function (a) {},
								dragend: function (a) {
									return this.element.classList.remove("dz-drag-hover");
								},
								dragenter: function (a) {
									return this.element.classList.add("dz-drag-hover");
								},
								dragover: function (a) {
									return this.element.classList.add("dz-drag-hover");
								},
								dragleave: function (a) {
									return this.element.classList.remove("dz-drag-hover");
								},
								paste: function (a) {},
								reset: function () {
									return this.element.classList.remove("dz-started");
								},
								addedfile: function (a) {
									var c = this;
									if (
										(this.element === this.previewsContainer &&
											this.element.classList.add("dz-started"),
										this.previewsContainer)
									) {
										(a.previewElement = b.createElement(
											this.options.previewTemplate.trim()
										)),
											(a.previewTemplate = a.previewElement),
											this.previewsContainer.appendChild(a.previewElement);
										for (
											var d =
													a.previewElement.querySelectorAll("[data-dz-name]"),
												e = 0,
												d = d;
											;

										) {
											var f;
											if (e >= d.length) break;
											f = d[e++];
											var g = f;
											g.textContent = a.name;
										}
										for (
											var h =
													a.previewElement.querySelectorAll("[data-dz-size]"),
												i = 0,
												h = h;
											!(i >= h.length);

										)
											(g = h[i++]), (g.innerHTML = this.filesize(a.size));
										this.options.addRemoveLinks &&
											((a._removeLink = b.createElement(
												'<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' +
													this.options.dictRemoveFile +
													"</a>"
											)),
											a.previewElement.appendChild(a._removeLink));
										for (
											var j = function (d) {
													return (
														d.preventDefault(),
														d.stopPropagation(),
														a.status === b.UPLOADING
															? b.confirm(
																	c.options.dictCancelUploadConfirmation,
																	function () {
																		return c.removeFile(a);
																	}
															  )
															: c.options.dictRemoveFileConfirmation
															? b.confirm(
																	c.options.dictRemoveFileConfirmation,
																	function () {
																		return c.removeFile(a);
																	}
															  )
															: c.removeFile(a)
													);
												},
												k =
													a.previewElement.querySelectorAll("[data-dz-remove]"),
												l = 0,
												k = k;
											;

										) {
											var m;
											if (l >= k.length) break;
											m = k[l++];
											m.addEventListener("click", j);
										}
									}
								},
								removedfile: function (a) {
									return (
										null != a.previewElement &&
											null != a.previewElement.parentNode &&
											a.previewElement.parentNode.removeChild(a.previewElement),
										this._updateMaxFilesReachedClass()
									);
								},
								thumbnail: function (a, b) {
									if (a.previewElement) {
										a.previewElement.classList.remove("dz-file-preview");
										for (
											var c = a.previewElement.querySelectorAll(
													"[data-dz-thumbnail]"
												),
												d = 0,
												c = c;
											;

										) {
											var e;
											if (d >= c.length) break;
											e = c[d++];
											var f = e;
											(f.alt = a.name), (f.src = b);
										}
										return setTimeout(function () {
											return a.previewElement.classList.add("dz-image-preview");
										}, 1);
									}
								},
								error: function (a, b) {
									if (a.previewElement) {
										a.previewElement.classList.add("dz-error"),
											"String" != typeof b && b.error && (b = b.error);
										for (
											var c = a.previewElement.querySelectorAll(
													"[data-dz-errormessage]"
												),
												d = 0,
												c = c;
											;

										) {
											var e;
											if (d >= c.length) break;
											e = c[d++];
											e.textContent = b;
										}
									}
								},
								errormultiple: function () {},
								processing: function (a) {
									if (
										a.previewElement &&
										(a.previewElement.classList.add("dz-processing"),
										a._removeLink)
									)
										return (a._removeLink.innerHTML =
											this.options.dictCancelUpload);
								},
								processingmultiple: function () {},
								uploadprogress: function (a, b, c) {
									if (a.previewElement)
										for (
											var d = a.previewElement.querySelectorAll(
													"[data-dz-uploadprogress]"
												),
												e = 0,
												d = d;
											;

										) {
											var f;
											if (e >= d.length) break;
											f = d[e++];
											var g = f;
											"PROGRESS" === g.nodeName
												? (g.value = b)
												: (g.style.width = b + "%");
										}
								},
								totaluploadprogress: function () {},
								sending: function () {},
								sendingmultiple: function () {},
								success: function (a) {
									if (a.previewElement)
										return a.previewElement.classList.add("dz-success");
								},
								successmultiple: function () {},
								canceled: function (a) {
									return this.emit("error", a, this.options.dictUploadCanceled);
								},
								canceledmultiple: function () {},
								complete: function (a) {
									if (
										(a._removeLink &&
											(a._removeLink.innerHTML = this.options.dictRemoveFile),
										a.previewElement)
									)
										return a.previewElement.classList.add("dz-complete");
								},
								completemultiple: function () {},
								maxfilesexceeded: function () {},
								maxfilesreached: function () {},
								queuecomplete: function () {},
								addedfiles: function () {},
							}),
							(this.prototype._thumbnailQueue = []),
							(this.prototype._processingThumbnail = !1);
					},
				},
				{
					key: "extend",
					value: function (a) {
						for (
							var b = arguments.length, c = Array(b > 1 ? b - 1 : 0), d = 1;
							d < b;
							d++
						)
							c[d - 1] = arguments[d];
						for (var e = c, f = 0, e = e; ; ) {
							var g;
							if (f >= e.length) break;
							g = e[f++];
							var h = g;
							for (var i in h) {
								var j = h[i];
								a[i] = j;
							}
						}
						return a;
					},
				},
			]),
			_createClass(
				b,
				[
					{
						key: "getAcceptedFiles",
						value: function () {
							return this.files
								.filter(function (a) {
									return a.accepted;
								})
								.map(function (a) {
									return a;
								});
						},
					},
					{
						key: "getRejectedFiles",
						value: function () {
							return this.files
								.filter(function (a) {
									return !a.accepted;
								})
								.map(function (a) {
									return a;
								});
						},
					},
					{
						key: "getFilesWithStatus",
						value: function (a) {
							return this.files
								.filter(function (b) {
									return b.status === a;
								})
								.map(function (a) {
									return a;
								});
						},
					},
					{
						key: "getQueuedFiles",
						value: function () {
							return this.getFilesWithStatus(b.QUEUED);
						},
					},
					{
						key: "getUploadingFiles",
						value: function () {
							return this.getFilesWithStatus(b.UPLOADING);
						},
					},
					{
						key: "getAddedFiles",
						value: function () {
							return this.getFilesWithStatus(b.ADDED);
						},
					},
					{
						key: "getActiveFiles",
						value: function () {
							return this.files
								.filter(function (a) {
									return a.status === b.UPLOADING || a.status === b.QUEUED;
								})
								.map(function (a) {
									return a;
								});
						},
					},
					{
						key: "init",
						value: function () {
							var a = this;
							if (
								("form" === this.element.tagName &&
									this.element.setAttribute("enctype", "multipart/form-data"),
								this.element.classList.contains("dropzone") &&
									!this.element.querySelector(".dz-message") &&
									this.element.appendChild(
										b.createElement(
											'<div class="dz-default dz-message"><span>' +
												this.options.dictDefaultMessage +
												"</span></div>"
										)
									),
								this.clickableElements.length)
							) {
								!(function c() {
									return (
										a.hiddenFileInput &&
											a.hiddenFileInput.parentNode.removeChild(
												a.hiddenFileInput
											),
										(a.hiddenFileInput = document.createElement("input")),
										a.hiddenFileInput.setAttribute("type", "file"),
										(null === a.options.maxFiles || a.options.maxFiles > 1) &&
											a.hiddenFileInput.setAttribute("multiple", "multiple"),
										(a.hiddenFileInput.className = "dz-hidden-input"),
										null !== a.options.acceptedFiles &&
											a.hiddenFileInput.setAttribute(
												"accept",
												a.options.acceptedFiles
											),
										null !== a.options.capture &&
											a.hiddenFileInput.setAttribute(
												"capture",
												a.options.capture
											),
										(a.hiddenFileInput.style.visibility = "hidden"),
										(a.hiddenFileInput.style.position = "absolute"),
										(a.hiddenFileInput.style.top = "0"),
										(a.hiddenFileInput.style.left = "0"),
										(a.hiddenFileInput.style.height = "0"),
										(a.hiddenFileInput.style.width = "0"),
										b
											.getElement(
												a.options.hiddenInputContainer,
												"hiddenInputContainer"
											)
											.appendChild(a.hiddenFileInput),
										a.hiddenFileInput.addEventListener("change", function () {
											var b = a.hiddenFileInput.files;
											if (b.length)
												for (var d = b, e = 0, d = d; ; ) {
													var f;
													if (e >= d.length) break;
													f = d[e++];
													var g = f;
													a.addFile(g);
												}
											return a.emit("addedfiles", b), c();
										})
									);
								})();
							}
							this.URL = null !== window.URL ? window.URL : window.webkitURL;
							for (var c = this.events, d = 0, c = c; ; ) {
								var e;
								if (d >= c.length) break;
								e = c[d++];
								var f = e;
								this.on(f, this.options[f]);
							}
							this.on("uploadprogress", function () {
								return a.updateTotalUploadProgress();
							}),
								this.on("removedfile", function () {
									return a.updateTotalUploadProgress();
								}),
								this.on("canceled", function (b) {
									return a.emit("complete", b);
								}),
								this.on("complete", function (b) {
									if (
										0 === a.getAddedFiles().length &&
										0 === a.getUploadingFiles().length &&
										0 === a.getQueuedFiles().length
									)
										return setTimeout(function () {
											return a.emit("queuecomplete");
										}, 0);
								});
							var g = function (a) {
								return (
									a.stopPropagation(),
									a.preventDefault ? a.preventDefault() : (a.returnValue = !1)
								);
							};
							return (
								(this.listeners = [
									{
										element: this.element,
										events: {
											dragstart: function (b) {
												return a.emit("dragstart", b);
											},
											dragenter: function (b) {
												return g(b), a.emit("dragenter", b);
											},
											dragover: function (b) {
												var c = void 0;
												try {
													c = b.dataTransfer.effectAllowed;
												} catch (a) {}
												return (
													(b.dataTransfer.dropEffect =
														"move" === c || "linkMove" === c ? "move" : "copy"),
													g(b),
													a.emit("dragover", b)
												);
											},
											dragleave: function (b) {
												return a.emit("dragleave", b);
											},
											drop: function (b) {
												return g(b), a.drop(b);
											},
											dragend: function (b) {
												return a.emit("dragend", b);
											},
										},
									},
								]),
								this.clickableElements.forEach(function (c) {
									return a.listeners.push({
										element: c,
										events: {
											click: function (d) {
												return (
													(c !== a.element ||
														d.target === a.element ||
														b.elementInside(
															d.target,
															a.element.querySelector(".dz-message")
														)) &&
														a.hiddenFileInput.click(),
													!0
												);
											},
										},
									});
								}),
								this.enable(),
								this.options.init.call(this)
							);
						},
					},
					{
						key: "destroy",
						value: function () {
							return (
								this.disable(),
								this.removeAllFiles(!0),
								(null != this.hiddenFileInput
									? this.hiddenFileInput.parentNode
									: void 0) &&
									(this.hiddenFileInput.parentNode.removeChild(
										this.hiddenFileInput
									),
									(this.hiddenFileInput = null)),
								delete this.element.dropzone,
								b.instances.splice(b.instances.indexOf(this), 1)
							);
						},
					},
					{
						key: "updateTotalUploadProgress",
						value: function () {
							var a = void 0,
								b = 0,
								c = 0;
							if (this.getActiveFiles().length) {
								for (var d = this.getActiveFiles(), e = 0, d = d; ; ) {
									var f;
									if (e >= d.length) break;
									f = d[e++];
									var g = f;
									(b += g.upload.bytesSent), (c += g.upload.total);
								}
								a = (100 * b) / c;
							} else a = 100;
							return this.emit("totaluploadprogress", a, c, b);
						},
					},
					{
						key: "_getParamName",
						value: function (a) {
							return "function" == typeof this.options.paramName
								? this.options.paramName(a)
								: this.options.paramName +
										(this.options.uploadMultiple ? "[" + a + "]" : "");
						},
					},
					{
						key: "_renameFile",
						value: function (a) {
							return "function" != typeof this.options.renameFile
								? a.name
								: this.options.renameFile(a);
						},
					},
					{
						key: "getFallbackForm",
						value: function () {
							var a = void 0,
								c = void 0;
							if ((a = this.getExistingFallback())) return a;
							var d = '<div class="dz-fallback">';
							this.options.dictFallbackText &&
								(d += "<p>" + this.options.dictFallbackText + "</p>"),
								(d +=
									'<input type="file" name="' +
									this._getParamName(0) +
									'" ' +
									(this.options.uploadMultiple
										? 'multiple="multiple"'
										: void 0) +
									' /><input type="submit" value="Upload!"></div>');
							var e = b.createElement(d);
							return (
								"FORM" !== this.element.tagName
									? ((c = b.createElement(
											'<form action="' +
												this.options.url +
												'" enctype="multipart/form-data" method="' +
												this.options.method +
												'"></form>'
									  )),
									  c.appendChild(e))
									: (this.element.setAttribute(
											"enctype",
											"multipart/form-data"
									  ),
									  this.element.setAttribute("method", this.options.method)),
								null != c ? c : e
							);
						},
					},
					{
						key: "getExistingFallback",
						value: function () {
							for (var a = ["div", "form"], b = 0; b < a.length; b++) {
								var c,
									d = a[b];
								if (
									(c = (function (a) {
										for (var b = a, c = 0, b = b; ; ) {
											var d;
											if (c >= b.length) break;
											d = b[c++];
											var e = d;
											if (/(^| )fallback($| )/.test(e.className)) return e;
										}
									})(this.element.getElementsByTagName(d)))
								)
									return c;
							}
						},
					},
					{
						key: "setupEventListeners",
						value: function () {
							return this.listeners.map(function (a) {
								return (function () {
									var b = [];
									for (var c in a.events) {
										var d = a.events[c];
										b.push(a.element.addEventListener(c, d, !1));
									}
									return b;
								})();
							});
						},
					},
					{
						key: "removeEventListeners",
						value: function () {
							return this.listeners.map(function (a) {
								return (function () {
									var b = [];
									for (var c in a.events) {
										var d = a.events[c];
										b.push(a.element.removeEventListener(c, d, !1));
									}
									return b;
								})();
							});
						},
					},
					{
						key: "disable",
						value: function () {
							var a = this;
							return (
								this.clickableElements.forEach(function (a) {
									return a.classList.remove("dz-clickable");
								}),
								this.removeEventListeners(),
								(this.disabled = !0),
								this.files.map(function (b) {
									return a.cancelUpload(b);
								})
							);
						},
					},
					{
						key: "enable",
						value: function () {
							return (
								delete this.disabled,
								this.clickableElements.forEach(function (a) {
									return a.classList.add("dz-clickable");
								}),
								this.setupEventListeners()
							);
						},
					},
					{
						key: "filesize",
						value: function (a) {
							var b = 0,
								c = "b";
							if (a > 0) {
								for (
									var d = ["tb", "gb", "mb", "kb", "b"], e = 0;
									e < d.length;
									e++
								) {
									var f = d[e];
									if (a >= Math.pow(this.options.filesizeBase, 4 - e) / 10) {
										(b = a / Math.pow(this.options.filesizeBase, 4 - e)),
											(c = f);
										break;
									}
								}
								b = Math.round(10 * b) / 10;
							}
							return (
								"<strong>" +
								b +
								"</strong> " +
								this.options.dictFileSizeUnits[c]
							);
						},
					},
					{
						key: "_updateMaxFilesReachedClass",
						value: function () {
							return null != this.options.maxFiles &&
								this.getAcceptedFiles().length >= this.options.maxFiles
								? (this.getAcceptedFiles().length === this.options.maxFiles &&
										this.emit("maxfilesreached", this.files),
								  this.element.classList.add("dz-max-files-reached"))
								: this.element.classList.remove("dz-max-files-reached");
						},
					},
					{
						key: "drop",
						value: function (a) {
							if (a.dataTransfer) {
								this.emit("drop", a);
								for (var b = [], c = 0; c < a.dataTransfer.files.length; c++)
									b[c] = a.dataTransfer.files[c];
								if ((this.emit("addedfiles", b), b.length)) {
									var d = a.dataTransfer.items;
									d && d.length && null != d[0].webkitGetAsEntry
										? this._addFilesFromItems(d)
										: this.handleFiles(b);
								}
							}
						},
					},
					{
						key: "paste",
						value: function (a) {
							if (
								null !=
								__guard__(null != a ? a.clipboardData : void 0, function (a) {
									return a.items;
								})
							) {
								this.emit("paste", a);
								var b = a.clipboardData.items;
								return b.length ? this._addFilesFromItems(b) : void 0;
							}
						},
					},
					{
						key: "handleFiles",
						value: function (a) {
							for (var b = a, c = 0, b = b; ; ) {
								var d;
								if (c >= b.length) break;
								d = b[c++];
								var e = d;
								this.addFile(e);
							}
						},
					},
					{
						key: "_addFilesFromItems",
						value: function (a) {
							var b = this;
							return (function () {
								for (var c = [], d = a, e = 0, d = d; ; ) {
									var f;
									if (e >= d.length) break;
									f = d[e++];
									var g,
										h = f;
									null != h.webkitGetAsEntry && (g = h.webkitGetAsEntry())
										? g.isFile
											? c.push(b.addFile(h.getAsFile()))
											: g.isDirectory
											? c.push(b._addFilesFromDirectory(g, g.name))
											: c.push(void 0)
										: null != h.getAsFile &&
										  (null == h.kind || "file" === h.kind)
										? c.push(b.addFile(h.getAsFile()))
										: c.push(void 0);
								}
								return c;
							})();
						},
					},
					{
						key: "_addFilesFromDirectory",
						value: function (a, b) {
							var c = this,
								d = a.createReader(),
								e = function (a) {
									return __guardMethod__(console, "log", function (b) {
										return b.log(a);
									});
								};
							return (function a() {
								return d.readEntries(function (d) {
									if (d.length > 0) {
										for (var e = d, f = 0, e = e; ; ) {
											var g;
											if (f >= e.length) break;
											g = e[f++];
											var h = g;
											h.isFile
												? h.file(function (a) {
														if (
															!c.options.ignoreHiddenFiles ||
															"." !== a.name.substring(0, 1)
														)
															return (
																(a.fullPath = b + "/" + a.name), c.addFile(a)
															);
												  })
												: h.isDirectory &&
												  c._addFilesFromDirectory(h, b + "/" + h.name);
										}
										a();
									}
									return null;
								}, e);
							})();
						},
					},
					{
						key: "accept",
						value: function (a, c) {
							return this.options.maxFilesize &&
								a.size > 1024 * this.options.maxFilesize * 1024
								? c(
										this.options.dictFileTooBig
											.replace(
												"{{filesize}}",
												Math.round(a.size / 1024 / 10.24) / 100
											)
											.replace("{{maxFilesize}}", this.options.maxFilesize)
								  )
								: b.isValidFile(a, this.options.acceptedFiles)
								? null != this.options.maxFiles &&
								  this.getAcceptedFiles().length >= this.options.maxFiles
									? (c(
											this.options.dictMaxFilesExceeded.replace(
												"{{maxFiles}}",
												this.options.maxFiles
											)
									  ),
									  this.emit("maxfilesexceeded", a))
									: this.options.accept.call(this, a, c)
								: c(this.options.dictInvalidFileType);
						},
					},
					{
						key: "addFile",
						value: function (a) {
							var c = this;
							return (
								(a.upload = {
									uuid: b.uuidv4(),
									progress: 0,
									total: a.size,
									bytesSent: 0,
									filename: this._renameFile(a),
									chunked:
										this.options.chunking &&
										(this.options.forceChunking ||
											a.size > this.options.chunkSize),
									totalChunkCount: Math.ceil(a.size / this.options.chunkSize),
								}),
								this.files.push(a),
								(a.status = b.ADDED),
								this.emit("addedfile", a),
								this._enqueueThumbnail(a),
								this.accept(a, function (b) {
									return (
										b
											? ((a.accepted = !1), c._errorProcessing([a], b))
											: ((a.accepted = !0),
											  c.options.autoQueue && c.enqueueFile(a)),
										c._updateMaxFilesReachedClass()
									);
								})
							);
						},
					},
					{
						key: "enqueueFiles",
						value: function (a) {
							for (var b = a, c = 0, b = b; ; ) {
								var d;
								if (c >= b.length) break;
								d = b[c++];
								var e = d;
								this.enqueueFile(e);
							}
							return null;
						},
					},
					{
						key: "enqueueFile",
						value: function (a) {
							var c = this;
							if (a.status !== b.ADDED || !0 !== a.accepted)
								throw new Error(
									"This file can't be queued because it has already been processed or was rejected."
								);
							if (((a.status = b.QUEUED), this.options.autoProcessQueue))
								return setTimeout(function () {
									return c.processQueue();
								}, 0);
						},
					},
					{
						key: "_enqueueThumbnail",
						value: function (a) {
							var b = this;
							if (
								this.options.createImageThumbnails &&
								a.type.match(/image.*/) &&
								a.size <= 1024 * this.options.maxThumbnailFilesize * 1024
							)
								return (
									this._thumbnailQueue.push(a),
									setTimeout(function () {
										return b._processThumbnailQueue();
									}, 0)
								);
						},
					},
					{
						key: "_processThumbnailQueue",
						value: function () {
							var a = this;
							if (
								!this._processingThumbnail &&
								0 !== this._thumbnailQueue.length
							) {
								this._processingThumbnail = !0;
								var b = this._thumbnailQueue.shift();
								return this.createThumbnail(
									b,
									this.options.thumbnailWidth,
									this.options.thumbnailHeight,
									this.options.thumbnailMethod,
									!0,
									function (c) {
										return (
											a.emit("thumbnail", b, c),
											(a._processingThumbnail = !1),
											a._processThumbnailQueue()
										);
									}
								);
							}
						},
					},
					{
						key: "removeFile",
						value: function (a) {
							if (
								(a.status === b.UPLOADING && this.cancelUpload(a),
								(this.files = without(this.files, a)),
								this.emit("removedfile", a),
								0 === this.files.length)
							)
								return this.emit("reset");
						},
					},
					{
						key: "removeAllFiles",
						value: function (a) {
							null == a && (a = !1);
							for (var c = this.files.slice(), d = 0, c = c; ; ) {
								var e;
								if (d >= c.length) break;
								e = c[d++];
								var f = e;
								(f.status !== b.UPLOADING || a) && this.removeFile(f);
							}
							return null;
						},
					},
					{
						key: "resizeImage",
						value: function (a, c, d, e, f) {
							var g = this;
							return this.createThumbnail(a, c, d, e, !0, function (c, d) {
								if (null == d) return f(a);
								var e = g.options.resizeMimeType;
								null == e && (e = a.type);
								var h = d.toDataURL(e, g.options.resizeQuality);
								return (
									("image/jpeg" !== e && "image/jpg" !== e) ||
										(h = ExifRestore.restore(a.dataURL, h)),
									f(b.dataURItoBlob(h))
								);
							});
						},
					},
					{
						key: "createThumbnail",
						value: function (a, b, c, d, e, f) {
							var g = this,
								h = new FileReader();
							return (
								(h.onload = function () {
									return (
										(a.dataURL = h.result),
										"image/svg+xml" === a.type
											? void (null != f && f(h.result))
											: g.createThumbnailFromUrl(a, b, c, d, e, f)
									);
								}),
								h.readAsDataURL(a)
							);
						},
					},
					{
						key: "createThumbnailFromUrl",
						value: function (a, b, c, d, e, f, g) {
							var h = this,
								i = document.createElement("img");
							return (
								g && (i.crossOrigin = g),
								(i.onload = function () {
									var g = function (a) {
										return a(1);
									};
									return (
										"undefined" != typeof EXIF &&
											null !== EXIF &&
											e &&
											(g = function (a) {
												return EXIF.getData(i, function () {
													return a(EXIF.getTag(this, "Orientation"));
												});
											}),
										g(function (e) {
											(a.width = i.width), (a.height = i.height);
											var g = h.options.resize.call(h, a, b, c, d),
												j = document.createElement("canvas"),
												k = j.getContext("2d");
											switch (
												((j.width = g.trgWidth),
												(j.height = g.trgHeight),
												e > 4 &&
													((j.width = g.trgHeight), (j.height = g.trgWidth)),
												e)
											) {
												case 2:
													k.translate(j.width, 0), k.scale(-1, 1);
													break;
												case 3:
													k.translate(j.width, j.height), k.rotate(Math.PI);
													break;
												case 4:
													k.translate(0, j.height), k.scale(1, -1);
													break;
												case 5:
													k.rotate(0.5 * Math.PI), k.scale(1, -1);
													break;
												case 6:
													k.rotate(0.5 * Math.PI), k.translate(0, -j.width);
													break;
												case 7:
													k.rotate(0.5 * Math.PI),
														k.translate(j.height, -j.width),
														k.scale(-1, 1);
													break;
												case 8:
													k.rotate(-0.5 * Math.PI), k.translate(-j.height, 0);
											}
											drawImageIOSFix(
												k,
												i,
												null != g.srcX ? g.srcX : 0,
												null != g.srcY ? g.srcY : 0,
												g.srcWidth,
												g.srcHeight,
												null != g.trgX ? g.trgX : 0,
												null != g.trgY ? g.trgY : 0,
												g.trgWidth,
												g.trgHeight
											);
											var l = j.toDataURL("image/png");
											if (null != f) return f(l, j);
										})
									);
								}),
								null != f && (i.onerror = f),
								(i.src = a.dataURL)
							);
						},
					},
					{
						key: "processQueue",
						value: function () {
							var a = this.options.parallelUploads,
								b = this.getUploadingFiles().length,
								c = b;
							if (!(b >= a)) {
								var d = this.getQueuedFiles();
								if (d.length > 0) {
									if (this.options.uploadMultiple)
										return this.processFiles(d.slice(0, a - b));
									for (; c < a; ) {
										if (!d.length) return;
										this.processFile(d.shift()), c++;
									}
								}
							}
						},
					},
					{
						key: "processFile",
						value: function (a) {
							return this.processFiles([a]);
						},
					},
					{
						key: "processFiles",
						value: function (a) {
							for (var c = a, d = 0, c = c; ; ) {
								var e;
								if (d >= c.length) break;
								e = c[d++];
								var f = e;
								(f.processing = !0),
									(f.status = b.UPLOADING),
									this.emit("processing", f);
							}
							return (
								this.options.uploadMultiple &&
									this.emit("processingmultiple", a),
								this.uploadFiles(a)
							);
						},
					},
					{
						key: "_getFilesWithXhr",
						value: function (a) {
							return this.files
								.filter(function (b) {
									return b.xhr === a;
								})
								.map(function (a) {
									return a;
								});
						},
					},
					{
						key: "cancelUpload",
						value: function (a) {
							if (a.status === b.UPLOADING) {
								for (
									var c = this._getFilesWithXhr(a.xhr), d = c, e = 0, d = d;
									;

								) {
									var f;
									if (e >= d.length) break;
									f = d[e++];
									f.status = b.CANCELED;
								}
								void 0 !== a.xhr && a.xhr.abort();
								for (var g = c, h = 0, g = g; ; ) {
									var i;
									if (h >= g.length) break;
									i = g[h++];
									var j = i;
									this.emit("canceled", j);
								}
								this.options.uploadMultiple && this.emit("canceledmultiple", c);
							} else
								(a.status !== b.ADDED && a.status !== b.QUEUED) ||
									((a.status = b.CANCELED),
									this.emit("canceled", a),
									this.options.uploadMultiple &&
										this.emit("canceledmultiple", [a]));
							if (this.options.autoProcessQueue) return this.processQueue();
						},
					},
					{
						key: "resolveOption",
						value: function (a) {
							if ("function" == typeof a) {
								for (
									var b = arguments.length, c = Array(b > 1 ? b - 1 : 0), d = 1;
									d < b;
									d++
								)
									c[d - 1] = arguments[d];
								return a.apply(this, c);
							}
							return a;
						},
					},
					{
						key: "uploadFile",
						value: function (a) {
							return this.uploadFiles([a]);
						},
					},
					{
						key: "uploadFiles",
						value: function (a) {
							var c = this;
							this._transformFiles(a, function (d) {
								if (a[0].upload.chunked) {
									var e = a[0],
										f = d[0],
										g = 0;
									e.upload.chunks = [];
									var h = function () {
										for (var d = 0; void 0 !== e.upload.chunks[d]; ) d++;
										if (!(d >= e.upload.totalChunkCount)) {
											g++;
											var h = d * c.options.chunkSize,
												i = Math.min(h + c.options.chunkSize, e.size),
												j = {
													name: c._getParamName(0),
													data: f.webkitSlice
														? f.webkitSlice(h, i)
														: f.slice(h, i),
													filename: e.upload.filename,
													chunkIndex: d,
												};
											(e.upload.chunks[d] = {
												file: e,
												index: d,
												dataBlock: j,
												status: b.UPLOADING,
												progress: 0,
												retries: 0,
											}),
												c._uploadData(a, [j]);
										}
									};
									if (
										((e.upload.finishedChunkUpload = function (d) {
											var f = !0;
											(d.status = b.SUCCESS),
												(d.dataBlock = null),
												(d.xhr = null);
											for (var g = 0; g < e.upload.totalChunkCount; g++) {
												if (void 0 === e.upload.chunks[g]) return h();
												e.upload.chunks[g].status !== b.SUCCESS && (f = !1);
											}
											f &&
												c.options.chunksUploaded(e, function () {
													c._finished(a, "", null);
												});
										}),
										c.options.parallelChunkUploads)
									)
										for (var i = 0; i < e.upload.totalChunkCount; i++) h();
									else h();
								} else {
									for (var j = [], k = 0; k < a.length; k++)
										j[k] = {
											name: c._getParamName(k),
											data: d[k],
											filename: a[k].upload.filename,
										};
									c._uploadData(a, j);
								}
							});
						},
					},
					{
						key: "_getChunk",
						value: function (a, b) {
							for (var c = 0; c < a.upload.totalChunkCount; c++)
								if (
									void 0 !== a.upload.chunks[c] &&
									a.upload.chunks[c].xhr === b
								)
									return a.upload.chunks[c];
						},
					},
					{
						key: "_uploadData",
						value: function (a, c) {
							for (
								var d = this, e = new XMLHttpRequest(), f = a, g = 0, f = f;
								;

							) {
								var h;
								if (g >= f.length) break;
								h = f[g++];
								h.xhr = e;
							}
							a[0].upload.chunked &&
								(a[0].upload.chunks[c[0].chunkIndex].xhr = e);
							var i = this.resolveOption(this.options.method, a),
								j = this.resolveOption(this.options.url, a);
							e.open(i, j, !0),
								(e.timeout = this.resolveOption(this.options.timeout, a)),
								(e.withCredentials = !!this.options.withCredentials),
								(e.onload = function (b) {
									d._finishedUploading(a, e, b);
								}),
								(e.onerror = function () {
									d._handleUploadError(a, e);
								}),
								((null != e.upload ? e.upload : e).onprogress = function (b) {
									return d._updateFilesUploadProgress(a, e, b);
								});
							var k = {
								Accept: "application/json",
								"Cache-Control": "no-cache",
								"X-Requested-With": "XMLHttpRequest",
							};
							this.options.headers && b.extend(k, this.options.headers);
							for (var l in k) {
								var m = k[l];
								m && e.setRequestHeader(l, m);
							}
							var n = new FormData();
							if (this.options.params) {
								var o = this.options.params;
								"function" == typeof o &&
									(o = o.call(
										this,
										a,
										e,
										a[0].upload.chunked ? this._getChunk(a[0], e) : null
									));
								for (var p in o) {
									var q = o[p];
									n.append(p, q);
								}
							}
							for (var r = a, s = 0, r = r; ; ) {
								var t;
								if (s >= r.length) break;
								t = r[s++];
								var u = t;
								this.emit("sending", u, e, n);
							}
							this.options.uploadMultiple &&
								this.emit("sendingmultiple", a, e, n),
								this._addFormElementData(n);
							for (var v = 0; v < c.length; v++) {
								var w = c[v];
								n.append(w.name, w.data, w.filename);
							}
							this.submitRequest(e, n, a);
						},
					},
					{
						key: "_transformFiles",
						value: function (a, b) {
							for (var c = this, d = [], e = 0, f = 0; f < a.length; f++)
								!(function (f) {
									c.options.transformFile.call(c, a[f], function (c) {
										(d[f] = c), ++e === a.length && b(d);
									});
								})(f);
						},
					},
					{
						key: "_addFormElementData",
						value: function (a) {
							if ("FORM" === this.element.tagName)
								for (
									var b = this.element.querySelectorAll(
											"input, textarea, select, button"
										),
										c = 0,
										b = b;
									;

								) {
									var d;
									if (c >= b.length) break;
									d = b[c++];
									var e = d,
										f = e.getAttribute("name"),
										g = e.getAttribute("type");
									if ((g && (g = g.toLowerCase()), void 0 !== f && null !== f))
										if ("SELECT" === e.tagName && e.hasAttribute("multiple"))
											for (var h = e.options, i = 0, h = h; ; ) {
												var j;
												if (i >= h.length) break;
												j = h[i++];
												var k = j;
												k.selected && a.append(f, k.value);
											}
										else
											(!g ||
												("checkbox" !== g && "radio" !== g) ||
												e.checked) &&
												a.append(f, e.value);
								}
						},
					},
					{
						key: "_updateFilesUploadProgress",
						value: function (a, b, c) {
							var d = void 0;
							if (void 0 !== c) {
								if (((d = (100 * c.loaded) / c.total), a[0].upload.chunked)) {
									var e = a[0],
										f = this._getChunk(e, b);
									(f.progress = d),
										(f.total = c.total),
										(f.bytesSent = c.loaded);
									(e.upload.progress = 0),
										(e.upload.total = 0),
										(e.upload.bytesSent = 0);
									for (var g = 0; g < e.upload.totalChunkCount; g++)
										void 0 !== e.upload.chunks[g] &&
											void 0 !== e.upload.chunks[g].progress &&
											((e.upload.progress += e.upload.chunks[g].progress),
											(e.upload.total += e.upload.chunks[g].total),
											(e.upload.bytesSent += e.upload.chunks[g].bytesSent));
									e.upload.progress =
										e.upload.progress / e.upload.totalChunkCount;
								} else
									for (var h = a, i = 0, h = h; ; ) {
										var j;
										if (i >= h.length) break;
										j = h[i++];
										var k = j;
										(k.upload.progress = d),
											(k.upload.total = c.total),
											(k.upload.bytesSent = c.loaded);
									}
								for (var l = a, m = 0, l = l; ; ) {
									var n;
									if (m >= l.length) break;
									n = l[m++];
									var o = n;
									this.emit(
										"uploadprogress",
										o,
										o.upload.progress,
										o.upload.bytesSent
									);
								}
							} else {
								var p = !0;
								d = 100;
								for (var q = a, r = 0, q = q; ; ) {
									var s;
									if (r >= q.length) break;
									s = q[r++];
									var t = s;
									(100 === t.upload.progress &&
										t.upload.bytesSent === t.upload.total) ||
										(p = !1),
										(t.upload.progress = d),
										(t.upload.bytesSent = t.upload.total);
								}
								if (p) return;
								for (var u = a, v = 0, u = u; ; ) {
									var w;
									if (v >= u.length) break;
									w = u[v++];
									var x = w;
									this.emit("uploadprogress", x, d, x.upload.bytesSent);
								}
							}
						},
					},
					{
						key: "_finishedUploading",
						value: function (a, c, d) {
							var e = void 0;
							if (a[0].status !== b.CANCELED && 4 === c.readyState) {
								if (
									"arraybuffer" !== c.responseType &&
									"blob" !== c.responseType &&
									((e = c.responseText),
									c.getResponseHeader("content-type") &&
										~c
											.getResponseHeader("content-type")
											.indexOf("application/json"))
								)
									try {
										e = JSON.parse(e);
									} catch (a) {
										(d = a), (e = "Invalid JSON response from server.");
									}
								this._updateFilesUploadProgress(a),
									200 <= c.status && c.status < 300
										? a[0].upload.chunked
											? a[0].upload.finishedChunkUpload(this._getChunk(a[0], c))
											: this._finished(a, e, d)
										: this._handleUploadError(a, c, e);
							}
						},
					},
					{
						key: "_handleUploadError",
						value: function (a, c, d) {
							if (a[0].status !== b.CANCELED) {
								if (a[0].upload.chunked && this.options.retryChunks) {
									var e = this._getChunk(a[0], c);
									if (e.retries++ < this.options.retryChunksLimit)
										return void this._uploadData(a, [e.dataBlock]);
									console.warn("Retried this chunk too often. Giving up.");
								}
								for (var f = a, g = 0, f = f; ; ) {
									if (g >= f.length) break;
									f[g++];
									this._errorProcessing(
										a,
										d ||
											this.options.dictResponseError.replace(
												"{{statusCode}}",
												c.status
											),
										c
									);
								}
							}
						},
					},
					{
						key: "submitRequest",
						value: function (a, b, c) {
							a.send(b);
						},
					},
					{
						key: "_finished",
						value: function (a, c, d) {
							for (var e = a, f = 0, e = e; ; ) {
								var g;
								if (f >= e.length) break;
								g = e[f++];
								var h = g;
								(h.status = b.SUCCESS),
									this.emit("success", h, c, d),
									this.emit("complete", h);
							}
							if (
								(this.options.uploadMultiple &&
									(this.emit("successmultiple", a, c, d),
									this.emit("completemultiple", a)),
								this.options.autoProcessQueue)
							)
								return this.processQueue();
						},
					},
					{
						key: "_errorProcessing",
						value: function (a, c, d) {
							for (var e = a, f = 0, e = e; ; ) {
								var g;
								if (f >= e.length) break;
								g = e[f++];
								var h = g;
								(h.status = b.ERROR),
									this.emit("error", h, c, d),
									this.emit("complete", h);
							}
							if (
								(this.options.uploadMultiple &&
									(this.emit("errormultiple", a, c, d),
									this.emit("completemultiple", a)),
								this.options.autoProcessQueue)
							)
								return this.processQueue();
						},
					},
				],
				[
					{
						key: "uuidv4",
						value: function () {
							return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
								/[xy]/g,
								function (a) {
									var b = (16 * Math.random()) | 0;
									return ("x" === a ? b : (3 & b) | 8).toString(16);
								}
							);
						},
					},
				]
			),
			b
		);
	})(Emitter);
Dropzone.initClass(),
	(Dropzone.version = "5.5.0"),
	(Dropzone.options = {}),
	(Dropzone.optionsForElement = function (a) {
		return a.getAttribute("id")
			? Dropzone.options[camelize(a.getAttribute("id"))]
			: void 0;
	}),
	(Dropzone.instances = []),
	(Dropzone.forElement = function (a) {
		if (
			("string" == typeof a && (a = document.querySelector(a)),
			null == (null != a ? a.dropzone : void 0))
		)
			throw new Error(
				"No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone."
			);
		return a.dropzone;
	}),
	(Dropzone.autoDiscover = !0),
	(Dropzone.discover = function () {
		var a = void 0;
		if (document.querySelectorAll) a = document.querySelectorAll(".dropzone");
		else {
			a = [];
			var b = function (b) {
				return (function () {
					for (var c = [], d = b, e = 0, d = d; ; ) {
						var f;
						if (e >= d.length) break;
						f = d[e++];
						var g = f;
						/(^| )dropzone($| )/.test(g.className)
							? c.push(a.push(g))
							: c.push(void 0);
					}
					return c;
				})();
			};
			b(document.getElementsByTagName("div")),
				b(document.getElementsByTagName("form"));
		}
		return (function () {
			for (var b = [], c = a, d = 0, c = c; ; ) {
				var e;
				if (d >= c.length) break;
				e = c[d++];
				var f = e;
				!1 !== Dropzone.optionsForElement(f)
					? b.push(new Dropzone(f))
					: b.push(void 0);
			}
			return b;
		})();
	}),
	(Dropzone.blacklistedBrowsers = [
		/opera.*(Macintosh|Windows Phone).*version\/12/i,
	]),
	(Dropzone.isBrowserSupported = function () {
		var a = !0;
		if (
			window.File &&
			window.FileReader &&
			window.FileList &&
			window.Blob &&
			window.FormData &&
			document.querySelector
		)
			if ("classList" in document.createElement("a"))
				for (var b = Dropzone.blacklistedBrowsers, c = 0, b = b; ; ) {
					var d;
					if (c >= b.length) break;
					d = b[c++];
					var e = d;
					e.test(navigator.userAgent) && (a = !1);
				}
			else a = !1;
		else a = !1;
		return a;
	}),
	(Dropzone.dataURItoBlob = function (a) {
		for (
			var b = atob(a.split(",")[1]),
				c = a.split(",")[0].split(":")[1].split(";")[0],
				d = new ArrayBuffer(b.length),
				e = new Uint8Array(d),
				f = 0,
				g = b.length,
				h = 0 <= g;
			h ? f <= g : f >= g;
			h ? f++ : f--
		)
			e[f] = b.charCodeAt(f);
		return new Blob([d], { type: c });
	});
var without = function (a, b) {
		return a
			.filter(function (a) {
				return a !== b;
			})
			.map(function (a) {
				return a;
			});
	},
	camelize = function (a) {
		return a.replace(/[\-_](\w)/g, function (a) {
			return a.charAt(1).toUpperCase();
		});
	};
(Dropzone.createElement = function (a) {
	var b = document.createElement("div");
	return (b.innerHTML = a), b.childNodes[0];
}),
	(Dropzone.elementInside = function (a, b) {
		if (a === b) return !0;
		for (; (a = a.parentNode); ) if (a === b) return !0;
		return !1;
	}),
	(Dropzone.getElement = function (a, b) {
		var c = void 0;
		if (
			("string" == typeof a
				? (c = document.querySelector(a))
				: null != a.nodeType && (c = a),
			null == c)
		)
			throw new Error(
				"Invalid `" +
					b +
					"` option provided. Please provide a CSS selector or a plain HTML element."
			);
		return c;
	}),
	(Dropzone.getElements = function (a, b) {
		var c = void 0,
			d = void 0;
		if (a instanceof Array) {
			d = [];
			try {
				for (var e = a, f = 0, e = e; !(f >= e.length); )
					(c = e[f++]), d.push(this.getElement(c, b));
			} catch (a) {
				d = null;
			}
		} else if ("string" == typeof a) {
			d = [];
			for (
				var g = document.querySelectorAll(a), h = 0, g = g;
				!(h >= g.length);

			)
				(c = g[h++]), d.push(c);
		} else null != a.nodeType && (d = [a]);
		if (null == d || !d.length)
			throw new Error(
				"Invalid `" +
					b +
					"` option provided. Please provide a CSS selector, a plain HTML element or a list of those."
			);
		return d;
	}),
	(Dropzone.confirm = function (a, b, c) {
		return window.confirm(a) ? b() : null != c ? c() : void 0;
	}),
	(Dropzone.isValidFile = function (a, b) {
		if (!b) return !0;
		b = b.split(",");
		for (var c = a.type, d = c.replace(/\/.*$/, ""), e = b, f = 0, e = e; ; ) {
			var g;
			if (f >= e.length) break;
			g = e[f++];
			var h = g;
			if (((h = h.trim()), "." === h.charAt(0))) {
				if (
					-1 !==
					a.name
						.toLowerCase()
						.indexOf(h.toLowerCase(), a.name.length - h.length)
				)
					return !0;
			} else if (/\/\*$/.test(h)) {
				if (d === h.replace(/\/.*$/, "")) return !0;
			} else if (c === h) return !0;
		}
		return !1;
	}),
	"undefined" != typeof jQuery &&
		null !== jQuery &&
		(jQuery.fn.dropzone = function (a) {
			return this.each(function () {
				return new Dropzone(this, a);
			});
		}),
	"undefined" != typeof module && null !== module
		? (module.exports = Dropzone)
		: (window.Dropzone = Dropzone),
	(Dropzone.ADDED = "added"),
	(Dropzone.QUEUED = "queued"),
	(Dropzone.ACCEPTED = Dropzone.QUEUED),
	(Dropzone.UPLOADING = "uploading"),
	(Dropzone.PROCESSING = Dropzone.UPLOADING),
	(Dropzone.CANCELED = "canceled"),
	(Dropzone.ERROR = "error"),
	(Dropzone.SUCCESS = "success");
var detectVerticalSquash = function (a) {
		var b = (a.naturalWidth, a.naturalHeight),
			c = document.createElement("canvas");
		(c.width = 1), (c.height = b);
		var d = c.getContext("2d");
		d.drawImage(a, 0, 0);
		for (
			var e = d.getImageData(1, 0, 1, b), f = e.data, g = 0, h = b, i = b;
			i > g;

		) {
			0 === f[4 * (i - 1) + 3] ? (h = i) : (g = i), (i = (h + g) >> 1);
		}
		var j = i / b;
		return 0 === j ? 1 : j;
	},
	drawImageIOSFix = function (a, b, c, d, e, f, g, h, i, j) {
		var k = detectVerticalSquash(b);
		return a.drawImage(b, c, d, e, f, g, h, i, j / k);
	},
	ExifRestore = (function () {
		function a() {
			_classCallCheck(this, a);
		}
		return (
			_createClass(a, null, [
				{
					key: "initClass",
					value: function () {
						this.KEY_STR =
							"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
					},
				},
				{
					key: "encode64",
					value: function (a) {
						for (
							var b = "",
								c = void 0,
								d = void 0,
								e = "",
								f = void 0,
								g = void 0,
								h = void 0,
								i = "",
								j = 0;
							;

						)
							if (
								((c = a[j++]),
								(d = a[j++]),
								(e = a[j++]),
								(f = c >> 2),
								(g = ((3 & c) << 4) | (d >> 4)),
								(h = ((15 & d) << 2) | (e >> 6)),
								(i = 63 & e),
								isNaN(d) ? (h = i = 64) : isNaN(e) && (i = 64),
								(b =
									b +
									this.KEY_STR.charAt(f) +
									this.KEY_STR.charAt(g) +
									this.KEY_STR.charAt(h) +
									this.KEY_STR.charAt(i)),
								(c = d = e = ""),
								(f = g = h = i = ""),
								!(j < a.length))
							)
								break;
						return b;
					},
				},
				{
					key: "restore",
					value: function (a, b) {
						if (!a.match("data:image/jpeg;base64,")) return b;
						var c = this.decode64(a.replace("data:image/jpeg;base64,", "")),
							d = this.slice2Segments(c),
							e = this.exifManipulation(b, d);
						return "data:image/jpeg;base64," + this.encode64(e);
					},
				},
				{
					key: "exifManipulation",
					value: function (a, b) {
						var c = this.getExifArray(b),
							d = this.insertExif(a, c);
						return new Uint8Array(d);
					},
				},
				{
					key: "getExifArray",
					value: function (a) {
						for (var b = void 0, c = 0; c < a.length; ) {
							if (((b = a[c]), (255 === b[0]) & (225 === b[1]))) return b;
							c++;
						}
						return [];
					},
				},
				{
					key: "insertExif",
					value: function (a, b) {
						var c = a.replace("data:image/jpeg;base64,", ""),
							d = this.decode64(c),
							e = d.indexOf(255, 3),
							f = d.slice(0, e),
							g = d.slice(e),
							h = f;
						return (h = h.concat(b)), (h = h.concat(g));
					},
				},
				{
					key: "slice2Segments",
					value: function (a) {
						for (var b = 0, c = []; ; ) {
							var d;
							if ((255 === a[b]) & (218 === a[b + 1])) break;
							if ((255 === a[b]) & (216 === a[b + 1])) b += 2;
							else {
								d = 256 * a[b + 2] + a[b + 3];
								var e = b + d + 2,
									f = a.slice(b, e);
								c.push(f), (b = e);
							}
							if (b > a.length) break;
						}
						return c;
					},
				},
				{
					key: "decode64",
					value: function (a) {
						var b = void 0,
							c = void 0,
							d = "",
							e = void 0,
							f = void 0,
							g = void 0,
							h = "",
							i = 0,
							j = [],
							k = /[^A-Za-z0-9\+\/\=]/g;
						for (
							k.exec(a) &&
								console.warn(
									"There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."
								),
								a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
							;

						)
							if (
								((e = this.KEY_STR.indexOf(a.charAt(i++))),
								(f = this.KEY_STR.indexOf(a.charAt(i++))),
								(g = this.KEY_STR.indexOf(a.charAt(i++))),
								(h = this.KEY_STR.indexOf(a.charAt(i++))),
								(b = (e << 2) | (f >> 4)),
								(c = ((15 & f) << 4) | (g >> 2)),
								(d = ((3 & g) << 6) | h),
								j.push(b),
								64 !== g && j.push(c),
								64 !== h && j.push(d),
								(b = c = d = ""),
								(e = f = g = h = ""),
								!(i < a.length))
							)
								break;
						return j;
					},
				},
			]),
			a
		);
	})();
ExifRestore.initClass();
var contentLoaded = function (a, b) {
	var c = !1,
		d = !0,
		e = a.document,
		f = e.documentElement,
		g = e.addEventListener ? "addEventListener" : "attachEvent",
		h = e.addEventListener ? "removeEventListener" : "detachEvent",
		i = e.addEventListener ? "" : "on",
		j = function d(f) {
			if ("readystatechange" !== f.type || "complete" === e.readyState)
				return (
					("load" === f.type ? a : e)[h](i + f.type, d, !1),
					!c && (c = !0) ? b.call(a, f.type || f) : void 0
				);
		};
	if ("complete" !== e.readyState) {
		if (e.createEventObject && f.doScroll) {
			try {
				d = !a.frameElement;
			} catch (a) {}
			d &&
				(function a() {
					try {
						f.doScroll("left");
					} catch (b) {
						return void setTimeout(a, 50);
					}
					return j("poll");
				})();
		}
		return (
			e[g](i + "DOMContentLoaded", j, !1),
			e[g](i + "readystatechange", j, !1),
			a[g](i + "load", j, !1)
		);
	}
};
(Dropzone._autoDiscoverFunction = function () {
	if (Dropzone.autoDiscover) return Dropzone.discover();
}),
	contentLoaded(window, Dropzone._autoDiscoverFunction);
var checkExecute = !1,
	checkSubmitMember = !1,
	chkFirstErr = !1,
	resetTextDropdown = !1,
	blank_inp = "กรุณากรอกข้อมูล",
	blank_sl = "กรุณาระบุข้อมูล",
	txtValidate = {};
txtValidate["username"] = {
	blank: blank_inp,
	error: "ชื่อผู้ใช้ไม่ถูกต้อง",
	error1: "ชื่อผู้ใช้นี้ถูกใช้แล้ว",
	width_error: "",
	width_error1: "",
};
txtValidate["phone"] = {
	blank: blank_inp,
	error: "เบอร์โทรศัพท์ไม่ถูกต้อง",
	error1: "เบอร์โทรศัพท์นี้ถูกใช้แล้ว",
	error2: "กรุณารอสักครู่",
	error3: "ปัจจุบันใช้เบอร์โทรศัพท์นี้อยู่",
	width_blank: "",
	width_error: "150px",
	width_error1: "135px",
	width_error3: "150px",
};
txtValidate["phone_verify"] = {
	blank: blank_inp,
	error: "เบอร์โทรศัพท์ยังไม่ได้ยืนยัน",
	error1: "",
	error2: "",
	error3: "",
	width_blank: "",
	width_error: "150px",
	width_error1: "135px",
	width_error3: "150px",
};
txtValidate["otp"] = {
	blank: "กรุณากรอกรหัส OTP",
	error: "รหัส OTP ไม่ถูกต้อง กรุณากรอกรหัส OTP อีกครั้ง",
	error2: "รหัส OTP หมดอายุ โปรดขอรหัส OTP ใหม่อีกครั้ง",
	error3: "จำนวนการกรอก OTP เกินกำหนด กรุณารอสักครู่",
	width_error: "",
	width_error4: "100px",
};
txtValidate["email"] = {
	blank: blank_inp,
	error: "รูปแบบอีเมลไม่ถูกต้อง",
	error2: "มีอีเมลนี้อยู่ในระบบแล้ว",
	error3:
		"กรุณายืนยนตัวตน หากต้องการรับอีเมลใหม่คลิก <span class='btn-send under-gold' onclick='sendVerify();'>ที่นี่</span>",
	error4: "มีอีเมลนี้อยู่ในระบบแล้ว กรุณาเข้าระบบแบบพนักงาน",
	width_error: "125px",
	width_error2: "130px",
};
txtValidate["password"] = {
	blank: "กรุณากรอกรหัสผ่าน",
	error:
		"รหัสผ่านต้องมีตัวอักษรอย่างน้อย 8 ตัวอักษร ประกอบไปด้วย A-Z, a-z, 0-9",
	error2: "รหัสผ่านใหม่ต้องไม่เหมือนกับรหัสผ่านปัจจุบัน",
	error3: "รหัสผ่านของคุณไม่ถูกต้อง",
	width: "",
	width_error: "240px",
	width_error2: "225px",
	width_error3: "140px",
};
txtValidate["cf_password"] = {
	blank: "กรุณากรอกยืนยันรหัสผ่าน",
	error: "รหัสผ่านของคุณไม่ตรงกัน",
	width_blank: "140px",
	width_error: "145px",
};
txtValidate["old_password"] = {
	blank: "กรุณากรอกรหัสผ่านเดิม",
	error: "รหัสผ่านเดิมของคุณไม่ถูกต้อง",
	width_error: "",
};
txtValidate["status"] = {
	blank: "กรุณาระบุสถานภาพ",
	error: "",
	width_error: "",
};
txtValidate["name"] = {
	blank: blank_inp,
	error: "กรุณากรอกตัวอักษรภาษาไทยเท่านั้น",
	width_error: "187px",
};
txtValidate["lastname"] = {
	blank: blank_inp,
	error: "กรุณากรอกตัวอักษรภาษาไทยเท่านั้น",
	width_error: "187px",
};
txtValidate["name_th"] = {
	blank: blank_inp,
	error: "กรุณากรอกตัวอักษรภาษาไทยเท่านั้น",
	width_error: "187px",
};
txtValidate["lastname_th"] = {
	blank: blank_inp,
	error: "กรุณากรอกตัวอักษรภาษาไทยเท่านั้น",
	width_error: "187px",
};
txtValidate["full_name"] = {
	blank: blank_inp,
	error: "ชื่อและนามสกุลของคุณถูกใช้งานแล้ว",
	width_error: "187px",
};
txtValidate["mobile"] = {
	blank: blank_inp,
	error: "เบอร์โทรศัพท์ไม่ถูกต้อง",
	width_error: "125px",
};
txtValidate["text"] = { blank: blank_inp, width_error: "" };
txtValidate["select"] = { blank: blank_sl, width_error: "" };
txtValidate["position"] = { blank: blank_sl, width_error: "" };
txtValidate["password-login"] = { blank: blank_inp, error: "", width: "" };
txtValidate["username-login"] = { blank: blank_inp, error: "", width: "" };
txtValidate["idcard-login"] = { blank: blank_inp, error: "", width: "" };
txtValidate["username-idcard-email"] = {
	blank: blank_inp,
	error: "ข้อมูลไม่ถูกต้อง",
	width: "",
};
txtValidate["username-idcard-phone"] = {
	blank: blank_inp,
	error: "ข้อมูลไม่ถูกต้อง",
	width: "",
};
txtValidate["pin"] = {
	blank: blank_inp,
	error: "PIN ของคุณไม่ถูกต้อง",
	error1: "ยืนยัน PIN ใหม่ไม่เหมือนกับ PIN ใหม่",
	error2: "PIN ใหม่ต้องไม่เหมือนกับ PIN ปัจจุบัน",
	width_error1: "135px",
	width_error2: "150px",
};
txtValidate["cf_pin"] = {
	blank: blank_inp,
	error: "PIN ของคุณไม่ตรงกัน",
	width_error: "120px",
};
txtValidate["municipality_code"] = {
	blank: blank_inp,
	error: "กรุณากรอกหมายเลขรหัสหน่วยงาน 7-8 หลัก",
	width_error: "130px",
};
txtValidate["id_card"] = {
	blank: blank_inp,
	error1: "ระบุหมายเลขบัตรประชาชนให้ครบ 13 หลัก",
	error2: "มีหมายเลขบัตรประชาชนนี้อยู่ในระบบแล้ว",
	error3: "เลขบัตรประชาชนไม่ถูกต้อง",
	error4: "เลขบัตรประชาชนนี้ถูกใช้แล้ว",
	width_error: "215px",
	width_blank: "100px",
	width_error2: "210px",
	width_error3: "148px",
	width_error4: "152px",
};
txtValidate["id_card_zero"] = {
	blank: blank_inp,
	error1: "ระบุหมายเลขบัตรประชาชนให้ครบ 13 หลัก",
	error2: "มีหมายเลขบัตรประชาชนนี้อยู่ในระบบแล้ว",
	error3: "เลขบัตรประชาชนไม่ถูกต้อง",
	error4: "เลขบัตรประชาชนนี้ถูกใช้แล้ว",
	width_error: "215px",
	width_blank: "100px",
	width_error2: "210px",
	width_error3: "148px",
	width_error4: "152px",
};
txtValidate["prefix"] = { blank: blank_inp, error: "", width_error: "190px" };
txtValidate["time"] = {
	blank: blank_inp,
	error: "รูปแบบเวลาไม่ถูกต้อง",
	width_error: "130px",
};
txtValidate["reserve_book"] = {
	blank: "กรุณาเลือกเล่มทะเบียนหนังสือจอง",
	error: "กรุณาเลือกเล่มทะเบียนหนังสือจอง",
	width_blank: "187px",
	width_error: "187px",
};
var checkScroll = !1,
	hasLoadRecaptcha = !1,
	chk_hasSubmit = !1,
	inputP = $(".password input"),
	inputC = $(".input-c input"),
	errGroup = !1,
	verifyPhone = !1;
$(document).ready(function () {
	initCheckData();
	initDropdown(callBackSelect);
	initFocus();
	initBlur();
	numberOnly();
	addressNumberOnly();
	initInpPassword();
	if (typeof grecaptcha != "undefined") {
		grecaptcha.reset(widget);
	}
	if ($(".inp-amount").length > 0) {
		amountOnly();
	}
});
$(document).click((event) => {
	if (!$(event.target).closest("iframe #rc-imageselect").length) {
		if (checkExecute) {
			checkSubmitMember = !1;
		}
	}
	if ($(".g-recaptcha").length > 0 && !hasLoadRecaptcha) {
		hasLoadRecaptcha = !0;
		loadMainScript(
			"call-captcha",
			"https://www.google.com/recaptcha/api.js?onload=CaptchaCallback&render=explicit"
		);
	}
});
function initCheckData() {
	var e = $("form input, form textarea");
	$.each(e, function (e, t) {
		if ($(t).val() && $(t).val() != "-undefined-undefined") {
			$(t).parent().addClass("has-dt");
		}
	});
}
function initDropdown(e) {
	var t = $(".box-select");
	if (t.length > 0) {
		$(".box-select .nav-input").unbind("click");
		$(".box-select .nav-input").click(function () {
			$(".box-select").not($(this).parent()).removeClass("active");
			var e = $(this).parents(".box-inp");
			$(this).parent().toggleClass("active");
			t.parents(".box-inp").removeClass("focus-inp");
			e.addClass("focus-inp");
			e.removeClass("error");
			if (e.parent().hasClass("group-inp")) {
				e.parent().removeClass("error");
			}
		});
		$(".nav-select ul li:not(.li-main)").unbind("click");
		$(".nav-select ul li:not(.li-main)").click(function () {
			var t = $(this),
				a = t.data("value"),
				p = t.data("job-position"),
				f = t.data("full-name"),
				m = t.data("name-title"),
				u = " (" + m + f + ")\n" + p,
				g = t.find("span").text(),
				n = t.data("other"),
				s = t.text(),
				r = t.parents(".box-select").find("input").attr("name");
			t.parents(".lvl1").find("li").removeClass("active");
			t.parents(".box-inp").removeClass("focus-inp");
			if (a != "") {
				t.addClass("active");
				t.parents(".box-select").find("input").val(a);
				t.parents(".box-select").find(".nav-input").text(s);
				t.parents(".box-inp").addClass("has-dt");
				t.parents(".box-inp").removeClass("error");
				t.parents(".box-select").removeClass("active");
				if (t.parents(".box-inp").hasClass("has-delete")) {
					t.parents(".box-select").find(".ic-arr.clear").removeClass("hide");
					t.parents(".box-select")
						.find(".ic-arr.icon-arrow-dropdown")
						.addClass("hide");
				}
			}
			if (r == "pp_province") {
				t.parents(".box-select").find("input[name=keyword_province]").val(s);
				for (i = 0; i < $("li").length; i++) {
					$("li")[i].style.display = "";
				}
				$("input[name=keyword_district]").val("");
			}
			if (r == "pp_district") {
				t.parents(".box-select").find("input[name=keyword_district]").val(s);
				for (i = 0; i < $("li").length; i++) {
					$("li")[i].style.display = "";
				}
			}
			if (r == "member_signer_id") {
				var v = g.split(" "),
					h = [1],
					b = h.map((i) => v[i]),
					d = b.toString(),
					k = d.substring(1, d.length - 2),
					c = $(".input-sec input[name=member_signer_type]");
				if (c.val() != "ผู้ลงนาม") {
					u = " (" + m + f + ") " + c.val() + "\n" + p;
				}
				$("#job_position").val(u);
				$("#job_position").parents(".box-inp").addClass("has-dt");
			}
			if (r == "book_type") {
				$("#middle_saraban").trigger("change");
				$("#from_date").removeClass("required");
				$("#to_date").removeClass("required");
				$("#from_date").parent().addClass("disable");
				$("#to_date").parent().addClass("disable");
				$("#from_department").parents(".box-inp").removeClass("disable");
				$("#to_department").parents(".box-inp").removeClass("disable");
				$("[name=department_id]").parents(".box-inp").removeClass("disable");
				$("input[name=type_date]").val("");
				$("input[name=type_date]")
					.parents(".box-select")
					.find(".nav-input")
					.text("");
				$("input[name=type_date]")
					.parents(".box-inp")
					.removeClass("has-dt disable");
				if (resetTextDropdown) {
					resetTextDropdown = !1;
					$("input[name=department_id]").val("");
					$("input[name=department_id]")
						.parents(".box-select")
						.find(".nav-input")
						.text("");
					$("input[name=department_id]")
						.parents(".box-inp")
						.removeClass("has-dt disable");
				}
				if (a == "command" || a == "announce" || a == "message") {
					$("#from_department").parents(".box-inp").addClass("disable");
					$("#to_department").parents(".box-inp").addClass("disable");
				} else if (a == "get") {
					$("#from_department").parents(".box-inp").removeClass("disable");
					$("#to_department").parents(".box-inp").addClass("disable");
					$("[name=department_id]").parents(".box-inp").addClass("disable");
					$("[name=department_id]")
						.parents(".box-inp")
						.find("li[data-value=00]")
						.trigger("click");
					resetTextDropdown = !0;
				} else if (a == "send") {
					$("#from_department").parents(".box-inp").addClass("disable");
				}
			}
			if (
				(r == "type_date" && a == "registration_date") ||
				a == "created_date"
			) {
				t.parents(".detail-section")
					.find("#from_date")
					.parent()
					.removeClass("disable");
				t.parents(".detail-section")
					.find("#to_date")
					.parent()
					.removeClass("disable");
				t.parents(".detail-section").find("#from_date").addClass("required");
				t.parents(".detail-section").find("#to_date").addClass("required");
			} else {
				t.parents(".detail-section").find("#from_date").removeClass("required");
				t.parents(".detail-section").find("#to_date").removeClass("required");
			}
			if (r == "book_type" || r == "book_format") {
				var l = $("input[name='book_type']").val(),
					o = $("input[name='book_format']").val();
				if (l == "send" && o == "internal") {
					$("#is_book_running_number").parent().addClass("hide");
					$("#is_book_front_number").parent().removeClass("hide");
				} else if (l == "send" && o == "external") {
					$("#is_book_front_number").parent().addClass("hide");
					$("#is_book_running_number").parent().removeClass("hide");
				}
				$("#is_book_front_number").prop("checked", !1).trigger("change");
				$("#is_book_running_number").prop("checked", !1).trigger("change");
			}
			if (r == "book_registration") {
				$("#book_num").val("");
				$("#circular_letter").prop("checked", !1).trigger("change");
				$("#book_num").parents(".box-inp").removeClass("has-dt");
			}
			if (n != "" && n != undefined) {
				a += "|" + n;
			}
			initBtnDelete();
			e(t, a);
			if (r == "member_signer_id") {
				t.parents(".box-select").find("input[name=keyword_name]").val(s);
				for (i = 0; i < $("li").length; i++) {
					$("li")[i].style.display = "";
				}
			}
		});
		$(document).on("click", function (e) {
			if (!t.is(e.target) && t.has(e.target).length === 0) {
				t.parents(".box-inp").removeClass("focus-inp");
				if (t.hasClass("active")) {
					t.removeClass("active");
				}
			} else if (!t.hasClass("active")) {
				t.parents(".box-inp").removeClass("focus-inp");
			}
		});
		initBtnDelete();
	}
}
function initBtnDelete() {
	$(".box-select .clear").unbind("click");
	$(".box-select .clear").click(function () {
		var t = $(this),
			e = t.parents(".dd-section");
		if (e.length < 1) {
			e = t.parents(".input-box");
		}
		var a = t.parents(".box-inp"),
			r = a.find("input"),
			i = r.attr("name");
		if (i == "level") {
			resetSelect("level", !0, e);
		} else if (i == "work") {
			resetSelect("work,level", !0, e);
			e.find(".input-box.level").hide();
		} else if (i == "party") {
			resetSelect("party,work,level", !0, e);
			e.find(".input-box.level").hide();
			e.find(".input-box.work").hide();
		}
		t.addClass("hide");
		a.find(".ic-arr.icon-arrow-dropdown").removeClass("hide");
	});
}
function initFocus() {
	$("form input, form textarea").unbind("focus");
	$("form input, form textarea").focus(function () {
		var e = $(this);
		if (!e.is("[readonly]")) {
			var a = e.parent(),
				i = e.val(),
				d = e.attr("name"),
				r = a.parent();
			if (r.hasClass("group-inp")) {
				r.removeClass("error");
				r.addClass("focus-inp");
			}
			if (!a.hasClass("dtp")) {
				a.removeClass("error");
				a.addClass("has-dt");
				a.addClass("focus-inp");
				if ($("#form_login").length) {
					$("#form_login").removeClass("error");
				}
			}
			if (e.hasClass("inp-amount")) {
				var t = i.replace(/,/g, "");
				e.val(t);
			}
			if (e.data("vld") == "time") {
				var i = e.val();
				if (i == "") {
					var s = new Date(),
						n = s.getHours(),
						l = s.getMinutes(),
						o = padleft(n, 2, 0) + ":" + padleft(l, 2, 0);
					e.val(o);
				}
			}
			if (e.parents(".pin-section").length) {
				e.parents(".pin-section").find(".sty-err").hide();
				e.parents(".pin-section").find(".box-inp-p").removeClass("error");
			}
			if (e.attr("type") == "radio") {
				$("form input[name=" + d + "]").removeClass("error");
			}
		}
		if (e.hasClass("autocomplete_document_type")) {
			e.autocomplete("search", "");
		}
		if (e.hasClass("citizen-id") || e.hasClass("bank-number")) {
			var t = i.replace(/-/g, "");
			e.val(t);
		} else if (e.hasClass("phone-number")) {
			var t = i.replace(/ /g, "");
			e.val(t);
		}
	});
}
function initBlur() {
	$("form input, form textarea").unbind("blur");
	$("form input, form textarea").blur(function () {
		var e = $(this),
			i = e.val(),
			a = e.parent(),
			r = a.parent();
		a.removeClass("focus-inp");
		if (r.hasClass("group-inp")) {
			r.removeClass("focus-inp");
		}
		if (i == "") {
			a.removeClass("valid");
			a.removeClass("has-dt");
		} else if (e.hasClass("inp-amount")) {
			var s = i.replace(/,/g, ""),
				t = numberWithCommas(s);
			e.val(t);
		} else if (e.hasClass("citizen-id")) {
			var t = formatCitizenID(i);
			e.val(t);
		} else if (e.hasClass("phone-number")) {
			var t = formatPhone(i);
			e.val(t);
		} else if (e.hasClass("bank-number")) {
			var t = formatBankNumber(i);
			e.val(t);
		}
	});
}
function chkFormMember(e, t, i) {
	chkFirstErr = !1;
	errGroup = !1;
	$("input").parent().find(".sty-err").css("min-width", "");
	if (!checkSubmitMember) {
		checkSubmitMember = !0;
		var s = $("#form_" + e);
		if (e == "register_otp") {
			s = $("#form_register_people");
		}
		var n = s.find(".required, .validate-email").not(".not-required"),
			a = !0;
		checkScroll = !1;
		$.each(n, function (e, t) {
			var i = $(this),
				r = !1;
			if (i.hasClass("elm-img")) {
				if (i.data("img") != "" || i.data("img-gen") != "") {
					r = !0;
					i.removeClass("error");
				} else {
					i.addClass("error");
				}
			} else {
				r = chk_validateData(i, chkFirstErr);
			}
			if (!r) {
				chkFirstErr = !0;
				a = r;
				checkScrollToAnchor(i);
			}
		});
		if (e == "register_otp") {
			if (!verifyPhone) {
				var r = $('input[name="phone"]');
				if (!chkFirstErr) {
					chk_validateData(r, !1);
					chkFirstErr = !0;
					a = !1;
					checkScrollToAnchor(r);
				}
			}
		}
		if (!a) {
			checkSubmitMember = !1;
			return;
		} else {
			if (typeof grecaptcha != "undefined") {
				checkExecute = !0;
				grecaptcha.execute(t);
			} else {
				if (!chk_hasSubmit) {
					chk_hasSubmit = !0;
					submitMember(e, "", i);
				}
			}
		}
	}
}
function vldDataByType(e, a, s) {
	var i = !0,
		p = s.parents("form").eq(0),
		t = a,
		r = "";
	if (e == "email") {
		r =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		i = r.test(t);
	} else if (/^(name|lastname)+$/.test(e)) {
		r =
			/^([A-Z]|[a-z]|[\\]|[ ]|[\n]|[กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุูเแโใไๅๆ็่้๊๋์])+$/;
		i = r.test(t);
	} else if (/^(name_th|lastname_th)+$/.test(e)) {
		r =
			/^([ กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุูเแโใไๅๆ็่้๊๋์]|[ ]|[\n])+$/;
		i = r.test(t);
	} else if (/^(password|new_password)+$/.test(e)) {
		if (t.length < 8) {
			i = !1;
		} else if (!t.match(/([a-z])/)) {
			i = !1;
		} else if (!t.match(/([A-Z])/)) {
			i = !1;
		} else if (!t.match(/([0-9])/)) {
			i = !1;
		} else if (!t.match(/([ !"#$%&'()*+,-.\/:;<=>?@[\]^_`{|}~])/)) {
			i = !1;
		}
	} else if (e == "cf_password") {
		var u = p.find("input[name=password]").val();
		i = t == u;
	} else if (e == "confirm_new_password") {
		var m = p.find("input[name=new_password]").val();
		i = t == m;
	} else if (e == "number") {
		r = /^\d+$/;
		i = r.test(t);
	} else if (e == "tel") {
		r = /^([0-9]{10})+$/;
		t = t.replace(/-/gi, "");
		i = r.test(t);
	} else if (/^(phone|mobile)+$/.test(e)) {
		r = /^([0-9]{10})+$/;
		t = t.replace(/\s/g, "");
		t = t.replace(/-/gi, "");
		i = r.test(t);
	} else if (e == "accept") {
		i = s.prop("checked");
	} else if (e == "username") {
		r = /^([A-Z]|[a-z]|[0-9])+$/;
		i = r.test(t);
	} else if (e == "time") {
		r = /^([0-1][0-9]|2[0-3]):([0-5][0-9])+$/;
		i = r.test(t);
	} else if (e == "otp") {
		if (t.length != 6) {
			i = !1;
		}
	} else if (e == "id_card_zero") {
		var l = t.replace(/-/g, "");
		if (l.length != 13) {
			i = !1;
			s.parents()
				.closest(".box-inp")
				.find(".sty-err")
				.text(txtValidate[e].error1);
		} else {
			var n = checkPersonalId(l);
			if (l == "0000000000000" || l == "0000000000001") {
				n = !1;
			}
			if (!n) {
				if (l != "0000000000000") {
					i = !1;
					s.parents()
						.closest(".box-inp")
						.find(".sty-err")
						.text(txtValidate[e].error3);
				}
			}
		}
	} else if (e == "id_card") {
		var l = t.replace(/-/g, "");
		if (l.length != 13) {
			i = !1;
			s.parents()
				.closest(".box-inp")
				.find(".sty-err")
				.text(txtValidate[e].error1);
		} else {
			var n = checkPersonalId(l);
			if (!n) {
				i = !1;
				s.parents()
					.closest(".box-inp")
					.find(".sty-err")
					.text(txtValidate[e].error3);
			}
		}
	} else if (e == "username-idcard-email") {
		var n = checkPersonalId(t);
		if (!n) {
			r =
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			i = r.test(t);
			if (!i) {
				var f = /^([A-Z]|[a-z]|[0-9])+$/;
				i = f.test(t);
			} else {
				i = !0;
			}
		} else {
			i = !0;
		}
	} else if (e == "username-idcard-phone") {
		var n = checkPersonalId(t);
		if (!n) {
			r = /^([0-9]{10})+$/;
			t = t.replace(/-/gi, "");
			i = r.test(t);
		} else {
			i = !0;
		}
	} else if (e == "cf_pin") {
		var c = s.parents(".box-pin"),
			d = "";
		$.each(c.find("input[data-vld=pin]"), function (e, t) {
			d += $(this).val();
		});
		var o = "";
		$.each(c.find("input[data-vld=cf_pin]"), function (e, t) {
			o += $(this).val();
		});
		if (d.length == 6 && o.length == 6) {
			i = d == o;
		}
	} else if (e == "municipality_code") {
		r = /^([0-9]{7,8})+$/;
		t = t.replace(/-/gi, "");
		i = r.test(t);
	} else if (e == "address-number-only") {
		var r = /^[0-9-/]+$/;
		i = r.test(t);
	}
	return i;
}
var errValidGroup = [];
function validateFormMember(e, t, i, n, o) {
	var s = !0,
		a = i.parent(),
		r = a.find(".sty-err"),
		l = !1;
	if (a.hasClass("box-select")) {
		a = a.parent();
	}
	if (a.parent().hasClass("group-inp")) {
		a = a.parent();
	}
	s = vldDataByType(t, e, i);
	if (t == "prefix") {
		errGroup = !s;
	}
	if (i.hasClass("verify") && o) {
		if ($(".otp-panel").length > 0) {
			if (e != "" && !verifyPhone) {
				s = verifyPhone;
				t = "phone_verify";
			}
		}
	}
	if (a.hasClass("group-inp")) {
		r = a.find(".err-group");
		l = !0;
		if (errGroup) {
			s = !1;
			n = !1;
		}
	}
	if (t == "pin" || t == "cf_pin") {
		r = i.parents(".pin-section").find(".sty-err");
		l = !0;
	}
	if (!s) {
		a.removeClass("valid");
		a.addClass("error");
		if (txtValidate[t] != undefined && !n) {
			if (errGroup) {
				r.html(txtValidate[t]["blank"]).show();
			} else {
				r.html(txtValidate[t]["error"]).show();
			}
			if (txtValidate[t]["width_error"] != undefined) {
				r.css("min-width", txtValidate[t]["width_error"]);
			}
		} else if ((l && !errGroup) || !l) {
			if (l && i.parents(".pin-section").length) {
			} else {
				r.text("").hide();
				r.css("min-width", "");
			}
		}
	} else {
		a.addClass("valid");
		a.removeClass("error");
		a.addClass("has-dt");
	}
	return s;
}
function submitMember(e, t, i) {
	var a = BASE_URL + "cmd/member_cmd.php",
		d = BASE_URL + "cmd/member_action_cmd.php",
		c = BASE_URL + "cmd/municipal_cmd.php",
		p = BASE_URL + "cmd/municipal_member_cmd.php",
		n =
			$("input[name=mode]").val() != undefined
				? $("input[name=mode]").val()
				: "",
		f = [
			"login",
			"forgot_password",
			"forgot_password_cf",
			"register",
			"otp",
			"create_pass",
			"create_pass_agent",
		],
		m = ["edit_profile"],
		u = ["edit_people"],
		l = $("#form_" + e);
	if (e == "register_otp") {
		l = $("#form_register_people");
	}
	var r = l.serializeArray();
	r.push({ name: "cmd", value: e });
	if (inArray(e, f) && n == "admin") {
		a = c;
	} else if (inArray(e, m) && n == "admin") {
		a = p;
	} else if (inArray(e, u) && n == "user") {
		a = d;
	} else if (e == "guest_claim") {
		a = BASE_URL + "cmd/complaint_cmd.php";
	} else if (e == "guest_garbage_fee_claim") {
		a = BASE_URL + "cmd/garbage_fee_cmd.php";
	}
	if (e == "register_people" || e == "register" || e == "create_pass_agent") {
		r.push({ name: "json_data", value: json_data });
	}
	var o = "";
	if (typeof grecaptcha != "undefined") {
		o = grecaptcha.getResponse(t);
	}
	r.push({ name: "capcha", value: o });
	var s = l.find('.btn[type="submit"],button[type="submit"]');
	s.addClass("loading");
	$.ajax({
		url: a,
		data: r,
		type: "POST",
		dataType: "json",
		success: function (e) {
			checkExecute = !1;
			checkSubmitMember = !1;
			s.removeClass("loading");
			if (typeof i == "function") {
				i("success", e);
			}
			if (typeof grecaptcha != "undefined") {
				grecaptcha.reset(t);
			}
			chk_hasSubmit = !1;
		},
		error: function (e) {
			s.removeClass("loading");
			checkExecute = !1;
			checkSubmitMember = !1;
			if (typeof i == "function") {
				i("error", e);
			}
			if (typeof grecaptcha != "undefined") {
				grecaptcha.reset(t);
			}
			chk_hasSubmit = !1;
		},
	});
	return !1;
}
function callBackSelect(e, t) {
	var l = e.parents(".box-inp"),
		i = l.find("input").attr("name"),
		H = $("input[name=postcode]"),
		S = $("input[name=owner_postcode]"),
		z = $("input[name=fi_postcode]");
	if (i == "province" && $("input[name=district]").length > 0) {
		getListData("district");
		if ($("input[name=postcode]").length > 0) {
			$("input[name=postcode]")
				.val("")
				.parents(".box-inp")
				.removeClass("has-dt");
		}
	} else if (i == "district" && $("input[name=affiliation]").length > 0) {
		getListData("affiliation");
	} else if (i == "district" && $("input[name=municipality]").length > 0) {
		getListData("municipality");
	} else if (i == "district" && $("input[name=sub_district]").length > 0) {
		getListData("sub_district");
		if ($("input[name=postcode]").length > 0) {
			$("input[name=postcode]")
				.val("")
				.parents(".box-inp")
				.removeClass("has-dt");
		}
	} else if (i == "pp_province" && $("input[name=pp_district]").length > 0) {
		getListData("pp_district");
		if ($("input[name=pp_municipality]").length > 0) {
			getListData("pp_municipality");
		}
	} else if (
		i == "pp_district" &&
		$("input[name=pp_municipality]").length > 0
	) {
		getListData("pp_municipality");
	} else if (i == "petition_type") {
		var D = t.toString().split("|"),
			K = $("input[name=responsible]"),
			X = $("input[name=responsible_id]"),
			P = "",
			I = "";
		if (D.length == 3) {
			I = D[1];
			P = D[2];
		}
		X.val(I);
		K.val(P);
	} else if (i == "department") {
		getListData("party", t, "", e);
		l.parent().parent().find(".input-box.work").hide();
		l.parent().parent().find(".input-box.level").hide();
	} else if (i == "party") {
		getListData("work", t, "", e);
		l.parent().parent().find(".input-box.level").hide();
	} else if (i == "work") {
		getListData("level", t, "", e);
	} else if (i == "sub_district" && $("input[name=postcode]").length > 0) {
		getZipcode(t, H);
	} else if (
		i == "owner_province" &&
		$("input[name=owner_district]").length > 0
	) {
		getListData("district", "", "1");
		S.val("").parents(".box-inp").removeClass("has-dt");
	} else if (
		i == "owner_district" &&
		$("input[name=owner_sub_district]").length > 0
	) {
		getListData("sub_district", "", "1");
		S.val("").parents(".box-inp").removeClass("has-dt");
	} else if (
		i == "owner_sub_district" &&
		$("input[name=owner_postcode]").length > 0
	) {
		getZipcode(t, S);
	} else if (i == "fi_province" && $("input[name=fi_district]").length > 0) {
		getListData("district", "", "2");
		z.val("").parents(".box-inp").removeClass("has-dt");
	} else if (
		i == "fi_district" &&
		$("input[name=fi_sub_district]").length > 0
	) {
		getListData("sub_district", "", "2");
		z.val("").parents(".box-inp").removeClass("has-dt");
	} else if (
		i == "fi_sub_district" &&
		$("input[name=fi_postcode]").length > 0
	) {
		getZipcode(t, z);
	} else if (typeof $(e).data("book-title") !== "undefined") {
		var E = $('input[name="book_number"]');
		E.val($(e).data("book-title"));
		var L = E.parents(".box-inp");
		L.addClass("has-dt");
		L.removeClass("error");
	} else if (i == "member_signer_type") {
		var a = $("form .signer-second"),
			y = $('form input[name="member_signer_id"]').val(),
			n = a.find(".nav-select ul li");
		if (a.length > 0 && t != "ผู้ลงนาม") {
			if (typeof y != "undefined" && y != "") {
				n.removeClass("disabled");
				n.each(function (e, t) {
					var i = $(t),
						a = i.data("value");
					if (a == y) {
						i.addClass("disabled");
					}
				});
			}
			a.removeClass("hidden");
			a.find("input").addClass("required");
		} else {
			a.addClass("hidden");
			a.removeClass("has-dt error");
			a.find(".nav-input").text("");
			a.find("input").removeClass("required");
			a.find('input[name="second_signer_id"]').val("");
			n.removeClass("active");
		}
	} else if (i == "member_signer_id") {
		if (typeof $(e).data("department") !== "undefined") {
			var B = $('input[name="member_signer_department_id"]');
			if (B.length > 0) {
				B.val($(e).data("department"));
			}
		}
		var a = $("form .signer-second"),
			n = a.find(".nav-select ul li");
		a.removeClass("has-dt");
		a.removeClass("error");
		a.find(".nav-input").text("");
		var Z = a.find('input[name="second_signer_id"]');
		Z.val("");
		n.removeClass("active");
		n.removeClass("disabled");
		n.each(function (e, i) {
			var a = $(i),
				r = a.data("value");
			if (r == t) {
				a.addClass("disabled");
			}
		});
	} else if (i == "book_type") {
		var V = $("#book_number");
		if (V) {
			var j = V.parents(".box-inp"),
				U = $('label[for="book_number"]');
			j.removeClass("error");
			U.text("เลขที่หนังสือ");
		}
		var f = $("input[name='book_format']"),
			w = $("input[name='is_send']"),
			m = "";
		if (w) {
			m = w.eq(0).parents(".radio-sec");
		}
		if (f) {
			var C = f.parents(".box-inp");
			if (t == "command" || t == "announce" || t == "message") {
				f.removeClass("required");
				C.removeClass("error").addClass("hide");
				if (m) {
					m.removeClass("hide");
				}
				resetSelect("book_format", !0);
			} else {
				if (m) {
					m.addClass("hide");
					w.eq(0).prop("checked", !0);
				}
				var M = $("#middle_saraban").is(":checked");
				if (M) {
					f.addClass("required");
					C.removeClass("hide");
				} else {
					f.removeClass("required");
					C.removeClass("error").addClass("hide");
					resetSelect("book_format", !0);
				}
			}
		}
		var O = $(".wrap-content").data("page");
		if (O == "electronic-book-statistic") {
			var G = $("#form-graph input[name=department]"),
				R = G.parent(),
				x = R.parent();
			if (t == "get") {
				x.addClass("disable");
				x.find(".nav-select li[data-value=all]").click();
			} else {
				x.removeClass("disable");
			}
		}
	} else if (i == "e-office-role") {
		var r = e.parents(".input-box"),
			F = e.data("saraban"),
			k = r.find(".box-select.department"),
			T = k.find('input[name="department"]'),
			N = k.find("label.inp-plc");
		if (F == "T") {
			T.removeClass("required");
			N.text("กอง");
			resetSelect("department,party,work,level", !1, r);
		} else {
			T.addClass("required");
			N.text("กอง *");
			k.parents(".box-inp").removeClass("disable");
		}
	} else if (i == "type_pay") {
		var r = e.parents(".box-inps"),
			b = r.find("input.establishment"),
			g = b.parents(".box-inp");
		g.removeClass("error");
		var s = r.find("input.other_business"),
			d = s.parents(".box-inp");
		d.removeClass("error");
		var u = r.find("input.name_business"),
			o = u.parents(".box-inp");
		o.removeClass("error");
		if (t == "กิจการ") {
			b.addClass("required");
			g.removeClass("hide");
			o.removeClass("hide");
		} else {
			b.removeClass("required");
			resetSelect("establishment", !0);
			g.addClass("hide");
			o.addClass("hide");
			u.val("");
			o.addClass("hide");
			s.removeClass("required");
			s.val("");
			d.addClass("hide");
		}
	} else if (i == "establishment") {
		var r = e.parents(".box-inps"),
			s = r.find("input.other_business"),
			u = r.find("input.name_business"),
			d = s.parents(".box-inp");
		d.removeClass("error");
		var o = u.parents(".box-inp");
		o.removeClass("error");
		if (t == "กิจการอื่นๆ") {
			s.addClass("required");
			d.removeClass("hide");
		} else {
			s.removeClass("required");
			s.val("");
			d.addClass("hide");
		}
	} else if (i == "garbage_fiscal_year") {
		var c = t * 1 + 543,
			v = e.parents(".inp-row"),
			h = v.find(".garbage-month"),
			p = h.find(".nav-select li");
		if (p.length > 0) {
			$.each(p, function (e, t) {
				var a = $(t),
					s = a.data("value"),
					r = a.find("span"),
					i = r.text();
				i = i.split(" ")[0];
				if (s > 9) {
					i = i + " " + (c - 1);
				} else {
					i = i + " " + c;
				}
				r.text(i);
			});
		}
		resetSelect("garbage_month", !0);
	} else if (i == "wastewater_fiscal_year") {
		var c = t * 1 + 543,
			v = e.parents(".inp-row"),
			h = v.find(".water-month"),
			p = h.find(".nav-select li");
		if (p.length > 0) {
			$.each(p, function (e, t) {
				var a = $(t),
					s = a.data("value"),
					r = a.find("span"),
					i = r.text();
				i = i.split(" ")[0];
				if (s > 9) {
					i = i + " " + (c - 1);
				} else {
					i = i + " " + c;
				}
				r.text(i);
			});
		}
		resetSelect("wastewater_month", !0);
	}
	if (t == "noselect") {
		var e = l.find("input");
		l.find(".nav-input").text("");
		l.removeClass("has-dt");
		e.val("");
	}
	if (e.parents("#building-input").length > 0) {
		var q = $("#building-input").find(".box-inp").not(".keyup-not-chk"),
			A = !0;
		q.each(function () {
			if ($(this).find("input").val() == "") {
				A = !1;
			}
			if (!A) {
				$(".add-btn.building").css({
					"pointer-events": "none",
					opacity: "0.5",
				});
			} else {
				$(".add-btn.building").css({
					"pointer-events": "revert",
					opacity: "1",
				});
			}
		});
	}
	if (e.parents(".modal-role-e-office").length > 0) {
		$(".modal-role-e-office .modal-err").hide();
	}
}
function getZipcode(e, t) {
	$.ajax({
		url: BASE_URL + "cmd/municipal_office_cmd.php",
		data: { cmd: "zipcode", subdistrict_id: e },
		type: "GET",
		dataType: "json",
		cache: !1,
		success: function (e) {
			var i = e.data;
			if (i == "") {
				return !1;
			} else {
				t.val(i).parents(".box-inp").addClass("has-dt").removeClass("error");
			}
		},
	});
}
let keysPressed = {};
function numberOnly() {
	$(".number-only").keydown(function (e) {
		keysPressed[e.key] = !0;
		if (
			e.key != undefined &&
			!e.key.match(/[0-9]/) &&
			e.key !== "Backspace" &&
			e.key !== "Enter" &&
			e.key !== "Tab" &&
			e.key !== "ArrowLeft" &&
			e.key !== "ArrowRight" &&
			!isFncKey(e)
		) {
			return !1;
		}
	});
	$(".number-only").keyup(function (e) {
		delete keysPressed[e.key];
	});
	$(".citizen-id").keydown(function (e) {
		var t = $(this),
			i = t.val();
		if (i.length > 13) {
			t.val(i.slice(0, -1));
			return !1;
		}
	});
	$(".citizen-id").keyup(function (e) {
		var t = $(this),
			i = t.val();
		if (i.length > 13) {
			t.val(i.slice(0, -1));
			return !1;
		}
	});
}
function addressNumberOnly() {
	$(".address-number-only").keydown(function (e) {
		keysPressed[e.key] = !0;
		if (
			e.key != undefined &&
			!e.key.match(/[0-9]/) &&
			e.key !== "/" &&
			e.key !== "Backspace" &&
			e.key !== "Enter" &&
			e.key !== "Tab" &&
			e.key !== "ArrowLeft" &&
			e.key !== "ArrowRight" &&
			e.key !== "-" &&
			!isFncKey(e)
		) {
			return !1;
		}
	});
	$(".address-number-only").keyup(function (e) {
		delete keysPressed[e.key];
		var t = $(this).val();
		t = t.replace(".", "");
		$(this).val($.trim(t));
	});
}
function isFncKey(e) {
	if ((keysPressed["Control"] || keysPressed["Meta"]) && e.key == "a") {
		return !0;
	} else {
		return !1;
	}
}
function amountOnly() {
	$(".inp-amount").keydown(function (e) {
		var t = $(this).val(),
			i = t.split(".").length - 1;
		if (e.key != undefined && e.key == "." && i > 0) {
			return !1;
		} else if (
			e.key != undefined &&
			!e.key.match(/[0-9]/) &&
			e.key !== "Backspace" &&
			e.key !== "Enter" &&
			e.key !== "Tab" &&
			e.key !== "ArrowLeft" &&
			e.key !== "ArrowRight" &&
			e.key !== "."
		) {
			return !1;
		}
	});
}
function chk_validateData(e, t) {
	var n = e.val().trim(),
		o = e.attr("name"),
		i = e.parent(),
		r = i.find(".sty-err"),
		s = !1;
	if (i.hasClass("box-select")) {
		i = i.parent();
	}
	if (i.parent().hasClass("group-inp")) {
		i = i.parent();
		r = i.find(".err-group");
		s = !0;
	}
	var a = e.attr("data-vld");
	if (a == "pin" || a == "cf_pin") {
		r = e.parents(".pin-section").find(".sty-err");
		s = !0;
	}
	var l = !0;
	if (o == "date" && $("input[name=date_select]").length > 0) {
		n = $("input[name=date_select]").val();
	}
	if (n != "" && n != "hide") {
		l = validateFormMember(n, a, e, t, !0);
	} else if (e.hasClass("required")) {
		if (e.hasClass("select-dd")) {
			i = i.parent();
		}
		if (a == "prefix") {
			i = e.parents(".group-inp");
			errGroup = !0;
		}
		if (a == "name_th") {
			if (e.parents(".group-inp").length > 0) {
				i = e.parents(".group-inp");
				if (i.hasClass("error")) {
					errGroup = !0;
				}
			}
		}
		i.removeClass("valid");
		i.removeClass("has-dt");
		i.addClass("error");
		if (txtValidate[a] != undefined && !t) {
			r.html(txtValidate[a]["blank"]).show();
			if (txtValidate[a]["width_blank"] != undefined) {
				r.css("min-width", txtValidate[a]["width_blank"]);
			}
		} else if (!errGroup) {
			r.text("").hide();
			r.css("min-width", "");
		} else {
			if (!s || (s && errGroup && t && a != "name_th")) {
				r.text("").hide();
				r.css("min-width", "");
			}
		}
		if (s) {
			errGroup = !0;
		} else {
			errGroup = !1;
		}
		l = !1;
	} else {
		i.removeClass("valid");
		i.removeClass("error");
		i.removeClass("has-dt");
	}
	return l;
}
function checkScrollToAnchor(e) {
	if (!checkScroll) {
		checkScroll = !0;
		var t = e.attr("name");
		if (e.attr("name") != undefined && $("[name='" + t + "']").length == 1) {
			scrollToAnchor(e.attr("name"));
		} else {
			scrollToElm(e);
		}
	}
}
function scrollToAnchor(e) {
	var t = $("[name='" + e + "']"),
		i = t.parent();
	if (e != "") {
		$("html,body").animate({ scrollTop: i.offset().top - 100 }, "slow");
	} else {
		return;
	}
}
function scrollToElm(e) {
	var t = e,
		i = t.parent();
	$("html,body").animate({ scrollTop: i.offset().top - 100 }, "slow");
}
function resetSelect(e, t, i) {
	var a = e.split(",");
	$.each(a, function (e, a) {
		var s = $("input[name=" + a + "]");
		if (typeof i != "undefined") {
			s = i.find("input[name=" + a + "]");
		}
		if (s.length > 0) {
			var r = s.parents(".box-inp");
			s.val("");
			r.removeClass("has-dt valid");
			r.find(".nav-input").html("");
			r.find(".nav-select li").removeClass("active");
			if (!t || e > 0) {
				r.addClass("disable");
			}
			if (r.hasClass("has-delete")) {
				r.find(".ic-arr.icon-arrow-dropdown").removeClass("hide");
				r.find(".ic-arr.clear").addClass("hide");
			}
		}
	});
}
function getListData(e, t, i, n) {
	var a = { cmd: "register_dd", type: e };
	var s;
	if (i != "1" && i != "2") {
		a.province_id = $("form input[name=province]").val();
		a.district_id = $("form input[name=district]").val();
	} else if (i == "1") {
		a.province_id = $("form input[name=owner_province]").val();
		a.district_id = $("form input[name=owner_district]").val();
	} else if (i == "2") {
		a.province_id = $("form input[name=fi_province]").val();
		a.district_id = $("form input[name=fi_district]").val();
	}
	var o = BASE_URL + "cmd/member_cmd.php";
	if (e == "pp_municipality" || e == "pp_district") {
		o = BASE_URL + "cmd/municipal_office_cmd.php";
		a = { cmd: "list_dd", type: e };
		a.province_id = $("form input[name=pp_province]").val();
		a.district_id = $("form input[name=pp_district]").val();
	} else if (e == "party") {
		var r = n.parents(".box-inp");
		s = r.parents("form");
		a = { cmd: "get_department_role", department: t };
		o = BASE_URL + "cmd/municipal_member_cmd.php";
		r.find('input[name="party"]').val("");
		r.find('input[name="work"]').val("");
		r.find('input[name="level"]').val("");
	} else if (e == "work") {
		var r = n.parents(".box-inp");
		s = r.parents("form");
		a = { cmd: "get_department_task", department_role_id: t };
		o = BASE_URL + "cmd/municipal_member_cmd.php";
		r.find('input[name="work"]').val("");
		r.find('input[name="level"]').val("");
	} else if (e == "level") {
		var r = n.parents(".box-inp");
		s = r.parents("form");
		a = { cmd: "get_department_level", department_task_id: t };
		o = BASE_URL + "cmd/municipal_member_cmd.php";
		r.find('input[name="level"]').val("");
	}
	var l = "";
	$.ajax({
		url: o,
		data: a,
		type: "GET",
		dataType: "json",
		cache: !1,
		success: function (t) {
			if (t["success"] == "T") {
				$.each(t["data"], function (t, i) {
					if (e == "pp_municipality") {
						var d = BASE_URL_LANG + i.slug + "/home",
							a = [];
						if (i.province != "") {
							a.push("จ." + i.province);
						}
						if (i.district != "") {
							a.push("อ." + i.district);
						}
						var o = a.join(", "),
							r = "",
							n = i.title;
						if (i.image_alt != "") {
							n = i.image_alt;
						}
						l += '<li><a class="link-dd" href="' + d + '">';
						if (r != "") {
							l +=
								'<div class="box-img"><img src="' +
								r +
								'" alt="' +
								n +
								'"/></div>';
						}
						l +=
							'<div class="box-label"><div class="main fh_smb">' +
							i.title +
							'</div><div class="sub">' +
							o +
							'</div></div><div class="box-icon"><span class="ic-r icon-arrow-dropdown"></span></div></a></li>';
					} else {
						l +=
							'<li class="" data-value="' +
							i.value +
							'"><span>' +
							i.title +
							"</span></li>";
					}
					actionOther(e, "show", s);
				});
				if (e == "district" && i == "1") {
					e = "owner_district";
				} else if (e == "sub_district" && i == "1") {
					e = "owner_sub_district";
				} else if (e == "district" && i == "2") {
					e = "fi_district";
				} else if (e == "sub_district" && i == "2") {
					e = "fi_sub_district";
				}
				setNewList(e, l, s);
			} else {
				setNewList(e, "", s);
				actionOther(e, "hide", s);
			}
		},
		error: function (e) {},
	});
}
function setNewList(e, t, i) {
	var r = $("input[name=" + e + "]").parents(".box-inp");
	if (typeof i != "undefined") {
		r = i.find("input[name=" + e + "]").parents(".box-inp");
	}
	r.find(".nav-select ul").html(t);
	var s = !0;
	if (t == "") {
		s = !1;
		r.addClass("disable");
	} else {
		r.removeClass("disable");
	}
	var a = "";
	if (e == "district") {
		a = "district,sub_district";
	} else if (e == "sub_district") {
		a = "sub_district";
	} else if (e == "pp_district") {
		a = "pp_district";
	} else if (e == "party") {
		a = "party";
	} else if (e == "work") {
		a = "work";
	} else if (e == "level") {
		a = "level";
	} else if (e == "owner_district") {
		a = "owner_district,owner_sub_district";
	} else if (e == "fi_district") {
		a = "fi_district,fi_sub_district";
	} else if (e == "book_registration") {
		a = "book_registration";
	}
	initDropdown(callBackSelect);
	if (a != "") {
		resetSelect(a, s, i);
		if (a == "party") {
			resetSelect("work,level", !1, i);
		} else if (a == "work") {
			resetSelect("level", !1, i);
		}
	}
}
function checkPersonalId(e) {
	var t = e,
		i = !0;
	for (iloop = 0, sum = 0; iloop < 12; iloop++) {
		sum += parseInt(t[iloop] * (13 - iloop));
	}
	if ((11 - (sum % 11)) % 10 != parseInt(t[12])) {
		i = !1;
	}
	return i;
}
function initInpPassword() {
	inputC.focusin(function () {
		$(this).parents(".input-c").find(".password-box").fadeIn(300);
		$(this).parents(".input-c").find("input").removeClass("err");
		$(".password .err-box").hide();
		$(".conf_password .err-box").hide();
	});
	inputC.focusout(function () {
		$(this).parents(".input-c").find(".password-box").fadeOut(300);
	});
	inputP.on("keyup", function () {
		passwordStrength($(this));
		if ($(this).val().length == 0) {
			$(this)
				.parents(".input-c")
				.find(".password-box .bar")
				.removeClass("low poor medium high");
			$(".password-box #level-txt").html("");
		}
	});
}
function passwordStrength(e) {
	var t = e.val(),
		i = !0,
		n = !1,
		l = !1,
		o = !1,
		d = !1,
		a = 5;
	if (!t.match(/([a-z])/)) {
		i = !1;
		a--;
	}
	if (!t.match(/([A-Z])/)) {
		i = !1;
		a--;
	}
	if (!t.match(/([0-9])/)) {
		i = !1;
		a--;
	}
	if (!t.match(/([ !"#$%&'()*+,-.\/:;<=>?@[\]^_`{|}~])/)) {
		i = !1;
		a--;
		e.removeClass("special");
	} else {
		e.addClass("special");
	}
	if (t.length > 0 && t.length < 8) {
		i = !1;
		a--;
	}
	var c = $(".password-box .p-length"),
		p = $(".password-box .p-case"),
		f = $(".password-box .p-number"),
		m = $(".password-box .p-special");
	if (t.length >= 8) {
		c.addClass("pass");
		n = !0;
	} else {
		c.removeClass("pass");
		n = !1;
	}
	if (t.match(/(?=.*[A-Z])(?=.*[a-z]).*/)) {
		p.addClass("pass");
		l = !0;
	} else {
		p.removeClass("pass");
		l = !1;
	}
	if (t.match(/([0-9])/)) {
		f.addClass("pass");
		o = !0;
	} else {
		f.removeClass("pass");
		o = !1;
	}
	if (t.match(/([ !"#$%&'()*+,-.\/:;<=>?@[\]^_`{|}~])/)) {
		m.addClass("pass");
		d = !0;
	} else {
		m.removeClass("pass");
		d = !1;
	}
	if (a == 5) {
		e.addClass("pass-all");
	} else {
		e.removeClass("pass-all");
	}
	var s;
	if (t.length > 0) {
		s = a;
	} else {
		s = 0;
	}
	for (var r = 1; r <= s; r++) {
		addClassPassword(e, r);
		if (r > 2 && l && o && n && d) {
			i = !0;
		} else {
			i = !1;
		}
	}
	return i;
}
function addClassPassword(e, t) {
	var i = e.parents(".input-c").find(".bar"),
		a = $(".password-box #level-txt");
	if (t == 1 || t == 2) {
		i.removeClass("poor medium high").addClass("low");
		a.css("color", "#E24258").html("น้อย");
	} else if (t == 3) {
		i.removeClass("low medium high").addClass("poor");
		a.css("color", "#F7B500").html("ปานกลาง");
	} else if (t == 4) {
		i.removeClass("poor low high").addClass("medium");
		a.css("color", "#F7B500").html("ปานกลาง");
	} else if (
		t == 5 &&
		$(".password-box .p-length").hasClass("pass") &&
		$(".password-box .p-case").hasClass("pass") &&
		$(".password-box .p-number").hasClass("pass") &&
		e.hasClass("special")
	) {
		i.removeClass("poor low medium").addClass("high");
		a.css("color", "#57A900").html("มาก");
	} else {
		i.removeClass("low poor medium high");
	}
}
function actionOther(e, t, i) {
	if (e == "party" || e == "work" || e == "level") {
		if (t == "show") {
			i.find(".input-box." + e).show();
		} else {
			i.find(".input-box." + e).hide();
		}
	}
}
function alertActionSave(e, t) {
	let txt = "บันทึกข้อมูลสำเร็จ";
	let txtsub = "หากคุณต้องกลับหน้ารายการ กรุณากดปุ่มยืนยัน";
	if (e == "edit") {
		txt = "แก้ไขข้อมูลสำเร็จ";
	} else if (e == "send_mail") {
		txt = "ส่งอีเมลสำเร็จ";
		txtsub = "";
	}
	var i = '<div class="modal-ctn fh_reg">';
	i += '<div class="modal-txt">';
	i +=
		'<img class="img-spec" src="/images/check.svg" width="80" height="80" alt="' +
		e +
		'"/>';
	i += '<div class="modal-tt fp_med">' + txt + "</div>";
	i += '<div class="modal-stt">' + txtsub + "</div>";
	i += "</div>";
	i += '<div class="modal-btn-bar fh_med">';
	if (e === "edit") {
		i += '<div class="btn btn-sty-2 btn-cancel">ยกเลิก</div>';
	}
	i += '<div class="btn btn-sty-2 btn-save">ยืนยัน</div>';
	i += "</div>";
	i += "</div>";
	var a = new alertBox({
		htmlBtnClose: "",
		content: i,
		class: "has-change",
		onOpen: () => {
			if (typeof t === "function") {
				t();
			}
			if (e == "send_mail") {
				$(".modal-ctn .btn.btn-save")
					.off("click")
					.on("click", () => {
						a.closeDim();
					});
			}
		},
		onClose: () => {
			$(".modal-ctn .btn.btn-save").removeClass("loading");
		},
	});
}
function alertActionFail(e, t) {
	var i = '<div class="modal-ctn fh_reg">';
	i += '<div class="modal-txt">';
	i +=
		'<img class="img-spec" src="/images/layout/delete-modal.svg" width="80" height="80" alt="info"/>';
	i += '<div class="modal-tt fp_med">' + e + "</div>";
	i += '<div class="modal-stt">' + t + "</div>";
	i += "</div>";
	i += '<div class="modal-btn-bar fh_med">';
	i += '<div class="btn btn-sty-2 btn-save">รับทราบ</div>';
	i += "</div>";
	i += "</div>";
	var a = new alertBox({
		htmlBtnClose: "",
		content: i,
		class: "has-change",
		onOpen: () => {
			$(".modal-ctn .btn.btn-save")
				.off("click")
				.on("click", () => {
					a.closeDim();
				});
		},
	});
}
function formatCitizenID(e) {
	if (e != "" && e != null && e != undefined) {
		var t = "";
		t += e.substring(0, 1) + "-";
		t += e.substring(1, 5) + "-";
		t += e.substring(5, 10) + "-";
		t += e.substring(10, 12) + "-";
		t += e.substring(12, 13);
		return t;
	}
}
function formatPhone(e) {
	if (e != "" && e != null && e != undefined) {
		var t = "";
		t += e.substring(0, 3) + " ";
		t += e.substring(3, 6) + " ";
		t += e.substring(6, 10);
		return t;
	}
}
function formatBankNumber(e) {
	if (e != "" && e != null && e != undefined) {
		var t = "",
			i = e.length;
		if (i == 10) {
			t += e.substring(0, 3) + "-";
			t += e.substring(3, 4) + "-";
			t += e.substring(4, 9) + "-";
			t += e.substring(9, 10);
		} else if (i == 12) {
			t += e.substring(0, 1) + "-";
			t += e.substring(1, 4) + "-";
			t += e.substring(4, 9) + "-";
			t += e.substring(9, 12);
		} else if (i > 12) {
			t += e.substring(0, 1) + "-";
			t += e.substring(1, 4) + "-";
			t += e.substring(4, 9) + "-";
			t += e.substring(9, 12) + "-";
			t += e.substring(12, 15);
		} else {
			t = e;
		}
		return t;
	}
}
function removeSymbol(e) {
	if ($(".phone-number").length > 0) {
		var t = $(".phone-number"),
			i = t.val();
		if (e != undefined && e != null && e != "") {
			t = $(".wrap-modal-box .phone-number");
			i = $(".wrap-modal-box .phone-number").val();
		}
		i = i.replace(/ /g, "");
		t.val(i);
	}
	if ($(".citizen-id").length > 0) {
		var t = $(".citizen-id"),
			r = t.val();
		r = r.replace(/-/g, "");
		t.val(r);
	}
	if ($(".bank-number").length > 0) {
		var t = $(".bank-number"),
			a = t.val();
		a = a.replace(/-/g, "");
		t.val(a);
	}
}
function insertSymbol(e) {
	if ($(".phone-number").length > 0) {
		var t = $(".phone-number"),
			a = t.val();
		if (e == "modal") {
			t = $(".wrap-modal-box .phone-number");
			a = $(".wrap-modal-box .phone-number").val();
			var i = formatPhone(t.val());
			t.val(i);
		}
		if (e != "onlycitizen" && e != "modal") {
			var i = formatPhone(t.val());
			t.val(i);
		}
	}
	if ($(".citizen-id").length > 0) {
		var t = $(".citizen-id");
		if (e != "onlyphone") {
			var i = formatCitizenID(t.val());
			t.val(i);
		}
	}
	if ($(".bank-number").length > 0) {
		var t = $(".bank-number"),
			i = formatBankNumber(t.val());
		t.val(i);
	}
}
function getListBook(e, t) {
	$.ajax({
		url: BASE_URL + "cmd/book_cmd.php",
		data: { cmd: "get_book_list", book_type: e, book_format: t },
		type: "GET",
		dataType: "json",
		cache: !1,
		success: function (e) {
			$(".book-registration").removeClass("disable");
			if (e.success == "T") {
				var t = "";
				$.each(e["list"], function (e, i) {
					t +=
						'<li class="" data-value="' +
						i.value +
						'"><span>' +
						i.title +
						"</span></li>";
				});
				setNewList("book_registration", t);
			} else {
				setNewList("book_registration", "");
			}
		},
		error: function (e) {
			setNewList("book_registration", "");
		},
	});
}
function bytesToSize(e) {
	const units = ["Bytes", "KB", "MB", "GB", "TB"];
	let l = 0,
		n = parseInt(e, 10) || 0;
	while (n >= 1000 && ++l) {
		n = n / 1000;
	}
	return n.toFixed(2) + " " + units[l];
}
function checkCitizenID() {
	$(".btn.citizen-check").on("click", function () {
		var a = $(this),
			r = a.data("type"),
			i = $("html"),
			e = "";
		e +=
			'<form id="citizen_check" method="post" class="fulldim citizen-check sty-form form-cm">';
		e += '<div class="blur"></div>';
		e += '<div class="wrap-modal-box">';
		e += '<div class="wrap-center-block">';
		e += '<div class="wrapper-modal-text">';
		e += '<div class="wrapper-modal-inner">';
		e += '<div class="md-title">';
		e += '<h2 class="fp_med">ตรวจสอบหมายเลขบัตรประชาชน</h2>';
		e += "</div>";
		e +=
			'<div class="desc fp_reg">กรุณาเข้าสู่ระบบด้วยโปรแกรม GovAMI ก่อนการตรวจสอบ';
		e += "<br>*ระบบมีการบันทึกประวัติการตรวจสอบการยืนยันตัวตนของประชาชน";
		e += "กรุณากรอกข้อมูลที่ต้องการตรวจสอบเท่านั้น</div>";
		e += '<div class="box-inp fh_reg pad-ic">';
		e +=
			'<input class="sty-inp number-only fh_reg citizen-id required" type="text" name="id_card" data-vld="id_card" autocomplete="off" maxlength="13">';
		e +=
			'<label class="inp-plc ident">กรอกหมายเลขบัตรประชาชนของประชาชน</label>';
		e += '<span class="sty-err fh_reg"></span>';
		e += '<span class="alert-err fh_reg"></span>';
		e += "</div>";
		e += '<div class="btn-section fh_med">';
		e +=
			'<button class="btn cancel btn-clear fh_med" type="button">เคลียร์</button>';
		e +=
			'<button class="btn submit citizen-check fh_med" type="button">ตรวจสอบ</button>';
		e += "</div>";
		e += "</div>";
		e += '<div class="list-item"></div>';
		e += '<div class="close-btn close-dim"><em class="icon-close"></em></div>';
		e += "</div>";
		e += "</div>";
		e += "</div>";
		e += "</form>";
		var t = $(this);
		t.elem = $(e);
		t.elem.appendTo($("body"));
		i.addClass("add-dim");
		$(".close-dim").on("click.close", function () {
			i.removeClass("add-dim");
			t.elem.remove();
		});
		initFocus();
		initBlur();
		numberOnly();
		chkReqCitizenID(r);
		$("input[name=id_card]").keypress(function (e) {
			if (e.which == 13) {
				$("#citizen_check .btn.citizen-check").trigger("click");
				return !1;
			}
		});
		$(".btn-clear").on("click", function () {
			$("#citizen_check .list-item").html("");
			var e = $(this).parents(".wrapper-modal-inner"),
				t = e.find("input[name=id_card]"),
				i = e.find(".alert-err");
			t.val("").parent().removeClass("has-dt valid error");
			i.hide();
		});
	});
}
function chkReqCitizenID(e) {
	$("#citizen_check .btn.citizen-check").on("click", function () {
		chkFirstErr = !1;
		$("input").parent().find(".sty-err").css("min-width", "");
		if (!citizenIDcheck) {
			citizenIDcheck = !0;
			var i = $("#citizen_check input.required"),
				t = !0;
			checkScroll = !1;
			$("#citizen_check").find(".sty-err").hide();
			$("#citizen_check").find(".sty-err").css("min-width", "");
			var t = !0;
			checkScroll = !1;
			$.each(i, function (e, i) {
				var r = $(this),
					a = chk_validateData(r, chkFirstErr);
				if (!a) {
					chkFirstErr = !0;
					t = a;
				}
			});
			if (!t) {
				$("input[name=id_card]").blur();
				citizenIDcheck = !1;
				return;
			} else {
				submitCheckGDX(e);
			}
		}
	});
}
function submitCheckGDX(e) {
	var i = $("#citizen_check input.required").val();
	i = i.replace(/-/g, "");
	var n = $("#citizen_check"),
		a = n.find('.btn[type="button"]');
	a.addClass("loading");
	var t = $(".alert-err"),
		r = $("input[name=get_token]").val(),
		s = "&cmd=citizen_check&get_token=" + r + "&id_card=" + i;
	$.ajax({
		url: BASE_URL + "cmd/municipal_member_cmd.php",
		type: "GET",
		data: s,
		dataType: "json",
		cache: !1,
		success: function (r) {
			a.removeClass("loading");
			if (r.success == "T" && r.message == "Success") {
				t.hide().parent().removeClass("error");
				resultCitizenData(r.data, i, e, r.data_address);
			} else if (
				r.message == "ForbiddenAccessException: consumer not found" ||
				r.message == "ForbiddenException: consumer not found"
			) {
				t.show().parent().addClass("error");
				t.text(
					"กรุณาติดต่อเจ้าหน้าที่ผู้ดูแลระบบของหน่วยงาน เพื่อตรวจสอบการตั้งค่าการเชื่อมโยง GDX"
				);
			} else if (
				r.message == "CitizenID is not specify" ||
				r.message == "[00404] HTTP 404 Not Found"
			) {
				t.show().parent().addClass("error");
				t.text("กรุณาตรวจสอบหมายเลขบัตรประชาชนอีกครั้ง");
			} else if (
				r.message == "User did not log in" ||
				r.message == "Token not found" ||
				r.message == "No permission in requested service"
			) {
				t.show().parent().addClass("error");
				t.text("กรุณาตรวจสอบการเข้าสู่ระบบในโปรแกรม GovAMI อีกครั้ง");
			} else {
				t.show().parent().addClass("error");
				t.text("กรุณาตรวจสอบการเข้าสู่ระบบในโปรแกรม GovAMI อีกครั้ง");
			}
			citizenIDcheck = !1;
		},
	});
}
function resultCitizenData(e, i, r, a) {
	var s = e.dateOfBirth.toString(),
		n = parseInt(s.substring(0, 4), 10),
		l = parseInt(s.substring(4, 6), 10),
		o = parseInt(s.substring(6, 8), 10),
		d = [
			"มกราคม",
			"กุมภาพันธ์",
			"มีนาคม",
			"เมษายน",
			"พฤษภาคม",
			"มิถุนายน",
			"กรกฎาคม",
			"สิงหาคม",
			"กันยายน",
			"ตุลาคม",
			"พฤศจิกายน",
			"ธันวาคม",
		],
		c = o + " " + d[l - 1] + " " + n;
	if (a.villageNo == 0) {
		a.villageNo = "-";
	}
	if (a.alleyDesc == null) {
		a.alleyDesc = "-";
	}
	var t = "";
	t += '<div class="card-inner">';
	t += '<div class="box-lb">';
	t += '<h2 class="fp_med">ผลการตรวจสอบ</h2>';
	t += "</div>";
	t += '<div class="info fp_reg">';
	t += '<div class="table-row">';
	t += '<h5 class="tt">ชื่อ - นามสกุล</h5>';
	t += '<div class="dt">' + e.fullnameAndRank + "</div>";
	t += "</div>";
	t += '<div class="table-row">';
	t += '<h5 class="tt">หมายเลขเลขบัตรประชาชน</h5>';
	t += '<div class="dt">' + formatCitizenID(i) + "</div>";
	t += "</div>";
	t += '<div class="table-row">';
	t += '<h5 class="tt">วันเดือนปีเกิด</h5>';
	t += '<div class="dt">' + c + "</div>";
	t += "</div>";
	t += '<div class="table-row">';
	t += '<h5 class="tt">ที่อยู่</h5>';
	t += '<div class="dt">' + a.houseNo + "</div>";
	t += "</div>";
	t += '<div class="table-row">';
	t += '<h5 class="tt">หมู่ที่</h5>';
	t += '<div class="dt">' + a.villageNo + "</div>";
	t += "</div>";
	t += '<div class="table-row">';
	t += '<h5 class="tt">ซอย</h5>';
	t += '<div class="dt">' + a.alleyDesc + "</div>";
	t += "</div>";
	t += '<div class="table-row">';
	t += '<h5 class="tt">ตำบล</h5>';
	t += '<div class="dt">' + a.subdistrictDesc + "</div>";
	t += "</div>";
	t += '<div class="table-row">';
	t += '<h5 class="tt">อำเภอ</h5>';
	t += '<div class="dt">' + a.districtDesc + "</div>";
	t += "</div>";
	t += '<div class="table-row">';
	t += '<h5 class="tt">จังหวัด</h5>';
	t += '<div class="dt">' + a.provinceDesc + "</div>";
	t += "</div>";
	t += "</div>";
	t += '<div class="btn-sec">';
	t += '<div class="btn-accept">ใช้ข้อมูล</div>';
	t += "</div>";
	t += "</div>";
	$(".list-item").html(t);
	$(".btn-accept")
		.off("click")
		.on("click", function () {
			citizenAccept(e, i, r, a);
			$(".close-dim").trigger("click");
		});
}
function citizenAccept(e, t, a, i) {
	if (e.titleName == "นาย") {
		e.titleName = "27";
	} else if (e.titleName == "นาง") {
		e.titleName = "24";
	} else if (e.titleName == "นางสาว") {
		e.titleName = "26";
	}
	if (i.villageNo == 0) {
		i.villageNo = "-";
	}
	if (i.alleyDesc == null) {
		i.alleyDesc = "-";
	}
	if (a == "ประเภทบุคคล") {
		$("input[name=name]").val(e.firstName).parent().addClass("has-dt");
		$("input[name=lastname]").val(e.lastName).parent().addClass("has-dt");
		$("input[name=id_card]")
			.val(formatCitizenID(t))
			.parent()
			.addClass("has-dt");
		$("input[name=prefix]")
			.parent()
			.find(".nav-select ul li[data-value=" + e.titleName + "]")
			.trigger("click");
		$("input[name=owner_house_number]")
			.val(i.houseNo)
			.parent()
			.addClass("has-dt");
		$("input[name=owner_moo]").val(i.villageNo).parent().addClass("has-dt");
		$("input[name=owner_alley]").val(i.alleyDesc).parent().addClass("has-dt");
		$("input[name=owner_province]")
			.parent()
			.find(".nav-select ul li[data-value=" + i.provinceCode + "]")
			.trigger("click");
		setTimeout(function () {
			$("input[name=owner_district]")
				.parent()
				.find(".nav-select ul li[data-value=" + i.districtCode + "]")
				.trigger("click");
			setTimeout(function () {
				$("input[name=owner_sub_district]")
					.parent()
					.find(".nav-select ul li[data-value=" + i.subdistrictCode + "]")
					.trigger("click");
			}, 1000);
		}, 900);
	} else if (a == "ยื่นเรื่องโดย") {
		$("input[name=fi_name]").val(e.firstName).parent().addClass("has-dt");
		$("input[name=fi_lastname]").val(e.lastName).parent().addClass("has-dt");
		$("input[name=fi_prefix]")
			.parent()
			.find(".nav-select ul li[data-value=" + e.titleName + "]")
			.trigger("click");
		$("input[name=fi_house_number]").val(i.houseNo).parent().addClass("has-dt");
		$("input[name=fi_moo]").val(i.villageNo).parent().addClass("has-dt");
		$("input[name=fi_alley]").val(i.alleyDesc).parent().addClass("has-dt");
		$("input[name=fi_province]")
			.parent()
			.find(".nav-select ul li[data-value=" + i.provinceCode + "]")
			.trigger("click");
		setTimeout(function () {
			$("input[name=fi_district]")
				.parent()
				.find(".nav-select ul li[data-value=" + i.districtCode + "]")
				.trigger("click");
			setTimeout(function () {
				$("input[name=fi_sub_district]")
					.parent()
					.find(".nav-select ul li[data-value=" + i.subdistrictCode + "]")
					.trigger("click");
			}, 1000);
		}, 900);
	} else if (a == "ตนเอง") {
		$("input[name=name]").val(e.firstName).parent().addClass("has-dt");
		$("input[name=lastname]").val(e.lastName).parent().addClass("has-dt");
		$("input[name=id_card]")
			.val(formatCitizenID(t))
			.parent()
			.addClass("has-dt");
		$("input[name=prefix]")
			.parent()
			.find(".nav-select ul li[data-value=" + e.titleName + "]")
			.trigger("click");
		$("input[name=owner_house_number]")
			.val(i.houseNo)
			.parent()
			.addClass("has-dt");
		$("input[name=owner_moo]").val(i.villageNo).parent().addClass("has-dt");
		$("input[name=owner_alley]").val(i.alleyDesc).parent().addClass("has-dt");
		$("input[name=owner_province]")
			.parent()
			.find(".nav-select ul li[data-value=" + i.provinceCode + "]")
			.trigger("click");
		setTimeout(function () {
			$("input[name=owner_district]")
				.parent()
				.find(".nav-select ul li[data-value=" + i.districtCode + "]")
				.trigger("click");
			setTimeout(function () {
				$("input[name=owner_sub_district]")
					.parent()
					.find(".nav-select ul li[data-value=" + i.subdistrictCode + "]")
					.trigger("click");
			}, 1000);
		}, 900);
	}
}
var module_name = "municipal_one_stop_image",
	curr_tab = 1,
	marker = "",
	objFile =
		arrFileF != undefined && arrFileF != "" && arrFileF != null ? arrFileF : {};
var arrIdxFile = [],
	chk_sendSubmit = !1,
	changeLocation = !1;
let map;
var modal_other,
	widget6,
	captchaGuest = function (e) {
		submitFormComplaint();
	},
	CaptchaCallback = function () {
		if (
			document.getElementById("RecaptchaField6") != null &&
			document.getElementById("RecaptchaField6") != ""
		) {
			widget6 = grecaptcha.render("RecaptchaField6", {
				sitekey: GG_CAPTCHA_KEY,
				callback: captchaGuest,
				hl: "th",
			});
		}
	};
Dropzone.autoDiscover = !1;
$(document).ready(function () {
	initBtnComplaint();
	initMap();
	initUploadDataDocument();
	initCheckData();
	initCheckLatLng();
	submitFormDraft();
	if (
		PageMode != undefined &&
		PageMode != null &&
		PageMode != "" &&
		PageMode == "edit"
	) {
		setViewInfo();
	}
	printDocument();
	$(".btn-get-location")
		.off("click")
		.on("click", function () {
			$(this).addClass("loading");
			initGeolocation();
		});
});
function initBtnComplaint() {
	var e = $("#form_complaint .form-footer .btn-next"),
		t = $("#form_complaint .form-footer .btn-prev"),
		a = $("#form_complaint .list-detail");
	e.unbind("click");
	$("#form_complaint .form-footer .btn-next").click(function () {
		var e = $(this).data("next");
		if (e == "") {
			console.log("พิมพ์คำร้องนี้");
		} else if (e == 5) {
			modalOther("confirm");
		} else {
			if (e == 3) {
				if (changeLocation) {
					setChangeMarker();
				}
			}
			removeSymbol();
			chkFormComplaint("complaint", "step", e);
			insertSymbol();
		}
	});
	t.unbind("click");
	$("#form_complaint .form-footer .btn-prev").click(function () {
		var e = $(this).data("prev");
		if (e == 4) {
			if (MODE_USE == "user") {
				window.location =
					BASE_URL_LANG + MUNICIPALITY_SLUG + "/service/one-stop-service";
			} else {
				window.location = BASE_URL_LANG + "municipal/one-stop-service/list";
			}
		} else {
			curr_tab = e;
			a.removeClass("active");
			$("#form_complaint .list-detail[data-tab=" + curr_tab + "]").addClass(
				"active"
			);
			activeSteps();
			scrollToChange();
		}
	});
}
function activeSteps() {
	var e = $(".block-steps .step");
	e.removeClass("active actived");
	e.each(function () {
		var e = $(this),
			t = e.find(".btn-step").data("tab");
		if (t < curr_tab || curr_tab == 5) {
			e.addClass("actived");
		} else if (t == curr_tab) {
			e.addClass("active");
		}
	});
}
function scrollToChange() {
	var e = "html, body",
		t = $("#header").height(),
		a = $(".page-complaint").offset().top - t;
	$(e).animate({ scrollTop: a }, "slow");
}
function initBtnSteps() {
	$(".block-steps .btn-step .num").unbind("click");
	$(".block-steps .btn-step .num").click(function () {
		var i = $(this),
			e = i.parents(".step");
		if (e.hasClass("actived")) {
			var t = e.find(".btn-step").data("tab"),
				a = $("#form_complaint .list-detail");
			curr_tab = t;
			a.removeClass("active");
			$("#form_complaint .list-detail[data-tab=" + curr_tab + "]").addClass(
				"active"
			);
			activeSteps();
			scrollToChange();
		}
	});
}
function initMap() {
	var e = document.getElementById("map"),
		a = function () {
			var c = [{ stylers: [{ saturation: -100 }, { gamma: 1.8 }] }];
			var d = new google.maps.StyledMapType(c, { name: "Grayscale" });
			var l = new google.maps.LatLng(settingMap.latitude, settingMap.longitude),
				s = {
					zoom: 18,
					scrollwheel: !1,
					center: l,
					draggable: !0,
					mapTypeControlOptions: {
						mapTypeIds: [google.maps.MapTypeId.ROADMAP, "tehgrayz"],
					},
				};
			map = new google.maps.Map(e, s);
			google.maps.event.addDomListener(window, "resize", function () {
				var e = map.getCenter();
				google.maps.event.trigger(map, "resize");
				map.setCenter(e);
			});
			map.mapTypes.set("tehgrayz", d);
			map.setMapTypeId("tehgrayz");
			marker = new google.maps.Marker({
				icon: settingMap["logo"],
				position: l,
				draggable: !0,
				title: "",
			});
			if (l.lat() != "13.758907" && l.lng() != "100.5383723") {
				marker.setMap(map);
			}
			map.addListener("click", (mapsMouseEvent) => {
				var a = mapsMouseEvent.latLng.toJSON(),
					r = JSON.stringify(a, null, 2),
					i = JSON.parse(r),
					n = i["lat"],
					o = i["lng"];
				setDataLatLng(n, o);
				map.setCenter(a);
				map.panTo(a);
				marker.setMap(null);
				marker = new google.maps.Marker({
					icon: settingMap["logo"],
					position: new google.maps.LatLng(n, o),
					draggable: !0,
				});
				marker.setMap(map);
				initDragendMarker();
			});
			const input = document.getElementById("pac-input");
			const searchBox = new google.maps.places.SearchBox(input);
			searchBox.addListener("places_changed", () => {
				const places = searchBox.getPlaces();
				if (places.length == 0) {
					return;
				}
				marker.setMap(null);
				const bounds = new google.maps.LatLngBounds();
				var t = places[0];
				if (!t.geometry || !t.geometry.location) {
					console.log("Returned place contains no geometry");
					return;
				}
				marker = new google.maps.Marker({
					map,
					icon: settingMap["logo"],
					title: t.name,
					position: t.geometry.location,
					draggable: !0,
				});
				initDragendMarker();
				var a = t.geometry.location.toJSON(),
					r = JSON.stringify(a, null, 2),
					i = JSON.parse(r),
					n = i["lat"],
					o = i["lng"];
				setDataLatLng(n, o);
				if (t.geometry.viewport) {
					bounds.union(t.geometry.viewport);
				} else {
					bounds.extend(t.geometry.location);
				}
				map.fitBounds(bounds);
			});
		};
	if (e) {
		var t = $(e).data("location").split(",");
		settingMap["latitude"] = parseFloat(t[0]);
		settingMap["longitude"] = parseFloat(t[1]);
		settingMap["logo"] = $(e).data("logo");
		loadScript(settingMap.getMapLink(), a);
	}
}
function initDragendMarker() {
	google.maps.event.addListener(marker, "dragend", function () {
		var e = marker.getPosition().toJSON(),
			n = JSON.stringify(e, null, 2),
			t = JSON.parse(n),
			a = t["lat"],
			i = t["lng"];
		setDataLatLng(a, i);
		map.setCenter(e);
		map.panTo(e);
		marker.setMap(null);
		marker = new google.maps.Marker({
			icon: settingMap["logo"],
			position: new google.maps.LatLng(a, i),
			draggable: !0,
		});
		marker.setMap(map);
		initDragendMarker();
	});
}
function setDataLatLng(e, t) {
	var i = $(".group .box-inp input[name=latitude]"),
		a = $(".group .box-inp input[name=longitude]");
	i.val(e);
	a.val(t);
	i.focus();
	a.focus();
	a.blur();
	changeLocation = !1;
}
function loadScript(e, t) {
	var i = document.getElementsByTagName("head")[0],
		a = document.createElement("script");
	a.type = "text/javascript";
	a.src = e;
	a.onreadystatechange = t;
	a.onload = t;
	i.appendChild(a);
}
function setElement(e) {
	var t = document.createElement("div");
	t.innerHTML = e;
	return t.firstChild;
}
function getElementLogoPin() {
	var e =
		'<div class="wrap-logo-pin"><img src="' +
		settingMap["logo"] +
		'" alt="pin map" width="27" height="34"/></div>';
	return setElement(e);
}
function initUploadDataDocument() {
	var e = $(".dropzone.document"),
		t =
			'<div class="dz-preview dz-file-preview"><div class="dz-image"><em class="logo-icon"></em></div><div class="dz-details"><a href="" target="_blank"><div class="dz-filename"><span class="fh_reg" data-dz-name></span></div><div class="progress-text">0%</div><div class="dz-progress default document"><div class="progress-inner"><span class="dz-upload" data-dz-uploadprogress></span></div></div><div class="filesize-text">0</div></a></div><div class="input-file-panel"><input type="hidden" name="inp_document[]" /><input type="hidden" name="inp_document_gen[]" /></div></div>';
	e.dropzone({
		url: BASE_API + "crypto/upload_file",
		headers: { "x-csrf": $('meta[name="csrf_token"]').attr("content") },
		acceptedFiles: ".jpg, .jpeg, .png, .pdf, .pptx, .xls, .xlsx, .mp4, .mp3",
		addRemoveLinks: !0,
		dictRemoveFile: '<i class="icon-close"></i>',
		dictCancelUpload: "",
		previewTemplate: t,
		clickable: "#btn-browse-document",
		dictInvalidFileType:
			"ไฟล์ที่อัปโหลดต้องเป็นนามสกุล jpg, jpeg, png, pdf, ppt, xls และ xlsx เท่านั้น",
		maxFilesize: 5,
		dictFileTooBig: "กรุณาอัปโหลดไฟล์ไม่เกิน 5 MB",
		timeout: 6000000,
		init: function () {
			var t = this;
			t.on("sending", function (e, t, a) {
				a.append("mode_source", "db");
				a.append("filename", e.name);
				a.append("module_name", module_name);
				a.append("media_type", e.type);
				a.append("filedata", e);
			});
			t.on("addedfile", function (t) {
				var a = e.find($(".input-file-panel"));
				$.each(a, function (e, i) {
					if (e == a.length - 1) {
						var n = a.eq(e);
						n.addClass("document-" + t.upload.uuid);
						var o = t.type.split("/");
						n.parents(".dz-preview").find(".logo-icon").addClass("icon-file");
					}
				});
				var i = t.previewElement.querySelector("[data-dz-uploadprogress]");
			});
			t.on("uploadprogress", function (e, t, a) {
				if (e.previewElement) {
					var i = e.previewElement.querySelector("[data-dz-uploadprogress]");
					i.offsetParent.offsetParent.querySelector(
						".progress-text"
					).textContent = t.toFixed(0) + "%";
				}
			});
			t.on("complete", function (e) {
				setTimeout(function () {
					if (e.previewElement) {
						var a = bytesToSize(e.size),
							t = e.previewElement.querySelector("[data-dz-uploadprogress]");
						t.offsetParent.offsetParent.querySelector(
							".progress-text"
						).textContent = "";
						t.offsetParent.offsetParent.querySelector(
							".filesize-text"
						).style.display = "block";
						t.offsetParent.offsetParent.querySelector(
							".filesize-text"
						).textContent = a;
						t.offsetParent.offsetParent.querySelector(
							".dz-filename"
						).style.marginBottom = "0";
						t.offsetParent.offsetParent.querySelector(
							".dz-progress"
						).style.display = "none";
					}
				}, 500);
			});
			t.on("success", function (e, t) {
				if (t.sc === "200" && t.err === "") {
					var a = t.d,
						l = a.file_name + "," + a.file_gen + "," + a.file_alt,
						r = e.upload.uuid;
					objFile[e.upload.uuid] = a;
					var i = objFile[e.upload.uuid],
						n = OMImage.readFileName(
							i["file_gen"],
							i["file_name"],
							"o0x0",
							module_name
						),
						o = $(".dropzone .document-" + e.upload.uuid)
							.parents(".dz-preview")
							.find(".dz-details");
					$(o).find("a").attr("href", n);
				} else {
					modalOther("error_file");
				}
			});
			t.on("removedfile", function (e) {
				var t = e.upload.uuid;
				delete objFile[t];
			});
			t.on("error", function (e, t) {
				modalOther("error_file");
				this.removeFile(e);
			});
		},
	});
	$(".dz-remove.custom").unbind("click");
	$(".dz-remove.custom").click(function () {
		documentId = $(this).data("document-id");
		delete objFile[documentId];
		$(this).parents(".dz-preview").remove();
	});
}
function chkFormComplaint(e, t, a) {
	chkFirstErr = !1;
	$("input").parent().find(".sty-err").css("min-width", "");
	if (!checkSubmitMember) {
		errGroup = !1;
		checkSubmitMember = !0;
		var l = $("#form_" + e + " .list-detail[data-tab=" + curr_tab + "] input"),
			i = !0;
		checkScroll = !1;
		$.each(l, function (e, t) {
			var a = $(this);
			if (a.hasClass("required") || a.val() != "") {
				var n = chk_validateData(a, chkFirstErr);
				if (!n) {
					chkFirstErr = !0;
					i = n;
					checkScrollToAnchor(a);
				}
			}
		});
		var n = $(
			"#form_" +
				e +
				" .list-detail[data-tab=" +
				curr_tab +
				"] textarea.required"
		);
		if (n.length > 0) {
			$.each(n, function (e, t) {
				var a = $(this),
					n = chk_validateData(a, chkFirstErr);
				if (!n) {
					chkFirstErr = !0;
					i = n;
					checkScrollToAnchor(a);
				}
			});
		}
		if (!i) {
			checkSubmitMember = !1;
			return;
		} else if (t == "step") {
			checkSubmitMember = !1;
			var o = $("#form_complaint .list-detail");
			curr_tab = a;
			if (curr_tab == 4) {
				setViewInfo();
			}
			o.removeClass("active");
			$("#form_complaint .list-detail[data-tab=" + curr_tab + "]").addClass(
				"active"
			);
			activeSteps();
			scrollToChange();
		}
	}
}
function setViewInfo() {
	var e = $("#form_complaint .list-detail[data-tab=4]"),
		t = e.find(".view-inp");
	$.each(t, function (e, t) {
		var l = $(this),
			r = l.data("name"),
			s = r.split("-"),
			a = "",
			n = "",
			i = "",
			o = "F";
		$.each(s, function (e, t) {
			var s = $("#form_complaint .list-detail .elm-inp[name=" + t + "]");
			if (n != "") {
				n += "-";
			}
			n += t;
			i = $(
				"#form_complaint .list-detail[data-tab=4] .view-inp[data-name=" +
					n +
					"]"
			);
			if (t == "map") {
				var m = $("#form_complaint .list-detail .elm-inp[name=latitude]"),
					p = $("#form_complaint .list-detail .elm-inp[name=longitude]"),
					u = m.val(),
					f = p.val();
				i.html("");
				if (u != "" && f != "") {
					var c = $("#form_complaint #map").clone();
					i.html(c);
					i.show();
				} else {
					i.hide();
				}
				o = "T";
			} else if (t == "document") {
				var l = "";
				$.each(objFile, function (e, t) {
					var a = OMImage.readFileName(
						t["file_gen"],
						t["file_name"],
						"o0x0",
						module_name
					);
					l += '<div class="file-view">';
					l += '<div class="left-sec">';
					l += '<span class="icon icon-document"></span>';
					l += '<div class="left-detail">';
					l += '<div class="ld-title fh_med">เอกสารประกอบ</div>';
					l +=
						'<div class="ld-desc fh_reg">' +
						t["file_name"] +
						" &nbsp;|&nbsp; " +
						bytesToSize(t["file_size"]) +
						"</div>";
					l += "</div>";
					l += "</div>";
					l += '<div class="right-sec">';
					l +=
						'<a class="btn btn-blue fh_med" href="' +
						a +
						'" target="_blank">ดูตัวอย่างไฟล์</a>';
					l += "</div>";
					l += "</div>";
					i.html(l);
				});
				o = "T";
			} else if (s.length > 0) {
				var d = s.parent(),
					r = s.val();
				if (d.hasClass("box-select")) {
					r = d.find(".nav-input").text();
				}
				if (r !== "") {
					if (a != "") {
						a += " ";
					}
					if (t == "id_card") {
						a += formatCitizenID(r);
					} else if (t == "mobile_number") {
						a += formatPhone(r);
					} else {
						a += r;
					}
				} else {
					a = "-";
				}
			}
		});
		if (o == "F" && a != "") {
			i.html(a);
		}
	});
	initBtnEdit();
}
function initBtnEdit() {
	var e = $("#form_complaint .btn-edit");
	e.unbind("click");
	e.click(function () {
		var e = $(this).data("tab");
		chkFormComplaint("complaint", "step", e);
	});
}
function modalOther(e, a) {
	var i = "icon-close",
		n = "ไม่สำเร็จ",
		o = "ไม่สามารถส่งคำร้อง/ร้องเรียนได้ กรุณาลองใหม่อีกครั้ง",
		l = "ตกลง",
		r = 1,
		s = "cl_blur";
	if (e == "confirm") {
		i = "icon-file-check";
		n = "ยืนยันการเพิ่มคำร้อง/ร้องเรียน";
		o =
			'ฉันได้ทำการตรวจสอบรายละเอียดอย่างครบถ้วนสมบูรณ์ <br class="hidden-xs"/>ผู้ยื่นเรื่องจะได้รับการแจ้งเตือนหลังจากกดปุ่มยืนยัน';
		l = "ยืนยัน";
		r = 2;
	} else if (e == "error_file") {
		i = "icon-file-times";
		n = "ไม่สามารถอัปโหลดเอกสารได้";
		o = "เนื่องจากรูปแบบเอกสารของคุณไม่ตรง หรือมีขนาดเกิน 5 MB";
		l = "รับทราบ";
		s = "cl_red";
	} else if (e == "draft") {
		i = "icon-file-check";
		n = "เพิ่มคำร้อง/ร้องเรียน";
		o = "ผู้ยื่นเรื่องทำการบันทึกแบบฉบับร่างเรียบร้อยแล้ว";
		l = "ยืนยัน";
		r = 1;
	}
	var t = '<div class="modal-ctn modal-other fh_reg">';
	t += '<div class="modal-head">';
	t += '<div class="modal-ic ' + s + '"><div class="ic ' + i + '"></div></div>';
	t += "</div>";
	t += '<div class="modal-detail">';
	t += '<div class="modal-block">';
	t += '<div class="modal-tt fp_med">' + n + "</div>";
	t += '<div class="text-detail">' + o + "</div>";
	t += "</div>";
	t += "</div>";
	t += '<div class="modal-footer">';
	t += '<div class="modal-btn-bar fh_smb">';
	if (r == 2) {
		t += '<div class="btn btn-sty-2 btn-cancel">ยกเลิก</div>';
	}
	t += '<div class="btn btn-sty-2 btn-save">' + l + "</div>";
	t += "</div>";
	t += "</div>";
	t += "</div>";
	modal_other = new alertBox({
		content: t,
		class: "other",
		onOpen: () => {
			$(".modal-other .btn.btn-cancel")
				.off("click")
				.on("click", () => {
					modal_other.closeDim();
				});
			$(".modal-other .btn.btn-save")
				.off("click")
				.on("click", () => {
					if (e == "confirm") {
						if (!chk_sendSubmit) {
							chk_sendSubmit = !0;
							grecaptcha.execute(widget6);
						}
					} else if (e == "draft") {
						if (
							oneStopId == "" ||
							oneStopId == null ||
							oneStopId == undefined
						) {
							let url =
								BASE_URL +
								MUNICIPALITY_SLUG +
								"/one-stop-service/complaint/" +
								a;
							window.location.replace(url);
						} else {
							modal_other.closeDim();
						}
					} else {
						modal_other.closeDim();
					}
				});
		},
	});
}
function submitFormComplaint(e) {
	removeSymbol();
	$("#form .btn-submit").addClass("loading");
	var n = $("#form_complaint").serialize(),
		o = BASE_URL + "cmd/complaint_cmd.php",
		l = "",
		t = e != undefined && e != "" && e != null ? e : "",
		r = JSON.stringify(objFile),
		i = n + "&cmd=form&files=" + r + "&mode=" + MODE_USE + "&capcha=" + l;
	if (MODE_USE == "user") {
		t = t != undefined && t != "" && t != null ? t : "active";
		i += "&municipals_id=" + MUNICIPALITY_ID + "&obj_status=" + t;
	}
	var a = $(".modal-ctn .btn-save");
	if (t == "draft") {
		a = $(".btn-draft");
	}
	a.addClass("loading");
	$.ajax({
		url: o,
		data: i,
		type: "POST",
		dataType: "json",
		success: function (t) {
			if (
				modal_other != undefined &&
				modal_other != null &&
				modal_other != ""
			) {
				modal_other.closeDim();
			}
			if (t["success"] == "T") {
				var i = t["complaint_id"];
				if (e != "draft") {
					var o = "เลขคำร้อง " + i;
					$(".list-detail.tab-5 .show-id").html(o);
					$(".list-detail.tab-5 .show-id").data("show-id", i);
					var n = $("#form_complaint .list-detail");
					curr_tab = 5;
					n.removeClass("active");
					$("#form_complaint .list-detail[data-tab=" + curr_tab + "]").addClass(
						"active"
					);
					activeSteps();
					scrollToChange();
				} else {
					modalOther(e, i);
				}
			} else {
				modalOther("error");
				grecaptcha.reset(widget6);
			}
			chk_sendSubmit = !1;
			a.removeClass("loading");
		},
		error: function (e) {
			if (
				modal_other != undefined &&
				modal_other != null &&
				modal_other != ""
			) {
				modal_other.closeDim();
			}
			chk_sendSubmit = !1;
			modalOther("error");
			a.removeClass("loading");
			grecaptcha.reset(widget6);
		},
	});
}
function initCheckData() {
	var e = $("form input,form textarea");
	$.each(e, function (e, t) {
		if ($(t).val()) {
			$(t).parent().addClass("has-dt");
		}
	});
}
function initCheckLatLng() {
	var e = $(
		".group .box-inp input[name=latitude],.group .box-inp input[name=longitude]"
	);
	e.unbind("change");
	e.change(function () {
		changeLocation = !0;
	});
}
function setChangeMarker() {
	var t = $(".group .box-inp input[name=latitude]"),
		a = $(".group .box-inp input[name=longitude]"),
		e = {};
	e.lat = t.val() * 1;
	e.lng = a.val() * 1;
	map.setCenter(e);
	map.panTo(e);
	marker.setMap(null);
	marker = new google.maps.Marker({
		icon: settingMap["logo"],
		position: new google.maps.LatLng(e.lat, e.lng),
		draggable: !0,
	});
	marker.setMap(map);
	initDragendMarker();
	changeLocation = !1;
}
function submitFormDraft() {
	$(".btn-draft").unbind("click");
	$(".btn-draft").click(function () {
		setViewInfo();
		submitFormComplaint("draft");
	});
}
function printDocument() {
	$(".form-footer .print").unbind("click");
	$(".form-footer .print").click(function () {
		let person = "admin";
		let municipals_id = "";
		if (MODE_USE == "user") {
			person = "user";
			municipals_id = MUNICIPALITY_ID;
		}
		if (MODE_GUEST == "T") {
			person = "guest";
		}
		let btn_submit = $(this);
		let complaint_no = $("#form_complaint .list-detail.tab-5 .show-id").data(
			"show-id"
		);
		let url = BASE_URL + "cmd/receipt_generate_cmd.php";
		$.ajax({
			url: url,
			data: {
				id: complaint_no,
				module_name: "oss",
				mode: person,
				municipals_id: municipals_id,
			},
			type: "POST",
			dataType: "json",
			beforeSend: function () {
				btn_submit.addClass("loading");
			},
			success: function (e) {
				btn_submit.removeClass("loading");
				if (e.success == "T") {
					var t = window.open(e.url, "_blank");
					if (!t.opener) {
						t.focus();
					}
				}
			},
			error: function (e) {
				btn_submit.removeClass("loading");
			},
		});
	});
}
function initGeolocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			function (e) {
				$('input[name="latitude"]').val(e.coords.latitude).blur();
				$('input[name="latitude"]').parent().addClass("has-dt");
				$('input[name="longitude"]').val(e.coords.longitude).blur();
				$('input[name="longitude"]').parent().addClass("has-dt");
				setChangeMarker();
				$(".btn-get-location").removeClass("loading");
			},
			function () {
				$(".btn-get-location").removeClass("loading");
				return !1;
			}
		);
	} else {
		alert("Sorry, your browser does not support geolocation services.");
		$(".btn-get-location").removeClass("loading");
	}
}
(function (factory) {
	"use strict";

	if (typeof define === "function" && define.amd) {
		// AMD. Register as an anonymous module.
		define(["jquery"], factory);
	} else {
		// Browser globals
		factory(jQuery);
	}
})(function ($) {
	"use strict";

	$.ui = $.ui || {};

	var version = ($.ui.version = "1.13.0");

	//>>label: Widget
	//>>group: Core
	//>>description: Provides a factory for creating stateful widgets with a common API.
	//>>docs: http://api.jqueryui.com/jQuery.widget/
	//>>demos: http://jqueryui.com/widget/

	var widgetUuid = 0;
	var widgetHasOwnProperty = Array.prototype.hasOwnProperty;
	var widgetSlice = Array.prototype.slice;

	$.cleanData = (function (orig) {
		return function (elems) {
			var events, elem, i;
			for (i = 0; (elem = elems[i]) != null; i++) {
				// Only trigger remove when necessary to save time
				events = $._data(elem, "events");
				if (events && events.remove) {
					$(elem).triggerHandler("remove");
				}
			}
			orig(elems);
		};
	})($.cleanData);

	$.widget = function (name, base, prototype) {
		var existingConstructor, constructor, basePrototype;

		// ProxiedPrototype allows the provided prototype to remain unmodified
		// so that it can be used as a mixin for multiple widgets (#8876)
		var proxiedPrototype = {};

		var namespace = name.split(".")[0];
		name = name.split(".")[1];
		var fullName = namespace + "-" + name;

		if (!prototype) {
			prototype = base;
			base = $.Widget;
		}

		if (Array.isArray(prototype)) {
			prototype = $.extend.apply(null, [{}].concat(prototype));
		}

		// Create selector for plugin
		$.expr.pseudos[fullName.toLowerCase()] = function (elem) {
			return !!$.data(elem, fullName);
		};

		$[namespace] = $[namespace] || {};
		existingConstructor = $[namespace][name];
		constructor = $[namespace][name] = function (options, element) {
			// Allow instantiation without "new" keyword
			if (!this._createWidget) {
				return new constructor(options, element);
			}

			// Allow instantiation without initializing for simple inheritance
			// must use "new" keyword (the code above always passes args)
			if (arguments.length) {
				this._createWidget(options, element);
			}
		};

		// Extend with the existing constructor to carry over any static properties
		$.extend(constructor, existingConstructor, {
			version: prototype.version,

			// Copy the object used to create the prototype in case we need to
			// redefine the widget later
			_proto: $.extend({}, prototype),

			// Track widgets that inherit from this widget in case this widget is
			// redefined after a widget inherits from it
			_childConstructors: [],
		});

		basePrototype = new base();

		// We need to make the options hash a property directly on the new instance
		// otherwise we'll modify the options hash on the prototype that we're
		// inheriting from
		basePrototype.options = $.widget.extend({}, basePrototype.options);
		$.each(prototype, function (prop, value) {
			if (typeof value !== "function") {
				proxiedPrototype[prop] = value;
				return;
			}
			proxiedPrototype[prop] = (function () {
				function _super() {
					return base.prototype[prop].apply(this, arguments);
				}

				function _superApply(args) {
					return base.prototype[prop].apply(this, args);
				}

				return function () {
					var __super = this._super;
					var __superApply = this._superApply;
					var returnValue;

					this._super = _super;
					this._superApply = _superApply;

					returnValue = value.apply(this, arguments);

					this._super = __super;
					this._superApply = __superApply;

					return returnValue;
				};
			})();
		});
		constructor.prototype = $.widget.extend(
			basePrototype,
			{
				// TODO: remove support for widgetEventPrefix
				// always use the name + a colon as the prefix, e.g., draggable:start
				// don't prefix for widgets that aren't DOM-based
				widgetEventPrefix: existingConstructor
					? basePrototype.widgetEventPrefix || name
					: name,
			},
			proxiedPrototype,
			{
				constructor: constructor,
				namespace: namespace,
				widgetName: name,
				widgetFullName: fullName,
			}
		);

		// If this widget is being redefined then we need to find all widgets that
		// are inheriting from it and redefine all of them so that they inherit from
		// the new version of this widget. We're essentially trying to replace one
		// level in the prototype chain.
		if (existingConstructor) {
			$.each(existingConstructor._childConstructors, function (i, child) {
				var childPrototype = child.prototype;

				// Redefine the child widget using the same prototype that was
				// originally used, but inherit from the new version of the base
				$.widget(
					childPrototype.namespace + "." + childPrototype.widgetName,
					constructor,
					child._proto
				);
			});

			// Remove the list of existing child constructors from the old constructor
			// so the old child constructors can be garbage collected
			delete existingConstructor._childConstructors;
		} else {
			base._childConstructors.push(constructor);
		}

		$.widget.bridge(name, constructor);

		return constructor;
	};

	$.widget.extend = function (target) {
		var input = widgetSlice.call(arguments, 1);
		var inputIndex = 0;
		var inputLength = input.length;
		var key;
		var value;

		for (; inputIndex < inputLength; inputIndex++) {
			for (key in input[inputIndex]) {
				value = input[inputIndex][key];
				if (
					widgetHasOwnProperty.call(input[inputIndex], key) &&
					value !== undefined
				) {
					// Clone objects
					if ($.isPlainObject(value)) {
						target[key] = $.isPlainObject(target[key])
							? $.widget.extend({}, target[key], value)
							: // Don't extend strings, arrays, etc. with objects
							  $.widget.extend({}, value);

						// Copy everything else by reference
					} else {
						target[key] = value;
					}
				}
			}
		}
		return target;
	};

	$.widget.bridge = function (name, object) {
		var fullName = object.prototype.widgetFullName || name;
		$.fn[name] = function (options) {
			var isMethodCall = typeof options === "string";
			var args = widgetSlice.call(arguments, 1);
			var returnValue = this;

			if (isMethodCall) {
				// If this is an empty collection, we need to have the instance method
				// return undefined instead of the jQuery instance
				if (!this.length && options === "instance") {
					returnValue = undefined;
				} else {
					this.each(function () {
						var methodValue;
						var instance = $.data(this, fullName);

						if (options === "instance") {
							returnValue = instance;
							return false;
						}

						if (!instance) {
							return $.error(
								"cannot call methods on " +
									name +
									" prior to initialization; " +
									"attempted to call method '" +
									options +
									"'"
							);
						}

						if (
							typeof instance[options] !== "function" ||
							options.charAt(0) === "_"
						) {
							return $.error(
								"no such method '" +
									options +
									"' for " +
									name +
									" widget instance"
							);
						}

						methodValue = instance[options].apply(instance, args);

						if (methodValue !== instance && methodValue !== undefined) {
							returnValue =
								methodValue && methodValue.jquery
									? returnValue.pushStack(methodValue.get())
									: methodValue;
							return false;
						}
					});
				}
			} else {
				// Allow multiple hashes to be passed on init
				if (args.length) {
					options = $.widget.extend.apply(null, [options].concat(args));
				}

				this.each(function () {
					var instance = $.data(this, fullName);
					if (instance) {
						instance.option(options || {});
						if (instance._init) {
							instance._init();
						}
					} else {
						$.data(this, fullName, new object(options, this));
					}
				});
			}

			return returnValue;
		};
	};

	$.Widget = function () {};
	$.Widget._childConstructors = [];

	$.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",

		options: {
			classes: {},
			disabled: false,

			// Callbacks
			create: null,
		},

		_createWidget: function (options, element) {
			element = $(element || this.defaultElement || this)[0];
			this.element = $(element);
			this.uuid = widgetUuid++;
			this.eventNamespace = "." + this.widgetName + this.uuid;

			this.bindings = $();
			this.hoverable = $();
			this.focusable = $();
			this.classesElementLookup = {};

			if (element !== this) {
				$.data(element, this.widgetFullName, this);
				this._on(true, this.element, {
					remove: function (event) {
						if (event.target === element) {
							this.destroy();
						}
					},
				});
				this.document = $(
					element.style
						? // Element within the document
						  element.ownerDocument
						: // Element is window or document
						  element.document || element
				);
				this.window = $(
					this.document[0].defaultView || this.document[0].parentWindow
				);
			}

			this.options = $.widget.extend(
				{},
				this.options,
				this._getCreateOptions(),
				options
			);

			this._create();

			if (this.options.disabled) {
				this._setOptionDisabled(this.options.disabled);
			}

			this._trigger("create", null, this._getCreateEventData());
			this._init();
		},

		_getCreateOptions: function () {
			return {};
		},

		_getCreateEventData: $.noop,

		_create: $.noop,

		_init: $.noop,

		destroy: function () {
			var that = this;

			this._destroy();
			$.each(this.classesElementLookup, function (key, value) {
				that._removeClass(value, key);
			});

			// We can probably remove the unbind calls in 2.0
			// all event bindings should go through this._on()
			this.element.off(this.eventNamespace).removeData(this.widgetFullName);
			this.widget().off(this.eventNamespace).removeAttr("aria-disabled");

			// Clean up events and states
			this.bindings.off(this.eventNamespace);
		},

		_destroy: $.noop,

		widget: function () {
			return this.element;
		},

		option: function (key, value) {
			var options = key;
			var parts;
			var curOption;
			var i;

			if (arguments.length === 0) {
				// Don't return a reference to the internal hash
				return $.widget.extend({}, this.options);
			}

			if (typeof key === "string") {
				// Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
				options = {};
				parts = key.split(".");
				key = parts.shift();
				if (parts.length) {
					curOption = options[key] = $.widget.extend({}, this.options[key]);
					for (i = 0; i < parts.length - 1; i++) {
						curOption[parts[i]] = curOption[parts[i]] || {};
						curOption = curOption[parts[i]];
					}
					key = parts.pop();
					if (arguments.length === 1) {
						return curOption[key] === undefined ? null : curOption[key];
					}
					curOption[key] = value;
				} else {
					if (arguments.length === 1) {
						return this.options[key] === undefined ? null : this.options[key];
					}
					options[key] = value;
				}
			}

			this._setOptions(options);

			return this;
		},

		_setOptions: function (options) {
			var key;

			for (key in options) {
				this._setOption(key, options[key]);
			}

			return this;
		},

		_setOption: function (key, value) {
			if (key === "classes") {
				this._setOptionClasses(value);
			}

			this.options[key] = value;

			if (key === "disabled") {
				this._setOptionDisabled(value);
			}

			return this;
		},

		_setOptionClasses: function (value) {
			var classKey, elements, currentElements;

			for (classKey in value) {
				currentElements = this.classesElementLookup[classKey];
				if (
					value[classKey] === this.options.classes[classKey] ||
					!currentElements ||
					!currentElements.length
				) {
					continue;
				}

				// We are doing this to create a new jQuery object because the _removeClass() call
				// on the next line is going to destroy the reference to the current elements being
				// tracked. We need to save a copy of this collection so that we can add the new classes
				// below.
				elements = $(currentElements.get());
				this._removeClass(currentElements, classKey);

				// We don't use _addClass() here, because that uses this.options.classes
				// for generating the string of classes. We want to use the value passed in from
				// _setOption(), this is the new value of the classes option which was passed to
				// _setOption(). We pass this value directly to _classes().
				elements.addClass(
					this._classes({
						element: elements,
						keys: classKey,
						classes: value,
						add: true,
					})
				);
			}
		},

		_setOptionDisabled: function (value) {
			this._toggleClass(
				this.widget(),
				this.widgetFullName + "-disabled",
				null,
				!!value
			);

			// If the widget is becoming disabled, then nothing is interactive
			if (value) {
				this._removeClass(this.hoverable, null, "ui-state-hover");
				this._removeClass(this.focusable, null, "ui-state-focus");
			}
		},

		enable: function () {
			return this._setOptions({ disabled: false });
		},

		disable: function () {
			return this._setOptions({ disabled: true });
		},

		_classes: function (options) {
			var full = [];
			var that = this;

			options = $.extend(
				{
					element: this.element,
					classes: this.options.classes || {},
				},
				options
			);

			function bindRemoveEvent() {
				options.element.each(function (_, element) {
					var isTracked = $.map(that.classesElementLookup, function (elements) {
						return elements;
					}).some(function (elements) {
						return elements.is(element);
					});

					if (!isTracked) {
						that._on($(element), {
							remove: "_untrackClassesElement",
						});
					}
				});
			}

			function processClassString(classes, checkOption) {
				var current, i;
				for (i = 0; i < classes.length; i++) {
					current = that.classesElementLookup[classes[i]] || $();
					if (options.add) {
						bindRemoveEvent();
						current = $(
							$.uniqueSort(current.get().concat(options.element.get()))
						);
					} else {
						current = $(current.not(options.element).get());
					}
					that.classesElementLookup[classes[i]] = current;
					full.push(classes[i]);
					if (checkOption && options.classes[classes[i]]) {
						full.push(options.classes[classes[i]]);
					}
				}
			}

			if (options.keys) {
				processClassString(options.keys.match(/\S+/g) || [], true);
			}
			if (options.extra) {
				processClassString(options.extra.match(/\S+/g) || []);
			}

			return full.join(" ");
		},

		_untrackClassesElement: function (event) {
			var that = this;
			$.each(that.classesElementLookup, function (key, value) {
				if ($.inArray(event.target, value) !== -1) {
					that.classesElementLookup[key] = $(value.not(event.target).get());
				}
			});

			this._off($(event.target));
		},

		_removeClass: function (element, keys, extra) {
			return this._toggleClass(element, keys, extra, false);
		},

		_addClass: function (element, keys, extra) {
			return this._toggleClass(element, keys, extra, true);
		},

		_toggleClass: function (element, keys, extra, add) {
			add = typeof add === "boolean" ? add : extra;
			var shift = typeof element === "string" || element === null,
				options = {
					extra: shift ? keys : extra,
					keys: shift ? element : keys,
					element: shift ? this.element : element,
					add: add,
				};
			options.element.toggleClass(this._classes(options), add);
			return this;
		},

		_on: function (suppressDisabledCheck, element, handlers) {
			var delegateElement;
			var instance = this;

			// No suppressDisabledCheck flag, shuffle arguments
			if (typeof suppressDisabledCheck !== "boolean") {
				handlers = element;
				element = suppressDisabledCheck;
				suppressDisabledCheck = false;
			}

			// No element argument, shuffle and use this.element
			if (!handlers) {
				handlers = element;
				element = this.element;
				delegateElement = this.widget();
			} else {
				element = delegateElement = $(element);
				this.bindings = this.bindings.add(element);
			}

			$.each(handlers, function (event, handler) {
				function handlerProxy() {
					// Allow widgets to customize the disabled handling
					// - disabled as an array instead of boolean
					// - disabled class as method for disabling individual parts
					if (
						!suppressDisabledCheck &&
						(instance.options.disabled === true ||
							$(this).hasClass("ui-state-disabled"))
					) {
						return;
					}
					return (
						typeof handler === "string" ? instance[handler] : handler
					).apply(instance, arguments);
				}

				// Copy the guid so direct unbinding works
				if (typeof handler !== "string") {
					handlerProxy.guid = handler.guid =
						handler.guid || handlerProxy.guid || $.guid++;
				}

				var match = event.match(/^([\w:-]*)\s*(.*)$/);
				var eventName = match[1] + instance.eventNamespace;
				var selector = match[2];

				if (selector) {
					delegateElement.on(eventName, selector, handlerProxy);
				} else {
					element.on(eventName, handlerProxy);
				}
			});
		},

		_off: function (element, eventName) {
			eventName =
				(eventName || "").split(" ").join(this.eventNamespace + " ") +
				this.eventNamespace;
			element.off(eventName);

			// Clear the stack to avoid memory leaks (#10056)
			this.bindings = $(this.bindings.not(element).get());
			this.focusable = $(this.focusable.not(element).get());
			this.hoverable = $(this.hoverable.not(element).get());
		},

		_delay: function (handler, delay) {
			function handlerProxy() {
				return (
					typeof handler === "string" ? instance[handler] : handler
				).apply(instance, arguments);
			}
			var instance = this;
			return setTimeout(handlerProxy, delay || 0);
		},

		_hoverable: function (element) {
			this.hoverable = this.hoverable.add(element);
			this._on(element, {
				mouseenter: function (event) {
					this._addClass($(event.currentTarget), null, "ui-state-hover");
				},
				mouseleave: function (event) {
					this._removeClass($(event.currentTarget), null, "ui-state-hover");
				},
			});
		},

		_focusable: function (element) {
			this.focusable = this.focusable.add(element);
			this._on(element, {
				focusin: function (event) {
					this._addClass($(event.currentTarget), null, "ui-state-focus");
				},
				focusout: function (event) {
					this._removeClass($(event.currentTarget), null, "ui-state-focus");
				},
			});
		},

		_trigger: function (type, event, data) {
			var prop, orig;
			var callback = this.options[type];

			data = data || {};
			event = $.Event(event);
			event.type = (
				type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type
			).toLowerCase();

			// The original event may come from any element
			// so we need to reset the target on the new event
			event.target = this.element[0];

			// Copy original event properties over to the new event
			orig = event.originalEvent;
			if (orig) {
				for (prop in orig) {
					if (!(prop in event)) {
						event[prop] = orig[prop];
					}
				}
			}

			this.element.trigger(event, data);
			return !(
				(typeof callback === "function" &&
					callback.apply(this.element[0], [event].concat(data)) === false) ||
				event.isDefaultPrevented()
			);
		},
	};

	$.each({ show: "fadeIn", hide: "fadeOut" }, function (method, defaultEffect) {
		$.Widget.prototype["_" + method] = function (element, options, callback) {
			if (typeof options === "string") {
				options = { effect: options };
			}

			var hasOptions;
			var effectName = !options
				? method
				: options === true || typeof options === "number"
				? defaultEffect
				: options.effect || defaultEffect;

			options = options || {};
			if (typeof options === "number") {
				options = { duration: options };
			} else if (options === true) {
				options = {};
			}

			hasOptions = !$.isEmptyObject(options);
			options.complete = callback;

			if (options.delay) {
				element.delay(options.delay);
			}

			if (hasOptions && $.effects && $.effects.effect[effectName]) {
				element[method](options);
			} else if (effectName !== method && element[effectName]) {
				element[effectName](options.duration, options.easing, callback);
			} else {
				element.queue(function (next) {
					$(this)[method]();
					if (callback) {
						callback.call(element[0]);
					}
					next();
				});
			}
		};
	});

	var widget = $.widget;

	//>>label: Position
	//>>group: Core
	//>>description: Positions elements relative to other elements.
	//>>docs: http://api.jqueryui.com/position/
	//>>demos: http://jqueryui.com/position/

	(function () {
		var cachedScrollbarWidth,
			max = Math.max,
			abs = Math.abs,
			rhorizontal = /left|center|right/,
			rvertical = /top|center|bottom/,
			roffset = /[\+\-]\d+(\.[\d]+)?%?/,
			rposition = /^\w+/,
			rpercent = /%$/,
			_position = $.fn.position;

		function getOffsets(offsets, width, height) {
			return [
				parseFloat(offsets[0]) * (rpercent.test(offsets[0]) ? width / 100 : 1),
				parseFloat(offsets[1]) * (rpercent.test(offsets[1]) ? height / 100 : 1),
			];
		}

		function parseCss(element, property) {
			return parseInt($.css(element, property), 10) || 0;
		}

		function isWindow(obj) {
			return obj != null && obj === obj.window;
		}

		function getDimensions(elem) {
			var raw = elem[0];
			if (raw.nodeType === 9) {
				return {
					width: elem.width(),
					height: elem.height(),
					offset: { top: 0, left: 0 },
				};
			}
			if (isWindow(raw)) {
				return {
					width: elem.width(),
					height: elem.height(),
					offset: { top: elem.scrollTop(), left: elem.scrollLeft() },
				};
			}
			if (raw.preventDefault) {
				return {
					width: 0,
					height: 0,
					offset: { top: raw.pageY, left: raw.pageX },
				};
			}
			return {
				width: elem.outerWidth(),
				height: elem.outerHeight(),
				offset: elem.offset(),
			};
		}

		$.position = {
			scrollbarWidth: function () {
				if (cachedScrollbarWidth !== undefined) {
					return cachedScrollbarWidth;
				}
				var w1,
					w2,
					div = $(
						"<div style=" +
							"'display:block;position:absolute;width:200px;height:200px;overflow:hidden;'>" +
							"<div style='height:300px;width:auto;'></div></div>"
					),
					innerDiv = div.children()[0];

				$("body").append(div);
				w1 = innerDiv.offsetWidth;
				div.css("overflow", "scroll");

				w2 = innerDiv.offsetWidth;

				if (w1 === w2) {
					w2 = div[0].clientWidth;
				}

				div.remove();

				return (cachedScrollbarWidth = w1 - w2);
			},
			getScrollInfo: function (within) {
				var overflowX =
						within.isWindow || within.isDocument
							? ""
							: within.element.css("overflow-x"),
					overflowY =
						within.isWindow || within.isDocument
							? ""
							: within.element.css("overflow-y"),
					hasOverflowX =
						overflowX === "scroll" ||
						(overflowX === "auto" &&
							within.width < within.element[0].scrollWidth),
					hasOverflowY =
						overflowY === "scroll" ||
						(overflowY === "auto" &&
							within.height < within.element[0].scrollHeight);
				return {
					width: hasOverflowY ? $.position.scrollbarWidth() : 0,
					height: hasOverflowX ? $.position.scrollbarWidth() : 0,
				};
			},
			getWithinInfo: function (element) {
				var withinElement = $(element || window),
					isElemWindow = isWindow(withinElement[0]),
					isDocument = !!withinElement[0] && withinElement[0].nodeType === 9,
					hasOffset = !isElemWindow && !isDocument;
				return {
					element: withinElement,
					isWindow: isElemWindow,
					isDocument: isDocument,
					offset: hasOffset ? $(element).offset() : { left: 0, top: 0 },
					scrollLeft: withinElement.scrollLeft(),
					scrollTop: withinElement.scrollTop(),
					width: withinElement.outerWidth(),
					height: withinElement.outerHeight(),
				};
			},
		};

		$.fn.position = function (options) {
			if (!options || !options.of) {
				return _position.apply(this, arguments);
			}

			// Make a copy, we don't want to modify arguments
			options = $.extend({}, options);

			var atOffset,
				targetWidth,
				targetHeight,
				targetOffset,
				basePosition,
				dimensions,
				// Make sure string options are treated as CSS selectors
				target =
					typeof options.of === "string"
						? $(document).find(options.of)
						: $(options.of),
				within = $.position.getWithinInfo(options.within),
				scrollInfo = $.position.getScrollInfo(within),
				collision = (options.collision || "flip").split(" "),
				offsets = {};

			dimensions = getDimensions(target);
			if (target[0].preventDefault) {
				// Force left top to allow flipping
				options.at = "left top";
			}
			targetWidth = dimensions.width;
			targetHeight = dimensions.height;
			targetOffset = dimensions.offset;

			// Clone to reuse original targetOffset later
			basePosition = $.extend({}, targetOffset);

			// Force my and at to have valid horizontal and vertical positions
			// if a value is missing or invalid, it will be converted to center
			$.each(["my", "at"], function () {
				var pos = (options[this] || "").split(" "),
					horizontalOffset,
					verticalOffset;

				if (pos.length === 1) {
					pos = rhorizontal.test(pos[0])
						? pos.concat(["center"])
						: rvertical.test(pos[0])
						? ["center"].concat(pos)
						: ["center", "center"];
				}
				pos[0] = rhorizontal.test(pos[0]) ? pos[0] : "center";
				pos[1] = rvertical.test(pos[1]) ? pos[1] : "center";

				// Calculate offsets
				horizontalOffset = roffset.exec(pos[0]);
				verticalOffset = roffset.exec(pos[1]);
				offsets[this] = [
					horizontalOffset ? horizontalOffset[0] : 0,
					verticalOffset ? verticalOffset[0] : 0,
				];

				// Reduce to just the positions without the offsets
				options[this] = [rposition.exec(pos[0])[0], rposition.exec(pos[1])[0]];
			});

			// Normalize collision option
			if (collision.length === 1) {
				collision[1] = collision[0];
			}

			if (options.at[0] === "right") {
				basePosition.left += targetWidth;
			} else if (options.at[0] === "center") {
				basePosition.left += targetWidth / 2;
			}

			if (options.at[1] === "bottom") {
				basePosition.top += targetHeight;
			} else if (options.at[1] === "center") {
				basePosition.top += targetHeight / 2;
			}

			atOffset = getOffsets(offsets.at, targetWidth, targetHeight);
			basePosition.left += atOffset[0];
			basePosition.top += atOffset[1];

			return this.each(function () {
				var collisionPosition,
					using,
					elem = $(this),
					elemWidth = elem.outerWidth(),
					elemHeight = elem.outerHeight(),
					marginLeft = parseCss(this, "marginLeft"),
					marginTop = parseCss(this, "marginTop"),
					collisionWidth =
						elemWidth +
						marginLeft +
						parseCss(this, "marginRight") +
						scrollInfo.width,
					collisionHeight =
						elemHeight +
						marginTop +
						parseCss(this, "marginBottom") +
						scrollInfo.height,
					position = $.extend({}, basePosition),
					myOffset = getOffsets(
						offsets.my,
						elem.outerWidth(),
						elem.outerHeight()
					);

				if (options.my[0] === "right") {
					position.left -= elemWidth;
				} else if (options.my[0] === "center") {
					position.left -= elemWidth / 2;
				}

				if (options.my[1] === "bottom") {
					position.top -= elemHeight;
				} else if (options.my[1] === "center") {
					position.top -= elemHeight / 2;
				}

				position.left += myOffset[0];
				position.top += myOffset[1];

				collisionPosition = {
					marginLeft: marginLeft,
					marginTop: marginTop,
				};

				$.each(["left", "top"], function (i, dir) {
					if ($.ui.position[collision[i]]) {
						$.ui.position[collision[i]][dir](position, {
							targetWidth: targetWidth,
							targetHeight: targetHeight,
							elemWidth: elemWidth,
							elemHeight: elemHeight,
							collisionPosition: collisionPosition,
							collisionWidth: collisionWidth,
							collisionHeight: collisionHeight,
							offset: [atOffset[0] + myOffset[0], atOffset[1] + myOffset[1]],
							my: options.my,
							at: options.at,
							within: within,
							elem: elem,
						});
					}
				});

				if (options.using) {
					// Adds feedback as second argument to using callback, if present
					using = function (props) {
						var left = targetOffset.left - position.left,
							right = left + targetWidth - elemWidth,
							top = targetOffset.top - position.top,
							bottom = top + targetHeight - elemHeight,
							feedback = {
								target: {
									element: target,
									left: targetOffset.left,
									top: targetOffset.top,
									width: targetWidth,
									height: targetHeight,
								},
								element: {
									element: elem,
									left: position.left,
									top: position.top,
									width: elemWidth,
									height: elemHeight,
								},
								horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
								vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle",
							};
						if (targetWidth < elemWidth && abs(left + right) < targetWidth) {
							feedback.horizontal = "center";
						}
						if (targetHeight < elemHeight && abs(top + bottom) < targetHeight) {
							feedback.vertical = "middle";
						}
						if (max(abs(left), abs(right)) > max(abs(top), abs(bottom))) {
							feedback.important = "horizontal";
						} else {
							feedback.important = "vertical";
						}
						options.using.call(this, props, feedback);
					};
				}

				elem.offset($.extend(position, { using: using }));
			});
		};

		$.ui.position = {
			fit: {
				left: function (position, data) {
					var within = data.within,
						withinOffset = within.isWindow
							? within.scrollLeft
							: within.offset.left,
						outerWidth = within.width,
						collisionPosLeft =
							position.left - data.collisionPosition.marginLeft,
						overLeft = withinOffset - collisionPosLeft,
						overRight =
							collisionPosLeft +
							data.collisionWidth -
							outerWidth -
							withinOffset,
						newOverRight;

					// Element is wider than within
					if (data.collisionWidth > outerWidth) {
						// Element is initially over the left side of within
						if (overLeft > 0 && overRight <= 0) {
							newOverRight =
								position.left +
								overLeft +
								data.collisionWidth -
								outerWidth -
								withinOffset;
							position.left += overLeft - newOverRight;

							// Element is initially over right side of within
						} else if (overRight > 0 && overLeft <= 0) {
							position.left = withinOffset;

							// Element is initially over both left and right sides of within
						} else {
							if (overLeft > overRight) {
								position.left = withinOffset + outerWidth - data.collisionWidth;
							} else {
								position.left = withinOffset;
							}
						}

						// Too far left -> align with left edge
					} else if (overLeft > 0) {
						position.left += overLeft;

						// Too far right -> align with right edge
					} else if (overRight > 0) {
						position.left -= overRight;

						// Adjust based on position and margin
					} else {
						position.left = max(
							position.left - collisionPosLeft,
							position.left
						);
					}
				},
				top: function (position, data) {
					var within = data.within,
						withinOffset = within.isWindow
							? within.scrollTop
							: within.offset.top,
						outerHeight = data.within.height,
						collisionPosTop = position.top - data.collisionPosition.marginTop,
						overTop = withinOffset - collisionPosTop,
						overBottom =
							collisionPosTop +
							data.collisionHeight -
							outerHeight -
							withinOffset,
						newOverBottom;

					// Element is taller than within
					if (data.collisionHeight > outerHeight) {
						// Element is initially over the top of within
						if (overTop > 0 && overBottom <= 0) {
							newOverBottom =
								position.top +
								overTop +
								data.collisionHeight -
								outerHeight -
								withinOffset;
							position.top += overTop - newOverBottom;

							// Element is initially over bottom of within
						} else if (overBottom > 0 && overTop <= 0) {
							position.top = withinOffset;

							// Element is initially over both top and bottom of within
						} else {
							if (overTop > overBottom) {
								position.top =
									withinOffset + outerHeight - data.collisionHeight;
							} else {
								position.top = withinOffset;
							}
						}

						// Too far up -> align with top
					} else if (overTop > 0) {
						position.top += overTop;

						// Too far down -> align with bottom edge
					} else if (overBottom > 0) {
						position.top -= overBottom;

						// Adjust based on position and margin
					} else {
						position.top = max(position.top - collisionPosTop, position.top);
					}
				},
			},
			flip: {
				left: function (position, data) {
					var within = data.within,
						withinOffset = within.offset.left + within.scrollLeft,
						outerWidth = within.width,
						offsetLeft = within.isWindow
							? within.scrollLeft
							: within.offset.left,
						collisionPosLeft =
							position.left - data.collisionPosition.marginLeft,
						overLeft = collisionPosLeft - offsetLeft,
						overRight =
							collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
						myOffset =
							data.my[0] === "left"
								? -data.elemWidth
								: data.my[0] === "right"
								? data.elemWidth
								: 0,
						atOffset =
							data.at[0] === "left"
								? data.targetWidth
								: data.at[0] === "right"
								? -data.targetWidth
								: 0,
						offset = -2 * data.offset[0],
						newOverRight,
						newOverLeft;

					if (overLeft < 0) {
						newOverRight =
							position.left +
							myOffset +
							atOffset +
							offset +
							data.collisionWidth -
							outerWidth -
							withinOffset;
						if (newOverRight < 0 || newOverRight < abs(overLeft)) {
							position.left += myOffset + atOffset + offset;
						}
					} else if (overRight > 0) {
						newOverLeft =
							position.left -
							data.collisionPosition.marginLeft +
							myOffset +
							atOffset +
							offset -
							offsetLeft;
						if (newOverLeft > 0 || abs(newOverLeft) < overRight) {
							position.left += myOffset + atOffset + offset;
						}
					}
				},
				top: function (position, data) {
					var within = data.within,
						withinOffset = within.offset.top + within.scrollTop,
						outerHeight = within.height,
						offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
						collisionPosTop = position.top - data.collisionPosition.marginTop,
						overTop = collisionPosTop - offsetTop,
						overBottom =
							collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
						top = data.my[1] === "top",
						myOffset = top
							? -data.elemHeight
							: data.my[1] === "bottom"
							? data.elemHeight
							: 0,
						atOffset =
							data.at[1] === "top"
								? data.targetHeight
								: data.at[1] === "bottom"
								? -data.targetHeight
								: 0,
						offset = -2 * data.offset[1],
						newOverTop,
						newOverBottom;
					if (overTop < 0) {
						newOverBottom =
							position.top +
							myOffset +
							atOffset +
							offset +
							data.collisionHeight -
							outerHeight -
							withinOffset;
						if (newOverBottom < 0 || newOverBottom < abs(overTop)) {
							position.top += myOffset + atOffset + offset;
						}
					} else if (overBottom > 0) {
						newOverTop =
							position.top -
							data.collisionPosition.marginTop +
							myOffset +
							atOffset +
							offset -
							offsetTop;
						if (newOverTop > 0 || abs(newOverTop) < overBottom) {
							position.top += myOffset + atOffset + offset;
						}
					}
				},
			},
			flipfit: {
				left: function () {
					$.ui.position.flip.left.apply(this, arguments);
					$.ui.position.fit.left.apply(this, arguments);
				},
				top: function () {
					$.ui.position.flip.top.apply(this, arguments);
					$.ui.position.fit.top.apply(this, arguments);
				},
			},
		};
	})();

	var position = $.ui.position;

	//>>label: :focusable Selector
	//>>group: Core
	//>>description: Selects elements which can be focused.
	//>>docs: http://api.jqueryui.com/focusable-selector/

	// Selectors
	$.ui.focusable = function (element, hasTabindex) {
		var map,
			mapName,
			img,
			focusableIfVisible,
			fieldset,
			nodeName = element.nodeName.toLowerCase();

		if ("area" === nodeName) {
			map = element.parentNode;
			mapName = map.name;
			if (!element.href || !mapName || map.nodeName.toLowerCase() !== "map") {
				return false;
			}
			img = $("img[usemap='#" + mapName + "']");
			return img.length > 0 && img.is(":visible");
		}

		if (/^(input|select|textarea|button|object)$/.test(nodeName)) {
			focusableIfVisible = !element.disabled;

			if (focusableIfVisible) {
				// Form controls within a disabled fieldset are disabled.
				// However, controls within the fieldset's legend do not get disabled.
				// Since controls generally aren't placed inside legends, we skip
				// this portion of the check.
				fieldset = $(element).closest("fieldset")[0];
				if (fieldset) {
					focusableIfVisible = !fieldset.disabled;
				}
			}
		} else if ("a" === nodeName) {
			focusableIfVisible = element.href || hasTabindex;
		} else {
			focusableIfVisible = hasTabindex;
		}

		return (
			focusableIfVisible && $(element).is(":visible") && visible($(element))
		);
	};

	// Support: IE 8 only
	// IE 8 doesn't resolve inherit to visible/hidden for computed values
	function visible(element) {
		var visibility = element.css("visibility");
		while (visibility === "inherit") {
			element = element.parent();
			visibility = element.css("visibility");
		}
		return visibility === "visible";
	}

	$.extend($.expr.pseudos, {
		focusable: function (element) {
			return $.ui.focusable(element, $.attr(element, "tabindex") != null);
		},
	});

	var focusable = $.ui.focusable;

	// Support: IE8 Only
	// IE8 does not support the form attribute and when it is supplied. It overwrites the form prop
	// with a string, so we need to find the proper form.
	var form = ($.fn._form = function () {
		return typeof this[0].form === "string"
			? this.closest("form")
			: $(this[0].form);
	});

	//>>label: Form Reset Mixin
	//>>group: Core
	//>>description: Refresh input widgets when their form is reset
	//>>docs: http://api.jqueryui.com/form-reset-mixin/

	var formResetMixin = ($.ui.formResetMixin = {
		_formResetHandler: function () {
			var form = $(this);

			// Wait for the form reset to actually happen before refreshing
			setTimeout(function () {
				var instances = form.data("ui-form-reset-instances");
				$.each(instances, function () {
					this.refresh();
				});
			});
		},

		_bindFormResetHandler: function () {
			this.form = this.element._form();
			if (!this.form.length) {
				return;
			}

			var instances = this.form.data("ui-form-reset-instances") || [];
			if (!instances.length) {
				// We don't use _on() here because we use a single event handler per form
				this.form.on("reset.ui-form-reset", this._formResetHandler);
			}
			instances.push(this);
			this.form.data("ui-form-reset-instances", instances);
		},

		_unbindFormResetHandler: function () {
			if (!this.form.length) {
				return;
			}

			var instances = this.form.data("ui-form-reset-instances");
			instances.splice($.inArray(this, instances), 1);
			if (instances.length) {
				this.form.data("ui-form-reset-instances", instances);
			} else {
				this.form
					.removeData("ui-form-reset-instances")
					.off("reset.ui-form-reset");
			}
		},
	});

	//>>label: Keycode
	//>>group: Core
	//>>description: Provide keycodes as keynames
	//>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/

	var keycode = ($.ui.keyCode = {
		BACKSPACE: 8,
		COMMA: 188,
		DELETE: 46,
		DOWN: 40,
		END: 35,
		ENTER: 13,
		ESCAPE: 27,
		HOME: 36,
		LEFT: 37,
		PAGE_DOWN: 34,
		PAGE_UP: 33,
		PERIOD: 190,
		RIGHT: 39,
		SPACE: 32,
		TAB: 9,
		UP: 38,
	});

	//>>label: labels
	//>>group: Core
	//>>description: Find all the labels associated with a given input
	//>>docs: http://api.jqueryui.com/labels/

	var labels = ($.fn.labels = function () {
		var ancestor, selector, id, labels, ancestors;

		if (!this.length) {
			return this.pushStack([]);
		}

		// Check control.labels first
		if (this[0].labels && this[0].labels.length) {
			return this.pushStack(this[0].labels);
		}

		// Support: IE <= 11, FF <= 37, Android <= 2.3 only
		// Above browsers do not support control.labels. Everything below is to support them
		// as well as document fragments. control.labels does not work on document fragments
		labels = this.eq(0).parents("label");

		// Look for the label based on the id
		id = this.attr("id");
		if (id) {
			// We don't search against the document in case the element
			// is disconnected from the DOM
			ancestor = this.eq(0).parents().last();

			// Get a full set of top level ancestors
			ancestors = ancestor.add(
				ancestor.length ? ancestor.siblings() : this.siblings()
			);

			// Create a selector for the label based on the id
			selector = "label[for='" + $.escapeSelector(id) + "']";

			labels = labels.add(ancestors.find(selector).addBack(selector));
		}

		// Return whatever we have found for labels
		return this.pushStack(labels);
	});

	//>>label: uniqueId
	//>>group: Core
	//>>description: Functions to generate and remove uniqueId's
	//>>docs: http://api.jqueryui.com/uniqueId/

	var uniqueId = $.fn.extend({
		uniqueId: (function () {
			var uuid = 0;

			return function () {
				return this.each(function () {
					if (!this.id) {
						this.id = "ui-id-" + ++uuid;
					}
				});
			};
		})(),

		removeUniqueId: function () {
			return this.each(function () {
				if (/^ui-id-\d+$/.test(this.id)) {
					$(this).removeAttr("id");
				}
			});
		},
	});

	//>>label: Controlgroup
	//>>group: Widgets
	//>>description: Visually groups form control widgets
	//>>docs: http://api.jqueryui.com/controlgroup/
	//>>demos: http://jqueryui.com/controlgroup/
	//>>css.structure: ../../themes/base/core.css
	//>>css.structure: ../../themes/base/controlgroup.css
	//>>css.theme: ../../themes/base/theme.css

	var controlgroupCornerRegex = /ui-corner-([a-z]){2,6}/g;

	var widgetsControlgroup = $.widget("ui.controlgroup", {
		version: "1.13.0",
		defaultElement: "<div>",
		options: {
			direction: "horizontal",
			disabled: null,
			onlyVisible: true,
			items: {
				button:
					"input[type=button], input[type=submit], input[type=reset], button, a",
				controlgroupLabel: ".ui-controlgroup-label",
				checkboxradio: "input[type='checkbox'], input[type='radio']",
				selectmenu: "select",
				spinner: ".ui-spinner-input",
			},
		},

		_create: function () {
			this._enhance();
		},

		// To support the enhanced option in jQuery Mobile, we isolate DOM manipulation
		_enhance: function () {
			this.element.attr("role", "toolbar");
			this.refresh();
		},

		_destroy: function () {
			this._callChildMethod("destroy");
			this.childWidgets.removeData("ui-controlgroup-data");
			this.element.removeAttr("role");
			if (this.options.items.controlgroupLabel) {
				this.element
					.find(this.options.items.controlgroupLabel)
					.find(".ui-controlgroup-label-contents")
					.contents()
					.unwrap();
			}
		},

		_initWidgets: function () {
			var that = this,
				childWidgets = [];

			// First we iterate over each of the items options
			$.each(this.options.items, function (widget, selector) {
				var labels;
				var options = {};

				// Make sure the widget has a selector set
				if (!selector) {
					return;
				}

				if (widget === "controlgroupLabel") {
					labels = that.element.find(selector);
					labels.each(function () {
						var element = $(this);

						if (element.children(".ui-controlgroup-label-contents").length) {
							return;
						}
						element
							.contents()
							.wrapAll("<span class='ui-controlgroup-label-contents'></span>");
					});
					that._addClass(
						labels,
						null,
						"ui-widget ui-widget-content ui-state-default"
					);
					childWidgets = childWidgets.concat(labels.get());
					return;
				}

				// Make sure the widget actually exists
				if (!$.fn[widget]) {
					return;
				}

				// We assume everything is in the middle to start because we can't determine
				// first / last elements until all enhancments are done.
				if (that["_" + widget + "Options"]) {
					options = that["_" + widget + "Options"]("middle");
				} else {
					options = { classes: {} };
				}

				// Find instances of this widget inside controlgroup and init them
				that.element.find(selector).each(function () {
					var element = $(this);
					var instance = element[widget]("instance");

					// We need to clone the default options for this type of widget to avoid
					// polluting the variable options which has a wider scope than a single widget.
					var instanceOptions = $.widget.extend({}, options);

					// If the button is the child of a spinner ignore it
					// TODO: Find a more generic solution
					if (widget === "button" && element.parent(".ui-spinner").length) {
						return;
					}

					// Create the widget if it doesn't exist
					if (!instance) {
						instance = element[widget]()[widget]("instance");
					}
					if (instance) {
						instanceOptions.classes = that._resolveClassesValues(
							instanceOptions.classes,
							instance
						);
					}
					element[widget](instanceOptions);

					// Store an instance of the controlgroup to be able to reference
					// from the outermost element for changing options and refresh
					var widgetElement = element[widget]("widget");
					$.data(
						widgetElement[0],
						"ui-controlgroup-data",
						instance ? instance : element[widget]("instance")
					);

					childWidgets.push(widgetElement[0]);
				});
			});

			this.childWidgets = $($.uniqueSort(childWidgets));
			this._addClass(this.childWidgets, "ui-controlgroup-item");
		},

		_callChildMethod: function (method) {
			this.childWidgets.each(function () {
				var element = $(this),
					data = element.data("ui-controlgroup-data");
				if (data && data[method]) {
					data[method]();
				}
			});
		},

		_updateCornerClass: function (element, position) {
			var remove =
				"ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all";
			var add = this._buildSimpleOptions(position, "label").classes.label;

			this._removeClass(element, null, remove);
			this._addClass(element, null, add);
		},

		_buildSimpleOptions: function (position, key) {
			var direction = this.options.direction === "vertical";
			var result = {
				classes: {},
			};
			result.classes[key] = {
				middle: "",
				first: "ui-corner-" + (direction ? "top" : "left"),
				last: "ui-corner-" + (direction ? "bottom" : "right"),
				only: "ui-corner-all",
			}[position];

			return result;
		},

		_spinnerOptions: function (position) {
			var options = this._buildSimpleOptions(position, "ui-spinner");

			options.classes["ui-spinner-up"] = "";
			options.classes["ui-spinner-down"] = "";

			return options;
		},

		_buttonOptions: function (position) {
			return this._buildSimpleOptions(position, "ui-button");
		},

		_checkboxradioOptions: function (position) {
			return this._buildSimpleOptions(position, "ui-checkboxradio-label");
		},

		_selectmenuOptions: function (position) {
			var direction = this.options.direction === "vertical";
			return {
				width: direction ? "auto" : false,
				classes: {
					middle: {
						"ui-selectmenu-button-open": "",
						"ui-selectmenu-button-closed": "",
					},
					first: {
						"ui-selectmenu-button-open":
							"ui-corner-" + (direction ? "top" : "tl"),
						"ui-selectmenu-button-closed":
							"ui-corner-" + (direction ? "top" : "left"),
					},
					last: {
						"ui-selectmenu-button-open": direction ? "" : "ui-corner-tr",
						"ui-selectmenu-button-closed":
							"ui-corner-" + (direction ? "bottom" : "right"),
					},
					only: {
						"ui-selectmenu-button-open": "ui-corner-top",
						"ui-selectmenu-button-closed": "ui-corner-all",
					},
				}[position],
			};
		},

		_resolveClassesValues: function (classes, instance) {
			var result = {};
			$.each(classes, function (key) {
				var current = instance.options.classes[key] || "";
				current = String.prototype.trim.call(
					current.replace(controlgroupCornerRegex, "")
				);
				result[key] = (current + " " + classes[key]).replace(/\s+/g, " ");
			});
			return result;
		},

		_setOption: function (key, value) {
			if (key === "direction") {
				this._removeClass("ui-controlgroup-" + this.options.direction);
			}

			this._super(key, value);
			if (key === "disabled") {
				this._callChildMethod(value ? "disable" : "enable");
				return;
			}

			this.refresh();
		},

		refresh: function () {
			var children,
				that = this;

			this._addClass(
				"ui-controlgroup ui-controlgroup-" + this.options.direction
			);

			if (this.options.direction === "horizontal") {
				this._addClass(null, "ui-helper-clearfix");
			}
			this._initWidgets();

			children = this.childWidgets;

			// We filter here because we need to track all childWidgets not just the visible ones
			if (this.options.onlyVisible) {
				children = children.filter(":visible");
			}

			if (children.length) {
				// We do this last because we need to make sure all enhancment is done
				// before determining first and last
				$.each(["first", "last"], function (index, value) {
					var instance = children[value]().data("ui-controlgroup-data");

					if (instance && that["_" + instance.widgetName + "Options"]) {
						var options = that["_" + instance.widgetName + "Options"](
							children.length === 1 ? "only" : value
						);
						options.classes = that._resolveClassesValues(
							options.classes,
							instance
						);
						instance.element[instance.widgetName](options);
					} else {
						that._updateCornerClass(children[value](), value);
					}
				});

				// Finally call the refresh method on each of the child widgets.
				this._callChildMethod("refresh");
			}
		},
	});

	//>>label: Checkboxradio
	//>>group: Widgets
	//>>description: Enhances a form with multiple themeable checkboxes or radio buttons.
	//>>docs: http://api.jqueryui.com/checkboxradio/
	//>>demos: http://jqueryui.com/checkboxradio/
	//>>css.structure: ../../themes/base/core.css
	//>>css.structure: ../../themes/base/button.css
	//>>css.structure: ../../themes/base/checkboxradio.css
	//>>css.theme: ../../themes/base/theme.css

	$.widget("ui.checkboxradio", [
		$.ui.formResetMixin,
		{
			version: "1.13.0",
			options: {
				disabled: null,
				label: null,
				icon: true,
				classes: {
					"ui-checkboxradio-label": "ui-corner-all",
					"ui-checkboxradio-icon": "ui-corner-all",
				},
			},

			_getCreateOptions: function () {
				var disabled, labels;
				var that = this;
				var options = this._super() || {};

				// We read the type here, because it makes more sense to throw a element type error first,
				// rather then the error for lack of a label. Often if its the wrong type, it
				// won't have a label (e.g. calling on a div, btn, etc)
				this._readType();

				labels = this.element.labels();

				// If there are multiple labels, use the last one
				this.label = $(labels[labels.length - 1]);
				if (!this.label.length) {
					$.error("No label found for checkboxradio widget");
				}

				this.originalLabel = "";

				// We need to get the label text but this may also need to make sure it does not contain the
				// input itself.
				this.label
					.contents()
					.not(this.element[0])
					.each(function () {
						// The label contents could be text, html, or a mix. We concat each element to get a
						// string representation of the label, without the input as part of it.
						that.originalLabel +=
							this.nodeType === 3 ? $(this).text() : this.outerHTML;
					});

				// Set the label option if we found label text
				if (this.originalLabel) {
					options.label = this.originalLabel;
				}

				disabled = this.element[0].disabled;
				if (disabled != null) {
					options.disabled = disabled;
				}
				return options;
			},

			_create: function () {
				var checked = this.element[0].checked;

				this._bindFormResetHandler();

				if (this.options.disabled == null) {
					this.options.disabled = this.element[0].disabled;
				}

				this._setOption("disabled", this.options.disabled);
				this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible");
				this._addClass(
					this.label,
					"ui-checkboxradio-label",
					"ui-button ui-widget"
				);

				if (this.type === "radio") {
					this._addClass(this.label, "ui-checkboxradio-radio-label");
				}

				if (this.options.label && this.options.label !== this.originalLabel) {
					this._updateLabel();
				} else if (this.originalLabel) {
					this.options.label = this.originalLabel;
				}

				this._enhance();

				if (checked) {
					this._addClass(
						this.label,
						"ui-checkboxradio-checked",
						"ui-state-active"
					);
				}

				this._on({
					change: "_toggleClasses",
					focus: function () {
						this._addClass(this.label, null, "ui-state-focus ui-visual-focus");
					},
					blur: function () {
						this._removeClass(
							this.label,
							null,
							"ui-state-focus ui-visual-focus"
						);
					},
				});
			},

			_readType: function () {
				var nodeName = this.element[0].nodeName.toLowerCase();
				this.type = this.element[0].type;
				if (nodeName !== "input" || !/radio|checkbox/.test(this.type)) {
					$.error(
						"Can't create checkboxradio on element.nodeName=" +
							nodeName +
							" and element.type=" +
							this.type
					);
				}
			},

			// Support jQuery Mobile enhanced option
			_enhance: function () {
				this._updateIcon(this.element[0].checked);
			},

			widget: function () {
				return this.label;
			},

			_getRadioGroup: function () {
				var group;
				var name = this.element[0].name;
				var nameSelector = "input[name='" + $.escapeSelector(name) + "']";

				if (!name) {
					return $([]);
				}

				if (this.form.length) {
					group = $(this.form[0].elements).filter(nameSelector);
				} else {
					// Not inside a form, check all inputs that also are not inside a form
					group = $(nameSelector).filter(function () {
						return $(this)._form().length === 0;
					});
				}

				return group.not(this.element);
			},

			_toggleClasses: function () {
				var checked = this.element[0].checked;
				this._toggleClass(
					this.label,
					"ui-checkboxradio-checked",
					"ui-state-active",
					checked
				);

				if (this.options.icon && this.type === "checkbox") {
					this._toggleClass(
						this.icon,
						null,
						"ui-icon-check ui-state-checked",
						checked
					)._toggleClass(this.icon, null, "ui-icon-blank", !checked);
				}

				if (this.type === "radio") {
					this._getRadioGroup().each(function () {
						var instance = $(this).checkboxradio("instance");

						if (instance) {
							instance._removeClass(
								instance.label,
								"ui-checkboxradio-checked",
								"ui-state-active"
							);
						}
					});
				}
			},

			_destroy: function () {
				this._unbindFormResetHandler();

				if (this.icon) {
					this.icon.remove();
					this.iconSpace.remove();
				}
			},

			_setOption: function (key, value) {
				// We don't allow the value to be set to nothing
				if (key === "label" && !value) {
					return;
				}

				this._super(key, value);

				if (key === "disabled") {
					this._toggleClass(this.label, null, "ui-state-disabled", value);
					this.element[0].disabled = value;

					// Don't refresh when setting disabled
					return;
				}
				this.refresh();
			},

			_updateIcon: function (checked) {
				var toAdd = "ui-icon ui-icon-background ";

				if (this.options.icon) {
					if (!this.icon) {
						this.icon = $("<span>");
						this.iconSpace = $("<span> </span>");
						this._addClass(this.iconSpace, "ui-checkboxradio-icon-space");
					}

					if (this.type === "checkbox") {
						toAdd += checked
							? "ui-icon-check ui-state-checked"
							: "ui-icon-blank";
						this._removeClass(
							this.icon,
							null,
							checked ? "ui-icon-blank" : "ui-icon-check"
						);
					} else {
						toAdd += "ui-icon-blank";
					}
					this._addClass(this.icon, "ui-checkboxradio-icon", toAdd);
					if (!checked) {
						this._removeClass(
							this.icon,
							null,
							"ui-icon-check ui-state-checked"
						);
					}
					this.icon.prependTo(this.label).after(this.iconSpace);
				} else if (this.icon !== undefined) {
					this.icon.remove();
					this.iconSpace.remove();
					delete this.icon;
				}
			},

			_updateLabel: function () {
				// Remove the contents of the label ( minus the icon, icon space, and input )
				var contents = this.label.contents().not(this.element[0]);
				if (this.icon) {
					contents = contents.not(this.icon[0]);
				}
				if (this.iconSpace) {
					contents = contents.not(this.iconSpace[0]);
				}
				contents.remove();

				this.label.append(this.options.label);
			},

			refresh: function () {
				var checked = this.element[0].checked,
					isDisabled = this.element[0].disabled;

				this._updateIcon(checked);
				this._toggleClass(
					this.label,
					"ui-checkboxradio-checked",
					"ui-state-active",
					checked
				);
				if (this.options.label !== null) {
					this._updateLabel();
				}

				if (isDisabled !== this.options.disabled) {
					this._setOptions({ disabled: isDisabled });
				}
			},
		},
	]);

	var widgetsCheckboxradio = $.ui.checkboxradio;

	//>>label: Button
	//>>group: Widgets
	//>>description: Enhances a form with themeable buttons.
	//>>docs: http://api.jqueryui.com/button/
	//>>demos: http://jqueryui.com/button/
	//>>css.structure: ../../themes/base/core.css
	//>>css.structure: ../../themes/base/button.css
	//>>css.theme: ../../themes/base/theme.css

	$.widget("ui.button", {
		version: "1.13.0",
		defaultElement: "<button>",
		options: {
			classes: {
				"ui-button": "ui-corner-all",
			},
			disabled: null,
			icon: null,
			iconPosition: "beginning",
			label: null,
			showLabel: true,
		},

		_getCreateOptions: function () {
			var disabled,
				// This is to support cases like in jQuery Mobile where the base widget does have
				// an implementation of _getCreateOptions
				options = this._super() || {};

			this.isInput = this.element.is("input");

			disabled = this.element[0].disabled;
			if (disabled != null) {
				options.disabled = disabled;
			}

			this.originalLabel = this.isInput
				? this.element.val()
				: this.element.html();
			if (this.originalLabel) {
				options.label = this.originalLabel;
			}

			return options;
		},

		_create: function () {
			if (!this.option.showLabel & !this.options.icon) {
				this.options.showLabel = true;
			}

			// We have to check the option again here even though we did in _getCreateOptions,
			// because null may have been passed on init which would override what was set in
			// _getCreateOptions
			if (this.options.disabled == null) {
				this.options.disabled = this.element[0].disabled || false;
			}

			this.hasTitle = !!this.element.attr("title");

			// Check to see if the label needs to be set or if its already correct
			if (this.options.label && this.options.label !== this.originalLabel) {
				if (this.isInput) {
					this.element.val(this.options.label);
				} else {
					this.element.html(this.options.label);
				}
			}
			this._addClass("ui-button", "ui-widget");
			this._setOption("disabled", this.options.disabled);
			this._enhance();

			if (this.element.is("a")) {
				this._on({
					keyup: function (event) {
						if (event.keyCode === $.ui.keyCode.SPACE) {
							event.preventDefault();

							// Support: PhantomJS <= 1.9, IE 8 Only
							// If a native click is available use it so we actually cause navigation
							// otherwise just trigger a click event
							if (this.element[0].click) {
								this.element[0].click();
							} else {
								this.element.trigger("click");
							}
						}
					},
				});
			}
		},

		_enhance: function () {
			if (!this.element.is("button")) {
				this.element.attr("role", "button");
			}

			if (this.options.icon) {
				this._updateIcon("icon", this.options.icon);
				this._updateTooltip();
			}
		},

		_updateTooltip: function () {
			this.title = this.element.attr("title");

			if (!this.options.showLabel && !this.title) {
				this.element.attr("title", this.options.label);
			}
		},

		_updateIcon: function (option, value) {
			var icon = option !== "iconPosition",
				position = icon ? this.options.iconPosition : value,
				displayBlock = position === "top" || position === "bottom";

			// Create icon
			if (!this.icon) {
				this.icon = $("<span>");

				this._addClass(this.icon, "ui-button-icon", "ui-icon");

				if (!this.options.showLabel) {
					this._addClass("ui-button-icon-only");
				}
			} else if (icon) {
				// If we are updating the icon remove the old icon class
				this._removeClass(this.icon, null, this.options.icon);
			}

			// If we are updating the icon add the new icon class
			if (icon) {
				this._addClass(this.icon, null, value);
			}

			this._attachIcon(position);

			// If the icon is on top or bottom we need to add the ui-widget-icon-block class and remove
			// the iconSpace if there is one.
			if (displayBlock) {
				this._addClass(this.icon, null, "ui-widget-icon-block");
				if (this.iconSpace) {
					this.iconSpace.remove();
				}
			} else {
				// Position is beginning or end so remove the ui-widget-icon-block class and add the
				// space if it does not exist
				if (!this.iconSpace) {
					this.iconSpace = $("<span> </span>");
					this._addClass(this.iconSpace, "ui-button-icon-space");
				}
				this._removeClass(this.icon, null, "ui-wiget-icon-block");
				this._attachIconSpace(position);
			}
		},

		_destroy: function () {
			this.element.removeAttr("role");

			if (this.icon) {
				this.icon.remove();
			}
			if (this.iconSpace) {
				this.iconSpace.remove();
			}
			if (!this.hasTitle) {
				this.element.removeAttr("title");
			}
		},

		_attachIconSpace: function (iconPosition) {
			this.icon[/^(?:end|bottom)/.test(iconPosition) ? "before" : "after"](
				this.iconSpace
			);
		},

		_attachIcon: function (iconPosition) {
			this.element[/^(?:end|bottom)/.test(iconPosition) ? "append" : "prepend"](
				this.icon
			);
		},

		_setOptions: function (options) {
			var newShowLabel =
					options.showLabel === undefined
						? this.options.showLabel
						: options.showLabel,
				newIcon = options.icon === undefined ? this.options.icon : options.icon;

			if (!newShowLabel && !newIcon) {
				options.showLabel = true;
			}
			this._super(options);
		},

		_setOption: function (key, value) {
			if (key === "icon") {
				if (value) {
					this._updateIcon(key, value);
				} else if (this.icon) {
					this.icon.remove();
					if (this.iconSpace) {
						this.iconSpace.remove();
					}
				}
			}

			if (key === "iconPosition") {
				this._updateIcon(key, value);
			}

			// Make sure we can't end up with a button that has neither text nor icon
			if (key === "showLabel") {
				this._toggleClass("ui-button-icon-only", null, !value);
				this._updateTooltip();
			}

			if (key === "label") {
				if (this.isInput) {
					this.element.val(value);
				} else {
					// If there is an icon, append it, else nothing then append the value
					// this avoids removal of the icon when setting label text
					this.element.html(value);
					if (this.icon) {
						this._attachIcon(this.options.iconPosition);
						this._attachIconSpace(this.options.iconPosition);
					}
				}
			}

			this._super(key, value);

			if (key === "disabled") {
				this._toggleClass(null, "ui-state-disabled", value);
				this.element[0].disabled = value;
				if (value) {
					this.element.trigger("blur");
				}
			}
		},

		refresh: function () {
			// Make sure to only check disabled if its an element that supports this otherwise
			// check for the disabled class to determine state
			var isDisabled = this.element.is("input, button")
				? this.element[0].disabled
				: this.element.hasClass("ui-button-disabled");

			if (isDisabled !== this.options.disabled) {
				this._setOptions({ disabled: isDisabled });
			}

			this._updateTooltip();
		},
	});

	// DEPRECATED
	if ($.uiBackCompat !== false) {
		// Text and Icons options
		$.widget("ui.button", $.ui.button, {
			options: {
				text: true,
				icons: {
					primary: null,
					secondary: null,
				},
			},

			_create: function () {
				if (this.options.showLabel && !this.options.text) {
					this.options.showLabel = this.options.text;
				}
				if (!this.options.showLabel && this.options.text) {
					this.options.text = this.options.showLabel;
				}
				if (
					!this.options.icon &&
					(this.options.icons.primary || this.options.icons.secondary)
				) {
					if (this.options.icons.primary) {
						this.options.icon = this.options.icons.primary;
					} else {
						this.options.icon = this.options.icons.secondary;
						this.options.iconPosition = "end";
					}
				} else if (this.options.icon) {
					this.options.icons.primary = this.options.icon;
				}
				this._super();
			},

			_setOption: function (key, value) {
				if (key === "text") {
					this._super("showLabel", value);
					return;
				}
				if (key === "showLabel") {
					this.options.text = value;
				}
				if (key === "icon") {
					this.options.icons.primary = value;
				}
				if (key === "icons") {
					if (value.primary) {
						this._super("icon", value.primary);
						this._super("iconPosition", "beginning");
					} else if (value.secondary) {
						this._super("icon", value.secondary);
						this._super("iconPosition", "end");
					}
				}
				this._superApply(arguments);
			},
		});

		$.fn.button = (function (orig) {
			return function (options) {
				var isMethodCall = typeof options === "string";
				var args = Array.prototype.slice.call(arguments, 1);
				var returnValue = this;

				if (isMethodCall) {
					// If this is an empty collection, we need to have the instance method
					// return undefined instead of the jQuery instance
					if (!this.length && options === "instance") {
						returnValue = undefined;
					} else {
						this.each(function () {
							var methodValue;
							var type = $(this).attr("type");
							var name =
								type !== "checkbox" && type !== "radio"
									? "button"
									: "checkboxradio";
							var instance = $.data(this, "ui-" + name);

							if (options === "instance") {
								returnValue = instance;
								return false;
							}

							if (!instance) {
								return $.error(
									"cannot call methods on button" +
										" prior to initialization; " +
										"attempted to call method '" +
										options +
										"'"
								);
							}

							if (
								typeof instance[options] !== "function" ||
								options.charAt(0) === "_"
							) {
								return $.error(
									"no such method '" +
										options +
										"' for button" +
										" widget instance"
								);
							}

							methodValue = instance[options].apply(instance, args);

							if (methodValue !== instance && methodValue !== undefined) {
								returnValue =
									methodValue && methodValue.jquery
										? returnValue.pushStack(methodValue.get())
										: methodValue;
								return false;
							}
						});
					}
				} else {
					// Allow multiple hashes to be passed on init
					if (args.length) {
						options = $.widget.extend.apply(null, [options].concat(args));
					}

					this.each(function () {
						var type = $(this).attr("type");
						var name =
							type !== "checkbox" && type !== "radio"
								? "button"
								: "checkboxradio";
						var instance = $.data(this, "ui-" + name);

						if (instance) {
							instance.option(options || {});
							if (instance._init) {
								instance._init();
							}
						} else {
							if (name === "button") {
								orig.call($(this), options);
								return;
							}

							$(this).checkboxradio($.extend({ icon: false }, options));
						}
					});
				}

				return returnValue;
			};
		})($.fn.button);

		$.fn.buttonset = function () {
			if (!$.ui.controlgroup) {
				$.error("Controlgroup widget missing");
			}
			if (
				arguments[0] === "option" &&
				arguments[1] === "items" &&
				arguments[2]
			) {
				return this.controlgroup.apply(this, [
					arguments[0],
					"items.button",
					arguments[2],
				]);
			}
			if (arguments[0] === "option" && arguments[1] === "items") {
				return this.controlgroup.apply(this, [arguments[0], "items.button"]);
			}
			if (typeof arguments[0] === "object" && arguments[0].items) {
				arguments[0].items = {
					button: arguments[0].items,
				};
			}
			return this.controlgroup.apply(this, arguments);
		};
	}

	var widgetsButton = $.ui.button;

	//>>label: Datepicker
	//>>group: Widgets
	//>>description: Displays a calendar from an input or inline for selecting dates.
	//>>docs: http://api.jqueryui.com/datepicker/
	//>>demos: http://jqueryui.com/datepicker/
	//>>css.structure: ../../themes/base/core.css
	//>>css.structure: ../../themes/base/datepicker.css
	//>>css.theme: ../../themes/base/theme.css

	$.extend($.ui, { datepicker: { version: "1.13.0" } });

	var datepicker_instActive;

	function datepicker_getZindex(elem) {
		var position, value;
		while (elem.length && elem[0] !== document) {
			// Ignore z-index if position is set to a value where z-index is ignored by the browser
			// This makes behavior of this function consistent across browsers
			// WebKit always returns auto if the element is positioned
			position = elem.css("position");
			if (
				position === "absolute" ||
				position === "relative" ||
				position === "fixed"
			) {
				// IE returns 0 when zIndex is not specified
				// other browsers return a string
				// we ignore the case of nested elements with an explicit value of 0
				// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
				value = parseInt(elem.css("zIndex"), 10);
				if (!isNaN(value) && value !== 0) {
					return value;
				}
			}
			elem = elem.parent();
		}

		return 0;
	}

	function Datepicker() {
		this._curInst = null; // The current instance in use
		this._keyEvent = false; // If the last event was a key event
		this._disabledInputs = []; // List of date picker inputs that have been disabled
		this._datepickerShowing = false; // True if the popup picker is showing , false if not
		this._inDialog = false; // True if showing within a "dialog", false if not
		this._mainDivId = "ui-datepicker-div"; // The ID of the main datepicker division
		this._inlineClass = "ui-datepicker-inline"; // The name of the inline marker class
		this._appendClass = "ui-datepicker-append"; // The name of the append marker class
		this._triggerClass = "ui-datepicker-trigger"; // The name of the trigger marker class
		this._dialogClass = "ui-datepicker-dialog"; // The name of the dialog marker class
		this._disableClass = "ui-datepicker-disabled"; // The name of the disabled covering marker class
		this._unselectableClass = "ui-datepicker-unselectable"; // The name of the unselectable cell marker class
		this._currentClass = "ui-datepicker-current-day"; // The name of the current day marker class
		this._dayOverClass = "ui-datepicker-days-cell-over"; // The name of the day hover marker class
		this.regional = []; // Available regional settings, indexed by language code
		this.regional[""] = {
			// Default regional settings
			closeText: "Done", // Display text for close link
			prevText: "Prev", // Display text for previous month link
			nextText: "Next", // Display text for next month link
			currentText: "Today", // Display text for current month link
			monthNames: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December",
			], // Names of months for drop-down and formatting
			monthNamesShort: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
			], // For formatting
			dayNames: [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
			], // For formatting
			dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], // For formatting
			dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], // Column headings for days starting at Sunday
			weekHeader: "Wk", // Column header for week of the year
			dateFormat: "mm/dd/yy", // See format options on parseDate
			firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
			isRTL: false, // True if right-to-left language, false if left-to-right
			showMonthAfterYear: false, // True if the year select precedes month, false for month then year
			yearSuffix: "", // Additional text to append to the year in the month headers,
			selectMonthLabel: "Select month", // Invisible label for month selector
			selectYearLabel: "Select year", // Invisible label for year selector
		};
		this._defaults = {
			// Global defaults for all the date picker instances
			showOn: "focus", // "focus" for popup on focus,
			// "button" for trigger button, or "both" for either
			showAnim: "fadeIn", // Name of jQuery animation for popup
			showOptions: {}, // Options for enhanced animations
			defaultDate: null, // Used when field is blank: actual date,
			// +/-number for offset from today, null for today
			appendText: "", // Display text following the input box, e.g. showing the format
			buttonText: "...", // Text for trigger button
			buttonImage: "", // URL for trigger button image
			buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
			hideIfNoPrevNext: false, // True to hide next/previous month links
			// if not applicable, false to just disable them
			navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
			gotoCurrent: false, // True if today link goes back to current selection instead
			changeMonth: false, // True if month can be selected directly, false if only prev/next
			changeYear: false, // True if year can be selected directly, false if only prev/next
			yearRange: "c-10:c+10", // Range of years to display in drop-down,
			// either relative to today's year (-nn:+nn), relative to currently displayed year
			// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
			showOtherMonths: false, // True to show dates in other months, false to leave blank
			selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
			showWeek: false, // True to show week of the year, false to not show it
			calculateWeek: this.iso8601Week, // How to calculate the week of the year,
			// takes a Date and returns the number of the week for it
			shortYearCutoff: "+10", // Short year values < this are in the current century,
			// > this are in the previous century,
			// string value starting with "+" for current year + value
			minDate: null, // The earliest selectable date, or null for no limit
			maxDate: null, // The latest selectable date, or null for no limit
			duration: "fast", // Duration of display/closure
			beforeShowDay: null, // Function that takes a date and returns an array with
			// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
			// [2] = cell title (optional), e.g. $.datepicker.noWeekends
			beforeShow: null, // Function that takes an input field and
			// returns a set of custom settings for the date picker
			onSelect: null, // Define a callback function when a date is selected
			onChangeMonthYear: null, // Define a callback function when the month or year is changed
			onClose: null, // Define a callback function when the datepicker is closed
			onUpdateDatepicker: null, // Define a callback function when the datepicker is updated
			numberOfMonths: 1, // Number of months to show at a time
			showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
			stepMonths: 1, // Number of months to step back/forward
			stepBigMonths: 12, // Number of months to step back/forward for the big links
			altField: "", // Selector for an alternate field to store selected dates into
			altFormat: "", // The date format to use for the alternate field
			constrainInput: true, // The input is constrained by the current date format
			showButtonPanel: false, // True to show button panel, false to not show it
			autoSize: false, // True to size the input for the date format, false to leave as is
			disabled: false, // The initial disabled state
		};
		$.extend(this._defaults, this.regional[""]);
		this.regional.en = $.extend(true, {}, this.regional[""]);
		this.regional["en-US"] = $.extend(true, {}, this.regional.en);
		this.dpDiv = datepicker_bindHover(
			$(
				"<div id='" +
					this._mainDivId +
					"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
			)
		);
	}

	$.extend(Datepicker.prototype, {
		markerClassName: "hasDatepicker",

		//Keep track of the maximum number of rows displayed (see #7043)
		maxRows: 4,

		// TODO rename to "widget" when switching to widget factory
		_widgetDatepicker: function () {
			return this.dpDiv;
		},

		setDefaults: function (settings) {
			datepicker_extendRemove(this._defaults, settings || {});
			return this;
		},

		_attachDatepicker: function (target, settings) {
			var nodeName, inline, inst;
			nodeName = target.nodeName.toLowerCase();
			inline = nodeName === "div" || nodeName === "span";
			if (!target.id) {
				this.uuid += 1;
				target.id = "dp" + this.uuid;
			}
			inst = this._newInst($(target), inline);
			inst.settings = $.extend({}, settings || {});
			if (nodeName === "input") {
				this._connectDatepicker(target, inst);
			} else if (inline) {
				this._inlineDatepicker(target, inst);
			}
		},

		_newInst: function (target, inline) {
			var id = target[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); // escape jQuery meta chars
			return {
				id: id,
				input: target, // associated target
				selectedDay: 0,
				selectedMonth: 0,
				selectedYear: 0, // current selection
				drawMonth: 0,
				drawYear: 0, // month being drawn
				inline: inline, // is datepicker inline or not
				dpDiv: !inline
					? this.dpDiv // presentation div
					: datepicker_bindHover(
							$(
								"<div class='" +
									this._inlineClass +
									" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
							)
					  ),
			};
		},

		_connectDatepicker: function (target, inst) {
			var input = $(target);
			inst.append = $([]);
			inst.trigger = $([]);
			if (input.hasClass(this.markerClassName)) {
				return;
			}
			this._attachments(input, inst);
			input
				.addClass(this.markerClassName)
				.on("keydown", this._doKeyDown)
				.on("keypress", this._doKeyPress)
				.on("keyup", this._doKeyUp);
			this._autoSize(inst);
			$.data(target, "datepicker", inst);

			//If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
			if (inst.settings.disabled) {
				this._disableDatepicker(target);
			}
		},

		_attachments: function (input, inst) {
			var showOn,
				buttonText,
				buttonImage,
				appendText = this._get(inst, "appendText"),
				isRTL = this._get(inst, "isRTL");

			if (inst.append) {
				inst.append.remove();
			}
			if (appendText) {
				inst.append = $("<span>").addClass(this._appendClass).text(appendText);
				input[isRTL ? "before" : "after"](inst.append);
			}

			input.off("focus", this._showDatepicker);

			if (inst.trigger) {
				inst.trigger.remove();
			}

			showOn = this._get(inst, "showOn");
			if (showOn === "focus" || showOn === "both") {
				// pop-up date picker when in the marked field
				input.on("focus", this._showDatepicker);
			}
			if (showOn === "button" || showOn === "both") {
				// pop-up date picker when button clicked
				buttonText = this._get(inst, "buttonText");
				buttonImage = this._get(inst, "buttonImage");

				if (this._get(inst, "buttonImageOnly")) {
					inst.trigger = $("<img>").addClass(this._triggerClass).attr({
						src: buttonImage,
						alt: buttonText,
						title: buttonText,
					});
				} else {
					inst.trigger = $("<button type='button'>").addClass(
						this._triggerClass
					);
					if (buttonImage) {
						inst.trigger.html(
							$("<img>").attr({
								src: buttonImage,
								alt: buttonText,
								title: buttonText,
							})
						);
					} else {
						inst.trigger.text(buttonText);
					}
				}

				input[isRTL ? "before" : "after"](inst.trigger);
				inst.trigger.on("click", function () {
					if (
						$.datepicker._datepickerShowing &&
						$.datepicker._lastInput === input[0]
					) {
						$.datepicker._hideDatepicker();
					} else if (
						$.datepicker._datepickerShowing &&
						$.datepicker._lastInput !== input[0]
					) {
						$.datepicker._hideDatepicker();
						$.datepicker._showDatepicker(input[0]);
					} else {
						$.datepicker._showDatepicker(input[0]);
					}
					return false;
				});
			}
		},

		_autoSize: function (inst) {
			if (this._get(inst, "autoSize") && !inst.inline) {
				var findMax,
					max,
					maxI,
					i,
					date = new Date(2009, 12 - 1, 20), // Ensure double digits
					dateFormat = this._get(inst, "dateFormat");

				if (dateFormat.match(/[DM]/)) {
					findMax = function (names) {
						max = 0;
						maxI = 0;
						for (i = 0; i < names.length; i++) {
							if (names[i].length > max) {
								max = names[i].length;
								maxI = i;
							}
						}
						return maxI;
					};
					date.setMonth(
						findMax(
							this._get(
								inst,
								dateFormat.match(/MM/) ? "monthNames" : "monthNamesShort"
							)
						)
					);
					date.setDate(
						findMax(
							this._get(
								inst,
								dateFormat.match(/DD/) ? "dayNames" : "dayNamesShort"
							)
						) +
							20 -
							date.getDay()
					);
				}
				inst.input.attr("size", this._formatDate(inst, date).length);
			}
		},

		_inlineDatepicker: function (target, inst) {
			var divSpan = $(target);
			if (divSpan.hasClass(this.markerClassName)) {
				return;
			}
			divSpan.addClass(this.markerClassName).append(inst.dpDiv);
			$.data(target, "datepicker", inst);
			this._setDate(inst, this._getDefaultDate(inst), true);
			this._updateDatepicker(inst);
			this._updateAlternate(inst);

			//If disabled option is true, disable the datepicker before showing it (see ticket #5665)
			if (inst.settings.disabled) {
				this._disableDatepicker(target);
			}

			// Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
			// http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
			inst.dpDiv.css("display", "block");
		},

		_dialogDatepicker: function (input, date, onSelect, settings, pos) {
			var id,
				browserWidth,
				browserHeight,
				scrollX,
				scrollY,
				inst = this._dialogInst; // internal instance

			if (!inst) {
				this.uuid += 1;
				id = "dp" + this.uuid;
				this._dialogInput = $(
					"<input type='text' id='" +
						id +
						"' style='position: absolute; top: -100px; width: 0px;'/>"
				);
				this._dialogInput.on("keydown", this._doKeyDown);
				$("body").append(this._dialogInput);
				inst = this._dialogInst = this._newInst(this._dialogInput, false);
				inst.settings = {};
				$.data(this._dialogInput[0], "datepicker", inst);
			}
			datepicker_extendRemove(inst.settings, settings || {});
			date =
				date && date.constructor === Date ? this._formatDate(inst, date) : date;
			this._dialogInput.val(date);

			this._pos = pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null;
			if (!this._pos) {
				browserWidth = document.documentElement.clientWidth;
				browserHeight = document.documentElement.clientHeight;
				scrollX =
					document.documentElement.scrollLeft || document.body.scrollLeft;
				scrollY = document.documentElement.scrollTop || document.body.scrollTop;
				this._pos =
					// should use actual width/height below
					[browserWidth / 2 - 100 + scrollX, browserHeight / 2 - 150 + scrollY];
			}

			// Move input on screen for focus, but hidden behind dialog
			this._dialogInput
				.css("left", this._pos[0] + 20 + "px")
				.css("top", this._pos[1] + "px");
			inst.settings.onSelect = onSelect;
			this._inDialog = true;
			this.dpDiv.addClass(this._dialogClass);
			this._showDatepicker(this._dialogInput[0]);
			if ($.blockUI) {
				$.blockUI(this.dpDiv);
			}
			$.data(this._dialogInput[0], "datepicker", inst);
			return this;
		},

		_destroyDatepicker: function (target) {
			var nodeName,
				$target = $(target),
				inst = $.data(target, "datepicker");

			if (!$target.hasClass(this.markerClassName)) {
				return;
			}

			nodeName = target.nodeName.toLowerCase();
			$.removeData(target, "datepicker");
			if (nodeName === "input") {
				inst.append.remove();
				inst.trigger.remove();
				$target
					.removeClass(this.markerClassName)
					.off("focus", this._showDatepicker)
					.off("keydown", this._doKeyDown)
					.off("keypress", this._doKeyPress)
					.off("keyup", this._doKeyUp);
			} else if (nodeName === "div" || nodeName === "span") {
				$target.removeClass(this.markerClassName).empty();
			}

			if (datepicker_instActive === inst) {
				datepicker_instActive = null;
				this._curInst = null;
			}
		},

		_enableDatepicker: function (target) {
			var nodeName,
				inline,
				$target = $(target),
				inst = $.data(target, "datepicker");

			if (!$target.hasClass(this.markerClassName)) {
				return;
			}

			nodeName = target.nodeName.toLowerCase();
			if (nodeName === "input") {
				target.disabled = false;
				inst.trigger
					.filter("button")
					.each(function () {
						this.disabled = false;
					})
					.end()
					.filter("img")
					.css({ opacity: "1.0", cursor: "" });
			} else if (nodeName === "div" || nodeName === "span") {
				inline = $target.children("." + this._inlineClass);
				inline.children().removeClass("ui-state-disabled");
				inline
					.find("select.ui-datepicker-month, select.ui-datepicker-year")
					.prop("disabled", false);
			}
			this._disabledInputs = $.map(
				this._disabledInputs,

				// Delete entry
				function (value) {
					return value === target ? null : value;
				}
			);
		},

		_disableDatepicker: function (target) {
			var nodeName,
				inline,
				$target = $(target),
				inst = $.data(target, "datepicker");

			if (!$target.hasClass(this.markerClassName)) {
				return;
			}

			nodeName = target.nodeName.toLowerCase();
			if (nodeName === "input") {
				target.disabled = true;
				inst.trigger
					.filter("button")
					.each(function () {
						this.disabled = true;
					})
					.end()
					.filter("img")
					.css({ opacity: "0.5", cursor: "default" });
			} else if (nodeName === "div" || nodeName === "span") {
				inline = $target.children("." + this._inlineClass);
				inline.children().addClass("ui-state-disabled");
				inline
					.find("select.ui-datepicker-month, select.ui-datepicker-year")
					.prop("disabled", true);
			}
			this._disabledInputs = $.map(
				this._disabledInputs,

				// Delete entry
				function (value) {
					return value === target ? null : value;
				}
			);
			this._disabledInputs[this._disabledInputs.length] = target;
		},

		_isDisabledDatepicker: function (target) {
			if (!target) {
				return false;
			}
			for (var i = 0; i < this._disabledInputs.length; i++) {
				if (this._disabledInputs[i] === target) {
					return true;
				}
			}
			return false;
		},

		_getInst: function (target) {
			try {
				return $.data(target, "datepicker");
			} catch (err) {
				throw "Missing instance data for this datepicker";
			}
		},

		_optionDatepicker: function (target, name, value) {
			var settings,
				date,
				minDate,
				maxDate,
				inst = this._getInst(target);

			if (arguments.length === 2 && typeof name === "string") {
				return name === "defaults"
					? $.extend({}, $.datepicker._defaults)
					: inst
					? name === "all"
						? $.extend({}, inst.settings)
						: this._get(inst, name)
					: null;
			}

			settings = name || {};
			if (typeof name === "string") {
				settings = {};
				settings[name] = value;
			}

			if (inst) {
				if (this._curInst === inst) {
					this._hideDatepicker();
				}

				date = this._getDateDatepicker(target, true);
				minDate = this._getMinMaxDate(inst, "min");
				maxDate = this._getMinMaxDate(inst, "max");
				datepicker_extendRemove(inst.settings, settings);

				// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
				if (
					minDate !== null &&
					settings.dateFormat !== undefined &&
					settings.minDate === undefined
				) {
					inst.settings.minDate = this._formatDate(inst, minDate);
				}
				if (
					maxDate !== null &&
					settings.dateFormat !== undefined &&
					settings.maxDate === undefined
				) {
					inst.settings.maxDate = this._formatDate(inst, maxDate);
				}
				if ("disabled" in settings) {
					if (settings.disabled) {
						this._disableDatepicker(target);
					} else {
						this._enableDatepicker(target);
					}
				}
				this._attachments($(target), inst);
				this._autoSize(inst);
				this._setDate(inst, date);
				this._updateAlternate(inst);
				this._updateDatepicker(inst);
			}
		},

		// Change method deprecated
		_changeDatepicker: function (target, name, value) {
			this._optionDatepicker(target, name, value);
		},

		_refreshDatepicker: function (target) {
			var inst = this._getInst(target);
			if (inst) {
				this._updateDatepicker(inst);
			}
		},

		_setDateDatepicker: function (target, date) {
			var inst = this._getInst(target);
			if (inst) {
				this._setDate(inst, date);
				this._updateDatepicker(inst);
				this._updateAlternate(inst);
			}
		},

		_getDateDatepicker: function (target, noDefault) {
			var inst = this._getInst(target);
			if (inst && !inst.inline) {
				this._setDateFromField(inst, noDefault);
			}
			return inst ? this._getDate(inst) : null;
		},

		_doKeyDown: function (event) {
			var onSelect,
				dateStr,
				sel,
				inst = $.datepicker._getInst(event.target),
				handled = true,
				isRTL = inst.dpDiv.is(".ui-datepicker-rtl");

			inst._keyEvent = true;
			if ($.datepicker._datepickerShowing) {
				switch (event.keyCode) {
					case 9:
						$.datepicker._hideDatepicker();
						handled = false;
						break; // hide on tab out
					case 13:
						sel = $(
							"td." +
								$.datepicker._dayOverClass +
								":not(." +
								$.datepicker._currentClass +
								")",
							inst.dpDiv
						);
						if (sel[0]) {
							$.datepicker._selectDay(
								event.target,
								inst.selectedMonth,
								inst.selectedYear,
								sel[0]
							);
						}

						onSelect = $.datepicker._get(inst, "onSelect");
						if (onSelect) {
							dateStr = $.datepicker._formatDate(inst);

							// Trigger custom callback
							onSelect.apply(inst.input ? inst.input[0] : null, [
								dateStr,
								inst,
							]);
						} else {
							$.datepicker._hideDatepicker();
						}

						return false; // don't submit the form
					case 27:
						$.datepicker._hideDatepicker();
						break; // hide on escape
					case 33:
						$.datepicker._adjustDate(
							event.target,
							event.ctrlKey
								? -$.datepicker._get(inst, "stepBigMonths")
								: -$.datepicker._get(inst, "stepMonths"),
							"M"
						);
						break; // previous month/year on page up/+ ctrl
					case 34:
						$.datepicker._adjustDate(
							event.target,
							event.ctrlKey
								? +$.datepicker._get(inst, "stepBigMonths")
								: +$.datepicker._get(inst, "stepMonths"),
							"M"
						);
						break; // next month/year on page down/+ ctrl
					case 35:
						if (event.ctrlKey || event.metaKey) {
							$.datepicker._clearDate(event.target);
						}
						handled = event.ctrlKey || event.metaKey;
						break; // clear on ctrl or command +end
					case 36:
						if (event.ctrlKey || event.metaKey) {
							$.datepicker._gotoToday(event.target);
						}
						handled = event.ctrlKey || event.metaKey;
						break; // current on ctrl or command +home
					case 37:
						if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, isRTL ? +1 : -1, "D");
						}
						handled = event.ctrlKey || event.metaKey;

						// -1 day on ctrl or command +left
						if (event.originalEvent.altKey) {
							$.datepicker._adjustDate(
								event.target,
								event.ctrlKey
									? -$.datepicker._get(inst, "stepBigMonths")
									: -$.datepicker._get(inst, "stepMonths"),
								"M"
							);
						}

						// next month/year on alt +left on Mac
						break;
					case 38:
						if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, -7, "D");
						}
						handled = event.ctrlKey || event.metaKey;
						break; // -1 week on ctrl or command +up
					case 39:
						if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, isRTL ? -1 : +1, "D");
						}
						handled = event.ctrlKey || event.metaKey;

						// +1 day on ctrl or command +right
						if (event.originalEvent.altKey) {
							$.datepicker._adjustDate(
								event.target,
								event.ctrlKey
									? +$.datepicker._get(inst, "stepBigMonths")
									: +$.datepicker._get(inst, "stepMonths"),
								"M"
							);
						}

						// next month/year on alt +right
						break;
					case 40:
						if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, +7, "D");
						}
						handled = event.ctrlKey || event.metaKey;
						break; // +1 week on ctrl or command +down
					default:
						handled = false;
				}
			} else if (event.keyCode === 36 && event.ctrlKey) {
				// display the date picker on ctrl+home
				$.datepicker._showDatepicker(this);
			} else {
				handled = false;
			}

			if (handled) {
				event.preventDefault();
				event.stopPropagation();
			}
		},

		_doKeyPress: function (event) {
			var chars,
				chr,
				inst = $.datepicker._getInst(event.target);

			if ($.datepicker._get(inst, "constrainInput")) {
				chars = $.datepicker._possibleChars(
					$.datepicker._get(inst, "dateFormat")
				);
				chr = String.fromCharCode(
					event.charCode == null ? event.keyCode : event.charCode
				);
				return (
					event.ctrlKey ||
					event.metaKey ||
					chr < " " ||
					!chars ||
					chars.indexOf(chr) > -1
				);
			}
		},

		_doKeyUp: function (event) {
			var date,
				inst = $.datepicker._getInst(event.target);

			if (inst.input.val() !== inst.lastVal) {
				try {
					date = $.datepicker.parseDate(
						$.datepicker._get(inst, "dateFormat"),
						inst.input ? inst.input.val() : null,
						$.datepicker._getFormatConfig(inst)
					);

					if (date) {
						// only if valid
						$.datepicker._setDateFromField(inst);
						$.datepicker._updateAlternate(inst);
						$.datepicker._updateDatepicker(inst);
					}
				} catch (err) {}
			}
			return true;
		},

		_showDatepicker: function (input) {
			input = input.target || input;
			if (input.nodeName.toLowerCase() !== "input") {
				// find from button/image trigger
				input = $("input", input.parentNode)[0];
			}

			if (
				$.datepicker._isDisabledDatepicker(input) ||
				$.datepicker._lastInput === input
			) {
				// already here
				return;
			}

			var inst,
				beforeShow,
				beforeShowSettings,
				isFixed,
				offset,
				showAnim,
				duration;

			inst = $.datepicker._getInst(input);
			if ($.datepicker._curInst && $.datepicker._curInst !== inst) {
				$.datepicker._curInst.dpDiv.stop(true, true);
				if (inst && $.datepicker._datepickerShowing) {
					$.datepicker._hideDatepicker($.datepicker._curInst.input[0]);
				}
			}

			beforeShow = $.datepicker._get(inst, "beforeShow");
			beforeShowSettings = beforeShow
				? beforeShow.apply(input, [input, inst])
				: {};
			if (beforeShowSettings === false) {
				return;
			}
			datepicker_extendRemove(inst.settings, beforeShowSettings);

			inst.lastVal = null;
			$.datepicker._lastInput = input;
			$.datepicker._setDateFromField(inst);

			if ($.datepicker._inDialog) {
				// hide cursor
				input.value = "";
			}
			if (!$.datepicker._pos) {
				// position below input
				$.datepicker._pos = $.datepicker._findPos(input);
				$.datepicker._pos[1] += input.offsetHeight; // add the height
			}

			isFixed = false;
			$(input)
				.parents()
				.each(function () {
					isFixed |= $(this).css("position") === "fixed";
					return !isFixed;
				});

			offset = { left: $.datepicker._pos[0], top: $.datepicker._pos[1] };
			$.datepicker._pos = null;

			//to avoid flashes on Firefox
			inst.dpDiv.empty();

			// determine sizing offscreen
			inst.dpDiv.css({
				position: "absolute",
				display: "block",
				top: "-1000px",
			});
			$.datepicker._updateDatepicker(inst);

			// fix width for dynamic number of date pickers
			// and adjust position before showing
			offset = $.datepicker._checkOffset(inst, offset, isFixed);
			inst.dpDiv.css({
				position:
					$.datepicker._inDialog && $.blockUI
						? "static"
						: isFixed
						? "fixed"
						: "absolute",
				display: "none",
				left: offset.left + "px",
				top: offset.top + "px",
			});

			if (!inst.inline) {
				showAnim = $.datepicker._get(inst, "showAnim");
				duration = $.datepicker._get(inst, "duration");
				inst.dpDiv.css("z-index", datepicker_getZindex($(input)) + 1);
				$.datepicker._datepickerShowing = true;

				if ($.effects && $.effects.effect[showAnim]) {
					inst.dpDiv.show(
						showAnim,
						$.datepicker._get(inst, "showOptions"),
						duration
					);
				} else {
					inst.dpDiv[showAnim || "show"](showAnim ? duration : null);
				}

				if ($.datepicker._shouldFocusInput(inst)) {
					inst.input.trigger("focus");
				}

				$.datepicker._curInst = inst;
			}
		},

		_updateDatepicker: function (inst) {
			this.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
			datepicker_instActive = inst; // for delegate hover events
			inst.dpDiv.empty().append(this._generateHTML(inst));
			this._attachHandlers(inst);

			var origyearshtml,
				numMonths = this._getNumberOfMonths(inst),
				cols = numMonths[1],
				width = 17,
				activeCell = inst.dpDiv.find("." + this._dayOverClass + " a"),
				onUpdateDatepicker = $.datepicker._get(inst, "onUpdateDatepicker");

			if (activeCell.length > 0) {
				datepicker_handleMouseover.apply(activeCell.get(0));
			}

			inst.dpDiv
				.removeClass(
					"ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
				)
				.width("");
			if (cols > 1) {
				inst.dpDiv
					.addClass("ui-datepicker-multi-" + cols)
					.css("width", width * cols + "em");
			}
			inst.dpDiv[
				(numMonths[0] !== 1 || numMonths[1] !== 1 ? "add" : "remove") + "Class"
			]("ui-datepicker-multi");
			inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") + "Class"](
				"ui-datepicker-rtl"
			);

			if (
				inst === $.datepicker._curInst &&
				$.datepicker._datepickerShowing &&
				$.datepicker._shouldFocusInput(inst)
			) {
				inst.input.trigger("focus");
			}

			// Deffered render of the years select (to avoid flashes on Firefox)
			if (inst.yearshtml) {
				origyearshtml = inst.yearshtml;
				setTimeout(function () {
					//assure that inst.yearshtml didn't change.
					if (origyearshtml === inst.yearshtml && inst.yearshtml) {
						inst.dpDiv
							.find("select.ui-datepicker-year")
							.first()
							.replaceWith(inst.yearshtml);
					}
					origyearshtml = inst.yearshtml = null;
				}, 0);
			}

			if (onUpdateDatepicker) {
				onUpdateDatepicker.apply(inst.input ? inst.input[0] : null, [inst]);
			}
		},

		// #6694 - don't focus the input if it's already focused
		// this breaks the change event in IE
		// Support: IE and jQuery <1.9
		_shouldFocusInput: function (inst) {
			return (
				inst.input &&
				inst.input.is(":visible") &&
				!inst.input.is(":disabled") &&
				!inst.input.is(":focus")
			);
		},

		_checkOffset: function (inst, offset, isFixed) {
			var dpWidth = inst.dpDiv.outerWidth(),
				dpHeight = inst.dpDiv.outerHeight(),
				inputWidth = inst.input ? inst.input.outerWidth() : 0,
				inputHeight = inst.input ? inst.input.outerHeight() : 0,
				viewWidth =
					document.documentElement.clientWidth +
					(isFixed ? 0 : $(document).scrollLeft()),
				viewHeight =
					document.documentElement.clientHeight +
					(isFixed ? 0 : $(document).scrollTop());

			offset.left -= this._get(inst, "isRTL") ? dpWidth - inputWidth : 0;
			offset.left -=
				isFixed && offset.left === inst.input.offset().left
					? $(document).scrollLeft()
					: 0;
			offset.top -=
				isFixed && offset.top === inst.input.offset().top + inputHeight
					? $(document).scrollTop()
					: 0;

			// Now check if datepicker is showing outside window viewport - move to a better place if so.
			offset.left -= Math.min(
				offset.left,
				offset.left + dpWidth > viewWidth && viewWidth > dpWidth
					? Math.abs(offset.left + dpWidth - viewWidth)
					: 0
			);
			offset.top -= Math.min(
				offset.top,
				offset.top + dpHeight > viewHeight && viewHeight > dpHeight
					? Math.abs(dpHeight + inputHeight)
					: 0
			);

			return offset;
		},

		_findPos: function (obj) {
			var position,
				inst = this._getInst(obj),
				isRTL = this._get(inst, "isRTL");

			while (
				obj &&
				(obj.type === "hidden" ||
					obj.nodeType !== 1 ||
					$.expr.pseudos.hidden(obj))
			) {
				obj = obj[isRTL ? "previousSibling" : "nextSibling"];
			}

			position = $(obj).offset();
			return [position.left, position.top];
		},

		_hideDatepicker: function (input) {
			var showAnim,
				duration,
				postProcess,
				onClose,
				inst = this._curInst;

			if (!inst || (input && inst !== $.data(input, "datepicker"))) {
				return;
			}

			if (this._datepickerShowing) {
				showAnim = this._get(inst, "showAnim");
				duration = this._get(inst, "duration");
				postProcess = function () {
					$.datepicker._tidyDialog(inst);
				};

				// DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
				if ($.effects && ($.effects.effect[showAnim] || $.effects[showAnim])) {
					inst.dpDiv.hide(
						showAnim,
						$.datepicker._get(inst, "showOptions"),
						duration,
						postProcess
					);
				} else {
					inst.dpDiv[
						showAnim === "slideDown"
							? "slideUp"
							: showAnim === "fadeIn"
							? "fadeOut"
							: "hide"
					](showAnim ? duration : null, postProcess);
				}

				if (!showAnim) {
					postProcess();
				}
				this._datepickerShowing = false;

				onClose = this._get(inst, "onClose");
				if (onClose) {
					onClose.apply(inst.input ? inst.input[0] : null, [
						inst.input ? inst.input.val() : "",
						inst,
					]);
				}

				this._lastInput = null;
				if (this._inDialog) {
					this._dialogInput.css({
						position: "absolute",
						left: "0",
						top: "-100px",
					});
					if ($.blockUI) {
						$.unblockUI();
						$("body").append(this.dpDiv);
					}
				}
				this._inDialog = false;
			}
		},

		_tidyDialog: function (inst) {
			inst.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
		},

		_checkExternalClick: function (event) {
			if (!$.datepicker._curInst) {
				return;
			}

			var $target = $(event.target),
				inst = $.datepicker._getInst($target[0]);

			if (
				($target[0].id !== $.datepicker._mainDivId &&
					$target.parents("#" + $.datepicker._mainDivId).length === 0 &&
					!$target.hasClass($.datepicker.markerClassName) &&
					!$target.closest("." + $.datepicker._triggerClass).length &&
					$.datepicker._datepickerShowing &&
					!($.datepicker._inDialog && $.blockUI)) ||
				($target.hasClass($.datepicker.markerClassName) &&
					$.datepicker._curInst !== inst)
			) {
				$.datepicker._hideDatepicker();
			}
		},

		_adjustDate: function (id, offset, period) {
			var target = $(id),
				inst = this._getInst(target[0]);

			if (this._isDisabledDatepicker(target[0])) {
				return;
			}
			this._adjustInstDate(inst, offset, period);
			this._updateDatepicker(inst);
		},

		_gotoToday: function (id) {
			var date,
				target = $(id),
				inst = this._getInst(target[0]);

			if (this._get(inst, "gotoCurrent") && inst.currentDay) {
				inst.selectedDay = inst.currentDay;
				inst.drawMonth = inst.selectedMonth = inst.currentMonth;
				inst.drawYear = inst.selectedYear = inst.currentYear;
			} else {
				date = new Date();
				inst.selectedDay = date.getDate();
				inst.drawMonth = inst.selectedMonth = date.getMonth();
				inst.drawYear = inst.selectedYear = date.getFullYear();
			}
			this._notifyChange(inst);
			this._adjustDate(target);
		},

		_selectMonthYear: function (id, select, period) {
			var target = $(id),
				inst = this._getInst(target[0]);

			inst["selected" + (period === "M" ? "Month" : "Year")] = inst[
				"draw" + (period === "M" ? "Month" : "Year")
			] = parseInt(select.options[select.selectedIndex].value, 10);

			this._notifyChange(inst);
			this._adjustDate(target);
		},

		_selectDay: function (id, month, year, td) {
			var inst,
				target = $(id);

			if (
				$(td).hasClass(this._unselectableClass) ||
				this._isDisabledDatepicker(target[0])
			) {
				return;
			}

			inst = this._getInst(target[0]);
			inst.selectedDay = inst.currentDay = parseInt(
				$("a", td).attr("data-date")
			);
			inst.selectedMonth = inst.currentMonth = month;
			inst.selectedYear = inst.currentYear = year;
			this._selectDate(
				id,
				this._formatDate(
					inst,
					inst.currentDay,
					inst.currentMonth,
					inst.currentYear
				)
			);
		},

		_clearDate: function (id) {
			var target = $(id);
			this._selectDate(target, "");
		},

		_selectDate: function (id, dateStr) {
			var onSelect,
				target = $(id),
				inst = this._getInst(target[0]);

			dateStr = dateStr != null ? dateStr : this._formatDate(inst);
			if (inst.input) {
				inst.input.val(dateStr);
			}
			this._updateAlternate(inst);

			onSelect = this._get(inst, "onSelect");
			if (onSelect) {
				onSelect.apply(inst.input ? inst.input[0] : null, [dateStr, inst]); // trigger custom callback
			} else if (inst.input) {
				inst.input.trigger("change"); // fire the change event
			}

			if (inst.inline) {
				this._updateDatepicker(inst);
			} else {
				this._hideDatepicker();
				this._lastInput = inst.input[0];
				if (typeof inst.input[0] !== "object") {
					inst.input.trigger("focus"); // restore focus
				}
				this._lastInput = null;
			}
		},

		_updateAlternate: function (inst) {
			var altFormat,
				date,
				dateStr,
				altField = this._get(inst, "altField");

			if (altField) {
				// update alternate field too
				altFormat =
					this._get(inst, "altFormat") || this._get(inst, "dateFormat");
				date = this._getDate(inst);
				dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
				$(document).find(altField).val(dateStr);
			}
		},

		noWeekends: function (date) {
			var day = date.getDay();
			return [day > 0 && day < 6, ""];
		},

		iso8601Week: function (date) {
			var time,
				checkDate = new Date(date.getTime());

			// Find Thursday of this week starting on Monday
			checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));

			time = checkDate.getTime();
			checkDate.setMonth(0); // Compare with Jan 1
			checkDate.setDate(1);
			return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
		},

		parseDate: function (format, value, settings) {
			if (format == null || value == null) {
				throw "Invalid arguments";
			}

			value = typeof value === "object" ? value.toString() : value + "";
			if (value === "") {
				return null;
			}

			var iFormat,
				dim,
				extra,
				iValue = 0,
				shortYearCutoffTemp =
					(settings ? settings.shortYearCutoff : null) ||
					this._defaults.shortYearCutoff,
				shortYearCutoff =
					typeof shortYearCutoffTemp !== "string"
						? shortYearCutoffTemp
						: (new Date().getFullYear() % 100) +
						  parseInt(shortYearCutoffTemp, 10),
				dayNamesShort =
					(settings ? settings.dayNamesShort : null) ||
					this._defaults.dayNamesShort,
				dayNames =
					(settings ? settings.dayNames : null) || this._defaults.dayNames,
				monthNamesShort =
					(settings ? settings.monthNamesShort : null) ||
					this._defaults.monthNamesShort,
				monthNames =
					(settings ? settings.monthNames : null) || this._defaults.monthNames,
				year = -1,
				month = -1,
				day = -1,
				doy = -1,
				literal = false,
				date,
				// Check whether a format character is doubled
				lookAhead = function (match) {
					var matches =
						iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
					if (matches) {
						iFormat++;
					}
					return matches;
				},
				// Extract a number from the string value
				getNumber = function (match) {
					var isDoubled = lookAhead(match),
						size =
							match === "@"
								? 14
								: match === "!"
								? 20
								: match === "y" && isDoubled
								? 4
								: match === "o"
								? 3
								: 2,
						minSize = match === "y" ? size : 1,
						digits = new RegExp("^\\d{" + minSize + "," + size + "}"),
						num = value.substring(iValue).match(digits);
					if (!num) {
						throw "Missing number at position " + iValue;
					}
					iValue += num[0].length;
					return parseInt(num[0], 10);
				},
				// Extract a name from the string value and convert to an index
				getName = function (match, shortNames, longNames) {
					var index = -1,
						names = $.map(
							lookAhead(match) ? longNames : shortNames,
							function (v, k) {
								return [[k, v]];
							}
						).sort(function (a, b) {
							return -(a[1].length - b[1].length);
						});

					$.each(names, function (i, pair) {
						var name = pair[1];
						if (
							value.substr(iValue, name.length).toLowerCase() ===
							name.toLowerCase()
						) {
							index = pair[0];
							iValue += name.length;
							return false;
						}
					});
					if (index !== -1) {
						return index + 1;
					} else {
						throw "Unknown name at position " + iValue;
					}
				},
				// Confirm that a literal character matches the string value
				checkLiteral = function () {
					if (value.charAt(iValue) !== format.charAt(iFormat)) {
						throw "Unexpected literal at position " + iValue;
					}
					iValue++;
				};

			for (iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal) {
					if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
						literal = false;
					} else {
						checkLiteral();
					}
				} else {
					switch (format.charAt(iFormat)) {
						case "d":
							day = getNumber("d");
							break;
						case "D":
							getName("D", dayNamesShort, dayNames);
							break;
						case "o":
							doy = getNumber("o");
							break;
						case "m":
							month = getNumber("m");
							break;
						case "M":
							month = getName("M", monthNamesShort, monthNames);
							break;
						case "y":
							year = getNumber("y");
							break;
						case "@":
							date = new Date(getNumber("@"));
							year = date.getFullYear();
							month = date.getMonth() + 1;
							day = date.getDate();
							break;
						case "!":
							date = new Date((getNumber("!") - this._ticksTo1970) / 10000);
							year = date.getFullYear();
							month = date.getMonth() + 1;
							day = date.getDate();
							break;
						case "'":
							if (lookAhead("'")) {
								checkLiteral();
							} else {
								literal = true;
							}
							break;
						default:
							checkLiteral();
					}
				}
			}

			if (iValue < value.length) {
				extra = value.substr(iValue);
				if (!/^\s+/.test(extra)) {
					throw "Extra/unparsed characters found in date: " + extra;
				}
			}

			if (year === -1) {
				year = new Date().getFullYear();
			} else if (year < 100) {
				year +=
					new Date().getFullYear() -
					(new Date().getFullYear() % 100) +
					(year <= shortYearCutoff ? 0 : -100);
			}

			if (doy > -1) {
				month = 1;
				day = doy;
				do {
					dim = this._getDaysInMonth(year, month - 1);
					if (day <= dim) {
						break;
					}
					month++;
					day -= dim;
				} while (true);
			}

			date = this._daylightSavingAdjust(new Date(year, month - 1, day));
			if (
				date.getFullYear() !== year ||
				date.getMonth() + 1 !== month ||
				date.getDate() !== day
			) {
				throw "Invalid date"; // E.g. 31/02/00
			}
			return date;
		},

		ATOM: "yy-mm-dd", // RFC 3339 (ISO 8601)
		COOKIE: "D, dd M yy",
		ISO_8601: "yy-mm-dd",
		RFC_822: "D, d M y",
		RFC_850: "DD, dd-M-y",
		RFC_1036: "D, d M y",
		RFC_1123: "D, d M yy",
		RFC_2822: "D, d M yy",
		RSS: "D, d M y", // RFC 822
		TICKS: "!",
		TIMESTAMP: "@",
		W3C: "yy-mm-dd", // ISO 8601

		_ticksTo1970:
			((1970 - 1) * 365 +
				Math.floor(1970 / 4) -
				Math.floor(1970 / 100) +
				Math.floor(1970 / 400)) *
			24 *
			60 *
			60 *
			10000000,

		formatDate: function (format, date, settings) {
			if (!date) {
				return "";
			}

			var iFormat,
				dayNamesShort =
					(settings ? settings.dayNamesShort : null) ||
					this._defaults.dayNamesShort,
				dayNames =
					(settings ? settings.dayNames : null) || this._defaults.dayNames,
				monthNamesShort =
					(settings ? settings.monthNamesShort : null) ||
					this._defaults.monthNamesShort,
				monthNames =
					(settings ? settings.monthNames : null) || this._defaults.monthNames,
				// Check whether a format character is doubled
				lookAhead = function (match) {
					var matches =
						iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
					if (matches) {
						iFormat++;
					}
					return matches;
				},
				// Format a number, with leading zero if necessary
				formatNumber = function (match, value, len) {
					var num = "" + value;
					if (lookAhead(match)) {
						while (num.length < len) {
							num = "0" + num;
						}
					}
					return num;
				},
				// Format a name, short or long as requested
				formatName = function (match, value, shortNames, longNames) {
					return lookAhead(match) ? longNames[value] : shortNames[value];
				},
				output = "",
				literal = false;

			if (date) {
				for (iFormat = 0; iFormat < format.length; iFormat++) {
					if (literal) {
						if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
							literal = false;
						} else {
							output += format.charAt(iFormat);
						}
					} else {
						switch (format.charAt(iFormat)) {
							case "d":
								output += formatNumber("d", date.getDate(), 2);
								break;
							case "D":
								output += formatName(
									"D",
									date.getDay(),
									dayNamesShort,
									dayNames
								);
								break;
							case "o":
								output += formatNumber(
									"o",
									Math.round(
										(new Date(
											date.getFullYear(),
											date.getMonth(),
											date.getDate()
										).getTime() -
											new Date(date.getFullYear(), 0, 0).getTime()) /
											86400000
									),
									3
								);
								break;
							case "m":
								output += formatNumber("m", date.getMonth() + 1, 2);
								break;
							case "M":
								output += formatName(
									"M",
									date.getMonth(),
									monthNamesShort,
									monthNames
								);
								break;
							case "y":
								output += lookAhead("y")
									? date.getFullYear()
									: (date.getFullYear() % 100 < 10 ? "0" : "") +
									  (date.getFullYear() % 100);
								break;
							case "@":
								output += date.getTime();
								break;
							case "!":
								output += date.getTime() * 10000 + this._ticksTo1970;
								break;
							case "'":
								if (lookAhead("'")) {
									output += "'";
								} else {
									literal = true;
								}
								break;
							default:
								output += format.charAt(iFormat);
						}
					}
				}
			}
			return output;
		},

		_possibleChars: function (format) {
			var iFormat,
				chars = "",
				literal = false,
				// Check whether a format character is doubled
				lookAhead = function (match) {
					var matches =
						iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
					if (matches) {
						iFormat++;
					}
					return matches;
				};

			for (iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal) {
					if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
						literal = false;
					} else {
						chars += format.charAt(iFormat);
					}
				} else {
					switch (format.charAt(iFormat)) {
						case "d":
						case "m":
						case "y":
						case "@":
							chars += "0123456789";
							break;
						case "D":
						case "M":
							return null; // Accept anything
						case "'":
							if (lookAhead("'")) {
								chars += "'";
							} else {
								literal = true;
							}
							break;
						default:
							chars += format.charAt(iFormat);
					}
				}
			}
			return chars;
		},

		_get: function (inst, name) {
			return inst.settings[name] !== undefined
				? inst.settings[name]
				: this._defaults[name];
		},

		_setDateFromField: function (inst, noDefault) {
			if (inst.input.val() === inst.lastVal) {
				return;
			}

			var dateFormat = this._get(inst, "dateFormat"),
				dates = (inst.lastVal = inst.input ? inst.input.val() : null),
				defaultDate = this._getDefaultDate(inst),
				date = defaultDate,
				settings = this._getFormatConfig(inst);

			try {
				date = this.parseDate(dateFormat, dates, settings) || defaultDate;
			} catch (event) {
				dates = noDefault ? "" : dates;
			}
			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
			inst.currentDay = dates ? date.getDate() : 0;
			inst.currentMonth = dates ? date.getMonth() : 0;
			inst.currentYear = dates ? date.getFullYear() : 0;
			this._adjustInstDate(inst);
		},

		_getDefaultDate: function (inst) {
			return this._restrictMinMax(
				inst,
				this._determineDate(inst, this._get(inst, "defaultDate"), new Date())
			);
		},

		_determineDate: function (inst, date, defaultDate) {
			var offsetNumeric = function (offset) {
					var date = new Date();
					date.setDate(date.getDate() + offset);
					return date;
				},
				offsetString = function (offset) {
					try {
						return $.datepicker.parseDate(
							$.datepicker._get(inst, "dateFormat"),
							offset,
							$.datepicker._getFormatConfig(inst)
						);
					} catch (e) {
						// Ignore
					}

					var date =
							(offset.toLowerCase().match(/^c/)
								? $.datepicker._getDate(inst)
								: null) || new Date(),
						year = date.getFullYear(),
						month = date.getMonth(),
						day = date.getDate(),
						pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
						matches = pattern.exec(offset);

					while (matches) {
						switch (matches[2] || "d") {
							case "d":
							case "D":
								day += parseInt(matches[1], 10);
								break;
							case "w":
							case "W":
								day += parseInt(matches[1], 10) * 7;
								break;
							case "m":
							case "M":
								month += parseInt(matches[1], 10);
								day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
								break;
							case "y":
							case "Y":
								year += parseInt(matches[1], 10);
								day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
								break;
						}
						matches = pattern.exec(offset);
					}
					return new Date(year, month, day);
				},
				newDate =
					date == null || date === ""
						? defaultDate
						: typeof date === "string"
						? offsetString(date)
						: typeof date === "number"
						? isNaN(date)
							? defaultDate
							: offsetNumeric(date)
						: new Date(date.getTime());

			newDate =
				newDate && newDate.toString() === "Invalid Date"
					? defaultDate
					: newDate;
			if (newDate) {
				newDate.setHours(0);
				newDate.setMinutes(0);
				newDate.setSeconds(0);
				newDate.setMilliseconds(0);
			}
			return this._daylightSavingAdjust(newDate);
		},

		_daylightSavingAdjust: function (date) {
			if (!date) {
				return null;
			}
			date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
			return date;
		},

		_setDate: function (inst, date, noChange) {
			var clear = !date,
				origMonth = inst.selectedMonth,
				origYear = inst.selectedYear,
				newDate = this._restrictMinMax(
					inst,
					this._determineDate(inst, date, new Date())
				);

			inst.selectedDay = inst.currentDay = newDate.getDate();
			inst.drawMonth =
				inst.selectedMonth =
				inst.currentMonth =
					newDate.getMonth();
			inst.drawYear =
				inst.selectedYear =
				inst.currentYear =
					newDate.getFullYear();
			if (
				(origMonth !== inst.selectedMonth || origYear !== inst.selectedYear) &&
				!noChange
			) {
				this._notifyChange(inst);
			}
			this._adjustInstDate(inst);
			if (inst.input) {
				inst.input.val(clear ? "" : this._formatDate(inst));
			}
		},

		_getDate: function (inst) {
			var startDate =
				!inst.currentYear || (inst.input && inst.input.val() === "")
					? null
					: this._daylightSavingAdjust(
							new Date(inst.currentYear, inst.currentMonth, inst.currentDay)
					  );
			return startDate;
		},

		_attachHandlers: function (inst) {
			var stepMonths = this._get(inst, "stepMonths"),
				id = "#" + inst.id.replace(/\\\\/g, "\\");
			inst.dpDiv.find("[data-handler]").map(function () {
				var handler = {
					prev: function () {
						$.datepicker._adjustDate(id, -stepMonths, "M");
					},
					next: function () {
						$.datepicker._adjustDate(id, +stepMonths, "M");
					},
					hide: function () {
						$.datepicker._hideDatepicker();
					},
					today: function () {
						$.datepicker._gotoToday(id);
					},
					selectDay: function () {
						$.datepicker._selectDay(
							id,
							+this.getAttribute("data-month"),
							+this.getAttribute("data-year"),
							this
						);
						return false;
					},
					selectMonth: function () {
						$.datepicker._selectMonthYear(id, this, "M");
						return false;
					},
					selectYear: function () {
						$.datepicker._selectMonthYear(id, this, "Y");
						return false;
					},
				};
				$(this).on(
					this.getAttribute("data-event"),
					handler[this.getAttribute("data-handler")]
				);
			});
		},

		_generateHTML: function (inst) {
			var maxDraw,
				prevText,
				prev,
				nextText,
				next,
				currentText,
				gotoDate,
				controls,
				buttonPanel,
				firstDay,
				showWeek,
				dayNames,
				dayNamesMin,
				monthNames,
				monthNamesShort,
				beforeShowDay,
				showOtherMonths,
				selectOtherMonths,
				defaultDate,
				html,
				dow,
				row,
				group,
				col,
				selectedDate,
				cornerClass,
				calender,
				thead,
				day,
				daysInMonth,
				leadDays,
				curRows,
				numRows,
				printDate,
				dRow,
				tbody,
				daySettings,
				otherMonth,
				unselectable,
				tempDate = new Date(),
				today = this._daylightSavingAdjust(
					new Date(
						tempDate.getFullYear(),
						tempDate.getMonth(),
						tempDate.getDate()
					)
				), // clear time
				isRTL = this._get(inst, "isRTL"),
				showButtonPanel = this._get(inst, "showButtonPanel"),
				hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext"),
				navigationAsDateFormat = this._get(inst, "navigationAsDateFormat"),
				numMonths = this._getNumberOfMonths(inst),
				showCurrentAtPos = this._get(inst, "showCurrentAtPos"),
				stepMonths = this._get(inst, "stepMonths"),
				isMultiMonth = numMonths[0] !== 1 || numMonths[1] !== 1,
				currentDate = this._daylightSavingAdjust(
					!inst.currentDay
						? new Date(9999, 9, 9)
						: new Date(inst.currentYear, inst.currentMonth, inst.currentDay)
				),
				minDate = this._getMinMaxDate(inst, "min"),
				maxDate = this._getMinMaxDate(inst, "max"),
				drawMonth = inst.drawMonth - showCurrentAtPos,
				drawYear = inst.drawYear;

			if (drawMonth < 0) {
				drawMonth += 12;
				drawYear--;
			}
			if (maxDate) {
				maxDraw = this._daylightSavingAdjust(
					new Date(
						maxDate.getFullYear(),
						maxDate.getMonth() - numMonths[0] * numMonths[1] + 1,
						maxDate.getDate()
					)
				);
				maxDraw = minDate && maxDraw < minDate ? minDate : maxDraw;
				while (
					this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw
				) {
					drawMonth--;
					if (drawMonth < 0) {
						drawMonth = 11;
						drawYear--;
					}
				}
			}
			inst.drawMonth = drawMonth;
			inst.drawYear = drawYear;

			prevText = this._get(inst, "prevText");
			prevText = !navigationAsDateFormat
				? prevText
				: this.formatDate(
						prevText,
						this._daylightSavingAdjust(
							new Date(drawYear, drawMonth - stepMonths, 1)
						),
						this._getFormatConfig(inst)
				  );

			if (this._canAdjustMonth(inst, -1, drawYear, drawMonth)) {
				prev = $("<a>")
					.attr({
						class: "ui-datepicker-prev ui-corner-all",
						"data-handler": "prev",
						"data-event": "click",
						title: prevText,
					})
					.append(
						$("<span>")
							.addClass(
								"ui-icon ui-icon-circle-triangle-" + (isRTL ? "e" : "w")
							)
							.text(prevText)
					)[0].outerHTML;
			} else if (hideIfNoPrevNext) {
				prev = "";
			} else {
				prev = $("<a>")
					.attr({
						class: "ui-datepicker-prev ui-corner-all ui-state-disabled",
						title: prevText,
					})
					.append(
						$("<span>")
							.addClass(
								"ui-icon ui-icon-circle-triangle-" + (isRTL ? "e" : "w")
							)
							.text(prevText)
					)[0].outerHTML;
			}

			nextText = this._get(inst, "nextText");
			nextText = !navigationAsDateFormat
				? nextText
				: this.formatDate(
						nextText,
						this._daylightSavingAdjust(
							new Date(drawYear, drawMonth + stepMonths, 1)
						),
						this._getFormatConfig(inst)
				  );

			if (this._canAdjustMonth(inst, +1, drawYear, drawMonth)) {
				next = $("<a>")
					.attr({
						class: "ui-datepicker-next ui-corner-all",
						"data-handler": "next",
						"data-event": "click",
						title: nextText,
					})
					.append(
						$("<span>")
							.addClass(
								"ui-icon ui-icon-circle-triangle-" + (isRTL ? "w" : "e")
							)
							.text(nextText)
					)[0].outerHTML;
			} else if (hideIfNoPrevNext) {
				next = "";
			} else {
				next = $("<a>")
					.attr({
						class: "ui-datepicker-next ui-corner-all ui-state-disabled",
						title: nextText,
					})
					.append(
						$("<span>")
							.attr(
								"class",
								"ui-icon ui-icon-circle-triangle-" + (isRTL ? "w" : "e")
							)
							.text(nextText)
					)[0].outerHTML;
			}

			currentText = this._get(inst, "currentText");
			gotoDate =
				this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today;
			currentText = !navigationAsDateFormat
				? currentText
				: this.formatDate(currentText, gotoDate, this._getFormatConfig(inst));

			controls = "";
			if (!inst.inline) {
				controls = $("<button>")
					.attr({
						type: "button",
						class:
							"ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all",
						"data-handler": "hide",
						"data-event": "click",
					})
					.text(this._get(inst, "closeText"))[0].outerHTML;
			}

			buttonPanel = "";
			if (showButtonPanel) {
				buttonPanel = $(
					"<div class='ui-datepicker-buttonpane ui-widget-content'>"
				)
					.append(isRTL ? controls : "")
					.append(
						this._isInRange(inst, gotoDate)
							? $("<button>")
									.attr({
										type: "button",
										class:
											"ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all",
										"data-handler": "today",
										"data-event": "click",
									})
									.text(currentText)
							: ""
					)
					.append(isRTL ? "" : controls)[0].outerHTML;
			}

			firstDay = parseInt(this._get(inst, "firstDay"), 10);
			firstDay = isNaN(firstDay) ? 0 : firstDay;

			showWeek = this._get(inst, "showWeek");
			dayNames = this._get(inst, "dayNames");
			dayNamesMin = this._get(inst, "dayNamesMin");
			monthNames = this._get(inst, "monthNames");
			monthNamesShort = this._get(inst, "monthNamesShort");
			beforeShowDay = this._get(inst, "beforeShowDay");
			showOtherMonths = this._get(inst, "showOtherMonths");
			selectOtherMonths = this._get(inst, "selectOtherMonths");
			defaultDate = this._getDefaultDate(inst);
			html = "";

			for (row = 0; row < numMonths[0]; row++) {
				group = "";
				this.maxRows = 4;
				for (col = 0; col < numMonths[1]; col++) {
					selectedDate = this._daylightSavingAdjust(
						new Date(drawYear, drawMonth, inst.selectedDay)
					);
					cornerClass = " ui-corner-all";
					calender = "";
					if (isMultiMonth) {
						calender += "<div class='ui-datepicker-group";
						if (numMonths[1] > 1) {
							switch (col) {
								case 0:
									calender += " ui-datepicker-group-first";
									cornerClass = " ui-corner-" + (isRTL ? "right" : "left");
									break;
								case numMonths[1] - 1:
									calender += " ui-datepicker-group-last";
									cornerClass = " ui-corner-" + (isRTL ? "left" : "right");
									break;
								default:
									calender += " ui-datepicker-group-middle";
									cornerClass = "";
									break;
							}
						}
						calender += "'>";
					}
					calender +=
						"<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
						cornerClass +
						"'>" +
						(/all|left/.test(cornerClass) && row === 0
							? isRTL
								? next
								: prev
							: "") +
						(/all|right/.test(cornerClass) && row === 0
							? isRTL
								? prev
								: next
							: "") +
						this._generateMonthYearHeader(
							inst,
							drawMonth,
							drawYear,
							minDate,
							maxDate,
							row > 0 || col > 0,
							monthNames,
							monthNamesShort
						) + // draw month headers
						"</div><table class='ui-datepicker-calendar'><thead>" +
						"<tr>";
					thead = showWeek
						? "<th class='ui-datepicker-week-col'>" +
						  this._get(inst, "weekHeader") +
						  "</th>"
						: "";
					for (dow = 0; dow < 7; dow++) {
						// days of the week
						day = (dow + firstDay) % 7;
						thead +=
							"<th scope='col'" +
							((dow + firstDay + 6) % 7 >= 5
								? " class='ui-datepicker-week-end'"
								: "") +
							">" +
							"<span title='" +
							dayNames[day] +
							"'>" +
							dayNamesMin[day] +
							"</span></th>";
					}
					calender += thead + "</tr></thead><tbody>";
					daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
					if (
						drawYear === inst.selectedYear &&
						drawMonth === inst.selectedMonth
					) {
						inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
					}
					leadDays =
						(this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
					curRows = Math.ceil((leadDays + daysInMonth) / 7); // calculate the number of rows to generate
					numRows = isMultiMonth
						? this.maxRows > curRows
							? this.maxRows
							: curRows
						: curRows; //If multiple months, use the higher number of rows (see #7043)
					this.maxRows = numRows;
					printDate = this._daylightSavingAdjust(
						new Date(drawYear, drawMonth, 1 - leadDays)
					);
					for (dRow = 0; dRow < numRows; dRow++) {
						// create date picker rows
						calender += "<tr>";
						tbody = !showWeek
							? ""
							: "<td class='ui-datepicker-week-col'>" +
							  this._get(inst, "calculateWeek")(printDate) +
							  "</td>";
						for (dow = 0; dow < 7; dow++) {
							// create date picker days
							daySettings = beforeShowDay
								? beforeShowDay.apply(inst.input ? inst.input[0] : null, [
										printDate,
								  ])
								: [true, ""];
							otherMonth = printDate.getMonth() !== drawMonth;
							unselectable =
								(otherMonth && !selectOtherMonths) ||
								!daySettings[0] ||
								(minDate && printDate < minDate) ||
								(maxDate && printDate > maxDate);
							tbody +=
								"<td class='" +
								((dow + firstDay + 6) % 7 >= 5
									? " ui-datepicker-week-end"
									: "") + // highlight weekends
								(otherMonth ? " ui-datepicker-other-month" : "") + // highlight days from other months
								((printDate.getTime() === selectedDate.getTime() &&
									drawMonth === inst.selectedMonth &&
									inst._keyEvent) || // user pressed key
								(defaultDate.getTime() === printDate.getTime() &&
									defaultDate.getTime() === selectedDate.getTime())
									? // or defaultDate is current printedDate and defaultDate is selectedDate
									  " " + this._dayOverClass
									: "") + // highlight selected day
								(unselectable
									? " " + this._unselectableClass + " ui-state-disabled"
									: "") + // highlight unselectable days
								(otherMonth && !showOtherMonths
									? ""
									: " " +
									  daySettings[1] + // highlight custom dates
									  (printDate.getTime() === currentDate.getTime()
											? " " + this._currentClass
											: "") + // highlight selected day
									  (printDate.getTime() === today.getTime()
											? " ui-datepicker-today"
											: "")) +
								"'" + // highlight today (if different)
								((!otherMonth || showOtherMonths) && daySettings[2]
									? " title='" + daySettings[2].replace(/'/g, "&#39;") + "'"
									: "") + // cell title
								(unselectable
									? ""
									: " data-handler='selectDay' data-event='click' data-month='" +
									  printDate.getMonth() +
									  "' data-year='" +
									  printDate.getFullYear() +
									  "'") +
								">" + // actions
								(otherMonth && !showOtherMonths
									? "&#xa0;" // display for other months
									: unselectable
									? "<span class='ui-state-default'>" +
									  printDate.getDate() +
									  "</span>"
									: "<a class='ui-state-default" +
									  (printDate.getTime() === today.getTime()
											? " ui-state-highlight"
											: "") +
									  (printDate.getTime() === currentDate.getTime()
											? " ui-state-active"
											: "") + // highlight selected day
									  (otherMonth ? " ui-priority-secondary" : "") + // distinguish dates from other months
									  "' href='#' aria-current='" +
									  (printDate.getTime() === currentDate.getTime()
											? "true"
											: "false") + // mark date as selected for screen reader
									  "' data-date='" +
									  printDate.getDate() + // store date as data
									  "'>" +
									  printDate.getDate() +
									  "</a>") +
								"</td>"; // display selectable date
							printDate.setDate(printDate.getDate() + 1);
							printDate = this._daylightSavingAdjust(printDate);
						}
						calender += tbody + "</tr>";
					}
					drawMonth++;
					if (drawMonth > 11) {
						drawMonth = 0;
						drawYear++;
					}
					calender +=
						"</tbody></table>" +
						(isMultiMonth
							? "</div>" +
							  (numMonths[0] > 0 && col === numMonths[1] - 1
									? "<div class='ui-datepicker-row-break'></div>"
									: "")
							: "");
					group += calender;
				}
				html += group;
			}
			html += buttonPanel;
			inst._keyEvent = false;
			return html;
		},

		_generateMonthYearHeader: function (
			inst,
			drawMonth,
			drawYear,
			minDate,
			maxDate,
			secondary,
			monthNames,
			monthNamesShort
		) {
			var inMinYear,
				inMaxYear,
				month,
				years,
				thisYear,
				determineYear,
				year,
				endYear,
				changeMonth = this._get(inst, "changeMonth"),
				changeYear = this._get(inst, "changeYear"),
				showMonthAfterYear = this._get(inst, "showMonthAfterYear"),
				selectMonthLabel = this._get(inst, "selectMonthLabel"),
				selectYearLabel = this._get(inst, "selectYearLabel"),
				html = "<div class='ui-datepicker-title'>",
				monthHtml = "";

			// Month selection
			if (secondary || !changeMonth) {
				monthHtml +=
					"<span class='ui-datepicker-month'>" +
					monthNames[drawMonth] +
					"</span>";
			} else {
				inMinYear = minDate && minDate.getFullYear() === drawYear;
				inMaxYear = maxDate && maxDate.getFullYear() === drawYear;
				monthHtml +=
					"<select class='ui-datepicker-month' aria-label='" +
					selectMonthLabel +
					"' data-handler='selectMonth' data-event='change'>";
				for (month = 0; month < 12; month++) {
					if (
						(!inMinYear || month >= minDate.getMonth()) &&
						(!inMaxYear || month <= maxDate.getMonth())
					) {
						monthHtml +=
							"<option value='" +
							month +
							"'" +
							(month === drawMonth ? " selected='selected'" : "") +
							">" +
							monthNamesShort[month] +
							"</option>";
					}
				}
				monthHtml += "</select>";
			}

			if (!showMonthAfterYear) {
				html +=
					monthHtml +
					(secondary || !(changeMonth && changeYear) ? "&#xa0;" : "");
			}

			// Year selection
			if (!inst.yearshtml) {
				inst.yearshtml = "";
				if (secondary || !changeYear) {
					html += "<span class='ui-datepicker-year'>" + drawYear + "</span>";
				} else {
					// determine range of years to display
					years = this._get(inst, "yearRange").split(":");
					thisYear = new Date().getFullYear();
					determineYear = function (value) {
						var year = value.match(/c[+\-].*/)
							? drawYear + parseInt(value.substring(1), 10)
							: value.match(/[+\-].*/)
							? thisYear + parseInt(value, 10)
							: parseInt(value, 10);
						return isNaN(year) ? thisYear : year;
					};
					year = determineYear(years[0]);
					endYear = Math.max(year, determineYear(years[1] || ""));
					year = minDate ? Math.max(year, minDate.getFullYear()) : year;
					endYear = maxDate
						? Math.min(endYear, maxDate.getFullYear())
						: endYear;
					inst.yearshtml +=
						"<select class='ui-datepicker-year' aria-label='" +
						selectYearLabel +
						"' data-handler='selectYear' data-event='change'>";
					for (; year <= endYear; year++) {
						inst.yearshtml +=
							"<option value='" +
							year +
							"'" +
							(year === drawYear ? " selected='selected'" : "") +
							">" +
							year +
							"</option>";
					}
					inst.yearshtml += "</select>";

					html += inst.yearshtml;
					inst.yearshtml = null;
				}
			}

			html += this._get(inst, "yearSuffix");
			if (showMonthAfterYear) {
				html +=
					(secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") +
					monthHtml;
			}
			html += "</div>"; // Close datepicker_header
			return html;
		},

		_adjustInstDate: function (inst, offset, period) {
			var year = inst.selectedYear + (period === "Y" ? offset : 0),
				month = inst.selectedMonth + (period === "M" ? offset : 0),
				day =
					Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) +
					(period === "D" ? offset : 0),
				date = this._restrictMinMax(
					inst,
					this._daylightSavingAdjust(new Date(year, month, day))
				);

			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
			if (period === "M" || period === "Y") {
				this._notifyChange(inst);
			}
		},

		_restrictMinMax: function (inst, date) {
			var minDate = this._getMinMaxDate(inst, "min"),
				maxDate = this._getMinMaxDate(inst, "max"),
				newDate = minDate && date < minDate ? minDate : date;
			return maxDate && newDate > maxDate ? maxDate : newDate;
		},

		_notifyChange: function (inst) {
			var onChange = this._get(inst, "onChangeMonthYear");
			if (onChange) {
				onChange.apply(inst.input ? inst.input[0] : null, [
					inst.selectedYear,
					inst.selectedMonth + 1,
					inst,
				]);
			}
		},

		_getNumberOfMonths: function (inst) {
			var numMonths = this._get(inst, "numberOfMonths");
			return numMonths == null
				? [1, 1]
				: typeof numMonths === "number"
				? [1, numMonths]
				: numMonths;
		},

		_getMinMaxDate: function (inst, minMax) {
			return this._determineDate(inst, this._get(inst, minMax + "Date"), null);
		},

		_getDaysInMonth: function (year, month) {
			return (
				32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate()
			);
		},

		_getFirstDayOfMonth: function (year, month) {
			return new Date(year, month, 1).getDay();
		},

		_canAdjustMonth: function (inst, offset, curYear, curMonth) {
			var numMonths = this._getNumberOfMonths(inst),
				date = this._daylightSavingAdjust(
					new Date(
						curYear,
						curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]),
						1
					)
				);

			if (offset < 0) {
				date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
			}
			return this._isInRange(inst, date);
		},

		_isInRange: function (inst, date) {
			var yearSplit,
				currentYear,
				minDate = this._getMinMaxDate(inst, "min"),
				maxDate = this._getMinMaxDate(inst, "max"),
				minYear = null,
				maxYear = null,
				years = this._get(inst, "yearRange");
			if (years) {
				yearSplit = years.split(":");
				currentYear = new Date().getFullYear();
				minYear = parseInt(yearSplit[0], 10);
				maxYear = parseInt(yearSplit[1], 10);
				if (yearSplit[0].match(/[+\-].*/)) {
					minYear += currentYear;
				}
				if (yearSplit[1].match(/[+\-].*/)) {
					maxYear += currentYear;
				}
			}

			return (
				(!minDate || date.getTime() >= minDate.getTime()) &&
				(!maxDate || date.getTime() <= maxDate.getTime()) &&
				(!minYear || date.getFullYear() >= minYear) &&
				(!maxYear || date.getFullYear() <= maxYear)
			);
		},

		_getFormatConfig: function (inst) {
			var shortYearCutoff = this._get(inst, "shortYearCutoff");
			shortYearCutoff =
				typeof shortYearCutoff !== "string"
					? shortYearCutoff
					: (new Date().getFullYear() % 100) + parseInt(shortYearCutoff, 10);
			return {
				shortYearCutoff: shortYearCutoff,
				dayNamesShort: this._get(inst, "dayNamesShort"),
				dayNames: this._get(inst, "dayNames"),
				monthNamesShort: this._get(inst, "monthNamesShort"),
				monthNames: this._get(inst, "monthNames"),
			};
		},

		_formatDate: function (inst, day, month, year) {
			if (!day) {
				inst.currentDay = inst.selectedDay;
				inst.currentMonth = inst.selectedMonth;
				inst.currentYear = inst.selectedYear;
			}
			var date = day
				? typeof day === "object"
					? day
					: this._daylightSavingAdjust(new Date(year, month, day))
				: this._daylightSavingAdjust(
						new Date(inst.currentYear, inst.currentMonth, inst.currentDay)
				  );
			return this.formatDate(
				this._get(inst, "dateFormat"),
				date,
				this._getFormatConfig(inst)
			);
		},
	});

	function datepicker_bindHover(dpDiv) {
		var selector =
			"button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
		return dpDiv
			.on("mouseout", selector, function () {
				$(this).removeClass("ui-state-hover");
				if (this.className.indexOf("ui-datepicker-prev") !== -1) {
					$(this).removeClass("ui-datepicker-prev-hover");
				}
				if (this.className.indexOf("ui-datepicker-next") !== -1) {
					$(this).removeClass("ui-datepicker-next-hover");
				}
			})
			.on("mouseover", selector, datepicker_handleMouseover);
	}

	function datepicker_handleMouseover() {
		if (
			!$.datepicker._isDisabledDatepicker(
				datepicker_instActive.inline
					? datepicker_instActive.dpDiv.parent()[0]
					: datepicker_instActive.input[0]
			)
		) {
			$(this)
				.parents(".ui-datepicker-calendar")
				.find("a")
				.removeClass("ui-state-hover");
			$(this).addClass("ui-state-hover");
			if (this.className.indexOf("ui-datepicker-prev") !== -1) {
				$(this).addClass("ui-datepicker-prev-hover");
			}
			if (this.className.indexOf("ui-datepicker-next") !== -1) {
				$(this).addClass("ui-datepicker-next-hover");
			}
		}
	}

	function datepicker_extendRemove(target, props) {
		$.extend(target, props);
		for (var name in props) {
			if (props[name] == null) {
				target[name] = props[name];
			}
		}
		return target;
	}

	$.fn.datepicker = function (options) {
		if (!this.length) {
			return this;
		}

		if (!$.datepicker.initialized) {
			$(document).on("mousedown", $.datepicker._checkExternalClick);
			$.datepicker.initialized = true;
		}

		if ($("#" + $.datepicker._mainDivId).length === 0) {
			$("body").append($.datepicker.dpDiv);
		}

		var otherArgs = Array.prototype.slice.call(arguments, 1);
		if (
			typeof options === "string" &&
			(options === "isDisabled" ||
				options === "getDate" ||
				options === "widget")
		) {
			return $.datepicker["_" + options + "Datepicker"].apply(
				$.datepicker,
				[this[0]].concat(otherArgs)
			);
		}
		if (
			options === "option" &&
			arguments.length === 2 &&
			typeof arguments[1] === "string"
		) {
			return $.datepicker["_" + options + "Datepicker"].apply(
				$.datepicker,
				[this[0]].concat(otherArgs)
			);
		}
		return this.each(function () {
			if (typeof options === "string") {
				$.datepicker["_" + options + "Datepicker"].apply(
					$.datepicker,
					[this].concat(otherArgs)
				);
			} else {
				$.datepicker._attachDatepicker(this, options);
			}
		});
	};

	$.datepicker = new Datepicker(); // singleton instance
	$.datepicker.initialized = false;
	$.datepicker.uuid = new Date().getTime();
	$.datepicker.version = "1.13.0";

	var widgetsDatepicker = $.datepicker;

	var safeActiveElement = ($.ui.safeActiveElement = function (document) {
		var activeElement;

		// Support: IE 9 only
		// IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
		try {
			activeElement = document.activeElement;
		} catch (error) {
			activeElement = document.body;
		}

		// Support: IE 9 - 11 only
		// IE may return null instead of an element
		// Interestingly, this only seems to occur when NOT in an iframe
		if (!activeElement) {
			activeElement = document.body;
		}

		// Support: IE 11 only
		// IE11 returns a seemingly empty object in some cases when accessing
		// document.activeElement from an <iframe>
		if (!activeElement.nodeName) {
			activeElement = document.body;
		}

		return activeElement;
	});

	//>>label: Menu
	//>>group: Widgets
	//>>description: Creates nestable menus.
	//>>docs: http://api.jqueryui.com/menu/
	//>>demos: http://jqueryui.com/menu/
	//>>css.structure: ../../themes/base/core.css
	//>>css.structure: ../../themes/base/menu.css
	//>>css.theme: ../../themes/base/theme.css

	var widgetsMenu = $.widget("ui.menu", {
		version: "1.13.0",
		defaultElement: "<ul>",
		delay: 300,
		options: {
			icons: {
				submenu: "ui-icon-caret-1-e",
			},
			items: "> *",
			menus: "ul",
			position: {
				my: "left top",
				at: "right top",
			},
			role: "menu",

			// Callbacks
			blur: null,
			focus: null,
			select: null,
		},

		_create: function () {
			this.activeMenu = this.element;

			// Flag used to prevent firing of the click handler
			// as the event bubbles up through nested menus
			this.mouseHandled = false;
			this.lastMousePosition = { x: null, y: null };
			this.element.uniqueId().attr({
				role: this.options.role,
				tabIndex: 0,
			});

			this._addClass("ui-menu", "ui-widget ui-widget-content");
			this._on({
				// Prevent focus from sticking to links inside menu after clicking
				// them (focus should always stay on UL during navigation).
				"mousedown .ui-menu-item": function (event) {
					event.preventDefault();

					this._activateItem(event);
				},
				"click .ui-menu-item": function (event) {
					var target = $(event.target);
					var active = $($.ui.safeActiveElement(this.document[0]));
					if (!this.mouseHandled && target.not(".ui-state-disabled").length) {
						this.select(event);

						// Only set the mouseHandled flag if the event will bubble, see #9469.
						if (!event.isPropagationStopped()) {
							this.mouseHandled = true;
						}

						// Open submenu on click
						if (target.has(".ui-menu").length) {
							this.expand(event);
						} else if (
							!this.element.is(":focus") &&
							active.closest(".ui-menu").length
						) {
							// Redirect focus to the menu
							this.element.trigger("focus", [true]);

							// If the active item is on the top level, let it stay active.
							// Otherwise, blur the active item since it is no longer visible.
							if (this.active && this.active.parents(".ui-menu").length === 1) {
								clearTimeout(this.timer);
							}
						}
					}
				},
				"mouseenter .ui-menu-item": "_activateItem",
				"mousemove .ui-menu-item": "_activateItem",
				mouseleave: "collapseAll",
				"mouseleave .ui-menu": "collapseAll",
				focus: function (event, keepActiveItem) {
					// If there's already an active item, keep it active
					// If not, activate the first item
					var item = this.active || this._menuItems().first();

					if (!keepActiveItem) {
						this.focus(event, item);
					}
				},
				blur: function (event) {
					this._delay(function () {
						var notContained = !$.contains(
							this.element[0],
							$.ui.safeActiveElement(this.document[0])
						);
						if (notContained) {
							this.collapseAll(event);
						}
					});
				},
				keydown: "_keydown",
			});

			this.refresh();

			// Clicks outside of a menu collapse any open menus
			this._on(this.document, {
				click: function (event) {
					if (this._closeOnDocumentClick(event)) {
						this.collapseAll(event, true);
					}

					// Reset the mouseHandled flag
					this.mouseHandled = false;
				},
			});
		},

		_activateItem: function (event) {
			// Ignore mouse events while typeahead is active, see #10458.
			// Prevents focusing the wrong item when typeahead causes a scroll while the mouse
			// is over an item in the menu
			if (this.previousFilter) {
				return;
			}

			// If the mouse didn't actually move, but the page was scrolled, ignore the event (#9356)
			if (
				event.clientX === this.lastMousePosition.x &&
				event.clientY === this.lastMousePosition.y
			) {
				return;
			}

			this.lastMousePosition = {
				x: event.clientX,
				y: event.clientY,
			};

			var actualTarget = $(event.target).closest(".ui-menu-item"),
				target = $(event.currentTarget);

			// Ignore bubbled events on parent items, see #11641
			if (actualTarget[0] !== target[0]) {
				return;
			}

			// If the item is already active, there's nothing to do
			if (target.is(".ui-state-active")) {
				return;
			}

			// Remove ui-state-active class from siblings of the newly focused menu item
			// to avoid a jump caused by adjacent elements both having a class with a border
			this._removeClass(
				target.siblings().children(".ui-state-active"),
				null,
				"ui-state-active"
			);
			this.focus(event, target);
		},

		_destroy: function () {
			var items = this.element
					.find(".ui-menu-item")
					.removeAttr("role aria-disabled"),
				submenus = items
					.children(".ui-menu-item-wrapper")
					.removeUniqueId()
					.removeAttr("tabIndex role aria-haspopup");

			// Destroy (sub)menus
			this.element
				.removeAttr("aria-activedescendant")
				.find(".ui-menu")
				.addBack()
				.removeAttr(
					"role aria-labelledby aria-expanded aria-hidden aria-disabled " +
						"tabIndex"
				)
				.removeUniqueId()
				.show();

			submenus.children().each(function () {
				var elem = $(this);
				if (elem.data("ui-menu-submenu-caret")) {
					elem.remove();
				}
			});
		},

		_keydown: function (event) {
			var match,
				prev,
				character,
				skip,
				preventDefault = true;

			switch (event.keyCode) {
				case $.ui.keyCode.PAGE_UP:
					this.previousPage(event);
					break;
				case $.ui.keyCode.PAGE_DOWN:
					this.nextPage(event);
					break;
				case $.ui.keyCode.HOME:
					this._move("first", "first", event);
					break;
				case $.ui.keyCode.END:
					this._move("last", "last", event);
					break;
				case $.ui.keyCode.UP:
					this.previous(event);
					break;
				case $.ui.keyCode.DOWN:
					this.next(event);
					break;
				case $.ui.keyCode.LEFT:
					this.collapse(event);
					break;
				case $.ui.keyCode.RIGHT:
					if (this.active && !this.active.is(".ui-state-disabled")) {
						this.expand(event);
					}
					break;
				case $.ui.keyCode.ENTER:
				case $.ui.keyCode.SPACE:
					this._activate(event);
					break;
				case $.ui.keyCode.ESCAPE:
					this.collapse(event);
					break;
				default:
					preventDefault = false;
					prev = this.previousFilter || "";
					skip = false;

					// Support number pad values
					character =
						event.keyCode >= 96 && event.keyCode <= 105
							? (event.keyCode - 96).toString()
							: String.fromCharCode(event.keyCode);

					clearTimeout(this.filterTimer);

					if (character === prev) {
						skip = true;
					} else {
						character = prev + character;
					}

					match = this._filterMenuItems(character);
					match =
						skip && match.index(this.active.next()) !== -1
							? this.active.nextAll(".ui-menu-item")
							: match;

					// If no matches on the current filter, reset to the last character pressed
					// to move down the menu to the first item that starts with that character
					if (!match.length) {
						character = String.fromCharCode(event.keyCode);
						match = this._filterMenuItems(character);
					}

					if (match.length) {
						this.focus(event, match);
						this.previousFilter = character;
						this.filterTimer = this._delay(function () {
							delete this.previousFilter;
						}, 1000);
					} else {
						delete this.previousFilter;
					}
			}

			if (preventDefault) {
				event.preventDefault();
			}
		},

		_activate: function (event) {
			if (this.active && !this.active.is(".ui-state-disabled")) {
				if (this.active.children("[aria-haspopup='true']").length) {
					this.expand(event);
				} else {
					this.select(event);
				}
			}
		},

		refresh: function () {
			var menus,
				items,
				newSubmenus,
				newItems,
				newWrappers,
				that = this,
				icon = this.options.icons.submenu,
				submenus = this.element.find(this.options.menus);

			this._toggleClass(
				"ui-menu-icons",
				null,
				!!this.element.find(".ui-icon").length
			);

			// Initialize nested menus
			newSubmenus = submenus
				.filter(":not(.ui-menu)")
				.hide()
				.attr({
					role: this.options.role,
					"aria-hidden": "true",
					"aria-expanded": "false",
				})
				.each(function () {
					var menu = $(this),
						item = menu.prev(),
						submenuCaret = $("<span>").data("ui-menu-submenu-caret", true);

					that._addClass(submenuCaret, "ui-menu-icon", "ui-icon " + icon);
					item.attr("aria-haspopup", "true").prepend(submenuCaret);
					menu.attr("aria-labelledby", item.attr("id"));
				});

			this._addClass(
				newSubmenus,
				"ui-menu",
				"ui-widget ui-widget-content ui-front"
			);

			menus = submenus.add(this.element);
			items = menus.find(this.options.items);

			// Initialize menu-items containing spaces and/or dashes only as dividers
			items.not(".ui-menu-item").each(function () {
				var item = $(this);
				if (that._isDivider(item)) {
					that._addClass(item, "ui-menu-divider", "ui-widget-content");
				}
			});

			// Don't refresh list items that are already adapted
			newItems = items.not(".ui-menu-item, .ui-menu-divider");
			newWrappers = newItems.children().not(".ui-menu").uniqueId().attr({
				tabIndex: -1,
				role: this._itemRole(),
			});
			this._addClass(newItems, "ui-menu-item")._addClass(
				newWrappers,
				"ui-menu-item-wrapper"
			);

			// Add aria-disabled attribute to any disabled menu item
			items.filter(".ui-state-disabled").attr("aria-disabled", "true");

			// If the active item has been removed, blur the menu
			if (this.active && !$.contains(this.element[0], this.active[0])) {
				this.blur();
			}
		},

		_itemRole: function () {
			return {
				menu: "menuitem",
				listbox: "option",
			}[this.options.role];
		},

		_setOption: function (key, value) {
			if (key === "icons") {
				var icons = this.element.find(".ui-menu-icon");
				this._removeClass(icons, null, this.options.icons.submenu)._addClass(
					icons,
					null,
					value.submenu
				);
			}
			this._super(key, value);
		},

		_setOptionDisabled: function (value) {
			this._super(value);

			this.element.attr("aria-disabled", String(value));
			this._toggleClass(null, "ui-state-disabled", !!value);
		},

		focus: function (event, item) {
			var nested, focused, activeParent;
			this.blur(event, event && event.type === "focus");

			this._scrollIntoView(item);

			this.active = item.first();

			focused = this.active.children(".ui-menu-item-wrapper");
			this._addClass(focused, null, "ui-state-active");

			// Only update aria-activedescendant if there's a role
			// otherwise we assume focus is managed elsewhere
			if (this.options.role) {
				this.element.attr("aria-activedescendant", focused.attr("id"));
			}

			// Highlight active parent menu item, if any
			activeParent = this.active
				.parent()
				.closest(".ui-menu-item")
				.children(".ui-menu-item-wrapper");
			this._addClass(activeParent, null, "ui-state-active");

			if (event && event.type === "keydown") {
				this._close();
			} else {
				this.timer = this._delay(function () {
					this._close();
				}, this.delay);
			}

			nested = item.children(".ui-menu");
			if (nested.length && event && /^mouse/.test(event.type)) {
				this._startOpening(nested);
			}
			this.activeMenu = item.parent();

			this._trigger("focus", event, { item: item });
		},

		_scrollIntoView: function (item) {
			var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
			if (this._hasScroll()) {
				borderTop =
					parseFloat($.css(this.activeMenu[0], "borderTopWidth")) || 0;
				paddingTop = parseFloat($.css(this.activeMenu[0], "paddingTop")) || 0;
				offset =
					item.offset().top -
					this.activeMenu.offset().top -
					borderTop -
					paddingTop;
				scroll = this.activeMenu.scrollTop();
				elementHeight = this.activeMenu.height();
				itemHeight = item.outerHeight();

				if (offset < 0) {
					this.activeMenu.scrollTop(scroll + offset);
				} else if (offset + itemHeight > elementHeight) {
					this.activeMenu.scrollTop(
						scroll + offset - elementHeight + itemHeight
					);
				}
			}
		},

		blur: function (event, fromFocus) {
			if (!fromFocus) {
				clearTimeout(this.timer);
			}

			if (!this.active) {
				return;
			}

			this._removeClass(
				this.active.children(".ui-menu-item-wrapper"),
				null,
				"ui-state-active"
			);

			this._trigger("blur", event, { item: this.active });
			this.active = null;
		},

		_startOpening: function (submenu) {
			clearTimeout(this.timer);

			// Don't open if already open fixes a Firefox bug that caused a .5 pixel
			// shift in the submenu position when mousing over the caret icon
			if (submenu.attr("aria-hidden") !== "true") {
				return;
			}

			this.timer = this._delay(function () {
				this._close();
				this._open(submenu);
			}, this.delay);
		},

		_open: function (submenu) {
			var position = $.extend(
				{
					of: this.active,
				},
				this.options.position
			);

			clearTimeout(this.timer);
			this.element
				.find(".ui-menu")
				.not(submenu.parents(".ui-menu"))
				.hide()
				.attr("aria-hidden", "true");

			submenu
				.show()
				.removeAttr("aria-hidden")
				.attr("aria-expanded", "true")
				.position(position);
		},

		collapseAll: function (event, all) {
			clearTimeout(this.timer);
			this.timer = this._delay(
				function () {
					// If we were passed an event, look for the submenu that contains the event
					var currentMenu = all
						? this.element
						: $(event && event.target).closest(this.element.find(".ui-menu"));

					// If we found no valid submenu ancestor, use the main menu to close all
					// sub menus anyway
					if (!currentMenu.length) {
						currentMenu = this.element;
					}

					this._close(currentMenu);

					this.blur(event);

					// Work around active item staying active after menu is blurred
					this._removeClass(
						currentMenu.find(".ui-state-active"),
						null,
						"ui-state-active"
					);

					this.activeMenu = currentMenu;
				},
				all ? 0 : this.delay
			);
		},

		// With no arguments, closes the currently active menu - if nothing is active
		// it closes all menus.  If passed an argument, it will search for menus BELOW
		_close: function (startMenu) {
			if (!startMenu) {
				startMenu = this.active ? this.active.parent() : this.element;
			}

			startMenu
				.find(".ui-menu")
				.hide()
				.attr("aria-hidden", "true")
				.attr("aria-expanded", "false");
		},

		_closeOnDocumentClick: function (event) {
			return !$(event.target).closest(".ui-menu").length;
		},

		_isDivider: function (item) {
			// Match hyphen, em dash, en dash
			return !/[^\-\u2014\u2013\s]/.test(item.text());
		},

		collapse: function (event) {
			var newItem =
				this.active &&
				this.active.parent().closest(".ui-menu-item", this.element);
			if (newItem && newItem.length) {
				this._close();
				this.focus(event, newItem);
			}
		},

		expand: function (event) {
			var newItem =
				this.active &&
				this._menuItems(this.active.children(".ui-menu")).first();

			if (newItem && newItem.length) {
				this._open(newItem.parent());

				// Delay so Firefox will not hide activedescendant change in expanding submenu from AT
				this._delay(function () {
					this.focus(event, newItem);
				});
			}
		},

		next: function (event) {
			this._move("next", "first", event);
		},

		previous: function (event) {
			this._move("prev", "last", event);
		},

		isFirstItem: function () {
			return this.active && !this.active.prevAll(".ui-menu-item").length;
		},

		isLastItem: function () {
			return this.active && !this.active.nextAll(".ui-menu-item").length;
		},

		_menuItems: function (menu) {
			return (menu || this.element)
				.find(this.options.items)
				.filter(".ui-menu-item");
		},

		_move: function (direction, filter, event) {
			var next;
			if (this.active) {
				if (direction === "first" || direction === "last") {
					next =
						this.active[direction === "first" ? "prevAll" : "nextAll"](
							".ui-menu-item"
						).last();
				} else {
					next = this.active[direction + "All"](".ui-menu-item").first();
				}
			}
			if (!next || !next.length || !this.active) {
				next = this._menuItems(this.activeMenu)[filter]();
			}

			this.focus(event, next);
		},

		nextPage: function (event) {
			var item, base, height;

			if (!this.active) {
				this.next(event);
				return;
			}
			if (this.isLastItem()) {
				return;
			}
			if (this._hasScroll()) {
				base = this.active.offset().top;
				height = this.element.innerHeight();

				// jQuery 3.2 doesn't include scrollbars in innerHeight, add it back.
				if ($.fn.jquery.indexOf("3.2.") === 0) {
					height += this.element[0].offsetHeight - this.element.outerHeight();
				}

				this.active.nextAll(".ui-menu-item").each(function () {
					item = $(this);
					return item.offset().top - base - height < 0;
				});

				this.focus(event, item);
			} else {
				this.focus(
					event,
					this._menuItems(this.activeMenu)[!this.active ? "first" : "last"]()
				);
			}
		},

		previousPage: function (event) {
			var item, base, height;
			if (!this.active) {
				this.next(event);
				return;
			}
			if (this.isFirstItem()) {
				return;
			}
			if (this._hasScroll()) {
				base = this.active.offset().top;
				height = this.element.innerHeight();

				// jQuery 3.2 doesn't include scrollbars in innerHeight, add it back.
				if ($.fn.jquery.indexOf("3.2.") === 0) {
					height += this.element[0].offsetHeight - this.element.outerHeight();
				}

				this.active.prevAll(".ui-menu-item").each(function () {
					item = $(this);
					return item.offset().top - base + height > 0;
				});

				this.focus(event, item);
			} else {
				this.focus(event, this._menuItems(this.activeMenu).first());
			}
		},

		_hasScroll: function () {
			return this.element.outerHeight() < this.element.prop("scrollHeight");
		},

		select: function (event) {
			// TODO: It should never be possible to not have an active item at this
			// point, but the tests don't trigger mouseenter before click.
			this.active = this.active || $(event.target).closest(".ui-menu-item");
			var ui = { item: this.active };
			if (!this.active.has(".ui-menu").length) {
				this.collapseAll(event, true);
			}
			this._trigger("select", event, ui);
		},

		_filterMenuItems: function (character) {
			var escapedCharacter = character.replace(
					/[\-\[\]{}()*+?.,\\\^$|#\s]/g,
					"\\$&"
				),
				regex = new RegExp("^" + escapedCharacter, "i");

			return (
				this.activeMenu
					.find(this.options.items)

					// Only match on items, not dividers or other content (#10571)
					.filter(".ui-menu-item")
					.filter(function () {
						return regex.test(
							String.prototype.trim.call(
								$(this).children(".ui-menu-item-wrapper").text()
							)
						);
					})
			);
		},
	});

	// This file is deprecated
	var ie = ($.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));

	//>>label: Mouse
	//>>group: Widgets
	//>>description: Abstracts mouse-based interactions to assist in creating certain widgets.
	//>>docs: http://api.jqueryui.com/mouse/

	var mouseHandled = false;
	$(document).on("mouseup", function () {
		mouseHandled = false;
	});

	var widgetsMouse = $.widget("ui.mouse", {
		version: "1.13.0",
		options: {
			cancel: "input, textarea, button, select, option",
			distance: 1,
			delay: 0,
		},
		_mouseInit: function () {
			var that = this;

			this.element
				.on("mousedown." + this.widgetName, function (event) {
					return that._mouseDown(event);
				})
				.on("click." + this.widgetName, function (event) {
					if (
						true ===
						$.data(event.target, that.widgetName + ".preventClickEvent")
					) {
						$.removeData(event.target, that.widgetName + ".preventClickEvent");
						event.stopImmediatePropagation();
						return false;
					}
				});

			this.started = false;
		},

		// TODO: make sure destroying one instance of mouse doesn't mess with
		// other instances of mouse
		_mouseDestroy: function () {
			this.element.off("." + this.widgetName);
			if (this._mouseMoveDelegate) {
				this.document
					.off("mousemove." + this.widgetName, this._mouseMoveDelegate)
					.off("mouseup." + this.widgetName, this._mouseUpDelegate);
			}
		},

		_mouseDown: function (event) {
			// don't let more than one widget handle mouseStart
			if (mouseHandled) {
				return;
			}

			this._mouseMoved = false;

			// We may have missed mouseup (out of window)
			if (this._mouseStarted) {
				this._mouseUp(event);
			}

			this._mouseDownEvent = event;

			var that = this,
				btnIsLeft = event.which === 1,
				// event.target.nodeName works around a bug in IE 8 with
				// disabled inputs (#7620)
				elIsCancel =
					typeof this.options.cancel === "string" && event.target.nodeName
						? $(event.target).closest(this.options.cancel).length
						: false;
			if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
				return true;
			}

			this.mouseDelayMet = !this.options.delay;
			if (!this.mouseDelayMet) {
				this._mouseDelayTimer = setTimeout(function () {
					that.mouseDelayMet = true;
				}, this.options.delay);
			}

			if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
				this._mouseStarted = this._mouseStart(event) !== false;
				if (!this._mouseStarted) {
					event.preventDefault();
					return true;
				}
			}

			// Click event may never have fired (Gecko & Opera)
			if (
				true === $.data(event.target, this.widgetName + ".preventClickEvent")
			) {
				$.removeData(event.target, this.widgetName + ".preventClickEvent");
			}

			// These delegates are required to keep context
			this._mouseMoveDelegate = function (event) {
				return that._mouseMove(event);
			};
			this._mouseUpDelegate = function (event) {
				return that._mouseUp(event);
			};

			this.document
				.on("mousemove." + this.widgetName, this._mouseMoveDelegate)
				.on("mouseup." + this.widgetName, this._mouseUpDelegate);

			event.preventDefault();

			mouseHandled = true;
			return true;
		},

		_mouseMove: function (event) {
			// Only check for mouseups outside the document if you've moved inside the document
			// at least once. This prevents the firing of mouseup in the case of IE<9, which will
			// fire a mousemove event if content is placed under the cursor. See #7778
			// Support: IE <9
			if (this._mouseMoved) {
				// IE mouseup check - mouseup happened when mouse was out of window
				if (
					$.ui.ie &&
					(!document.documentMode || document.documentMode < 9) &&
					!event.button
				) {
					return this._mouseUp(event);

					// Iframe mouseup check - mouseup occurred in another document
				} else if (!event.which) {
					// Support: Safari <=8 - 9
					// Safari sets which to 0 if you press any of the following keys
					// during a drag (#14461)
					if (
						event.originalEvent.altKey ||
						event.originalEvent.ctrlKey ||
						event.originalEvent.metaKey ||
						event.originalEvent.shiftKey
					) {
						this.ignoreMissingWhich = true;
					} else if (!this.ignoreMissingWhich) {
						return this._mouseUp(event);
					}
				}
			}

			if (event.which || event.button) {
				this._mouseMoved = true;
			}

			if (this._mouseStarted) {
				this._mouseDrag(event);
				return event.preventDefault();
			}

			if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
				this._mouseStarted =
					this._mouseStart(this._mouseDownEvent, event) !== false;
				if (this._mouseStarted) {
					this._mouseDrag(event);
				} else {
					this._mouseUp(event);
				}
			}

			return !this._mouseStarted;
		},

		_mouseUp: function (event) {
			this.document
				.off("mousemove." + this.widgetName, this._mouseMoveDelegate)
				.off("mouseup." + this.widgetName, this._mouseUpDelegate);

			if (this._mouseStarted) {
				this._mouseStarted = false;

				if (event.target === this._mouseDownEvent.target) {
					$.data(event.target, this.widgetName + ".preventClickEvent", true);
				}

				this._mouseStop(event);
			}

			if (this._mouseDelayTimer) {
				clearTimeout(this._mouseDelayTimer);
				delete this._mouseDelayTimer;
			}

			this.ignoreMissingWhich = false;
			mouseHandled = false;
			event.preventDefault();
		},

		_mouseDistanceMet: function (event) {
			return (
				Math.max(
					Math.abs(this._mouseDownEvent.pageX - event.pageX),
					Math.abs(this._mouseDownEvent.pageY - event.pageY)
				) >= this.options.distance
			);
		},

		_mouseDelayMet: function () {
			return this.mouseDelayMet;
		},

		// These are placeholder methods, to be overriden by extending plugin
		_mouseStart: function () {},
		_mouseDrag: function () {},
		_mouseStop: function () {},
		_mouseCapture: function () {
			return true;
		},
	});
});
var OMDate = {};
OMDate.genFullmonth = function (e, a) {
	var t = [
			"มกราคม",
			"กุมภาพันธ์",
			"มีนาคม",
			"เมษายน",
			"พฤษภาคม",
			"มิถุนายน",
			"กรกฏาคม",
			"สิงหาคม",
			"กันยายน",
			"ตุลาคม",
			"พฤศจิกายน",
			"ธันวาคม",
		],
		r = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		],
		n = a === undefined || a == "tha" ? t : r;
	return n[e];
};
OMDate.genShortmonth = function (e, a) {
	var t = [
			"ม.ค.",
			"ก.พ.",
			"มี.ค.",
			"เม.ย.",
			"พ.ค.",
			"มิ.ย.",
			"ก.ค.",
			"ส.ค.",
			"ก.ย.",
			"ต.ค.",
			"พ.ย.",
			"ธ.ค.",
		],
		r = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"June",
			"July",
			"Aug",
			"Sept",
			"Oct",
			"Nov",
			"Dec",
		],
		n = a === undefined || a == "tha" ? t : r;
	return n[e];
};
OMDate.genWeekDay = function (e, a) {
	var t = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
		r = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wendesday",
			"Thursday",
			"Friday",
			"Saturday",
		],
		n = a === undefined || a == "tha" ? t : r;
	return n[e];
};
OMDate.dateFormat = function (t, r, l) {
	var n = l == "mas" || l == "tha" ? "tha" : "eng",
		a = new Date(t.replace(/-/g, "/")),
		u = a.getFullYear(),
		g = a.getMonth(),
		o = a.getDate(),
		c = a.getDay(),
		d = a.getHours(),
		D = a.getMinutes(),
		e = r;
	e = e.replace(/d/g, padleft(o, 2));
	e = e.replace(/D/g, o);
	if (n == "tha") {
		e = e.replace(/a/g, OMDate.genWeekDay(c, n));
		u += 543;
	}
	e = e.replace(/m/g, padleft(g + 1, 2));
	e = e.replace(/M/g, OMDate.genFullmonth(g, n));
	e = e.replace(/S/g, OMDate.genShortmonth(g, n));
	e = e.replace(/Y/g, u);
	e = e.replace(/y/g, u.toString().substr(2, 4));
	e = e.replace(/H/g, d);
	e = e.replace(/i/g, padleft(D, 2));
	return e;
};
function getDateTime(e) {
	var a = "",
		t = e.toString().replace(/-/g, "/"),
		r = new Date(t),
		n = new Date();
	if (r.setHours(0, 0, 0, 0) == n.setHours(0, 0, 0, 0)) {
		a = OMDate.dateFormat(t, "H.i", "tha");
	} else {
		a = OMDate.dateFormat(t, "d S Y H.i", "tha");
	}
	return a;
}
var initCalendar = !1;
$(document).ready(function () {});
function openCalendar() {
	if (!initCalendar) {
		initCalendar = !0;
		createCalendar();
		AddCalendar();
	}
	var a = $("body"),
		e = $("#st-calendar");
	a.addClass("openCalendar");
	e.show();
	setTimeout(function () {
		e.addClass("fade");
	}, 200);
}
var objHolder = {};
function AddCalendar() {
	$(function () {
		var a = 543,
			d = !0,
			t = new Array("อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"),
			n = new Array(
				"มกราคม",
				"กุมภาพันธ์",
				"มีนาคม",
				"เมษายน",
				"พฤษภาคม",
				"มิถุนายน",
				"กรกฎาคม",
				"สิงหาคม",
				"กันยายน",
				"ตุลาคม",
				"พฤศจิกายน",
				"ธันวาคม"
			),
			e = $("#ctn-calendar");
		e.datepicker({
			showOtherMonths: !0,
			selectOtherMonths: !1,
			changeMonth: !1,
			changeYear: !1,
			dayNamesMin: t,
			monthNames: n,
			monthNamesShort: [
				"มกราคม",
				"กุมภาพันธ์",
				"มีนาคม",
				"เมษายน",
				"พฤษภาคม",
				"มิถุนายน",
				"กรกฎาคม",
				"สิงหาคม",
				"กันยายน",
				"ตุลาคม",
				"พฤศจิกายน",
				"ธันวาคม",
			],
			dateFormat: "d/m/yy",
			navigationAsDateFormat: !0,
			onUpdateDatepicker: function (t) {
				var n = e.find(".ui-datepicker-year");
				n.html(parseInt(n.text()) + a);
				getEvent(t.selectedYear, parseInt(t.selectedMonth) + 1);
			},
			onChangeMonthYear: function (e, a) {},
		});
		openCalendar();
	});
}
var arrEvent = [];
function getEvent(e, a) {
	$("#ctn-calendar-desc").find(".bx-desc-inn").html("");
	if (arrEvent[e + "_" + a] != undefined) {
		console.log("get old");
		var t = arrEvent[e + "_" + a];
		addEvent(e, a, t);
	} else {
		console.log("get new");
		$.ajax({
			url: BASE_URL + "cmd/public_cmd.php",
			type: "GET",
			data: {
				cmd: "schedules",
				year: e,
				month: a,
				mode: "user",
				MUNICIPALITY_ID: MUNICIPALITY_ID,
			},
			dataType: "json",
			cache: !1,
			success: function (t) {
				var n = t.data;
				if (t.success == "T") {
					arrEvent[e + "_" + a] = n;
					addEvent(e, a, n);
				}
			},
		});
	}
}
function addEvent(e, t, n) {
	var i = $("#ctn-calendar"),
		c = $("#ctn-calendar-desc");
	c.find(".bx-desc-inn").html("");
	var d = [],
		a = "";
	$.each(n, function (c, n) {
		var i = new Date(n.created_date.replace(/-/g, "/")),
			o = i.getDate(),
			s = i.getMonth(),
			l = i.getFullYear();
		if (e == l && t == s + 1) {
			var r = (d[l + "_" + s + "_" + o] = {});
			r.title = n.title;
			r.date = n.created_date;
			r.date_gen = OMDate.dateFormat(
				n.created_date.replace(/-/g, "/"),
				"วันaที่ D M พ.ศ. Y",
				"tha"
			);
			a += '<div class="ls">';
			a += '<h3 class="fh_smb">' + n.title + "</h3>";
			a +=
				'<time class="fh_reg" datetime="' +
				n.created_date.replace(/-/g, "/") +
				'">' +
				OMDate.dateFormat(
					n.created_date.replace(/-/g, "/"),
					"วันaที่ D M พ.ศ. Y",
					"tha"
				) +
				"</time>";
			a += "</div>";
		}
	});
	if (n == null) {
		a =
			'<div class="fh_smb bbx"><em class="icon icon-holiday"></em><div class="b-txt fp_med">ไม่พบรายการวันหยุด</div></div>';
	}
	c.find(".bx-desc-inn").html(a);
	var r = $("td[data-handler]", i);
	$.each(r, function (e, a) {
		var t = $(this),
			n = t.data("year"),
			c = t.data("month"),
			r = t.text();
		if (d[n + "_" + c + "_" + r] != undefined) {
			t.addClass("has-event");
		}
	});
}
function createCalendar() {
	var t = $("body"),
		e = "";
	e += '<div id="st-calendar">';
	e += '<div class="wrap-calendar">';
	e += '<div class="calendar-inn">';
	e += '<button id="btn-close-cld"><em class="icon-close"></em></button>';
	e += '<div id="ctn-calendar" class="ctn-calendar"></div>';
	e += '<div id="ctn-calendar-desc" class="ctn-calendar-desc">';
	e += '<div class="bx-title">วันหยุดประจำปี</div>';
	e += '<div class="bx-desc">';
	e += '<div class="bx-desc-inn">';
	e += "</div>";
	e += "</div>";
	e += "</div>";
	e += "</div>";
	e += "</div>";
	e += "</div>";
	t.append(e);
	var a = $("#st-calendar"),
		n = $("#btn-close-cld");
	n.on("click", function () {
		t.removeClass("openCalendar");
		a.removeClass("fade");
		a.hide();
	});
}
