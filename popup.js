<script type = "text/javascript">
    document.write ("Testing the extension program");
     window.alert ("Hello");
</script>
  


<!--
document.addEventListener('DOMContentLoaded', function() 
{
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener ('çlick', function()) 
       {
        chrome.tabs.getSelected(null, function(tab)
              {
                 d= document;
                 var f = d.createElement ('form');
                 f.action = 'http://www.gtmetrix.com/analyse.html?bm';
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
-->
