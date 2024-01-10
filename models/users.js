export const users = [];
  
export function addUsers(newUser) {
    users.push(newUser);
}
  
export function find(user){
    return users.find((u) => u.email == user.email && u.password == user.password);
}  