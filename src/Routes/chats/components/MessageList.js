import propTypes  from "prop-types";
import { Message } from './Message';
import Box from '@mui/material/Box';

export const MessageList = (props) => {
    return (
        <Box
        sx={{bgcolor: '#DCDCDC'}}
        >
            {props.messageList.map((item)=> (
                <Message key={item.id} {...item}/>
            ))}
        </Box>
    );
};


MessageList.propTypes = {
    MessageList: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string,
            text: propTypes.string,
            author: propTypes.string
        })
    )
};

MessageList.defaultProps = {
    MessageList : []
};