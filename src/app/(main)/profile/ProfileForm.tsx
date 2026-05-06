"use client";

import { useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Avatar,
  Tag,
  Alert,
  message,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface User {
  id: number;
  name: string | null;
  email: string;
  image: string | null;
  age: number | null;
  provider: string;
  createdAt: Date;
}

export default function ProfileForm({ user }: { user: User }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { update } = useSession();
  const router = useRouter();

  const onFinish = async (values: { name: string; age?: number }) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to update profile");
        return;
      }

      message.success("Profile updated successfully");

      // Update NextAuth session with new name
      await update({ name: values.name });
      router.refresh();
    } catch {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const getProviderColor = (provider: string) => {
    switch (provider) {
      case "google":
        return "#ea4335";
      case "github":
        return "#333";
      case "credentials":
        return "#14b8a6";
      default:
        return "#6366f1";
    }
  };

  return (
    <div className="glass rounded-2xl p-6 md:p-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
        <Avatar
          size={100}
          src={user.image}
          icon={!user.image ? <UserOutlined /> : undefined}
          style={{ background: "linear-gradient(135deg, #6366f1, #14b8a6)" }}
        />
        <div className="text-center sm:text-left flex-1">
          <h2 className="text-2xl font-bold text-neutral-100 mb-1">
            {user.name || "Anonymous User"}
          </h2>
          <p className="text-neutral-400 mb-3">{user.email}</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <Tag
              color={getProviderColor(user.provider)}
              className="capitalize border-0"
            >
              {user.provider}
            </Tag>
            <span className="text-xs text-neutral-500">
              Member since {new Date(user.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>

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

      <Form
        layout="vertical"
        initialValues={{ name: user.name, age: user.age }}
        onFinish={onFinish}
        size="large"
      >
        <Form.Item
          label={<span className="text-neutral-300">Display Name</span>}
          name="name"
          rules={[
            { required: true, message: "Please enter your name" },
            { min: 2, message: "Name must be at least 2 characters" },
          ]}
        >
          <Input className="bg-neutral-800/50 border-neutral-700! text-neutral-200!" />
        </Form.Item>

        <Form.Item
          label={<span className="text-neutral-300">Age</span>}
          name="age"
          rules={[{ type: "number", min: 1, max: 120, message: "Invalid age" }]}
        >
          <InputNumber
            className="bg-neutral-800/50! border-neutral-700! text-neutral-200! w-full"
            placeholder="Optional"
          />
        </Form.Item>

        <Form.Item className="mt-8 mb-0">
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="bg-linear-to-r from-primary-600! to-secondary-600! border-0! hover:opacity-90! h-11! px-8"
          >
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
