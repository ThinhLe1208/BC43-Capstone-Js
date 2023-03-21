// Improvement: make an animation by adding margin-left to the first item
function Carousel(options) {
    // ==============
    // ==== DOM =====
    // ==============

    const carousel = document.querySelector(options.selector);
    const itemsList = carousel.querySelectorAll('.item');

    // =================
    // ==== States =====
    // =================

    const amount = options.responsive ? options.responsive[0] : 1;
    const width = 100 / amount;
    const count = itemsList.length;
    const duration = 500;
    let index = 1;

    // =====================
    // ==== Utilities ======
    // =====================

    function wrapperEls(els, type = "div", clas = "") {
        let parent;
        const wrapper = document.createElement(type);
        wrapper.className = clas;

        if (els.length) {
            parent = els[0].parentNode;
            els.forEach((ele) => {
                wrapper.appendChild(ele);
            });
        } else {
            parent = els.parentNode;
            wrapper.appendChild(eles);
        }
        parent.appendChild(wrapper);

        return wrapper;
    };

    function createEl(htmlString) {
        const div = document.createElement('div');
        div.innerHTML = htmlString;
        return div.childNodes[0];
    }

    function moveCarousel() {
        before.style.marginLeft = -width * index + '%';
        if (index > count) {
            index = 1;
            toggleAnimation();
        } else if (index == 0) {
            index = count;
            toggleAnimation();
        }
    }

    async function toggleAnimation() {
        await delay(duration);
        before.classList.remove('animation');
        before.style.marginLeft = -width * index + '%';
        await delay(duration * 0.2);
        before.classList.add('animation');
    }

    function delay(time) {
        return new Promise((resolve) => {
            setTimeout(resolve, time);
        });
    }

    function throttling(fn, delay) {
        let toThrottle = false;

        return () => {
            if (!toThrottle) {
                toThrottle = true;
                fn();
                setTimeout(() => {
                    toThrottle = false;
                }, delay);
            }
        };
    }

    // =====================
    // ==== Preprocess =====
    // =====================

    // Specify the width of an image based on responsive
    itemsList.forEach((item) => {
        item.style.width = width + '%';
    });

    // Wrap items in a container
    const itemsContainer = wrapperEls(itemsList, 'div', 'items-container');

    // Create 2 items at the start and the end of the container
    const first = document.querySelector('.item:first-child');
    const last = document.querySelector('.item:last-child');

    itemsContainer.insertBefore(last.cloneNode(true), first);
    itemsContainer.appendChild(first.cloneNode(true));

    const before = document.querySelector('.item:first-child');
    before.style.marginLeft = -width * index + '%';
    before.classList.add('animation');

    // Create 2 navigation buttons
    const leftBtn = createEl(`<button class="left-btn"></button>`);
    const rightBtn = createEl(`<button class="right-btn"></button>`);

    carousel.insertBefore(leftBtn, itemsContainer);
    carousel.appendChild(rightBtn);

    // =======================
    // ==== Handle events ====
    // =======================

    leftBtn.onclick = throttling(function () {
        --index;
        moveCarousel();
    }, duration * 1.2);

    rightBtn.onclick = throttling(function () {
        ++index;
        moveCarousel();
    }, duration * 1.2);
}