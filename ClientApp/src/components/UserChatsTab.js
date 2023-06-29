import { Fragment, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { chatFetchAllStart } from '../store/chat/chat.action';
import { selectChatItems } from '../store/chat/chat.selector';
import { getUserChats } from '../utils/api/chat.api';

const UserChatsTab = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const chats = useSelector(selectChatItems);
    const { id } = useParams();
    
    useEffect(() => {
        getUserChats(id)
        .then((response) => dispatch(chatFetchAllStart(response.data)));
    }, [])

    return (
        <Fragment>
            {chats?.length > 0 ? chats?.map(({ chatId, title }) => (
                <Card key={chatId} style={{ color: 'white', textAlign: 'center', marginBottom: '1rem' }} className="bg-dark">
                    <Card.Body >
                        <Card.Title style={{ cursor: 'pointer' }} id={chatId} onClick={(event) => navigate(`/chat/${event.target.id}`)} >{title}</Card.Title>
                    </Card.Body>
                </Card>
            )) : (
                <Card style={{ color: 'white', textAlign: 'center' }}className="bg-dark">
                    <Card.Title>"Stay tuned. Currently no chats..."</Card.Title>
                </Card>
            )}
        </Fragment>
    );
}

export default UserChatsTab;