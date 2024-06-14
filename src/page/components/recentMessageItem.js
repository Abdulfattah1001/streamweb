import { Avatar, ListItem } from "@mui/material";

/**
 * @param {object} props 
 * @returns {React.Component}
 */
export default function RecentMessageItem(props){
    /**
     * @type {Message}
     */
    const message = props.message;

    return (
        <div>
            <ListItem>
                <div>
                    <Avatar />
                    <div >
                        <span>Abdulfattah</span>
                        <span>last message</span>
                    </div>

                    <span>2024-06-12</span>
                </div>
            </ListItem>
        </div>
    )
}