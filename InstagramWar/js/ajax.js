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
            $count = 1; //opzettelijk op 1 gezet, op deze manier spaar ik lijntjes code uit.
            for(iUser in json.data)
            {
                oUser = json.data[iUser];
                
                getUserValues(oUser.id, $hidden);
                
                if($count > 0){break;}
            }
        }
    }); 
    
    function getUserValues($user_id, $access_token)
    {
        $.ajax
        ({
            url: 'https://api.instagram.com/v1/users/' + $user_id + '/?access_token=' + $access_token,
            dataType: "jsonp",
            success: function(json)
            {
                //console.log(json.data);
                $count = 1; //opzettelijk op 1 gezet, op deze manier spaar ik lijntjes code uit.
                for(iValue in json.data)
                {
                    oValue = json.data[iValue];
                    
                    //console.log(oValue);
                    
                    if($count > 0){break;}
                }
            }
        });
    }          
});