import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/admin";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const teamID = searchParams.get("teamID");

  if (!teamID)
    return NextResponse.json(
      {
        message: "Bad request. Query parameters are not valid",
      },
      { status: 500 }
    );

  try {
    const doc = await db.collection("teams").doc(teamID).get();
    return NextResponse.json(doc.data(), { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(e, { status: 500 });
  }
}
