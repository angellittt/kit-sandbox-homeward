// design-system-kit 0.37.5 · profile shadcn · design entry: the Annotation page
import { Button } from "@/components/ui/button";
import { Annotation, AnnotationPin } from "../wireframe/annotation";

export const AnnotationPreview = () => {
  return (
    <div className="row" style={{ gap: 40 }}>
      <span className="row" style={{ gap: 8 }}>
        <Button>Continue</Button>
        <AnnotationPin number={1} />
      </span>
      <Annotation number={1}>
        Disabled until both documents are uploaded. Open question: save a
        partial upload as a draft?
      </Annotation>
    </div>
  );
};
