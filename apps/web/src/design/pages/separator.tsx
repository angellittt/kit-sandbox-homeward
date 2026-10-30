// design-system-kit 0.37.4 · profile shadcn · design entry: the Separator page
import { Separator } from "@/components/ui/separator";

export const SeparatorPreview = () => {
  return (
    <div className="col" style={{ maxWidth: 360 }}>
      <div>
        <p style={{ margin: 0, fontWeight: 600 }}>Account</p>
        <p className="note">Name, email and password.</p>
      </div>
      <Separator />
      <div>
        <p style={{ margin: 0, fontWeight: 600 }}>Notifications</p>
        <p className="note">What we send and when.</p>
      </div>
      <div className="row" style={{ height: 20 }}>
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Support</span>
        <Separator orientation="vertical" />
        <span>Status</span>
      </div>
    </div>
  );
};
