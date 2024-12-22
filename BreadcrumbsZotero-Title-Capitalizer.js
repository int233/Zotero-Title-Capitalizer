zoteroPane = Zotero.getActiveZoteroPane();
items = zoteroPane.getSelectedItems();
var result = "";

function toTitleCase(str) {
    var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|with|via|vivo|vitro)$/i;
    
    // Temporarily replace HTML tags with placeholders
    var htmlTags = [];
    str = str.replace(/(<[^>]+>)/g, function(match) {
        htmlTags.push(match);
        return `__HTML_TAG_${htmlTags.length - 1}__`; 
    });
    
    // Title Case conversion
    // Code from https://github.com/rvagg/titlecase
    str = str.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(match, index, title){
        if (index > 0 && index + match.length !== title.length &&
          match.search(smallWords) > -1 && title.charAt(index - 2) !== ':' &&
          (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') &&
          title.charAt(index - 1).search(/[^\s-]/) < 0) {
          return match.toLowerCase();  
        }
    
        if (match.substr(1).search(/[A-Z]|\../) > -1) {
          return match;  
        }
    
        return match.charAt(0).toUpperCase() + match.substr(1).toLowerCase(); 
    });

    // Restore HTML tags
    str = str.replace(/__HTML_TAG_(\d+)__/g, function(match, index) {
        return htmlTags[index]; 
    });

    return str;
}

for (item of items) {
    var title = item.getField('title');
    result += "Original: " + title + "\n";

    var new_title = toTitleCase(title);

    result += "Converted: " + new_title + "\n\n";

    item.setField('title', new_title);
    await item.saveTx();
}

return result;
