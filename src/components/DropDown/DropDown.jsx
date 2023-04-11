import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

const DropDown = () => {

    const [isOpen, setIsOpen] = useState(false);
    // const toggleDropdown= ()=

    return (
        <div>
            <div className="relative inline-block text-left">
                <div>
                    <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex w-full justify-center gap-x-1.5 font-bold rounded-md bg-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Filter By
                        {
                            !isOpen ? <ChevronUpIcon className="h-5 w-5 text-black" />
                                : <ChevronDownIcon className="h-5 w-5 text-black" />
                        }

                        <span></span>
                    </button>
                </div>

                {
                    isOpen &&
                    <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                        <div className="py-1" role="none">

                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Account settings</a>
                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Support</a>
                        </div>
                    </div>
                }
            </div>

        </div>
    );
};

export default DropDown;