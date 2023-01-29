<?php require_once "controller.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup</title>
    <link rel="shortcut icon" href="">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="screen">
        <form action="register.php">
            <header>Signup</header>
            <input type="email" placeholder="Email" class="inp">
            <input type="text" placeholder="Username" class="inp">
            <input type="password" placeholder="Password" class="inp" required>
            <input type="password" placeholder="Confirm Password" class="inp" required>
            <input type="submit" value="Signup" class="btn">
            <p class="text">Have an account? <a href="login.php" class="link">Login!</a></p>
        </form>
    </div>
</body>
</html>