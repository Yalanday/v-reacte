import styled from "styled-components";
import { Link } from 'react-router-dom';
import Button from "../../ui/button/button";
import { Textarea } from "../../ui/textarea/textarea";


export const DialogsWrapper = styled.div`
    position: relative;

    display: grid;
    grid-template-areas: 
        "dialogs messages"
        "dialogs input-wrapper"
    ;
    grid-template-rows: 1fr 8%;
    grid-template-columns: 25% 1fr;
    height: 100%;
    gap: 5px;
`;

export const DialogsList = styled.ul`
    grid-area: dialogs;
    margin: 0;
    padding: 0 0 0 10px;
    list-style: none;
    border: 1px solid #ffffff;
    border-radius: 5px 0 0 5px;
`;

export const DialogsLink = styled(Link)`
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(192,192,192, 0.2);
    gap: 10px;
    padding: 15px 0;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: rgba(192,192,192, 0.05);
    }
    
`;

export const DialogsItem = styled.li`
    font-size: 18px ;
`;

export const DialogsItemIcons = styled.img`
    width: 50px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid rgba(192,192,192, 0.2);
    box-sizing: border-box;
    background-image: url("https://www.shareicon.net/download/2016/12/19/863661_media_512x512.png");
    background-size: cover;
    background-position: center;
`;

export const MessagesWrapper = styled.div`
    grid-area: messages;
    display: flex;
    align-items: end;
`;

export const MessagesList = styled.ul`
    margin: auto auto 30px 85px;
    padding: 0;
    padding-right: 50px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const MessagesItem = styled.li`
    display: flex;
    align-items: start;
    gap: 10px;
    color: aqua;
    word-wrap: break-word;    
`;

export const MessageItemImg = styled.img`
    width: 40px;
    height: 45px;
    flex-shrink: 0;
    border-radius: 50%;
    border: 1px solid rgba(192,192,192, 0.2);
    box-sizing: border-box;
    background-image: url("https://www.shareicon.net/download/2016/12/19/863661_media_512x512.png");
    background-size: cover;
    background-position: center;
`;

export const TimeMessage = styled.time`
display: block;
font-size: 11px;
opacity: 0.5;
`;

export const TextMessage = styled.span`
font-size: inherit;
`;

export const InputButtonWrapper = styled.div`
    grid-area: input-wrapper;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(192,192,192, 0.2);
`;

export const InputFile = styled.div`
    margin: 0 auto;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-image: url("/src/img/icons/skrepka.png");
    background-size: cover;

`;

export const MessageInputField = styled(Textarea)`
    width: 85%;
    height: 80%;
    font-size: 18px;
    resize: none;
`;

export const MessagesubmitButton = styled(Button)`
    margin: 0 auto;
`;

export const Notification = styled.div`
position: absolute;
top: 50%;
left: 50%;
text-align: center;
display: ${(props) => props.$isLoading};
`;
