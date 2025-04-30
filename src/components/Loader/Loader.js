// export default function Loader() {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
//       <div className="flex flex-col items-center">
//         <svg
//           className="h-12 w-12 animate-spin text-yellow-500"
//           fill="none"
//           viewBox="0 0 24 24"
//         >
//           <circle
//             className="opacity-25"
//             cx="12"
//             cy="12"
//             r="10"
//             stroke="currentColor"
//             strokeWidth="4"
//           ></circle>
//           <path
//             className="opacity-75"
//             fill="currentColor"
//             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//           ></path>
//         </svg>

//         {/* <p className="mt-4 text-white/80">Loading...</p> */}
//       </div>
//     </div>
//   );
// }

"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md">
      <div className="relative">
        <div className="h-16 w-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse shadow-[0_0_20px_5px_rgba(234,179,8,0.5)]" />
        <div className="absolute inset-0 rounded-full border-2 border-yellow-300/50 animate-ping" />
      </div>
    </div>
  );
}
