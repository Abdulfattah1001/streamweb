export default class Post{

    /**
     * @param {object} post 
     */
    constructor(post){
        if(post!=undefined){
            this.authorID = post["author_id"];
            this.authorName = post["name"];
            this.authorUserName = post["username"];
            this.date = post["date"];
            this.likes = post["likes"]
            this.likeCounter = post["like_counter"]
        }
    }

    /**
     * @type {string}
     */
    authorID
    
    /**
     * @type {string}
     */
    authorUserName;

    /**
     * @type {string}
     */
    authorName;

    /**
     * @type {string}
     */
    date;

    /**
     * @type {string}
     */
    content;

    /**
     * @type {Boolean}
     */
    likes;

    /**
     * @type {number}
     */
    likeCounter;

    /**
     * @type {string}
     */
    comments;

    /**
     * @type {number}
     */
    commentCounter;

}