<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Database connection
    $conn = new mysqli('localhost', 'root', '', 'users');
    if ($conn->connect_error) {
        die("Connection Failed: " . $conn->connect_error);
    }

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO registration (username, email, password) VALUES (?, ?, ?)");
    if ($stmt === false) {
        die("Prepare failed: " . htmlspecialchars($conn->error));
    }

    $stmt->bind_param("sss", $username, $email, $password);
    $execval = $stmt->execute();

    if ($execval) {
        echo "Registration successfully...";
    } else {
        echo "Error: " . htmlspecialchars($stmt->error);
    }

    $stmt->close();
    $conn->close();
} else {
    echo "No data submitted.";
}

$passwordHash = password_hash($password, PASSWORD_BCRYPT);

?>
