// import { Reflector } from '@nestjs/core';

// export const Roles = Reflector.createDecorator<string[]>();

// export function matchRoles(
//   requiredRoles: string[],
//   userRoles: string[],
// ): boolean {
//   return requiredRoles.some((role) => userRoles.includes(role));
// }

import { SetMetadata } from '@nestjs/common/decorators/core/set-metadata.decorator';
import { Role } from './roles.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
