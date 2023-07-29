import { eventInctance } from "./base.api";

const endpoint = "event";

export const events = {
    getAll: function() {
        return eventInctance.get(endpoint)
    },
}