<?php
require_once 'db_connection.php';

$name = $_POST['name'];
$user = $_POST['username'];
$email = $_POST['email'];
$pass = $_POST['password'];
$passencript = md5($pass);


$query = "INSERT INTO user (username, password, email, first_name) VALUES ('$user', '$passencript', '$email', '$name')";

// Ejecuta la consulta de inserción
if (mysqli_query($conn, $query)) {
    echo "Registro insertado correctamente";
} else {
    echo "Error al insertar el registro: " . mysqli_error($conn);
}

// Cerrar la conexión
mysqli_close($conn);
