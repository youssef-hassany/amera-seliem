import React from "react";
import SignupForm from "@/components/auth/SignUpForm";

const Page = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-tl from-pink-500 via-purple-500 to-indigo-500">
      <SignupForm />
    </div>
  );
};

export default Page;
