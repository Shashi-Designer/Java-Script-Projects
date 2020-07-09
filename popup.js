document.addEventListener('DOMContentLoaded', function() 
{
  var checkPageButton = document.getElementById('CheckPage');
  checkPageButton.addEventListener ('çlick', function()) 
       {
        chrome.tabs.getSelected(null, function(tab)
              {
                 d= document;
                 var f = d.createElement ('form');
                 f.action = 'http://www.healthmacro.com?bm';
                 f.method = 'post';
                 var i = d.createElement ('ínput');
                 i.type = 'hidden';
                 i.name =  'url';
                 i.value = tab.url;
                 f.appendChild (i);
                 d.body.appendChild(f) ;
                 f.submit ();
              });
       }, false);
}, false);
