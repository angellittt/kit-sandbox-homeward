// design-system-kit 0.45.0 · profile shadcn · design entry: the Skeleton page
import { Skeleton } from "@/components/ui/skeleton";
import { Property } from "../labels";

export const SkeletonPreview = () => {
  return (
    <>
      <Property name="Loading: an avatar, two lines of text and a block" />
      <div className="row" aria-busy style={{ alignItems: "flex-start" }}>
        <Skeleton style={{ width: 40, height: 40, borderRadius: 999 }} />
        <div className="col" style={{ gap: 8 }}>
          <Skeleton style={{ width: 220, height: 14 }} />
          <Skeleton style={{ width: 160, height: 14 }} />
          <Skeleton style={{ width: 260, height: 60 }} />
        </div>
      </div>
    </>
  );
};
