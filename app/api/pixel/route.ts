import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  // Log the visit to Supabase
  const userAgent = req.headers.get("user-agent");
  const referrer = req.headers.get("referer");

  try {
    if (supabase) {
      await supabase.from("portfolio_stats").insert([
        { 
          event_type: "github_view", 
          metadata: { userAgent, referrer } 
        }
      ]);
    } else {
      console.warn("Supabase client not initialized. Skipping tracking.");
    }
  } catch (error) {
    console.error("Tracking Error:", error);
  }

  // Return a transparent 1x1 pixel
  const pixel = Buffer.from(
    "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    "base64"
  );

  return new NextResponse(pixel, {
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "Pragma": "no-cache",
      "Expires": "0",
    },
  });
}
