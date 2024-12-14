<?php
// // Database configuration
// $servername = "localhost"; 
// $username = "root";
// $password = "";
// $dbname = "quiz";

// Database configuration
$servername = "localhost"; // Assuming MySQL is hosted locally
$username = "u453543362_quizadmin";
$password = "516156AS1df@";
$dbname = "u453543362_quiz";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// echo "Connected successfully";
?>
