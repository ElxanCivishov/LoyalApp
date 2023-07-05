import withReducer from "app/store/withReducer";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "@lodash";
import FusePageSimple from "@fuse/core/FusePageSimple";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import reducer from "./store";
import { getWidgets, selectWidgets } from "./store/widgetsSlice";
import UsersDashboardAppHeader from "./UsersDashboardAppHeader";
import UsersOverviewWidget from "./widgets/UsersOverviewWidget";
import OrdersTable from "./widgets/OrdersTable";
function UsersDashboardApp() {
  const dispatch = useDispatch();
  const widgets = useSelector(selectWidgets);

  useEffect(() => {
    dispatch(getWidgets());
  }, [dispatch]);

  return (
    <FusePageSimple
      header={<UsersDashboardAppHeader />}
      content={
        <>
          {useMemo(() => {
            const container = {
              show: {
                transition: {
                  staggerChildren: 0.06,
                },
              },
            };

            const item = {
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            };

            return (
              !_.isEmpty(widgets) && (
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 w-full p-24 md:p-32"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  <motion.div
                    variants={item}
                    className="sm:col-span-2 lg:col-span-3"
                  >
                    <UsersOverviewWidget />
                  </motion.div>

                  <div className="w-full mt-16 sm:col-span-3">
                    <Typography className="text-2xl font-semibold tracking-tight leading-6">
                      Users list
                    </Typography>
                  </div>

                  <motion.div
                    variants={item}
                    className="sm:col-span-2 lg:col-span-3"
                  >
                    <OrdersTable />
                  </motion.div>
                </motion.div>
              )
            );
          }, [widgets])}
        </>
      }
    />
  );
}

export default withReducer("analyticsDashboardApp", reducer)(UsersDashboardApp);
