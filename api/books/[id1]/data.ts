type posttype={
id:number;
name:string





};

//let posts:posttype[]=[{id:1,name:"hk"}];

let posts:posttype[]=[];
import { error } from 'console';
import React from 'react'

export const Getposts = () => posts

export const Addingposts=(post:posttype)=>{

    posts.push(post)
}
export const Deleteposts=(id:number)=>{

    posts=posts.filter((post)=>post.id !== id);
}

export const Updateposts=(id:number,name:string)=>{

    const post =posts.find((post)=>post.id===id);
    if(post){
post.name=name;

    }
    else{
        throw new Error("No such idnumber");
    }
};

export const Getbyid=(id:number)=>{
return posts.find((post)=>post.id===id)

}





let arr: any[] = [
    {
        name: 'GFG User 1',
        role: 'Developer'
    },
    {
        name: 'GFG User 2',
        role: 'Designer'
    },
    {
        name: 'GFG User 3',
        role: 'Tester'
    }
];
