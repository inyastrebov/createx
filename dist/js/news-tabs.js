const newsContainerTabs = document.querySelector('.news-categories-tabs');
const newsBtn = document.querySelectorAll('.news-categories-tabs__btn');
const newsCard = document.querySelectorAll('.news-categories__item');
const newsCardVisible = document.querySelectorAll('.news-categories__item--visible');

const newsNav = document.querySelector('.number-page');
const newsNavArrow = document.querySelectorAll('.number-page__item');

if (newsContainerTabs) {
    const isLoadMoreNeeded = (selector) => {
        if (selector.length <= 6) {
            newsNav.style.display = 'none';
        } else {
            newsNav.style.display = 'flex';
        }
    };

    const hideMoreItems = (selector) => {
        if (selector.length > 6) {
            const arr = Array.from(selector);
            const hiddenItems = arr.slice(6, selector.length);
    
            hiddenItems.forEach(el => {
                el.classList.remove('news-categories__item--visible');
                el.classList.remove('news-categories__item--visible-more');
            });
        }
    }

    newsContainerTabs.addEventListener('click', (e) => {
        const target = e.target;
    
        if (target.classList.contains('news-categories-tabs__btn')) {
            const tab = target.dataset.tab;
    
            newsBtn.forEach((el) => {
                el.classList.remove('news-categories-tabs__btn--active')});
                target.classList.add('news-categories-tabs__btn--active');
    
            newsCard.forEach(el => {
                el.classList.remove('news-categories__item--visible');
                el.classList.remove('news-categories__item--visible-more');
            });
            
            document.querySelectorAll(`[data-categories="${tab}"]`).forEach(el => {
                el.classList.add('news-categories__item--visible');
            });

            isLoadMoreNeeded(document.querySelectorAll(`[data-target="${tab}"]`));
            hideMoreItems(document.querySelectorAll('.portfolio-tabs__item--visible'));
    
            if (tab == 'all') {
                newsCard.forEach(el => {
                    el.classList.add('news-categories__item--visible');
                });

                isLoadMoreNeeded(document.querySelectorAll('.news-categories__item--visible'));
                hideMoreItems(document.querySelectorAll('.news-categories__item--visible'));
            }
    
            console.log(tab);
        }
    });

    hideMoreItems(newsCard);
    isLoadMoreNeeded(newsCardVisible);
}