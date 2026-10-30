// design-system-kit 0.37.3 · profile shadcn · design entry: the TextPlaceholder page
import { TextPlaceholder } from "../wireframe/text-placeholder";

export const TextPlaceholderPreview = () => {
  return (
    <div className="col">
      <TextPlaceholder type="heading" />
      <TextPlaceholder type="paragraph" />
    </div>
  );
};
