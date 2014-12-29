$(document).ready(function()
{ 
    $str = document.URL;
    $n = $str.search('#access_token=');
    $substr = $str.substring($n);
    $substr = $substr.substring(14);
    
    $('.userInput form').append('<input type="hidden" value="' + $substr + '" name="hddn" />');
});