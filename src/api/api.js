import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "059e6886-8406-415a-89a3-61b4ecd478eb" }
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  follow(id) {
    return instance.post(`follow/${id}`, {});
  },

  unfollow(id) {
    return instance.delete(`follow/${id}`);
  }
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },

  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },

  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status });
  },

  updateAvatar(formData) {
    return instance.put(`/profile/photo`, formData)
  }
};

export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`);
  },
  postLogin(email, password) {
    return instance.post("auth/login", {
      email: email,
      password: password
    });
  },
  deleteLogin() {
    return instance.delete("auth/login")
  }
};
