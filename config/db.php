<?php
return [
    'class' => 'yii\db\Connection',
    'dsn' => 'mysql:host=my-mysql;dbname=app;charset=utf8mb4',
    'username' => 'app',
    'password' => 'app',
    'charset' => 'utf8mb4',
    'attributes' => [
        PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8mb4' COLLATE 'utf8mb4_unicode_ci'"
    ],
];

