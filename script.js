document.addEventListener('DOMContentLoaded', () => {
    // State Management
    let currentView = 'overview'; // 'overview' | 'category' | 'search'
    let currentCategoryIndex = -1;
    let currentModels = []; 
    let currentModalIndex = -1; 
    let searchTimeout = null;

    // DOM Elements
    const categoryList = document.getElementById('category-list');
    const overviewSection = document.getElementById('overview-section');
    const overviewGrid = document.getElementById('overview-grid');
    const categoryHeader = document.getElementById('category-header');
    const categoryTitle = document.getElementById('category-title');
    const modelsGrid = document.getElementById('models-grid');
    const searchInput = document.getElementById('search-input');
    const backToTopBtn = document.getElementById('back-to-top');
    const mainContent = document.getElementById('main-content');

    // Modal DOM Elements
    const modal = document.getElementById('model-modal');
    const modalContent = document.querySelector('.modal-content');
    const closeModalBtn = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalSummary = document.getElementById('modal-summary');
    const modalDetail = document.getElementById('modal-detail');

    if (typeof modelsData === 'undefined') {
        console.error('modelsData is not defined. Make sure data.js is loaded before script.js');
        return;
    }

    function initApp() {
        modelsData.forEach((cat, index) => {
            const li = document.createElement('li');
            li.textContent = `${cat.emoji} ${cat.category}`;
            li.dataset.index = index;
            li.addEventListener('click', () => {
                window.location.hash = `#category=${index}`;
            });
            categoryList.appendChild(li);
        });

        modelsData.forEach((cat, index) => {
            const card = document.createElement('div');
            card.className = 'overview-card';
            const cleanName = cat.category.replace(/^\d+\.\s*/, '');
            card.innerHTML = `
                <div class="emoji">${cat.emoji}</div>
                <div class="info">
                    <h3>${cleanName}</h3>
                    <p>${cat.models.length} 个模型</p>
                </div>
            `;
            card.addEventListener('click', () => {
                window.location.hash = `#category=${index}`;
            });
            overviewGrid.appendChild(card);
        });

        handleHashChange();
    }

    function renderCategory(index) {
        currentView = 'category';
        currentCategoryIndex = index;
        const cat = modelsData[index];
        currentModels = cat.models;

        updateSidebarActive(index);
        overviewSection.style.display = 'none';
        categoryHeader.style.display = 'block';
        modelsGrid.style.display = 'grid';
        searchInput.value = '';

        categoryTitle.textContent = `${cat.emoji} ${cat.category}`;
        renderModelsGrid(currentModels);
        scrollToActiveCategoryMobile();
    }

    function renderOverview() {
        currentView = 'overview';
        currentCategoryIndex = -1;
        currentModels = [];

        updateSidebarActive(-1);
        overviewSection.style.display = 'flex';
        categoryHeader.style.display = 'none';
        modelsGrid.style.display = 'none';
        searchInput.value = '';
    }

    function renderModelsGrid(models) {
        modelsGrid.innerHTML = '';
        models.forEach((model, idx) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.animation = 'fadeInUp 0.4s ease forwards';
            card.style.setProperty('--delay', `${idx * 0.05}s`);
            card.style.animationDelay = `${idx * 0.05}s`;
            
            const num = (idx + 1).toString().padStart(2, '0');

            card.innerHTML = `
                <span class="card-number">${num}</span>
                <h3 class="card-title">${model.title}</h3>
                <div class="card-summary">${model.summary}</div>
            `;

            card.addEventListener('click', () => {
                openModal(idx);
            });

            modelsGrid.appendChild(card);
        });
    }

    function updateSidebarActive(index) {
        const items = categoryList.querySelectorAll('li');
        items.forEach((item, idx) => {
            if (idx === parseInt(index)) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    function scrollToActiveCategoryMobile() {
        if (window.innerWidth <= 768) {
            const activeItem = categoryList.querySelector('.active');
            if (activeItem) {
                activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    }

    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim().toLowerCase();

        searchTimeout = setTimeout(() => {
            if (query === '') {
                if (currentCategoryIndex !== -1) {
                    renderCategory(currentCategoryIndex);
                } else {
                    renderOverview();
                }
                return;
            }

            currentView = 'search';
            let results = [];
            modelsData.forEach(cat => {
                cat.models.forEach(model => {
                    if (model.title.toLowerCase().includes(query) || model.summary.toLowerCase().includes(query)) {
                        results.push(model);
                    }
                });
            });

            currentModels = results;
            updateSidebarActive(-1);
            
            overviewSection.style.display = 'none';
            categoryHeader.style.display = 'block';
            modelsGrid.style.display = 'grid';
            categoryTitle.textContent = `搜索结果: "${query}" (${results.length})`;
            
            renderModelsGrid(results);
        }, 300);
    });

    function handleHashChange() {
        const hash = window.location.hash;
        
        if (!hash || hash === '#overview') {
            if (!modal.classList.contains('visible') || currentView !== 'overview') {
                closeModalUI();
                renderOverview();
            }
        } else if (hash.startsWith('#category=')) {
            const index = parseInt(hash.replace('#category=', ''));
            if (!isNaN(index) && index >= 0 && index < modelsData.length) {
                if (!modal.classList.contains('visible') || currentCategoryIndex !== index) {
                    closeModalUI();
                    renderCategory(index);
                }
            }
        } else if (hash.startsWith('#model=')) {
            const id = hash.replace('#model=', '');
            if (currentModels.length === 0) {
                let found = false;
                for (let i = 0; i < modelsData.length; i++) {
                    const cat = modelsData[i];
                    const mIndex = cat.models.findIndex(m => m.id === id);
                    if (mIndex !== -1) {
                        renderCategory(i);
                        openModal(mIndex, false);
                        found = true;
                        break;
                    }
                }
                if (!found) renderOverview();
            } else {
                const index = currentModels.findIndex(m => m.id === id);
                if (index !== -1) {
                    openModal(index, false);
                }
            }
        }
    }

    window.addEventListener('hashchange', handleHashChange);

    function openModal(index, updateHash = true) {
        if (index < 0 || index >= currentModels.length) return;
        currentModalIndex = index;
        const model = currentModels[index];

        modalTitle.textContent = model.title;
        modalSummary.textContent = model.summary;
        modalDetail.innerHTML = model.detail || '';
        modalDetail.scrollTop = 0;

        if (updateHash) {
            window.location.hash = `#model=${model.id}`;
        }

        modal.classList.add('visible');
        document.body.classList.add('modal-open');
    }

    function closeModalUI() {
        modal.classList.remove('visible');
        document.body.classList.remove('modal-open');
    }

    function closeModal() {
        closeModalUI();
        if (currentView === 'category') {
            window.location.hash = `#category=${currentCategoryIndex}`;
        } else if (currentView === 'search') {
            window.location.hash = '';
        } else {
            window.location.hash = '#overview';
        }
    }

    closeModalBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('visible')) {
            if (e.key === 'Escape') closeModal();
        }
    });

    function checkScrollVisibility(scrollTop) {
        if (scrollTop > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', () => {
        if (window.innerWidth <= 768) {
            checkScrollVisibility(window.scrollY);
        }
    });

    mainContent.addEventListener('scroll', (e) => {
        if (window.innerWidth > 768) {
            checkScrollVisibility(e.target.scrollTop);
        }
    });

    backToTopBtn.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    initApp();
});
