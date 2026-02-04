import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'newsletter.json');

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
        }

        let subscribers: string[] = [];

        if (fs.existsSync(DATA_FILE)) {
            const fileContent = fs.readFileSync(DATA_FILE, 'utf8');
            try {
                subscribers = JSON.parse(fileContent);
            } catch (e) {
                // File might be empty or corrupt, start fresh
                subscribers = [];
            }
        }

        if (!subscribers.includes(email)) {
            subscribers.push(email);
            fs.writeFileSync(DATA_FILE, JSON.stringify(subscribers, null, 2));
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Newsletter API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
