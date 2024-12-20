import { error } from "console";
import { NextRequest,NextResponse } from "next/server";
import { cache } from "react";
import { Addingposts, Getposts } from "@/app/data";

export function GET(request:NextRequest){
    const url=request.nextUrl;
    const name=url.searchParams.get("name");
    const age=url.searchParams.get("age");
    const query=url.searchParams.get("name");

try{
const posts=Getposts();
return NextResponse.json({message:"blogfolder_ok",posts},{status:200})

}catch(err){
return NextResponse.json({message:"Error",err},
   {status:500});
}

/*
    if(query){
        return new NextResponse("hello brother");

    }
    if(age=="22"){
        return new NextResponse('Hello brother');

    }
        */
console.log(" books only");
    return NextResponse.json({url,name,age,query})
}


export async function POST(request:NextRequest){

   // const body=await request.json();
   const {id,name}=await request.json();
   //console.log("Post api")
   try{
    //const post={id,name,date:new Date(),id1:Date.now().toString()};
       const post={id,name};
    Addingposts(post)
    return NextResponse.json({message:"blogfolder_okpost",post},{status:201})
    // return NextResponse.json({message:"blogfolder_ok",posts},{status:200})
   }
   catch(err){
    return NextResponse.json({message:"Error",err},
       {status:500});
    }
  // return new NextResponse('Post Api')
    //  return new NextResponse(`${name},${id}`);

}




/*
export async function POST(request:NextRequest){

   // const body=await request.json();
   const {name,age}=await request.json();
   //console.log("Post api")

   // return new NextResponse('Post Api')
      return new NextResponse(`${name},${age}`);

}

*/













export async function PATCH(request:NextRequest){

    // const body=await request.json();
    const {name,age}=await request.json();
    //console.log("Post api")
 
    // return new NextResponse('Post Api')
       return new NextResponse(`${name},${age}`);
 
 }

 export async function DELETE(request:NextRequest){

    // const body=await request.json();
    const {name,age}=await request.json();
    //console.log("Post api")
 
    // return new NextResponse('Post Api')
       return new NextResponse(`${name},${age}`);
 
 }