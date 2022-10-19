import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Massage from "./Message/Massage";





//                                  Прошлая версия
//     <DialogItem name={dialogs[0].name} id={dialogs[0].id}/>,
//     <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>,
//     <DialogItem name={dialogs[2].name} id={dialogs[2].id}/>,
//     <DialogItem name={dialogs[3].name} id={dialogs[3].id}/>,
// ]

const Dialogs = (props) => {

    const dialogsElement = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)
    const massageElement = props.state.massages.map( (m) => <Massage massage = {m.massage} /> )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
                                   {/*Прошлая версия*/}
                {/*<DialogItem name={dialogs[0].name} id={dialogs[0].id}/>*/}
                {/*<DialogItem name={dialogs[1].name} id={dialogs[1].id}/>*/}
                {/*<DialogItem name={dialogs[2].name} id={dialogs[2].id}/>*/}
                {/*<DialogItem name={dialogs[3].name} id={dialogs[3].id}/>*/}
            </div>
            <div className={s.massages}>
                {massageElement}
                                  {/*Прошлая версия*/}
                {/*<Massage massage = {massages[0].massage} />*/}
                {/*<Massage massage = {massages[1].massage} />*/}
                {/*<Massage massage = {massages[2].massage} />*/}
                {/*<Massage massage = {massages[3].massage} />*/}
            </div>
        </div>
    )
}

export default Dialogs