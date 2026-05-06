import { auth } from '../../../../auth';
import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';
import ProfileForm from './ProfileForm';

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect('/login');
  }

  const user = await prisma.user.findUnique({
    where: { id: parseInt(session.user.id) },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      age: true,
      provider: true,
      createdAt: true,
    },
  });

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="p-6 md:p-8 max-w-2xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 gradient-text">Profile</h1>
        <p className="text-neutral-500">Manage your personal information</p>
      </div>
      <ProfileForm user={user} />
    </div>
  );
}
