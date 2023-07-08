import { Accordion } from "@/components/ui/accordion";
import { AccordionItem } from "@radix-ui/react-accordion";
import { FC } from "react";

const Chat: FC = () => {
    return (
        <Accordion type="single" collapsible className="relative bg-white z-40 ">
            <AccordionItem value="item-1">
                <div className="fixed right-8 w-80 bottom-8 bg-white border border-gray-200 rounded-md overflow-hidden"></div>
            </AccordionItem> 
        </Accordion>
    );
}

export default Chat


