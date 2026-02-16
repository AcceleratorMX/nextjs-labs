"use client";

import { Button, Input, Form } from "antd";

const { TextArea } = Input;

export default function CreateArticlePage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Create Article</h1>
            <Form layout="vertical" style={{ maxWidth: 600 }}>
                <Form.Item label="Title" name="title">
                    <Input placeholder="Enter article title" />
                </Form.Item>
                <Form.Item label="Content" name="body">
                    <TextArea rows={6} placeholder="Write your article content..." />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Publish Article</Button>
                </Form.Item>
            </Form>
        </div>
    );
}
