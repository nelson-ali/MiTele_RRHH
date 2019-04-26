<?php
$option = 0;
switch($option){
    case 1: $HOST="192.168.200.100"; $USERNAME="urrhh"; $PASSWORD="prrhh"; $DBNAME="bdrrhh";break;
    default: $HOST="localhost"; $USERNAME="postgres"; $PASSWORD="S1stemas"; $DBNAME="rrhh_copia";
}
return new \Phalcon\Config(array(
    'database' => array(
        'adapter'     => 'Postgresql',
        'host'        => $HOST,
        'username'    => $USERNAME,
        'password'    => $PASSWORD,
        'dbname'      => $DBNAME
    ),
    'biometrico' => array(
        'adapter'   => 'Twm\Db\Adapter\Pdo\Mssql',
        'host'		=> '192.168.10.40',
        'username'	=> 'bio',
        'password'	=> 'Sistemas2018.',
        'dbname'	=> 'asistencia_traspaso',
        'pdoType'       => 'dblib',
        'dialectClass'	=> 'Twm\Db\Dialect\Mssql'
    ),
    'application' => array(
        'controllersDir' => __DIR__ . '/../../app/controllers/',
        'modelsDir'      => __DIR__ . '/../../app/models/',
        'viewsDir'       => __DIR__ . '/../../app/views/',
        'pluginsDir'     => __DIR__ . '/../../app/plugins/',
        'libraryDir'     => __DIR__ . '/../../app/library/',
        'cacheDir'       => __DIR__ . '/../../app/cache/',
        'baseUri'        => '   ',
        // Cargar librería fpdf
        'fpdf'        => __DIR__ . '/../../app/libs/fpdf/',
        // Cargar librería PHP Mailer
        'phpmailer'        => __DIR__ . '/../../app/libs/phpmailer/',
        'qrlib'        => __DIR__ . '/../../app/libs/qrlib/',
        //'t_pdf'        => __DIR__ . '/../../app/libs/fpdf/',
        'baseUri'        => '',
    )
));
