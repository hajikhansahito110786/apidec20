import { NextRequest,NextResponse } from "next/server";

export function GET(request:NextRequest){
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
    console.log("get request")
    return NextResponse.json({url,name,age,query})
}

export async function POST(request:NextRequest){

   // const body=await request.json();
   const {name,age}=await request.json();
   //console.log("Post api")

   // return new NextResponse('Post Api')
      return new NextResponse(`${name},${age}`);

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