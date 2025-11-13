// As const
const UserRoles1 = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;

const canEdit1 = (role: keyof typeof UserRoles1) => {
  if (role === UserRoles1.Admin || role === UserRoles1.Editor) {
    return true;
  } else {
    return false;
  }
};

const result = canEdit1(UserRoles1.Admin);

console.log(result);
