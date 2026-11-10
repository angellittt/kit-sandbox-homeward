// design-system-kit 0.53.0 · profile shadcn · design entry: the Tabs page
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Labelled } from "../labels";

export const TabsPreview = () => {
  return (
    <div className="col" style={{ maxWidth: 460 }}>
      <Labelled label="default" block>
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="open">Open</TabsTrigger>
            <TabsTrigger value="closed" disabled>
              Closed
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <p className="note">Every invoice.</p>
          </TabsContent>
          <TabsContent value="open">
            <p className="note">Unpaid invoices.</p>
          </TabsContent>
        </Tabs>
      </Labelled>
      <Labelled label="line" block>
        <Tabs defaultValue="overview">
          <TabsList variant="line">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <p className="note">variant="line" for page-level sections.</p>
          </TabsContent>
        </Tabs>
      </Labelled>
    </div>
  );
};
