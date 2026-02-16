"use client";

import { Button, Input, Form } from "antd";

const { TextArea } = Input;

export default function CreateArticlePage() {
    return (
        <div className="p-6 md:p-8 max-w-2xl mx-auto animate-fade-in">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2 gradient-text">
                    Create Article
                </h1>
                <p className="text-neutral-500">Share your thoughts with the world</p>
            </div>

            <div className="glass rounded-2xl p-6 md:p-8">
                <Form layout="vertical">
                    <Form.Item
                        label={<span className="text-neutral-300">Title</span>}
                        name="title"
                    >
                        <Input
                            placeholder="Enter a captivating title..."
                            size="large"
                            className="!bg-neutral-800/50 !border-neutral-700 !text-neutral-200"
                        />
                    </Form.Item>
                    <Form.Item
                        label={<span className="text-neutral-300">Content</span>}
                        name="body"
                    >
                        <TextArea
                            rows={8}
                            placeholder="Write your article content..."
                            className="!bg-neutral-800/50 !border-neutral-700 !text-neutral-200"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            size="large"
                            className="!bg-gradient-to-r !from-primary-600 !to-secondary-600 !border-0 hover:!opacity-90 !h-11"
                        >
                            Publish Article
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
