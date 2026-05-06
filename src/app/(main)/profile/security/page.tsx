import { auth } from "../../../../../auth";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import SecurityForm from "./SecurityForm";
import { Alert } from "antd";

export default async function ProfileSecurityPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: parseInt(session.user.id) },
    select: { provider: true },
  });

  if (!user) {
    redirect("/login");
  }

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

        {user.provider !== "credentials" ? (
          <Alert
            message="Password change unavailable"
            description={`You signed in using a third-party provider (${user.provider}). Password changes are managed through that provider.`}
            type="info"
            showIcon
            className="bg-neutral-800/50 border-neutral-700 text-neutral-300"
          />
        ) : (
          <SecurityForm />
        )}
      </div>
    </div>
  );
}
