import Link from "next/link";

export const GuestButton = () => {
   return (
      <Link href="/lobby">
         <button className="bg-gray-900 text-white px-4 py-1 rounded">
            Play as Guest
         </button>
      </Link>
   );
};
