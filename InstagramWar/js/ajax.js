$(document).ready(function()
{ 
    $user_input1 = $('#user_input1').html();
    $user_input2 = $('#user_input2').html();
    $hidden = $('#hidden').html();
    
    $('.hidden').hide();
    
    $.ajax
    ({   
        url: 'https://api.instagram.com/v1/users/search/?q=' + $user_input1 + '&access_token=' + $hidden,
        dataType: "jsonp",
        success: function(json)
        {    
            console.log('SUCCESS!');
        }
    }); 
});