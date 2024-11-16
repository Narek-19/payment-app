import  {Resend} from 'resend';
import { NextResponse } from 'next/server';


export async function POST(request) {
    try {
        const { form,section } = await request.json();
        const resend = new Resend(process.env.RESEND_API_KEY)
        let htmlContent;
        if(section==="contact"){
        htmlContent = `
            <p>Name: <strong>${form?.name}</strong>!</p>
            <p>Phone: <strong>${form?.phone}</strong></p>
            <p>Email: <strong>${form?.email}</strong></p>
            <p>Message: <strong>${form?.msg}</strong></p>

            <p style={{color:"green"}}>No Computer Viruses; All Data checked, Success Status </p>
            `
        }
        if(section === "proposal"){
            htmlContent = `
            <h1>Apeh Services, ${form.name} requested free Proposal</h1>

            <p>Name: <strong>${form?.name}</strong>!</p>
            <p>Last Name: <strong>${form?.lname}</strong></p>
            <p>Email: <strong>${form?.email}</strong></p>

            `
        }
        resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'apeh.inc1@gmail.com',
            subject: `Apeh Services Contact ${form.name} Message`,
            html: htmlContent
          });

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}