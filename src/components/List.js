import React from 'react';

import trash from './../assets/waste_bin_red.svg';
import './List.css';

let List = props => {
    return (
        <div className='Route List'>
            <h1>List</h1>
            <div className='list_box'>
                {props.list.map((item, i) => {
                    return <div className='list_item' key={item}>
                        <img src={trash} alt='delete' onClick={_ => props.remove(i)} />
                        <p>{item}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default List;