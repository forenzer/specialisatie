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
        </div>
        
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
        <script type="text/javascript" src="js/ajax.js"></script>
    </body>
</html>