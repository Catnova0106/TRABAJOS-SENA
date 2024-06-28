<?php
  // Conectar a la base de datos
  $servername = "localhost";
  $username = "tu_usuario";
  $password = "tu_contraseña";
  $dbname = "tu_base_de_datos";

  $conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  // Recopilar datos del formulario
  $entrenador = $_GET['entrenador'];
  $precio = $_GET['precio'];

  // Insertar datos en la base de datos
  $sql = "INSERT INTO elecciones (entrenador, precio) VALUES ('$entrenador', '$precio')";
  $conn->query($sql);

  // Mostrar mensaje de confirmación
  echo "<h1>Elegir Entrenador</h1>";
  echo "<p>Has seleccionado al entrenador <strong>$entrenador</strong> con un precio de <strong>$precio€/hora</strong>.</p>";
  echo "<p>Datos guardados correctamente.</p>";

  // Cerrar conexión
  $conn->close();
?>