
import React, { useEffect, useRef, useState } from 'react'

const useDropdownControlHooks = () => {
    const [isOpen, setIsOpen] = useState(false);

    // use reference
    const dropDownRef = useRef();

    const handleClickOutSide = (e) => {
      
      if(dropDownRef.current && !dropDownRef.current.contains(e.target)){
        setIsOpen(false)
      }
    }
  

    //menu or modal handler
    const toogleMenu = () => {
        setIsOpen(!isOpen)
    }

   // use effect for menu hide cliking by outside
    useEffect(() => {
     document.addEventListener("click", handleClickOutSide)

     return () => {
      document.removeEventListener("click", handleClickOutSide)
     }
    },[])

  return {isOpen, toogleMenu, dropDownRef}
}

export default useDropdownControlHooks;