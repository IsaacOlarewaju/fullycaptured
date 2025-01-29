import { WriteNewHead } from "@/components/newMessage/WriteNewHead";
import { ReduceBrowserSize } from "@/components/dashboard/ReduceBrowserSize";
import { InputContainer } from "@/components/shared/InputContainer";

export default function WriteNew() {
  console.clear();
  return (
    <div>
      <ReduceBrowserSize />
      <WriteNewHead title="New Message" />
      <InputContainer />
    </div>
  );
}
