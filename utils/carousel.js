function Carousel(options) {
    // ==============
    // ==== DOM =====
    // ==============

    const carousel = document.querySelector(options.selector);
    const itemsList = carousel.querySelectorAll('.item');

    // =================
    // ==== States =====
    // =================

    const count = itemsList.length;
    const loop = options.loop ?? true;
    const pag = count <= 2 ? false : options.pag ?? true;
    const amount = options.responsive[0] ?? 1;
    const width = 100 / amount;
    const duration = 500;
    let index = 1;
    let firstDot = 1;
    let secondDot = Math.ceil(count * 2 / 5);
    let thirdDot = Math.ceil(count * 4 / 5);


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
                ele && wrapper.appendChild(ele);
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

    function showActive() {
        dot1.className = 'dot';
        dot2.className = 'dot';

        if (count > 2) {
            dot3.className = 'dot';
        }

        if (firstDot <= index && index < secondDot) {
            dot1.classList.add('active');
        } else if (secondDot <= index && index < thirdDot) {
            dot2.classList.add('active');
        } else if (count > 2 && thirdDot <= index) {
            dot3.classList.add('active');
        }
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

    // Create navigation buttons
    if (pag) {
        var dot1 = createEl('<div class="dot active"></div>');
        var dot2 = createEl('<div class="dot"></div>');

        if (count > 2) {
            var dot3 = createEl('<div class="dot"></div>');
        }

        var dots = wrapperEls([dot1, dot2, dot3], 'div', 'dots');
        carousel.appendChild(dots);
    }

    // =======================
    // ==== Handle events ====
    // =======================

    leftBtn.onclick = throttling(function () {
        --index;
        moveCarousel();
        pag && showActive();
    }, duration * 1.2);

    rightBtn.onclick = throttling(function () {
        ++index;
        moveCarousel();
        pag && showActive();
    }, duration * 1.2);

    if (pag) {
        dot1.onclick = () => {
            index = firstDot;
            moveCarousel();
            showActive();
        };

        dot2.onclick = () => {
            index = secondDot;
            moveCarousel();
            showActive();
        };

        if (dot3) {
            dot3.onclick = () => {
                index = thirdDot;
                moveCarousel();
                showActive();
            };
        }
    }
}

export default Carousel;