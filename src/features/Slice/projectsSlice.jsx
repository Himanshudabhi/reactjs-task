import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../../utils/api";

const API_URL = "https://637476b908104a9c5f80a039.mockapi.io/projects";

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    return await apiCall(API_URL);
  },
);

export const addProject = createAsyncThunk(
  "projects/addProject",
  async (projectData, { rejectWithValue }) => {
    try {
      return await apiCall(API_URL, "POST", projectData, {
        "Content-Type": "application/json",
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const updateProject = createAsyncThunk(
  "projects/updateProject",
  async (projectData, { rejectWithValue }) => {
    const url = `${API_URL}/${projectData.id}`;
    try {
      return await apiCall(url, "PUT", projectData, {
        "Content-Type": "application/json",
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteProject = createAsyncThunk(
  "projects/deleteProject",
  async (projectId, { rejectWithValue }) => {
    const url = `${API_URL}/${projectId}`;
    try {
      await apiCall(url, "DELETE");
      return projectId;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    loading: false,
    error: null,
    editingProject: null,
  },
  reducers: {
    setEditingProject: (state, action) => {
      state.editingProject = action.payload;
    },
    clearEditingProject(state) {
      state.editingProject = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProject.fulfilled, (state, action) => {
        state.loading = false;
        state.projects.push(action.payload);
      })
      .addCase(addProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.projects.findIndex(
          (project) => project.id === action.payload.id,
        );
        if (index !== -1) {
          state.projects[index] = action.payload;
        }
      })
      .addCase(updateProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteProject.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = state.projects.filter(
          (project) => project.id !== action.payload,
        );
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setEditingProject, clearEditingProject } = projectsSlice.actions;

export default projectsSlice.reducer;
