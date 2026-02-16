"use client";

import { Button, Input, Form } from "antd";

export default function ProfileSecurityPage() {
    return (
        <div className="p-6 md:p-8 max-w-2xl mx-auto animate-fade-in">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2 gradient-text">Security</h1>
                <p className="text-neutral-500">Protect your account</p>
            </div>

            <div className="glass rounded-2xl p-6 md:p-8">
                <h3 className="text-lg font-semibold text-neutral-200 mb-6">
                    Change Password
                </h3>
                <Form layout="vertical">
                    <Form.Item
                        label={<span className="text-neutral-300">Current Password</span>}
                        name="currentPassword"
                    >
                        <Input.Password
                            placeholder="Enter current password"
                            size="large"
                            className="!bg-neutral-800/50 !border-neutral-700 !text-neutral-200"
                        />
                    </Form.Item>
                    <Form.Item
                        label={<span className="text-neutral-300">New Password</span>}
                        name="newPassword"
                    >
                        <Input.Password
                            placeholder="Enter new password"
                            size="large"
                            className="!bg-neutral-800/50 !border-neutral-700 !text-neutral-200"
                        />
                    </Form.Item>
                    <Form.Item
                        label={<span className="text-neutral-300">Confirm Password</span>}
                        name="confirmPassword"
                    >
                        <Input.Password
                            placeholder="Confirm new password"
                            size="large"
                            className="!bg-neutral-800/50 !border-neutral-700 !text-neutral-200"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            size="large"
                            className="!bg-gradient-to-r !from-primary-600 !to-secondary-600 !border-0 hover:!opacity-90 !h-11"
                        >
                            Update Password
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
