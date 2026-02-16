"use client";

import { Card, Switch, Divider } from "antd";

export default function ProfileSettingsPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Profile Settings</h1>
            <div className="flex flex-col gap-4" style={{ maxWidth: 600 }}>
                <Card title="Notifications">
                    <div className="flex justify-between items-center mb-3">
                        <span>Email notifications</span>
                        <Switch defaultChecked />
                    </div>
                    <Divider />
                    <div className="flex justify-between items-center">
                        <span>Push notifications</span>
                        <Switch />
                    </div>
                </Card>
                <Card title="Appearance">
                    <div className="flex justify-between items-center">
                        <span>Dark mode</span>
                        <Switch defaultChecked />
                    </div>
                </Card>
            </div>
        </div>
    );
}
