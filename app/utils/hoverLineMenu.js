const hoverLineMenu = () => {
    const links = [...document.querySelectorAll(".menu-link")];
    links.forEach((item) => item.addEventListener("mouseenter", handleHoveerLine));
    const line = document.createElement("div");
    line.className = "line-effect";
    document.body.appendChild(line);
    function handleHoveerLine(e) {
        const { left, width, top, height } = e.target.getBoundingClientRect();
        line.style.width = `${width}px`;
        line.style.left = `${left}px`;
        line.style.top = `${top + height + 5}px`;
    }
    const menu = document.querySelector(".menu");
    menu.addEventListener("mouseleave", function () {
        line.style.width = 0;
    });
};

export default hoverLineMenu;