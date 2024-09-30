// app/api/ConversationAnalyzer/route.ts

import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";
import { NextRequest, NextResponse } from 'next/server'; // For the App Router

// Explicitly define a POST method handler
export async function POST(req: NextRequest) {
    try {
        const { conversation } = await req.json(); // Get the conversation from the request body

        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY, // Access environment variable
        });

        const CalendarEvent = z.object({
            name: z.string(),
            date: z.string(),
            participants: z.array(z.string()),
        });

        const completion = await openai.beta.chat.completions.parse({
            model: "gpt-4o-2024-08-06",
            messages: [
                { role: "system", content: "Extract the event information." },
                { role: "user", content: conversation },
            ],
            response_format: zodResponseFormat(CalendarEvent, "event"),
        });

        const event = completion.choices[0].message.parsed;
        return NextResponse.json({ event }); // Return the response as JSON
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}
