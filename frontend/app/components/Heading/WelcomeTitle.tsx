"use client";

export default function WelcomeTitle({ name }: { name: string }) {
  return (
    <div className="flex flex-col justify-center items-center text-black">
      <span>Hello {name},</span>
      <h1 className="text-3xl font-normal">How Can I Help?</h1>
    </div>
  );
}
