window.onload = (event) => {
    const body = document.body;
    const leafElements = getLeafElements(body);
    console.log(leafElements);
  };
  
  function getLeafElements(element) {
    const leafElements = [];
    
    function traverse(element) {
      const childNodes = element.childNodes;
      if (childNodes.length === 0) {
        leafElements.push(element);
      } else {
        childNodes.forEach(childNode => {
          if (childNode.nodeType === Node.ELEMENT_NODE) {
            traverse(childNode);
          }
        });
      }
    }
    
    traverse(element);
    return leafElements;
  }