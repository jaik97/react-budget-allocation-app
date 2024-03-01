import React, {useState, useContext} from 'react';
import { AppContext } from '../context/AppContext';


// const ChangeCurrency = () => {
//     const {dispatch} = useContext(AppContext);
//     const [selectedCurrency, setSelectedCurrency] = useState('£');

//     const handleChange = (event) => {
//         setSelectedCurrency(event.target.value);
//         dispatch({type: 'HG_CURRENCY', payload: event.target.value});
//     };

//     return(
//         <div className='alert alert-secondary'>
//             <select 
//                 value={selectedCurrency}
//                 onChange={handleChange}
//                 style={{backgroundColor: 'greeen', color: 'black'}}
//             >
//                 <option value="$">$ Dollar</option>
//                 <option value="£">£ Pound</option>
//                 <option value="€">€ Euro</option>
//                 <option value="₹">₹ Rupee</option>
//             </select>
//         </div>
//     );

// };

// export default ChangeCurrency;

const ChangeCurrency = () => {
    const store = useContext(AppContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState('£ Pound');
  
    const handleToggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  
    const handleSelectCurrency = (currency) => {
      setSelectedCurrency(currency);
      setShowDropdown(false);
      // Dispatch action to update currency value in Redux store
      store.dispatch({ type: 'UPDATE_CURRENCY', payload: currency });
    };
  
    return (
        <div className="alert alert-success" style={{ height: '60px'}} onClick={handleToggleDropdown}>
          <p>Currency {selectedCurrency}</p>
          {showDropdown && (
            <div>
              <p onClick={() => handleSelectCurrency('$ Dollar')}>$ Dollar</p>
              <p onClick={() => handleSelectCurrency('£ Pound')}>£ Pound</p>
              <p onClick={() => handleSelectCurrency('€ Euro')}>€ Euro</p>
              <p onClick={() => handleSelectCurrency('₹ Rupee')}>₹ Rupee</p>
            </div>
          )}
        </div>
    );
  }
  
  export default ChangeCurrency;