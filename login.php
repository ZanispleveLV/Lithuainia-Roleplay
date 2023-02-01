<?php require_once "controller.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="shortcut icon" href="">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="screen">
        <form action="login.php">
            <header>Login</header>
            <input type="text" placeholder="Username" class="inp">
            <input type="password" placeholder="Password" class="inp">
            <a href="frgpsw.php" class="link">Forgot Password</a>
            <input type="submit" value="Login" class="btn">
            <p class="text">Do not have an account? <a href="register.php" class="link">Signup!</a></p>
        </form>
    </div>
</body>
</html>
