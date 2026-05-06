"use client";

import { useState } from "react";
import { Button, Input, Form, Alert, message } from "antd";

export default function SecurityForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form] = Form.useForm();

  const onFinish = async (values: {
    currentPassword: string;
    newPassword: string;
  }) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/password", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword: values.currentPassword,
          newPassword: values.newPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to update password");
        return;
      }

      message.success("Password updated successfully");
      form.resetFields();
    } catch {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {error && (
        <Alert
          message={error}
          type="error"
          showIcon
          closable
          className="mb-6"
          onClose={() => setError(null)}
        />
      )}

      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label={<span className="text-neutral-300">Current Password</span>}
          name="currentPassword"
          rules={[
            { required: true, message: "Please enter your current password" },
          ]}
        >
          <Input.Password
            placeholder="Enter current password"
            size="large"
            className="bg-neutral-800/50! border-neutral-700! text-neutral-200!"
          />
        </Form.Item>

        <Form.Item
          label={<span className="text-neutral-300">New Password</span>}
          name="newPassword"
          rules={[
            { required: true, message: "Please enter a new password" },
            { min: 6, message: "Password must be at least 6 characters" },
          ]}
        >
          <Input.Password
            placeholder="Enter new password"
            size="large"
            className="bg-neutral-800/50! border-neutral-700! text-neutral-200!"
          />
        </Form.Item>

        <Form.Item
          label={<span className="text-neutral-300">Confirm Password</span>}
          name="confirmPassword"
          dependencies={["newPassword"]}
          rules={[
            { required: true, message: "Please confirm your new password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match"));
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Confirm new password"
            size="large"
            className="bg-neutral-800/50! border-neutral-700! text-neutral-200!"
          />
        </Form.Item>

        <Form.Item className="mb-0 mt-2">
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={loading}
            className="bg-linear-to-r! from-primary-600! to-secondary-600! border-0! hover:opacity-90! h-11! px-8"
          >
            Update Password
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
