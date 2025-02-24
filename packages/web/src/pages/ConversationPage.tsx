import { Divider, Stack } from "@mantine/core";
import AddConversation from "../components/AddConversation";
import useConversationManager from "../hooks/useConversationManager";
import Messages from "../components/Messages";
import Prompt from "../components/Prompt";

export default () => {
    const { activeConversation } = useConversationManager();

    if (!activeConversation) {
        return <AddConversation />;
    }

    return (
        <Stack h="100%">
            <Messages />
            <Divider />
            <Prompt />
        </Stack>
    );
};
