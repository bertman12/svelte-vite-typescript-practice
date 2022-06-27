import { derived, writable } from "svelte/store";
    // import {Store} from 'svelte'
export const adminNames = writable({name: 'Mr Admin'});

const derivedStore = derived(adminNames, function set(adminNames){
    adminNames = { name:'New Admin Name'}
});


