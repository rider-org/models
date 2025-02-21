import { Sql } from "postgres"
import { User } from "../../models";

export async function findUserById({ userId }: { userId: string }, client: Sql) {
  const rs = await client<User[]>`
    SELECT
        *
    FROM
      "User"
    WHERE
      id=${userId}
`

  return rs.length > 0 ? rs[0] : null;
}

