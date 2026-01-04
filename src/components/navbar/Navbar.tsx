import { type JSX } from 'react';



export function Navbar(): JSX.Element {
  return (
    <div className='w-full flex justify-end h-16'>      
    <nav className="bg-red-900 text-white rounded-lg p-4 mt-2 w-80 flex justify-around">      
      <ul className="flex  space-x-15">
        <li><a className='relative inline-block
         after:absolute after:left-0 after:-bottom-1
         after:h-0.5 after:w-full after:bg-current
         after:scale-x-0 after:origin-left
         after:transition-transform after:duration-300 after:ease-out
         hover:after:scale-x-100' href="/">Home</a></li>
        
      </ul>
      
    </nav>
    </div>
  );
}