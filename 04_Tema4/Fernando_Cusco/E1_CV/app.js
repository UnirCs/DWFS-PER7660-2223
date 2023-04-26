// get checkbox
const checkbox = document.getElementById('toggle');
checkbox.addEventListener('change', () => {
    const body = document.body;
    body.classList.remove('dark', 'light');
    const style = checkbox.checked ? 'dark' : 'light';
    body.classList.add(style);

});

// event load
window.addEventListener('load', () => {
    const body = document.body;
    const childNodes = body.childNodes;
    childNodes.forEach((node) => {
        if (node.childNodes.length > 0) {
            console.log(node.childNodes);
        }
    });
});