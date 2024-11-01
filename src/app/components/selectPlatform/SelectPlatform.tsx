"use client";

import { useRouter } from "next/navigation";
import { CustomBtn } from "../ui";
import { CustomSelect } from "../ui/Select";
import { TextWithLink } from "../ui/TextWithLink";

export const SelectPlatform: React.FC = () => {
const router = useRouter();

  const handleLinkClick = () => {
    router.push("/account-setup/connect-store/select-platform/select-platform-succes");
  };
  
  return (
    <div className="flex flex-col gap-8">
      <CustomSelect
        listOptions={[
          { value: "Salesforce", label: "Salesforce" },
          { value: "Ecwid", label: "Ecwid" },
          { value: "Other", label: "Other" },
        ]}
      />
      <CustomBtn type="submit" primary onClick={handleLinkClick}>
        Submit
      </CustomBtn>
      <TextWithLink
        text="Actually use Shopify?"
        link="/account-setup/connect-store"
        linkText="Connect"
      ></TextWithLink>
    </div>
  );
};
