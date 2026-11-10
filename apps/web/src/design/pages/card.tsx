// design-system-kit 0.53.0 · profile shadcn · design entry: the Card page
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Labelled } from "../labels";

export const CardPreview = () => {
  return (
    <div className="row" style={{ alignItems: "flex-start" }}>
      <Labelled label="default">
        <Card style={{ width: 300 }}>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
            <CardAction>
              <Button variant="ghost" size="sm">
                Export
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>12 invoices paid, 3 outstanding.</CardContent>
          <CardFooter>
            <Button variant="secondary" size="sm">
              View report
            </Button>
          </CardFooter>
        </Card>
      </Labelled>
      <Labelled label="sm">
        <Card size="sm" style={{ width: 200 }}>
          <CardHeader>
            <CardTitle>Small</CardTitle>
            <CardDescription>size="sm" for stat tiles.</CardDescription>
          </CardHeader>
          <CardContent>42 active</CardContent>
        </Card>
      </Labelled>
    </div>
  );
};
