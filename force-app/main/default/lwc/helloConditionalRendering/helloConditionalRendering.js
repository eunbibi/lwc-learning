import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible = false
    name //initializing

    handleClick(){
        this.isVisible = true
    }

    changeHandler(event){
        this.name = event.target.value
    }

    get helloMethod(){
        // === I think this operator returns true/false 
        //thats correct. This one is the most strict comparison operator 
        return this.name === 'hello' //if this is true === this is "hello"
    }

    //in js, there are falsy values - they are always false!!!
    // x = 0, false, undefined, null, ""
}