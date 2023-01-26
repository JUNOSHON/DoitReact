import { shallowEqual } from "shallow-equal";

const obj = {name: 'juno'};
const mylist = [1,2,3, obj];
const list1 = [1,2,3,obj];
const list2 = [1,2,3, {name: 'juno'}];

mylist === list1; //false
shallowEqual(mylist,list1);
shallowEqual(list1, list2);