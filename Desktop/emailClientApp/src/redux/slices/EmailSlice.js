import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

import api from "../../config/axiosInstance";

export const fetchEmails = createAsyncThunk("fetchEmails", async (page) => {
  try {
    const res = await api.get(`?page=${page}`);
    if (res.status === 200 || res.status === 201) {
      return res.data.list;
    } else {
      throw `Something went wrong status code ${res.status}`;
    }
  } catch (err) {
    console.log("Printing error: " + err);
  }
});

export const fetchEmail = createAsyncThunk("fetchEmail", async (id) => {
  try {
    const res = await api.get(`?id=${id}`);
    if (res.status === 200 || res.status === 201) {
      return res.data;
    } else {
      throw `Something went wrong status code ${res.status}`;
    }
  } catch (err) {
    console.log("Printing error: " + err);
  }
});

const EmailSlice = createSlice({
  name: "emails",
  initialState: {
    emails: [],
    filterEmails: [],
    showEmail: {
      emailId: 0,
      emailName: "",
      emailSub: "",
      emailBody: "",
      emailDate: "",
      emailFavorite: false,
    },
  },
  reducers: {
    filterEmailsRed: (state, action) => {
      if (action.payload) {
        if (action.payload == "all") {
          state.filterEmails = state.emails;
        } else {
          state.filterEmails = state.emails.filter((email) => {
            if (
              (action.payload == "unread" && !email.read) ||
              (action.payload == "read" && email.read) ||
              (action.payload == "favorites" && email.favorite)
            ) {
              return email;
            }
          });
        }
      }
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEmails.fulfilled, (state, action) => {
      state.emails = [];
      state.filterEmails = [];
      if (action.payload.length) {
        action.payload.forEach((val) => {
          const email = {
            id: val.id,
            email: val.from.email,
            name: val.from.name,
            subject: val.subject,
            short_desc: val.short_description,
            date: val.date,
            read: false,
            favorite: false,
          };
          state.emails.push(email);
        });
      }
      state.filterEmails = state.emails;
      return state;
    });
    builder.addCase(fetchEmail.fulfilled, (state, action) => {
      if (action.payload?.body) {
        state.showEmail.emailId = action.payload.id;
        state.showEmail.emailName = action.payload.Name;
        state.showEmail.emailSub = state.emails[[action.payload.id]].subject;
        state.showEmail.emailBody = action.payload.body;
        state.showEmail.emailDate = state.emails[[action.payload.id]].date;
        state.showEmail.emailFavorite =
          state.emails[[action.payload.id]].favorite;
      }
      return state;
    });
  },
});

export const { filterEmailsRed } = EmailSlice.actions;
export default EmailSlice.reducer;
