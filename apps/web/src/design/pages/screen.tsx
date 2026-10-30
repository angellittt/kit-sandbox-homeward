// design-system-kit 0.37.2 · profile shadcn · design entry: the Screen page
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "../wireframe/image-placeholder";
import { Screen } from "../wireframe/screen";
import { TextPlaceholder } from "../wireframe/text-placeholder";

export const ScreenPreview = () => {
  return (
    <div className="row" style={{ alignItems: "flex-start", gap: 32 }}>
      <Screen
        device="browser"
        screen="03 Upload documents"
        url="/applications/new/documents"
        style={{ flex: 1, minWidth: 300, maxWidth: 460 }}
      >
        <TextPlaceholder type="heading" />
        <ImagePlaceholder caption="Drop zone" className="h-24 w-full" />
        <Button className="self-start">Continue</Button>
      </Screen>
      <Screen device="phone" screen="03 Upload documents">
        <TextPlaceholder type="heading" />
        <ImagePlaceholder caption="Drop zone" className="h-20 w-full" />
        <TextPlaceholder type="paragraph" lines={2} />
        <Button className="self-start">Continue</Button>
      </Screen>
    </div>
  );
};
