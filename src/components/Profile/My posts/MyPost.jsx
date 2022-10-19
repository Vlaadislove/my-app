import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';



const MyPost = (props) => {

let newPostElement = React.createRef()

let addPost = () => {
let text = newPostElement.current.value
  props.addPost(text)
  newPostElement.current.value = ''

}

  const postElement = props.post.map( p => <Post text={p.text} like={p.like} /> )

  return <div className={s.postsBlock}>
    <div>
      <h3>My post </h3>
    </div>
    <div>
      <div>
        <textarea ref = {newPostElement}/>
      </div>
      <div>
        <button onClick={addPost}> Add post</button>
      </div>
    </div>
    <div className={s.posts}>
      {postElement}
      {/*<Post text={postData[0].text} like={postData[0].like} />*/}
      {/*<Post text={postData[1].text} like = {postData[1].like} />*/}
    </div>
  </div>
}

export default MyPost