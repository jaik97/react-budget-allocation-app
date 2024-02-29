import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyChange = (props) => {
    const { dispatch, currency} = useContext(AppContext);
    const [setCurr] = useState(currency);


    return (   
        <div className="dropdown">
            <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Currency
            <select className="custom-select" id="inputGroupSelect03" onChange={(event) => {setCurr(event.target.value); dispatch({
                type: 'CHG_CURRENCY',
                payload: event.target.value,
            })}}>
                        <option value="$" name="Dollar">$ Dollar</option>
                        <option value="£" name="Pound">£ Pound</option>
                        <option value="€" name="Euro">€ Euro</option>
                        <option value="₹" name="Rupee">₹ Rupee</option>
                    </select>
            </button>
        </div>
    );
};

export default CurrencyChange;