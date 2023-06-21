const config = {
  title: "Layout 1 - Vertical",
  defaults: {
    mode: "container",
    containerWidth: 1570,
    navbar: {
      display: true,
      style: "style-1",
      folded: true,
      position: "left",
    },
    toolbar: {
      display: true,
      style: "fixed",
    },
    footer: {
      display: true,
      style: "fixed",
    },
    leftSidePanel: {
      display: true,
    },
    rightSidePanel: {
      display: true,
    },
  },
  form: {
    footer: {
      type: "group",
      title: "Footer",
      children: {
        display: {
          title: "Display",
          type: "switch",
        },
        style: {
          title: "Style",
          type: "radio",
          options: [
            {
              name: "Fixed",
              value: "fixed",
            },
            {
              name: "Static",
              value: "static",
            },
          ],
        },
      },
    },
  },
};

export default config;
