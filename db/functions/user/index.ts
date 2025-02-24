import { Sql } from "postgres";
import { User } from "../../entities";

export async function findUserById({ id }: { id: string }, client: Sql) {
  const rs = await client<User[]>`
    SELECT
        *
    FROM
      "User"
    WHERE
      id=${id}
`;

  return rs.length > 0 ? rs[0] : null;
}

export async function findUserByGoogleId(
  { googleId }: { googleId: string },
  client: Sql,
) {
  const rs = await client<User[]>`
    SELECT
      *
    FROM
      "User"
    WHERE
      googleId=${googleId}
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
