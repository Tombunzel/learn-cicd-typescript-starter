import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";
describe("auth", () => {
  test("getAPIkey is not null", () => {
    const headers = {
      authorization: "ApiKey some_api_key",
    };
    expect(getAPIKey(headers)).not.toBeNull();
  });
});
