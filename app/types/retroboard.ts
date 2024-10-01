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

export function getSampleRetroboard(): Retroboard {
  return {
      users: [
          {
              name: "Faraz",
              whatWentWell: ["Worked really hard", "Put in long hours"],
              whatWentWrong: ["Had no idea how much work we were going to do"],
              whatToImprove: [],
              actionItems: [
                  "Get key stakeholders involved at the beginning of planning (Owner: Faraz)",
                  "Prioritize work to handle unexpected absences (Owner: Faraz)"
              ]
          },
          {
              name: "Steven",
              whatWentWell: ["Accomplished at least one key goal"],
              whatWentWrong: ["Got really sick, couldn't get anything done"],
              whatToImprove: ["Prioritize work to handle unexpected absences"],
              actionItems: []
          },
          {
              name: "Jeremy",
              whatWentWell: ["Agreed with Faraz and Steven on positives"],
              whatWentWrong: [],
              whatToImprove: [],
              actionItems: []
          }
      ]
  };
}