import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    /*data binding example*/
    //1. property
    /*
    name //undefined
    age=30
    fullname  = "salesforce Canada"
    showData = false

    //object  
    details={
        name:"sweety",
        place:"toronto"
    }

    //array
    userList =["a", "b", "C"]
    */

    //2. method
    /*
    getName(){
        //perform my logic

    }*/

   /*
    fullname = "Zero to Hero"
    title = "aura"
    changeHandler(event){
        this.title = event.target.value
    }*/

    /*track binding example*/
    
    @track address={
        city: 'Toronto',
        number: 9704,
        country: 'Canada'
    }

    trackHandler(event){
       this.address.city = event.target.value
       // this.address = {...this.address, "city":event.target.value}
    }

    /* getter example */
    users = ["Anna", "Jenn"]

    get firstUser(){ //getter method
        return this.users[0]
    }

    num1=10
    num2=20

    get multiply(){
        return this.num1 * this.num2 
    }

    
}