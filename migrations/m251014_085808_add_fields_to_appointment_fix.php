<?php
use yii\db\Migration;

class m251014_085808_add_fields_to_appointment_fix extends Migration
{
    public function safeUp()
    {
        $this->addColumn('{{%appointment}}', 'last_name',       $this->string(100)->notNull());
        $this->addColumn('{{%appointment}}', 'first_name',      $this->string(100)->notNull());
        $this->addColumn('{{%appointment}}', 'phone',           $this->string(32)->notNull());
        $this->addColumn('{{%appointment}}', 'email',           $this->string(190));
        $this->addColumn('{{%appointment}}', 'pet_name',        $this->string(100)->notNull());
        $this->addColumn('{{%appointment}}', 'preferred_date',  $this->date());
        $this->addColumn('{{%appointment}}', 'message',         $this->text());
        $this->addColumn('{{%appointment}}', 'consent',         $this->boolean()->notNull()->defaultValue(0));
        $this->addColumn('{{%appointment}}', 'ip',              $this->string(45));
        $this->addColumn('{{%appointment}}', 'created_at',      $this->integer()->notNull());
        $this->createIndex('idx_appointment_created_at', '{{%appointment}}', 'created_at');
    }

    public function safeDown()
    {
        $this->dropIndex('idx_appointment_created_at', '{{%appointment}}');
        $this->dropColumn('{{%appointment}}', 'created_at');
        $this->dropColumn('{{%appointment}}', 'ip');
        $this->dropColumn('{{%appointment}}', 'consent');
        $this->dropColumn('{{%appointment}}', 'message');
        $this->dropColumn('{{%appointment}}', 'preferred_date');
        $this->dropColumn('{{%appointment}}', 'pet_name');
        $this->dropColumn('{{%appointment}}', 'email');
        $this->dropColumn('{{%appointment}}', 'phone');
        $this->dropColumn('{{%appointment}}', 'first_name');
        $this->dropColumn('{{%appointment}}', 'last_name');
    }
}
