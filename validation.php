<?php
require_once 'db_connection.php';

$name = $_POST['name'];
$pass = $_POST['password'];
$passencript = md5($pass);


$query = "SELECT * FROM user WHERE username = '$name' AND password = '$passencript'";
$result = mysqli_query($conn, $query);

//Ejecuta la consulta de validacion de user
if (mysqli_num_rows($result) == 1) {
    echo "Inicio de sesión exitoso";
} else {
    echo "Nombre de usuario o contraseña incorrectos";
}
