"use client";

import { Card, Button, Input, Form } from "antd";

export default function ProfileSecurityPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Profile Security</h1>
            <div className="flex flex-col gap-4" style={{ maxWidth: 600 }}>
                <Card title="Change Password">
                    <Form layout="vertical">
                        <Form.Item label="Current Password" name="currentPassword">
                            <Input.Password placeholder="Enter current password" />
                        </Form.Item>
                        <Form.Item label="New Password" name="newPassword">
                            <Input.Password placeholder="Enter new password" />
                        </Form.Item>
                        <Form.Item label="Confirm Password" name="confirmPassword">
                            <Input.Password placeholder="Confirm new password" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary">Update Password</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </div>
    );
}
