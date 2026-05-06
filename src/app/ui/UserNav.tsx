'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { Button, Avatar, Dropdown, Space } from 'antd';
import { UserOutlined, LogoutOutlined, SettingOutlined, LockOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

export default function UserNav() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div
        style={{
          width: 80,
          height: 32,
          borderRadius: 8,
          background: 'rgba(148, 163, 184, 0.1)',
          animation: 'pulse 2s ease-in-out infinite',
        }}
      />
    );
  }

  if (!session?.user) {
    return (
      <Link href="/login">
        <Button
          type="primary"
          size="small"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #14b8a6)',
            border: 'none',
            borderRadius: 8,
            fontWeight: 500,
          }}
        >
          Sign In
        </Button>
      </Link>
    );
  }

  const items: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: <Link href="/profile">Profile</Link>,
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: <Link href="/profile/settings">Settings</Link>,
    },
    {
      key: 'security',
      icon: <LockOutlined />,
      label: <Link href="/profile/security">Security</Link>,
    },
    { type: 'divider' },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Sign Out',
      danger: true,
      onClick: () => signOut({ callbackUrl: '/login' }),
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomRight" trigger={['click']}>
      <Space
        style={{
          cursor: 'pointer',
          padding: '4px 8px',
          borderRadius: 8,
          transition: 'background 200ms ease',
        }}
      >
        <Avatar
          size="small"
          src={session.user.image}
          icon={!session.user.image ? <UserOutlined /> : undefined}
          style={{
            background: 'linear-gradient(135deg, #6366f1, #14b8a6)',
          }}
        />
        <span style={{ color: '#e2e8f0', fontSize: '0.875rem', fontWeight: 500 }}>
          {session.user.name || session.user.email}
        </span>
      </Space>
    </Dropdown>
  );
}
