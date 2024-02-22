import { ChatPageHead } from "@/components/chatPage/ChatPageHead";
import { InputContainer } from "@/components/shared/InputContainer";
import { ChatPageProFilePictureFull } from "@/components/chatPage/ChatPageProfilePictureFull";
import { ReduceBrowserSize } from "@/components/dashboard/ReduceBrowserSize";
import { Body } from "@/components/live";

export default function Chat() {
  return (
    <div>
      <ChatPageHead title="Kyle Walker" lastSeen="last seen 3mins ago" />
      <ReduceBrowserSize />
      <InputContainer />
      <ChatPageProFilePictureFull />
      <Body />
    </div>
  );
}
