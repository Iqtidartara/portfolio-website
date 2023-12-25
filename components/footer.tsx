import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-900 dark:text-gray-400 ">
      <small className="mb-2 block text-xs">
        &copy; 2023 Iqtidar Hussain. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
