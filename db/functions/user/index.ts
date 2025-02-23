import { Sql } from "postgres";
import { User } from "../../models";

export async function findUserById(
  { userId }: { userId: string },
  client: Sql,
) {
  const rs = await client<User[]>`
    SELECT
        *
    FROM
      "User"
    WHERE
      id=${userId}
`;

  return rs.length > 0 ? rs[0] : null;
}

export async function createUser(
  { email, googleId }: { email?: string; googleId?: string },
  client: Sql,
) {
  const rs = await client<{ id: string }[]>`
      INSERT INTO "User"
        (email, googleId)
      VALUES
        (${email ?? null}, ${googleId ?? null})
      RETURNING
        id
`;

  if (rs.length == 0) {
    return null;
  }

  const user = { email, googleId, id: rs[0].id } as User;
  return user;
}
