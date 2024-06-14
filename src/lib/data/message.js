/**
 * @class
 * @public
 */
class Message{
    /**
     * @param {object} message 
     * @public
     */
    constructor(message){
        this.content = message.content;
        this.date = message.date;
        this.username = message.username;
        this.author_name = "Abdulfattah"
    }

    /**
     * @type {string}
     */
    content;
    /**
     * @type {string}
     */
    date;
    /**
     * @type {string}
     */
    username;
    /**
     * @type {string}
     */
    author_name;
    /**
     * @type {string}
     */
}