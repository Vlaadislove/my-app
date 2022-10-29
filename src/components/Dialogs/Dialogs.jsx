import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Massage from "./Message/Massage";
import {
  addMessageActionCreator,
  updateNewMessageChangeActionCreator
} from "../../Reduxe/dialogs-reducer";

//                                  Прошлая версия
//     <DialogItem name={dialogs[0].name} id={dialogs[0].id}/>,
//     <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>,
//     <DialogItem name={dialogs[2].name} id={dialogs[2].id}/>,
//     <DialogItem name={dialogs[3].name} id={dialogs[3].id}/>,
// ]

const Dialogs = (props) => {
  // let onKeyDown = e => {
  //     if (e.keyCode === 13) {
  //         addMassage()
  //     }
  // }

  const addMassage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  const onMassageChange = (e) => {
    // let text = newMassageElement.current.value;
    let text = e.target.value;
    let action = updateNewMessageChangeActionCreator(text);
    props.store.dispatch(action);
  };

  // let newMassageElement = React.createRef();

  const state = props.store.getState().dialogPage;

  const dialogsElement = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  const massageElement = state.massages.map((m) => (
    <Massage massage={m.massage} />
  ));
  const valueNewMessageText = state.newMessageText;

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

        <div className={s.areaMassage}>
          <textarea
            placeholder="Enter your massage"
            cols="30"
            rows="4"
            // ref={newMassageElement}
            value={valueNewMessageText}
            onChange={onMassageChange}
            // onKeyDown={onKeyDown}
          />
        </div>
        <div>
          <button onClick={addMassage}>Add Massage</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
