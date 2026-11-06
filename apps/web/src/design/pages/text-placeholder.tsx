// design-system-kit 0.45.0 · profile shadcn · design entry: the TextPlaceholder page
import { TextPlaceholder } from "../wireframe/text-placeholder";
import { Labelled } from "../labels";

export const TextPlaceholderPreview = () => {
  return (
    <div className="col">
      <Labelled label="heading" block>
        <TextPlaceholder type="heading" />
      </Labelled>
      <Labelled label="paragraph" block>
        <TextPlaceholder type="paragraph" />
      </Labelled>
    </div>
  );
};
