<?php
use yii\db\Migration;

class m251015_091913_create_appointment_full extends Migration
{
    public function safeUp()
    {
        $this->createTable('{{%appointment}}', [
            'id'             => $this->primaryKey(),
            'last_name'      => $this->string(100)->notNull(),
            'first_name'     => $this->string(100)->notNull(),
            'phone'          => $this->string(32)->notNull(),
            'email'          => $this->string(190),
            'pet_name'       => $this->string(100)->notNull(),
            'preferred_date' => $this->date(),
            'message'        => $this->text(),
            'consent'        => $this->boolean()->notNull()->defaultValue(0),
            'ip'             => $this->string(45),
            'created_at'     => $this->integer()->notNull(),
        ]);
        $this->createIndex('idx_appointment_created_at', '{{%appointment}}', 'created_at');
    }

    public function safeDown()
    {
        $this->dropIndex('idx_appointment_created_at', '{{%appointment}}');
        $this->dropTable('{{%appointment}}');
    }
}
