import { z } from "zod";

export const User = z.object({
    name: z.string(),
    whatWentWell: z.array(z.string()),
    whatWentWrong: z.array(z.string()),
    whatToImprove: z.array(z.string()),
    actionItems: z.array(z.string()),
});

export const Retroboard = z.object({
    users: z.array(User)
});

export function getEmptyRetroboard(): Retroboard {
    return {
        users: []
    }
}

export function isRetroboard(obj: any): obj is Retroboard {
  return obj && Array.isArray(obj.users) && obj.users.every((user: any) => 
      typeof user.name === 'string' &&
      Array.isArray(user.whatWentWell) &&
      Array.isArray(user.whatWentWrong) &&
      Array.isArray(user.whatToImprove) &&
      Array.isArray(user.actionItems)
  );
}

export type Retroboard = z.infer<typeof Retroboard>;
