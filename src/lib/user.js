export default class User{
    /**
     * @param {object} user 
     */
     
    constructor(user){
        if(user!=null){
            this.name = user.firstname+" "+user.lastname;
        this.email = user.email;
        this.about = user.about;
        this.fisrtname = user.firstname;
        this.id= user.id;
        this.foreground = user.foreground ? user.foreground : '1.jpg';
        }
    }


    /**
     * @type {string}
     */
    name;

    /**
     * @type {string}
     */
    about;

    /**
     * @type {string}
     */
    fisrtname;

    /**
     * @type {string}
     */
    lastname;

    /**
     * @type {string}
     */
    foreground;
    
    /**
     * @type {string}
     */
    id;

    getNames = ()=>{
        return this.name;
    }

    getEmail = ()=> this.email;
    getAbout = ()=> this.about;
    getFirstName = ()=> this.firstname;
    getLastName = ()=> this.lastname;
    getId = () => this.id;
    getForeground =() => this.foreground;
}