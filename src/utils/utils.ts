export function calculatePermission(
  type: string,
  logic: boolean,
  permission: number
) {
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
  console.log("Permission: ", permission);
  return permission;
}

export function format(first: string, middle: string, last: string): string {
  return (
    (first || "") + (middle ? ` ${middle}` : "") + (last ? ` ${last}` : "")
  );
}
