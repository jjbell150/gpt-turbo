import React from "react";
import makeNotImplemented from "../utils/makeNotImplemented";
import { Persistence } from "../entities/persistence";

export interface PersistenceContextValue {
    persistence: Persistence;
    addPersistedConversationId: (id: string) => void;
    persistedConversationIds: string[];
    isLoading: boolean;
    hasInit: boolean;
}

const notImplemented = makeNotImplemented("PersistenceContext");
export const PersistenceContext = React.createContext<PersistenceContextValue>({
    persistence: {
        conversations: [],
    },
    addPersistedConversationId: notImplemented,
    persistedConversationIds: [],
    isLoading: false,
    hasInit: true,
});
