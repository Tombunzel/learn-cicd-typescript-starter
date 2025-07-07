import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";
describe("auth", () => {
  test("getAPIkey is not null", () => {
    const headers = {
      authorization: "Header ApiKey",
    };
    expect(getAPIKey(headers)).not.toBeNull();
  });
});
