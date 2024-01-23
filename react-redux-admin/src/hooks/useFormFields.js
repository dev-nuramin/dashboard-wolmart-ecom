import { useState } from "react";


const useFormFields = (initState) => {
     // get input value from form data
  const [input, setInput] = useState(initState);

  // handle state changes
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    
  }
  const clearForms = () => {
    setInput(initState)
  }
  return {input, handleInputChange, clearForms}
}

export default useFormFields