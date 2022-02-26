import { AccountView } from "components/Account/AccountView";
import { AccountMenu } from "components/Menu/AccountMenu";
import { Page } from "components/Page";

export default function AccountPage() {
  return (
    <Page.Component menu={<AccountMenu />}>
      <AccountView />
    </Page.Component>
  );
}
