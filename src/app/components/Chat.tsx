import { Accordion } from "@/app/components/ui/accordion";
import { AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { FC } from "react";
import ChatHeader from "./ChatHeader";
import { AccordionContent } from "@radix-ui/react-accordion";

const Chat: FC = () => {
    return (
        <Accordion type="single" collapsible className="relative bg-white z-40 ">
            <AccordionItem value="item-1">
                <div className="fixed right-8 w-80 bottom-8 bg-white border border-gray-200 rounded-md overflow-hidden">
                    <div className="w-full h-full flex flex-col">
                        <AccordionTrigger className="px-6 border-b border-zinc-300">
                            <ChatHeader />
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col h-80">
                                messages
                            </div>
                        </AccordionContent>
                    </div>
                </div>
            </AccordionItem> 
        </Accordion>
    );
}

export default Chat


