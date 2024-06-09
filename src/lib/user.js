export default class User{
    /**
     * @param {Object} user 
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


    name;

    about;

    fisrtname;

    lastname;

    foreground;
    
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