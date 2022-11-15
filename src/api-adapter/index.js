const BASE_URL = "https://fitnesstrac-kr.herokuapp.com";

export async function getRoutines() {
  try {
    const response = await fetch(`${BASE_URL}/api/routines`);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getActivities() {
  try {
    const response = await fetch(`${BASE_URL}/api/activities`);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function authUser(token) {
  try {
    const response = await fetch(`${BASE_URL}/api/users/me`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log(result)
    return result;
  } catch (error) {
    console.error(error);
  }
}

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

export async function loginUser(username, password) {
  const loginOptions = {
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
    const response = await fetch(`${BASE_URL}/api/users/login`, loginOptions);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getUserRoutines(username) {
  const userRoutineOptions = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const response = await fetch (`${BASE_URL}/api/users/${username}/routines`, userRoutineOptions);
    const result = await response.json();
    console.log(result);
    return result;
    
  } catch (error) {
    console.error(error)
  }
}


export async function getPublicRoutines() {
  const publicRoutineOptions = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const response = await fetch (`${BASE_URL}/api/routines`, publicRoutineOptions);
    const result = await response.json();
    console.log(result);
    return result;
    
  } catch (error) {
    console.error(error)
  }

export async function createActivity(post, token) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }, body: JSON.stringify({
      post
    })
  }
  const response = await fetch(`${BASE_URL}/api/activities`, options)
  const result = await response.json()
  return result;


}
