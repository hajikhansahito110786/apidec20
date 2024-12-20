import { Getbyid } from "@/app/data";
import { NextRequest,NextResponse } from "next/server";
import { request } from "node:http";
interface Id1nterface{
    id1:number,
    name:string
}
const books=[
    { id:1,Name:"Maths",author:"abc"},
    { id:2,Name:"eng",author:"cde"},
]


//xport const GET=async(request:NextRequest)
// old xport async function GET(request:NextRequest,{params}:{params: Promise<{params:Id1nterface}>}
/*  ok export async function GET(request:NextRequest,{params}:{params: Promise<{id1:number}>})


{
    //export function GET(request:NextRequest,params:any){
    const url=request.nextUrl;
    const name=url.searchParams.get("name");
    const age=url.searchParams.get("age");
    const query=url.searchParams.get("name");

    if(query){
        return new NextResponse("hello brother");

    }
    if(age=="22"){
        return new NextResponse('Hello brother');

    }
console.log("inside id1",params)
   //return NextResponse.json({url,name,age,query})
    //return NextResponse.json(${params.id1})

const data=await params;
//data.id1
    return NextResponse.json({message:data.id1});
   // return new NextResponse(`gfyughgyh ${(await params).id1},${"message":data}`);
}
*/
export async function GET(request:NextRequest,{params}:{params: Promise<{id1:number}>})


{
    //export function GET(request:NextRequest,params:any){
    const url=request.nextUrl;
    const name=url.searchParams.get("name");
    const age=url.searchParams.get("age");
    const query=url.searchParams.get("name");

    if(query){
        return new NextResponse("hello brother");

    }
    if(age=="22"){
        return new NextResponse('Hello brother');

    }
console.log("inside id1",params)
   //return NextResponse.json({url,name,age,query})
    //return NextResponse.json(${params.id1})

const data=await params;
//data.id1
//
Getbyid(data.id1)


//

    return NextResponse.json({message:data.id1});
   // return new NextResponse(`gfyughgyh ${(await params).id1},${"message":data}`);
}


/*
export const GET=async(request:NextRequest)=>{
    const id=request.url.split("books/")[1];
    console.log(id);
}
*/

export async function POST(request:NextRequest){

   // const body=await request.json();
   const {name,age}=await request.json();
   //console.log("Post api")

    return new NextResponse('Post Api')
   //   return new NextResponse(`${name},${age}`);
 //return new NextResponse(`gfyughgyh ${(await params).id1},${"message":data}`);
}

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