"use server"

import { parseWithZod } from "@conform-to/zod"
import { redirect } from "next/navigation"
import { submissionSchema } from "./zodSchemas"

export async function TalkToSalesAction(prevState: any, formData: FormData) {

    const submission = parseWithZod(formData, {
        schema: submissionSchema,
    })

    if (submission.status !== "success") {
        submission.reply();
    }

    const response = await fetch(process.env.TALK_TO_SALES_URL!, {
        method: 'POST',
        body: formData,
    })
    if (!response.ok) {
        throw new Error("Something went wrong")
    }

    return redirect('/success')
}

export async function SupportTicketAction(prevState: any, formData: FormData) {

    const submission = parseWithZod(formData, {
        schema: submissionSchema,
    })

    if (submission.status !== "success") {
        submission.reply();
    }

    const response = await fetch(process.env.SUPPORT_TICEKT_URL!, {
        method: 'POST',
        body: formData,
    })
    if (!response.ok) {
        throw new Error("Something went wrong")
    }

    return redirect('/success')
}