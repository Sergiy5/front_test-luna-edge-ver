import { CustomBtn } from "../ui";
import { TextWithLink } from "../ui/TextWithLink";

export const StoreConnected: React.FC = () => {


  return (
    <div>
      <h3>Store connected</h3>
      <p>
        Chad is now able to manage customer support requests for [STORE-NAME].
      </p>
      <CustomBtn type="submit" primary onClick={() => console.log("first")}>
        Continue
      </CustomBtn>
      <TextWithLink
        text="Wrong store?"
        link="/help"
        linkText="Connect another one"
      />
    </div>
  );
};
