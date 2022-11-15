const BASE_URL = "https://fitnesstrac-kr.herokuapp.com";

export async function getRoutines() {
  const response = await fetch(`${BASE_URL}/api/users/${username}routines`);
  const result = await response.json();
  const routines = result.data.routines;
  return routines;
}

export async function getActivities() {
    const response = await fetch(`${BASE_URL}/api/activities`);
    const result = await response.json();
    const activities = result.data.activity;
    return activities;
  }

// export async function getUser(token, setUser) {
//   try {
//     const response = await fetch(`${BASE_URL}/api/users/me`, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// }

export async function registerUser(username, password) {
  const registerOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  };
  try {
    const response = await fetch(
      `${BASE_URL}/api/users/register`,
      registerOptions
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}
