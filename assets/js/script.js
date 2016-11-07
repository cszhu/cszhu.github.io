Ajax({
  'method'  : 'POST',
  'url'   : 'https://chrome.google.com/webstore/ajax/item?hl=en&category=extensions&pv=' + req.pv + '&count=61&searchTerm=' + encodeURIComponent(username) + '&source=igejgfmbjjjjplnnlgnbejpkpdajkblm',
  'onSuccess' : function(xhr) {
    var response = Ext.parseJSON(xhr.responseText);

    if (!response) {
      alert('Network error, can not retrieve content. Please try again later.');
      return this;
    }
  }
});