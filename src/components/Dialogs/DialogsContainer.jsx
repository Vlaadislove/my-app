import React from "react";
import {addMessageActionCreator, updateNewMessageChangeActionCreator} from "../../Reduxe/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainerdd = (props) => {
//
//   const addMassage = () => {
//     props.store.dispatch(addMessageActionCreator());
//   };
//
//   const onMassageChange = (text) => {
//     // let text = newMassageElement.current.value;
//     let action = updateNewMessageChangeActionCreator(text);
//     props.store.dispatch(action);
//   };
//
//   // let newMassageElement = React.createRef();
//
//   const state = props.store.getState().dialogPage;
//
//   return (
//     <div>
//       <Dialogs updateNewMessageChange={onMassageChange}
//                addMassage={addMassage}
//                dialogs={state.dialogs}
//                massages={state.massages}
//                newMessageText={state.newMessageText}
//           />
//     </div>
//   );
// };

const mapStateToProps = (state) => {
  debugger
  return {
    dialogPage: state.dialogPage
    // dialogs: state.dialogPage.dialogs,
    // massages: state.dialogPage.massages,
    // newMessageText: state.dialogPage.newMessageText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addMassage: () => {
      dispatch(addMessageActionCreator());
    },

    updateNewMessageChange: (text) => {
      let action = updateNewMessageChangeActionCreator(text);
      dispatch(action);
    }
  }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);


export default DialogsContainer;
