<?php

namespace app\models;

use yii\db\ActiveRecord;

class Pet extends ActiveRecord
{
    public static function tableName(): string
    {
        return 'pets'; // имя твоей таблицы
    }
}
