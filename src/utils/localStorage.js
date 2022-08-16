

export const addUserTolocalStorage = (user) => {
localStorage.setItem('user', JSON.stringify(user))
}

export const removeUserFromLocal = () => {
  localStorage.removeItem('user')
}

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user')
  const user = result ? JSON.parse(result): null
  return user
}