import { Sql } from "postgres";
import { Session } from "../../models";

export async function findSessionById({ id }: { id: string }, client: Sql) {
  const rs = await client<Session[]>`
    SELECT
      *
    FROM
      "Session"
    WHERE
      id=${id}
`;

  return rs.length > 0 ? rs[0] : null;
}

export async function findSessionsByUserId(
  { userId }: { userId: string },
  client: Sql,
) {
  const rs = await client<Session[]>`
    SELECT
      *
    FROM
      "Session"
    WHERE
      userId=${userId}
`;

  return rs as Session[];
}

export async function createSession(
  { userId, expiresAt }: { userId: string; expiresAt: Date },
  client: Sql,
) {
  const rs = await client<{ id: string; createdAt: Date }[]>`
    INSERT INTO "Session"
      (userId, expiresAt)
    VALUES
      (${userId}, ${expiresAt}
    RETURNING
      id, createdAt
`;

  if (rs.length == 0) {
    return null;
  }

  const session = {
    id: rs[0].id,
    userId,
    createdAt: rs[0].createdAt,
    expiresAt,
  } as Session;

  return session;
}
