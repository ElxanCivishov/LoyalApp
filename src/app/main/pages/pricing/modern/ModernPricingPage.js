import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { darken } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import clsx from "clsx";
import { motion } from "framer-motion";
import ModernPricingCard from "./ModernPricingCard";

function ModernPricingPage() {
  const [period, setPeriod] = useState("month");

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative flex flex-col flex-auto min-w-0 overflow-hidden">
      <div className="relative pt-32 pb-48 sm:pt-80 sm:pb-96 px-24 sm:px-64 overflow-hidden">
        <svg
          className="-z-1 absolute inset-0 pointer-events-none"
          viewBox="0 0 960 540"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Box
            component="g"
            sx={{ color: "divider" }}
            className="opacity-20"
            fill="none"
            stroke="currentColor"
            strokeWidth="100"
          >
            <circle r="234" cx="196" cy="23" />
            <circle r="234" cx="790" cy="491" />
          </Box>
        </svg>
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.05 } }}
          >
            <h2 className="text-xl font-semibold">PRICING</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
          >
            <div className="mt-4 text-4xl sm:text-7xl font-extrabold tracking-tight leading-tight text-center">
              Take control of your productivity
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.15 } }}
          >
            <Typography
              className="mt-12 sm:text-2xl text-center tracking-tight"
              color="text.secondary"
            >
              Start small and free, upgrade as you go.
              <br />
              Take control of everything.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 } }}
          >
            <Box
              className="flex items-center mt-32 sm:mt-64 p-2 rounded-full overflow-hidden"
              sx={{
                backgroundColor: (theme) =>
                  darken(theme.palette.background.default, 0.05),
              }}
            >
              <Box
                component="button"
                className={clsx(
                  "h-40 items-center px-16 cursor-pointer rounded-full font-medium",
                  period === "year" && "shadow"
                )}
                onClick={() => setPeriod("year")}
                sx={{
                  backgroundColor: period === "year" ? "background.paper" : "",
                }}
                type="button"
              >
                Yearly billing
              </Box>

              <Box
                component="button"
                className={clsx(
                  "h-40 items-center px-16 cursor-pointer rounded-full font-medium",
                  period === "month" && "shadow"
                )}
                onClick={() => setPeriod("month")}
                sx={{
                  backgroundColor: period === "month" ? "background.paper" : "",
                }}
                type="button"
              >
                Monthly billing
              </Box>
            </Box>
          </motion.div>
        </div>

        <div className="flex justify-center mt-40 sm:mt-80">
          <div className="w-full max-w-sm md:max-w-7xl">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 lg:gap-y-0 md:gap-x-24"
            >
              <motion.div variants={item}>
                <ModernPricingCard
                  period={period}
                  title="Personal"
                  subtitle="Perfect for an individual or a small team starting to get bigger"
                  yearlyPrice="$9.00"
                  monthlyPrice="$6.00"
                  buttonTitle="Get Started"
                  details={
                    <div className="flex flex-col mt-48">
                      <Typography className="font-semibold">
                        Core features, including:
                      </Typography>
                      <div className="mt-16 space-y-8">
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">
                            <b>10</b> projects
                          </Typography>
                        </div>
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">
                            <b>5GB</b> storage
                          </Typography>
                        </div>
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">
                            Analytics
                          </Typography>
                        </div>
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">
                            Free mobile app
                          </Typography>
                        </div>
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">
                            Access to forums
                          </Typography>
                        </div>
                      </div>
                    </div>
                  }
                />
              </motion.div>
              <motion.div variants={item}>
                <ModernPricingCard
                  period={period}
                  title="Premium"
                  subtitle="Perfect for growing teams wanting to be in more control"
                  yearlyPrice="$12.00"
                  monthlyPrice="$15.00"
                  buttonTitle="Start a free 14-day trial"
                  details={
                    <div className="flex flex-col mt-48">
                      <Typography className="font-semibold">
                        Personal features, plus:
                      </Typography>
                      <div className="mt-16 space-y-8">
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">
                            <b>Unlimited</b> projects
                          </Typography>
                        </div>
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">
                            <b>Unlimited</b> storage
                          </Typography>
                        </div>
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">
                            Custom domains
                          </Typography>
                        </div>
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">
                            Bulk editing
                          </Typography>
                        </div>
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">
                            12 / 5 support
                          </Typography>
                        </div>
                      </div>
                    </div>
                  }
                  isPopular
                />
              </motion.div>
              <motion.div variants={item}>
                <ModernPricingCard
                  period={period}
                  title="Enterprise"
                  subtitle="Perfect for companies wanting advanced tools and support"
                  yearlyPrice="$49.00"
                  monthlyPrice="$69.00"
                  buttonTitle="Start a free 7-day trial"
                  details={
                    <div className="flex flex-col mt-48">
                      <Typography className="font-semibold">
                        Premium features, plus:
                      </Typography>
                      <div className="mt-16 space-y-8">
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">
                            <b>Dedicated</b> hardware
                          </Typography>
                        </div>
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">
                            <b>%99.9</b> uptime
                          </Typography>
                        </div>
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">
                            Advanced analytics
                          </Typography>
                        </div>
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">
                            3rd party integrations
                          </Typography>
                        </div>
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">
                            24 / 7 support
                          </Typography>
                        </div>
                      </div>
                    </div>
                  }
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModernPricingPage;
