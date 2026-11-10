// design-system-kit 0.53.0 · profile shadcn · design entry: the Avatar page
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar";
import { Labelled } from "../labels";

export const AvatarPreview = () => {
  return (
    <div className="col">
      <div className="row">
        <Labelled label="sm">
          <Avatar size="sm">
            <AvatarFallback>PK</AvatarFallback>
          </Avatar>
        </Labelled>
        <Labelled label="default">
          <Avatar>
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
        </Labelled>
        <Labelled label="lg">
          <Avatar size="lg">
            <AvatarFallback>SL</AvatarFallback>
          </Avatar>
        </Labelled>
        <Labelled label="with badge">
          <Avatar>
            <AvatarFallback>RT</AvatarFallback>
            <AvatarBadge />
          </Avatar>
        </Labelled>
      </div>
      <Labelled label="group">
        <AvatarGroup>
          <Avatar>
            <AvatarFallback>PK</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>SL</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+3</AvatarGroupCount>
        </AvatarGroup>
      </Labelled>
    </div>
  );
};
