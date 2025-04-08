<?php
$servername = "localhost";
$username = "root"; // default user for XAMPP
$password = "310200";     // default is empty password

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
