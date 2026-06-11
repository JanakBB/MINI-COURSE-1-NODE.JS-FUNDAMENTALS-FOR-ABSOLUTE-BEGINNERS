function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    if (userId) {
      resolve({ id: userId, name: `UserName${userId}` });
    } else {
      reject(new Error("Something went wrong"));
    }
  });
}
// promise error handling
fetchUser(999)
  .then((user) => console.log(user))
  .catch((error) => console.error("Error fetching user:", error.message));

// Async/Await error handling
async function getUserSafely(userId) {
  try {
    const user = await fetchUser(userId);
    console.log("User found:", user);
    return user;
  } catch (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }
}

getUserSafely();
