// Helper functions
function getElementsByClassName(node,classname)
{
  if (node.getElementsByClassName) { // use native implementation if available
    return node.getElementsByClassName(classname);
  } else {
    return (function getElementsByClass(searchClass,node) {
        if ( node == null )
          node = document;
        var classElements = [],
            els = node.getElementsByTagName("*"),
            elsLen = els.length,
            pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)"), i, j;

        for (i = 0, j = 0; i < elsLen; i++) {
          if ( pattern.test(els[i].className) ) {
              classElements[j] = els[i];
              j++;
          }
        }
        return classElements;
    })(classname, node);
  }
}

function copyToClipboard(text)
{
    var copyDiv = document.createElement('div');
    copyDiv.contentEditable = true;
    document.body.appendChild(copyDiv);
    copyDiv.innerHTML = text;
    copyDiv.unselectable = "off";
    copyDiv.focus();
    document.execCommand('SelectAll');
    document.execCommand("Copy", false, null);
    document.body.removeChild(copyDiv);

    return true;
}
// End helper functions

// Main
function main()
{
  var title = getElementsByClassName(document, 'card-detail-title-assist')[0].innerText;
  var prefix = title.match(/s\d+_c\d+/i);
  var hasPrefix = prefix != undefined;

  if (hasPrefix) {
      return copyToClipboard('BCH_' + prefix[0]);
  }

  return alert('Este cartão não tem um prefixo S000_C000 válido!');
}

main();