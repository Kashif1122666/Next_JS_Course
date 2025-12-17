import { rejects } from "assert";
import { NextRequest, NextResponse } from "next/server";
import { resolve } from "path";

export async function GET(){
      return NextResponse.json({
        name: "John khan",
        email: "ali@example.com",
      })
}



export async function POST(request: NextRequest) {
       const data = await request.json();
       return NextResponse.json({
        message: "User data received",
        receivedData: data,
       })
}



