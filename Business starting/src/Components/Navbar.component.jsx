// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='w-full h-15 flex justify-between items-center bg-gray-800'>
//       <div className='w-[20%] flex justify-center items-center text-4xl font-extrabold'>
//         <h2>Web Name</h2>
//       </div>
//       <div className='w-[50%] flex justify-evenly items-center text-lg font-medium text-orange-400'>
//         <h3 className='cursor-pointer'>Home</h3>
//         <h3 className='cursor-pointer'>Service</h3>
//         <h3 className='cursor-pointer'>Feedback</h3>
//         <h3 className='cursor-pointer'>Portfolio</h3>
//         <h3 className='cursor-pointer'>Tool kit</h3>
//       </div>
//     </div>
//   )
// }

// export default Navbar
// --------------------------------------------------------------------------------------------------------------------
// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="w-full h-16 px-8 flex items-center justify-between 
//       bg-slate-900 text-white shadow-lg">

//       {/* Logo / Brand */}
//       <div className="text-3xl font-extrabold tracking-wide">
//         <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 
//           bg-clip-text text-transparent">
//           WebName
//         </span>
//       </div>

//       {/* Navigation Links */}
//       <div className="hidden md:flex items-center gap-10 
//         text-gray-300 text-lg font-medium">

//         {["Home", "Services", "Feedback", "Portfolio", "Toolkit"].map(
//           (item, index) => (
//             <span
//               key={index}
//               className="relative cursor-pointer transition duration-300 
//               hover:text-white after:content-[''] after:absolute 
//               after:w-0 after:h-[2px] after:bg-indigo-400 
//               after:left-0 after:-bottom-1 after:transition-all 
//               after:duration-300 hover:after:w-full"
//             >
//               {item}
//             </span>
//           )
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// --------------------------------------------------------------------------------------------------------------
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "Services", "Feedback", "Portfolio", "Toolkit"];

  return (
    <nav className="w-full bg-slate-900 text-white shadow-lg fixed top-0 z-50">
      <div className="h-16 px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl md:text-3xl font-extrabold tracking-wide">
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            WebName
          </span>
        </div>

        {/* Desktop & Tablet Menu */}
        <div className="hidden md:flex items-center gap-10 text-gray-300 text-lg font-medium">
          {menuItems.map((item, index) => (
            <span
              key={index}
              className="relative cursor-pointer transition duration-300 
              hover:text-white after:content-[''] after:absolute after:w-0 
              after:h-[2px] after:bg-indigo-400 after:left-0 after:-bottom-1 
              after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-slate-800 transition-all duration-300 overflow-hidden
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col items-center gap-6 py-6 text-lg text-gray-300 font-medium">
          {menuItems.map((item, index) => (
            <span
              key={index}
              className="cursor-pointer hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
