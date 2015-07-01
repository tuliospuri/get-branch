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
}
// End helper functions

// Main
var SEPARATOR = ' - ';
var title     = getElementsByClassName(document, 'js-card-title')[0].innerText;
var hasHyphen = title.indexOf(SEPARATOR) != -1;

if (hasHyphen) {
    copyToClipboard('BCH_' + title.split(SEPARATOR)[0]);
} else {
    alert('Prefix not found');
}