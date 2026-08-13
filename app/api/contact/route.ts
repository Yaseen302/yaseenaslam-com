import { NextRequest, NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export async function POST(request:NextRequest){
  try{
    const body=await request.json() as Record<string,string>;
    if(body.company_website)return NextResponse.json({ok:true});
    const name=String(body.name??"").trim().slice(0,100);
    const email=String(body.email??"").trim().slice(0,160);
    const project=String(body.project??"").trim().slice(0,100);
    const message=String(body.message??"").trim().slice(0,4000);
    if(name.length<2||!emailPattern.test(email)||!project||message.length<20)return NextResponse.json({error:"Invalid submission"},{status:400});
    // Production email delivery can be connected through RESEND_API_KEY without exposing credentials.
    console.info("Validated portfolio inquiry",{name,email,project,messageLength:message.length});
    return NextResponse.json({ok:true});
  }catch{return NextResponse.json({error:"Invalid request"},{status:400})}
}
