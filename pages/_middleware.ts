import { NextResponse } from "next/dist/server/web/spec-extension/response";
import { verify } from "jsonwebtoken";
import  { NextRequest } from 'next/server'

const secret = `${process.env.SECRET}`

export default function middleware(request:NextRequest){
    const {cookies} = request;
    const jwt = cookies.OursiteJWT;
    const url =  request.url;

    if(url.includes("/dashboard")){
        if(jwt === undefined ){
            return NextResponse.redirect("/login")
        }
        try {
            verify(jwt,secret);
            return NextResponse.next();
        } catch (e) {
            
            return NextResponse.redirect("/login");
        }
    }
    return  NextResponse.next()
}