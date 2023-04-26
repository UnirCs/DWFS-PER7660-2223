window.onload = (event) => {
    const body         = document.body;
    const containers   = document.querySelectorAll('.container');
    const toggleSwitch = document.querySelector('input[type="checkbox"]');
    function switchTheme(e) {
      if (e.target.checked) {
        body.classList.add('dark-mode');
        containers.forEach(container => {
          container.classList.add('dark-mode');
        });
      } else {
        body.classList.remove('dark-mode');
        containers.forEach(container => {
          container.classList.remove('dark-mode');
        });
      }    
    }
    toggleSwitch.addEventListener('change', switchTheme, false);


    var leaves = [];
    function findLeaves(node) {
        if (node.children.length === 0) {
            leaves.push(node);
        } else {
            for (var i = 0; i < node.children.length; i++) {
                findLeaves(node.children[i]);
            }
        }
    }
    findLeaves(body);
    console.log("Las hojas del árbol de elementos asociado al body del documento HTML son:");
    for (var i = 0; i < leaves.length; i++) {
        console.log(leaves[i]);
    }
};