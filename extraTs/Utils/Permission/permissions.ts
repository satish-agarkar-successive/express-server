import { permissions } from '../../constants';

export function hasPermission(moduleName: string, role: string, permissionType: string) {
  if (permissions.hasOwnProperty(moduleName)) {
    if (permissions[moduleName].hasOwnProperty(permissionType)
    || permissions[moduleName].hasOwnProperty('all')) {
      if (permissions[moduleName][permissionType].includes(role)
      || permissions[moduleName]['all'].includes(role)) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
}