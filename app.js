
        

        const LANG_KEY = 'g1da-docs-lang';

        function setSiteLang(lang, persist = true) {
            const next = (lang === 'en') ? 'en' : 'ru';
            document.documentElement.lang = next;
            if (persist) {
                try { localStorage.setItem(LANG_KEY, next); } catch (e) {}
            }
            const gate = document.getElementById('lang-gate');
            if (gate) gate.classList.remove('open');
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const value = el.getAttribute(`data-i18n-placeholder-${next}`);
                if (value) el.setAttribute('placeholder', value);
            });
            document.querySelectorAll('[data-i18n-aria]').forEach(el => {
                const value = el.getAttribute(`data-i18n-aria-${next}`);
                if (value) el.setAttribute('aria-label', value);
            });
        }

        function initLanguage() {
            let saved = null;
            try { saved = localStorage.getItem(LANG_KEY); } catch (e) {}
            if (saved === 'ru' || saved === 'en') {
                setSiteLang(saved, false);
                return;
            }
            const gate = document.getElementById('lang-gate');
            if (gate) gate.classList.add('open');
            else setSiteLang('ru', false);
        }

        document.addEventListener('DOMContentLoaded', initLanguage);


        function toggleTocGroup(button) {
            const group = button.closest('.toc-group');
            if (!group) return;
            const collapsed = group.classList.toggle('collapsed');
            button.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
        }

        function toggleCategory(header) {
            const category = header.parentElement;
            category.classList.toggle('collapsed');
        }

        function toggleMobileMenu() {
            document.body.classList.toggle('nav-open');
        }

        function filterStatusCards(game, button) {
            if (typeof setCatalogGame === 'function') {
                setCatalogGame(game, button);
                return;
            }
            document.querySelectorAll('.status-grid-card').forEach(card => {
                const shouldShow = game === 'all' || card.dataset.game === game;
                card.classList.toggle('filter-hidden', !shouldShow);
            });
            document.querySelectorAll('#filter-games .filter-chip').forEach(chip => {
                const active = chip === button || chip.dataset.game === game;
                chip.classList.toggle('active', active);
                chip.setAttribute('aria-pressed', active ? 'true' : 'false');
            });
        }
        
        // Hide the loader as soon as the document is interactive. Waiting for
        // every screenshot or external font made image-heavy pages feel stuck.
        function finishPageLoad() {
            if (document.body.classList.contains('page-ready')) return;
            document.body.classList.add('page-ready');
            const loader = document.getElementById('page-loader');
            if (loader) {
                loader.classList.add('fade-out');
                setTimeout(() => loader.remove(), 420);
            }
        }

        window.addEventListener('DOMContentLoaded', () => {
            requestAnimationFrame(() => requestAnimationFrame(finishPageLoad));
        });
        setTimeout(finishPageLoad, 1200);
        
        const SEARCH_INDEX = [{"title": "Ультимативный спуфер1", "game": "Другие игры", "url": "1.html", "features": ""}, {"title": "База Знаний Xind1 Docs", "game": "Другие игры", "url": "README.html", "features": ""}, {"title": "Table of contents", "game": "Другие игры", "url": "SUMMARY.html", "features": ""}, {"title": "Apex Legends [ ☢ Arcane ]", "game": "Apex Legends", "url": "apex-legends-arcane.html", "features": ""}, {"title": "Apex Legends [ ☢ Phoenix X-RAY ]", "game": "Apex Legends", "url": "apex-legends-phoenix-x-ray.html", "features": ""}, {"title": "Apex Legends [ ☢ Rampart ]", "game": "Apex Legends", "url": "apex-legends-rampart.html", "features": ""}, {"title": "ARC Raiders [ ☢ Arcane Radar ]", "game": "ARC Raiders", "url": "arc-raiders-arcane-radar.html", "features": ""}, {"title": "ARC Raiders [ ☢ Arcane ]", "game": "ARC Raiders", "url": "arc-raiders-arcane.html", "features": ""}, {"title": "🚀 Инструкция по запуску Arcane", "game": "Другие игры", "url": "arcane-instruktsiya.html", "features": ""}, {"title": "🛠 Arcane — Решение проблем запуска", "game": "Другие игры", "url": "arcane-reshenie-problem.html", "features": ""}, {"title": "Arena Breakout Infinite [ ☢ Ghost ESP ]", "game": "Другие игры", "url": "arena-breakout-infinite-ghost-esp.html", "features": ""}, {"title": "Arena Breakout Infinite [ ☢ Ghost Full ]", "game": "Другие игры", "url": "arena-breakout-infinite-ghost-full.html", "features": ""}, {"title": "Arena Breakout Infinite [ ☢ KoenFlow ]", "game": "Другие игры", "url": "arena-breakout-infinite-koenflow.html", "features": ""}, {"title": "Arena Breakout Infinite [ ☢ Xernel Full ]", "game": "Другие игры", "url": "arena-breakout-infinite-xernel-full.html", "features": ""}, {"title": "ARK Ascended [ ☢ Arcane ]", "game": "ARK Ascended", "url": "ark-ascended-arcane.html", "features": ""}, {"title": "Arma Reforger [ ☢ Arcane ]", "game": "Arma Reforger", "url": "arma-reforger-arcane.html", "features": ""}, {"title": "Arma Reforger [ ☢ Xernel ]", "game": "Arma Reforger", "url": "arma-reforger-xernel.html", "features": ""}, {"title": "Counter Strike 2 [ ☢ Arcane ]", "game": "Counter-Strike 2", "url": "counter-strike-2-arcane.html", "features": ""}, {"title": "DayZ [ ☢ Arcane ]", "game": "DayZ", "url": "dayz-arcane.html", "features": ""}, {"title": "DayZ [ ☢ Medusa Full ]", "game": "DayZ", "url": "dayz-medusa-full.html", "features": ""}, {"title": "DayZ [ ☢ Medusa Lite ]", "game": "DayZ", "url": "dayz-medusa-lite.html", "features": ""}, {"title": "DayZ [ ☢ Xernel ]", "game": "DayZ", "url": "dayz-xernel.html", "features": ""}, {"title": "Escape from Tarkov [ ☢ Medusa Lite ]", "game": "Escape from Tarkov", "url": "escape-from-tarkov-medusa-lite.html", "features": ""}, {"title": "Escape from Tarkov [ ☢ Medusa Rage ]", "game": "Escape from Tarkov", "url": "escape-from-tarkov-medusa-rage.html", "features": ""}, {"title": "Fortnite [ ☢ Arcane ]", "game": "Fortnite", "url": "fortnite-arcane.html", "features": ""}, {"title": "🚀 Инструкция по запуску Ghost", "game": "Другие игры", "url": "ghost-instruktsiya.html", "features": ""}, {"title": "🛠 Ghost — Решение проблем запуска", "game": "Другие игры", "url": "ghost-reshenie-problem.html", "features": ""}, {"title": "База Знаний Xind1 Docs", "game": "Другие игры", "url": "index.html", "features": ""}, {"title": "🚀 Инструкция по запуску KoenFlow", "game": "Другие игры", "url": "koenflow-instruktsiya.html", "features": ""}, {"title": "🛠 KoenFlow — Решение проблем запуска", "game": "Другие игры", "url": "koenflow-reshenie-problem.html", "features": ""}, {"title": "Marvel Rivals [ ☢ Ghost ]", "game": "Marvel Rivals", "url": "marvel-rivals-ghost.html", "features": ""}, {"title": "Marvel Rivals [ ☢ Phoenix ]", "game": "Marvel Rivals", "url": "marvel-rivals-phoenix.html", "features": ""}, {"title": "Meccha Chameleon [ ☢ Arcane ]", "game": "Meccha Chameleon", "url": "meccha-chameleon-arcane.html", "features": ""}, {"title": "Meccha Chameleon [ ☢ Ghost ]", "game": "Meccha Chameleon", "url": "meccha-chameleon-ghost.html", "features": ""}, {"title": "🚀 Инструкция по запуску Medusa", "game": "Другие игры", "url": "medusa-instruktsiya.html", "features": ""}, {"title": "🛠 Medusa — Решение проблем запуска", "game": "Другие игры", "url": "medusa-reshenie-problem.html", "features": ""}, {"title": "☢ Phoenix (CHAMS) ]", "game": "Другие игры", "url": "phoenix-chams.html", "features": ""}, {"title": "🚀 Инструкция по запуску Phoenix", "game": "Другие игры", "url": "phoenix-instruktsiya.html", "features": ""}, {"title": "🛠 Phoenix — Решение проблем запуска", "game": "Другие игры", "url": "phoenix-reshenie-problem.html", "features": ""}, {"title": "Pubg [ ☢ Arcane ESP ]", "game": "PUBG", "url": "pubg-arcane-esp.html", "features": ""}, {"title": "Pubg [ ☢ Arcane Full ]", "game": "PUBG", "url": "pubg-arcane-full.html", "features": ""}, {"title": "Pubg [ ☢ Arcane Radar ]", "game": "PUBG", "url": "pubg-arcane-radar.html", "features": ""}, {"title": "Pubg [ ☢ Phoenix Full ]", "game": "PUBG", "url": "pubg-phoenix-full.html", "features": ""}, {"title": "🚀 Инструкция по запуску Rampart", "game": "Другие игры", "url": "rampart-instruktsiya.html", "features": ""}, {"title": "🛠 Rampart — Решение проблем запуска", "game": "Другие игры", "url": "rampart-reshenie-problem.html", "features": ""}, {"title": "Rust [ ☢ Arcane ]", "game": "Rust", "url": "rust-arcane.html", "features": ""}, {"title": "Rust [ ☢ Rampart Full ]", "game": "Rust", "url": "rust-rampart-full.html", "features": ""}, {"title": "Rust [ ☢ Rampart Lite ]", "game": "Rust", "url": "rust-rampart-lite.html", "features": ""}, {"title": "Rust [ ☢ Xernel ]", "game": "Rust", "url": "rust-xernel.html", "features": ""}, {"title": "Unturned [ ☢ Medusa ]", "game": "Unturned", "url": "unturned-medusa.html", "features": ""}, {"title": "🚀 Инструкция по запуску Xernel", "game": "Другие игры", "url": "xernel-instruktsiya.html", "features": ""}, {"title": "🛠 Xernel — Решение проблем запуска", "game": "Другие игры", "url": "xernel-reshenie-problem.html", "features": ""}, {"title": "Статус читов", "game": "Мониторинг", "url": "index.html", "features": "Статусы, Undetected, Обновление, Безопасность, Спуфер"}];
        
        // Global Keyboard / Search functionality
        window.addEventListener('keydown', (e) => {
            if (e.key === '/') {
                const searchOverlay = document.getElementById('global-search-overlay');
                const isFocusedOnInput = document.activeElement.tagName === 'INPUT';
                if (!isFocusedOnInput) {
                    e.preventDefault();
                    searchOverlay.classList.add('open');
                    document.getElementById('global-search-input').focus();
                }
            }
            if (e.key === 'Escape') {
                closeGlobalSearch();
                closeLightbox();
            }
        });
        
        function closeGlobalSearch() {
            const overlay = document.getElementById('global-search-overlay');
            if (overlay) overlay.classList.remove('open');
        }
        
        function doGlobalSearch() {
            const query = document.getElementById('global-search-input').value.toLowerCase().trim();
            const resultsContainer = document.getElementById('global-search-results');
            resultsContainer.innerHTML = '';
            
            if (query === '') {
                resultsContainer.innerHTML = '<div style="color: var(--text-muted); text-align: center; padding: 20px;">Введите что-нибудь для поиска...</div>';
                return;
            }
            
            const filtered = SEARCH_INDEX.filter(item => {
                return item.title.toLowerCase().includes(query) || 
                       item.game.toLowerCase().includes(query) || 
                       item.features.toLowerCase().includes(query);
            });
            
            if (filtered.length === 0) {
                resultsContainer.innerHTML = '<div style="color: var(--text-muted); text-align: center; padding: 20px;">Ничего не найдено 😢</div>';
                return;
            }
            
            filtered.forEach(item => {
                const el = document.createElement('a');
                el.href = item.url;
                el.className = 'global-search-item';
                el.innerHTML = `
                    <div class="global-search-item-title">
                        <span>${item.title}</span>
                        <span class="global-search-item-game">${item.game}</span>
                    </div>
                    <div class="global-search-item-features">${item.features}</div>
                `;
                resultsContainer.appendChild(el);
            });
        }
        
        // Lightbox Functions
        function openLightbox(src) {
            const lb = document.getElementById('lightbox-modal');
            const lbImg = document.getElementById('lightbox-image');
            lbImg.src = src;
            lb.classList.add('open');
        }
        
        function closeLightbox() {
            const lb = document.getElementById('lightbox-modal');
            if (lb) lb.classList.remove('open');
        }
        
        // Live search filter inside a single cheat page
        function filterFeatures() {
            const query = document.getElementById('feature-search').value.toLowerCase().trim();
            const items = document.querySelectorAll('.content-area p.feature-item, .content-area p.feature-text');
            const h2s = document.querySelectorAll('.content-area h2');
            
            items.forEach(item => {
                if (query === '') {
                    item.style.display = 'block';
                } else {
                    if (item.textContent.toLowerCase().includes(query)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
            
            // Clean up headers with no visible items
            h2s.forEach(h2 => {
                if (query === '') {
                    h2.style.display = 'flex';
                } else {
                    let sibling = h2.nextElementSibling;
                    let hasVisible = false;
                    while (sibling && sibling.tagName !== 'H2') {
                        if (sibling.style.display !== 'none') {
                            hasVisible = true;
                        }
                        sibling = sibling.nextElementSibling;
                    }
                    if (hasVisible) {
                        h2.style.display = 'flex';
                    } else {
                        h2.style.display = 'none';
                    }
                }
            });
        }

        // Reveal content in small groups as it enters the viewport.
        document.addEventListener('DOMContentLoaded', () => {
            const items = document.querySelectorAll(
                '.status-grid-card, .screenshot-card, .sys-req-card, .feature-item, .feature-text'
            );
            const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            if (reducedMotion || !('IntersectionObserver' in window)) {
                items.forEach(item => item.classList.add('is-visible'));
            } else {
                const revealObserver = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (!entry.isIntersecting) return;
                        entry.target.classList.add('is-visible');
                        revealObserver.unobserve(entry.target);
                    });
                }, { rootMargin: '0px 0px -36px 0px', threshold: 0.04 });

                items.forEach((item, index) => {
                    item.classList.add('reveal-item');
                    item.style.setProperty('--reveal-order', index % 7);
                    revealObserver.observe(item);
                });
            }

            document.querySelectorAll('.sidebar-link').forEach(link => {
                link.addEventListener('click', () => document.body.classList.remove('nav-open'));
            });
        });

        // A short exit transition makes navigation feel continuous without
        // delaying external links, downloads or in-page anchors.
        document.addEventListener('click', event => {
            const link = event.target.closest('a[href]');
            if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            if (link.target === '_blank' || link.hasAttribute('download')) return;
            const rawHref = link.getAttribute('href');
            if (!rawHref || rawHref.startsWith('#') || rawHref.startsWith('javascript:')) return;

            const destination = new URL(link.href, window.location.href);
            if (destination.origin !== window.location.origin || !destination.pathname.endsWith('.html')) return;

            // page-leaving disabled (stuck blank / fought View Transitions)
            return;
        });
        

        
        function filterSidebar(query) {
            const q = (query || '').trim().toLowerCase();
            document.querySelectorAll('.sidebar-category').forEach(cat => {
                if (cat.querySelector('.sidebar-category-header.static')) return;
                let any = false;
                cat.querySelectorAll('.sidebar-link').forEach(link => {
                    const text = (link.textContent || '').toLowerCase();
                    const show = !q || text.includes(q);
                    link.classList.toggle('nav-hidden', !show);
                    if (show) any = true;
                });
                const gameName = (cat.querySelector('.nav-name')?.textContent || '').toLowerCase();
                const code = (cat.querySelector('.nav-code')?.textContent || '').toLowerCase();
                const catMatch = !q || gameName.includes(q) || code.includes(q) || any;
                cat.classList.toggle('nav-hidden', !catMatch);
                if (q && catMatch) cat.classList.remove('collapsed');
            });
        }

        function openMobileToc() {
            const drawer = document.getElementById('mobile-toc-drawer');
            if (!drawer) return;
            const panel = drawer.querySelector('.mobile-toc-panel .mobile-toc-nav');
            const source = document.querySelector('.toc-panel .toc-nav');
            if (panel && source && !panel.dataset.ready) {
                panel.innerHTML = source.innerHTML;
                panel.dataset.ready = '1';
                panel.querySelectorAll('a').forEach(a => {
                    a.addEventListener('click', () => closeMobileToc());
                });
            }
            drawer.classList.add('open');
            document.body.classList.add('toc-open');
        }
        function closeMobileToc() {
            document.getElementById('mobile-toc-drawer')?.classList.remove('open');
            document.body.classList.remove('toc-open');
        }

        function openLightbox(src, index) {
            const modal = document.getElementById('lightbox-modal');
            const img = document.getElementById('lightbox-image');
            if (!modal || !img) return;
            img.src = src;
            modal.classList.add('open');
            const caption = document.getElementById('lightbox-caption');
            if (caption) {
                caption.textContent = index ? String(index).padStart(2, '0') : '';
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.status-grid-card.showcase').forEach((card, i) => {
                card.style.setProperty('--card-i', String(i));
            });
        });


        const catalogState = { game: 'all', brand: 'all', query: '', sort: 'default' };

        function setCatalogGame(game, button) {
            catalogState.game = game || 'all';
            document.querySelectorAll('#filter-games .filter-chip').forEach(chip => {
                const active = chip.dataset.game === catalogState.game;
                chip.classList.toggle('active', active);
                chip.setAttribute('aria-pressed', active ? 'true' : 'false');
            });
            applyCatalogFilters();
            if (typeof syncCatalogUrl === 'function') syncCatalogUrl();
        }

        function setCatalogBrand(brand, button) {
            catalogState.brand = brand || 'all';
            document.querySelectorAll('#filter-brands .filter-chip').forEach(chip => {
                const active = chip.dataset.brand === catalogState.brand;
                chip.classList.toggle('active', active);
                chip.setAttribute('aria-pressed', active ? 'true' : 'false');
            });
            applyCatalogFilters();
            if (typeof syncCatalogUrl === 'function') syncCatalogUrl();
        }

        function setCatalogQuery(q) {
            catalogState.query = (q || '').trim().toLowerCase();
            applyCatalogFilters();
            if (typeof syncCatalogUrl === 'function') syncCatalogUrl();
        }

        function setCatalogSort(sort) {
            catalogState.sort = sort || 'default';
            applyCatalogFilters();
            if (typeof syncCatalogUrl === 'function') syncCatalogUrl();
        }

        function resetCatalogFilters() {
            catalogState.game = 'all';
            catalogState.brand = 'all';
            catalogState.query = '';
            catalogState.sort = 'default';
            const search = document.getElementById('catalog-search');
            if (search) search.value = '';
            const sort = document.getElementById('catalog-sort');
            if (sort) sort.value = 'default';
            document.querySelectorAll('#filter-games .filter-chip').forEach((chip, i) => {
                const active = i === 0;
                chip.classList.toggle('active', active);
                chip.setAttribute('aria-pressed', active ? 'true' : 'false');
            });
            document.querySelectorAll('#filter-brands .filter-chip').forEach((chip, i) => {
                const active = i === 0;
                chip.classList.toggle('active', active);
                chip.setAttribute('aria-pressed', active ? 'true' : 'false');
            });
            if (typeof POLISH !== 'undefined' && POLISH.quick) {
                POLISH.quick = { spoofer: false, under500: false, update: false, new: false, favOnly: false };
                document.querySelectorAll('#filter-quick .filter-chip[data-quick]').forEach(chip => chip.classList.remove('active'));
                document.getElementById('fav-only-btn')?.classList.remove('active');
            }
            applyCatalogFilters();
            if (typeof syncCatalogUrl === 'function') syncCatalogUrl();
        }

        function filterStatusCards(game, button) {
            setCatalogGame(game, button);
        }

        function applyCatalogFilters() {
            const grid = document.querySelector('.status-page-grid');
            if (!grid) return;
            const cards = Array.from(grid.querySelectorAll('.status-grid-card'));
            let visible = 0;
            cards.forEach(card => {
                const gameOk = catalogState.game === 'all' || card.dataset.game === catalogState.game;
                const brandOk = catalogState.brand === 'all' || card.dataset.brand === catalogState.brand;
                const hay = (card.dataset.search || card.dataset.name || '').toLowerCase();
                const queryOk = !catalogState.query || hay.includes(catalogState.query);
                const shouldShow = gameOk && brandOk && queryOk;
                card.classList.toggle('filter-hidden', !shouldShow);
                if (shouldShow) {
                    visible += 1;
                    card.style.removeProperty('display');
                }
            });

            const order = cards.slice();
            if (catalogState.sort === 'name') {
                order.sort((a, b) => (a.dataset.name || '').localeCompare(b.dataset.name || '', 'en'));
            } else if (catalogState.sort === 'price-asc') {
                order.sort((a, b) => (Number(a.dataset.price) || 1e12) - (Number(b.dataset.price) || 1e12));
            } else if (catalogState.sort === 'price-desc') {
                order.sort((a, b) => (Number(b.dataset.price) || 0) - (Number(a.dataset.price) || 0));
            } else if (catalogState.sort === 'status') {
                order.sort((a, b) => (a.dataset.status || '').localeCompare(b.dataset.status || ''));
            } else {
                order.sort((a, b) => (Number(a.dataset.index) || 0) - (Number(b.dataset.index) || 0));
            }
            order.forEach(card => grid.appendChild(card));

            const empty = document.getElementById('catalog-empty');
            if (empty) empty.hidden = visible !== 0;
            const live = document.getElementById('catalog-live-count');
            if (live) {
                const total = live.dataset.total || String(cards.length);
                const ru = document.documentElement.lang === 'en'
                    ? `${visible} of ${total} shown`
                    : `Показано ${visible} из ${total}`;
                live.textContent = ru;
            }
            const countEl = document.querySelector('.catalog-count');
            if (countEl) {
                const label = document.documentElement.lang === 'en' ? 'items' : 'позиций';
                countEl.innerHTML = `${visible} <span data-lang="ru">позиций</span><span data-lang="en">items</span>`;
            }
        }

        function copySectionLink(hash, btn) {
            const url = `${location.origin}${location.pathname}${hash || ''}`;
            const done = () => {
                if (!btn) return;
                btn.classList.add('is-copied');
                const prev = btn.innerHTML;
                btn.innerHTML = document.documentElement.lang === 'en' ? 'Copied' : 'Скопировано';
                setTimeout(() => { btn.classList.remove('is-copied'); btn.innerHTML = prev; }, 1400);
            };
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(url).then(done).catch(() => {
                    prompt(document.documentElement.lang === 'en' ? 'Copy link:' : 'Скопируйте ссылку:', url);
                });
            } else {
                prompt(document.documentElement.lang === 'en' ? 'Copy link:' : 'Скопируйте ссылку:', url);
            }
        }

        function getCompareCatalog() {
            const node = document.getElementById('compare-data');
            if (!node) return [];
            try { return JSON.parse(node.textContent || '[]'); } catch (e) { return []; }
        }

        function renderCompareList(el, items, emptyRu, emptyEn) {
            if (!el) return;
            const en = document.documentElement.lang === 'en';
            if (!items.length) {
                el.innerHTML = `<li class="compare-diff-empty">${en ? emptyEn : emptyRu}</li>`;
                return;
            }
            const max = 18;
            const shown = items.slice(0, max);
            const rest = items.length - shown.length;
            el.innerHTML = shown.map(f => `<li>${f.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}</li>`).join('')
                + (rest > 0 ? `<li class="is-more">+${rest} ${en ? 'more' : 'ещё'}</li>` : '');
        }

        function sectionKey(s) {
            return String(s || '').toLowerCase().replace(/[^a-z0-9а-яё]+/gi, '');
        }

        function renderSectionChips(el, mine, ...others) {
            if (!el) return;
            const otherKeys = new Set();
            others.forEach(list => (list || []).forEach(s => otherKeys.add(sectionKey(s))));
            const mineList = mine || [];
            if (!mineList.length) {
                el.textContent = '—';
                return;
            }
            el.innerHTML = mineList.map(sec => {
                const unique = !otherKeys.has(sectionKey(sec));
                const cls = unique ? 'cm-sec-chip is-unique' : 'cm-sec-chip';
                const safe = String(sec).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
                return `<span class="${cls}">${safe}</span>`;
            }).join('');
        }

        function buildCompareVerdict(prodA, prodB, onlyA, onlyB, onlySecA, onlySecB) {
            const en = document.documentElement.lang === 'en';
            const nameA = prodA.name;
            const nameB = prodB.name;
            const tip = (name, secs, feats) => {
                const bits = [];
                if (secs.length) bits.push(secs.slice(0, 3).join(', '));
                if (feats.length) bits.push(feats.slice(0, 2).join(', '));
                if (!bits.length) return '';
                return en
                    ? `<strong>${name}</strong> — pick for ${bits.join(' · ')}`
                    : `<strong>${name}</strong> — берите, если нужны: ${bits.join(' · ')}`;
            };
            const aTip = tip(nameA, onlySecA, onlyA);
            const bTip = tip(nameB, onlySecB, onlyB);
            if (!aTip && !bTip) {
                return en
                    ? `<strong>${nameA}</strong> and <strong>${nameB}</strong> cover similar modules — choose by price.`
                    : `<strong>${nameA}</strong> и <strong>${nameB}</strong> близки по модулям — выбирайте по цене.`;
            }
            if (aTip && bTip) return `${aTip}. ${bTip}.`;
            if (aTip) {
                return en
                    ? `${aTip}. <strong>${nameB}</strong> — lighter / cheaper option.`
                    : `${aTip}. <strong>${nameB}</strong> — более лёгкий / дешёвый вариант.`;
            }
            return en
                ? `${bTip}. <strong>${nameA}</strong> — lighter / cheaper option.`
                : `${bTip}. <strong>${nameA}</strong> — более лёгкий / дешёвый вариант.`;
        }

        function syncComparePickers() {
            const a = document.getElementById('compare-pick-a');
            const b = document.getElementById('compare-pick-b');
            const c = document.getElementById('compare-pick-c');
            if (!a || !b) return;
            const catalog = getCompareCatalog();
            const byHtml = Object.fromEntries(catalog.map(p => [p.html, p]));
            const prods = [byHtml[a.value], byHtml[b.value]].filter(Boolean);
            if (c && byHtml[c.value]) prods.push(byHtml[c.value]);
            if (prods.length < 2) return;

            const fill = (side, prod, others) => {
                document.querySelectorAll(`[data-compare-side="${side}"] [data-field]`).forEach(el => {
                    const key = el.getAttribute('data-field');
                    if (key === 'sections') {
                        renderSectionChips(el, prod.sections || [], ...(others.map(o => o.sections || [])));
                        return;
                    }
                    let val = prod[key] || '—';
                    if (key === 'featcount') val = String((prod.features || []).length);
                    if (key === 'price') val = prod.price || '—';
                    if (el.classList.contains('cm-link')) {
                        el.href = prod.html;
                        el.textContent = key === 'name' ? prod.name : val;
                    } else {
                        el.textContent = val;
                    }
                });
            };
            fill('a', prods[0], prods.slice(1));
            fill('b', prods[1], [prods[0]].concat(prods.slice(2)));
            if (prods[2]) fill('c', prods[2], prods.slice(0, 2));

            const norm = (s) => String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();
            const maps = prods.map(p => new Map((p.features || []).map(f => [norm(f), f])));
            const uniques = maps.map((mine, idx) => {
                const out = [];
                mine.forEach((label, key) => {
                    if (maps.every((m, j) => j === idx || !m.has(key))) out.push(label);
                });
                return out;
            });
            let shared = [];
            maps[0].forEach((label, key) => {
                if (maps.every(m => m.has(key))) shared.push(label);
            });

            const sides = ['a', 'b', 'c'];
            prods.forEach((p, i) => {
                const title = document.getElementById('compare-diff-title-' + sides[i]);
                if (title) title.textContent = document.documentElement.lang === 'en'
                    ? `Only in ${p.name}` : `Только в ${p.name}`;
                renderCompareList(
                    document.getElementById('compare-diff-only-' + sides[i]),
                    uniques[i],
                    'Нет уникальных функций',
                    'No unique features'
                );
            });
            renderCompareList(
                document.getElementById('compare-diff-shared'),
                shared,
                'Нет полного пересечения',
                'No full overlap'
            );

            const onlySec = (p, others) => (p.sections || []).filter(s => {
                const k = sectionKey(s);
                return others.every(o => !(o.sections || []).some(x => sectionKey(x) === k));
            });
            const verdict = document.getElementById('compare-verdict');
            if (verdict) {
                verdict.removeAttribute('hidden');
                verdict.innerHTML = buildCompareVerdict(
                    prods[0], prods[1], uniques[0], uniques[1],
                    onlySec(prods[0], prods.slice(1)),
                    onlySec(prods[1], [prods[0]].concat(prods.slice(2)))
                );
            }
        }

        // Ensure compare fills even if DOMContentLoaded already fired
        if (document.readyState !== 'loading') {
            try { syncComparePickers(); } catch (e) {}
        }

        document.addEventListener('DOMContentLoaded', () => {
            if (document.querySelector('.status-page-grid')) applyCatalogFilters();
            syncComparePickers();
        });


        const POLISH = {
            favKey: 'aimer-favs',
            recentKey: 'aimer-recent',
            viewKey: 'aimer-view',
            densityKey: 'aimer-density',
            themeKey: 'aimer-theme',
            quick: { spoofer: false, under500: false, update: false, new: false, favOnly: false },
        };

        function showToast(msg) {
            const el = document.getElementById('site-toast');
            if (!el) return;
            el.textContent = msg;
            el.hidden = false;
            el.classList.add('show');
            clearTimeout(el._t);
            el._t = setTimeout(() => { el.classList.remove('show'); el.hidden = true; }, 1600);
        }

        function getFavs() {
            try { return JSON.parse(localStorage.getItem(POLISH.favKey) || '[]'); } catch (e) { return []; }
        }
        function setFavs(list) { localStorage.setItem(POLISH.favKey, JSON.stringify(list)); }

        function toggleCardFav(slug, btn, ev) {
            if (ev) { ev.preventDefault(); ev.stopPropagation(); }
            const favs = new Set(getFavs());
            if (favs.has(slug)) favs.delete(slug); else favs.add(slug);
            setFavs([...favs]);
            btn.classList.toggle('is-on', favs.has(slug));
            showToast(document.documentElement.lang === 'en' ? 'Favorites updated' : 'Избранное обновлено');
            if (POLISH.quick.favOnly) applyCatalogFilters();
        }

        function trackRecent(url, title) {
            if (!url || url.includes('status.html') || url.includes('preview.html') || url.includes('index.html')) return;
            let list = [];
            try { list = JSON.parse(localStorage.getItem(POLISH.recentKey) || '[]'); } catch (e) {}
            list = [{ url, title }, ...list.filter(x => x.url !== url)].slice(0, 6);
            localStorage.setItem(POLISH.recentKey, JSON.stringify(list));
        }

        function renderRecentRail() {
            const host = document.getElementById('recent-rail');
            if (!host) return;
            let list = [];
            try { list = JSON.parse(localStorage.getItem(POLISH.recentKey) || '[]'); } catch (e) {}
            if (!list.length) { host.hidden = true; return; }
            host.hidden = false;
            host.querySelector('.recent-rail-list').innerHTML = list.map(x =>
                `<a href="${x.url}">${(x.title || x.url).replace(/[<>&]/g, s => ({'<':'&lt;','>':'&gt;','&':'&amp;'}[s]))}</a>`
            ).join('');
        }

        function setCatalogView(view, btn) {
            const grid = document.querySelector('.status-page-grid');
            if (!grid) return;
            const mode = view || 'grid';
            grid.classList.remove('view-grid', 'view-list', 'view-compact');
            grid.classList.add('view-' + mode);
            localStorage.setItem(POLISH.viewKey, mode);
            document.querySelectorAll('.view-btn[data-view]').forEach(b => {
                b.classList.toggle('active', btn ? b === btn : b.dataset.view === mode);
            });
        }

        function setDensity(mode, btn) {
            const next = mode || 'comfy';
            document.body.classList.toggle('density-compact', next === 'compact');
            localStorage.setItem(POLISH.densityKey, next);
            document.querySelectorAll('.view-btn[data-density]').forEach(b => {
                b.classList.toggle('active', btn ? b === btn : b.dataset.density === next);
            });
        }

        function toggleOledTheme(btn) {
            const on = document.body.classList.toggle('theme-oled');
            localStorage.setItem(POLISH.themeKey, on ? 'oled' : 'default');
            if (btn) btn.classList.toggle('active', on);
        }

        function toggleFavOnly(btn) {
            POLISH.quick.favOnly = !POLISH.quick.favOnly;
            if (btn) btn.classList.toggle('active', POLISH.quick.favOnly);
            applyCatalogFilters();
        }

        function toggleQuickFilter(key, btn) {
            POLISH.quick[key] = !POLISH.quick[key];
            if (btn) btn.classList.toggle('active', POLISH.quick[key]);
            applyCatalogFilters();
            syncCatalogUrl();
        }

        const _applyCatalogFiltersOrig = typeof applyCatalogFilters === 'function' ? applyCatalogFilters : null;
        applyCatalogFilters = function() {
            const grid = document.querySelector('.status-page-grid');
            if (!grid) return;
            const favs = new Set(getFavs());
            const cards = Array.from(grid.querySelectorAll('.status-grid-card'));
            let visible = 0;
            cards.forEach(card => {
                const gameOk = (typeof catalogState === 'undefined') || catalogState.game === 'all' || card.dataset.game === catalogState.game;
                const brandOk = (typeof catalogState === 'undefined') || catalogState.brand === 'all' || card.dataset.brand === catalogState.brand;
                const hay = (card.dataset.search || card.dataset.name || '').toLowerCase();
                const queryOk = !catalogState || !catalogState.query || hay.includes(catalogState.query);
                let quickOk = true;
                if (POLISH.quick.spoofer && card.dataset.spoofer !== '1') quickOk = false;
                if (POLISH.quick.under500 && Number(card.dataset.price || 999999) > 500) quickOk = false;
                if (POLISH.quick.update && card.dataset.status !== 'update') quickOk = false;
                if (POLISH.quick.new && card.dataset.new !== '1') quickOk = false;
                if (POLISH.quick.favOnly && !favs.has(card.dataset.slug || '')) quickOk = false;
                const shouldShow = gameOk && brandOk && queryOk && quickOk;
                card.classList.toggle('filter-hidden', !shouldShow);
                if (shouldShow) {
                    visible += 1;
                    card.style.removeProperty('display');
                }
            });
            if (typeof catalogState !== 'undefined') {
                const order = cards.slice();
                if (catalogState.sort === 'name') order.sort((a, b) => (a.dataset.name || '').localeCompare(b.dataset.name || '', 'en'));
                else if (catalogState.sort === 'price-asc') order.sort((a, b) => (Number(a.dataset.price) || 1e12) - (Number(b.dataset.price) || 1e12));
                else if (catalogState.sort === 'price-desc') order.sort((a, b) => (Number(b.dataset.price) || 0) - (Number(a.dataset.price) || 0));
                else if (catalogState.sort === 'status') order.sort((a, b) => (a.dataset.status || '').localeCompare(b.dataset.status || ''));
                else order.sort((a, b) => (Number(a.dataset.index) || 0) - (Number(b.dataset.index) || 0));
                order.forEach(card => grid.appendChild(card));
            }
            const empty = document.getElementById('catalog-empty');
            if (empty) empty.hidden = visible !== 0;
            const live = document.getElementById('catalog-live-count');
            if (live) {
                const total = live.dataset.total || String(cards.length);
                live.textContent = document.documentElement.lang === 'en'
                    ? `${visible} of ${total} shown` : `Показано ${visible} из ${total}`;
            }
            const countEl = document.querySelector('.catalog-count');
            if (countEl) {
                countEl.innerHTML = `${visible} <span data-lang="ru">позиций</span><span data-lang="en">items</span>`;
            }
            const activeFilters = document.getElementById('active-filters-count');
            if (activeFilters && typeof catalogState !== 'undefined') {
                let n = 0;
                if (catalogState.game !== 'all') n++;
                if (catalogState.brand !== 'all') n++;
                if (catalogState.query) n++;
                Object.values(POLISH.quick).forEach(v => { if (v) n++; });
                activeFilters.textContent = n ? String(n) : '';
                activeFilters.hidden = !n;
            }
        };

        function syncCatalogUrl() {
            if (!document.querySelector('.status-page-grid') || typeof catalogState === 'undefined') return;
            const params = new URLSearchParams();
            if (catalogState.game !== 'all') params.set('game', catalogState.game);
            if (catalogState.brand !== 'all') params.set('brand', catalogState.brand);
            if (catalogState.query) params.set('q', catalogState.query);
            if (catalogState.sort !== 'default') params.set('sort', catalogState.sort);
            Object.entries(POLISH.quick).forEach(([k, v]) => { if (v && k !== 'favOnly') params.set(k, '1'); });
            const qs = params.toString();
            history.replaceState(null, '', qs ? ('?' + qs) : location.pathname);
        }

        function restoreCatalogFromUrl() {
            if (!document.querySelector('.status-page-grid') || typeof catalogState === 'undefined') return;
            const params = new URLSearchParams(location.search);
            if (params.get('game')) {
                catalogState.game = params.get('game');
                document.querySelectorAll('#filter-games .filter-chip').forEach(chip => {
                    const active = chip.dataset.game === catalogState.game || (catalogState.game === 'all' && chip.dataset.game === 'all');
                    chip.classList.toggle('active', active);
                });
            }
            if (params.get('brand')) {
                catalogState.brand = params.get('brand');
                document.querySelectorAll('#filter-brands .filter-chip').forEach(chip => {
                    const active = chip.dataset.brand === catalogState.brand;
                    chip.classList.toggle('active', active);
                });
            }
            if (params.get('q')) {
                catalogState.query = params.get('q').toLowerCase();
                const inp = document.getElementById('catalog-search');
                if (inp) inp.value = params.get('q');
            }
            if (params.get('sort')) {
                catalogState.sort = params.get('sort');
                const sel = document.getElementById('catalog-sort');
                if (sel) sel.value = catalogState.sort;
            }
            ['spoofer', 'under500', 'update', 'new'].forEach(k => {
                if (params.get(k) === '1') {
                    POLISH.quick[k] = true;
                    document.querySelector(`#filter-quick [data-quick="${k}"]`)?.classList.add('active');
                }
            });
        }

        // wrap original setters to sync URL
        if (typeof setCatalogGame === 'function') {
            const _g = setCatalogGame;
            setCatalogGame = function(game, button) { _g(game, button); syncCatalogUrl(); };
        }
        if (typeof setCatalogBrand === 'function') {
            const _b = setCatalogBrand;
            setCatalogBrand = function(brand, button) { _b(brand, button); syncCatalogUrl(); };
        }
        if (typeof setCatalogQuery === 'function') {
            const _q = setCatalogQuery;
            setCatalogQuery = function(q) { _q(q); syncCatalogUrl(); };
        }
        if (typeof setCatalogSort === 'function') {
            const _s = setCatalogSort;
            setCatalogSort = function(sort) { _s(sort); syncCatalogUrl(); };
        }
        if (typeof resetCatalogFilters === 'function') {
            const _r = resetCatalogFilters;
            resetCatalogFilters = function() {
                POLISH.quick = { spoofer: false, under500: false, update: false, new: false, favOnly: false };
                document.querySelectorAll('#filter-quick .filter-chip').forEach(c => c.classList.remove('active'));
                document.getElementById('fav-only-btn')?.classList.remove('active');
                _r();
                syncCatalogUrl();
            };
        }

        function openCommandPalette() {
            const pal = document.getElementById('command-palette');
            if (!pal) return;
            pal.hidden = false;
            const input = document.getElementById('command-palette-input');
            input.value = '';
            renderCommandResults('');
            setTimeout(() => input.focus(), 10);
        }
        function closeCommandPalette() {
            const pal = document.getElementById('command-palette');
            if (pal) pal.hidden = true;
        }
        let commandActive = 0;
        function renderCommandResults(q) {
            const box = document.getElementById('command-palette-results');
            if (!box || typeof SEARCH_INDEX === 'undefined') return;
            const query = (q || '').toLowerCase().trim();
            const items = SEARCH_INDEX.filter(it => {
                if (!query) return true;
                return (it.title + ' ' + it.game + ' ' + (it.features || '')).toLowerCase().includes(query);
            }).slice(0, 12);
            commandActive = 0;
            box.innerHTML = items.map((it, i) =>
                `<button type="button" class="command-item${i===0?' active':''}" data-url="${it.url}">
                    ${it.title}<small>${it.game}</small></button>`
            ).join('') || `<div class="command-item">${document.documentElement.lang==='en'?'Nothing found':'Ничего не найдено'}</div>`;
            box.querySelectorAll('.command-item[data-url]').forEach(btn => {
                btn.addEventListener('click', () => { location.href = btn.dataset.url; });
            });
        }
        function moveCommandActive(delta) {
            const items = Array.from(document.querySelectorAll('#command-palette-results .command-item[data-url]'));
            if (!items.length) return;
            items[commandActive]?.classList.remove('active');
            commandActive = (commandActive + delta + items.length) % items.length;
            items[commandActive]?.classList.add('active');
            items[commandActive]?.scrollIntoView({ block: 'nearest' });
        }
        function activateCommandItem() {
            const items = document.querySelectorAll('#command-palette-results .command-item[data-url]');
            const el = items[commandActive];
            if (el) location.href = el.dataset.url;
        }

        function initFeatureAccordion() {
            document.querySelectorAll('.content-area h2').forEach(h2 => {
                if (h2.dataset.acc) return;
                h2.dataset.acc = '1';
                h2.addEventListener('click', () => h2.classList.toggle('section-collapsed'));
            });
        }

        function initFeatureHighlight() {
            const input = document.getElementById('feature-search');
            if (!input) return;
            const run = () => {
                const q = (input.value || '').trim();
                document.querySelectorAll('.feature-item mark.feat-hit').forEach(m => {
                    const t = m.textContent; m.replaceWith(t);
                });
                if (!q) return;
                const re = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'ig');
                document.querySelectorAll('.feature-item').forEach(item => {
                    if (!item.textContent.toLowerCase().includes(q.toLowerCase())) return;
                    item.querySelectorAll('strong, .feature-desc').forEach(node => {
                        node.innerHTML = node.textContent.replace(re, m => `<mark class="feat-hit">${m}</mark>`);
                    });
                });
            };
            input.addEventListener('input', run);
        }

        function copyAllFeatures() {
            const lines = Array.from(document.querySelectorAll('.feature-item')).map(el => {
                const n = el.querySelector('strong')?.textContent?.trim();
                const d = el.querySelector('.feature-desc')?.textContent?.trim();
                return n && d ? `${n} — ${d}` : (n || d || el.textContent.trim());
            }).filter(Boolean);
            const text = lines.join('\n');
            navigator.clipboard?.writeText(text).then(() => {
                showToast(document.documentElement.lang === 'en' ? 'Features copied' : 'Фичи скопированы');
            });
        }

        function exportCompareText() {
            const a = document.getElementById('compare-pick-a');
            const b = document.getElementById('compare-pick-b');
            const onlyA = Array.from(document.querySelectorAll('#compare-diff-only-a li:not(.is-more):not(.compare-diff-empty)')).map(x => x.textContent);
            const onlyB = Array.from(document.querySelectorAll('#compare-diff-only-b li:not(.is-more):not(.compare-diff-empty)')).map(x => x.textContent);
            const text = [
                `${a?.selectedOptions[0]?.text || 'A'} vs ${b?.selectedOptions[0]?.text || 'B'}`,
                '', 'Only A:', ...onlyA.map(x => '- ' + x),
                '', 'Only B:', ...onlyB.map(x => '- ' + x),
            ].join('\n');
            navigator.clipboard?.writeText(text).then(() => showToast(document.documentElement.lang === 'en' ? 'Compare copied' : 'Сравнение скопировано'));
        }

        function toggleCompareShared() {
            document.getElementById('compare-diff')?.classList.toggle('hide-shared');
        }

        // enhance compare list key features after sync
        const _syncCompare = typeof syncComparePickers === 'function' ? syncComparePickers : null;
        if (_syncCompare) {
            syncComparePickers = function() {
                _syncCompare();
                const keys = ['aimbot','silent','radar','esp','loot','spoofer','chams','recoil','wallhack','speed','melee','x-ray','xray'];
                document.querySelectorAll('.compare-diff-list li').forEach(li => {
                    const low = li.textContent.toLowerCase();
                    li.classList.toggle('is-key', keys.some(k => low.includes(k)));
                });
            };
        }

        function initStickyProductBar() {
            const bar = document.getElementById('sticky-product-bar');
            const hero = document.getElementById('product-hero');
            if (!bar || !hero) return;
            const io = new IntersectionObserver(([e]) => {
                bar.hidden = e.isIntersecting;
            }, { threshold: 0.15 });
            io.observe(hero);
        }

        function initSectionDots() {
            const heads = Array.from(document.querySelectorAll('.content-area h2, #pricing, #compare, #faq, #launch-guide'));
            if (heads.length < 3) return;
            const wrap = document.createElement('div');
            wrap.className = 'section-dots';
            wrap.setAttribute('aria-hidden', 'true');
            heads.forEach((h, i) => {
                const b = document.createElement('button');
                b.type = 'button';
                b.title = h.id || ('s' + i);
                b.addEventListener('click', () => h.scrollIntoView({ behavior: 'smooth', block: 'start' }));
                wrap.appendChild(b);
            });
            document.body.appendChild(wrap);
            const buttons = Array.from(wrap.children);
            const io = new IntersectionObserver((entries) => {
                entries.forEach(en => {
                    if (!en.isIntersecting) return;
                    const idx = heads.indexOf(en.target);
                    buttons.forEach((b, i) => b.classList.toggle('active', i === idx));
                });
            }, { rootMargin: '-40% 0px -50% 0px' });
            heads.forEach(h => io.observe(h));
        }

        function initBackToTop() {
            const btn = document.createElement('button');
            btn.className = 'back-to-top';
            btn.type = 'button';
            btn.textContent = '↑';
            btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
            document.body.appendChild(btn);
            let lastY = 0;
            window.addEventListener('scroll', () => {
                const y = window.scrollY || 0;
                btn.classList.toggle('show', y > 600);
                if (window.innerWidth <= 900) {
                    document.body.classList.toggle('mb-hide', y > lastY && y > 120);
                }
                lastY = y;
            }, { passive: true });
        }

        function initLightboxNav() {
            const modal = document.getElementById('lightbox-modal');
            const img = document.getElementById('lightbox-image');
            if (!modal || !img) return;
            img.classList.add('lightbox-zoom');
            img.addEventListener('click', (e) => {
                e.stopPropagation();
                img.classList.toggle('is-zoomed');
            });
            if (!modal.querySelector('.lightbox-nav')) {
                const prev = document.createElement('button');
                prev.className = 'lightbox-nav prev'; prev.type = 'button'; prev.textContent = '‹';
                const next = document.createElement('button');
                next.className = 'lightbox-nav next'; next.type = 'button'; next.textContent = '›';
                modal.appendChild(prev); modal.appendChild(next);
                const thumbs = () => Array.from(document.querySelectorAll('.screenshot-thumb, .screenshot-card img')).map(i => i.currentSrc || i.src);
                const step = (dir) => {
                    const list = thumbs();
                    const cur = list.indexOf(img.currentSrc || img.src);
                    const nextIdx = (cur + dir + list.length) % list.length;
                    if (list[nextIdx]) img.src = list[nextIdx];
                    img.classList.remove('is-zoomed');
                };
                prev.addEventListener('click', (e) => { e.stopPropagation(); step(-1); });
                next.addEventListener('click', (e) => { e.stopPropagation(); step(1); });
                document.addEventListener('keydown', (e) => {
                    if (!modal.classList.contains('open')) return;
                    if (e.key === 'ArrowLeft') step(-1);
                    if (e.key === 'ArrowRight') step(1);
                });
            }
        }

        function enhanceCopySectionLink() {
            if (typeof copySectionLink !== 'function') return;
            const orig = copySectionLink;
            copySectionLink = function(hash, btn) {
                orig(hash, btn);
                showToast(document.documentElement.lang === 'en' ? 'Link copied' : 'Ссылка скопирована');
            };
        }

        function initHotkeys() {
            document.addEventListener('keydown', (e) => {
                const tag = (e.target && e.target.tagName || '').toLowerCase();
                const typing = tag === 'input' || tag === 'textarea' || e.target.isContentEditable;
                if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                    e.preventDefault();
                    openCommandPalette();
                    return;
                }
                if (e.key === 'Escape') closeCommandPalette();
                if (typing) return;
                if (e.key === '/') {
                    e.preventDefault();
                    const fs = document.getElementById('feature-search') || document.getElementById('catalog-search');
                    if (fs) fs.focus();
                    else openCommandPalette();
                }
                if (e.key.toLowerCase() === 'g') location.href = 'index.html';
                if (e.key.toLowerCase() === 'b') {
                    const buy = document.querySelector('.hero-btn.primary, .mb-buy, .spb-buy');
                    if (buy) buy.click();
                }
            });
            document.getElementById('command-palette-input')?.addEventListener('input', (e) => {
                renderCommandResults(e.target.value);
            });
            document.getElementById('command-palette-input')?.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowDown') { e.preventDefault(); moveCommandActive(1); }
                if (e.key === 'ArrowUp') { e.preventDefault(); moveCommandActive(-1); }
                if (e.key === 'Enter') { e.preventDefault(); activateCommandItem(); }
            });
            document.getElementById('command-palette')?.addEventListener('click', (e) => {
                if (e.target.id === 'command-palette') closeCommandPalette();
            });
        }

        function initPrefetch() {
            document.querySelectorAll('link[rel="prefetch"]').forEach(() => {});
            // warm sibling links in idle time
            const links = Array.from(document.querySelectorAll('.sibling-link[href], .sidebar-category.is-active-game .sidebar-link'))
                .map(a => a.getAttribute('href')).filter(Boolean).slice(0, 6);
            if (!('requestIdleCallback' in window)) {
                links.forEach(href => { const l = document.createElement('link'); l.rel = 'prefetch'; l.href = href; document.head.appendChild(l); });
                return;
            }
            requestIdleCallback(() => {
                links.forEach(href => {
                    const l = document.createElement('link');
                    l.rel = 'prefetch';
                    l.as = 'document';
                    l.href = href;
                    document.head.appendChild(l);
                });
            });
        }

        function initCatalogCardExtras() {
            const favs = new Set(getFavs());
            document.querySelectorAll('.status-grid-card').forEach((card, idx) => {
                const slug = card.dataset.slug || card.getAttribute('href') || String(idx);
                card.dataset.slug = slug;
                const media = card.querySelector('.card-media');
                if (media && !media.querySelector('.card-fav')) {
                    const fav = document.createElement('button');
                    fav.type = 'button';
                    fav.className = 'card-fav' + (favs.has(slug) ? ' is-on' : '');
                    fav.textContent = '★';
                    fav.addEventListener('click', (ev) => toggleCardFav(slug, fav, ev));
                    media.appendChild(fav);
                }
                if (card.dataset.new === '1' && media && !media.querySelector('.card-badge-new')) {
                    const b = document.createElement('span');
                    b.className = 'card-badge-new'; b.textContent = 'NEW';
                    media.appendChild(b);
                }
            });
        }

        function initBrandMarkSpin() {
            document.querySelectorAll('.brand-mark, .loader-logo').forEach(el => {
                el.addEventListener('click', () => {
                    el.classList.remove('spin');
                    void el.offsetWidth;
                    el.classList.add('spin');
                });
            });
        }

        function initFiltersSheet() {
            const btn = document.getElementById('filters-sheet-btn');
            if (!btn) return;
            btn.addEventListener('click', () => document.body.classList.toggle('filters-open'));
        }

        function initRecommendPrice() {
            const tiers = Array.from(document.querySelectorAll('.price-tier'));
            if (tiers.length < 2) return;
            const mid = tiers[Math.min(tiers.length - 1, Math.floor(tiers.length / 2))];
            mid.classList.add('is-recommended');
        }

        function initRelativeUpdated() {
            document.querySelectorAll('[data-updated-ts]').forEach(el => {
                const ts = Number(el.dataset.updatedTs || 0);
                if (!ts) return;
                const hours = Math.max(1, Math.round((Date.now() - ts) / 3600000));
                const ru = hours < 48 ? `${hours} ч назад` : el.textContent;
                const en = hours < 48 ? `${hours}h ago` : el.textContent;
                el.innerHTML = `<span data-lang="ru">${ru}</span><span data-lang="en">${en}</span>`;
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            const view = localStorage.getItem(POLISH.viewKey) || 'grid';
            const density = localStorage.getItem(POLISH.densityKey) || 'comfy';
            const theme = localStorage.getItem(POLISH.themeKey) || 'default';
            const grid = document.querySelector('.status-page-grid');
            if (grid) {
                setCatalogView(view, document.querySelector(`.view-btn[data-view="${view}"]`));
                restoreCatalogFromUrl();
                initCatalogCardExtras();
                applyCatalogFilters();
                document.querySelector('.catalog-controls')?.classList.remove('sticky-on');
            }
            setDensity(density, document.querySelector(`.view-btn[data-density="${density}"]`));
            if (theme === 'oled') {
                document.body.classList.add('theme-oled');
                document.getElementById('theme-oled-btn')?.classList.add('active');
            }
            initFeatureAccordion();
            initFeatureHighlight();
            initStickyProductBar();
            initSectionDots();
            initBackToTop();
            initLightboxNav();
            enhanceCopySectionLink();
            initHotkeys();
            initBrandMarkSpin();
            initFiltersSheet();
            initRecommendPrice();
            initRelativeUpdated();
            renderRecentRail();
            initPrefetch();
            const title = document.querySelector('.product-hero h1, h1')?.textContent?.trim();
            const page = location.pathname.split('/').pop();
            if (title && page) trackRecent(page, title);
            // idle tip once
            if (!sessionStorage.getItem('aimer-tip')) {
                setTimeout(() => {
                    showToast(document.documentElement.lang === 'en' ? 'Tip: press / to search' : 'Подсказка: нажми / для поиска');
                    sessionStorage.setItem('aimer-tip', '1');
                }, 2200);
            }
        });

        
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.getRegistrations().then((regs) => {
                    regs.forEach((r) => {
                        if (!r.active || !(r.active.scriptURL || '').includes('sw.js')) return;
                    });
                }).finally(() => {
                    navigator.serviceWorker.register('./sw.js?v=3').then((reg) => {
                        reg.update?.();
                    }).catch(() => {});
                });
            });
        }

        
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
            document.getElementById("scroll-progress").style.transform = "scaleX(" + (scrolled/100) + ")";
        });
        
        window.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '-20% 0px -60% 0px',
                threshold: 0
            };
            
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        document.querySelectorAll('.toc-link').forEach(link => {
                            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                        });
                        document.querySelectorAll('.toc-group').forEach(group => {
                            const ids = (group.dataset.childIds || '').split(/\s+/).filter(Boolean);
                            const active = ids.includes(id);
                            group.classList.toggle('has-active', active);
                            if (active) group.classList.remove('collapsed');
                        });
                    }
                });
            }, observerOptions);
            
            document.querySelectorAll('.content-area h2, #launch-guide, #pricing, #highlights, #faq, #compare').forEach(el => {
                observer.observe(el);
            });
        });

/*==g1da-enhance==*/
(function(){
  var rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function ready(fn){ if(document.readyState!=='loading') fn(); else document.addEventListener('DOMContentLoaded',fn); }

  /* Always clear exit class (bfcache / aborted nav) and force-hide loader */
  function nukeLoader(){
    document.body.classList.remove('page-leaving');
    document.body.classList.add('page-ready');
    var loader = document.getElementById('page-loader');
    if (loader) {
      loader.classList.add('fade-out');
      try { loader.remove(); } catch (e) {}
    }
  }
  ready(nukeLoader);
  setTimeout(nukeLoader, 800);
  window.addEventListener('pageshow', function(){ document.body.classList.remove('page-leaving'); nukeLoader(); });

  ready(function(){
    /* Reveal: sections + catalog cards. Above-fold get is-visible immediately;
       offscreen observe; hard failsafe so nothing stays opacity:0 forever. */
    var SEL = '.launch-guide,.pricing-block,.buy-steps,.useful-links,.highlights-block,' +
              '.screenshots-block,.faq-item,.compare-block,' +
              '.status-grid-card,.screenshot-card,.sys-req-card,.feature-item,.feature-text';
    var nodes = document.querySelectorAll(SEL);
    function showAll(){
      nodes.forEach(function(s){ s.classList.add('reveal-item','is-visible'); });
    }
    if (rm || !('IntersectionObserver' in window)) {
      showAll();
    } else {
      var io = new IntersectionObserver(function(es){
        es.forEach(function(e){
          if (!e.isIntersecting) return;
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        });
      }, {rootMargin:'0px 0px -8px 0px', threshold:0.01});
      var i = 0;
      nodes.forEach(function(s){
        s.classList.add('reveal-item');
        s.style.setProperty('--reveal-order', String(i++ % 7));
        if (s.getBoundingClientRect().top < window.innerHeight * 0.95) {
          s.classList.add('is-visible');
        } else {
          io.observe(s);
        }
      });
      setTimeout(showAll, 1800);
    }

    /* Cursor spotlight (rAF-throttled) */
    if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
      var SPOT = '.price-tier,.faq-item,.status-grid-card,.screenshot-card,.sys-req-card';
      var raf = 0, px = 0, py = 0, pc = null;
      document.addEventListener('pointermove', function(ev){
        var c = ev.target && ev.target.closest ? ev.target.closest(SPOT) : null;
        if (!c) return;
        px = ev.clientX; py = ev.clientY; pc = c;
        if (raf) return;
        raf = requestAnimationFrame(function(){
          raf = 0; if (!pc) return;
          var r = pc.getBoundingClientRect();
          pc.style.setProperty('--mx', (px - r.left) + 'px');
          pc.style.setProperty('--my', (py - r.top) + 'px');
        });
      }, {passive:true});
    }

    /* TOC marker — poll active link; avoid MutationObserver <-> classList loops */
    var panel = document.querySelector('.toc-panel');
    if (panel && !panel.querySelector('.toc-marker')) {
      var mk = document.createElement('span'); mk.className = 'toc-marker'; panel.appendChild(mk);
      var last = '';
      var sync = function(){
        var a = panel.querySelector('.toc-link.active');
        var key = a ? (a.getAttribute('href') || '') + '|' + a.offsetTop + '|' + a.offsetHeight : '';
        if (key === last) return;
        last = key;
        if (!a) { mk.classList.remove('on'); return; }
        mk.style.top = (a.offsetTop + 3) + 'px';
        mk.style.height = Math.max(10, a.offsetHeight - 6) + 'px';
        mk.classList.add('on');
      };
      sync();
      window.addEventListener('scroll', sync, {passive:true});
      setInterval(sync, 400);
    }
  });
})();
/*==g1da-enhance-end==*/
