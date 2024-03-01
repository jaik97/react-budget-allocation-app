import React, { useContext } from 'react';
import { TiDelete, TiMinus, TiPlus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
<<<<<<< HEAD
    const { currency, dispatch } = useContext(AppContext);
=======
    const {currency, dispatch } = useContext(AppContext);
>>>>>>> a2ff0e81527ea8cae42f1f11b3da44e6e5100bb4

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }
    
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
<<<<<<< HEAD
        <td><TiPlus size='1.5em' style={{color: 'white', background: 'green', borderRadius: '50%'}} onClick={event=> increaseAllocation(props.name)}></TiPlus></td>
        <td><TiMinus size='1.5em' style={{color: 'white', background: 'red', borderRadius: '50%'}} onClick={event=> decreaseAllocation(props.name)}></TiMinus></td>
=======
        <td><button onClick={event=> increaseAllocation(props.name)}>+</button></td>
>>>>>>> a2ff0e81527ea8cae42f1f11b3da44e6e5100bb4
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;