// design-system-kit 0.37.4 · profile shadcn · design entry: the Card page
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

export const CardPreview = () => {
  return (
    <div className="row" style={{ alignItems: "flex-start" }}>
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
      <Card size="sm" style={{ width: 200 }}>
        <CardHeader>
          <CardTitle>Small</CardTitle>
          <CardDescription>size="sm" for stat tiles.</CardDescription>
        </CardHeader>
        <CardContent>42 active</CardContent>
      </Card>
    </div>
  );
};
