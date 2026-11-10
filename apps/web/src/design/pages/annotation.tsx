// design-system-kit 0.53.0 · profile shadcn · design entry: the Annotation page
import { Button } from "@/components/ui/button";
import { Annotation, AnnotationPin } from "../wireframe/annotation";
import { Labelled } from "../labels";

export const AnnotationPreview = () => {
  return (
    <div className="row" style={{ gap: 40 }}>
      <Labelled label="pin">
        <span className="row" style={{ gap: 8 }}>
          <Button>Continue</Button>
          <AnnotationPin number={1} />
        </span>
      </Labelled>
      <Labelled label="note">
        <Annotation number={1}>
          Disabled until both documents are uploaded. Open question: save a
          partial upload as a draft?
        </Annotation>
      </Labelled>
    </div>
  );
};
