// design-system-kit 0.37.0 · profile shadcn · design entry: the Sidebar page
import { House, Settings, Users } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

export const SidebarPreview = () => {
  return (
    <div
      style={{
        height: 300,
        border: "1px solid var(--line-normal)",
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <SidebarProvider style={{ minHeight: 300 }}>
        <Sidebar collapsible="none">
          <SidebarHeader>
            <span style={{ fontWeight: 600, padding: "0 8px" }}>Product</span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Workspace</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive>
                    <House size={16} />
                    <span>Overview</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Users size={16} />
                    <span>Team</span>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>3</SidebarMenuBadge>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Settings size={16} />
                    <span>Settings</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <div style={{ padding: 16 }}>
            <p className="note">Page content</p>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};
