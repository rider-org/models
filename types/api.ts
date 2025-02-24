type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type SuccessType<T = unknown, TDebug = never> = {
  success: true;
  message: string;
  data: T;
  _debug: TDebug;
};

export type ErrorType<TDebug = never> = {
  success: false;
  message: string;
  _debug: TDebug;
};

/**
 * Default API standard response.
 * If you are in development, simply pass a debug object type to pass in additional information, without leaking it into production by accident.
 */
export type ApiDefault<T = unknown, TDebug = never> = Prettify<
  SuccessType<T, TDebug> | ErrorType<TDebug>
>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DebugDefault<T = any> = Prettify<
  { message: string; date: Date } & Record<string, T>
>;
