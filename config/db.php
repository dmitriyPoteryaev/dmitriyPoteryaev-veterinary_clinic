<?php
return [
  'class' => yii\db\Connection::class,
  'dsn' => 'mysql:host=mysql;dbname=app;charset=utf8mb4', // <— имя контейнера MySQL и имя БД
  'username' => 'app',
  'password' => 'app',
  'charset'  => 'utf8mb4',
    'attributes' => [
    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8mb4' COLLATE 'utf8mb4_unicode_ci'"
  ],
];
