import {renderEntireTree} from "../render";

let state = {
        profilePage: {
        post: [
            {id: 1, text: 'Hi, im Vlad', like: ' 11'},
            {id: 2, text: 'I learn JS', like: ' 12'}

        ]
    },
    dialogPage: {
        dialogs: [
            {id: 1, name: 'Vlad'},
            {id: 2, name: 'MakVa'},
            {id: 3, name: 'Mark'},
            {id: 4, name: 'StepaPopa'}
        ],
        massages: [
            {id: 1, massage: 'Hi'},
            {id: 2, massage: 'How are you?'},
            {id: 3, massage: 'It`s fine'},
            {id: 4, massage: 'Yo'}
        ]
    }
}

// window.state=state

export let addPost = (postMassage) => {
    let newPost  = {
        id: 3,
        text: postMassage,
        like: '0'
    }

    state.profilePage.post.push(newPost)
    renderEntireTree(state)
}


export default state