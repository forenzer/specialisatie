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
            <form action="instawar.php" method="post">
                <label for="userInput1">User 1:</label><br />
                <input type="text" id="userInput1" name="ui1"/><br />
                <label for="userInput2">User 2:</label><br />
                <input type="text" id="userInput2" name="ui2"/><br />
                <input type="submit" value="FIGHT!" class="submit"/>
            </form>
        </div>
        
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>  
        <script type="text/javascript" src="js/java.js"></script>  
	</body>
</html>