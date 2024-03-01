import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';


const ChangeCurrency = () => {
    const {currency, dispatch} = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({type: 'CHG_CURRENCY', payload: event.target.value});
    };

    return (
        <select className="alert alert-success" value={currency} onChange={handleCurrencyChange}>
            <option value="$">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Rupee</option>
        </select>

    );
};

export default ChangeCurrency;











// import React, {useState, useContext} from 'react';
// import { AppContext } from '../context/AppContext';


// // const ChangeCurrency = () => {
// //     const {dispatch} = useContext(AppContext);
// //     const [selectedCurrency, setSelectedCurrency] = useState('£');

// //     const handleChange = (event) => {
// //         setSelectedCurrency(event.target.value);
// //         dispatch({type: 'HG_CURRENCY', payload: event.target.value});
// //     };

// //     return(
// //         <div className='alert alert-secondary'>
// //             <select 
// //                 value={selectedCurrency}
// //                 onChange={handleChange}
// //                 style={{backgroundColor: 'greeen', color: 'black'}}
// //             >
// //                 <option value="$">$ Dollar</option>
// //                 <option value="£">£ Pound</option>
// //                 <option value="€">€ Euro</option>
// //                 <option value="₹">₹ Rupee</option>
// //             </select>
// //         </div>
// //     );

// // };

// // export default ChangeCurrency;

// const ChangeCurrency = () => {
//     const {dispatch, currency} = useContext(AppContext);
//     const [showDropdown, setShowDropdown] = useState(false);
//     // const [setSelectedCurrency] = useState('£ Pound');
  
//     const handleToggleDropdown = () => {
//       setShowDropdown(!showDropdown);
//     };
  
//     const handleSelectCurrency = (currency) => {
//       setShowDropdown(false);
//       // Dispatch action to update currency value in Redux store
//       dispatch({ type: 'UPDATE_CURRENCY', payload: currency });
//     };
  
//     return (
//         <div className="alert alert-success" style={{ height: '60px'}} onClick={handleToggleDropdown}>
//           <p>Currency {currency}</p>
//           {showDropdown && (
//             <div>
//               <p className="alert alert-success" style={{ height: '10px'}} onClick={() => handleSelectCurrency('$')}>$ Dollar</p>
//               <p className="alert alert-success" style={{ height: '10px'}} onClick={() => handleSelectCurrency('£')}>£ Pound</p>
//               <p className="alert alert-success" style={{ height: '10px'}} onClick={() => handleSelectCurrency('€')}>€ Euro</p>
//               <p className="alert alert-success" style={{ height: '10px'}} onClick={() => handleSelectCurrency('₹')}>₹ Rupee</p>
//             </div>
//           )}
//         </div>
//     );
//   }
  
//   export default ChangeCurrency;