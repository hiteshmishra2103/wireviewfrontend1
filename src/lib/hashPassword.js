// const bcrypt = require("bcryptjs");

// export const hashPassword = async (password) => {
//   try {
//     // Generate a salt (a random value to make each hash unique)
//     const saltRounds = 10; // You can adjust the number of rounds for security
//     const salt = await bcrypt.genSalt(saltRounds);

//     // Hash the password with the generated salt
//     const hashedPassword = await bcrypt.hash(password, salt);

//     return hashedPassword;
//   } catch (error) {
//     throw error;
//   }
// };
