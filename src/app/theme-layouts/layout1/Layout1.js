import FuseDialog from "@fuse/core/FuseDialog";
import { styled } from "@mui/material/styles";
import FuseMessage from "@fuse/core/FuseMessage";
import FuseSuspense from "@fuse/core/FuseSuspense";
import AppContext from "app/AppContext";
import { memo, useContext } from "react";
import { useRoutes } from "react-router-dom";
import NavbarWrapperLayout1 from "./components/NavbarWrapperLayout1";
import RightSideLayout1 from "./components/RightSideLayout1";
import ToolbarLayout1 from "./components/ToolbarLayout1";
import SettingsPanel from "../shared-components/SettingsPanel";

const Root = styled("div")(() => ({
  "& .container": {
    maxWidth: `2000px`,
    width: "100%",
    margin: "0 auto",
  },
}));

function Layout1(props) {
  const appContext = useContext(AppContext);
  const { routes } = appContext;

  return (
    <Root id="fuse-layout" className="w-full flex">
      <div className="flex flex-auto min-w-0">
        <NavbarWrapperLayout1 />

        <main
          id="fuse-main"
          className="flex flex-col flex-auto min-h-full min-w-0 relative z-10"
        >
          <ToolbarLayout1 className="fixed" />

          <div className="sticky top-0 z-99">
            <SettingsPanel />
          </div>

          <div className="flex flex-col flex-auto min-h-0 relative z-10">
            <FuseDialog />

            <FuseSuspense>{useRoutes(routes)}</FuseSuspense>

            {props.children}
          </div>
        </main>
      </div>

      <RightSideLayout1 />
      <FuseMessage />
    </Root>
  );
}

export default memo(Layout1);
