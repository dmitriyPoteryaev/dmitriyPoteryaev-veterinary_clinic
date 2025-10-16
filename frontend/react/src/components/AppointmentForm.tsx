import React, { useState } from "react";
import { Input, DatePicker, Checkbox, Button, Form, message  } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import locale from "antd/es/date-picker/locale/ru_RU";

const { TextArea } = Input;

interface FormValues {
  lastName: string;
  firstName: string;
  phone: string;
  email: string;
  petName: string;
  date: dayjs.Dayjs | null;
  message: string;
  consent: boolean;
}

const AppointmentForm: React.FC = () => {
  const [form] = Form.useForm<FormValues>();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: FormValues) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/v1/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          last_name: values.lastName,
          first_name: values.firstName,
          phone: values.phone,
          email: values.email,
          pet_name: values.petName,
          preferred_date: values.date?.format("YYYY-MM-DD"),
          message: values.message,
          consent: values.consent ? 1 : 0,
        }),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      message.success(`Заявка отправлена! ID: ${data.id}`);
      form.resetFields();
    } catch (err) {
      console.error(err);
      message.error("Ошибка при отправке данных");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", background: "#fff", padding: 32, borderRadius: 16 }}>
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>Запись на прием</h2>

      <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
        <div style={{ display: "flex", gap: 16 }}>
          <Form.Item name="lastName" rules={[{ required: true, message: "Введите фамилию" }]} style={{ flex: 1 }}>
            <Input placeholder="Иванов" />
          </Form.Item>
          <Form.Item name="firstName" rules={[{ required: true, message: "Введите имя" }]} style={{ flex: 1 }}>
            <Input placeholder="Иван" />
          </Form.Item>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          <Form.Item name="phone" rules={[{ required: true, message: "Введите телефон" }]} style={{ flex: 1 }}>
            <Input placeholder="+7 (999) 999-99-99" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ type: "email", message: "Некорректный email" }]}
            style={{ flex: 1 }}
          >
            <Input placeholder="ivaniv@ya.ru" />
          </Form.Item>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          <Form.Item name="petName" rules={[{ required: true, message: "Введите кличку питомца" }]} style={{ flex: 1 }}>
            <Input placeholder="Кузя" />
          </Form.Item>
          <Form.Item name="date" rules={[{ required: true, message: "Выберите дату" }]} style={{ flex: 1 }}>
            <DatePicker style={{ width: "100%" }} locale={locale} format="DD.MM.YYYY" />
          </Form.Item>
        </div>

        <Form.Item name="message" rules={[{ required: true, message: "Опишите проблему" }]}>
          <TextArea rows={5} placeholder="Заболел кот Кузя. Не ест 2 дня." />
        </Form.Item>

        <Form.Item
          name="consent"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error("Необходимо согласие")),
            },
          ]}
        >
          <Checkbox>
            Я ознакомился с{" "}
            <a href="#">Пользовательским соглашением</a> и{" "}
            <a href="#">Положением о конфиденциальности</a>.
          </Checkbox>
        </Form.Item>

        <Button type="primary" htmlType="submit" loading={loading} block>
          Отправить
        </Button>
      </Form>
    </div>
  );
};

export default AppointmentForm;
