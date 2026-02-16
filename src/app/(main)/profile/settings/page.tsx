"use client";

import { Switch } from "antd";
import { useTheme } from "@/app/ui/ThemeProvider";

export default function ProfileSettingsPage() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="p-6 md:p-8 max-w-2xl mx-auto animate-fade-in">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2 gradient-text">Settings</h1>
                <p className="text-neutral-500">Manage your preferences</p>
            </div>

            <div className="flex flex-col gap-4">
                <div className="glass rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-neutral-200 dark:text-neutral-200 mb-4">
                        Notifications
                    </h3>
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <p className="text-sm">Email notifications</p>
                            <p className="text-xs text-neutral-500">
                                Receive updates via email
                            </p>
                        </div>
                        <Switch defaultChecked />
                    </div>
                    <div className="border-t border-neutral-800/30 my-3" />
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-sm">Push notifications</p>
                            <p className="text-xs text-neutral-500">
                                Get instant push alerts
                            </p>
                        </div>
                        <Switch />
                    </div>
                </div>

                <div className="glass rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-4">Appearance</h3>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-sm">Dark mode</p>
                            <p className="text-xs text-neutral-500">
                                {theme === "dark"
                                    ? "Dark theme is active"
                                    : "Light theme is active"}
                            </p>
                        </div>
                        <Switch
                            checked={theme === "dark"}
                            onChange={toggleTheme}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
