import { memo } from "react";
import ChatPanel from "../../shared-components/chatPanel/ChatPanel";
import NotificationPanel from "../../shared-components/notificationPanel/NotificationPanel";

function RightSideLayout1(props) {
  return (
    <>
      <ChatPanel />

      <NotificationPanel />
    </>
  );
}

export default memo(RightSideLayout1);
