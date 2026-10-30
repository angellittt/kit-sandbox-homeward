// design-system-kit 0.37.2 · profile shadcn · design entry: the Pagination page
import { useState, type MouseEvent } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const PaginationPreview = () => {
  const [p, setP] = useState(2);
  const go = (n: number) => (e: MouseEvent) => {
    e.preventDefault();
    setP(n);
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={go(Math.max(1, p - 1))} />
        </PaginationItem>
        {[1, 2, 3].map((n) => (
          <PaginationItem key={n}>
            <PaginationLink href="#" isActive={p === n} onClick={go(n)}>
              {n}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive={p === 9} onClick={go(9)}>
            {9}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" onClick={go(Math.min(9, p + 1))} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
