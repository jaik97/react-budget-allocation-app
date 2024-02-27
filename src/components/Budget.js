import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
// import { useDispatch } from 'react-redux';

const Budget = () => {
    // const dispatch = useDispatch();
    const { budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        })
    }
    // const handleBudgetChange = (event) => {
    //     setNewBudget(event.target.value);
    // }

    return (
    <div className='alert alert-secondary'>
        <span>Budget: £</span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
    </div>
    );
};
export default Budget;