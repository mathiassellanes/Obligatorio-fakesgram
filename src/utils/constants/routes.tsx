export const routes = {
  base: {
    home: {
      complete: "/",
      routeToMap: "/"
    },
    notifications: {
      complete: "/notifications",
      routeToMap: "notifications"
    },
    profile: {
      complete: "/profile",
      routeToMap: "profile/:id?"
    },
    create: {
      complete: "/create",
      routeToMap: "create"
    }
  },
  auth: {
    routeToMap: "/auth",
    login: {
      complete: "/auth/login",
      routeToMap: "login"
    },
    register: {
      complete: "/auth/register",
      routeToMap: "register"
    }
  }
}
