// design-system-kit 0.37.2 · profile shadcn · design entry: the Accordion page
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AccordionPreview = () => {
  return (
    <div style={{ maxWidth: 460 }}>
      <Accordion defaultValue={["a"]}>
        {[
          ["a", "Shipping", "Orders ship within two working days."],
          ["b", "Returns", "Return any item within 30 days."],
          ["c", "Warranty", "Two years on parts and labour."],
        ].map((i) => (
          <AccordionItem key={i[0]} value={i[0]}>
            <AccordionTrigger>{i[1]}</AccordionTrigger>
            <AccordionContent>{i[2]}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
