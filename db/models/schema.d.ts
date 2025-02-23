/*
** DON'T EDIT THIS FILE **
It's been generated by Zapatos, and is liable to be overwritten

Zapatos: https://jawj.github.io/zapatos/
Copyright (C) 2020 - 2023 George MacKerron
Released under the MIT licence: see LICENCE file
*/

declare module "zapatos/schema" {
  import type * as db from "zapatos/db";

  // got a type error on schemaVersionCanary below? update by running `npx zapatos`
  export interface schemaVersionCanary extends db.SchemaVersionCanary {
    version: 104;
  }

  /* === schema: public === */

  /* --- enums --- */
  /* (none) */

  /* --- tables --- */

  /**
   * **Session**
   * - Table in database
   */
  export namespace Session {
    export type Table = "Session";
    export interface Selectable {
      /**
       * **Session.createdAt**
       * - `timestamptz` in database
       * - `NOT NULL`, default: `now()`
       */
      createdAt: Date;
      /**
       * **Session.expiresAt**
       * - `timestamptz` in database
       * - `NOT NULL`, no default
       */
      expiresAt: Date;
      /**
       * **Session.id**
       * - `uuid` in database
       * - `NOT NULL`, default: `gen_random_uuid()`
       */
      id: string;
      /**
       * **Session.userId**
       * - `uuid` in database
       * - `NOT NULL`, no default
       */
      userId: string;
    }
    export interface JSONSelectable {
      /**
       * **Session.createdAt**
       * - `timestamptz` in database
       * - `NOT NULL`, default: `now()`
       */
      createdAt: db.TimestampTzString;
      /**
       * **Session.expiresAt**
       * - `timestamptz` in database
       * - `NOT NULL`, no default
       */
      expiresAt: db.TimestampTzString;
      /**
       * **Session.id**
       * - `uuid` in database
       * - `NOT NULL`, default: `gen_random_uuid()`
       */
      id: string;
      /**
       * **Session.userId**
       * - `uuid` in database
       * - `NOT NULL`, no default
       */
      userId: string;
    }
    export interface Whereable {
      /**
       * **Session.createdAt**
       * - `timestamptz` in database
       * - `NOT NULL`, default: `now()`
       */
      createdAt?:
        | (db.TimestampTzString | Date)
        | db.Parameter<db.TimestampTzString | Date>
        | db.SQLFragment
        | db.ParentColumn
        | db.SQLFragment<
            any,
            | (db.TimestampTzString | Date)
            | db.Parameter<db.TimestampTzString | Date>
            | db.SQLFragment
            | db.ParentColumn
          >;
      /**
       * **Session.expiresAt**
       * - `timestamptz` in database
       * - `NOT NULL`, no default
       */
      expiresAt?:
        | (db.TimestampTzString | Date)
        | db.Parameter<db.TimestampTzString | Date>
        | db.SQLFragment
        | db.ParentColumn
        | db.SQLFragment<
            any,
            | (db.TimestampTzString | Date)
            | db.Parameter<db.TimestampTzString | Date>
            | db.SQLFragment
            | db.ParentColumn
          >;
      /**
       * **Session.id**
       * - `uuid` in database
       * - `NOT NULL`, default: `gen_random_uuid()`
       */
      id?:
        | string
        | db.Parameter<string>
        | db.SQLFragment
        | db.ParentColumn
        | db.SQLFragment<
            any,
            string | db.Parameter<string> | db.SQLFragment | db.ParentColumn
          >;
      /**
       * **Session.userId**
       * - `uuid` in database
       * - `NOT NULL`, no default
       */
      userId?:
        | string
        | db.Parameter<string>
        | db.SQLFragment
        | db.ParentColumn
        | db.SQLFragment<
            any,
            string | db.Parameter<string> | db.SQLFragment | db.ParentColumn
          >;
    }
    export interface Insertable {
      /**
       * **Session.createdAt**
       * - `timestamptz` in database
       * - `NOT NULL`, default: `now()`
       */
      createdAt?:
        | (db.TimestampTzString | Date)
        | db.Parameter<db.TimestampTzString | Date>
        | db.DefaultType
        | db.SQLFragment;
      /**
       * **Session.expiresAt**
       * - `timestamptz` in database
       * - `NOT NULL`, no default
       */
      expiresAt:
        | (db.TimestampTzString | Date)
        | db.Parameter<db.TimestampTzString | Date>
        | db.SQLFragment;
      /**
       * **Session.id**
       * - `uuid` in database
       * - `NOT NULL`, default: `gen_random_uuid()`
       */
      id?: string | db.Parameter<string> | db.DefaultType | db.SQLFragment;
      /**
       * **Session.userId**
       * - `uuid` in database
       * - `NOT NULL`, no default
       */
      userId: string | db.Parameter<string> | db.SQLFragment;
    }
    export interface Updatable {
      /**
       * **Session.createdAt**
       * - `timestamptz` in database
       * - `NOT NULL`, default: `now()`
       */
      createdAt?:
        | (db.TimestampTzString | Date)
        | db.Parameter<db.TimestampTzString | Date>
        | db.DefaultType
        | db.SQLFragment
        | db.SQLFragment<
            any,
            | (db.TimestampTzString | Date)
            | db.Parameter<db.TimestampTzString | Date>
            | db.DefaultType
            | db.SQLFragment
          >;
      /**
       * **Session.expiresAt**
       * - `timestamptz` in database
       * - `NOT NULL`, no default
       */
      expiresAt?:
        | (db.TimestampTzString | Date)
        | db.Parameter<db.TimestampTzString | Date>
        | db.SQLFragment
        | db.SQLFragment<
            any,
            | (db.TimestampTzString | Date)
            | db.Parameter<db.TimestampTzString | Date>
            | db.SQLFragment
          >;
      /**
       * **Session.id**
       * - `uuid` in database
       * - `NOT NULL`, default: `gen_random_uuid()`
       */
      id?:
        | string
        | db.Parameter<string>
        | db.DefaultType
        | db.SQLFragment
        | db.SQLFragment<
            any,
            string | db.Parameter<string> | db.DefaultType | db.SQLFragment
          >;
      /**
       * **Session.userId**
       * - `uuid` in database
       * - `NOT NULL`, no default
       */
      userId?:
        | string
        | db.Parameter<string>
        | db.SQLFragment
        | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
    }
    export type UniqueIndex = "Session_pkey";
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<
      Selectable,
      T[number]
    >;
    export type SQLExpression =
      | Table
      | db.ColumnNames<Updatable | (keyof Updatable)[]>
      | db.ColumnValues<Updatable>
      | Whereable
      | Column
      | db.ParentColumn
      | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /**
   * **User**
   * - Table in database
   */
  export namespace User {
    export type Table = "User";
    export interface Selectable {
      /**
       * **User.createdAt**
       * - `timestamptz` in database
       * - `NOT NULL`, default: `now()`
       */
      createdAt: Date;
      /**
       * **User.email**
       * - `varchar` in database
       * - Nullable, no default
       */
      email: string | null;
      /**
       * **User.googleId**
       * - `text` in database
       * - Nullable, no default
       */
      googleId: string | null;
      /**
       * **User.id**
       * - `uuid` in database
       * - `NOT NULL`, default: `gen_random_uuid()`
       */
      id: string;
    }
    export interface JSONSelectable {
      /**
       * **User.createdAt**
       * - `timestamptz` in database
       * - `NOT NULL`, default: `now()`
       */
      createdAt: db.TimestampTzString;
      /**
       * **User.email**
       * - `varchar` in database
       * - Nullable, no default
       */
      email: string | null;
      /**
       * **User.googleId**
       * - `text` in database
       * - Nullable, no default
       */
      googleId: string | null;
      /**
       * **User.id**
       * - `uuid` in database
       * - `NOT NULL`, default: `gen_random_uuid()`
       */
      id: string;
    }
    export interface Whereable {
      /**
       * **User.createdAt**
       * - `timestamptz` in database
       * - `NOT NULL`, default: `now()`
       */
      createdAt?:
        | (db.TimestampTzString | Date)
        | db.Parameter<db.TimestampTzString | Date>
        | db.SQLFragment
        | db.ParentColumn
        | db.SQLFragment<
            any,
            | (db.TimestampTzString | Date)
            | db.Parameter<db.TimestampTzString | Date>
            | db.SQLFragment
            | db.ParentColumn
          >;
      /**
       * **User.email**
       * - `varchar` in database
       * - Nullable, no default
       */
      email?:
        | string
        | db.Parameter<string>
        | db.SQLFragment
        | db.ParentColumn
        | db.SQLFragment<
            any,
            string | db.Parameter<string> | db.SQLFragment | db.ParentColumn
          >;
      /**
       * **User.googleId**
       * - `text` in database
       * - Nullable, no default
       */
      googleId?:
        | string
        | db.Parameter<string>
        | db.SQLFragment
        | db.ParentColumn
        | db.SQLFragment<
            any,
            string | db.Parameter<string> | db.SQLFragment | db.ParentColumn
          >;
      /**
       * **User.id**
       * - `uuid` in database
       * - `NOT NULL`, default: `gen_random_uuid()`
       */
      id?:
        | string
        | db.Parameter<string>
        | db.SQLFragment
        | db.ParentColumn
        | db.SQLFragment<
            any,
            string | db.Parameter<string> | db.SQLFragment | db.ParentColumn
          >;
    }
    export interface Insertable {
      /**
       * **User.createdAt**
       * - `timestamptz` in database
       * - `NOT NULL`, default: `now()`
       */
      createdAt?:
        | (db.TimestampTzString | Date)
        | db.Parameter<db.TimestampTzString | Date>
        | db.DefaultType
        | db.SQLFragment;
      /**
       * **User.email**
       * - `varchar` in database
       * - Nullable, no default
       */
      email?:
        | string
        | db.Parameter<string>
        | null
        | db.DefaultType
        | db.SQLFragment;
      /**
       * **User.googleId**
       * - `text` in database
       * - Nullable, no default
       */
      googleId?:
        | string
        | db.Parameter<string>
        | null
        | db.DefaultType
        | db.SQLFragment;
      /**
       * **User.id**
       * - `uuid` in database
       * - `NOT NULL`, default: `gen_random_uuid()`
       */
      id?: string | db.Parameter<string> | db.DefaultType | db.SQLFragment;
    }
    export interface Updatable {
      /**
       * **User.createdAt**
       * - `timestamptz` in database
       * - `NOT NULL`, default: `now()`
       */
      createdAt?:
        | (db.TimestampTzString | Date)
        | db.Parameter<db.TimestampTzString | Date>
        | db.DefaultType
        | db.SQLFragment
        | db.SQLFragment<
            any,
            | (db.TimestampTzString | Date)
            | db.Parameter<db.TimestampTzString | Date>
            | db.DefaultType
            | db.SQLFragment
          >;
      /**
       * **User.email**
       * - `varchar` in database
       * - Nullable, no default
       */
      email?:
        | string
        | db.Parameter<string>
        | null
        | db.DefaultType
        | db.SQLFragment
        | db.SQLFragment<
            any,
            | string
            | db.Parameter<string>
            | null
            | db.DefaultType
            | db.SQLFragment
          >;
      /**
       * **User.googleId**
       * - `text` in database
       * - Nullable, no default
       */
      googleId?:
        | string
        | db.Parameter<string>
        | null
        | db.DefaultType
        | db.SQLFragment
        | db.SQLFragment<
            any,
            | string
            | db.Parameter<string>
            | null
            | db.DefaultType
            | db.SQLFragment
          >;
      /**
       * **User.id**
       * - `uuid` in database
       * - `NOT NULL`, default: `gen_random_uuid()`
       */
      id?:
        | string
        | db.Parameter<string>
        | db.DefaultType
        | db.SQLFragment
        | db.SQLFragment<
            any,
            string | db.Parameter<string> | db.DefaultType | db.SQLFragment
          >;
    }
    export type UniqueIndex = "User_pkey";
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<
      Selectable,
      T[number]
    >;
    export type SQLExpression =
      | Table
      | db.ColumnNames<Updatable | (keyof Updatable)[]>
      | db.ColumnValues<Updatable>
      | Whereable
      | Column
      | db.ParentColumn
      | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /* --- aggregate types --- */

  export namespace public {
    export type Table = Session.Table | User.Table;
    export type Selectable = Session.Selectable | User.Selectable;
    export type JSONSelectable = Session.JSONSelectable | User.JSONSelectable;
    export type Whereable = Session.Whereable | User.Whereable;
    export type Insertable = Session.Insertable | User.Insertable;
    export type Updatable = Session.Updatable | User.Updatable;
    export type UniqueIndex = Session.UniqueIndex | User.UniqueIndex;
    export type Column = Session.Column | User.Column;

    export type AllBaseTables = [Session.Table, User.Table];
    export type AllForeignTables = [];
    export type AllViews = [];
    export type AllMaterializedViews = [];
    export type AllTablesAndViews = [Session.Table, User.Table];
  }

  /* === global aggregate types === */

  export type Schema = "public";
  export type Table = public.Table;
  export type Selectable = public.Selectable;
  export type JSONSelectable = public.JSONSelectable;
  export type Whereable = public.Whereable;
  export type Insertable = public.Insertable;
  export type Updatable = public.Updatable;
  export type UniqueIndex = public.UniqueIndex;
  export type Column = public.Column;

  export type AllSchemas = ["public"];
  export type AllBaseTables = [...public.AllBaseTables];
  export type AllForeignTables = [...public.AllForeignTables];
  export type AllViews = [...public.AllViews];
  export type AllMaterializedViews = [...public.AllMaterializedViews];
  export type AllTablesAndViews = [...public.AllTablesAndViews];

  /* === lookups === */

  export type SelectableForTable<T extends Table> = {
    Session: Session.Selectable;
    User: User.Selectable;
  }[T];

  export type JSONSelectableForTable<T extends Table> = {
    Session: Session.JSONSelectable;
    User: User.JSONSelectable;
  }[T];

  export type WhereableForTable<T extends Table> = {
    Session: Session.Whereable;
    User: User.Whereable;
  }[T];

  export type InsertableForTable<T extends Table> = {
    Session: Session.Insertable;
    User: User.Insertable;
  }[T];

  export type UpdatableForTable<T extends Table> = {
    Session: Session.Updatable;
    User: User.Updatable;
  }[T];

  export type UniqueIndexForTable<T extends Table> = {
    Session: Session.UniqueIndex;
    User: User.UniqueIndex;
  }[T];

  export type ColumnForTable<T extends Table> = {
    Session: Session.Column;
    User: User.Column;
  }[T];

  export type SQLForTable<T extends Table> = {
    Session: Session.SQL;
    User: User.SQL;
  }[T];
}
