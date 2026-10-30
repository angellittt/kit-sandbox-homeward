// design-system-kit 0.38.0 · profile shadcn · design entry: the ImagePlaceholder page
import { ImagePlaceholder } from "../wireframe/image-placeholder";

export const ImagePlaceholderPreview = () => {
  return (
    <div className="row" style={{ alignItems: "flex-start" }}>
      <ImagePlaceholder ratio="16:9" caption="Hero photo · 16:9" />
      <ImagePlaceholder ratio="1:1" caption="Map · 1:1" className="w-45" />
      <ImagePlaceholder ratio="9:16" caption="Video" className="w-25" />
    </div>
  );
};
