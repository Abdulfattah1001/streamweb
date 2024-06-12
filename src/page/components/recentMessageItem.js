import { Avatar, ListItem } from "@mui/material";

export default function RecentMessageItem(props){
    const message = props.message;

    return (
        <ListItem>
            <div>
                <Avatar />
                <div>
                    <span>{message.author_name}</span>
                    <span>{message.content}</span>
                </div>

                <span>{message.date}</span>
            </div>
        </ListItem>
    )
}