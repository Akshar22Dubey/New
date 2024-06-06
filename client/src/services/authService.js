  // import store from "../redux/store";
  // import { userLogin, userRegister } from "../redux/features/auth/authActions";

  // export const handleLogin = (e, email, password, role) => {
  //   e.preventDefault();
  //   try {
  //     if (!role || !email || !password) {
  //       return alert("Please Provide All Feilds");
  //     }
  //     console.log(email, password, role);
  //     store.dispatch(userLogin({ email, password, role }));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // export const handleRegister = (
  //   e,
  //   name,
  //   role,
  //   email,
  //   password,
  //   phone,
  //   organisationName,
  //   address,
  //   hospitalname,
  //   website
  // ) => {
  //   e.preventDefault();
  //   try {
  //     store.dispatch(
  //       userRegister({
  //         name,
  //         role,
  //         email,
  //         password,
  //         phone,
  //         organisationName,
  //         address,
  //         hospitalname,
  //         website,
  //       })
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  import store from "../redux/store";
  import { userLogin, userRegister } from "../redux/features/auth/authActions";

  export const handleLogin = async (e, email, password, role) => {
    e.preventDefault();
    try {
      if (!role || !email || !password) {
        return alert("Please Provide All Fields");
      }
      console.log("Logging in with:", email, password, role);
      const result = await store.dispatch(userLogin({ email, password, role }));
      console.log("Login result:", result);

      if (userLogin.fulfilled.match(result)) {
        // Handle successful login here if needed
        console.log("Login successful");
      } else {
        // Handle login failure here if needed
        console.error("Login failed:", result.payload || result.error);
        alert("Login failed: " + (result.payload || result.error.message));
      }
    } catch (error) {
      console.log("Error during login:", error);
      alert("An error occurred during login: " + error.message);
    }
  };

  export const handleRegister = async (
    e,
    name,
    role,
    email,
    password,
    phone,
    organisationName,
    address,
    hospitalname,
    website
  ) => {
    e.preventDefault();
    try {
      console.log("Registering with:", {
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalname,
        website,
      });
      const result = await store.dispatch(
        userRegister({
          name,
          role,
          email,
          password,
          phone,
          organisationName,
          address,
          hospitalname,
          website,
        })
      );
      console.log("Register result:", result);

      if (userRegister.fulfilled.match(result)) {
        // Handle successful registration here if needed
        console.log("Registration successful");
      } else {
        // Handle registration failure here if needed
        console.error("Registration failed:", result.payload || result.error);
        alert("Registration failed: " + (result.payload || result.error.message));
      }
    } catch (error) {
      console.log("Error during registration:", error);
      alert("An error occurred during registration: " + error.message);
    }
  };
