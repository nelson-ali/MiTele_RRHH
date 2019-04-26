<?php
$config = array(
"host" => "localhost",
"dbname" => "rrhh",
"username" => "postgres",
"password" => "S1stemas"
);
$connection = new Phalcon\Db\Adapter\Pdo\Postgresql($config);
$robot = $connection->fetchAll("SELECT * FROM f_relaborales()");
print_r($robot);
?>