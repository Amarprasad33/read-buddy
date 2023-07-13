import {z} from 'zod';


export const MessageSchema = z.object({
    id: z.string(),
    isUserMessage: z.boolean(),
    text: z.string()
})

// Array Validator
// This is created because GPT will have a cotntext of what are the 
// previous messages given as input
export const MessageArraySchema = z.array(MessageSchema)

export type Message = z.infer<typeof MessageSchema>