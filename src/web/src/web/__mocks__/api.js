import { vi } from "vitest";

export const fetchUser = vi.fn(() => {
  return { name: "Alice", email: "alice@example.com" };
});
