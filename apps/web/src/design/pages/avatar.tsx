// design-system-kit 0.37.1 · profile shadcn · design entry: the Avatar page
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar";

export const AvatarPreview = () => {
  return (
    <div className="col">
      <div className="row">
        <Avatar size="sm">
          <AvatarFallback>PK</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>MD</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>SL</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>RT</AvatarFallback>
          <AvatarBadge />
        </Avatar>
      </div>
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
    </div>
  );
};
