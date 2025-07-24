const css_files = ['index', 'nav', 'spinner', 'travel'];
for (var i = 0; i < css_files.length; i++) {
    var div = document.createElement('link');
    div.rel = 'stylesheet'
    div.href = `/src/assets/styles/${css_files[i]}.css`;
    document.head.insertBefore(div, document.head.firstChild)
};