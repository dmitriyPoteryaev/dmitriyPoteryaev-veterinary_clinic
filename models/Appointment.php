<?php
namespace app\models;

use yii\db\ActiveRecord;

class Appointment extends ActiveRecord
{
    public static function tableName() { return '{{%appointment}}'; }

    public function rules()
    {
        return [
            [['last_name','first_name','phone','pet_name'], 'required'],
            [['message'], 'string'],
            [['preferred_date'], 'date', 'format' => 'php:Y-m-d'],
            [['consent'], 'boolean'],
            [['email'], 'email'],
            [['last_name','first_name','pet_name'], 'string', 'max' => 100],
            [['phone'], 'match', 'pattern' => '/^\+?\d[\d\s\-\(\)]{6,}$/'],
        ];
    }
}
