import PropTypes from 'prop-types';

import {
    MyPagePostItem, MyPagePostList, StyledMyPage,
    TextareaMyPage, TitleMyPage, MyPagePostButton, TimeSpan
} from "./style";
import { useRef } from 'react';
// import { updateNewPostActionCreater, addPostActionCreater } from '../../../redux/reducers/my-posts-reducer.js';

function MyPage({ myPosts, postValue, updateValuePostDispatch, addValuePostDispatch }) {
    let textareaPostElement = useRef();

    let getMyPostItems = myPosts.map(post =>
        <MyPagePostItem key={post.id}>{post.text}<TimeSpan>{post.time}</TimeSpan></MyPagePostItem>
    );

    const updateValuePost = () => {
        updateValuePostDispatch(textareaPostElement);
    };

    const addNewPost = () => {
        addValuePostDispatch();
        textareaPostElement.current.focus();
    };

    const addOfKeys = (e) => {
        if (e.keyCode == 13 && e.shiftKey) {
            e.preventDefault();
            addNewPost();
        }
    }

    return (
        <StyledMyPage>
            <TitleMyPage>Тут будет моя страница презентация</TitleMyPage>
            <MyPagePostList>
                {getMyPostItems}
            </MyPagePostList>
            <TextareaMyPage value={postValue}
            ref={textareaPostElement}
            onChange={updateValuePost}
            onKeyDown={addOfKeys}
            placeholder='Введите текст. (Отправка сообщения Shift+Enter)' />
            <MyPagePostButton click={addNewPost} />
        </StyledMyPage>
    )
}

MyPage.propTypes = {
    myPosts: PropTypes.array,
    id: PropTypes.number,
    text: PropTypes.string,
    time: PropTypes.string,
    getMyPostItems: PropTypes.func,
    addValuePostDispatch: PropTypes.func,
    postValue: PropTypes.string,
    updateValuePostDispatch: PropTypes.func
};

export default MyPage;
