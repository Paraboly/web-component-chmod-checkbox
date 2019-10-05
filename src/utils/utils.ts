import _ from "lodash";

export const calculatePermission = (
  type: string = "read",
  isChecked: boolean,
  permission: number
) => {
  let _permission = permission;
  switch (type) {
    case "read":
      _permission = isChecked ? _permission + 1 : _permission - 1;
      break;
    case "write":
      _permission = isChecked ? _permission + 2 : _permission - 2;
      break;
    case "execute":
      _permission = isChecked ? _permission + 4 : _permission - 4;
      break;
    default:
      return _permission;
  }
  _permission < 0 ? (_permission = 0) : _permission;
  _permission > 7 ? (_permission = 7) : _permission;
  console.log("Util Calculated Permission: ", _permission);
  return _permission;
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
