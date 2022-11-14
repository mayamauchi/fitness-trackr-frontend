const BASE_URL =  'https://fitnesstrac-kr.herokuapp.com'

export async function getRoutines() {
    const response = await fetch (`${BASE_URL}/api/routines`)
    const result = await response.json()
    const routines = result.data.routines
    return routines
}