/**
 * 
 * @param {string} uid 
 * @returns {Promise<[Post]>}
 */
export default async function fetchData(uid){
    const response = await fetch("https://stream-serve.onrender.com/api/posts?user="+uid);
    
    const json = await response.json();
    console.log(json);

    return json;
}