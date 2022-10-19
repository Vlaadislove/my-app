import React from 'react';
import s from './../Dialogs.module.css'

function Massage(props) {
    return (
        <div className={s.massage}>{props.massage}</div>
    )
}

export default Massage