import _ from "lodash";

export const calculatePermission = (
  type: string = "read",
  logic: boolean = true,
  permission: number = 0
) => {
  switch (type) {
    case "read":
      permission = logic === true ? permission + 1 : permission - 1;
      break;
    case "write":
      permission = logic === true ? permission + 2 : permission - 2;
      break;
    case "execute":
      permission = logic === true ? permission + 4 : permission - 4;
      break;
    default:
      return permission;
  }
  permission < 0 ? (permission = 0) : permission;
  console.log("Util Calculated Permission: ", permission);
  return permission;
};

export const decodePermission = (permission: number) => {
  switch (permission) {
    case 0:
      return [];
    case 1:
      return ["read"];
    case 2:
      return ["write"];
    case 3:
      return ["read", "write"];
    case 4:
      return ["execute"];
    case 5:
      return ["read", "execute"];
    case 6:
      return ["write", "execute"];
    case 7:
      return ["read", "write", "execute"];
    default:
      return [];
  }
};

export const checkIfDecodePermission = (
  permission: number,
  types: Array<string>
) => {
  const founded = _.intersection(decodePermission(permission), types);
  if (founded) return founded.length > 0;
  return false;
};
