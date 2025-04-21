import LoginForm from "@/components/auth/LoginForm";
import React from "react";

const Page = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-tl from-pink-500 via-purple-500 to-indigo-500">
      <LoginForm />
    </div>
  );
};

export default Page;
