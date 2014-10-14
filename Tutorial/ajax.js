$(document).ready(function()
{  
    var sfield = $("#s");  
    var container = $("#photos");  
    var timer;  

    $(sfield).keydown(function(e)
    {  
        if(e.keyCode == '32' || e.keyCode == '188' || e.keyCode == '189' || e.keyCode == '13' || e.keyCode == '190' || e.keyCode == '219' || e.keyCode == '221' || e.keyCode == '191' ||    e.keyCode == '220')
        {  
            e.preventDefault();  
        } 
        else 
        {  
            clearTimeout(timer);  
      
            timer = setTimeout(function() 
            {  
                instaSearch();  
            }, 900);     
        }  
    });
    function instaSearch() 
    {  
        $(sfield).addClass("loading");  
        $(container).empty();  
        var q = $(sfield).val();  
      
        $.ajax
        ({  
            type: 'POST',  
            url: 'instasearch.php',  
            data: "q="+q,  
            success: function(data)
            {  
                $(sfield).removeClass("loading");
                
                console.log(data);
              
                $.each(data, function(i, item) 
                {  
                    var ncode = '<a rel="external" href="'+data[i].url+'" target="_blank"><img src="'+data[i].thumb+'"></a></div>';
                    ncode +='<div class="p"><a rel="external" href="'+data[i].url+'" class="fullsize" target="_blank"><img src="'+data[i].src+'" alt="fullsize"></a>';
                    //var ncode = '<p>'+data[i].thumb+'</p>';
                    $(container).append(ncode); 
                }); 
                
            },  
                error: function(xhr, type, exception) 
                {   
                    $(sfield).removeClass("loading");  
                    $(container).html("Error: " + type);   
                }  
        });  
    }
});