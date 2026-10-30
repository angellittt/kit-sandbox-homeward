// design-system-kit 0.37.1 · profile shadcn · design entry: the InputGroup page
import { useState } from "react";
import { Search, X } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";

export const InputGroupPreview = () => {
  const [q, setQ] = useState("launch");
  return (
    <div className="col" style={{ maxWidth: 380 }}>
      <InputGroup>
        <InputGroupAddon>
          <Search size={16} />
        </InputGroupAddon>
        <InputGroupInput
          placeholder="Search boards"
          aria-label="Search boards"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
          }}
        />
        {q ? (
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              size="icon-xs"
              aria-label="Clear search"
              onClick={() => {
                setQ("");
              }}
            >
              <X size={16} />
            </InputGroupButton>
          </InputGroupAddon>
        ) : null}
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>example.com/</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          defaultValue="spring-launch"
          aria-label="Board address"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="xs">Copy</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput
          placeholder="Checking…"
          aria-label="Username"
          aria-busy
        />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea
          placeholder="Leave a note"
          aria-label="Note"
          rows={2}
        />
        <InputGroupAddon align="block-end">
          <InputGroupText>Markdown supported</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};
