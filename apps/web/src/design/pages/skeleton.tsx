// design-system-kit 0.37.2 · profile shadcn · design entry: the Skeleton page
import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonPreview = () => {
  return (
    <div className="row" aria-busy style={{ alignItems: "flex-start" }}>
      <Skeleton style={{ width: 40, height: 40, borderRadius: 999 }} />
      <div className="col" style={{ gap: 8 }}>
        <Skeleton style={{ width: 220, height: 14 }} />
        <Skeleton style={{ width: 160, height: 14 }} />
        <Skeleton style={{ width: 260, height: 60 }} />
      </div>
    </div>
  );
};
