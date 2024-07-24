/**
 * @param {string} uid 
 * @returns {Promise<[Post]>}
 */
export async function fetchData(uid){
    const response = await fetch("https://streamsync.org/api/post?uid="+uid);
    
    const json = await response.json();

    return json["payload"];
}

/**
 * @param {string} uid 
 * @param {string} username
 */
export async function getPost(username,uid){
    try {
        const response = await fetch(`https://streamsync.org/api/post/${username}/post/${uid}`);   
        const data = await response.json()
        return data['payload']
    } catch (error) {
        window.alert(`Error occured ${error.message}`)
    }
}