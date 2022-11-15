const BASE_URL =  'https://fitnesstrac-kr.herokuapp.com'

export async function getRoutines() {
    const response = await fetch (`${BASE_URL}/api/routines`)
    const result = await response.json()
    const routines = result.data.routines
    return routines
}

export async function registerUser(username, password) {
    const registerOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          },
        }),
    };
    try {
    const response = await fetch(
        `${BASE_URL}/api/users/register`,
        registerOptions
      );
      const result = await response.json();
      const token = result.token;
      localStorage.removeItem("token")
     localStorage.setItem("token", token);

     return result.user;
    } catch (error) {
        console.error(error)
    }
      
}
