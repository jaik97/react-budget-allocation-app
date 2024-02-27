
import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const {dispatch, remaining} = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {

        if(cost > remaining){
            alert("The value cannot exceed remaining funds £"+remaining);
            setCost("");
            return;
        }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };

        if(action === "Reduce"){
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE,
                payload: expense,
            });
        }
    };
    
    return(
        <div>
            <div className='row'>
                <div className='input-group mb-3' style={{marginLeft: '2rem'}}>
                    <div className="input-group-prepend">
                        
                    </div>
                </div>

            </div>
        </div>
    )
}