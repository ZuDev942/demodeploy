import { defineStore } from "pinia";

import { ICalender } from "./types";

export const useCalender = defineStore("counter", {
  state: () =>
    ({
      type: "success",
    } as ICalender),
});
