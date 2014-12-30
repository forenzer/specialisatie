<?php
    $user_input1 = $_POST['ui1'];
    $user_input2 = $_POST['ui2'];
    $hddn = $_POST['hddn'];
?>
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Instagram Wars</title>
        <link rel="stylesheet" type="text/css" href="css/reset.css">
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <link href='http://fonts.googleapis.com/css?family=VT323' rel='stylesheet' type='text/css'>
	</head>
    <body>
        <header></header>
        <div class="headerText">
            <h1>Instagram Wars</h1>
            <div class="leftImage"></div>
            <div class="rightImage"></div>
        </div>
        <div class="userInput">
            <p class="hidden" id="user_input1">
                <?php
                    echo($user_input1);
                ?>
            </p>
            <p class="hidden" id="user_input2">
                <?php
                    echo($user_input2);
                ?>
            </p>
            <p class="hidden" id="hidden">
                <?php
                    echo($hddn);
                ?>
            </p>
            <div class="media output">
                <h2>Media:</h2>
                <div class="container" id="media">
                    <div class="user_output1 media"></div>
                    <div class="user_output2 media"></div>
                </div>
            </div>
            <div class="followed_by output">
                <h2>Followed By:</h2>
                <div class="container" id="followed">
                    <div class="user_output1 followed"></div>
                    <div class="user_output2 followed"></div>
                </div>
            </div>
            <div class="follows output">
                <h2>Follows:</h2>
                <div class="container" id="follows">
                    <div class="user_output1 follows"></div>
                    <div class="user_output2 follows"></div>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
        <script type="text/javascript" src="js/ajax.js"></script>
    </body>
</html>