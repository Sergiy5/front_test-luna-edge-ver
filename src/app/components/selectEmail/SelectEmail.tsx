"use client";

import { useRouter } from "next/navigation";
import { CustomBtn } from "../ui";
import { CustomSelect } from "../ui/Select";
import { TextWithLink } from "../ui/TextWithLink";

export const SelectEmail: React.FC = () => {
  const router = useRouter();

  const handleLinkClick = () => {
    router.push(
      "/account-setup/connect-support/select-email/select-email-succes"
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <CustomSelect
        listOptions={[
          { value: "Outlook", label: "Outlook" },
          { value: "Yahoo", label: "Yahoo" },
          { value: "Other", label: "Other" },
        ]}
      />
      <CustomBtn type="submit" primary onClick={handleLinkClick}>
        Submit
      </CustomBtn>
      <TextWithLink
        text="Actually use Google?"
        link="/account-setup/connect-support"
        linkText="Connect"
      ></TextWithLink>
    </div>
  );
};
