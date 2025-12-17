function createUser(name, ...info) {
  return {
    username: name,
    details: info,
  };
}

console.log(createUser("Hanad", 20, "Mogadishu", "Student"));
