import Link from "next/link";

export const LoginButton = () => {
   return (
      <Link href="/login">
         <button className="bg-gray-900 text-white px-4 py-1 rounded">
            Login
         </button>
      </Link>
   );
};
