// design-system-kit 0.45.0 · profile shadcn · design entry: the InputGroup page
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
import { Labelled } from "../labels";

export const InputGroupPreview = () => {
  const [q, setQ] = useState("launch");
  return (
    <div className="col" style={{ maxWidth: 380 }}>
      <Labelled label="icon and button" block>
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
      </Labelled>
      <Labelled label="text and button" block>
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
      </Labelled>
      <Labelled label="loading" block>
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
      </Labelled>
      <Labelled label="textarea, block-end text" block>
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
      </Labelled>
    </div>
  );
};
