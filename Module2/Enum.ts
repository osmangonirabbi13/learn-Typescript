//enum
//set of fixed string leteral ak jaigai rakhe 

// type UserRoles = "Admin" | "Editor" | "Viewer"

enum UserRoles {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer"
}

const canEdit = (role: UserRoles): boolean =>
    role === UserRoles.Admin || role === UserRoles.Editor;

console.log(canEdit(UserRoles.Admin)); 
console.log(canEdit(UserRoles.Viewer)); 