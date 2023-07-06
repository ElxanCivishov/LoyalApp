import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCompanies = createAsyncThunk(
  "company/widgets/getWidgets",
  async () => {
    const response = await axios.get("/api/dashboards/analytics/widgets");

    const data = await response.data;
    console.log(data, "123");
    return data;
  }
);

const companySlice = createSlice({
  name: "company/widgets",
  initialState: null,
  reducers: {},
  extraReducers: {
    [getCompanies.fulfilled]: (state, action) => action.payload,
  },
});

export const selectWidgets = ({ analyticsDashboardApp }) =>
  analyticsDashboardApp.widgets;

export default companySlice.reducer;
