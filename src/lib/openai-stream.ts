import { ParsedEvent, ReconnectInterval, createParser } from "eventsource-parser"

export type ChatGPTAgent = "user" | "system"

export interface ChatGPTMessage {
    role: ChatGPTAgent
    content: string
}


export interface OpenAIStreamPayload  {
    model: string
    messages: ChatGPTMessage[]
    temperature: number
    top_p: number
    frequency_penalty: number
    presence_penalty: number
    max_tokens: number
    stream: boolean
    n: number
}

export async function OpenAIStream(payload: OpenAIStreamPayload){
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    let counter = 0;

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify(payload),
    })

    // const json = await res.json();
    // if (json.choices && json.choices[0] && json.choices[0].delta?.content) {
    //   const text = json.choices[0].delta.content;
    //   console.log(text);
    // }
  
    // return res; 

    const stream = new ReadableStream({
        async start(controller) {
            console.log("Redable stream fetching started")

            







            // function onParse(event: ParsedEvent | ReconnectInterval){
            //     console.log("event", event)
            //     if(event.type === 'event'){
            // console.log("In between event type")

            //         const data = event.data;
            //         if(data === '[DONE]'){
            // console.log("Closing because you are done")

            //             controller.close();
            //             return;
            //         }

            //         try {
            //             console.log("Destructuring started")
                        
            //             const json = JSON.parse(data)
            //             console.log('json', json)
            //             const text = json.choices[0].delta?.content || ''
            //             console.log('text', text)

            //             console.log("Destructuring Ended")


            //             if(counter < 2 && (text.match(/n/) || []).length){
            //                 return
            //             }

            //             const  queue = encoder.encode(text);
            //             controller.enqueue(queue);

            //             counter++;

            //             console.log(queue)

            //         } catch (error) {
            //             controller.error(error)
            //         }
            //     }
            // }

            // const parser = createParser(onParse);

            // for await (const chunk of res.body as any){
            //     parser.feed(decoder.decode(chunk))
            // } 
            

        },
    })

    return stream;
}

