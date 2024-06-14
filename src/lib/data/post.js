/**
 * @class
 * @constructor
 * @public
 */
class Post{
    /**
     * @constructor
     * @param {object} post 
     * @param {string} author_name
     */
    constructor(post){
        /**
         * @type {string} author_name
         * @public
         */
        this.author_name = post.author_name;
        this.content = post.content;
        this.like = post.likes;
        this.url_to_media = post.url_to_media;
        this.like_counter = post.like_counter;
    }
    /**
     * @type {string}
     */
    author_name;

    /**
     * @type {string}
     */
    author_image
    /**
     * @type {string}
     */

    content

    /**
     * @type {string}
     */
    url_to_media
    /**
     * @type {int}
     */

    like_counter
    /**
     * @type {int}
     */
    comment_counter

    /**
     * @type {Boolean}
     */
    like
}