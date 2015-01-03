$(document).ready(function()
{ 
    $user_input1 = $('#user_input1').html();
    $user_input2 = $('#user_input2').html();
    $hidden = $('#hidden').html();
    
    $user1 = new Array();
    $user2 = new Array();
    
    
    $('.hidden').hide();
    
    searchUser($user_input1, $hidden, $user1);
    searchUser($user_input2, $hidden, $user2);
    
    function searchUser($user_input, $access_token, $user)
    {
        $.ajax
        ({   
            url: 'https://api.instagram.com/v1/users/search/?q=' + $user_input + '&access_token=' + $access_token,
            dataType: "jsonp",
            success: function(json)
            {   
                $count = 1; //opzettelijk op 1 gezet, op deze manier spaar ik lijntjes code uit.
                for(iUser in json.data)
                {
                    //console.log(json.data);
                    oUser = json.data[iUser];
                    
                    getUserValues(oUser.id, $access_token, $user);
                
                    if($count > 0){break;}
                }
            }
        });
    }
    
    
    function getUserValues($user_id, $access_token, $user)
    {
        $.ajax
        ({
            url: 'https://api.instagram.com/v1/users/' + $user_id + '/?access_token=' + $access_token,
            dataType: "jsonp",
            success: function(json)
            {
                $count = 1; //opzettelijk op 1 gezet, op deze manier spaar ik lijntjes code uit.
                for(iValue in json.data)
                {
                    oValue = json.data;
                    
                    $user.push(oValue.counts.followed_by);
                    $user.push(oValue.counts.follows);
                    $user.push(oValue.counts.media);
                    $user.push(oValue.profile_picture);
                    
                    if($count > 0){break;}
                }
                
                if($user1.length > 0 && $user2.length > 0)
                {
                    $totalMedia = $user1[2] + $user2[2];
                    $totalFollowedBy = $user1[1] + $user2[1]; //Het totaal aantal mensen die 1 van de 2 accounts volgt
                    $totalFollows = $user1[0] + $user2[0]; // Het totaal van het aantal mensen gevolgd door 1 van de 2 accounts
                    
                    $(".leftImage").append('<img src="' + $user1[3] + '" />');
                    $(".rightImage").append('<img src="' + $user2[3] + '" />');
                    
                    $percentage_media_user1 = Math.round(100 / $totalMedia * $user1[2]);
                    $percentage_media_user2 = Math.round(100 / $totalMedia * $user2[2]);
                    $percentage_followed_by_user1 = Math.round(100 / $totalFollowedBy * $user1[1]);
                    $percentage_followed_by_user2 = Math.round(100 / $totalFollowedBy * $user2[1]);
                    $percentage_follows_user1 = Math.round(100 / $totalFollows * $user1[0]);
                    $percentage_follows_user2 = Math.round(100 / $totalFollows * $user2[0]);
                    
                    $("#media .user_output1").append('<p>'+$user1[2]+'</p>');
                    $("#media .user_output2").append('<p>'+$user2[2]+'</p>');
                    $("#media .user_output1").css("width", $percentage_media_user1 + "%");
                    $("#media .user_output2").css("width", $percentage_media_user2 + "%");
                    
                    $("#follows .user_output1").append('<p>'+$user1[1]+'</p>');
                    $("#follows .user_output2").append('<p>'+$user2[1]+'</p>');
                    $("#follows .user_output1").css("width", $percentage_followed_by_user1 + "%");
                    $("#follows .user_output2").css("width", $percentage_followed_by_user2 + "%");
                    
                    $("#followed .user_output1").append('<p>'+$user1[0]+'</p>');
                    $("#followed .user_output2").append('<p>'+$user2[0]+'</p>');
                    $("#followed .user_output1").css("width", $percentage_follows_user1 + "%");
                    $("#followed .user_output2").css("width", $percentage_follows_user2 + "%");
                }
            }
        });
    }
});