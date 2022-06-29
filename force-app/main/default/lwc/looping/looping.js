import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList = ["Ford", "Audi", "Hyundai", "Honda"]

    ceoList = [
        {
            id: 1,
            company: "Google",
            name: "Sundar Pichai"
        },
        {
            id: 2,
            company: "Apple",
            name: "Tim"
        },
        {
            id: 3,
            company: "FB",
            name: "Mark"
        },
        {
            id: 4,
            company: "Amazon",
            name: "Jeff"
        }
    ]
}