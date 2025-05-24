
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Festival
 * 
 */
export type Festival = $Result.DefaultSelection<Prisma.$FestivalPayload>
/**
 * Model ScheduleEvent
 * 
 */
export type ScheduleEvent = $Result.DefaultSelection<Prisma.$ScheduleEventPayload>
/**
 * Model Artist
 * 
 */
export type Artist = $Result.DefaultSelection<Prisma.$ArtistPayload>
/**
 * Model ArtistOnScheduleEvent
 * 
 */
export type ArtistOnScheduleEvent = $Result.DefaultSelection<Prisma.$ArtistOnScheduleEventPayload>
/**
 * Model Booth
 * 
 */
export type Booth = $Result.DefaultSelection<Prisma.$BoothPayload>
/**
 * Model BoothOperator
 * 
 */
export type BoothOperator = $Result.DefaultSelection<Prisma.$BoothOperatorPayload>
/**
 * Model MenuItem
 * 
 */
export type MenuItem = $Result.DefaultSelection<Prisma.$MenuItemPayload>
/**
 * Model Notice
 * 
 */
export type Notice = $Result.DefaultSelection<Prisma.$NoticePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.festival`: Exposes CRUD operations for the **Festival** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Festivals
    * const festivals = await prisma.festival.findMany()
    * ```
    */
  get festival(): Prisma.FestivalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scheduleEvent`: Exposes CRUD operations for the **ScheduleEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScheduleEvents
    * const scheduleEvents = await prisma.scheduleEvent.findMany()
    * ```
    */
  get scheduleEvent(): Prisma.ScheduleEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artist`: Exposes CRUD operations for the **Artist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artist.findMany()
    * ```
    */
  get artist(): Prisma.ArtistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artistOnScheduleEvent`: Exposes CRUD operations for the **ArtistOnScheduleEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArtistOnScheduleEvents
    * const artistOnScheduleEvents = await prisma.artistOnScheduleEvent.findMany()
    * ```
    */
  get artistOnScheduleEvent(): Prisma.ArtistOnScheduleEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booth`: Exposes CRUD operations for the **Booth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Booths
    * const booths = await prisma.booth.findMany()
    * ```
    */
  get booth(): Prisma.BoothDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.boothOperator`: Exposes CRUD operations for the **BoothOperator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoothOperators
    * const boothOperators = await prisma.boothOperator.findMany()
    * ```
    */
  get boothOperator(): Prisma.BoothOperatorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menuItem`: Exposes CRUD operations for the **MenuItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuItems
    * const menuItems = await prisma.menuItem.findMany()
    * ```
    */
  get menuItem(): Prisma.MenuItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notice`: Exposes CRUD operations for the **Notice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notices
    * const notices = await prisma.notice.findMany()
    * ```
    */
  get notice(): Prisma.NoticeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Festival: 'Festival',
    ScheduleEvent: 'ScheduleEvent',
    Artist: 'Artist',
    ArtistOnScheduleEvent: 'ArtistOnScheduleEvent',
    Booth: 'Booth',
    BoothOperator: 'BoothOperator',
    MenuItem: 'MenuItem',
    Notice: 'Notice'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "festival" | "scheduleEvent" | "artist" | "artistOnScheduleEvent" | "booth" | "boothOperator" | "menuItem" | "notice"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Festival: {
        payload: Prisma.$FestivalPayload<ExtArgs>
        fields: Prisma.FestivalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FestivalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FestivalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>
          }
          findFirst: {
            args: Prisma.FestivalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FestivalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>
          }
          findMany: {
            args: Prisma.FestivalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>[]
          }
          create: {
            args: Prisma.FestivalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>
          }
          createMany: {
            args: Prisma.FestivalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FestivalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>[]
          }
          delete: {
            args: Prisma.FestivalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>
          }
          update: {
            args: Prisma.FestivalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>
          }
          deleteMany: {
            args: Prisma.FestivalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FestivalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FestivalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>[]
          }
          upsert: {
            args: Prisma.FestivalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>
          }
          aggregate: {
            args: Prisma.FestivalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFestival>
          }
          groupBy: {
            args: Prisma.FestivalGroupByArgs<ExtArgs>
            result: $Utils.Optional<FestivalGroupByOutputType>[]
          }
          count: {
            args: Prisma.FestivalCountArgs<ExtArgs>
            result: $Utils.Optional<FestivalCountAggregateOutputType> | number
          }
        }
      }
      ScheduleEvent: {
        payload: Prisma.$ScheduleEventPayload<ExtArgs>
        fields: Prisma.ScheduleEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleEventPayload>
          }
          findFirst: {
            args: Prisma.ScheduleEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleEventPayload>
          }
          findMany: {
            args: Prisma.ScheduleEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleEventPayload>[]
          }
          create: {
            args: Prisma.ScheduleEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleEventPayload>
          }
          createMany: {
            args: Prisma.ScheduleEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleEventPayload>[]
          }
          delete: {
            args: Prisma.ScheduleEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleEventPayload>
          }
          update: {
            args: Prisma.ScheduleEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleEventPayload>
          }
          deleteMany: {
            args: Prisma.ScheduleEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleEventPayload>[]
          }
          upsert: {
            args: Prisma.ScheduleEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleEventPayload>
          }
          aggregate: {
            args: Prisma.ScheduleEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduleEvent>
          }
          groupBy: {
            args: Prisma.ScheduleEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleEventCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleEventCountAggregateOutputType> | number
          }
        }
      }
      Artist: {
        payload: Prisma.$ArtistPayload<ExtArgs>
        fields: Prisma.ArtistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findFirst: {
            args: Prisma.ArtistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findMany: {
            args: Prisma.ArtistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          create: {
            args: Prisma.ArtistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          createMany: {
            args: Prisma.ArtistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          delete: {
            args: Prisma.ArtistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          update: {
            args: Prisma.ArtistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          deleteMany: {
            args: Prisma.ArtistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          upsert: {
            args: Prisma.ArtistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          aggregate: {
            args: Prisma.ArtistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtist>
          }
          groupBy: {
            args: Prisma.ArtistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistCountAggregateOutputType> | number
          }
        }
      }
      ArtistOnScheduleEvent: {
        payload: Prisma.$ArtistOnScheduleEventPayload<ExtArgs>
        fields: Prisma.ArtistOnScheduleEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistOnScheduleEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistOnScheduleEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistOnScheduleEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistOnScheduleEventPayload>
          }
          findFirst: {
            args: Prisma.ArtistOnScheduleEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistOnScheduleEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistOnScheduleEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistOnScheduleEventPayload>
          }
          findMany: {
            args: Prisma.ArtistOnScheduleEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistOnScheduleEventPayload>[]
          }
          create: {
            args: Prisma.ArtistOnScheduleEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistOnScheduleEventPayload>
          }
          createMany: {
            args: Prisma.ArtistOnScheduleEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistOnScheduleEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistOnScheduleEventPayload>[]
          }
          delete: {
            args: Prisma.ArtistOnScheduleEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistOnScheduleEventPayload>
          }
          update: {
            args: Prisma.ArtistOnScheduleEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistOnScheduleEventPayload>
          }
          deleteMany: {
            args: Prisma.ArtistOnScheduleEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistOnScheduleEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtistOnScheduleEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistOnScheduleEventPayload>[]
          }
          upsert: {
            args: Prisma.ArtistOnScheduleEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistOnScheduleEventPayload>
          }
          aggregate: {
            args: Prisma.ArtistOnScheduleEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtistOnScheduleEvent>
          }
          groupBy: {
            args: Prisma.ArtistOnScheduleEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistOnScheduleEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistOnScheduleEventCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistOnScheduleEventCountAggregateOutputType> | number
          }
        }
      }
      Booth: {
        payload: Prisma.$BoothPayload<ExtArgs>
        fields: Prisma.BoothFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoothFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoothFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothPayload>
          }
          findFirst: {
            args: Prisma.BoothFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoothFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothPayload>
          }
          findMany: {
            args: Prisma.BoothFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothPayload>[]
          }
          create: {
            args: Prisma.BoothCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothPayload>
          }
          createMany: {
            args: Prisma.BoothCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoothCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothPayload>[]
          }
          delete: {
            args: Prisma.BoothDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothPayload>
          }
          update: {
            args: Prisma.BoothUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothPayload>
          }
          deleteMany: {
            args: Prisma.BoothDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoothUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BoothUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothPayload>[]
          }
          upsert: {
            args: Prisma.BoothUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothPayload>
          }
          aggregate: {
            args: Prisma.BoothAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooth>
          }
          groupBy: {
            args: Prisma.BoothGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoothGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoothCountArgs<ExtArgs>
            result: $Utils.Optional<BoothCountAggregateOutputType> | number
          }
        }
      }
      BoothOperator: {
        payload: Prisma.$BoothOperatorPayload<ExtArgs>
        fields: Prisma.BoothOperatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoothOperatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothOperatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoothOperatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothOperatorPayload>
          }
          findFirst: {
            args: Prisma.BoothOperatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothOperatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoothOperatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothOperatorPayload>
          }
          findMany: {
            args: Prisma.BoothOperatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothOperatorPayload>[]
          }
          create: {
            args: Prisma.BoothOperatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothOperatorPayload>
          }
          createMany: {
            args: Prisma.BoothOperatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoothOperatorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothOperatorPayload>[]
          }
          delete: {
            args: Prisma.BoothOperatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothOperatorPayload>
          }
          update: {
            args: Prisma.BoothOperatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothOperatorPayload>
          }
          deleteMany: {
            args: Prisma.BoothOperatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoothOperatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BoothOperatorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothOperatorPayload>[]
          }
          upsert: {
            args: Prisma.BoothOperatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothOperatorPayload>
          }
          aggregate: {
            args: Prisma.BoothOperatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoothOperator>
          }
          groupBy: {
            args: Prisma.BoothOperatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoothOperatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoothOperatorCountArgs<ExtArgs>
            result: $Utils.Optional<BoothOperatorCountAggregateOutputType> | number
          }
        }
      }
      MenuItem: {
        payload: Prisma.$MenuItemPayload<ExtArgs>
        fields: Prisma.MenuItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findFirst: {
            args: Prisma.MenuItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findMany: {
            args: Prisma.MenuItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          create: {
            args: Prisma.MenuItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          createMany: {
            args: Prisma.MenuItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          delete: {
            args: Prisma.MenuItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          update: {
            args: Prisma.MenuItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          deleteMany: {
            args: Prisma.MenuItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          upsert: {
            args: Prisma.MenuItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          aggregate: {
            args: Prisma.MenuItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuItem>
          }
          groupBy: {
            args: Prisma.MenuItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuItemCountArgs<ExtArgs>
            result: $Utils.Optional<MenuItemCountAggregateOutputType> | number
          }
        }
      }
      Notice: {
        payload: Prisma.$NoticePayload<ExtArgs>
        fields: Prisma.NoticeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoticeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoticeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          findFirst: {
            args: Prisma.NoticeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoticeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          findMany: {
            args: Prisma.NoticeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>[]
          }
          create: {
            args: Prisma.NoticeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          createMany: {
            args: Prisma.NoticeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoticeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>[]
          }
          delete: {
            args: Prisma.NoticeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          update: {
            args: Prisma.NoticeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          deleteMany: {
            args: Prisma.NoticeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoticeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoticeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>[]
          }
          upsert: {
            args: Prisma.NoticeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          aggregate: {
            args: Prisma.NoticeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotice>
          }
          groupBy: {
            args: Prisma.NoticeGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoticeGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoticeCountArgs<ExtArgs>
            result: $Utils.Optional<NoticeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    festival?: FestivalOmit
    scheduleEvent?: ScheduleEventOmit
    artist?: ArtistOmit
    artistOnScheduleEvent?: ArtistOnScheduleEventOmit
    booth?: BoothOmit
    boothOperator?: BoothOperatorOmit
    menuItem?: MenuItemOmit
    notice?: NoticeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    operatedBooths: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operatedBooths?: boolean | UserCountOutputTypeCountOperatedBoothsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOperatedBoothsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoothWhereInput
  }


  /**
   * Count Type FestivalCountOutputType
   */

  export type FestivalCountOutputType = {
    scheduleEvents: number
    booths: number
    notices: number
  }

  export type FestivalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduleEvents?: boolean | FestivalCountOutputTypeCountScheduleEventsArgs
    booths?: boolean | FestivalCountOutputTypeCountBoothsArgs
    notices?: boolean | FestivalCountOutputTypeCountNoticesArgs
  }

  // Custom InputTypes
  /**
   * FestivalCountOutputType without action
   */
  export type FestivalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FestivalCountOutputType
     */
    select?: FestivalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FestivalCountOutputType without action
   */
  export type FestivalCountOutputTypeCountScheduleEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleEventWhereInput
  }

  /**
   * FestivalCountOutputType without action
   */
  export type FestivalCountOutputTypeCountBoothsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoothWhereInput
  }

  /**
   * FestivalCountOutputType without action
   */
  export type FestivalCountOutputTypeCountNoticesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticeWhereInput
  }


  /**
   * Count Type ScheduleEventCountOutputType
   */

  export type ScheduleEventCountOutputType = {
    artists: number
  }

  export type ScheduleEventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artists?: boolean | ScheduleEventCountOutputTypeCountArtistsArgs
  }

  // Custom InputTypes
  /**
   * ScheduleEventCountOutputType without action
   */
  export type ScheduleEventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleEventCountOutputType
     */
    select?: ScheduleEventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScheduleEventCountOutputType without action
   */
  export type ScheduleEventCountOutputTypeCountArtistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistOnScheduleEventWhereInput
  }


  /**
   * Count Type ArtistCountOutputType
   */

  export type ArtistCountOutputType = {
    scheduleEvents: number
  }

  export type ArtistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduleEvents?: boolean | ArtistCountOutputTypeCountScheduleEventsArgs
  }

  // Custom InputTypes
  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistCountOutputType
     */
    select?: ArtistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountScheduleEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistOnScheduleEventWhereInput
  }


  /**
   * Count Type BoothCountOutputType
   */

  export type BoothCountOutputType = {
    menuItems: number
  }

  export type BoothCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItems?: boolean | BoothCountOutputTypeCountMenuItemsArgs
  }

  // Custom InputTypes
  /**
   * BoothCountOutputType without action
   */
  export type BoothCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoothCountOutputType
     */
    select?: BoothCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BoothCountOutputType without action
   */
  export type BoothCountOutputTypeCountMenuItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
  }


  /**
   * Count Type BoothOperatorCountOutputType
   */

  export type BoothOperatorCountOutputType = {
    booths: number
  }

  export type BoothOperatorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booths?: boolean | BoothOperatorCountOutputTypeCountBoothsArgs
  }

  // Custom InputTypes
  /**
   * BoothOperatorCountOutputType without action
   */
  export type BoothOperatorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoothOperatorCountOutputType
     */
    select?: BoothOperatorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BoothOperatorCountOutputType without action
   */
  export type BoothOperatorCountOutputTypeCountBoothsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoothWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    authUserId: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    authUserId: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    authUserId: number
    name: number
    email: number
    emailVerified: number
    image: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    authUserId?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    authUserId?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    authUserId?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    authUserId: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authUserId?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    operatedBooths?: boolean | User$operatedBoothsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authUserId?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authUserId?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    authUserId?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authUserId" | "name" | "email" | "emailVerified" | "image" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operatedBooths?: boolean | User$operatedBoothsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      operatedBooths: Prisma.$BoothPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authUserId: string | null
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operatedBooths<T extends User$operatedBoothsArgs<ExtArgs> = {}>(args?: Subset<T, User$operatedBoothsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoothPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly authUserId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.operatedBooths
   */
  export type User$operatedBoothsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booth
     */
    select?: BoothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booth
     */
    omit?: BoothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothInclude<ExtArgs> | null
    where?: BoothWhereInput
    orderBy?: BoothOrderByWithRelationInput | BoothOrderByWithRelationInput[]
    cursor?: BoothWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoothScalarFieldEnum | BoothScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Festival
   */

  export type AggregateFestival = {
    _count: FestivalCountAggregateOutputType | null
    _avg: FestivalAvgAggregateOutputType | null
    _sum: FestivalSumAggregateOutputType | null
    _min: FestivalMinAggregateOutputType | null
    _max: FestivalMaxAggregateOutputType | null
  }

  export type FestivalAvgAggregateOutputType = {
    year: number | null
  }

  export type FestivalSumAggregateOutputType = {
    year: number | null
  }

  export type FestivalMinAggregateOutputType = {
    id: string | null
    name: string | null
    year: number | null
    startDate: Date | null
    endDate: Date | null
    theme: string | null
    description: string | null
    posterUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FestivalMaxAggregateOutputType = {
    id: string | null
    name: string | null
    year: number | null
    startDate: Date | null
    endDate: Date | null
    theme: string | null
    description: string | null
    posterUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FestivalCountAggregateOutputType = {
    id: number
    name: number
    year: number
    startDate: number
    endDate: number
    theme: number
    description: number
    posterUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FestivalAvgAggregateInputType = {
    year?: true
  }

  export type FestivalSumAggregateInputType = {
    year?: true
  }

  export type FestivalMinAggregateInputType = {
    id?: true
    name?: true
    year?: true
    startDate?: true
    endDate?: true
    theme?: true
    description?: true
    posterUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FestivalMaxAggregateInputType = {
    id?: true
    name?: true
    year?: true
    startDate?: true
    endDate?: true
    theme?: true
    description?: true
    posterUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FestivalCountAggregateInputType = {
    id?: true
    name?: true
    year?: true
    startDate?: true
    endDate?: true
    theme?: true
    description?: true
    posterUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FestivalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Festival to aggregate.
     */
    where?: FestivalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Festivals to fetch.
     */
    orderBy?: FestivalOrderByWithRelationInput | FestivalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FestivalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Festivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Festivals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Festivals
    **/
    _count?: true | FestivalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FestivalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FestivalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FestivalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FestivalMaxAggregateInputType
  }

  export type GetFestivalAggregateType<T extends FestivalAggregateArgs> = {
        [P in keyof T & keyof AggregateFestival]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFestival[P]>
      : GetScalarType<T[P], AggregateFestival[P]>
  }




  export type FestivalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FestivalWhereInput
    orderBy?: FestivalOrderByWithAggregationInput | FestivalOrderByWithAggregationInput[]
    by: FestivalScalarFieldEnum[] | FestivalScalarFieldEnum
    having?: FestivalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FestivalCountAggregateInputType | true
    _avg?: FestivalAvgAggregateInputType
    _sum?: FestivalSumAggregateInputType
    _min?: FestivalMinAggregateInputType
    _max?: FestivalMaxAggregateInputType
  }

  export type FestivalGroupByOutputType = {
    id: string
    name: string
    year: number
    startDate: Date
    endDate: Date
    theme: string | null
    description: string | null
    posterUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: FestivalCountAggregateOutputType | null
    _avg: FestivalAvgAggregateOutputType | null
    _sum: FestivalSumAggregateOutputType | null
    _min: FestivalMinAggregateOutputType | null
    _max: FestivalMaxAggregateOutputType | null
  }

  type GetFestivalGroupByPayload<T extends FestivalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FestivalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FestivalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FestivalGroupByOutputType[P]>
            : GetScalarType<T[P], FestivalGroupByOutputType[P]>
        }
      >
    >


  export type FestivalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    year?: boolean
    startDate?: boolean
    endDate?: boolean
    theme?: boolean
    description?: boolean
    posterUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    scheduleEvents?: boolean | Festival$scheduleEventsArgs<ExtArgs>
    booths?: boolean | Festival$boothsArgs<ExtArgs>
    notices?: boolean | Festival$noticesArgs<ExtArgs>
    _count?: boolean | FestivalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["festival"]>

  export type FestivalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    year?: boolean
    startDate?: boolean
    endDate?: boolean
    theme?: boolean
    description?: boolean
    posterUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["festival"]>

  export type FestivalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    year?: boolean
    startDate?: boolean
    endDate?: boolean
    theme?: boolean
    description?: boolean
    posterUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["festival"]>

  export type FestivalSelectScalar = {
    id?: boolean
    name?: boolean
    year?: boolean
    startDate?: boolean
    endDate?: boolean
    theme?: boolean
    description?: boolean
    posterUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FestivalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "year" | "startDate" | "endDate" | "theme" | "description" | "posterUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["festival"]>
  export type FestivalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduleEvents?: boolean | Festival$scheduleEventsArgs<ExtArgs>
    booths?: boolean | Festival$boothsArgs<ExtArgs>
    notices?: boolean | Festival$noticesArgs<ExtArgs>
    _count?: boolean | FestivalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FestivalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FestivalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FestivalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Festival"
    objects: {
      scheduleEvents: Prisma.$ScheduleEventPayload<ExtArgs>[]
      booths: Prisma.$BoothPayload<ExtArgs>[]
      notices: Prisma.$NoticePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      year: number
      startDate: Date
      endDate: Date
      theme: string | null
      description: string | null
      posterUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["festival"]>
    composites: {}
  }

  type FestivalGetPayload<S extends boolean | null | undefined | FestivalDefaultArgs> = $Result.GetResult<Prisma.$FestivalPayload, S>

  type FestivalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FestivalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FestivalCountAggregateInputType | true
    }

  export interface FestivalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Festival'], meta: { name: 'Festival' } }
    /**
     * Find zero or one Festival that matches the filter.
     * @param {FestivalFindUniqueArgs} args - Arguments to find a Festival
     * @example
     * // Get one Festival
     * const festival = await prisma.festival.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FestivalFindUniqueArgs>(args: SelectSubset<T, FestivalFindUniqueArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Festival that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FestivalFindUniqueOrThrowArgs} args - Arguments to find a Festival
     * @example
     * // Get one Festival
     * const festival = await prisma.festival.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FestivalFindUniqueOrThrowArgs>(args: SelectSubset<T, FestivalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Festival that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalFindFirstArgs} args - Arguments to find a Festival
     * @example
     * // Get one Festival
     * const festival = await prisma.festival.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FestivalFindFirstArgs>(args?: SelectSubset<T, FestivalFindFirstArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Festival that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalFindFirstOrThrowArgs} args - Arguments to find a Festival
     * @example
     * // Get one Festival
     * const festival = await prisma.festival.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FestivalFindFirstOrThrowArgs>(args?: SelectSubset<T, FestivalFindFirstOrThrowArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Festivals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Festivals
     * const festivals = await prisma.festival.findMany()
     * 
     * // Get first 10 Festivals
     * const festivals = await prisma.festival.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const festivalWithIdOnly = await prisma.festival.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FestivalFindManyArgs>(args?: SelectSubset<T, FestivalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Festival.
     * @param {FestivalCreateArgs} args - Arguments to create a Festival.
     * @example
     * // Create one Festival
     * const Festival = await prisma.festival.create({
     *   data: {
     *     // ... data to create a Festival
     *   }
     * })
     * 
     */
    create<T extends FestivalCreateArgs>(args: SelectSubset<T, FestivalCreateArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Festivals.
     * @param {FestivalCreateManyArgs} args - Arguments to create many Festivals.
     * @example
     * // Create many Festivals
     * const festival = await prisma.festival.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FestivalCreateManyArgs>(args?: SelectSubset<T, FestivalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Festivals and returns the data saved in the database.
     * @param {FestivalCreateManyAndReturnArgs} args - Arguments to create many Festivals.
     * @example
     * // Create many Festivals
     * const festival = await prisma.festival.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Festivals and only return the `id`
     * const festivalWithIdOnly = await prisma.festival.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FestivalCreateManyAndReturnArgs>(args?: SelectSubset<T, FestivalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Festival.
     * @param {FestivalDeleteArgs} args - Arguments to delete one Festival.
     * @example
     * // Delete one Festival
     * const Festival = await prisma.festival.delete({
     *   where: {
     *     // ... filter to delete one Festival
     *   }
     * })
     * 
     */
    delete<T extends FestivalDeleteArgs>(args: SelectSubset<T, FestivalDeleteArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Festival.
     * @param {FestivalUpdateArgs} args - Arguments to update one Festival.
     * @example
     * // Update one Festival
     * const festival = await prisma.festival.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FestivalUpdateArgs>(args: SelectSubset<T, FestivalUpdateArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Festivals.
     * @param {FestivalDeleteManyArgs} args - Arguments to filter Festivals to delete.
     * @example
     * // Delete a few Festivals
     * const { count } = await prisma.festival.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FestivalDeleteManyArgs>(args?: SelectSubset<T, FestivalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Festivals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Festivals
     * const festival = await prisma.festival.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FestivalUpdateManyArgs>(args: SelectSubset<T, FestivalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Festivals and returns the data updated in the database.
     * @param {FestivalUpdateManyAndReturnArgs} args - Arguments to update many Festivals.
     * @example
     * // Update many Festivals
     * const festival = await prisma.festival.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Festivals and only return the `id`
     * const festivalWithIdOnly = await prisma.festival.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FestivalUpdateManyAndReturnArgs>(args: SelectSubset<T, FestivalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Festival.
     * @param {FestivalUpsertArgs} args - Arguments to update or create a Festival.
     * @example
     * // Update or create a Festival
     * const festival = await prisma.festival.upsert({
     *   create: {
     *     // ... data to create a Festival
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Festival we want to update
     *   }
     * })
     */
    upsert<T extends FestivalUpsertArgs>(args: SelectSubset<T, FestivalUpsertArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Festivals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalCountArgs} args - Arguments to filter Festivals to count.
     * @example
     * // Count the number of Festivals
     * const count = await prisma.festival.count({
     *   where: {
     *     // ... the filter for the Festivals we want to count
     *   }
     * })
    **/
    count<T extends FestivalCountArgs>(
      args?: Subset<T, FestivalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FestivalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Festival.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FestivalAggregateArgs>(args: Subset<T, FestivalAggregateArgs>): Prisma.PrismaPromise<GetFestivalAggregateType<T>>

    /**
     * Group by Festival.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FestivalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FestivalGroupByArgs['orderBy'] }
        : { orderBy?: FestivalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FestivalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFestivalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Festival model
   */
  readonly fields: FestivalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Festival.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FestivalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scheduleEvents<T extends Festival$scheduleEventsArgs<ExtArgs> = {}>(args?: Subset<T, Festival$scheduleEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    booths<T extends Festival$boothsArgs<ExtArgs> = {}>(args?: Subset<T, Festival$boothsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoothPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notices<T extends Festival$noticesArgs<ExtArgs> = {}>(args?: Subset<T, Festival$noticesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Festival model
   */
  interface FestivalFieldRefs {
    readonly id: FieldRef<"Festival", 'String'>
    readonly name: FieldRef<"Festival", 'String'>
    readonly year: FieldRef<"Festival", 'Int'>
    readonly startDate: FieldRef<"Festival", 'DateTime'>
    readonly endDate: FieldRef<"Festival", 'DateTime'>
    readonly theme: FieldRef<"Festival", 'String'>
    readonly description: FieldRef<"Festival", 'String'>
    readonly posterUrl: FieldRef<"Festival", 'String'>
    readonly createdAt: FieldRef<"Festival", 'DateTime'>
    readonly updatedAt: FieldRef<"Festival", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Festival findUnique
   */
  export type FestivalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * Filter, which Festival to fetch.
     */
    where: FestivalWhereUniqueInput
  }

  /**
   * Festival findUniqueOrThrow
   */
  export type FestivalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * Filter, which Festival to fetch.
     */
    where: FestivalWhereUniqueInput
  }

  /**
   * Festival findFirst
   */
  export type FestivalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * Filter, which Festival to fetch.
     */
    where?: FestivalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Festivals to fetch.
     */
    orderBy?: FestivalOrderByWithRelationInput | FestivalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Festivals.
     */
    cursor?: FestivalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Festivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Festivals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Festivals.
     */
    distinct?: FestivalScalarFieldEnum | FestivalScalarFieldEnum[]
  }

  /**
   * Festival findFirstOrThrow
   */
  export type FestivalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * Filter, which Festival to fetch.
     */
    where?: FestivalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Festivals to fetch.
     */
    orderBy?: FestivalOrderByWithRelationInput | FestivalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Festivals.
     */
    cursor?: FestivalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Festivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Festivals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Festivals.
     */
    distinct?: FestivalScalarFieldEnum | FestivalScalarFieldEnum[]
  }

  /**
   * Festival findMany
   */
  export type FestivalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * Filter, which Festivals to fetch.
     */
    where?: FestivalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Festivals to fetch.
     */
    orderBy?: FestivalOrderByWithRelationInput | FestivalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Festivals.
     */
    cursor?: FestivalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Festivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Festivals.
     */
    skip?: number
    distinct?: FestivalScalarFieldEnum | FestivalScalarFieldEnum[]
  }

  /**
   * Festival create
   */
  export type FestivalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * The data needed to create a Festival.
     */
    data: XOR<FestivalCreateInput, FestivalUncheckedCreateInput>
  }

  /**
   * Festival createMany
   */
  export type FestivalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Festivals.
     */
    data: FestivalCreateManyInput | FestivalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Festival createManyAndReturn
   */
  export type FestivalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * The data used to create many Festivals.
     */
    data: FestivalCreateManyInput | FestivalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Festival update
   */
  export type FestivalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * The data needed to update a Festival.
     */
    data: XOR<FestivalUpdateInput, FestivalUncheckedUpdateInput>
    /**
     * Choose, which Festival to update.
     */
    where: FestivalWhereUniqueInput
  }

  /**
   * Festival updateMany
   */
  export type FestivalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Festivals.
     */
    data: XOR<FestivalUpdateManyMutationInput, FestivalUncheckedUpdateManyInput>
    /**
     * Filter which Festivals to update
     */
    where?: FestivalWhereInput
    /**
     * Limit how many Festivals to update.
     */
    limit?: number
  }

  /**
   * Festival updateManyAndReturn
   */
  export type FestivalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * The data used to update Festivals.
     */
    data: XOR<FestivalUpdateManyMutationInput, FestivalUncheckedUpdateManyInput>
    /**
     * Filter which Festivals to update
     */
    where?: FestivalWhereInput
    /**
     * Limit how many Festivals to update.
     */
    limit?: number
  }

  /**
   * Festival upsert
   */
  export type FestivalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * The filter to search for the Festival to update in case it exists.
     */
    where: FestivalWhereUniqueInput
    /**
     * In case the Festival found by the `where` argument doesn't exist, create a new Festival with this data.
     */
    create: XOR<FestivalCreateInput, FestivalUncheckedCreateInput>
    /**
     * In case the Festival was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FestivalUpdateInput, FestivalUncheckedUpdateInput>
  }

  /**
   * Festival delete
   */
  export type FestivalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * Filter which Festival to delete.
     */
    where: FestivalWhereUniqueInput
  }

  /**
   * Festival deleteMany
   */
  export type FestivalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Festivals to delete
     */
    where?: FestivalWhereInput
    /**
     * Limit how many Festivals to delete.
     */
    limit?: number
  }

  /**
   * Festival.scheduleEvents
   */
  export type Festival$scheduleEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleEvent
     */
    select?: ScheduleEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleEvent
     */
    omit?: ScheduleEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleEventInclude<ExtArgs> | null
    where?: ScheduleEventWhereInput
    orderBy?: ScheduleEventOrderByWithRelationInput | ScheduleEventOrderByWithRelationInput[]
    cursor?: ScheduleEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleEventScalarFieldEnum | ScheduleEventScalarFieldEnum[]
  }

  /**
   * Festival.booths
   */
  export type Festival$boothsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booth
     */
    select?: BoothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booth
     */
    omit?: BoothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothInclude<ExtArgs> | null
    where?: BoothWhereInput
    orderBy?: BoothOrderByWithRelationInput | BoothOrderByWithRelationInput[]
    cursor?: BoothWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoothScalarFieldEnum | BoothScalarFieldEnum[]
  }

  /**
   * Festival.notices
   */
  export type Festival$noticesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    where?: NoticeWhereInput
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    cursor?: NoticeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Festival without action
   */
  export type FestivalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
  }


  /**
   * Model ScheduleEvent
   */

  export type AggregateScheduleEvent = {
    _count: ScheduleEventCountAggregateOutputType | null
    _min: ScheduleEventMinAggregateOutputType | null
    _max: ScheduleEventMaxAggregateOutputType | null
  }

  export type ScheduleEventMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startTime: Date | null
    endTime: Date | null
    location: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
    festivalId: string | null
  }

  export type ScheduleEventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startTime: Date | null
    endTime: Date | null
    location: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
    festivalId: string | null
  }

  export type ScheduleEventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    startTime: number
    endTime: number
    location: number
    category: number
    createdAt: number
    updatedAt: number
    festivalId: number
    _all: number
  }


  export type ScheduleEventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    location?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    festivalId?: true
  }

  export type ScheduleEventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    location?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    festivalId?: true
  }

  export type ScheduleEventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    location?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    festivalId?: true
    _all?: true
  }

  export type ScheduleEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleEvent to aggregate.
     */
    where?: ScheduleEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleEvents to fetch.
     */
    orderBy?: ScheduleEventOrderByWithRelationInput | ScheduleEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScheduleEvents
    **/
    _count?: true | ScheduleEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleEventMaxAggregateInputType
  }

  export type GetScheduleEventAggregateType<T extends ScheduleEventAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduleEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduleEvent[P]>
      : GetScalarType<T[P], AggregateScheduleEvent[P]>
  }




  export type ScheduleEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleEventWhereInput
    orderBy?: ScheduleEventOrderByWithAggregationInput | ScheduleEventOrderByWithAggregationInput[]
    by: ScheduleEventScalarFieldEnum[] | ScheduleEventScalarFieldEnum
    having?: ScheduleEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleEventCountAggregateInputType | true
    _min?: ScheduleEventMinAggregateInputType
    _max?: ScheduleEventMaxAggregateInputType
  }

  export type ScheduleEventGroupByOutputType = {
    id: string
    title: string
    description: string | null
    startTime: Date
    endTime: Date
    location: string
    category: string | null
    createdAt: Date
    updatedAt: Date
    festivalId: string
    _count: ScheduleEventCountAggregateOutputType | null
    _min: ScheduleEventMinAggregateOutputType | null
    _max: ScheduleEventMaxAggregateOutputType | null
  }

  type GetScheduleEventGroupByPayload<T extends ScheduleEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleEventGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleEventGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festivalId?: boolean
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
    artists?: boolean | ScheduleEvent$artistsArgs<ExtArgs>
    _count?: boolean | ScheduleEventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleEvent"]>

  export type ScheduleEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festivalId?: boolean
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleEvent"]>

  export type ScheduleEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festivalId?: boolean
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleEvent"]>

  export type ScheduleEventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festivalId?: boolean
  }

  export type ScheduleEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "startTime" | "endTime" | "location" | "category" | "createdAt" | "updatedAt" | "festivalId", ExtArgs["result"]["scheduleEvent"]>
  export type ScheduleEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
    artists?: boolean | ScheduleEvent$artistsArgs<ExtArgs>
    _count?: boolean | ScheduleEventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScheduleEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }
  export type ScheduleEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }

  export type $ScheduleEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScheduleEvent"
    objects: {
      festival: Prisma.$FestivalPayload<ExtArgs>
      artists: Prisma.$ArtistOnScheduleEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      startTime: Date
      endTime: Date
      location: string
      category: string | null
      createdAt: Date
      updatedAt: Date
      festivalId: string
    }, ExtArgs["result"]["scheduleEvent"]>
    composites: {}
  }

  type ScheduleEventGetPayload<S extends boolean | null | undefined | ScheduleEventDefaultArgs> = $Result.GetResult<Prisma.$ScheduleEventPayload, S>

  type ScheduleEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleEventCountAggregateInputType | true
    }

  export interface ScheduleEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScheduleEvent'], meta: { name: 'ScheduleEvent' } }
    /**
     * Find zero or one ScheduleEvent that matches the filter.
     * @param {ScheduleEventFindUniqueArgs} args - Arguments to find a ScheduleEvent
     * @example
     * // Get one ScheduleEvent
     * const scheduleEvent = await prisma.scheduleEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleEventFindUniqueArgs>(args: SelectSubset<T, ScheduleEventFindUniqueArgs<ExtArgs>>): Prisma__ScheduleEventClient<$Result.GetResult<Prisma.$ScheduleEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScheduleEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleEventFindUniqueOrThrowArgs} args - Arguments to find a ScheduleEvent
     * @example
     * // Get one ScheduleEvent
     * const scheduleEvent = await prisma.scheduleEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleEventFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleEventClient<$Result.GetResult<Prisma.$ScheduleEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduleEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleEventFindFirstArgs} args - Arguments to find a ScheduleEvent
     * @example
     * // Get one ScheduleEvent
     * const scheduleEvent = await prisma.scheduleEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleEventFindFirstArgs>(args?: SelectSubset<T, ScheduleEventFindFirstArgs<ExtArgs>>): Prisma__ScheduleEventClient<$Result.GetResult<Prisma.$ScheduleEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduleEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleEventFindFirstOrThrowArgs} args - Arguments to find a ScheduleEvent
     * @example
     * // Get one ScheduleEvent
     * const scheduleEvent = await prisma.scheduleEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleEventFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleEventClient<$Result.GetResult<Prisma.$ScheduleEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScheduleEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScheduleEvents
     * const scheduleEvents = await prisma.scheduleEvent.findMany()
     * 
     * // Get first 10 ScheduleEvents
     * const scheduleEvents = await prisma.scheduleEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleEventWithIdOnly = await prisma.scheduleEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleEventFindManyArgs>(args?: SelectSubset<T, ScheduleEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScheduleEvent.
     * @param {ScheduleEventCreateArgs} args - Arguments to create a ScheduleEvent.
     * @example
     * // Create one ScheduleEvent
     * const ScheduleEvent = await prisma.scheduleEvent.create({
     *   data: {
     *     // ... data to create a ScheduleEvent
     *   }
     * })
     * 
     */
    create<T extends ScheduleEventCreateArgs>(args: SelectSubset<T, ScheduleEventCreateArgs<ExtArgs>>): Prisma__ScheduleEventClient<$Result.GetResult<Prisma.$ScheduleEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScheduleEvents.
     * @param {ScheduleEventCreateManyArgs} args - Arguments to create many ScheduleEvents.
     * @example
     * // Create many ScheduleEvents
     * const scheduleEvent = await prisma.scheduleEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleEventCreateManyArgs>(args?: SelectSubset<T, ScheduleEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScheduleEvents and returns the data saved in the database.
     * @param {ScheduleEventCreateManyAndReturnArgs} args - Arguments to create many ScheduleEvents.
     * @example
     * // Create many ScheduleEvents
     * const scheduleEvent = await prisma.scheduleEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScheduleEvents and only return the `id`
     * const scheduleEventWithIdOnly = await prisma.scheduleEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleEventCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScheduleEvent.
     * @param {ScheduleEventDeleteArgs} args - Arguments to delete one ScheduleEvent.
     * @example
     * // Delete one ScheduleEvent
     * const ScheduleEvent = await prisma.scheduleEvent.delete({
     *   where: {
     *     // ... filter to delete one ScheduleEvent
     *   }
     * })
     * 
     */
    delete<T extends ScheduleEventDeleteArgs>(args: SelectSubset<T, ScheduleEventDeleteArgs<ExtArgs>>): Prisma__ScheduleEventClient<$Result.GetResult<Prisma.$ScheduleEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScheduleEvent.
     * @param {ScheduleEventUpdateArgs} args - Arguments to update one ScheduleEvent.
     * @example
     * // Update one ScheduleEvent
     * const scheduleEvent = await prisma.scheduleEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleEventUpdateArgs>(args: SelectSubset<T, ScheduleEventUpdateArgs<ExtArgs>>): Prisma__ScheduleEventClient<$Result.GetResult<Prisma.$ScheduleEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScheduleEvents.
     * @param {ScheduleEventDeleteManyArgs} args - Arguments to filter ScheduleEvents to delete.
     * @example
     * // Delete a few ScheduleEvents
     * const { count } = await prisma.scheduleEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleEventDeleteManyArgs>(args?: SelectSubset<T, ScheduleEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduleEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScheduleEvents
     * const scheduleEvent = await prisma.scheduleEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleEventUpdateManyArgs>(args: SelectSubset<T, ScheduleEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduleEvents and returns the data updated in the database.
     * @param {ScheduleEventUpdateManyAndReturnArgs} args - Arguments to update many ScheduleEvents.
     * @example
     * // Update many ScheduleEvents
     * const scheduleEvent = await prisma.scheduleEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScheduleEvents and only return the `id`
     * const scheduleEventWithIdOnly = await prisma.scheduleEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduleEventUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScheduleEvent.
     * @param {ScheduleEventUpsertArgs} args - Arguments to update or create a ScheduleEvent.
     * @example
     * // Update or create a ScheduleEvent
     * const scheduleEvent = await prisma.scheduleEvent.upsert({
     *   create: {
     *     // ... data to create a ScheduleEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScheduleEvent we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleEventUpsertArgs>(args: SelectSubset<T, ScheduleEventUpsertArgs<ExtArgs>>): Prisma__ScheduleEventClient<$Result.GetResult<Prisma.$ScheduleEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScheduleEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleEventCountArgs} args - Arguments to filter ScheduleEvents to count.
     * @example
     * // Count the number of ScheduleEvents
     * const count = await prisma.scheduleEvent.count({
     *   where: {
     *     // ... the filter for the ScheduleEvents we want to count
     *   }
     * })
    **/
    count<T extends ScheduleEventCountArgs>(
      args?: Subset<T, ScheduleEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScheduleEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleEventAggregateArgs>(args: Subset<T, ScheduleEventAggregateArgs>): Prisma.PrismaPromise<GetScheduleEventAggregateType<T>>

    /**
     * Group by ScheduleEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduleEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleEventGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduleEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScheduleEvent model
   */
  readonly fields: ScheduleEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScheduleEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    festival<T extends FestivalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FestivalDefaultArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    artists<T extends ScheduleEvent$artistsArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleEvent$artistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistOnScheduleEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScheduleEvent model
   */
  interface ScheduleEventFieldRefs {
    readonly id: FieldRef<"ScheduleEvent", 'String'>
    readonly title: FieldRef<"ScheduleEvent", 'String'>
    readonly description: FieldRef<"ScheduleEvent", 'String'>
    readonly startTime: FieldRef<"ScheduleEvent", 'DateTime'>
    readonly endTime: FieldRef<"ScheduleEvent", 'DateTime'>
    readonly location: FieldRef<"ScheduleEvent", 'String'>
    readonly category: FieldRef<"ScheduleEvent", 'String'>
    readonly createdAt: FieldRef<"ScheduleEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"ScheduleEvent", 'DateTime'>
    readonly festivalId: FieldRef<"ScheduleEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ScheduleEvent findUnique
   */
  export type ScheduleEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleEvent
     */
    select?: ScheduleEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleEvent
     */
    omit?: ScheduleEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleEventInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleEvent to fetch.
     */
    where: ScheduleEventWhereUniqueInput
  }

  /**
   * ScheduleEvent findUniqueOrThrow
   */
  export type ScheduleEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleEvent
     */
    select?: ScheduleEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleEvent
     */
    omit?: ScheduleEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleEventInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleEvent to fetch.
     */
    where: ScheduleEventWhereUniqueInput
  }

  /**
   * ScheduleEvent findFirst
   */
  export type ScheduleEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleEvent
     */
    select?: ScheduleEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleEvent
     */
    omit?: ScheduleEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleEventInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleEvent to fetch.
     */
    where?: ScheduleEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleEvents to fetch.
     */
    orderBy?: ScheduleEventOrderByWithRelationInput | ScheduleEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleEvents.
     */
    cursor?: ScheduleEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleEvents.
     */
    distinct?: ScheduleEventScalarFieldEnum | ScheduleEventScalarFieldEnum[]
  }

  /**
   * ScheduleEvent findFirstOrThrow
   */
  export type ScheduleEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleEvent
     */
    select?: ScheduleEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleEvent
     */
    omit?: ScheduleEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleEventInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleEvent to fetch.
     */
    where?: ScheduleEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleEvents to fetch.
     */
    orderBy?: ScheduleEventOrderByWithRelationInput | ScheduleEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleEvents.
     */
    cursor?: ScheduleEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleEvents.
     */
    distinct?: ScheduleEventScalarFieldEnum | ScheduleEventScalarFieldEnum[]
  }

  /**
   * ScheduleEvent findMany
   */
  export type ScheduleEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleEvent
     */
    select?: ScheduleEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleEvent
     */
    omit?: ScheduleEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleEventInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleEvents to fetch.
     */
    where?: ScheduleEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleEvents to fetch.
     */
    orderBy?: ScheduleEventOrderByWithRelationInput | ScheduleEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScheduleEvents.
     */
    cursor?: ScheduleEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleEvents.
     */
    skip?: number
    distinct?: ScheduleEventScalarFieldEnum | ScheduleEventScalarFieldEnum[]
  }

  /**
   * ScheduleEvent create
   */
  export type ScheduleEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleEvent
     */
    select?: ScheduleEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleEvent
     */
    omit?: ScheduleEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleEventInclude<ExtArgs> | null
    /**
     * The data needed to create a ScheduleEvent.
     */
    data: XOR<ScheduleEventCreateInput, ScheduleEventUncheckedCreateInput>
  }

  /**
   * ScheduleEvent createMany
   */
  export type ScheduleEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScheduleEvents.
     */
    data: ScheduleEventCreateManyInput | ScheduleEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScheduleEvent createManyAndReturn
   */
  export type ScheduleEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleEvent
     */
    select?: ScheduleEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleEvent
     */
    omit?: ScheduleEventOmit<ExtArgs> | null
    /**
     * The data used to create many ScheduleEvents.
     */
    data: ScheduleEventCreateManyInput | ScheduleEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduleEvent update
   */
  export type ScheduleEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleEvent
     */
    select?: ScheduleEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleEvent
     */
    omit?: ScheduleEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleEventInclude<ExtArgs> | null
    /**
     * The data needed to update a ScheduleEvent.
     */
    data: XOR<ScheduleEventUpdateInput, ScheduleEventUncheckedUpdateInput>
    /**
     * Choose, which ScheduleEvent to update.
     */
    where: ScheduleEventWhereUniqueInput
  }

  /**
   * ScheduleEvent updateMany
   */
  export type ScheduleEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScheduleEvents.
     */
    data: XOR<ScheduleEventUpdateManyMutationInput, ScheduleEventUncheckedUpdateManyInput>
    /**
     * Filter which ScheduleEvents to update
     */
    where?: ScheduleEventWhereInput
    /**
     * Limit how many ScheduleEvents to update.
     */
    limit?: number
  }

  /**
   * ScheduleEvent updateManyAndReturn
   */
  export type ScheduleEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleEvent
     */
    select?: ScheduleEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleEvent
     */
    omit?: ScheduleEventOmit<ExtArgs> | null
    /**
     * The data used to update ScheduleEvents.
     */
    data: XOR<ScheduleEventUpdateManyMutationInput, ScheduleEventUncheckedUpdateManyInput>
    /**
     * Filter which ScheduleEvents to update
     */
    where?: ScheduleEventWhereInput
    /**
     * Limit how many ScheduleEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduleEvent upsert
   */
  export type ScheduleEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleEvent
     */
    select?: ScheduleEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleEvent
     */
    omit?: ScheduleEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleEventInclude<ExtArgs> | null
    /**
     * The filter to search for the ScheduleEvent to update in case it exists.
     */
    where: ScheduleEventWhereUniqueInput
    /**
     * In case the ScheduleEvent found by the `where` argument doesn't exist, create a new ScheduleEvent with this data.
     */
    create: XOR<ScheduleEventCreateInput, ScheduleEventUncheckedCreateInput>
    /**
     * In case the ScheduleEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleEventUpdateInput, ScheduleEventUncheckedUpdateInput>
  }

  /**
   * ScheduleEvent delete
   */
  export type ScheduleEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleEvent
     */
    select?: ScheduleEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleEvent
     */
    omit?: ScheduleEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleEventInclude<ExtArgs> | null
    /**
     * Filter which ScheduleEvent to delete.
     */
    where: ScheduleEventWhereUniqueInput
  }

  /**
   * ScheduleEvent deleteMany
   */
  export type ScheduleEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleEvents to delete
     */
    where?: ScheduleEventWhereInput
    /**
     * Limit how many ScheduleEvents to delete.
     */
    limit?: number
  }

  /**
   * ScheduleEvent.artists
   */
  export type ScheduleEvent$artistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistOnScheduleEvent
     */
    select?: ArtistOnScheduleEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistOnScheduleEvent
     */
    omit?: ArtistOnScheduleEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistOnScheduleEventInclude<ExtArgs> | null
    where?: ArtistOnScheduleEventWhereInput
    orderBy?: ArtistOnScheduleEventOrderByWithRelationInput | ArtistOnScheduleEventOrderByWithRelationInput[]
    cursor?: ArtistOnScheduleEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistOnScheduleEventScalarFieldEnum | ArtistOnScheduleEventScalarFieldEnum[]
  }

  /**
   * ScheduleEvent without action
   */
  export type ScheduleEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleEvent
     */
    select?: ScheduleEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleEvent
     */
    omit?: ScheduleEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleEventInclude<ExtArgs> | null
  }


  /**
   * Model Artist
   */

  export type AggregateArtist = {
    _count: ArtistCountAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  export type ArtistMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    genre: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtistMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    genre: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtistCountAggregateOutputType = {
    id: number
    name: number
    description: number
    genre: number
    imageUrl: number
    socialMedia: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArtistMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    genre?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtistMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    genre?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtistCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    genre?: true
    imageUrl?: true
    socialMedia?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArtistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artist to aggregate.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistMaxAggregateInputType
  }

  export type GetArtistAggregateType<T extends ArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtist[P]>
      : GetScalarType<T[P], AggregateArtist[P]>
  }




  export type ArtistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithAggregationInput | ArtistOrderByWithAggregationInput[]
    by: ArtistScalarFieldEnum[] | ArtistScalarFieldEnum
    having?: ArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistCountAggregateInputType | true
    _min?: ArtistMinAggregateInputType
    _max?: ArtistMaxAggregateInputType
  }

  export type ArtistGroupByOutputType = {
    id: string
    name: string
    description: string | null
    genre: string | null
    imageUrl: string | null
    socialMedia: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: ArtistCountAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  type GetArtistGroupByPayload<T extends ArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistGroupByOutputType[P]>
        }
      >
    >


  export type ArtistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    genre?: boolean
    imageUrl?: boolean
    socialMedia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    scheduleEvents?: boolean | Artist$scheduleEventsArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    genre?: boolean
    imageUrl?: boolean
    socialMedia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    genre?: boolean
    imageUrl?: boolean
    socialMedia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    genre?: boolean
    imageUrl?: boolean
    socialMedia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArtistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "genre" | "imageUrl" | "socialMedia" | "createdAt" | "updatedAt", ExtArgs["result"]["artist"]>
  export type ArtistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduleEvents?: boolean | Artist$scheduleEventsArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArtistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ArtistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ArtistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artist"
    objects: {
      scheduleEvents: Prisma.$ArtistOnScheduleEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      genre: string | null
      imageUrl: string | null
      socialMedia: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["artist"]>
    composites: {}
  }

  type ArtistGetPayload<S extends boolean | null | undefined | ArtistDefaultArgs> = $Result.GetResult<Prisma.$ArtistPayload, S>

  type ArtistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistCountAggregateInputType | true
    }

  export interface ArtistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artist'], meta: { name: 'Artist' } }
    /**
     * Find zero or one Artist that matches the filter.
     * @param {ArtistFindUniqueArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistFindUniqueArgs>(args: SelectSubset<T, ArtistFindUniqueArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistFindUniqueOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistFindFirstArgs>(args?: SelectSubset<T, ArtistFindFirstArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artist.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistWithIdOnly = await prisma.artist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtistFindManyArgs>(args?: SelectSubset<T, ArtistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artist.
     * @param {ArtistCreateArgs} args - Arguments to create a Artist.
     * @example
     * // Create one Artist
     * const Artist = await prisma.artist.create({
     *   data: {
     *     // ... data to create a Artist
     *   }
     * })
     * 
     */
    create<T extends ArtistCreateArgs>(args: SelectSubset<T, ArtistCreateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artists.
     * @param {ArtistCreateManyArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistCreateManyArgs>(args?: SelectSubset<T, ArtistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artists and returns the data saved in the database.
     * @param {ArtistCreateManyAndReturnArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artists and only return the `id`
     * const artistWithIdOnly = await prisma.artist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Artist.
     * @param {ArtistDeleteArgs} args - Arguments to delete one Artist.
     * @example
     * // Delete one Artist
     * const Artist = await prisma.artist.delete({
     *   where: {
     *     // ... filter to delete one Artist
     *   }
     * })
     * 
     */
    delete<T extends ArtistDeleteArgs>(args: SelectSubset<T, ArtistDeleteArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artist.
     * @param {ArtistUpdateArgs} args - Arguments to update one Artist.
     * @example
     * // Update one Artist
     * const artist = await prisma.artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistUpdateArgs>(args: SelectSubset<T, ArtistUpdateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artists.
     * @param {ArtistDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistDeleteManyArgs>(args?: SelectSubset<T, ArtistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistUpdateManyArgs>(args: SelectSubset<T, ArtistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists and returns the data updated in the database.
     * @param {ArtistUpdateManyAndReturnArgs} args - Arguments to update many Artists.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Artists and only return the `id`
     * const artistWithIdOnly = await prisma.artist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArtistUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Artist.
     * @param {ArtistUpsertArgs} args - Arguments to update or create a Artist.
     * @example
     * // Update or create a Artist
     * const artist = await prisma.artist.upsert({
     *   create: {
     *     // ... data to create a Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artist we want to update
     *   }
     * })
     */
    upsert<T extends ArtistUpsertArgs>(args: SelectSubset<T, ArtistUpsertArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artist.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistCountArgs>(
      args?: Subset<T, ArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtistAggregateArgs>(args: Subset<T, ArtistAggregateArgs>): Prisma.PrismaPromise<GetArtistAggregateType<T>>

    /**
     * Group by Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistGroupByArgs['orderBy'] }
        : { orderBy?: ArtistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artist model
   */
  readonly fields: ArtistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scheduleEvents<T extends Artist$scheduleEventsArgs<ExtArgs> = {}>(args?: Subset<T, Artist$scheduleEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistOnScheduleEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Artist model
   */
  interface ArtistFieldRefs {
    readonly id: FieldRef<"Artist", 'String'>
    readonly name: FieldRef<"Artist", 'String'>
    readonly description: FieldRef<"Artist", 'String'>
    readonly genre: FieldRef<"Artist", 'String'>
    readonly imageUrl: FieldRef<"Artist", 'String'>
    readonly socialMedia: FieldRef<"Artist", 'Json'>
    readonly createdAt: FieldRef<"Artist", 'DateTime'>
    readonly updatedAt: FieldRef<"Artist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Artist findUnique
   */
  export type ArtistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findUniqueOrThrow
   */
  export type ArtistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findFirst
   */
  export type ArtistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findFirstOrThrow
   */
  export type ArtistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findMany
   */
  export type ArtistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist create
   */
  export type ArtistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to create a Artist.
     */
    data: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
  }

  /**
   * Artist createMany
   */
  export type ArtistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artist createManyAndReturn
   */
  export type ArtistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artist update
   */
  export type ArtistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to update a Artist.
     */
    data: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
    /**
     * Choose, which Artist to update.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist updateMany
   */
  export type ArtistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist updateManyAndReturn
   */
  export type ArtistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist upsert
   */
  export type ArtistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The filter to search for the Artist to update in case it exists.
     */
    where: ArtistWhereUniqueInput
    /**
     * In case the Artist found by the `where` argument doesn't exist, create a new Artist with this data.
     */
    create: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
    /**
     * In case the Artist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
  }

  /**
   * Artist delete
   */
  export type ArtistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter which Artist to delete.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist deleteMany
   */
  export type ArtistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to delete.
     */
    limit?: number
  }

  /**
   * Artist.scheduleEvents
   */
  export type Artist$scheduleEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistOnScheduleEvent
     */
    select?: ArtistOnScheduleEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistOnScheduleEvent
     */
    omit?: ArtistOnScheduleEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistOnScheduleEventInclude<ExtArgs> | null
    where?: ArtistOnScheduleEventWhereInput
    orderBy?: ArtistOnScheduleEventOrderByWithRelationInput | ArtistOnScheduleEventOrderByWithRelationInput[]
    cursor?: ArtistOnScheduleEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistOnScheduleEventScalarFieldEnum | ArtistOnScheduleEventScalarFieldEnum[]
  }

  /**
   * Artist without action
   */
  export type ArtistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
  }


  /**
   * Model ArtistOnScheduleEvent
   */

  export type AggregateArtistOnScheduleEvent = {
    _count: ArtistOnScheduleEventCountAggregateOutputType | null
    _min: ArtistOnScheduleEventMinAggregateOutputType | null
    _max: ArtistOnScheduleEventMaxAggregateOutputType | null
  }

  export type ArtistOnScheduleEventMinAggregateOutputType = {
    artistId: string | null
    scheduleEventId: string | null
    assignedAt: Date | null
  }

  export type ArtistOnScheduleEventMaxAggregateOutputType = {
    artistId: string | null
    scheduleEventId: string | null
    assignedAt: Date | null
  }

  export type ArtistOnScheduleEventCountAggregateOutputType = {
    artistId: number
    scheduleEventId: number
    assignedAt: number
    _all: number
  }


  export type ArtistOnScheduleEventMinAggregateInputType = {
    artistId?: true
    scheduleEventId?: true
    assignedAt?: true
  }

  export type ArtistOnScheduleEventMaxAggregateInputType = {
    artistId?: true
    scheduleEventId?: true
    assignedAt?: true
  }

  export type ArtistOnScheduleEventCountAggregateInputType = {
    artistId?: true
    scheduleEventId?: true
    assignedAt?: true
    _all?: true
  }

  export type ArtistOnScheduleEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtistOnScheduleEvent to aggregate.
     */
    where?: ArtistOnScheduleEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistOnScheduleEvents to fetch.
     */
    orderBy?: ArtistOnScheduleEventOrderByWithRelationInput | ArtistOnScheduleEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistOnScheduleEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistOnScheduleEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistOnScheduleEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArtistOnScheduleEvents
    **/
    _count?: true | ArtistOnScheduleEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistOnScheduleEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistOnScheduleEventMaxAggregateInputType
  }

  export type GetArtistOnScheduleEventAggregateType<T extends ArtistOnScheduleEventAggregateArgs> = {
        [P in keyof T & keyof AggregateArtistOnScheduleEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtistOnScheduleEvent[P]>
      : GetScalarType<T[P], AggregateArtistOnScheduleEvent[P]>
  }




  export type ArtistOnScheduleEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistOnScheduleEventWhereInput
    orderBy?: ArtistOnScheduleEventOrderByWithAggregationInput | ArtistOnScheduleEventOrderByWithAggregationInput[]
    by: ArtistOnScheduleEventScalarFieldEnum[] | ArtistOnScheduleEventScalarFieldEnum
    having?: ArtistOnScheduleEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistOnScheduleEventCountAggregateInputType | true
    _min?: ArtistOnScheduleEventMinAggregateInputType
    _max?: ArtistOnScheduleEventMaxAggregateInputType
  }

  export type ArtistOnScheduleEventGroupByOutputType = {
    artistId: string
    scheduleEventId: string
    assignedAt: Date
    _count: ArtistOnScheduleEventCountAggregateOutputType | null
    _min: ArtistOnScheduleEventMinAggregateOutputType | null
    _max: ArtistOnScheduleEventMaxAggregateOutputType | null
  }

  type GetArtistOnScheduleEventGroupByPayload<T extends ArtistOnScheduleEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistOnScheduleEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistOnScheduleEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistOnScheduleEventGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistOnScheduleEventGroupByOutputType[P]>
        }
      >
    >


  export type ArtistOnScheduleEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    artistId?: boolean
    scheduleEventId?: boolean
    assignedAt?: boolean
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    scheduleEvent?: boolean | ScheduleEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artistOnScheduleEvent"]>

  export type ArtistOnScheduleEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    artistId?: boolean
    scheduleEventId?: boolean
    assignedAt?: boolean
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    scheduleEvent?: boolean | ScheduleEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artistOnScheduleEvent"]>

  export type ArtistOnScheduleEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    artistId?: boolean
    scheduleEventId?: boolean
    assignedAt?: boolean
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    scheduleEvent?: boolean | ScheduleEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artistOnScheduleEvent"]>

  export type ArtistOnScheduleEventSelectScalar = {
    artistId?: boolean
    scheduleEventId?: boolean
    assignedAt?: boolean
  }

  export type ArtistOnScheduleEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"artistId" | "scheduleEventId" | "assignedAt", ExtArgs["result"]["artistOnScheduleEvent"]>
  export type ArtistOnScheduleEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    scheduleEvent?: boolean | ScheduleEventDefaultArgs<ExtArgs>
  }
  export type ArtistOnScheduleEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    scheduleEvent?: boolean | ScheduleEventDefaultArgs<ExtArgs>
  }
  export type ArtistOnScheduleEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    scheduleEvent?: boolean | ScheduleEventDefaultArgs<ExtArgs>
  }

  export type $ArtistOnScheduleEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArtistOnScheduleEvent"
    objects: {
      artist: Prisma.$ArtistPayload<ExtArgs>
      scheduleEvent: Prisma.$ScheduleEventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      artistId: string
      scheduleEventId: string
      assignedAt: Date
    }, ExtArgs["result"]["artistOnScheduleEvent"]>
    composites: {}
  }

  type ArtistOnScheduleEventGetPayload<S extends boolean | null | undefined | ArtistOnScheduleEventDefaultArgs> = $Result.GetResult<Prisma.$ArtistOnScheduleEventPayload, S>

  type ArtistOnScheduleEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistOnScheduleEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistOnScheduleEventCountAggregateInputType | true
    }

  export interface ArtistOnScheduleEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArtistOnScheduleEvent'], meta: { name: 'ArtistOnScheduleEvent' } }
    /**
     * Find zero or one ArtistOnScheduleEvent that matches the filter.
     * @param {ArtistOnScheduleEventFindUniqueArgs} args - Arguments to find a ArtistOnScheduleEvent
     * @example
     * // Get one ArtistOnScheduleEvent
     * const artistOnScheduleEvent = await prisma.artistOnScheduleEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistOnScheduleEventFindUniqueArgs>(args: SelectSubset<T, ArtistOnScheduleEventFindUniqueArgs<ExtArgs>>): Prisma__ArtistOnScheduleEventClient<$Result.GetResult<Prisma.$ArtistOnScheduleEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArtistOnScheduleEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistOnScheduleEventFindUniqueOrThrowArgs} args - Arguments to find a ArtistOnScheduleEvent
     * @example
     * // Get one ArtistOnScheduleEvent
     * const artistOnScheduleEvent = await prisma.artistOnScheduleEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistOnScheduleEventFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistOnScheduleEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistOnScheduleEventClient<$Result.GetResult<Prisma.$ArtistOnScheduleEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtistOnScheduleEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistOnScheduleEventFindFirstArgs} args - Arguments to find a ArtistOnScheduleEvent
     * @example
     * // Get one ArtistOnScheduleEvent
     * const artistOnScheduleEvent = await prisma.artistOnScheduleEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistOnScheduleEventFindFirstArgs>(args?: SelectSubset<T, ArtistOnScheduleEventFindFirstArgs<ExtArgs>>): Prisma__ArtistOnScheduleEventClient<$Result.GetResult<Prisma.$ArtistOnScheduleEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtistOnScheduleEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistOnScheduleEventFindFirstOrThrowArgs} args - Arguments to find a ArtistOnScheduleEvent
     * @example
     * // Get one ArtistOnScheduleEvent
     * const artistOnScheduleEvent = await prisma.artistOnScheduleEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistOnScheduleEventFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistOnScheduleEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistOnScheduleEventClient<$Result.GetResult<Prisma.$ArtistOnScheduleEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArtistOnScheduleEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistOnScheduleEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArtistOnScheduleEvents
     * const artistOnScheduleEvents = await prisma.artistOnScheduleEvent.findMany()
     * 
     * // Get first 10 ArtistOnScheduleEvents
     * const artistOnScheduleEvents = await prisma.artistOnScheduleEvent.findMany({ take: 10 })
     * 
     * // Only select the `artistId`
     * const artistOnScheduleEventWithArtistIdOnly = await prisma.artistOnScheduleEvent.findMany({ select: { artistId: true } })
     * 
     */
    findMany<T extends ArtistOnScheduleEventFindManyArgs>(args?: SelectSubset<T, ArtistOnScheduleEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistOnScheduleEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArtistOnScheduleEvent.
     * @param {ArtistOnScheduleEventCreateArgs} args - Arguments to create a ArtistOnScheduleEvent.
     * @example
     * // Create one ArtistOnScheduleEvent
     * const ArtistOnScheduleEvent = await prisma.artistOnScheduleEvent.create({
     *   data: {
     *     // ... data to create a ArtistOnScheduleEvent
     *   }
     * })
     * 
     */
    create<T extends ArtistOnScheduleEventCreateArgs>(args: SelectSubset<T, ArtistOnScheduleEventCreateArgs<ExtArgs>>): Prisma__ArtistOnScheduleEventClient<$Result.GetResult<Prisma.$ArtistOnScheduleEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArtistOnScheduleEvents.
     * @param {ArtistOnScheduleEventCreateManyArgs} args - Arguments to create many ArtistOnScheduleEvents.
     * @example
     * // Create many ArtistOnScheduleEvents
     * const artistOnScheduleEvent = await prisma.artistOnScheduleEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistOnScheduleEventCreateManyArgs>(args?: SelectSubset<T, ArtistOnScheduleEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArtistOnScheduleEvents and returns the data saved in the database.
     * @param {ArtistOnScheduleEventCreateManyAndReturnArgs} args - Arguments to create many ArtistOnScheduleEvents.
     * @example
     * // Create many ArtistOnScheduleEvents
     * const artistOnScheduleEvent = await prisma.artistOnScheduleEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArtistOnScheduleEvents and only return the `artistId`
     * const artistOnScheduleEventWithArtistIdOnly = await prisma.artistOnScheduleEvent.createManyAndReturn({
     *   select: { artistId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistOnScheduleEventCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistOnScheduleEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistOnScheduleEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArtistOnScheduleEvent.
     * @param {ArtistOnScheduleEventDeleteArgs} args - Arguments to delete one ArtistOnScheduleEvent.
     * @example
     * // Delete one ArtistOnScheduleEvent
     * const ArtistOnScheduleEvent = await prisma.artistOnScheduleEvent.delete({
     *   where: {
     *     // ... filter to delete one ArtistOnScheduleEvent
     *   }
     * })
     * 
     */
    delete<T extends ArtistOnScheduleEventDeleteArgs>(args: SelectSubset<T, ArtistOnScheduleEventDeleteArgs<ExtArgs>>): Prisma__ArtistOnScheduleEventClient<$Result.GetResult<Prisma.$ArtistOnScheduleEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArtistOnScheduleEvent.
     * @param {ArtistOnScheduleEventUpdateArgs} args - Arguments to update one ArtistOnScheduleEvent.
     * @example
     * // Update one ArtistOnScheduleEvent
     * const artistOnScheduleEvent = await prisma.artistOnScheduleEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistOnScheduleEventUpdateArgs>(args: SelectSubset<T, ArtistOnScheduleEventUpdateArgs<ExtArgs>>): Prisma__ArtistOnScheduleEventClient<$Result.GetResult<Prisma.$ArtistOnScheduleEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArtistOnScheduleEvents.
     * @param {ArtistOnScheduleEventDeleteManyArgs} args - Arguments to filter ArtistOnScheduleEvents to delete.
     * @example
     * // Delete a few ArtistOnScheduleEvents
     * const { count } = await prisma.artistOnScheduleEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistOnScheduleEventDeleteManyArgs>(args?: SelectSubset<T, ArtistOnScheduleEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtistOnScheduleEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistOnScheduleEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArtistOnScheduleEvents
     * const artistOnScheduleEvent = await prisma.artistOnScheduleEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistOnScheduleEventUpdateManyArgs>(args: SelectSubset<T, ArtistOnScheduleEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtistOnScheduleEvents and returns the data updated in the database.
     * @param {ArtistOnScheduleEventUpdateManyAndReturnArgs} args - Arguments to update many ArtistOnScheduleEvents.
     * @example
     * // Update many ArtistOnScheduleEvents
     * const artistOnScheduleEvent = await prisma.artistOnScheduleEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArtistOnScheduleEvents and only return the `artistId`
     * const artistOnScheduleEventWithArtistIdOnly = await prisma.artistOnScheduleEvent.updateManyAndReturn({
     *   select: { artistId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArtistOnScheduleEventUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtistOnScheduleEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistOnScheduleEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArtistOnScheduleEvent.
     * @param {ArtistOnScheduleEventUpsertArgs} args - Arguments to update or create a ArtistOnScheduleEvent.
     * @example
     * // Update or create a ArtistOnScheduleEvent
     * const artistOnScheduleEvent = await prisma.artistOnScheduleEvent.upsert({
     *   create: {
     *     // ... data to create a ArtistOnScheduleEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArtistOnScheduleEvent we want to update
     *   }
     * })
     */
    upsert<T extends ArtistOnScheduleEventUpsertArgs>(args: SelectSubset<T, ArtistOnScheduleEventUpsertArgs<ExtArgs>>): Prisma__ArtistOnScheduleEventClient<$Result.GetResult<Prisma.$ArtistOnScheduleEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArtistOnScheduleEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistOnScheduleEventCountArgs} args - Arguments to filter ArtistOnScheduleEvents to count.
     * @example
     * // Count the number of ArtistOnScheduleEvents
     * const count = await prisma.artistOnScheduleEvent.count({
     *   where: {
     *     // ... the filter for the ArtistOnScheduleEvents we want to count
     *   }
     * })
    **/
    count<T extends ArtistOnScheduleEventCountArgs>(
      args?: Subset<T, ArtistOnScheduleEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistOnScheduleEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArtistOnScheduleEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistOnScheduleEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtistOnScheduleEventAggregateArgs>(args: Subset<T, ArtistOnScheduleEventAggregateArgs>): Prisma.PrismaPromise<GetArtistOnScheduleEventAggregateType<T>>

    /**
     * Group by ArtistOnScheduleEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistOnScheduleEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtistOnScheduleEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistOnScheduleEventGroupByArgs['orderBy'] }
        : { orderBy?: ArtistOnScheduleEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtistOnScheduleEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistOnScheduleEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArtistOnScheduleEvent model
   */
  readonly fields: ArtistOnScheduleEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArtistOnScheduleEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistOnScheduleEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artist<T extends ArtistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistDefaultArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scheduleEvent<T extends ScheduleEventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleEventDefaultArgs<ExtArgs>>): Prisma__ScheduleEventClient<$Result.GetResult<Prisma.$ScheduleEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArtistOnScheduleEvent model
   */
  interface ArtistOnScheduleEventFieldRefs {
    readonly artistId: FieldRef<"ArtistOnScheduleEvent", 'String'>
    readonly scheduleEventId: FieldRef<"ArtistOnScheduleEvent", 'String'>
    readonly assignedAt: FieldRef<"ArtistOnScheduleEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArtistOnScheduleEvent findUnique
   */
  export type ArtistOnScheduleEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistOnScheduleEvent
     */
    select?: ArtistOnScheduleEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistOnScheduleEvent
     */
    omit?: ArtistOnScheduleEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistOnScheduleEventInclude<ExtArgs> | null
    /**
     * Filter, which ArtistOnScheduleEvent to fetch.
     */
    where: ArtistOnScheduleEventWhereUniqueInput
  }

  /**
   * ArtistOnScheduleEvent findUniqueOrThrow
   */
  export type ArtistOnScheduleEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistOnScheduleEvent
     */
    select?: ArtistOnScheduleEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistOnScheduleEvent
     */
    omit?: ArtistOnScheduleEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistOnScheduleEventInclude<ExtArgs> | null
    /**
     * Filter, which ArtistOnScheduleEvent to fetch.
     */
    where: ArtistOnScheduleEventWhereUniqueInput
  }

  /**
   * ArtistOnScheduleEvent findFirst
   */
  export type ArtistOnScheduleEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistOnScheduleEvent
     */
    select?: ArtistOnScheduleEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistOnScheduleEvent
     */
    omit?: ArtistOnScheduleEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistOnScheduleEventInclude<ExtArgs> | null
    /**
     * Filter, which ArtistOnScheduleEvent to fetch.
     */
    where?: ArtistOnScheduleEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistOnScheduleEvents to fetch.
     */
    orderBy?: ArtistOnScheduleEventOrderByWithRelationInput | ArtistOnScheduleEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistOnScheduleEvents.
     */
    cursor?: ArtistOnScheduleEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistOnScheduleEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistOnScheduleEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistOnScheduleEvents.
     */
    distinct?: ArtistOnScheduleEventScalarFieldEnum | ArtistOnScheduleEventScalarFieldEnum[]
  }

  /**
   * ArtistOnScheduleEvent findFirstOrThrow
   */
  export type ArtistOnScheduleEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistOnScheduleEvent
     */
    select?: ArtistOnScheduleEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistOnScheduleEvent
     */
    omit?: ArtistOnScheduleEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistOnScheduleEventInclude<ExtArgs> | null
    /**
     * Filter, which ArtistOnScheduleEvent to fetch.
     */
    where?: ArtistOnScheduleEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistOnScheduleEvents to fetch.
     */
    orderBy?: ArtistOnScheduleEventOrderByWithRelationInput | ArtistOnScheduleEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistOnScheduleEvents.
     */
    cursor?: ArtistOnScheduleEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistOnScheduleEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistOnScheduleEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistOnScheduleEvents.
     */
    distinct?: ArtistOnScheduleEventScalarFieldEnum | ArtistOnScheduleEventScalarFieldEnum[]
  }

  /**
   * ArtistOnScheduleEvent findMany
   */
  export type ArtistOnScheduleEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistOnScheduleEvent
     */
    select?: ArtistOnScheduleEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistOnScheduleEvent
     */
    omit?: ArtistOnScheduleEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistOnScheduleEventInclude<ExtArgs> | null
    /**
     * Filter, which ArtistOnScheduleEvents to fetch.
     */
    where?: ArtistOnScheduleEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistOnScheduleEvents to fetch.
     */
    orderBy?: ArtistOnScheduleEventOrderByWithRelationInput | ArtistOnScheduleEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArtistOnScheduleEvents.
     */
    cursor?: ArtistOnScheduleEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistOnScheduleEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistOnScheduleEvents.
     */
    skip?: number
    distinct?: ArtistOnScheduleEventScalarFieldEnum | ArtistOnScheduleEventScalarFieldEnum[]
  }

  /**
   * ArtistOnScheduleEvent create
   */
  export type ArtistOnScheduleEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistOnScheduleEvent
     */
    select?: ArtistOnScheduleEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistOnScheduleEvent
     */
    omit?: ArtistOnScheduleEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistOnScheduleEventInclude<ExtArgs> | null
    /**
     * The data needed to create a ArtistOnScheduleEvent.
     */
    data: XOR<ArtistOnScheduleEventCreateInput, ArtistOnScheduleEventUncheckedCreateInput>
  }

  /**
   * ArtistOnScheduleEvent createMany
   */
  export type ArtistOnScheduleEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArtistOnScheduleEvents.
     */
    data: ArtistOnScheduleEventCreateManyInput | ArtistOnScheduleEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArtistOnScheduleEvent createManyAndReturn
   */
  export type ArtistOnScheduleEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistOnScheduleEvent
     */
    select?: ArtistOnScheduleEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistOnScheduleEvent
     */
    omit?: ArtistOnScheduleEventOmit<ExtArgs> | null
    /**
     * The data used to create many ArtistOnScheduleEvents.
     */
    data: ArtistOnScheduleEventCreateManyInput | ArtistOnScheduleEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistOnScheduleEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArtistOnScheduleEvent update
   */
  export type ArtistOnScheduleEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistOnScheduleEvent
     */
    select?: ArtistOnScheduleEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistOnScheduleEvent
     */
    omit?: ArtistOnScheduleEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistOnScheduleEventInclude<ExtArgs> | null
    /**
     * The data needed to update a ArtistOnScheduleEvent.
     */
    data: XOR<ArtistOnScheduleEventUpdateInput, ArtistOnScheduleEventUncheckedUpdateInput>
    /**
     * Choose, which ArtistOnScheduleEvent to update.
     */
    where: ArtistOnScheduleEventWhereUniqueInput
  }

  /**
   * ArtistOnScheduleEvent updateMany
   */
  export type ArtistOnScheduleEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArtistOnScheduleEvents.
     */
    data: XOR<ArtistOnScheduleEventUpdateManyMutationInput, ArtistOnScheduleEventUncheckedUpdateManyInput>
    /**
     * Filter which ArtistOnScheduleEvents to update
     */
    where?: ArtistOnScheduleEventWhereInput
    /**
     * Limit how many ArtistOnScheduleEvents to update.
     */
    limit?: number
  }

  /**
   * ArtistOnScheduleEvent updateManyAndReturn
   */
  export type ArtistOnScheduleEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistOnScheduleEvent
     */
    select?: ArtistOnScheduleEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistOnScheduleEvent
     */
    omit?: ArtistOnScheduleEventOmit<ExtArgs> | null
    /**
     * The data used to update ArtistOnScheduleEvents.
     */
    data: XOR<ArtistOnScheduleEventUpdateManyMutationInput, ArtistOnScheduleEventUncheckedUpdateManyInput>
    /**
     * Filter which ArtistOnScheduleEvents to update
     */
    where?: ArtistOnScheduleEventWhereInput
    /**
     * Limit how many ArtistOnScheduleEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistOnScheduleEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArtistOnScheduleEvent upsert
   */
  export type ArtistOnScheduleEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistOnScheduleEvent
     */
    select?: ArtistOnScheduleEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistOnScheduleEvent
     */
    omit?: ArtistOnScheduleEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistOnScheduleEventInclude<ExtArgs> | null
    /**
     * The filter to search for the ArtistOnScheduleEvent to update in case it exists.
     */
    where: ArtistOnScheduleEventWhereUniqueInput
    /**
     * In case the ArtistOnScheduleEvent found by the `where` argument doesn't exist, create a new ArtistOnScheduleEvent with this data.
     */
    create: XOR<ArtistOnScheduleEventCreateInput, ArtistOnScheduleEventUncheckedCreateInput>
    /**
     * In case the ArtistOnScheduleEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistOnScheduleEventUpdateInput, ArtistOnScheduleEventUncheckedUpdateInput>
  }

  /**
   * ArtistOnScheduleEvent delete
   */
  export type ArtistOnScheduleEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistOnScheduleEvent
     */
    select?: ArtistOnScheduleEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistOnScheduleEvent
     */
    omit?: ArtistOnScheduleEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistOnScheduleEventInclude<ExtArgs> | null
    /**
     * Filter which ArtistOnScheduleEvent to delete.
     */
    where: ArtistOnScheduleEventWhereUniqueInput
  }

  /**
   * ArtistOnScheduleEvent deleteMany
   */
  export type ArtistOnScheduleEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtistOnScheduleEvents to delete
     */
    where?: ArtistOnScheduleEventWhereInput
    /**
     * Limit how many ArtistOnScheduleEvents to delete.
     */
    limit?: number
  }

  /**
   * ArtistOnScheduleEvent without action
   */
  export type ArtistOnScheduleEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistOnScheduleEvent
     */
    select?: ArtistOnScheduleEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistOnScheduleEvent
     */
    omit?: ArtistOnScheduleEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistOnScheduleEventInclude<ExtArgs> | null
  }


  /**
   * Model Booth
   */

  export type AggregateBooth = {
    _count: BoothCountAggregateOutputType | null
    _min: BoothMinAggregateOutputType | null
    _max: BoothMaxAggregateOutputType | null
  }

  export type BoothMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    operatingHours: string | null
    category: string | null
    isPopular: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    festivalId: string | null
    boothOperatorId: string | null
    operatorUserId: string | null
  }

  export type BoothMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    operatingHours: string | null
    category: string | null
    isPopular: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    festivalId: string | null
    boothOperatorId: string | null
    operatorUserId: string | null
  }

  export type BoothCountAggregateOutputType = {
    id: number
    name: number
    description: number
    mapCoordinates: number
    imageUrl: number
    operatingHours: number
    category: number
    isPopular: number
    createdAt: number
    updatedAt: number
    festivalId: number
    boothOperatorId: number
    operatorUserId: number
    _all: number
  }


  export type BoothMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    operatingHours?: true
    category?: true
    isPopular?: true
    createdAt?: true
    updatedAt?: true
    festivalId?: true
    boothOperatorId?: true
    operatorUserId?: true
  }

  export type BoothMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    operatingHours?: true
    category?: true
    isPopular?: true
    createdAt?: true
    updatedAt?: true
    festivalId?: true
    boothOperatorId?: true
    operatorUserId?: true
  }

  export type BoothCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    mapCoordinates?: true
    imageUrl?: true
    operatingHours?: true
    category?: true
    isPopular?: true
    createdAt?: true
    updatedAt?: true
    festivalId?: true
    boothOperatorId?: true
    operatorUserId?: true
    _all?: true
  }

  export type BoothAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booth to aggregate.
     */
    where?: BoothWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Booths to fetch.
     */
    orderBy?: BoothOrderByWithRelationInput | BoothOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoothWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Booths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Booths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Booths
    **/
    _count?: true | BoothCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoothMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoothMaxAggregateInputType
  }

  export type GetBoothAggregateType<T extends BoothAggregateArgs> = {
        [P in keyof T & keyof AggregateBooth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooth[P]>
      : GetScalarType<T[P], AggregateBooth[P]>
  }




  export type BoothGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoothWhereInput
    orderBy?: BoothOrderByWithAggregationInput | BoothOrderByWithAggregationInput[]
    by: BoothScalarFieldEnum[] | BoothScalarFieldEnum
    having?: BoothScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoothCountAggregateInputType | true
    _min?: BoothMinAggregateInputType
    _max?: BoothMaxAggregateInputType
  }

  export type BoothGroupByOutputType = {
    id: string
    name: string
    description: string | null
    mapCoordinates: JsonValue | null
    imageUrl: string | null
    operatingHours: string | null
    category: string
    isPopular: boolean
    createdAt: Date
    updatedAt: Date
    festivalId: string
    boothOperatorId: string
    operatorUserId: string | null
    _count: BoothCountAggregateOutputType | null
    _min: BoothMinAggregateOutputType | null
    _max: BoothMaxAggregateOutputType | null
  }

  type GetBoothGroupByPayload<T extends BoothGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoothGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoothGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoothGroupByOutputType[P]>
            : GetScalarType<T[P], BoothGroupByOutputType[P]>
        }
      >
    >


  export type BoothSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    mapCoordinates?: boolean
    imageUrl?: boolean
    operatingHours?: boolean
    category?: boolean
    isPopular?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festivalId?: boolean
    boothOperatorId?: boolean
    operatorUserId?: boolean
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
    boothOperator?: boolean | BoothOperatorDefaultArgs<ExtArgs>
    operatorUser?: boolean | Booth$operatorUserArgs<ExtArgs>
    menuItems?: boolean | Booth$menuItemsArgs<ExtArgs>
    _count?: boolean | BoothCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booth"]>

  export type BoothSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    mapCoordinates?: boolean
    imageUrl?: boolean
    operatingHours?: boolean
    category?: boolean
    isPopular?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festivalId?: boolean
    boothOperatorId?: boolean
    operatorUserId?: boolean
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
    boothOperator?: boolean | BoothOperatorDefaultArgs<ExtArgs>
    operatorUser?: boolean | Booth$operatorUserArgs<ExtArgs>
  }, ExtArgs["result"]["booth"]>

  export type BoothSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    mapCoordinates?: boolean
    imageUrl?: boolean
    operatingHours?: boolean
    category?: boolean
    isPopular?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festivalId?: boolean
    boothOperatorId?: boolean
    operatorUserId?: boolean
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
    boothOperator?: boolean | BoothOperatorDefaultArgs<ExtArgs>
    operatorUser?: boolean | Booth$operatorUserArgs<ExtArgs>
  }, ExtArgs["result"]["booth"]>

  export type BoothSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    mapCoordinates?: boolean
    imageUrl?: boolean
    operatingHours?: boolean
    category?: boolean
    isPopular?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festivalId?: boolean
    boothOperatorId?: boolean
    operatorUserId?: boolean
  }

  export type BoothOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "mapCoordinates" | "imageUrl" | "operatingHours" | "category" | "isPopular" | "createdAt" | "updatedAt" | "festivalId" | "boothOperatorId" | "operatorUserId", ExtArgs["result"]["booth"]>
  export type BoothInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
    boothOperator?: boolean | BoothOperatorDefaultArgs<ExtArgs>
    operatorUser?: boolean | Booth$operatorUserArgs<ExtArgs>
    menuItems?: boolean | Booth$menuItemsArgs<ExtArgs>
    _count?: boolean | BoothCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BoothIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
    boothOperator?: boolean | BoothOperatorDefaultArgs<ExtArgs>
    operatorUser?: boolean | Booth$operatorUserArgs<ExtArgs>
  }
  export type BoothIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
    boothOperator?: boolean | BoothOperatorDefaultArgs<ExtArgs>
    operatorUser?: boolean | Booth$operatorUserArgs<ExtArgs>
  }

  export type $BoothPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booth"
    objects: {
      festival: Prisma.$FestivalPayload<ExtArgs>
      boothOperator: Prisma.$BoothOperatorPayload<ExtArgs>
      operatorUser: Prisma.$UserPayload<ExtArgs> | null
      menuItems: Prisma.$MenuItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      mapCoordinates: Prisma.JsonValue | null
      imageUrl: string | null
      operatingHours: string | null
      category: string
      isPopular: boolean
      createdAt: Date
      updatedAt: Date
      festivalId: string
      boothOperatorId: string
      operatorUserId: string | null
    }, ExtArgs["result"]["booth"]>
    composites: {}
  }

  type BoothGetPayload<S extends boolean | null | undefined | BoothDefaultArgs> = $Result.GetResult<Prisma.$BoothPayload, S>

  type BoothCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoothFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoothCountAggregateInputType | true
    }

  export interface BoothDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booth'], meta: { name: 'Booth' } }
    /**
     * Find zero or one Booth that matches the filter.
     * @param {BoothFindUniqueArgs} args - Arguments to find a Booth
     * @example
     * // Get one Booth
     * const booth = await prisma.booth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoothFindUniqueArgs>(args: SelectSubset<T, BoothFindUniqueArgs<ExtArgs>>): Prisma__BoothClient<$Result.GetResult<Prisma.$BoothPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoothFindUniqueOrThrowArgs} args - Arguments to find a Booth
     * @example
     * // Get one Booth
     * const booth = await prisma.booth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoothFindUniqueOrThrowArgs>(args: SelectSubset<T, BoothFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoothClient<$Result.GetResult<Prisma.$BoothPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoothFindFirstArgs} args - Arguments to find a Booth
     * @example
     * // Get one Booth
     * const booth = await prisma.booth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoothFindFirstArgs>(args?: SelectSubset<T, BoothFindFirstArgs<ExtArgs>>): Prisma__BoothClient<$Result.GetResult<Prisma.$BoothPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoothFindFirstOrThrowArgs} args - Arguments to find a Booth
     * @example
     * // Get one Booth
     * const booth = await prisma.booth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoothFindFirstOrThrowArgs>(args?: SelectSubset<T, BoothFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoothClient<$Result.GetResult<Prisma.$BoothPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Booths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoothFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Booths
     * const booths = await prisma.booth.findMany()
     * 
     * // Get first 10 Booths
     * const booths = await prisma.booth.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boothWithIdOnly = await prisma.booth.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoothFindManyArgs>(args?: SelectSubset<T, BoothFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoothPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booth.
     * @param {BoothCreateArgs} args - Arguments to create a Booth.
     * @example
     * // Create one Booth
     * const Booth = await prisma.booth.create({
     *   data: {
     *     // ... data to create a Booth
     *   }
     * })
     * 
     */
    create<T extends BoothCreateArgs>(args: SelectSubset<T, BoothCreateArgs<ExtArgs>>): Prisma__BoothClient<$Result.GetResult<Prisma.$BoothPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Booths.
     * @param {BoothCreateManyArgs} args - Arguments to create many Booths.
     * @example
     * // Create many Booths
     * const booth = await prisma.booth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoothCreateManyArgs>(args?: SelectSubset<T, BoothCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Booths and returns the data saved in the database.
     * @param {BoothCreateManyAndReturnArgs} args - Arguments to create many Booths.
     * @example
     * // Create many Booths
     * const booth = await prisma.booth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Booths and only return the `id`
     * const boothWithIdOnly = await prisma.booth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoothCreateManyAndReturnArgs>(args?: SelectSubset<T, BoothCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoothPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booth.
     * @param {BoothDeleteArgs} args - Arguments to delete one Booth.
     * @example
     * // Delete one Booth
     * const Booth = await prisma.booth.delete({
     *   where: {
     *     // ... filter to delete one Booth
     *   }
     * })
     * 
     */
    delete<T extends BoothDeleteArgs>(args: SelectSubset<T, BoothDeleteArgs<ExtArgs>>): Prisma__BoothClient<$Result.GetResult<Prisma.$BoothPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booth.
     * @param {BoothUpdateArgs} args - Arguments to update one Booth.
     * @example
     * // Update one Booth
     * const booth = await prisma.booth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoothUpdateArgs>(args: SelectSubset<T, BoothUpdateArgs<ExtArgs>>): Prisma__BoothClient<$Result.GetResult<Prisma.$BoothPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Booths.
     * @param {BoothDeleteManyArgs} args - Arguments to filter Booths to delete.
     * @example
     * // Delete a few Booths
     * const { count } = await prisma.booth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoothDeleteManyArgs>(args?: SelectSubset<T, BoothDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Booths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoothUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Booths
     * const booth = await prisma.booth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoothUpdateManyArgs>(args: SelectSubset<T, BoothUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Booths and returns the data updated in the database.
     * @param {BoothUpdateManyAndReturnArgs} args - Arguments to update many Booths.
     * @example
     * // Update many Booths
     * const booth = await prisma.booth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Booths and only return the `id`
     * const boothWithIdOnly = await prisma.booth.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BoothUpdateManyAndReturnArgs>(args: SelectSubset<T, BoothUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoothPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booth.
     * @param {BoothUpsertArgs} args - Arguments to update or create a Booth.
     * @example
     * // Update or create a Booth
     * const booth = await prisma.booth.upsert({
     *   create: {
     *     // ... data to create a Booth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booth we want to update
     *   }
     * })
     */
    upsert<T extends BoothUpsertArgs>(args: SelectSubset<T, BoothUpsertArgs<ExtArgs>>): Prisma__BoothClient<$Result.GetResult<Prisma.$BoothPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Booths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoothCountArgs} args - Arguments to filter Booths to count.
     * @example
     * // Count the number of Booths
     * const count = await prisma.booth.count({
     *   where: {
     *     // ... the filter for the Booths we want to count
     *   }
     * })
    **/
    count<T extends BoothCountArgs>(
      args?: Subset<T, BoothCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoothCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoothAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoothAggregateArgs>(args: Subset<T, BoothAggregateArgs>): Prisma.PrismaPromise<GetBoothAggregateType<T>>

    /**
     * Group by Booth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoothGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BoothGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoothGroupByArgs['orderBy'] }
        : { orderBy?: BoothGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BoothGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoothGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booth model
   */
  readonly fields: BoothFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoothClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    festival<T extends FestivalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FestivalDefaultArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    boothOperator<T extends BoothOperatorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoothOperatorDefaultArgs<ExtArgs>>): Prisma__BoothOperatorClient<$Result.GetResult<Prisma.$BoothOperatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    operatorUser<T extends Booth$operatorUserArgs<ExtArgs> = {}>(args?: Subset<T, Booth$operatorUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    menuItems<T extends Booth$menuItemsArgs<ExtArgs> = {}>(args?: Subset<T, Booth$menuItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booth model
   */
  interface BoothFieldRefs {
    readonly id: FieldRef<"Booth", 'String'>
    readonly name: FieldRef<"Booth", 'String'>
    readonly description: FieldRef<"Booth", 'String'>
    readonly mapCoordinates: FieldRef<"Booth", 'Json'>
    readonly imageUrl: FieldRef<"Booth", 'String'>
    readonly operatingHours: FieldRef<"Booth", 'String'>
    readonly category: FieldRef<"Booth", 'String'>
    readonly isPopular: FieldRef<"Booth", 'Boolean'>
    readonly createdAt: FieldRef<"Booth", 'DateTime'>
    readonly updatedAt: FieldRef<"Booth", 'DateTime'>
    readonly festivalId: FieldRef<"Booth", 'String'>
    readonly boothOperatorId: FieldRef<"Booth", 'String'>
    readonly operatorUserId: FieldRef<"Booth", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Booth findUnique
   */
  export type BoothFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booth
     */
    select?: BoothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booth
     */
    omit?: BoothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothInclude<ExtArgs> | null
    /**
     * Filter, which Booth to fetch.
     */
    where: BoothWhereUniqueInput
  }

  /**
   * Booth findUniqueOrThrow
   */
  export type BoothFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booth
     */
    select?: BoothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booth
     */
    omit?: BoothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothInclude<ExtArgs> | null
    /**
     * Filter, which Booth to fetch.
     */
    where: BoothWhereUniqueInput
  }

  /**
   * Booth findFirst
   */
  export type BoothFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booth
     */
    select?: BoothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booth
     */
    omit?: BoothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothInclude<ExtArgs> | null
    /**
     * Filter, which Booth to fetch.
     */
    where?: BoothWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Booths to fetch.
     */
    orderBy?: BoothOrderByWithRelationInput | BoothOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Booths.
     */
    cursor?: BoothWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Booths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Booths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Booths.
     */
    distinct?: BoothScalarFieldEnum | BoothScalarFieldEnum[]
  }

  /**
   * Booth findFirstOrThrow
   */
  export type BoothFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booth
     */
    select?: BoothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booth
     */
    omit?: BoothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothInclude<ExtArgs> | null
    /**
     * Filter, which Booth to fetch.
     */
    where?: BoothWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Booths to fetch.
     */
    orderBy?: BoothOrderByWithRelationInput | BoothOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Booths.
     */
    cursor?: BoothWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Booths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Booths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Booths.
     */
    distinct?: BoothScalarFieldEnum | BoothScalarFieldEnum[]
  }

  /**
   * Booth findMany
   */
  export type BoothFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booth
     */
    select?: BoothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booth
     */
    omit?: BoothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothInclude<ExtArgs> | null
    /**
     * Filter, which Booths to fetch.
     */
    where?: BoothWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Booths to fetch.
     */
    orderBy?: BoothOrderByWithRelationInput | BoothOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Booths.
     */
    cursor?: BoothWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Booths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Booths.
     */
    skip?: number
    distinct?: BoothScalarFieldEnum | BoothScalarFieldEnum[]
  }

  /**
   * Booth create
   */
  export type BoothCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booth
     */
    select?: BoothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booth
     */
    omit?: BoothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothInclude<ExtArgs> | null
    /**
     * The data needed to create a Booth.
     */
    data: XOR<BoothCreateInput, BoothUncheckedCreateInput>
  }

  /**
   * Booth createMany
   */
  export type BoothCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Booths.
     */
    data: BoothCreateManyInput | BoothCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booth createManyAndReturn
   */
  export type BoothCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booth
     */
    select?: BoothSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booth
     */
    omit?: BoothOmit<ExtArgs> | null
    /**
     * The data used to create many Booths.
     */
    data: BoothCreateManyInput | BoothCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booth update
   */
  export type BoothUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booth
     */
    select?: BoothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booth
     */
    omit?: BoothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothInclude<ExtArgs> | null
    /**
     * The data needed to update a Booth.
     */
    data: XOR<BoothUpdateInput, BoothUncheckedUpdateInput>
    /**
     * Choose, which Booth to update.
     */
    where: BoothWhereUniqueInput
  }

  /**
   * Booth updateMany
   */
  export type BoothUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Booths.
     */
    data: XOR<BoothUpdateManyMutationInput, BoothUncheckedUpdateManyInput>
    /**
     * Filter which Booths to update
     */
    where?: BoothWhereInput
    /**
     * Limit how many Booths to update.
     */
    limit?: number
  }

  /**
   * Booth updateManyAndReturn
   */
  export type BoothUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booth
     */
    select?: BoothSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booth
     */
    omit?: BoothOmit<ExtArgs> | null
    /**
     * The data used to update Booths.
     */
    data: XOR<BoothUpdateManyMutationInput, BoothUncheckedUpdateManyInput>
    /**
     * Filter which Booths to update
     */
    where?: BoothWhereInput
    /**
     * Limit how many Booths to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booth upsert
   */
  export type BoothUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booth
     */
    select?: BoothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booth
     */
    omit?: BoothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothInclude<ExtArgs> | null
    /**
     * The filter to search for the Booth to update in case it exists.
     */
    where: BoothWhereUniqueInput
    /**
     * In case the Booth found by the `where` argument doesn't exist, create a new Booth with this data.
     */
    create: XOR<BoothCreateInput, BoothUncheckedCreateInput>
    /**
     * In case the Booth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoothUpdateInput, BoothUncheckedUpdateInput>
  }

  /**
   * Booth delete
   */
  export type BoothDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booth
     */
    select?: BoothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booth
     */
    omit?: BoothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothInclude<ExtArgs> | null
    /**
     * Filter which Booth to delete.
     */
    where: BoothWhereUniqueInput
  }

  /**
   * Booth deleteMany
   */
  export type BoothDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booths to delete
     */
    where?: BoothWhereInput
    /**
     * Limit how many Booths to delete.
     */
    limit?: number
  }

  /**
   * Booth.operatorUser
   */
  export type Booth$operatorUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Booth.menuItems
   */
  export type Booth$menuItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    cursor?: MenuItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * Booth without action
   */
  export type BoothDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booth
     */
    select?: BoothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booth
     */
    omit?: BoothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothInclude<ExtArgs> | null
  }


  /**
   * Model BoothOperator
   */

  export type AggregateBoothOperator = {
    _count: BoothOperatorCountAggregateOutputType | null
    _min: BoothOperatorMinAggregateOutputType | null
    _max: BoothOperatorMaxAggregateOutputType | null
  }

  export type BoothOperatorMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    contactInfo: string | null
    logoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoothOperatorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    contactInfo: string | null
    logoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoothOperatorCountAggregateOutputType = {
    id: number
    name: number
    type: number
    contactInfo: number
    logoUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BoothOperatorMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    contactInfo?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoothOperatorMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    contactInfo?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoothOperatorCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    contactInfo?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BoothOperatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoothOperator to aggregate.
     */
    where?: BoothOperatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoothOperators to fetch.
     */
    orderBy?: BoothOperatorOrderByWithRelationInput | BoothOperatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoothOperatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoothOperators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoothOperators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BoothOperators
    **/
    _count?: true | BoothOperatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoothOperatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoothOperatorMaxAggregateInputType
  }

  export type GetBoothOperatorAggregateType<T extends BoothOperatorAggregateArgs> = {
        [P in keyof T & keyof AggregateBoothOperator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoothOperator[P]>
      : GetScalarType<T[P], AggregateBoothOperator[P]>
  }




  export type BoothOperatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoothOperatorWhereInput
    orderBy?: BoothOperatorOrderByWithAggregationInput | BoothOperatorOrderByWithAggregationInput[]
    by: BoothOperatorScalarFieldEnum[] | BoothOperatorScalarFieldEnum
    having?: BoothOperatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoothOperatorCountAggregateInputType | true
    _min?: BoothOperatorMinAggregateInputType
    _max?: BoothOperatorMaxAggregateInputType
  }

  export type BoothOperatorGroupByOutputType = {
    id: string
    name: string
    type: string
    contactInfo: string | null
    logoUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: BoothOperatorCountAggregateOutputType | null
    _min: BoothOperatorMinAggregateOutputType | null
    _max: BoothOperatorMaxAggregateOutputType | null
  }

  type GetBoothOperatorGroupByPayload<T extends BoothOperatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoothOperatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoothOperatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoothOperatorGroupByOutputType[P]>
            : GetScalarType<T[P], BoothOperatorGroupByOutputType[P]>
        }
      >
    >


  export type BoothOperatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    contactInfo?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    booths?: boolean | BoothOperator$boothsArgs<ExtArgs>
    _count?: boolean | BoothOperatorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boothOperator"]>

  export type BoothOperatorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    contactInfo?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["boothOperator"]>

  export type BoothOperatorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    contactInfo?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["boothOperator"]>

  export type BoothOperatorSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    contactInfo?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BoothOperatorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "contactInfo" | "logoUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["boothOperator"]>
  export type BoothOperatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booths?: boolean | BoothOperator$boothsArgs<ExtArgs>
    _count?: boolean | BoothOperatorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BoothOperatorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BoothOperatorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BoothOperatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BoothOperator"
    objects: {
      booths: Prisma.$BoothPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      contactInfo: string | null
      logoUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["boothOperator"]>
    composites: {}
  }

  type BoothOperatorGetPayload<S extends boolean | null | undefined | BoothOperatorDefaultArgs> = $Result.GetResult<Prisma.$BoothOperatorPayload, S>

  type BoothOperatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoothOperatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoothOperatorCountAggregateInputType | true
    }

  export interface BoothOperatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BoothOperator'], meta: { name: 'BoothOperator' } }
    /**
     * Find zero or one BoothOperator that matches the filter.
     * @param {BoothOperatorFindUniqueArgs} args - Arguments to find a BoothOperator
     * @example
     * // Get one BoothOperator
     * const boothOperator = await prisma.boothOperator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoothOperatorFindUniqueArgs>(args: SelectSubset<T, BoothOperatorFindUniqueArgs<ExtArgs>>): Prisma__BoothOperatorClient<$Result.GetResult<Prisma.$BoothOperatorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BoothOperator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoothOperatorFindUniqueOrThrowArgs} args - Arguments to find a BoothOperator
     * @example
     * // Get one BoothOperator
     * const boothOperator = await prisma.boothOperator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoothOperatorFindUniqueOrThrowArgs>(args: SelectSubset<T, BoothOperatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoothOperatorClient<$Result.GetResult<Prisma.$BoothOperatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BoothOperator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoothOperatorFindFirstArgs} args - Arguments to find a BoothOperator
     * @example
     * // Get one BoothOperator
     * const boothOperator = await prisma.boothOperator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoothOperatorFindFirstArgs>(args?: SelectSubset<T, BoothOperatorFindFirstArgs<ExtArgs>>): Prisma__BoothOperatorClient<$Result.GetResult<Prisma.$BoothOperatorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BoothOperator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoothOperatorFindFirstOrThrowArgs} args - Arguments to find a BoothOperator
     * @example
     * // Get one BoothOperator
     * const boothOperator = await prisma.boothOperator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoothOperatorFindFirstOrThrowArgs>(args?: SelectSubset<T, BoothOperatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoothOperatorClient<$Result.GetResult<Prisma.$BoothOperatorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BoothOperators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoothOperatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoothOperators
     * const boothOperators = await prisma.boothOperator.findMany()
     * 
     * // Get first 10 BoothOperators
     * const boothOperators = await prisma.boothOperator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boothOperatorWithIdOnly = await prisma.boothOperator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoothOperatorFindManyArgs>(args?: SelectSubset<T, BoothOperatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoothOperatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BoothOperator.
     * @param {BoothOperatorCreateArgs} args - Arguments to create a BoothOperator.
     * @example
     * // Create one BoothOperator
     * const BoothOperator = await prisma.boothOperator.create({
     *   data: {
     *     // ... data to create a BoothOperator
     *   }
     * })
     * 
     */
    create<T extends BoothOperatorCreateArgs>(args: SelectSubset<T, BoothOperatorCreateArgs<ExtArgs>>): Prisma__BoothOperatorClient<$Result.GetResult<Prisma.$BoothOperatorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BoothOperators.
     * @param {BoothOperatorCreateManyArgs} args - Arguments to create many BoothOperators.
     * @example
     * // Create many BoothOperators
     * const boothOperator = await prisma.boothOperator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoothOperatorCreateManyArgs>(args?: SelectSubset<T, BoothOperatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BoothOperators and returns the data saved in the database.
     * @param {BoothOperatorCreateManyAndReturnArgs} args - Arguments to create many BoothOperators.
     * @example
     * // Create many BoothOperators
     * const boothOperator = await prisma.boothOperator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BoothOperators and only return the `id`
     * const boothOperatorWithIdOnly = await prisma.boothOperator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoothOperatorCreateManyAndReturnArgs>(args?: SelectSubset<T, BoothOperatorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoothOperatorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BoothOperator.
     * @param {BoothOperatorDeleteArgs} args - Arguments to delete one BoothOperator.
     * @example
     * // Delete one BoothOperator
     * const BoothOperator = await prisma.boothOperator.delete({
     *   where: {
     *     // ... filter to delete one BoothOperator
     *   }
     * })
     * 
     */
    delete<T extends BoothOperatorDeleteArgs>(args: SelectSubset<T, BoothOperatorDeleteArgs<ExtArgs>>): Prisma__BoothOperatorClient<$Result.GetResult<Prisma.$BoothOperatorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BoothOperator.
     * @param {BoothOperatorUpdateArgs} args - Arguments to update one BoothOperator.
     * @example
     * // Update one BoothOperator
     * const boothOperator = await prisma.boothOperator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoothOperatorUpdateArgs>(args: SelectSubset<T, BoothOperatorUpdateArgs<ExtArgs>>): Prisma__BoothOperatorClient<$Result.GetResult<Prisma.$BoothOperatorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BoothOperators.
     * @param {BoothOperatorDeleteManyArgs} args - Arguments to filter BoothOperators to delete.
     * @example
     * // Delete a few BoothOperators
     * const { count } = await prisma.boothOperator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoothOperatorDeleteManyArgs>(args?: SelectSubset<T, BoothOperatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoothOperators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoothOperatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoothOperators
     * const boothOperator = await prisma.boothOperator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoothOperatorUpdateManyArgs>(args: SelectSubset<T, BoothOperatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoothOperators and returns the data updated in the database.
     * @param {BoothOperatorUpdateManyAndReturnArgs} args - Arguments to update many BoothOperators.
     * @example
     * // Update many BoothOperators
     * const boothOperator = await prisma.boothOperator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BoothOperators and only return the `id`
     * const boothOperatorWithIdOnly = await prisma.boothOperator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BoothOperatorUpdateManyAndReturnArgs>(args: SelectSubset<T, BoothOperatorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoothOperatorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BoothOperator.
     * @param {BoothOperatorUpsertArgs} args - Arguments to update or create a BoothOperator.
     * @example
     * // Update or create a BoothOperator
     * const boothOperator = await prisma.boothOperator.upsert({
     *   create: {
     *     // ... data to create a BoothOperator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoothOperator we want to update
     *   }
     * })
     */
    upsert<T extends BoothOperatorUpsertArgs>(args: SelectSubset<T, BoothOperatorUpsertArgs<ExtArgs>>): Prisma__BoothOperatorClient<$Result.GetResult<Prisma.$BoothOperatorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BoothOperators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoothOperatorCountArgs} args - Arguments to filter BoothOperators to count.
     * @example
     * // Count the number of BoothOperators
     * const count = await prisma.boothOperator.count({
     *   where: {
     *     // ... the filter for the BoothOperators we want to count
     *   }
     * })
    **/
    count<T extends BoothOperatorCountArgs>(
      args?: Subset<T, BoothOperatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoothOperatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoothOperator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoothOperatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoothOperatorAggregateArgs>(args: Subset<T, BoothOperatorAggregateArgs>): Prisma.PrismaPromise<GetBoothOperatorAggregateType<T>>

    /**
     * Group by BoothOperator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoothOperatorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BoothOperatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoothOperatorGroupByArgs['orderBy'] }
        : { orderBy?: BoothOperatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BoothOperatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoothOperatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BoothOperator model
   */
  readonly fields: BoothOperatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BoothOperator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoothOperatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booths<T extends BoothOperator$boothsArgs<ExtArgs> = {}>(args?: Subset<T, BoothOperator$boothsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoothPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BoothOperator model
   */
  interface BoothOperatorFieldRefs {
    readonly id: FieldRef<"BoothOperator", 'String'>
    readonly name: FieldRef<"BoothOperator", 'String'>
    readonly type: FieldRef<"BoothOperator", 'String'>
    readonly contactInfo: FieldRef<"BoothOperator", 'String'>
    readonly logoUrl: FieldRef<"BoothOperator", 'String'>
    readonly createdAt: FieldRef<"BoothOperator", 'DateTime'>
    readonly updatedAt: FieldRef<"BoothOperator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BoothOperator findUnique
   */
  export type BoothOperatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoothOperator
     */
    select?: BoothOperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoothOperator
     */
    omit?: BoothOperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothOperatorInclude<ExtArgs> | null
    /**
     * Filter, which BoothOperator to fetch.
     */
    where: BoothOperatorWhereUniqueInput
  }

  /**
   * BoothOperator findUniqueOrThrow
   */
  export type BoothOperatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoothOperator
     */
    select?: BoothOperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoothOperator
     */
    omit?: BoothOperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothOperatorInclude<ExtArgs> | null
    /**
     * Filter, which BoothOperator to fetch.
     */
    where: BoothOperatorWhereUniqueInput
  }

  /**
   * BoothOperator findFirst
   */
  export type BoothOperatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoothOperator
     */
    select?: BoothOperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoothOperator
     */
    omit?: BoothOperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothOperatorInclude<ExtArgs> | null
    /**
     * Filter, which BoothOperator to fetch.
     */
    where?: BoothOperatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoothOperators to fetch.
     */
    orderBy?: BoothOperatorOrderByWithRelationInput | BoothOperatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoothOperators.
     */
    cursor?: BoothOperatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoothOperators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoothOperators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoothOperators.
     */
    distinct?: BoothOperatorScalarFieldEnum | BoothOperatorScalarFieldEnum[]
  }

  /**
   * BoothOperator findFirstOrThrow
   */
  export type BoothOperatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoothOperator
     */
    select?: BoothOperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoothOperator
     */
    omit?: BoothOperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothOperatorInclude<ExtArgs> | null
    /**
     * Filter, which BoothOperator to fetch.
     */
    where?: BoothOperatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoothOperators to fetch.
     */
    orderBy?: BoothOperatorOrderByWithRelationInput | BoothOperatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoothOperators.
     */
    cursor?: BoothOperatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoothOperators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoothOperators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoothOperators.
     */
    distinct?: BoothOperatorScalarFieldEnum | BoothOperatorScalarFieldEnum[]
  }

  /**
   * BoothOperator findMany
   */
  export type BoothOperatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoothOperator
     */
    select?: BoothOperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoothOperator
     */
    omit?: BoothOperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothOperatorInclude<ExtArgs> | null
    /**
     * Filter, which BoothOperators to fetch.
     */
    where?: BoothOperatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoothOperators to fetch.
     */
    orderBy?: BoothOperatorOrderByWithRelationInput | BoothOperatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BoothOperators.
     */
    cursor?: BoothOperatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoothOperators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoothOperators.
     */
    skip?: number
    distinct?: BoothOperatorScalarFieldEnum | BoothOperatorScalarFieldEnum[]
  }

  /**
   * BoothOperator create
   */
  export type BoothOperatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoothOperator
     */
    select?: BoothOperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoothOperator
     */
    omit?: BoothOperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothOperatorInclude<ExtArgs> | null
    /**
     * The data needed to create a BoothOperator.
     */
    data: XOR<BoothOperatorCreateInput, BoothOperatorUncheckedCreateInput>
  }

  /**
   * BoothOperator createMany
   */
  export type BoothOperatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BoothOperators.
     */
    data: BoothOperatorCreateManyInput | BoothOperatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BoothOperator createManyAndReturn
   */
  export type BoothOperatorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoothOperator
     */
    select?: BoothOperatorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BoothOperator
     */
    omit?: BoothOperatorOmit<ExtArgs> | null
    /**
     * The data used to create many BoothOperators.
     */
    data: BoothOperatorCreateManyInput | BoothOperatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BoothOperator update
   */
  export type BoothOperatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoothOperator
     */
    select?: BoothOperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoothOperator
     */
    omit?: BoothOperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothOperatorInclude<ExtArgs> | null
    /**
     * The data needed to update a BoothOperator.
     */
    data: XOR<BoothOperatorUpdateInput, BoothOperatorUncheckedUpdateInput>
    /**
     * Choose, which BoothOperator to update.
     */
    where: BoothOperatorWhereUniqueInput
  }

  /**
   * BoothOperator updateMany
   */
  export type BoothOperatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BoothOperators.
     */
    data: XOR<BoothOperatorUpdateManyMutationInput, BoothOperatorUncheckedUpdateManyInput>
    /**
     * Filter which BoothOperators to update
     */
    where?: BoothOperatorWhereInput
    /**
     * Limit how many BoothOperators to update.
     */
    limit?: number
  }

  /**
   * BoothOperator updateManyAndReturn
   */
  export type BoothOperatorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoothOperator
     */
    select?: BoothOperatorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BoothOperator
     */
    omit?: BoothOperatorOmit<ExtArgs> | null
    /**
     * The data used to update BoothOperators.
     */
    data: XOR<BoothOperatorUpdateManyMutationInput, BoothOperatorUncheckedUpdateManyInput>
    /**
     * Filter which BoothOperators to update
     */
    where?: BoothOperatorWhereInput
    /**
     * Limit how many BoothOperators to update.
     */
    limit?: number
  }

  /**
   * BoothOperator upsert
   */
  export type BoothOperatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoothOperator
     */
    select?: BoothOperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoothOperator
     */
    omit?: BoothOperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothOperatorInclude<ExtArgs> | null
    /**
     * The filter to search for the BoothOperator to update in case it exists.
     */
    where: BoothOperatorWhereUniqueInput
    /**
     * In case the BoothOperator found by the `where` argument doesn't exist, create a new BoothOperator with this data.
     */
    create: XOR<BoothOperatorCreateInput, BoothOperatorUncheckedCreateInput>
    /**
     * In case the BoothOperator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoothOperatorUpdateInput, BoothOperatorUncheckedUpdateInput>
  }

  /**
   * BoothOperator delete
   */
  export type BoothOperatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoothOperator
     */
    select?: BoothOperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoothOperator
     */
    omit?: BoothOperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothOperatorInclude<ExtArgs> | null
    /**
     * Filter which BoothOperator to delete.
     */
    where: BoothOperatorWhereUniqueInput
  }

  /**
   * BoothOperator deleteMany
   */
  export type BoothOperatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoothOperators to delete
     */
    where?: BoothOperatorWhereInput
    /**
     * Limit how many BoothOperators to delete.
     */
    limit?: number
  }

  /**
   * BoothOperator.booths
   */
  export type BoothOperator$boothsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booth
     */
    select?: BoothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booth
     */
    omit?: BoothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothInclude<ExtArgs> | null
    where?: BoothWhereInput
    orderBy?: BoothOrderByWithRelationInput | BoothOrderByWithRelationInput[]
    cursor?: BoothWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoothScalarFieldEnum | BoothScalarFieldEnum[]
  }

  /**
   * BoothOperator without action
   */
  export type BoothOperatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoothOperator
     */
    select?: BoothOperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoothOperator
     */
    omit?: BoothOperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothOperatorInclude<ExtArgs> | null
  }


  /**
   * Model MenuItem
   */

  export type AggregateMenuItem = {
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  export type MenuItemAvgAggregateOutputType = {
    price: number | null
  }

  export type MenuItemSumAggregateOutputType = {
    price: number | null
  }

  export type MenuItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    imageUrl: string | null
    isSignature: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    boothId: string | null
  }

  export type MenuItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    imageUrl: string | null
    isSignature: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    boothId: string | null
  }

  export type MenuItemCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    imageUrl: number
    isSignature: number
    createdAt: number
    updatedAt: number
    boothId: number
    _all: number
  }


  export type MenuItemAvgAggregateInputType = {
    price?: true
  }

  export type MenuItemSumAggregateInputType = {
    price?: true
  }

  export type MenuItemMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    isSignature?: true
    createdAt?: true
    updatedAt?: true
    boothId?: true
  }

  export type MenuItemMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    isSignature?: true
    createdAt?: true
    updatedAt?: true
    boothId?: true
  }

  export type MenuItemCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    isSignature?: true
    createdAt?: true
    updatedAt?: true
    boothId?: true
    _all?: true
  }

  export type MenuItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItem to aggregate.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuItems
    **/
    _count?: true | MenuItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuItemMaxAggregateInputType
  }

  export type GetMenuItemAggregateType<T extends MenuItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuItem[P]>
      : GetScalarType<T[P], AggregateMenuItem[P]>
  }




  export type MenuItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithAggregationInput | MenuItemOrderByWithAggregationInput[]
    by: MenuItemScalarFieldEnum[] | MenuItemScalarFieldEnum
    having?: MenuItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuItemCountAggregateInputType | true
    _avg?: MenuItemAvgAggregateInputType
    _sum?: MenuItemSumAggregateInputType
    _min?: MenuItemMinAggregateInputType
    _max?: MenuItemMaxAggregateInputType
  }

  export type MenuItemGroupByOutputType = {
    id: string
    name: string
    description: string | null
    price: number
    imageUrl: string | null
    isSignature: boolean
    createdAt: Date
    updatedAt: Date
    boothId: string
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  type GetMenuItemGroupByPayload<T extends MenuItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
            : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
        }
      >
    >


  export type MenuItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    isSignature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    boothId?: boolean
    booth?: boolean | BoothDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    isSignature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    boothId?: boolean
    booth?: boolean | BoothDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    isSignature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    boothId?: boolean
    booth?: boolean | BoothDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    isSignature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    boothId?: boolean
  }

  export type MenuItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "imageUrl" | "isSignature" | "createdAt" | "updatedAt" | "boothId", ExtArgs["result"]["menuItem"]>
  export type MenuItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booth?: boolean | BoothDefaultArgs<ExtArgs>
  }
  export type MenuItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booth?: boolean | BoothDefaultArgs<ExtArgs>
  }
  export type MenuItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booth?: boolean | BoothDefaultArgs<ExtArgs>
  }

  export type $MenuItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuItem"
    objects: {
      booth: Prisma.$BoothPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      price: number
      imageUrl: string | null
      isSignature: boolean
      createdAt: Date
      updatedAt: Date
      boothId: string
    }, ExtArgs["result"]["menuItem"]>
    composites: {}
  }

  type MenuItemGetPayload<S extends boolean | null | undefined | MenuItemDefaultArgs> = $Result.GetResult<Prisma.$MenuItemPayload, S>

  type MenuItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuItemCountAggregateInputType | true
    }

  export interface MenuItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuItem'], meta: { name: 'MenuItem' } }
    /**
     * Find zero or one MenuItem that matches the filter.
     * @param {MenuItemFindUniqueArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuItemFindUniqueArgs>(args: SelectSubset<T, MenuItemFindUniqueArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenuItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuItemFindUniqueOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuItemFindFirstArgs>(args?: SelectSubset<T, MenuItemFindFirstArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenuItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuItems
     * const menuItems = await prisma.menuItem.findMany()
     * 
     * // Get first 10 MenuItems
     * const menuItems = await prisma.menuItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuItemFindManyArgs>(args?: SelectSubset<T, MenuItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenuItem.
     * @param {MenuItemCreateArgs} args - Arguments to create a MenuItem.
     * @example
     * // Create one MenuItem
     * const MenuItem = await prisma.menuItem.create({
     *   data: {
     *     // ... data to create a MenuItem
     *   }
     * })
     * 
     */
    create<T extends MenuItemCreateArgs>(args: SelectSubset<T, MenuItemCreateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenuItems.
     * @param {MenuItemCreateManyArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuItemCreateManyArgs>(args?: SelectSubset<T, MenuItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuItems and returns the data saved in the database.
     * @param {MenuItemCreateManyAndReturnArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuItems and only return the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MenuItem.
     * @param {MenuItemDeleteArgs} args - Arguments to delete one MenuItem.
     * @example
     * // Delete one MenuItem
     * const MenuItem = await prisma.menuItem.delete({
     *   where: {
     *     // ... filter to delete one MenuItem
     *   }
     * })
     * 
     */
    delete<T extends MenuItemDeleteArgs>(args: SelectSubset<T, MenuItemDeleteArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenuItem.
     * @param {MenuItemUpdateArgs} args - Arguments to update one MenuItem.
     * @example
     * // Update one MenuItem
     * const menuItem = await prisma.menuItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuItemUpdateArgs>(args: SelectSubset<T, MenuItemUpdateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenuItems.
     * @param {MenuItemDeleteManyArgs} args - Arguments to filter MenuItems to delete.
     * @example
     * // Delete a few MenuItems
     * const { count } = await prisma.menuItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuItemDeleteManyArgs>(args?: SelectSubset<T, MenuItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuItemUpdateManyArgs>(args: SelectSubset<T, MenuItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems and returns the data updated in the database.
     * @param {MenuItemUpdateManyAndReturnArgs} args - Arguments to update many MenuItems.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MenuItems and only return the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MenuItemUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MenuItem.
     * @param {MenuItemUpsertArgs} args - Arguments to update or create a MenuItem.
     * @example
     * // Update or create a MenuItem
     * const menuItem = await prisma.menuItem.upsert({
     *   create: {
     *     // ... data to create a MenuItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuItem we want to update
     *   }
     * })
     */
    upsert<T extends MenuItemUpsertArgs>(args: SelectSubset<T, MenuItemUpsertArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemCountArgs} args - Arguments to filter MenuItems to count.
     * @example
     * // Count the number of MenuItems
     * const count = await prisma.menuItem.count({
     *   where: {
     *     // ... the filter for the MenuItems we want to count
     *   }
     * })
    **/
    count<T extends MenuItemCountArgs>(
      args?: Subset<T, MenuItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuItemAggregateArgs>(args: Subset<T, MenuItemAggregateArgs>): Prisma.PrismaPromise<GetMenuItemAggregateType<T>>

    /**
     * Group by MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuItemGroupByArgs['orderBy'] }
        : { orderBy?: MenuItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuItem model
   */
  readonly fields: MenuItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booth<T extends BoothDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoothDefaultArgs<ExtArgs>>): Prisma__BoothClient<$Result.GetResult<Prisma.$BoothPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MenuItem model
   */
  interface MenuItemFieldRefs {
    readonly id: FieldRef<"MenuItem", 'String'>
    readonly name: FieldRef<"MenuItem", 'String'>
    readonly description: FieldRef<"MenuItem", 'String'>
    readonly price: FieldRef<"MenuItem", 'Int'>
    readonly imageUrl: FieldRef<"MenuItem", 'String'>
    readonly isSignature: FieldRef<"MenuItem", 'Boolean'>
    readonly createdAt: FieldRef<"MenuItem", 'DateTime'>
    readonly updatedAt: FieldRef<"MenuItem", 'DateTime'>
    readonly boothId: FieldRef<"MenuItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MenuItem findUnique
   */
  export type MenuItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findUniqueOrThrow
   */
  export type MenuItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findFirst
   */
  export type MenuItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findFirstOrThrow
   */
  export type MenuItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findMany
   */
  export type MenuItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItems to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem create
   */
  export type MenuItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuItem.
     */
    data: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
  }

  /**
   * MenuItem createMany
   */
  export type MenuItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuItem createManyAndReturn
   */
  export type MenuItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuItem update
   */
  export type MenuItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuItem.
     */
    data: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
    /**
     * Choose, which MenuItem to update.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem updateMany
   */
  export type MenuItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to update.
     */
    limit?: number
  }

  /**
   * MenuItem updateManyAndReturn
   */
  export type MenuItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuItem upsert
   */
  export type MenuItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuItem to update in case it exists.
     */
    where: MenuItemWhereUniqueInput
    /**
     * In case the MenuItem found by the `where` argument doesn't exist, create a new MenuItem with this data.
     */
    create: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
    /**
     * In case the MenuItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
  }

  /**
   * MenuItem delete
   */
  export type MenuItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter which MenuItem to delete.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem deleteMany
   */
  export type MenuItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItems to delete
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to delete.
     */
    limit?: number
  }

  /**
   * MenuItem without action
   */
  export type MenuItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
  }


  /**
   * Model Notice
   */

  export type AggregateNotice = {
    _count: NoticeCountAggregateOutputType | null
    _min: NoticeMinAggregateOutputType | null
    _max: NoticeMaxAggregateOutputType | null
  }

  export type NoticeMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    category: string | null
    isPinned: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    festivalId: string | null
  }

  export type NoticeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    category: string | null
    isPinned: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    festivalId: string | null
  }

  export type NoticeCountAggregateOutputType = {
    id: number
    title: number
    content: number
    category: number
    isPinned: number
    createdAt: number
    updatedAt: number
    festivalId: number
    _all: number
  }


  export type NoticeMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    category?: true
    isPinned?: true
    createdAt?: true
    updatedAt?: true
    festivalId?: true
  }

  export type NoticeMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    category?: true
    isPinned?: true
    createdAt?: true
    updatedAt?: true
    festivalId?: true
  }

  export type NoticeCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    category?: true
    isPinned?: true
    createdAt?: true
    updatedAt?: true
    festivalId?: true
    _all?: true
  }

  export type NoticeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notice to aggregate.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notices
    **/
    _count?: true | NoticeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoticeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoticeMaxAggregateInputType
  }

  export type GetNoticeAggregateType<T extends NoticeAggregateArgs> = {
        [P in keyof T & keyof AggregateNotice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotice[P]>
      : GetScalarType<T[P], AggregateNotice[P]>
  }




  export type NoticeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticeWhereInput
    orderBy?: NoticeOrderByWithAggregationInput | NoticeOrderByWithAggregationInput[]
    by: NoticeScalarFieldEnum[] | NoticeScalarFieldEnum
    having?: NoticeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoticeCountAggregateInputType | true
    _min?: NoticeMinAggregateInputType
    _max?: NoticeMaxAggregateInputType
  }

  export type NoticeGroupByOutputType = {
    id: string
    title: string
    content: string
    category: string | null
    isPinned: boolean
    createdAt: Date
    updatedAt: Date
    festivalId: string
    _count: NoticeCountAggregateOutputType | null
    _min: NoticeMinAggregateOutputType | null
    _max: NoticeMaxAggregateOutputType | null
  }

  type GetNoticeGroupByPayload<T extends NoticeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoticeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoticeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoticeGroupByOutputType[P]>
            : GetScalarType<T[P], NoticeGroupByOutputType[P]>
        }
      >
    >


  export type NoticeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    isPinned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festivalId?: boolean
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notice"]>

  export type NoticeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    isPinned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festivalId?: boolean
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notice"]>

  export type NoticeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    isPinned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festivalId?: boolean
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notice"]>

  export type NoticeSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    isPinned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festivalId?: boolean
  }

  export type NoticeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "category" | "isPinned" | "createdAt" | "updatedAt" | "festivalId", ExtArgs["result"]["notice"]>
  export type NoticeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }
  export type NoticeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }
  export type NoticeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }

  export type $NoticePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notice"
    objects: {
      festival: Prisma.$FestivalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      category: string | null
      isPinned: boolean
      createdAt: Date
      updatedAt: Date
      festivalId: string
    }, ExtArgs["result"]["notice"]>
    composites: {}
  }

  type NoticeGetPayload<S extends boolean | null | undefined | NoticeDefaultArgs> = $Result.GetResult<Prisma.$NoticePayload, S>

  type NoticeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoticeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoticeCountAggregateInputType | true
    }

  export interface NoticeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notice'], meta: { name: 'Notice' } }
    /**
     * Find zero or one Notice that matches the filter.
     * @param {NoticeFindUniqueArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoticeFindUniqueArgs>(args: SelectSubset<T, NoticeFindUniqueArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoticeFindUniqueOrThrowArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoticeFindUniqueOrThrowArgs>(args: SelectSubset<T, NoticeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindFirstArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoticeFindFirstArgs>(args?: SelectSubset<T, NoticeFindFirstArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindFirstOrThrowArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoticeFindFirstOrThrowArgs>(args?: SelectSubset<T, NoticeFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notices
     * const notices = await prisma.notice.findMany()
     * 
     * // Get first 10 Notices
     * const notices = await prisma.notice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noticeWithIdOnly = await prisma.notice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoticeFindManyArgs>(args?: SelectSubset<T, NoticeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notice.
     * @param {NoticeCreateArgs} args - Arguments to create a Notice.
     * @example
     * // Create one Notice
     * const Notice = await prisma.notice.create({
     *   data: {
     *     // ... data to create a Notice
     *   }
     * })
     * 
     */
    create<T extends NoticeCreateArgs>(args: SelectSubset<T, NoticeCreateArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notices.
     * @param {NoticeCreateManyArgs} args - Arguments to create many Notices.
     * @example
     * // Create many Notices
     * const notice = await prisma.notice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoticeCreateManyArgs>(args?: SelectSubset<T, NoticeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notices and returns the data saved in the database.
     * @param {NoticeCreateManyAndReturnArgs} args - Arguments to create many Notices.
     * @example
     * // Create many Notices
     * const notice = await prisma.notice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notices and only return the `id`
     * const noticeWithIdOnly = await prisma.notice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoticeCreateManyAndReturnArgs>(args?: SelectSubset<T, NoticeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notice.
     * @param {NoticeDeleteArgs} args - Arguments to delete one Notice.
     * @example
     * // Delete one Notice
     * const Notice = await prisma.notice.delete({
     *   where: {
     *     // ... filter to delete one Notice
     *   }
     * })
     * 
     */
    delete<T extends NoticeDeleteArgs>(args: SelectSubset<T, NoticeDeleteArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notice.
     * @param {NoticeUpdateArgs} args - Arguments to update one Notice.
     * @example
     * // Update one Notice
     * const notice = await prisma.notice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoticeUpdateArgs>(args: SelectSubset<T, NoticeUpdateArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notices.
     * @param {NoticeDeleteManyArgs} args - Arguments to filter Notices to delete.
     * @example
     * // Delete a few Notices
     * const { count } = await prisma.notice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoticeDeleteManyArgs>(args?: SelectSubset<T, NoticeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notices
     * const notice = await prisma.notice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoticeUpdateManyArgs>(args: SelectSubset<T, NoticeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notices and returns the data updated in the database.
     * @param {NoticeUpdateManyAndReturnArgs} args - Arguments to update many Notices.
     * @example
     * // Update many Notices
     * const notice = await prisma.notice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notices and only return the `id`
     * const noticeWithIdOnly = await prisma.notice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NoticeUpdateManyAndReturnArgs>(args: SelectSubset<T, NoticeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notice.
     * @param {NoticeUpsertArgs} args - Arguments to update or create a Notice.
     * @example
     * // Update or create a Notice
     * const notice = await prisma.notice.upsert({
     *   create: {
     *     // ... data to create a Notice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notice we want to update
     *   }
     * })
     */
    upsert<T extends NoticeUpsertArgs>(args: SelectSubset<T, NoticeUpsertArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeCountArgs} args - Arguments to filter Notices to count.
     * @example
     * // Count the number of Notices
     * const count = await prisma.notice.count({
     *   where: {
     *     // ... the filter for the Notices we want to count
     *   }
     * })
    **/
    count<T extends NoticeCountArgs>(
      args?: Subset<T, NoticeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoticeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NoticeAggregateArgs>(args: Subset<T, NoticeAggregateArgs>): Prisma.PrismaPromise<GetNoticeAggregateType<T>>

    /**
     * Group by Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NoticeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoticeGroupByArgs['orderBy'] }
        : { orderBy?: NoticeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NoticeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoticeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notice model
   */
  readonly fields: NoticeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoticeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    festival<T extends FestivalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FestivalDefaultArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notice model
   */
  interface NoticeFieldRefs {
    readonly id: FieldRef<"Notice", 'String'>
    readonly title: FieldRef<"Notice", 'String'>
    readonly content: FieldRef<"Notice", 'String'>
    readonly category: FieldRef<"Notice", 'String'>
    readonly isPinned: FieldRef<"Notice", 'Boolean'>
    readonly createdAt: FieldRef<"Notice", 'DateTime'>
    readonly updatedAt: FieldRef<"Notice", 'DateTime'>
    readonly festivalId: FieldRef<"Notice", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notice findUnique
   */
  export type NoticeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice findUniqueOrThrow
   */
  export type NoticeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice findFirst
   */
  export type NoticeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notices.
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notices.
     */
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Notice findFirstOrThrow
   */
  export type NoticeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notices.
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notices.
     */
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Notice findMany
   */
  export type NoticeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notices to fetch.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notices.
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Notice create
   */
  export type NoticeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * The data needed to create a Notice.
     */
    data: XOR<NoticeCreateInput, NoticeUncheckedCreateInput>
  }

  /**
   * Notice createMany
   */
  export type NoticeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notices.
     */
    data: NoticeCreateManyInput | NoticeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notice createManyAndReturn
   */
  export type NoticeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * The data used to create many Notices.
     */
    data: NoticeCreateManyInput | NoticeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notice update
   */
  export type NoticeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * The data needed to update a Notice.
     */
    data: XOR<NoticeUpdateInput, NoticeUncheckedUpdateInput>
    /**
     * Choose, which Notice to update.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice updateMany
   */
  export type NoticeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notices.
     */
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyInput>
    /**
     * Filter which Notices to update
     */
    where?: NoticeWhereInput
    /**
     * Limit how many Notices to update.
     */
    limit?: number
  }

  /**
   * Notice updateManyAndReturn
   */
  export type NoticeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * The data used to update Notices.
     */
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyInput>
    /**
     * Filter which Notices to update
     */
    where?: NoticeWhereInput
    /**
     * Limit how many Notices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notice upsert
   */
  export type NoticeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * The filter to search for the Notice to update in case it exists.
     */
    where: NoticeWhereUniqueInput
    /**
     * In case the Notice found by the `where` argument doesn't exist, create a new Notice with this data.
     */
    create: XOR<NoticeCreateInput, NoticeUncheckedCreateInput>
    /**
     * In case the Notice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoticeUpdateInput, NoticeUncheckedUpdateInput>
  }

  /**
   * Notice delete
   */
  export type NoticeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter which Notice to delete.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice deleteMany
   */
  export type NoticeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notices to delete
     */
    where?: NoticeWhereInput
    /**
     * Limit how many Notices to delete.
     */
    limit?: number
  }

  /**
   * Notice without action
   */
  export type NoticeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    authUserId: 'authUserId',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FestivalScalarFieldEnum: {
    id: 'id',
    name: 'name',
    year: 'year',
    startDate: 'startDate',
    endDate: 'endDate',
    theme: 'theme',
    description: 'description',
    posterUrl: 'posterUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FestivalScalarFieldEnum = (typeof FestivalScalarFieldEnum)[keyof typeof FestivalScalarFieldEnum]


  export const ScheduleEventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    startTime: 'startTime',
    endTime: 'endTime',
    location: 'location',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    festivalId: 'festivalId'
  };

  export type ScheduleEventScalarFieldEnum = (typeof ScheduleEventScalarFieldEnum)[keyof typeof ScheduleEventScalarFieldEnum]


  export const ArtistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    genre: 'genre',
    imageUrl: 'imageUrl',
    socialMedia: 'socialMedia',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArtistScalarFieldEnum = (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum]


  export const ArtistOnScheduleEventScalarFieldEnum: {
    artistId: 'artistId',
    scheduleEventId: 'scheduleEventId',
    assignedAt: 'assignedAt'
  };

  export type ArtistOnScheduleEventScalarFieldEnum = (typeof ArtistOnScheduleEventScalarFieldEnum)[keyof typeof ArtistOnScheduleEventScalarFieldEnum]


  export const BoothScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    mapCoordinates: 'mapCoordinates',
    imageUrl: 'imageUrl',
    operatingHours: 'operatingHours',
    category: 'category',
    isPopular: 'isPopular',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    festivalId: 'festivalId',
    boothOperatorId: 'boothOperatorId',
    operatorUserId: 'operatorUserId'
  };

  export type BoothScalarFieldEnum = (typeof BoothScalarFieldEnum)[keyof typeof BoothScalarFieldEnum]


  export const BoothOperatorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    contactInfo: 'contactInfo',
    logoUrl: 'logoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BoothOperatorScalarFieldEnum = (typeof BoothOperatorScalarFieldEnum)[keyof typeof BoothOperatorScalarFieldEnum]


  export const MenuItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    imageUrl: 'imageUrl',
    isSignature: 'isSignature',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    boothId: 'boothId'
  };

  export type MenuItemScalarFieldEnum = (typeof MenuItemScalarFieldEnum)[keyof typeof MenuItemScalarFieldEnum]


  export const NoticeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    category: 'category',
    isPinned: 'isPinned',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    festivalId: 'festivalId'
  };

  export type NoticeScalarFieldEnum = (typeof NoticeScalarFieldEnum)[keyof typeof NoticeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    authUserId?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    operatedBooths?: BoothListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    authUserId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    operatedBooths?: BoothOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    authUserId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    operatedBooths?: BoothListRelationFilter
  }, "id" | "authUserId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    authUserId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    authUserId?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FestivalWhereInput = {
    AND?: FestivalWhereInput | FestivalWhereInput[]
    OR?: FestivalWhereInput[]
    NOT?: FestivalWhereInput | FestivalWhereInput[]
    id?: StringFilter<"Festival"> | string
    name?: StringFilter<"Festival"> | string
    year?: IntFilter<"Festival"> | number
    startDate?: DateTimeFilter<"Festival"> | Date | string
    endDate?: DateTimeFilter<"Festival"> | Date | string
    theme?: StringNullableFilter<"Festival"> | string | null
    description?: StringNullableFilter<"Festival"> | string | null
    posterUrl?: StringNullableFilter<"Festival"> | string | null
    createdAt?: DateTimeFilter<"Festival"> | Date | string
    updatedAt?: DateTimeFilter<"Festival"> | Date | string
    scheduleEvents?: ScheduleEventListRelationFilter
    booths?: BoothListRelationFilter
    notices?: NoticeListRelationFilter
  }

  export type FestivalOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    theme?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    posterUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    scheduleEvents?: ScheduleEventOrderByRelationAggregateInput
    booths?: BoothOrderByRelationAggregateInput
    notices?: NoticeOrderByRelationAggregateInput
  }

  export type FestivalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    year?: number
    AND?: FestivalWhereInput | FestivalWhereInput[]
    OR?: FestivalWhereInput[]
    NOT?: FestivalWhereInput | FestivalWhereInput[]
    name?: StringFilter<"Festival"> | string
    startDate?: DateTimeFilter<"Festival"> | Date | string
    endDate?: DateTimeFilter<"Festival"> | Date | string
    theme?: StringNullableFilter<"Festival"> | string | null
    description?: StringNullableFilter<"Festival"> | string | null
    posterUrl?: StringNullableFilter<"Festival"> | string | null
    createdAt?: DateTimeFilter<"Festival"> | Date | string
    updatedAt?: DateTimeFilter<"Festival"> | Date | string
    scheduleEvents?: ScheduleEventListRelationFilter
    booths?: BoothListRelationFilter
    notices?: NoticeListRelationFilter
  }, "id" | "year">

  export type FestivalOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    theme?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    posterUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FestivalCountOrderByAggregateInput
    _avg?: FestivalAvgOrderByAggregateInput
    _max?: FestivalMaxOrderByAggregateInput
    _min?: FestivalMinOrderByAggregateInput
    _sum?: FestivalSumOrderByAggregateInput
  }

  export type FestivalScalarWhereWithAggregatesInput = {
    AND?: FestivalScalarWhereWithAggregatesInput | FestivalScalarWhereWithAggregatesInput[]
    OR?: FestivalScalarWhereWithAggregatesInput[]
    NOT?: FestivalScalarWhereWithAggregatesInput | FestivalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Festival"> | string
    name?: StringWithAggregatesFilter<"Festival"> | string
    year?: IntWithAggregatesFilter<"Festival"> | number
    startDate?: DateTimeWithAggregatesFilter<"Festival"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Festival"> | Date | string
    theme?: StringNullableWithAggregatesFilter<"Festival"> | string | null
    description?: StringNullableWithAggregatesFilter<"Festival"> | string | null
    posterUrl?: StringNullableWithAggregatesFilter<"Festival"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Festival"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Festival"> | Date | string
  }

  export type ScheduleEventWhereInput = {
    AND?: ScheduleEventWhereInput | ScheduleEventWhereInput[]
    OR?: ScheduleEventWhereInput[]
    NOT?: ScheduleEventWhereInput | ScheduleEventWhereInput[]
    id?: StringFilter<"ScheduleEvent"> | string
    title?: StringFilter<"ScheduleEvent"> | string
    description?: StringNullableFilter<"ScheduleEvent"> | string | null
    startTime?: DateTimeFilter<"ScheduleEvent"> | Date | string
    endTime?: DateTimeFilter<"ScheduleEvent"> | Date | string
    location?: StringFilter<"ScheduleEvent"> | string
    category?: StringNullableFilter<"ScheduleEvent"> | string | null
    createdAt?: DateTimeFilter<"ScheduleEvent"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduleEvent"> | Date | string
    festivalId?: StringFilter<"ScheduleEvent"> | string
    festival?: XOR<FestivalScalarRelationFilter, FestivalWhereInput>
    artists?: ArtistOnScheduleEventListRelationFilter
  }

  export type ScheduleEventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    category?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    festivalId?: SortOrder
    festival?: FestivalOrderByWithRelationInput
    artists?: ArtistOnScheduleEventOrderByRelationAggregateInput
  }

  export type ScheduleEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduleEventWhereInput | ScheduleEventWhereInput[]
    OR?: ScheduleEventWhereInput[]
    NOT?: ScheduleEventWhereInput | ScheduleEventWhereInput[]
    title?: StringFilter<"ScheduleEvent"> | string
    description?: StringNullableFilter<"ScheduleEvent"> | string | null
    startTime?: DateTimeFilter<"ScheduleEvent"> | Date | string
    endTime?: DateTimeFilter<"ScheduleEvent"> | Date | string
    location?: StringFilter<"ScheduleEvent"> | string
    category?: StringNullableFilter<"ScheduleEvent"> | string | null
    createdAt?: DateTimeFilter<"ScheduleEvent"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduleEvent"> | Date | string
    festivalId?: StringFilter<"ScheduleEvent"> | string
    festival?: XOR<FestivalScalarRelationFilter, FestivalWhereInput>
    artists?: ArtistOnScheduleEventListRelationFilter
  }, "id">

  export type ScheduleEventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    category?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    festivalId?: SortOrder
    _count?: ScheduleEventCountOrderByAggregateInput
    _max?: ScheduleEventMaxOrderByAggregateInput
    _min?: ScheduleEventMinOrderByAggregateInput
  }

  export type ScheduleEventScalarWhereWithAggregatesInput = {
    AND?: ScheduleEventScalarWhereWithAggregatesInput | ScheduleEventScalarWhereWithAggregatesInput[]
    OR?: ScheduleEventScalarWhereWithAggregatesInput[]
    NOT?: ScheduleEventScalarWhereWithAggregatesInput | ScheduleEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScheduleEvent"> | string
    title?: StringWithAggregatesFilter<"ScheduleEvent"> | string
    description?: StringNullableWithAggregatesFilter<"ScheduleEvent"> | string | null
    startTime?: DateTimeWithAggregatesFilter<"ScheduleEvent"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"ScheduleEvent"> | Date | string
    location?: StringWithAggregatesFilter<"ScheduleEvent"> | string
    category?: StringNullableWithAggregatesFilter<"ScheduleEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ScheduleEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ScheduleEvent"> | Date | string
    festivalId?: StringWithAggregatesFilter<"ScheduleEvent"> | string
  }

  export type ArtistWhereInput = {
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    id?: StringFilter<"Artist"> | string
    name?: StringFilter<"Artist"> | string
    description?: StringNullableFilter<"Artist"> | string | null
    genre?: StringNullableFilter<"Artist"> | string | null
    imageUrl?: StringNullableFilter<"Artist"> | string | null
    socialMedia?: JsonNullableFilter<"Artist">
    createdAt?: DateTimeFilter<"Artist"> | Date | string
    updatedAt?: DateTimeFilter<"Artist"> | Date | string
    scheduleEvents?: ArtistOnScheduleEventListRelationFilter
  }

  export type ArtistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    socialMedia?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    scheduleEvents?: ArtistOnScheduleEventOrderByRelationAggregateInput
  }

  export type ArtistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    description?: StringNullableFilter<"Artist"> | string | null
    genre?: StringNullableFilter<"Artist"> | string | null
    imageUrl?: StringNullableFilter<"Artist"> | string | null
    socialMedia?: JsonNullableFilter<"Artist">
    createdAt?: DateTimeFilter<"Artist"> | Date | string
    updatedAt?: DateTimeFilter<"Artist"> | Date | string
    scheduleEvents?: ArtistOnScheduleEventListRelationFilter
  }, "id" | "name">

  export type ArtistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    socialMedia?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArtistCountOrderByAggregateInput
    _max?: ArtistMaxOrderByAggregateInput
    _min?: ArtistMinOrderByAggregateInput
  }

  export type ArtistScalarWhereWithAggregatesInput = {
    AND?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    OR?: ArtistScalarWhereWithAggregatesInput[]
    NOT?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Artist"> | string
    name?: StringWithAggregatesFilter<"Artist"> | string
    description?: StringNullableWithAggregatesFilter<"Artist"> | string | null
    genre?: StringNullableWithAggregatesFilter<"Artist"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Artist"> | string | null
    socialMedia?: JsonNullableWithAggregatesFilter<"Artist">
    createdAt?: DateTimeWithAggregatesFilter<"Artist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Artist"> | Date | string
  }

  export type ArtistOnScheduleEventWhereInput = {
    AND?: ArtistOnScheduleEventWhereInput | ArtistOnScheduleEventWhereInput[]
    OR?: ArtistOnScheduleEventWhereInput[]
    NOT?: ArtistOnScheduleEventWhereInput | ArtistOnScheduleEventWhereInput[]
    artistId?: StringFilter<"ArtistOnScheduleEvent"> | string
    scheduleEventId?: StringFilter<"ArtistOnScheduleEvent"> | string
    assignedAt?: DateTimeFilter<"ArtistOnScheduleEvent"> | Date | string
    artist?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
    scheduleEvent?: XOR<ScheduleEventScalarRelationFilter, ScheduleEventWhereInput>
  }

  export type ArtistOnScheduleEventOrderByWithRelationInput = {
    artistId?: SortOrder
    scheduleEventId?: SortOrder
    assignedAt?: SortOrder
    artist?: ArtistOrderByWithRelationInput
    scheduleEvent?: ScheduleEventOrderByWithRelationInput
  }

  export type ArtistOnScheduleEventWhereUniqueInput = Prisma.AtLeast<{
    artistId_scheduleEventId?: ArtistOnScheduleEventArtistIdScheduleEventIdCompoundUniqueInput
    AND?: ArtistOnScheduleEventWhereInput | ArtistOnScheduleEventWhereInput[]
    OR?: ArtistOnScheduleEventWhereInput[]
    NOT?: ArtistOnScheduleEventWhereInput | ArtistOnScheduleEventWhereInput[]
    artistId?: StringFilter<"ArtistOnScheduleEvent"> | string
    scheduleEventId?: StringFilter<"ArtistOnScheduleEvent"> | string
    assignedAt?: DateTimeFilter<"ArtistOnScheduleEvent"> | Date | string
    artist?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
    scheduleEvent?: XOR<ScheduleEventScalarRelationFilter, ScheduleEventWhereInput>
  }, "artistId_scheduleEventId">

  export type ArtistOnScheduleEventOrderByWithAggregationInput = {
    artistId?: SortOrder
    scheduleEventId?: SortOrder
    assignedAt?: SortOrder
    _count?: ArtistOnScheduleEventCountOrderByAggregateInput
    _max?: ArtistOnScheduleEventMaxOrderByAggregateInput
    _min?: ArtistOnScheduleEventMinOrderByAggregateInput
  }

  export type ArtistOnScheduleEventScalarWhereWithAggregatesInput = {
    AND?: ArtistOnScheduleEventScalarWhereWithAggregatesInput | ArtistOnScheduleEventScalarWhereWithAggregatesInput[]
    OR?: ArtistOnScheduleEventScalarWhereWithAggregatesInput[]
    NOT?: ArtistOnScheduleEventScalarWhereWithAggregatesInput | ArtistOnScheduleEventScalarWhereWithAggregatesInput[]
    artistId?: StringWithAggregatesFilter<"ArtistOnScheduleEvent"> | string
    scheduleEventId?: StringWithAggregatesFilter<"ArtistOnScheduleEvent"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"ArtistOnScheduleEvent"> | Date | string
  }

  export type BoothWhereInput = {
    AND?: BoothWhereInput | BoothWhereInput[]
    OR?: BoothWhereInput[]
    NOT?: BoothWhereInput | BoothWhereInput[]
    id?: StringFilter<"Booth"> | string
    name?: StringFilter<"Booth"> | string
    description?: StringNullableFilter<"Booth"> | string | null
    mapCoordinates?: JsonNullableFilter<"Booth">
    imageUrl?: StringNullableFilter<"Booth"> | string | null
    operatingHours?: StringNullableFilter<"Booth"> | string | null
    category?: StringFilter<"Booth"> | string
    isPopular?: BoolFilter<"Booth"> | boolean
    createdAt?: DateTimeFilter<"Booth"> | Date | string
    updatedAt?: DateTimeFilter<"Booth"> | Date | string
    festivalId?: StringFilter<"Booth"> | string
    boothOperatorId?: StringFilter<"Booth"> | string
    operatorUserId?: StringNullableFilter<"Booth"> | string | null
    festival?: XOR<FestivalScalarRelationFilter, FestivalWhereInput>
    boothOperator?: XOR<BoothOperatorScalarRelationFilter, BoothOperatorWhereInput>
    operatorUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    menuItems?: MenuItemListRelationFilter
  }

  export type BoothOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    mapCoordinates?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    operatingHours?: SortOrderInput | SortOrder
    category?: SortOrder
    isPopular?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    festivalId?: SortOrder
    boothOperatorId?: SortOrder
    operatorUserId?: SortOrderInput | SortOrder
    festival?: FestivalOrderByWithRelationInput
    boothOperator?: BoothOperatorOrderByWithRelationInput
    operatorUser?: UserOrderByWithRelationInput
    menuItems?: MenuItemOrderByRelationAggregateInput
  }

  export type BoothWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BoothWhereInput | BoothWhereInput[]
    OR?: BoothWhereInput[]
    NOT?: BoothWhereInput | BoothWhereInput[]
    name?: StringFilter<"Booth"> | string
    description?: StringNullableFilter<"Booth"> | string | null
    mapCoordinates?: JsonNullableFilter<"Booth">
    imageUrl?: StringNullableFilter<"Booth"> | string | null
    operatingHours?: StringNullableFilter<"Booth"> | string | null
    category?: StringFilter<"Booth"> | string
    isPopular?: BoolFilter<"Booth"> | boolean
    createdAt?: DateTimeFilter<"Booth"> | Date | string
    updatedAt?: DateTimeFilter<"Booth"> | Date | string
    festivalId?: StringFilter<"Booth"> | string
    boothOperatorId?: StringFilter<"Booth"> | string
    operatorUserId?: StringNullableFilter<"Booth"> | string | null
    festival?: XOR<FestivalScalarRelationFilter, FestivalWhereInput>
    boothOperator?: XOR<BoothOperatorScalarRelationFilter, BoothOperatorWhereInput>
    operatorUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    menuItems?: MenuItemListRelationFilter
  }, "id">

  export type BoothOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    mapCoordinates?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    operatingHours?: SortOrderInput | SortOrder
    category?: SortOrder
    isPopular?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    festivalId?: SortOrder
    boothOperatorId?: SortOrder
    operatorUserId?: SortOrderInput | SortOrder
    _count?: BoothCountOrderByAggregateInput
    _max?: BoothMaxOrderByAggregateInput
    _min?: BoothMinOrderByAggregateInput
  }

  export type BoothScalarWhereWithAggregatesInput = {
    AND?: BoothScalarWhereWithAggregatesInput | BoothScalarWhereWithAggregatesInput[]
    OR?: BoothScalarWhereWithAggregatesInput[]
    NOT?: BoothScalarWhereWithAggregatesInput | BoothScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booth"> | string
    name?: StringWithAggregatesFilter<"Booth"> | string
    description?: StringNullableWithAggregatesFilter<"Booth"> | string | null
    mapCoordinates?: JsonNullableWithAggregatesFilter<"Booth">
    imageUrl?: StringNullableWithAggregatesFilter<"Booth"> | string | null
    operatingHours?: StringNullableWithAggregatesFilter<"Booth"> | string | null
    category?: StringWithAggregatesFilter<"Booth"> | string
    isPopular?: BoolWithAggregatesFilter<"Booth"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Booth"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booth"> | Date | string
    festivalId?: StringWithAggregatesFilter<"Booth"> | string
    boothOperatorId?: StringWithAggregatesFilter<"Booth"> | string
    operatorUserId?: StringNullableWithAggregatesFilter<"Booth"> | string | null
  }

  export type BoothOperatorWhereInput = {
    AND?: BoothOperatorWhereInput | BoothOperatorWhereInput[]
    OR?: BoothOperatorWhereInput[]
    NOT?: BoothOperatorWhereInput | BoothOperatorWhereInput[]
    id?: StringFilter<"BoothOperator"> | string
    name?: StringFilter<"BoothOperator"> | string
    type?: StringFilter<"BoothOperator"> | string
    contactInfo?: StringNullableFilter<"BoothOperator"> | string | null
    logoUrl?: StringNullableFilter<"BoothOperator"> | string | null
    createdAt?: DateTimeFilter<"BoothOperator"> | Date | string
    updatedAt?: DateTimeFilter<"BoothOperator"> | Date | string
    booths?: BoothListRelationFilter
  }

  export type BoothOperatorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    contactInfo?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    booths?: BoothOrderByRelationAggregateInput
  }

  export type BoothOperatorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: BoothOperatorWhereInput | BoothOperatorWhereInput[]
    OR?: BoothOperatorWhereInput[]
    NOT?: BoothOperatorWhereInput | BoothOperatorWhereInput[]
    type?: StringFilter<"BoothOperator"> | string
    contactInfo?: StringNullableFilter<"BoothOperator"> | string | null
    logoUrl?: StringNullableFilter<"BoothOperator"> | string | null
    createdAt?: DateTimeFilter<"BoothOperator"> | Date | string
    updatedAt?: DateTimeFilter<"BoothOperator"> | Date | string
    booths?: BoothListRelationFilter
  }, "id" | "name">

  export type BoothOperatorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    contactInfo?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BoothOperatorCountOrderByAggregateInput
    _max?: BoothOperatorMaxOrderByAggregateInput
    _min?: BoothOperatorMinOrderByAggregateInput
  }

  export type BoothOperatorScalarWhereWithAggregatesInput = {
    AND?: BoothOperatorScalarWhereWithAggregatesInput | BoothOperatorScalarWhereWithAggregatesInput[]
    OR?: BoothOperatorScalarWhereWithAggregatesInput[]
    NOT?: BoothOperatorScalarWhereWithAggregatesInput | BoothOperatorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BoothOperator"> | string
    name?: StringWithAggregatesFilter<"BoothOperator"> | string
    type?: StringWithAggregatesFilter<"BoothOperator"> | string
    contactInfo?: StringNullableWithAggregatesFilter<"BoothOperator"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"BoothOperator"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BoothOperator"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BoothOperator"> | Date | string
  }

  export type MenuItemWhereInput = {
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    id?: StringFilter<"MenuItem"> | string
    name?: StringFilter<"MenuItem"> | string
    description?: StringNullableFilter<"MenuItem"> | string | null
    price?: IntFilter<"MenuItem"> | number
    imageUrl?: StringNullableFilter<"MenuItem"> | string | null
    isSignature?: BoolFilter<"MenuItem"> | boolean
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
    boothId?: StringFilter<"MenuItem"> | string
    booth?: XOR<BoothScalarRelationFilter, BoothWhereInput>
  }

  export type MenuItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isSignature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    boothId?: SortOrder
    booth?: BoothOrderByWithRelationInput
  }

  export type MenuItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    name?: StringFilter<"MenuItem"> | string
    description?: StringNullableFilter<"MenuItem"> | string | null
    price?: IntFilter<"MenuItem"> | number
    imageUrl?: StringNullableFilter<"MenuItem"> | string | null
    isSignature?: BoolFilter<"MenuItem"> | boolean
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
    boothId?: StringFilter<"MenuItem"> | string
    booth?: XOR<BoothScalarRelationFilter, BoothWhereInput>
  }, "id">

  export type MenuItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isSignature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    boothId?: SortOrder
    _count?: MenuItemCountOrderByAggregateInput
    _avg?: MenuItemAvgOrderByAggregateInput
    _max?: MenuItemMaxOrderByAggregateInput
    _min?: MenuItemMinOrderByAggregateInput
    _sum?: MenuItemSumOrderByAggregateInput
  }

  export type MenuItemScalarWhereWithAggregatesInput = {
    AND?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    OR?: MenuItemScalarWhereWithAggregatesInput[]
    NOT?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MenuItem"> | string
    name?: StringWithAggregatesFilter<"MenuItem"> | string
    description?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    price?: IntWithAggregatesFilter<"MenuItem"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    isSignature?: BoolWithAggregatesFilter<"MenuItem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MenuItem"> | Date | string
    boothId?: StringWithAggregatesFilter<"MenuItem"> | string
  }

  export type NoticeWhereInput = {
    AND?: NoticeWhereInput | NoticeWhereInput[]
    OR?: NoticeWhereInput[]
    NOT?: NoticeWhereInput | NoticeWhereInput[]
    id?: StringFilter<"Notice"> | string
    title?: StringFilter<"Notice"> | string
    content?: StringFilter<"Notice"> | string
    category?: StringNullableFilter<"Notice"> | string | null
    isPinned?: BoolFilter<"Notice"> | boolean
    createdAt?: DateTimeFilter<"Notice"> | Date | string
    updatedAt?: DateTimeFilter<"Notice"> | Date | string
    festivalId?: StringFilter<"Notice"> | string
    festival?: XOR<FestivalScalarRelationFilter, FestivalWhereInput>
  }

  export type NoticeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrderInput | SortOrder
    isPinned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    festivalId?: SortOrder
    festival?: FestivalOrderByWithRelationInput
  }

  export type NoticeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NoticeWhereInput | NoticeWhereInput[]
    OR?: NoticeWhereInput[]
    NOT?: NoticeWhereInput | NoticeWhereInput[]
    title?: StringFilter<"Notice"> | string
    content?: StringFilter<"Notice"> | string
    category?: StringNullableFilter<"Notice"> | string | null
    isPinned?: BoolFilter<"Notice"> | boolean
    createdAt?: DateTimeFilter<"Notice"> | Date | string
    updatedAt?: DateTimeFilter<"Notice"> | Date | string
    festivalId?: StringFilter<"Notice"> | string
    festival?: XOR<FestivalScalarRelationFilter, FestivalWhereInput>
  }, "id">

  export type NoticeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrderInput | SortOrder
    isPinned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    festivalId?: SortOrder
    _count?: NoticeCountOrderByAggregateInput
    _max?: NoticeMaxOrderByAggregateInput
    _min?: NoticeMinOrderByAggregateInput
  }

  export type NoticeScalarWhereWithAggregatesInput = {
    AND?: NoticeScalarWhereWithAggregatesInput | NoticeScalarWhereWithAggregatesInput[]
    OR?: NoticeScalarWhereWithAggregatesInput[]
    NOT?: NoticeScalarWhereWithAggregatesInput | NoticeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notice"> | string
    title?: StringWithAggregatesFilter<"Notice"> | string
    content?: StringWithAggregatesFilter<"Notice"> | string
    category?: StringNullableWithAggregatesFilter<"Notice"> | string | null
    isPinned?: BoolWithAggregatesFilter<"Notice"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notice"> | Date | string
    festivalId?: StringWithAggregatesFilter<"Notice"> | string
  }

  export type UserCreateInput = {
    id?: string
    authUserId?: string | null
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    operatedBooths?: BoothCreateNestedManyWithoutOperatorUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    authUserId?: string | null
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    operatedBooths?: BoothUncheckedCreateNestedManyWithoutOperatorUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operatedBooths?: BoothUpdateManyWithoutOperatorUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operatedBooths?: BoothUncheckedUpdateManyWithoutOperatorUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    authUserId?: string | null
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FestivalCreateInput = {
    id?: string
    name: string
    year: number
    startDate: Date | string
    endDate: Date | string
    theme?: string | null
    description?: string | null
    posterUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scheduleEvents?: ScheduleEventCreateNestedManyWithoutFestivalInput
    booths?: BoothCreateNestedManyWithoutFestivalInput
    notices?: NoticeCreateNestedManyWithoutFestivalInput
  }

  export type FestivalUncheckedCreateInput = {
    id?: string
    name: string
    year: number
    startDate: Date | string
    endDate: Date | string
    theme?: string | null
    description?: string | null
    posterUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scheduleEvents?: ScheduleEventUncheckedCreateNestedManyWithoutFestivalInput
    booths?: BoothUncheckedCreateNestedManyWithoutFestivalInput
    notices?: NoticeUncheckedCreateNestedManyWithoutFestivalInput
  }

  export type FestivalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleEvents?: ScheduleEventUpdateManyWithoutFestivalNestedInput
    booths?: BoothUpdateManyWithoutFestivalNestedInput
    notices?: NoticeUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleEvents?: ScheduleEventUncheckedUpdateManyWithoutFestivalNestedInput
    booths?: BoothUncheckedUpdateManyWithoutFestivalNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalCreateManyInput = {
    id?: string
    name: string
    year: number
    startDate: Date | string
    endDate: Date | string
    theme?: string | null
    description?: string | null
    posterUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FestivalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FestivalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleEventCreateInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    location: string
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    festival: FestivalCreateNestedOneWithoutScheduleEventsInput
    artists?: ArtistOnScheduleEventCreateNestedManyWithoutScheduleEventInput
  }

  export type ScheduleEventUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    location: string
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    festivalId: string
    artists?: ArtistOnScheduleEventUncheckedCreateNestedManyWithoutScheduleEventInput
  }

  export type ScheduleEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festival?: FestivalUpdateOneRequiredWithoutScheduleEventsNestedInput
    artists?: ArtistOnScheduleEventUpdateManyWithoutScheduleEventNestedInput
  }

  export type ScheduleEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festivalId?: StringFieldUpdateOperationsInput | string
    artists?: ArtistOnScheduleEventUncheckedUpdateManyWithoutScheduleEventNestedInput
  }

  export type ScheduleEventCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    location: string
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    festivalId: string
  }

  export type ScheduleEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festivalId?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistCreateInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    imageUrl?: string | null
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    scheduleEvents?: ArtistOnScheduleEventCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    imageUrl?: string | null
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    scheduleEvents?: ArtistOnScheduleEventUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleEvents?: ArtistOnScheduleEventUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleEvents?: ArtistOnScheduleEventUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    imageUrl?: string | null
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArtistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistOnScheduleEventCreateInput = {
    assignedAt?: Date | string
    artist: ArtistCreateNestedOneWithoutScheduleEventsInput
    scheduleEvent: ScheduleEventCreateNestedOneWithoutArtistsInput
  }

  export type ArtistOnScheduleEventUncheckedCreateInput = {
    artistId: string
    scheduleEventId: string
    assignedAt?: Date | string
  }

  export type ArtistOnScheduleEventUpdateInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artist?: ArtistUpdateOneRequiredWithoutScheduleEventsNestedInput
    scheduleEvent?: ScheduleEventUpdateOneRequiredWithoutArtistsNestedInput
  }

  export type ArtistOnScheduleEventUncheckedUpdateInput = {
    artistId?: StringFieldUpdateOperationsInput | string
    scheduleEventId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistOnScheduleEventCreateManyInput = {
    artistId: string
    scheduleEventId: string
    assignedAt?: Date | string
  }

  export type ArtistOnScheduleEventUpdateManyMutationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistOnScheduleEventUncheckedUpdateManyInput = {
    artistId?: StringFieldUpdateOperationsInput | string
    scheduleEventId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoothCreateInput = {
    id?: string
    name: string
    description?: string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    operatingHours?: string | null
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    festival: FestivalCreateNestedOneWithoutBoothsInput
    boothOperator: BoothOperatorCreateNestedOneWithoutBoothsInput
    operatorUser?: UserCreateNestedOneWithoutOperatedBoothsInput
    menuItems?: MenuItemCreateNestedManyWithoutBoothInput
  }

  export type BoothUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    operatingHours?: string | null
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    festivalId: string
    boothOperatorId: string
    operatorUserId?: string | null
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutBoothInput
  }

  export type BoothUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festival?: FestivalUpdateOneRequiredWithoutBoothsNestedInput
    boothOperator?: BoothOperatorUpdateOneRequiredWithoutBoothsNestedInput
    operatorUser?: UserUpdateOneWithoutOperatedBoothsNestedInput
    menuItems?: MenuItemUpdateManyWithoutBoothNestedInput
  }

  export type BoothUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festivalId?: StringFieldUpdateOperationsInput | string
    boothOperatorId?: StringFieldUpdateOperationsInput | string
    operatorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    menuItems?: MenuItemUncheckedUpdateManyWithoutBoothNestedInput
  }

  export type BoothCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    operatingHours?: string | null
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    festivalId: string
    boothOperatorId: string
    operatorUserId?: string | null
  }

  export type BoothUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoothUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festivalId?: StringFieldUpdateOperationsInput | string
    boothOperatorId?: StringFieldUpdateOperationsInput | string
    operatorUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BoothOperatorCreateInput = {
    id?: string
    name: string
    type: string
    contactInfo?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booths?: BoothCreateNestedManyWithoutBoothOperatorInput
  }

  export type BoothOperatorUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    contactInfo?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booths?: BoothUncheckedCreateNestedManyWithoutBoothOperatorInput
  }

  export type BoothOperatorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booths?: BoothUpdateManyWithoutBoothOperatorNestedInput
  }

  export type BoothOperatorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booths?: BoothUncheckedUpdateManyWithoutBoothOperatorNestedInput
  }

  export type BoothOperatorCreateManyInput = {
    id?: string
    name: string
    type: string
    contactInfo?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoothOperatorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoothOperatorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    isSignature?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    booth: BoothCreateNestedOneWithoutMenuItemsInput
  }

  export type MenuItemUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    isSignature?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    boothId: string
  }

  export type MenuItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isSignature?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booth?: BoothUpdateOneRequiredWithoutMenuItemsNestedInput
  }

  export type MenuItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isSignature?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boothId?: StringFieldUpdateOperationsInput | string
  }

  export type MenuItemCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    isSignature?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    boothId: string
  }

  export type MenuItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isSignature?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isSignature?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boothId?: StringFieldUpdateOperationsInput | string
  }

  export type NoticeCreateInput = {
    id?: string
    title: string
    content: string
    category?: string | null
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    festival: FestivalCreateNestedOneWithoutNoticesInput
  }

  export type NoticeUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    category?: string | null
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    festivalId: string
  }

  export type NoticeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festival?: FestivalUpdateOneRequiredWithoutNoticesNestedInput
  }

  export type NoticeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festivalId?: StringFieldUpdateOperationsInput | string
  }

  export type NoticeCreateManyInput = {
    id?: string
    title: string
    content: string
    category?: string | null
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    festivalId: string
  }

  export type NoticeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festivalId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoothListRelationFilter = {
    every?: BoothWhereInput
    some?: BoothWhereInput
    none?: BoothWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BoothOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    authUserId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    authUserId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    authUserId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ScheduleEventListRelationFilter = {
    every?: ScheduleEventWhereInput
    some?: ScheduleEventWhereInput
    none?: ScheduleEventWhereInput
  }

  export type NoticeListRelationFilter = {
    every?: NoticeWhereInput
    some?: NoticeWhereInput
    none?: NoticeWhereInput
  }

  export type ScheduleEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoticeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FestivalCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    theme?: SortOrder
    description?: SortOrder
    posterUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FestivalAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type FestivalMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    theme?: SortOrder
    description?: SortOrder
    posterUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FestivalMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    theme?: SortOrder
    description?: SortOrder
    posterUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FestivalSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FestivalScalarRelationFilter = {
    is?: FestivalWhereInput
    isNot?: FestivalWhereInput
  }

  export type ArtistOnScheduleEventListRelationFilter = {
    every?: ArtistOnScheduleEventWhereInput
    some?: ArtistOnScheduleEventWhereInput
    none?: ArtistOnScheduleEventWhereInput
  }

  export type ArtistOnScheduleEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduleEventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    festivalId?: SortOrder
  }

  export type ScheduleEventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    festivalId?: SortOrder
  }

  export type ScheduleEventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    festivalId?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ArtistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    genre?: SortOrder
    imageUrl?: SortOrder
    socialMedia?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    genre?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    genre?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ArtistScalarRelationFilter = {
    is?: ArtistWhereInput
    isNot?: ArtistWhereInput
  }

  export type ScheduleEventScalarRelationFilter = {
    is?: ScheduleEventWhereInput
    isNot?: ScheduleEventWhereInput
  }

  export type ArtistOnScheduleEventArtistIdScheduleEventIdCompoundUniqueInput = {
    artistId: string
    scheduleEventId: string
  }

  export type ArtistOnScheduleEventCountOrderByAggregateInput = {
    artistId?: SortOrder
    scheduleEventId?: SortOrder
    assignedAt?: SortOrder
  }

  export type ArtistOnScheduleEventMaxOrderByAggregateInput = {
    artistId?: SortOrder
    scheduleEventId?: SortOrder
    assignedAt?: SortOrder
  }

  export type ArtistOnScheduleEventMinOrderByAggregateInput = {
    artistId?: SortOrder
    scheduleEventId?: SortOrder
    assignedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BoothOperatorScalarRelationFilter = {
    is?: BoothOperatorWhereInput
    isNot?: BoothOperatorWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MenuItemListRelationFilter = {
    every?: MenuItemWhereInput
    some?: MenuItemWhereInput
    none?: MenuItemWhereInput
  }

  export type MenuItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoothCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    mapCoordinates?: SortOrder
    imageUrl?: SortOrder
    operatingHours?: SortOrder
    category?: SortOrder
    isPopular?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    festivalId?: SortOrder
    boothOperatorId?: SortOrder
    operatorUserId?: SortOrder
  }

  export type BoothMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    operatingHours?: SortOrder
    category?: SortOrder
    isPopular?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    festivalId?: SortOrder
    boothOperatorId?: SortOrder
    operatorUserId?: SortOrder
  }

  export type BoothMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    operatingHours?: SortOrder
    category?: SortOrder
    isPopular?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    festivalId?: SortOrder
    boothOperatorId?: SortOrder
    operatorUserId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BoothOperatorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    contactInfo?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoothOperatorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    contactInfo?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoothOperatorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    contactInfo?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoothScalarRelationFilter = {
    is?: BoothWhereInput
    isNot?: BoothWhereInput
  }

  export type MenuItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    isSignature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    boothId?: SortOrder
  }

  export type MenuItemAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type MenuItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    isSignature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    boothId?: SortOrder
  }

  export type MenuItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    isSignature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    boothId?: SortOrder
  }

  export type MenuItemSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type NoticeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    isPinned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    festivalId?: SortOrder
  }

  export type NoticeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    isPinned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    festivalId?: SortOrder
  }

  export type NoticeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    isPinned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    festivalId?: SortOrder
  }

  export type BoothCreateNestedManyWithoutOperatorUserInput = {
    create?: XOR<BoothCreateWithoutOperatorUserInput, BoothUncheckedCreateWithoutOperatorUserInput> | BoothCreateWithoutOperatorUserInput[] | BoothUncheckedCreateWithoutOperatorUserInput[]
    connectOrCreate?: BoothCreateOrConnectWithoutOperatorUserInput | BoothCreateOrConnectWithoutOperatorUserInput[]
    createMany?: BoothCreateManyOperatorUserInputEnvelope
    connect?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
  }

  export type BoothUncheckedCreateNestedManyWithoutOperatorUserInput = {
    create?: XOR<BoothCreateWithoutOperatorUserInput, BoothUncheckedCreateWithoutOperatorUserInput> | BoothCreateWithoutOperatorUserInput[] | BoothUncheckedCreateWithoutOperatorUserInput[]
    connectOrCreate?: BoothCreateOrConnectWithoutOperatorUserInput | BoothCreateOrConnectWithoutOperatorUserInput[]
    createMany?: BoothCreateManyOperatorUserInputEnvelope
    connect?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoothUpdateManyWithoutOperatorUserNestedInput = {
    create?: XOR<BoothCreateWithoutOperatorUserInput, BoothUncheckedCreateWithoutOperatorUserInput> | BoothCreateWithoutOperatorUserInput[] | BoothUncheckedCreateWithoutOperatorUserInput[]
    connectOrCreate?: BoothCreateOrConnectWithoutOperatorUserInput | BoothCreateOrConnectWithoutOperatorUserInput[]
    upsert?: BoothUpsertWithWhereUniqueWithoutOperatorUserInput | BoothUpsertWithWhereUniqueWithoutOperatorUserInput[]
    createMany?: BoothCreateManyOperatorUserInputEnvelope
    set?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
    disconnect?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
    delete?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
    connect?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
    update?: BoothUpdateWithWhereUniqueWithoutOperatorUserInput | BoothUpdateWithWhereUniqueWithoutOperatorUserInput[]
    updateMany?: BoothUpdateManyWithWhereWithoutOperatorUserInput | BoothUpdateManyWithWhereWithoutOperatorUserInput[]
    deleteMany?: BoothScalarWhereInput | BoothScalarWhereInput[]
  }

  export type BoothUncheckedUpdateManyWithoutOperatorUserNestedInput = {
    create?: XOR<BoothCreateWithoutOperatorUserInput, BoothUncheckedCreateWithoutOperatorUserInput> | BoothCreateWithoutOperatorUserInput[] | BoothUncheckedCreateWithoutOperatorUserInput[]
    connectOrCreate?: BoothCreateOrConnectWithoutOperatorUserInput | BoothCreateOrConnectWithoutOperatorUserInput[]
    upsert?: BoothUpsertWithWhereUniqueWithoutOperatorUserInput | BoothUpsertWithWhereUniqueWithoutOperatorUserInput[]
    createMany?: BoothCreateManyOperatorUserInputEnvelope
    set?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
    disconnect?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
    delete?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
    connect?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
    update?: BoothUpdateWithWhereUniqueWithoutOperatorUserInput | BoothUpdateWithWhereUniqueWithoutOperatorUserInput[]
    updateMany?: BoothUpdateManyWithWhereWithoutOperatorUserInput | BoothUpdateManyWithWhereWithoutOperatorUserInput[]
    deleteMany?: BoothScalarWhereInput | BoothScalarWhereInput[]
  }

  export type ScheduleEventCreateNestedManyWithoutFestivalInput = {
    create?: XOR<ScheduleEventCreateWithoutFestivalInput, ScheduleEventUncheckedCreateWithoutFestivalInput> | ScheduleEventCreateWithoutFestivalInput[] | ScheduleEventUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: ScheduleEventCreateOrConnectWithoutFestivalInput | ScheduleEventCreateOrConnectWithoutFestivalInput[]
    createMany?: ScheduleEventCreateManyFestivalInputEnvelope
    connect?: ScheduleEventWhereUniqueInput | ScheduleEventWhereUniqueInput[]
  }

  export type BoothCreateNestedManyWithoutFestivalInput = {
    create?: XOR<BoothCreateWithoutFestivalInput, BoothUncheckedCreateWithoutFestivalInput> | BoothCreateWithoutFestivalInput[] | BoothUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: BoothCreateOrConnectWithoutFestivalInput | BoothCreateOrConnectWithoutFestivalInput[]
    createMany?: BoothCreateManyFestivalInputEnvelope
    connect?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
  }

  export type NoticeCreateNestedManyWithoutFestivalInput = {
    create?: XOR<NoticeCreateWithoutFestivalInput, NoticeUncheckedCreateWithoutFestivalInput> | NoticeCreateWithoutFestivalInput[] | NoticeUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutFestivalInput | NoticeCreateOrConnectWithoutFestivalInput[]
    createMany?: NoticeCreateManyFestivalInputEnvelope
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
  }

  export type ScheduleEventUncheckedCreateNestedManyWithoutFestivalInput = {
    create?: XOR<ScheduleEventCreateWithoutFestivalInput, ScheduleEventUncheckedCreateWithoutFestivalInput> | ScheduleEventCreateWithoutFestivalInput[] | ScheduleEventUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: ScheduleEventCreateOrConnectWithoutFestivalInput | ScheduleEventCreateOrConnectWithoutFestivalInput[]
    createMany?: ScheduleEventCreateManyFestivalInputEnvelope
    connect?: ScheduleEventWhereUniqueInput | ScheduleEventWhereUniqueInput[]
  }

  export type BoothUncheckedCreateNestedManyWithoutFestivalInput = {
    create?: XOR<BoothCreateWithoutFestivalInput, BoothUncheckedCreateWithoutFestivalInput> | BoothCreateWithoutFestivalInput[] | BoothUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: BoothCreateOrConnectWithoutFestivalInput | BoothCreateOrConnectWithoutFestivalInput[]
    createMany?: BoothCreateManyFestivalInputEnvelope
    connect?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
  }

  export type NoticeUncheckedCreateNestedManyWithoutFestivalInput = {
    create?: XOR<NoticeCreateWithoutFestivalInput, NoticeUncheckedCreateWithoutFestivalInput> | NoticeCreateWithoutFestivalInput[] | NoticeUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutFestivalInput | NoticeCreateOrConnectWithoutFestivalInput[]
    createMany?: NoticeCreateManyFestivalInputEnvelope
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ScheduleEventUpdateManyWithoutFestivalNestedInput = {
    create?: XOR<ScheduleEventCreateWithoutFestivalInput, ScheduleEventUncheckedCreateWithoutFestivalInput> | ScheduleEventCreateWithoutFestivalInput[] | ScheduleEventUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: ScheduleEventCreateOrConnectWithoutFestivalInput | ScheduleEventCreateOrConnectWithoutFestivalInput[]
    upsert?: ScheduleEventUpsertWithWhereUniqueWithoutFestivalInput | ScheduleEventUpsertWithWhereUniqueWithoutFestivalInput[]
    createMany?: ScheduleEventCreateManyFestivalInputEnvelope
    set?: ScheduleEventWhereUniqueInput | ScheduleEventWhereUniqueInput[]
    disconnect?: ScheduleEventWhereUniqueInput | ScheduleEventWhereUniqueInput[]
    delete?: ScheduleEventWhereUniqueInput | ScheduleEventWhereUniqueInput[]
    connect?: ScheduleEventWhereUniqueInput | ScheduleEventWhereUniqueInput[]
    update?: ScheduleEventUpdateWithWhereUniqueWithoutFestivalInput | ScheduleEventUpdateWithWhereUniqueWithoutFestivalInput[]
    updateMany?: ScheduleEventUpdateManyWithWhereWithoutFestivalInput | ScheduleEventUpdateManyWithWhereWithoutFestivalInput[]
    deleteMany?: ScheduleEventScalarWhereInput | ScheduleEventScalarWhereInput[]
  }

  export type BoothUpdateManyWithoutFestivalNestedInput = {
    create?: XOR<BoothCreateWithoutFestivalInput, BoothUncheckedCreateWithoutFestivalInput> | BoothCreateWithoutFestivalInput[] | BoothUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: BoothCreateOrConnectWithoutFestivalInput | BoothCreateOrConnectWithoutFestivalInput[]
    upsert?: BoothUpsertWithWhereUniqueWithoutFestivalInput | BoothUpsertWithWhereUniqueWithoutFestivalInput[]
    createMany?: BoothCreateManyFestivalInputEnvelope
    set?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
    disconnect?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
    delete?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
    connect?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
    update?: BoothUpdateWithWhereUniqueWithoutFestivalInput | BoothUpdateWithWhereUniqueWithoutFestivalInput[]
    updateMany?: BoothUpdateManyWithWhereWithoutFestivalInput | BoothUpdateManyWithWhereWithoutFestivalInput[]
    deleteMany?: BoothScalarWhereInput | BoothScalarWhereInput[]
  }

  export type NoticeUpdateManyWithoutFestivalNestedInput = {
    create?: XOR<NoticeCreateWithoutFestivalInput, NoticeUncheckedCreateWithoutFestivalInput> | NoticeCreateWithoutFestivalInput[] | NoticeUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutFestivalInput | NoticeCreateOrConnectWithoutFestivalInput[]
    upsert?: NoticeUpsertWithWhereUniqueWithoutFestivalInput | NoticeUpsertWithWhereUniqueWithoutFestivalInput[]
    createMany?: NoticeCreateManyFestivalInputEnvelope
    set?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    disconnect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    delete?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    update?: NoticeUpdateWithWhereUniqueWithoutFestivalInput | NoticeUpdateWithWhereUniqueWithoutFestivalInput[]
    updateMany?: NoticeUpdateManyWithWhereWithoutFestivalInput | NoticeUpdateManyWithWhereWithoutFestivalInput[]
    deleteMany?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
  }

  export type ScheduleEventUncheckedUpdateManyWithoutFestivalNestedInput = {
    create?: XOR<ScheduleEventCreateWithoutFestivalInput, ScheduleEventUncheckedCreateWithoutFestivalInput> | ScheduleEventCreateWithoutFestivalInput[] | ScheduleEventUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: ScheduleEventCreateOrConnectWithoutFestivalInput | ScheduleEventCreateOrConnectWithoutFestivalInput[]
    upsert?: ScheduleEventUpsertWithWhereUniqueWithoutFestivalInput | ScheduleEventUpsertWithWhereUniqueWithoutFestivalInput[]
    createMany?: ScheduleEventCreateManyFestivalInputEnvelope
    set?: ScheduleEventWhereUniqueInput | ScheduleEventWhereUniqueInput[]
    disconnect?: ScheduleEventWhereUniqueInput | ScheduleEventWhereUniqueInput[]
    delete?: ScheduleEventWhereUniqueInput | ScheduleEventWhereUniqueInput[]
    connect?: ScheduleEventWhereUniqueInput | ScheduleEventWhereUniqueInput[]
    update?: ScheduleEventUpdateWithWhereUniqueWithoutFestivalInput | ScheduleEventUpdateWithWhereUniqueWithoutFestivalInput[]
    updateMany?: ScheduleEventUpdateManyWithWhereWithoutFestivalInput | ScheduleEventUpdateManyWithWhereWithoutFestivalInput[]
    deleteMany?: ScheduleEventScalarWhereInput | ScheduleEventScalarWhereInput[]
  }

  export type BoothUncheckedUpdateManyWithoutFestivalNestedInput = {
    create?: XOR<BoothCreateWithoutFestivalInput, BoothUncheckedCreateWithoutFestivalInput> | BoothCreateWithoutFestivalInput[] | BoothUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: BoothCreateOrConnectWithoutFestivalInput | BoothCreateOrConnectWithoutFestivalInput[]
    upsert?: BoothUpsertWithWhereUniqueWithoutFestivalInput | BoothUpsertWithWhereUniqueWithoutFestivalInput[]
    createMany?: BoothCreateManyFestivalInputEnvelope
    set?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
    disconnect?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
    delete?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
    connect?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
    update?: BoothUpdateWithWhereUniqueWithoutFestivalInput | BoothUpdateWithWhereUniqueWithoutFestivalInput[]
    updateMany?: BoothUpdateManyWithWhereWithoutFestivalInput | BoothUpdateManyWithWhereWithoutFestivalInput[]
    deleteMany?: BoothScalarWhereInput | BoothScalarWhereInput[]
  }

  export type NoticeUncheckedUpdateManyWithoutFestivalNestedInput = {
    create?: XOR<NoticeCreateWithoutFestivalInput, NoticeUncheckedCreateWithoutFestivalInput> | NoticeCreateWithoutFestivalInput[] | NoticeUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutFestivalInput | NoticeCreateOrConnectWithoutFestivalInput[]
    upsert?: NoticeUpsertWithWhereUniqueWithoutFestivalInput | NoticeUpsertWithWhereUniqueWithoutFestivalInput[]
    createMany?: NoticeCreateManyFestivalInputEnvelope
    set?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    disconnect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    delete?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    update?: NoticeUpdateWithWhereUniqueWithoutFestivalInput | NoticeUpdateWithWhereUniqueWithoutFestivalInput[]
    updateMany?: NoticeUpdateManyWithWhereWithoutFestivalInput | NoticeUpdateManyWithWhereWithoutFestivalInput[]
    deleteMany?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
  }

  export type FestivalCreateNestedOneWithoutScheduleEventsInput = {
    create?: XOR<FestivalCreateWithoutScheduleEventsInput, FestivalUncheckedCreateWithoutScheduleEventsInput>
    connectOrCreate?: FestivalCreateOrConnectWithoutScheduleEventsInput
    connect?: FestivalWhereUniqueInput
  }

  export type ArtistOnScheduleEventCreateNestedManyWithoutScheduleEventInput = {
    create?: XOR<ArtistOnScheduleEventCreateWithoutScheduleEventInput, ArtistOnScheduleEventUncheckedCreateWithoutScheduleEventInput> | ArtistOnScheduleEventCreateWithoutScheduleEventInput[] | ArtistOnScheduleEventUncheckedCreateWithoutScheduleEventInput[]
    connectOrCreate?: ArtistOnScheduleEventCreateOrConnectWithoutScheduleEventInput | ArtistOnScheduleEventCreateOrConnectWithoutScheduleEventInput[]
    createMany?: ArtistOnScheduleEventCreateManyScheduleEventInputEnvelope
    connect?: ArtistOnScheduleEventWhereUniqueInput | ArtistOnScheduleEventWhereUniqueInput[]
  }

  export type ArtistOnScheduleEventUncheckedCreateNestedManyWithoutScheduleEventInput = {
    create?: XOR<ArtistOnScheduleEventCreateWithoutScheduleEventInput, ArtistOnScheduleEventUncheckedCreateWithoutScheduleEventInput> | ArtistOnScheduleEventCreateWithoutScheduleEventInput[] | ArtistOnScheduleEventUncheckedCreateWithoutScheduleEventInput[]
    connectOrCreate?: ArtistOnScheduleEventCreateOrConnectWithoutScheduleEventInput | ArtistOnScheduleEventCreateOrConnectWithoutScheduleEventInput[]
    createMany?: ArtistOnScheduleEventCreateManyScheduleEventInputEnvelope
    connect?: ArtistOnScheduleEventWhereUniqueInput | ArtistOnScheduleEventWhereUniqueInput[]
  }

  export type FestivalUpdateOneRequiredWithoutScheduleEventsNestedInput = {
    create?: XOR<FestivalCreateWithoutScheduleEventsInput, FestivalUncheckedCreateWithoutScheduleEventsInput>
    connectOrCreate?: FestivalCreateOrConnectWithoutScheduleEventsInput
    upsert?: FestivalUpsertWithoutScheduleEventsInput
    connect?: FestivalWhereUniqueInput
    update?: XOR<XOR<FestivalUpdateToOneWithWhereWithoutScheduleEventsInput, FestivalUpdateWithoutScheduleEventsInput>, FestivalUncheckedUpdateWithoutScheduleEventsInput>
  }

  export type ArtistOnScheduleEventUpdateManyWithoutScheduleEventNestedInput = {
    create?: XOR<ArtistOnScheduleEventCreateWithoutScheduleEventInput, ArtistOnScheduleEventUncheckedCreateWithoutScheduleEventInput> | ArtistOnScheduleEventCreateWithoutScheduleEventInput[] | ArtistOnScheduleEventUncheckedCreateWithoutScheduleEventInput[]
    connectOrCreate?: ArtistOnScheduleEventCreateOrConnectWithoutScheduleEventInput | ArtistOnScheduleEventCreateOrConnectWithoutScheduleEventInput[]
    upsert?: ArtistOnScheduleEventUpsertWithWhereUniqueWithoutScheduleEventInput | ArtistOnScheduleEventUpsertWithWhereUniqueWithoutScheduleEventInput[]
    createMany?: ArtistOnScheduleEventCreateManyScheduleEventInputEnvelope
    set?: ArtistOnScheduleEventWhereUniqueInput | ArtistOnScheduleEventWhereUniqueInput[]
    disconnect?: ArtistOnScheduleEventWhereUniqueInput | ArtistOnScheduleEventWhereUniqueInput[]
    delete?: ArtistOnScheduleEventWhereUniqueInput | ArtistOnScheduleEventWhereUniqueInput[]
    connect?: ArtistOnScheduleEventWhereUniqueInput | ArtistOnScheduleEventWhereUniqueInput[]
    update?: ArtistOnScheduleEventUpdateWithWhereUniqueWithoutScheduleEventInput | ArtistOnScheduleEventUpdateWithWhereUniqueWithoutScheduleEventInput[]
    updateMany?: ArtistOnScheduleEventUpdateManyWithWhereWithoutScheduleEventInput | ArtistOnScheduleEventUpdateManyWithWhereWithoutScheduleEventInput[]
    deleteMany?: ArtistOnScheduleEventScalarWhereInput | ArtistOnScheduleEventScalarWhereInput[]
  }

  export type ArtistOnScheduleEventUncheckedUpdateManyWithoutScheduleEventNestedInput = {
    create?: XOR<ArtistOnScheduleEventCreateWithoutScheduleEventInput, ArtistOnScheduleEventUncheckedCreateWithoutScheduleEventInput> | ArtistOnScheduleEventCreateWithoutScheduleEventInput[] | ArtistOnScheduleEventUncheckedCreateWithoutScheduleEventInput[]
    connectOrCreate?: ArtistOnScheduleEventCreateOrConnectWithoutScheduleEventInput | ArtistOnScheduleEventCreateOrConnectWithoutScheduleEventInput[]
    upsert?: ArtistOnScheduleEventUpsertWithWhereUniqueWithoutScheduleEventInput | ArtistOnScheduleEventUpsertWithWhereUniqueWithoutScheduleEventInput[]
    createMany?: ArtistOnScheduleEventCreateManyScheduleEventInputEnvelope
    set?: ArtistOnScheduleEventWhereUniqueInput | ArtistOnScheduleEventWhereUniqueInput[]
    disconnect?: ArtistOnScheduleEventWhereUniqueInput | ArtistOnScheduleEventWhereUniqueInput[]
    delete?: ArtistOnScheduleEventWhereUniqueInput | ArtistOnScheduleEventWhereUniqueInput[]
    connect?: ArtistOnScheduleEventWhereUniqueInput | ArtistOnScheduleEventWhereUniqueInput[]
    update?: ArtistOnScheduleEventUpdateWithWhereUniqueWithoutScheduleEventInput | ArtistOnScheduleEventUpdateWithWhereUniqueWithoutScheduleEventInput[]
    updateMany?: ArtistOnScheduleEventUpdateManyWithWhereWithoutScheduleEventInput | ArtistOnScheduleEventUpdateManyWithWhereWithoutScheduleEventInput[]
    deleteMany?: ArtistOnScheduleEventScalarWhereInput | ArtistOnScheduleEventScalarWhereInput[]
  }

  export type ArtistOnScheduleEventCreateNestedManyWithoutArtistInput = {
    create?: XOR<ArtistOnScheduleEventCreateWithoutArtistInput, ArtistOnScheduleEventUncheckedCreateWithoutArtistInput> | ArtistOnScheduleEventCreateWithoutArtistInput[] | ArtistOnScheduleEventUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ArtistOnScheduleEventCreateOrConnectWithoutArtistInput | ArtistOnScheduleEventCreateOrConnectWithoutArtistInput[]
    createMany?: ArtistOnScheduleEventCreateManyArtistInputEnvelope
    connect?: ArtistOnScheduleEventWhereUniqueInput | ArtistOnScheduleEventWhereUniqueInput[]
  }

  export type ArtistOnScheduleEventUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<ArtistOnScheduleEventCreateWithoutArtistInput, ArtistOnScheduleEventUncheckedCreateWithoutArtistInput> | ArtistOnScheduleEventCreateWithoutArtistInput[] | ArtistOnScheduleEventUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ArtistOnScheduleEventCreateOrConnectWithoutArtistInput | ArtistOnScheduleEventCreateOrConnectWithoutArtistInput[]
    createMany?: ArtistOnScheduleEventCreateManyArtistInputEnvelope
    connect?: ArtistOnScheduleEventWhereUniqueInput | ArtistOnScheduleEventWhereUniqueInput[]
  }

  export type ArtistOnScheduleEventUpdateManyWithoutArtistNestedInput = {
    create?: XOR<ArtistOnScheduleEventCreateWithoutArtistInput, ArtistOnScheduleEventUncheckedCreateWithoutArtistInput> | ArtistOnScheduleEventCreateWithoutArtistInput[] | ArtistOnScheduleEventUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ArtistOnScheduleEventCreateOrConnectWithoutArtistInput | ArtistOnScheduleEventCreateOrConnectWithoutArtistInput[]
    upsert?: ArtistOnScheduleEventUpsertWithWhereUniqueWithoutArtistInput | ArtistOnScheduleEventUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: ArtistOnScheduleEventCreateManyArtistInputEnvelope
    set?: ArtistOnScheduleEventWhereUniqueInput | ArtistOnScheduleEventWhereUniqueInput[]
    disconnect?: ArtistOnScheduleEventWhereUniqueInput | ArtistOnScheduleEventWhereUniqueInput[]
    delete?: ArtistOnScheduleEventWhereUniqueInput | ArtistOnScheduleEventWhereUniqueInput[]
    connect?: ArtistOnScheduleEventWhereUniqueInput | ArtistOnScheduleEventWhereUniqueInput[]
    update?: ArtistOnScheduleEventUpdateWithWhereUniqueWithoutArtistInput | ArtistOnScheduleEventUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: ArtistOnScheduleEventUpdateManyWithWhereWithoutArtistInput | ArtistOnScheduleEventUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: ArtistOnScheduleEventScalarWhereInput | ArtistOnScheduleEventScalarWhereInput[]
  }

  export type ArtistOnScheduleEventUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<ArtistOnScheduleEventCreateWithoutArtistInput, ArtistOnScheduleEventUncheckedCreateWithoutArtistInput> | ArtistOnScheduleEventCreateWithoutArtistInput[] | ArtistOnScheduleEventUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ArtistOnScheduleEventCreateOrConnectWithoutArtistInput | ArtistOnScheduleEventCreateOrConnectWithoutArtistInput[]
    upsert?: ArtistOnScheduleEventUpsertWithWhereUniqueWithoutArtistInput | ArtistOnScheduleEventUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: ArtistOnScheduleEventCreateManyArtistInputEnvelope
    set?: ArtistOnScheduleEventWhereUniqueInput | ArtistOnScheduleEventWhereUniqueInput[]
    disconnect?: ArtistOnScheduleEventWhereUniqueInput | ArtistOnScheduleEventWhereUniqueInput[]
    delete?: ArtistOnScheduleEventWhereUniqueInput | ArtistOnScheduleEventWhereUniqueInput[]
    connect?: ArtistOnScheduleEventWhereUniqueInput | ArtistOnScheduleEventWhereUniqueInput[]
    update?: ArtistOnScheduleEventUpdateWithWhereUniqueWithoutArtistInput | ArtistOnScheduleEventUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: ArtistOnScheduleEventUpdateManyWithWhereWithoutArtistInput | ArtistOnScheduleEventUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: ArtistOnScheduleEventScalarWhereInput | ArtistOnScheduleEventScalarWhereInput[]
  }

  export type ArtistCreateNestedOneWithoutScheduleEventsInput = {
    create?: XOR<ArtistCreateWithoutScheduleEventsInput, ArtistUncheckedCreateWithoutScheduleEventsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutScheduleEventsInput
    connect?: ArtistWhereUniqueInput
  }

  export type ScheduleEventCreateNestedOneWithoutArtistsInput = {
    create?: XOR<ScheduleEventCreateWithoutArtistsInput, ScheduleEventUncheckedCreateWithoutArtistsInput>
    connectOrCreate?: ScheduleEventCreateOrConnectWithoutArtistsInput
    connect?: ScheduleEventWhereUniqueInput
  }

  export type ArtistUpdateOneRequiredWithoutScheduleEventsNestedInput = {
    create?: XOR<ArtistCreateWithoutScheduleEventsInput, ArtistUncheckedCreateWithoutScheduleEventsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutScheduleEventsInput
    upsert?: ArtistUpsertWithoutScheduleEventsInput
    connect?: ArtistWhereUniqueInput
    update?: XOR<XOR<ArtistUpdateToOneWithWhereWithoutScheduleEventsInput, ArtistUpdateWithoutScheduleEventsInput>, ArtistUncheckedUpdateWithoutScheduleEventsInput>
  }

  export type ScheduleEventUpdateOneRequiredWithoutArtistsNestedInput = {
    create?: XOR<ScheduleEventCreateWithoutArtistsInput, ScheduleEventUncheckedCreateWithoutArtistsInput>
    connectOrCreate?: ScheduleEventCreateOrConnectWithoutArtistsInput
    upsert?: ScheduleEventUpsertWithoutArtistsInput
    connect?: ScheduleEventWhereUniqueInput
    update?: XOR<XOR<ScheduleEventUpdateToOneWithWhereWithoutArtistsInput, ScheduleEventUpdateWithoutArtistsInput>, ScheduleEventUncheckedUpdateWithoutArtistsInput>
  }

  export type FestivalCreateNestedOneWithoutBoothsInput = {
    create?: XOR<FestivalCreateWithoutBoothsInput, FestivalUncheckedCreateWithoutBoothsInput>
    connectOrCreate?: FestivalCreateOrConnectWithoutBoothsInput
    connect?: FestivalWhereUniqueInput
  }

  export type BoothOperatorCreateNestedOneWithoutBoothsInput = {
    create?: XOR<BoothOperatorCreateWithoutBoothsInput, BoothOperatorUncheckedCreateWithoutBoothsInput>
    connectOrCreate?: BoothOperatorCreateOrConnectWithoutBoothsInput
    connect?: BoothOperatorWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOperatedBoothsInput = {
    create?: XOR<UserCreateWithoutOperatedBoothsInput, UserUncheckedCreateWithoutOperatedBoothsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOperatedBoothsInput
    connect?: UserWhereUniqueInput
  }

  export type MenuItemCreateNestedManyWithoutBoothInput = {
    create?: XOR<MenuItemCreateWithoutBoothInput, MenuItemUncheckedCreateWithoutBoothInput> | MenuItemCreateWithoutBoothInput[] | MenuItemUncheckedCreateWithoutBoothInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutBoothInput | MenuItemCreateOrConnectWithoutBoothInput[]
    createMany?: MenuItemCreateManyBoothInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type MenuItemUncheckedCreateNestedManyWithoutBoothInput = {
    create?: XOR<MenuItemCreateWithoutBoothInput, MenuItemUncheckedCreateWithoutBoothInput> | MenuItemCreateWithoutBoothInput[] | MenuItemUncheckedCreateWithoutBoothInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutBoothInput | MenuItemCreateOrConnectWithoutBoothInput[]
    createMany?: MenuItemCreateManyBoothInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FestivalUpdateOneRequiredWithoutBoothsNestedInput = {
    create?: XOR<FestivalCreateWithoutBoothsInput, FestivalUncheckedCreateWithoutBoothsInput>
    connectOrCreate?: FestivalCreateOrConnectWithoutBoothsInput
    upsert?: FestivalUpsertWithoutBoothsInput
    connect?: FestivalWhereUniqueInput
    update?: XOR<XOR<FestivalUpdateToOneWithWhereWithoutBoothsInput, FestivalUpdateWithoutBoothsInput>, FestivalUncheckedUpdateWithoutBoothsInput>
  }

  export type BoothOperatorUpdateOneRequiredWithoutBoothsNestedInput = {
    create?: XOR<BoothOperatorCreateWithoutBoothsInput, BoothOperatorUncheckedCreateWithoutBoothsInput>
    connectOrCreate?: BoothOperatorCreateOrConnectWithoutBoothsInput
    upsert?: BoothOperatorUpsertWithoutBoothsInput
    connect?: BoothOperatorWhereUniqueInput
    update?: XOR<XOR<BoothOperatorUpdateToOneWithWhereWithoutBoothsInput, BoothOperatorUpdateWithoutBoothsInput>, BoothOperatorUncheckedUpdateWithoutBoothsInput>
  }

  export type UserUpdateOneWithoutOperatedBoothsNestedInput = {
    create?: XOR<UserCreateWithoutOperatedBoothsInput, UserUncheckedCreateWithoutOperatedBoothsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOperatedBoothsInput
    upsert?: UserUpsertWithoutOperatedBoothsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOperatedBoothsInput, UserUpdateWithoutOperatedBoothsInput>, UserUncheckedUpdateWithoutOperatedBoothsInput>
  }

  export type MenuItemUpdateManyWithoutBoothNestedInput = {
    create?: XOR<MenuItemCreateWithoutBoothInput, MenuItemUncheckedCreateWithoutBoothInput> | MenuItemCreateWithoutBoothInput[] | MenuItemUncheckedCreateWithoutBoothInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutBoothInput | MenuItemCreateOrConnectWithoutBoothInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutBoothInput | MenuItemUpsertWithWhereUniqueWithoutBoothInput[]
    createMany?: MenuItemCreateManyBoothInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutBoothInput | MenuItemUpdateWithWhereUniqueWithoutBoothInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutBoothInput | MenuItemUpdateManyWithWhereWithoutBoothInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type MenuItemUncheckedUpdateManyWithoutBoothNestedInput = {
    create?: XOR<MenuItemCreateWithoutBoothInput, MenuItemUncheckedCreateWithoutBoothInput> | MenuItemCreateWithoutBoothInput[] | MenuItemUncheckedCreateWithoutBoothInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutBoothInput | MenuItemCreateOrConnectWithoutBoothInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutBoothInput | MenuItemUpsertWithWhereUniqueWithoutBoothInput[]
    createMany?: MenuItemCreateManyBoothInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutBoothInput | MenuItemUpdateWithWhereUniqueWithoutBoothInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutBoothInput | MenuItemUpdateManyWithWhereWithoutBoothInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type BoothCreateNestedManyWithoutBoothOperatorInput = {
    create?: XOR<BoothCreateWithoutBoothOperatorInput, BoothUncheckedCreateWithoutBoothOperatorInput> | BoothCreateWithoutBoothOperatorInput[] | BoothUncheckedCreateWithoutBoothOperatorInput[]
    connectOrCreate?: BoothCreateOrConnectWithoutBoothOperatorInput | BoothCreateOrConnectWithoutBoothOperatorInput[]
    createMany?: BoothCreateManyBoothOperatorInputEnvelope
    connect?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
  }

  export type BoothUncheckedCreateNestedManyWithoutBoothOperatorInput = {
    create?: XOR<BoothCreateWithoutBoothOperatorInput, BoothUncheckedCreateWithoutBoothOperatorInput> | BoothCreateWithoutBoothOperatorInput[] | BoothUncheckedCreateWithoutBoothOperatorInput[]
    connectOrCreate?: BoothCreateOrConnectWithoutBoothOperatorInput | BoothCreateOrConnectWithoutBoothOperatorInput[]
    createMany?: BoothCreateManyBoothOperatorInputEnvelope
    connect?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
  }

  export type BoothUpdateManyWithoutBoothOperatorNestedInput = {
    create?: XOR<BoothCreateWithoutBoothOperatorInput, BoothUncheckedCreateWithoutBoothOperatorInput> | BoothCreateWithoutBoothOperatorInput[] | BoothUncheckedCreateWithoutBoothOperatorInput[]
    connectOrCreate?: BoothCreateOrConnectWithoutBoothOperatorInput | BoothCreateOrConnectWithoutBoothOperatorInput[]
    upsert?: BoothUpsertWithWhereUniqueWithoutBoothOperatorInput | BoothUpsertWithWhereUniqueWithoutBoothOperatorInput[]
    createMany?: BoothCreateManyBoothOperatorInputEnvelope
    set?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
    disconnect?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
    delete?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
    connect?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
    update?: BoothUpdateWithWhereUniqueWithoutBoothOperatorInput | BoothUpdateWithWhereUniqueWithoutBoothOperatorInput[]
    updateMany?: BoothUpdateManyWithWhereWithoutBoothOperatorInput | BoothUpdateManyWithWhereWithoutBoothOperatorInput[]
    deleteMany?: BoothScalarWhereInput | BoothScalarWhereInput[]
  }

  export type BoothUncheckedUpdateManyWithoutBoothOperatorNestedInput = {
    create?: XOR<BoothCreateWithoutBoothOperatorInput, BoothUncheckedCreateWithoutBoothOperatorInput> | BoothCreateWithoutBoothOperatorInput[] | BoothUncheckedCreateWithoutBoothOperatorInput[]
    connectOrCreate?: BoothCreateOrConnectWithoutBoothOperatorInput | BoothCreateOrConnectWithoutBoothOperatorInput[]
    upsert?: BoothUpsertWithWhereUniqueWithoutBoothOperatorInput | BoothUpsertWithWhereUniqueWithoutBoothOperatorInput[]
    createMany?: BoothCreateManyBoothOperatorInputEnvelope
    set?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
    disconnect?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
    delete?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
    connect?: BoothWhereUniqueInput | BoothWhereUniqueInput[]
    update?: BoothUpdateWithWhereUniqueWithoutBoothOperatorInput | BoothUpdateWithWhereUniqueWithoutBoothOperatorInput[]
    updateMany?: BoothUpdateManyWithWhereWithoutBoothOperatorInput | BoothUpdateManyWithWhereWithoutBoothOperatorInput[]
    deleteMany?: BoothScalarWhereInput | BoothScalarWhereInput[]
  }

  export type BoothCreateNestedOneWithoutMenuItemsInput = {
    create?: XOR<BoothCreateWithoutMenuItemsInput, BoothUncheckedCreateWithoutMenuItemsInput>
    connectOrCreate?: BoothCreateOrConnectWithoutMenuItemsInput
    connect?: BoothWhereUniqueInput
  }

  export type BoothUpdateOneRequiredWithoutMenuItemsNestedInput = {
    create?: XOR<BoothCreateWithoutMenuItemsInput, BoothUncheckedCreateWithoutMenuItemsInput>
    connectOrCreate?: BoothCreateOrConnectWithoutMenuItemsInput
    upsert?: BoothUpsertWithoutMenuItemsInput
    connect?: BoothWhereUniqueInput
    update?: XOR<XOR<BoothUpdateToOneWithWhereWithoutMenuItemsInput, BoothUpdateWithoutMenuItemsInput>, BoothUncheckedUpdateWithoutMenuItemsInput>
  }

  export type FestivalCreateNestedOneWithoutNoticesInput = {
    create?: XOR<FestivalCreateWithoutNoticesInput, FestivalUncheckedCreateWithoutNoticesInput>
    connectOrCreate?: FestivalCreateOrConnectWithoutNoticesInput
    connect?: FestivalWhereUniqueInput
  }

  export type FestivalUpdateOneRequiredWithoutNoticesNestedInput = {
    create?: XOR<FestivalCreateWithoutNoticesInput, FestivalUncheckedCreateWithoutNoticesInput>
    connectOrCreate?: FestivalCreateOrConnectWithoutNoticesInput
    upsert?: FestivalUpsertWithoutNoticesInput
    connect?: FestivalWhereUniqueInput
    update?: XOR<XOR<FestivalUpdateToOneWithWhereWithoutNoticesInput, FestivalUpdateWithoutNoticesInput>, FestivalUncheckedUpdateWithoutNoticesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BoothCreateWithoutOperatorUserInput = {
    id?: string
    name: string
    description?: string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    operatingHours?: string | null
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    festival: FestivalCreateNestedOneWithoutBoothsInput
    boothOperator: BoothOperatorCreateNestedOneWithoutBoothsInput
    menuItems?: MenuItemCreateNestedManyWithoutBoothInput
  }

  export type BoothUncheckedCreateWithoutOperatorUserInput = {
    id?: string
    name: string
    description?: string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    operatingHours?: string | null
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    festivalId: string
    boothOperatorId: string
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutBoothInput
  }

  export type BoothCreateOrConnectWithoutOperatorUserInput = {
    where: BoothWhereUniqueInput
    create: XOR<BoothCreateWithoutOperatorUserInput, BoothUncheckedCreateWithoutOperatorUserInput>
  }

  export type BoothCreateManyOperatorUserInputEnvelope = {
    data: BoothCreateManyOperatorUserInput | BoothCreateManyOperatorUserInput[]
    skipDuplicates?: boolean
  }

  export type BoothUpsertWithWhereUniqueWithoutOperatorUserInput = {
    where: BoothWhereUniqueInput
    update: XOR<BoothUpdateWithoutOperatorUserInput, BoothUncheckedUpdateWithoutOperatorUserInput>
    create: XOR<BoothCreateWithoutOperatorUserInput, BoothUncheckedCreateWithoutOperatorUserInput>
  }

  export type BoothUpdateWithWhereUniqueWithoutOperatorUserInput = {
    where: BoothWhereUniqueInput
    data: XOR<BoothUpdateWithoutOperatorUserInput, BoothUncheckedUpdateWithoutOperatorUserInput>
  }

  export type BoothUpdateManyWithWhereWithoutOperatorUserInput = {
    where: BoothScalarWhereInput
    data: XOR<BoothUpdateManyMutationInput, BoothUncheckedUpdateManyWithoutOperatorUserInput>
  }

  export type BoothScalarWhereInput = {
    AND?: BoothScalarWhereInput | BoothScalarWhereInput[]
    OR?: BoothScalarWhereInput[]
    NOT?: BoothScalarWhereInput | BoothScalarWhereInput[]
    id?: StringFilter<"Booth"> | string
    name?: StringFilter<"Booth"> | string
    description?: StringNullableFilter<"Booth"> | string | null
    mapCoordinates?: JsonNullableFilter<"Booth">
    imageUrl?: StringNullableFilter<"Booth"> | string | null
    operatingHours?: StringNullableFilter<"Booth"> | string | null
    category?: StringFilter<"Booth"> | string
    isPopular?: BoolFilter<"Booth"> | boolean
    createdAt?: DateTimeFilter<"Booth"> | Date | string
    updatedAt?: DateTimeFilter<"Booth"> | Date | string
    festivalId?: StringFilter<"Booth"> | string
    boothOperatorId?: StringFilter<"Booth"> | string
    operatorUserId?: StringNullableFilter<"Booth"> | string | null
  }

  export type ScheduleEventCreateWithoutFestivalInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    location: string
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistOnScheduleEventCreateNestedManyWithoutScheduleEventInput
  }

  export type ScheduleEventUncheckedCreateWithoutFestivalInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    location: string
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistOnScheduleEventUncheckedCreateNestedManyWithoutScheduleEventInput
  }

  export type ScheduleEventCreateOrConnectWithoutFestivalInput = {
    where: ScheduleEventWhereUniqueInput
    create: XOR<ScheduleEventCreateWithoutFestivalInput, ScheduleEventUncheckedCreateWithoutFestivalInput>
  }

  export type ScheduleEventCreateManyFestivalInputEnvelope = {
    data: ScheduleEventCreateManyFestivalInput | ScheduleEventCreateManyFestivalInput[]
    skipDuplicates?: boolean
  }

  export type BoothCreateWithoutFestivalInput = {
    id?: string
    name: string
    description?: string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    operatingHours?: string | null
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    boothOperator: BoothOperatorCreateNestedOneWithoutBoothsInput
    operatorUser?: UserCreateNestedOneWithoutOperatedBoothsInput
    menuItems?: MenuItemCreateNestedManyWithoutBoothInput
  }

  export type BoothUncheckedCreateWithoutFestivalInput = {
    id?: string
    name: string
    description?: string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    operatingHours?: string | null
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    boothOperatorId: string
    operatorUserId?: string | null
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutBoothInput
  }

  export type BoothCreateOrConnectWithoutFestivalInput = {
    where: BoothWhereUniqueInput
    create: XOR<BoothCreateWithoutFestivalInput, BoothUncheckedCreateWithoutFestivalInput>
  }

  export type BoothCreateManyFestivalInputEnvelope = {
    data: BoothCreateManyFestivalInput | BoothCreateManyFestivalInput[]
    skipDuplicates?: boolean
  }

  export type NoticeCreateWithoutFestivalInput = {
    id?: string
    title: string
    content: string
    category?: string | null
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoticeUncheckedCreateWithoutFestivalInput = {
    id?: string
    title: string
    content: string
    category?: string | null
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoticeCreateOrConnectWithoutFestivalInput = {
    where: NoticeWhereUniqueInput
    create: XOR<NoticeCreateWithoutFestivalInput, NoticeUncheckedCreateWithoutFestivalInput>
  }

  export type NoticeCreateManyFestivalInputEnvelope = {
    data: NoticeCreateManyFestivalInput | NoticeCreateManyFestivalInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleEventUpsertWithWhereUniqueWithoutFestivalInput = {
    where: ScheduleEventWhereUniqueInput
    update: XOR<ScheduleEventUpdateWithoutFestivalInput, ScheduleEventUncheckedUpdateWithoutFestivalInput>
    create: XOR<ScheduleEventCreateWithoutFestivalInput, ScheduleEventUncheckedCreateWithoutFestivalInput>
  }

  export type ScheduleEventUpdateWithWhereUniqueWithoutFestivalInput = {
    where: ScheduleEventWhereUniqueInput
    data: XOR<ScheduleEventUpdateWithoutFestivalInput, ScheduleEventUncheckedUpdateWithoutFestivalInput>
  }

  export type ScheduleEventUpdateManyWithWhereWithoutFestivalInput = {
    where: ScheduleEventScalarWhereInput
    data: XOR<ScheduleEventUpdateManyMutationInput, ScheduleEventUncheckedUpdateManyWithoutFestivalInput>
  }

  export type ScheduleEventScalarWhereInput = {
    AND?: ScheduleEventScalarWhereInput | ScheduleEventScalarWhereInput[]
    OR?: ScheduleEventScalarWhereInput[]
    NOT?: ScheduleEventScalarWhereInput | ScheduleEventScalarWhereInput[]
    id?: StringFilter<"ScheduleEvent"> | string
    title?: StringFilter<"ScheduleEvent"> | string
    description?: StringNullableFilter<"ScheduleEvent"> | string | null
    startTime?: DateTimeFilter<"ScheduleEvent"> | Date | string
    endTime?: DateTimeFilter<"ScheduleEvent"> | Date | string
    location?: StringFilter<"ScheduleEvent"> | string
    category?: StringNullableFilter<"ScheduleEvent"> | string | null
    createdAt?: DateTimeFilter<"ScheduleEvent"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduleEvent"> | Date | string
    festivalId?: StringFilter<"ScheduleEvent"> | string
  }

  export type BoothUpsertWithWhereUniqueWithoutFestivalInput = {
    where: BoothWhereUniqueInput
    update: XOR<BoothUpdateWithoutFestivalInput, BoothUncheckedUpdateWithoutFestivalInput>
    create: XOR<BoothCreateWithoutFestivalInput, BoothUncheckedCreateWithoutFestivalInput>
  }

  export type BoothUpdateWithWhereUniqueWithoutFestivalInput = {
    where: BoothWhereUniqueInput
    data: XOR<BoothUpdateWithoutFestivalInput, BoothUncheckedUpdateWithoutFestivalInput>
  }

  export type BoothUpdateManyWithWhereWithoutFestivalInput = {
    where: BoothScalarWhereInput
    data: XOR<BoothUpdateManyMutationInput, BoothUncheckedUpdateManyWithoutFestivalInput>
  }

  export type NoticeUpsertWithWhereUniqueWithoutFestivalInput = {
    where: NoticeWhereUniqueInput
    update: XOR<NoticeUpdateWithoutFestivalInput, NoticeUncheckedUpdateWithoutFestivalInput>
    create: XOR<NoticeCreateWithoutFestivalInput, NoticeUncheckedCreateWithoutFestivalInput>
  }

  export type NoticeUpdateWithWhereUniqueWithoutFestivalInput = {
    where: NoticeWhereUniqueInput
    data: XOR<NoticeUpdateWithoutFestivalInput, NoticeUncheckedUpdateWithoutFestivalInput>
  }

  export type NoticeUpdateManyWithWhereWithoutFestivalInput = {
    where: NoticeScalarWhereInput
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyWithoutFestivalInput>
  }

  export type NoticeScalarWhereInput = {
    AND?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
    OR?: NoticeScalarWhereInput[]
    NOT?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
    id?: StringFilter<"Notice"> | string
    title?: StringFilter<"Notice"> | string
    content?: StringFilter<"Notice"> | string
    category?: StringNullableFilter<"Notice"> | string | null
    isPinned?: BoolFilter<"Notice"> | boolean
    createdAt?: DateTimeFilter<"Notice"> | Date | string
    updatedAt?: DateTimeFilter<"Notice"> | Date | string
    festivalId?: StringFilter<"Notice"> | string
  }

  export type FestivalCreateWithoutScheduleEventsInput = {
    id?: string
    name: string
    year: number
    startDate: Date | string
    endDate: Date | string
    theme?: string | null
    description?: string | null
    posterUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booths?: BoothCreateNestedManyWithoutFestivalInput
    notices?: NoticeCreateNestedManyWithoutFestivalInput
  }

  export type FestivalUncheckedCreateWithoutScheduleEventsInput = {
    id?: string
    name: string
    year: number
    startDate: Date | string
    endDate: Date | string
    theme?: string | null
    description?: string | null
    posterUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booths?: BoothUncheckedCreateNestedManyWithoutFestivalInput
    notices?: NoticeUncheckedCreateNestedManyWithoutFestivalInput
  }

  export type FestivalCreateOrConnectWithoutScheduleEventsInput = {
    where: FestivalWhereUniqueInput
    create: XOR<FestivalCreateWithoutScheduleEventsInput, FestivalUncheckedCreateWithoutScheduleEventsInput>
  }

  export type ArtistOnScheduleEventCreateWithoutScheduleEventInput = {
    assignedAt?: Date | string
    artist: ArtistCreateNestedOneWithoutScheduleEventsInput
  }

  export type ArtistOnScheduleEventUncheckedCreateWithoutScheduleEventInput = {
    artistId: string
    assignedAt?: Date | string
  }

  export type ArtistOnScheduleEventCreateOrConnectWithoutScheduleEventInput = {
    where: ArtistOnScheduleEventWhereUniqueInput
    create: XOR<ArtistOnScheduleEventCreateWithoutScheduleEventInput, ArtistOnScheduleEventUncheckedCreateWithoutScheduleEventInput>
  }

  export type ArtistOnScheduleEventCreateManyScheduleEventInputEnvelope = {
    data: ArtistOnScheduleEventCreateManyScheduleEventInput | ArtistOnScheduleEventCreateManyScheduleEventInput[]
    skipDuplicates?: boolean
  }

  export type FestivalUpsertWithoutScheduleEventsInput = {
    update: XOR<FestivalUpdateWithoutScheduleEventsInput, FestivalUncheckedUpdateWithoutScheduleEventsInput>
    create: XOR<FestivalCreateWithoutScheduleEventsInput, FestivalUncheckedCreateWithoutScheduleEventsInput>
    where?: FestivalWhereInput
  }

  export type FestivalUpdateToOneWithWhereWithoutScheduleEventsInput = {
    where?: FestivalWhereInput
    data: XOR<FestivalUpdateWithoutScheduleEventsInput, FestivalUncheckedUpdateWithoutScheduleEventsInput>
  }

  export type FestivalUpdateWithoutScheduleEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booths?: BoothUpdateManyWithoutFestivalNestedInput
    notices?: NoticeUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalUncheckedUpdateWithoutScheduleEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booths?: BoothUncheckedUpdateManyWithoutFestivalNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutFestivalNestedInput
  }

  export type ArtistOnScheduleEventUpsertWithWhereUniqueWithoutScheduleEventInput = {
    where: ArtistOnScheduleEventWhereUniqueInput
    update: XOR<ArtistOnScheduleEventUpdateWithoutScheduleEventInput, ArtistOnScheduleEventUncheckedUpdateWithoutScheduleEventInput>
    create: XOR<ArtistOnScheduleEventCreateWithoutScheduleEventInput, ArtistOnScheduleEventUncheckedCreateWithoutScheduleEventInput>
  }

  export type ArtistOnScheduleEventUpdateWithWhereUniqueWithoutScheduleEventInput = {
    where: ArtistOnScheduleEventWhereUniqueInput
    data: XOR<ArtistOnScheduleEventUpdateWithoutScheduleEventInput, ArtistOnScheduleEventUncheckedUpdateWithoutScheduleEventInput>
  }

  export type ArtistOnScheduleEventUpdateManyWithWhereWithoutScheduleEventInput = {
    where: ArtistOnScheduleEventScalarWhereInput
    data: XOR<ArtistOnScheduleEventUpdateManyMutationInput, ArtistOnScheduleEventUncheckedUpdateManyWithoutScheduleEventInput>
  }

  export type ArtistOnScheduleEventScalarWhereInput = {
    AND?: ArtistOnScheduleEventScalarWhereInput | ArtistOnScheduleEventScalarWhereInput[]
    OR?: ArtistOnScheduleEventScalarWhereInput[]
    NOT?: ArtistOnScheduleEventScalarWhereInput | ArtistOnScheduleEventScalarWhereInput[]
    artistId?: StringFilter<"ArtistOnScheduleEvent"> | string
    scheduleEventId?: StringFilter<"ArtistOnScheduleEvent"> | string
    assignedAt?: DateTimeFilter<"ArtistOnScheduleEvent"> | Date | string
  }

  export type ArtistOnScheduleEventCreateWithoutArtistInput = {
    assignedAt?: Date | string
    scheduleEvent: ScheduleEventCreateNestedOneWithoutArtistsInput
  }

  export type ArtistOnScheduleEventUncheckedCreateWithoutArtistInput = {
    scheduleEventId: string
    assignedAt?: Date | string
  }

  export type ArtistOnScheduleEventCreateOrConnectWithoutArtistInput = {
    where: ArtistOnScheduleEventWhereUniqueInput
    create: XOR<ArtistOnScheduleEventCreateWithoutArtistInput, ArtistOnScheduleEventUncheckedCreateWithoutArtistInput>
  }

  export type ArtistOnScheduleEventCreateManyArtistInputEnvelope = {
    data: ArtistOnScheduleEventCreateManyArtistInput | ArtistOnScheduleEventCreateManyArtistInput[]
    skipDuplicates?: boolean
  }

  export type ArtistOnScheduleEventUpsertWithWhereUniqueWithoutArtistInput = {
    where: ArtistOnScheduleEventWhereUniqueInput
    update: XOR<ArtistOnScheduleEventUpdateWithoutArtistInput, ArtistOnScheduleEventUncheckedUpdateWithoutArtistInput>
    create: XOR<ArtistOnScheduleEventCreateWithoutArtistInput, ArtistOnScheduleEventUncheckedCreateWithoutArtistInput>
  }

  export type ArtistOnScheduleEventUpdateWithWhereUniqueWithoutArtistInput = {
    where: ArtistOnScheduleEventWhereUniqueInput
    data: XOR<ArtistOnScheduleEventUpdateWithoutArtistInput, ArtistOnScheduleEventUncheckedUpdateWithoutArtistInput>
  }

  export type ArtistOnScheduleEventUpdateManyWithWhereWithoutArtistInput = {
    where: ArtistOnScheduleEventScalarWhereInput
    data: XOR<ArtistOnScheduleEventUpdateManyMutationInput, ArtistOnScheduleEventUncheckedUpdateManyWithoutArtistInput>
  }

  export type ArtistCreateWithoutScheduleEventsInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    imageUrl?: string | null
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArtistUncheckedCreateWithoutScheduleEventsInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    imageUrl?: string | null
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArtistCreateOrConnectWithoutScheduleEventsInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutScheduleEventsInput, ArtistUncheckedCreateWithoutScheduleEventsInput>
  }

  export type ScheduleEventCreateWithoutArtistsInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    location: string
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    festival: FestivalCreateNestedOneWithoutScheduleEventsInput
  }

  export type ScheduleEventUncheckedCreateWithoutArtistsInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    location: string
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    festivalId: string
  }

  export type ScheduleEventCreateOrConnectWithoutArtistsInput = {
    where: ScheduleEventWhereUniqueInput
    create: XOR<ScheduleEventCreateWithoutArtistsInput, ScheduleEventUncheckedCreateWithoutArtistsInput>
  }

  export type ArtistUpsertWithoutScheduleEventsInput = {
    update: XOR<ArtistUpdateWithoutScheduleEventsInput, ArtistUncheckedUpdateWithoutScheduleEventsInput>
    create: XOR<ArtistCreateWithoutScheduleEventsInput, ArtistUncheckedCreateWithoutScheduleEventsInput>
    where?: ArtistWhereInput
  }

  export type ArtistUpdateToOneWithWhereWithoutScheduleEventsInput = {
    where?: ArtistWhereInput
    data: XOR<ArtistUpdateWithoutScheduleEventsInput, ArtistUncheckedUpdateWithoutScheduleEventsInput>
  }

  export type ArtistUpdateWithoutScheduleEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistUncheckedUpdateWithoutScheduleEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleEventUpsertWithoutArtistsInput = {
    update: XOR<ScheduleEventUpdateWithoutArtistsInput, ScheduleEventUncheckedUpdateWithoutArtistsInput>
    create: XOR<ScheduleEventCreateWithoutArtistsInput, ScheduleEventUncheckedCreateWithoutArtistsInput>
    where?: ScheduleEventWhereInput
  }

  export type ScheduleEventUpdateToOneWithWhereWithoutArtistsInput = {
    where?: ScheduleEventWhereInput
    data: XOR<ScheduleEventUpdateWithoutArtistsInput, ScheduleEventUncheckedUpdateWithoutArtistsInput>
  }

  export type ScheduleEventUpdateWithoutArtistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festival?: FestivalUpdateOneRequiredWithoutScheduleEventsNestedInput
  }

  export type ScheduleEventUncheckedUpdateWithoutArtistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festivalId?: StringFieldUpdateOperationsInput | string
  }

  export type FestivalCreateWithoutBoothsInput = {
    id?: string
    name: string
    year: number
    startDate: Date | string
    endDate: Date | string
    theme?: string | null
    description?: string | null
    posterUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scheduleEvents?: ScheduleEventCreateNestedManyWithoutFestivalInput
    notices?: NoticeCreateNestedManyWithoutFestivalInput
  }

  export type FestivalUncheckedCreateWithoutBoothsInput = {
    id?: string
    name: string
    year: number
    startDate: Date | string
    endDate: Date | string
    theme?: string | null
    description?: string | null
    posterUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scheduleEvents?: ScheduleEventUncheckedCreateNestedManyWithoutFestivalInput
    notices?: NoticeUncheckedCreateNestedManyWithoutFestivalInput
  }

  export type FestivalCreateOrConnectWithoutBoothsInput = {
    where: FestivalWhereUniqueInput
    create: XOR<FestivalCreateWithoutBoothsInput, FestivalUncheckedCreateWithoutBoothsInput>
  }

  export type BoothOperatorCreateWithoutBoothsInput = {
    id?: string
    name: string
    type: string
    contactInfo?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoothOperatorUncheckedCreateWithoutBoothsInput = {
    id?: string
    name: string
    type: string
    contactInfo?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoothOperatorCreateOrConnectWithoutBoothsInput = {
    where: BoothOperatorWhereUniqueInput
    create: XOR<BoothOperatorCreateWithoutBoothsInput, BoothOperatorUncheckedCreateWithoutBoothsInput>
  }

  export type UserCreateWithoutOperatedBoothsInput = {
    id?: string
    authUserId?: string | null
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutOperatedBoothsInput = {
    id?: string
    authUserId?: string | null
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutOperatedBoothsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOperatedBoothsInput, UserUncheckedCreateWithoutOperatedBoothsInput>
  }

  export type MenuItemCreateWithoutBoothInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    isSignature?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemUncheckedCreateWithoutBoothInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    isSignature?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemCreateOrConnectWithoutBoothInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutBoothInput, MenuItemUncheckedCreateWithoutBoothInput>
  }

  export type MenuItemCreateManyBoothInputEnvelope = {
    data: MenuItemCreateManyBoothInput | MenuItemCreateManyBoothInput[]
    skipDuplicates?: boolean
  }

  export type FestivalUpsertWithoutBoothsInput = {
    update: XOR<FestivalUpdateWithoutBoothsInput, FestivalUncheckedUpdateWithoutBoothsInput>
    create: XOR<FestivalCreateWithoutBoothsInput, FestivalUncheckedCreateWithoutBoothsInput>
    where?: FestivalWhereInput
  }

  export type FestivalUpdateToOneWithWhereWithoutBoothsInput = {
    where?: FestivalWhereInput
    data: XOR<FestivalUpdateWithoutBoothsInput, FestivalUncheckedUpdateWithoutBoothsInput>
  }

  export type FestivalUpdateWithoutBoothsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleEvents?: ScheduleEventUpdateManyWithoutFestivalNestedInput
    notices?: NoticeUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalUncheckedUpdateWithoutBoothsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleEvents?: ScheduleEventUncheckedUpdateManyWithoutFestivalNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutFestivalNestedInput
  }

  export type BoothOperatorUpsertWithoutBoothsInput = {
    update: XOR<BoothOperatorUpdateWithoutBoothsInput, BoothOperatorUncheckedUpdateWithoutBoothsInput>
    create: XOR<BoothOperatorCreateWithoutBoothsInput, BoothOperatorUncheckedCreateWithoutBoothsInput>
    where?: BoothOperatorWhereInput
  }

  export type BoothOperatorUpdateToOneWithWhereWithoutBoothsInput = {
    where?: BoothOperatorWhereInput
    data: XOR<BoothOperatorUpdateWithoutBoothsInput, BoothOperatorUncheckedUpdateWithoutBoothsInput>
  }

  export type BoothOperatorUpdateWithoutBoothsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoothOperatorUncheckedUpdateWithoutBoothsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutOperatedBoothsInput = {
    update: XOR<UserUpdateWithoutOperatedBoothsInput, UserUncheckedUpdateWithoutOperatedBoothsInput>
    create: XOR<UserCreateWithoutOperatedBoothsInput, UserUncheckedCreateWithoutOperatedBoothsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOperatedBoothsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOperatedBoothsInput, UserUncheckedUpdateWithoutOperatedBoothsInput>
  }

  export type UserUpdateWithoutOperatedBoothsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutOperatedBoothsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemUpsertWithWhereUniqueWithoutBoothInput = {
    where: MenuItemWhereUniqueInput
    update: XOR<MenuItemUpdateWithoutBoothInput, MenuItemUncheckedUpdateWithoutBoothInput>
    create: XOR<MenuItemCreateWithoutBoothInput, MenuItemUncheckedCreateWithoutBoothInput>
  }

  export type MenuItemUpdateWithWhereUniqueWithoutBoothInput = {
    where: MenuItemWhereUniqueInput
    data: XOR<MenuItemUpdateWithoutBoothInput, MenuItemUncheckedUpdateWithoutBoothInput>
  }

  export type MenuItemUpdateManyWithWhereWithoutBoothInput = {
    where: MenuItemScalarWhereInput
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyWithoutBoothInput>
  }

  export type MenuItemScalarWhereInput = {
    AND?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
    OR?: MenuItemScalarWhereInput[]
    NOT?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
    id?: StringFilter<"MenuItem"> | string
    name?: StringFilter<"MenuItem"> | string
    description?: StringNullableFilter<"MenuItem"> | string | null
    price?: IntFilter<"MenuItem"> | number
    imageUrl?: StringNullableFilter<"MenuItem"> | string | null
    isSignature?: BoolFilter<"MenuItem"> | boolean
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
    boothId?: StringFilter<"MenuItem"> | string
  }

  export type BoothCreateWithoutBoothOperatorInput = {
    id?: string
    name: string
    description?: string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    operatingHours?: string | null
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    festival: FestivalCreateNestedOneWithoutBoothsInput
    operatorUser?: UserCreateNestedOneWithoutOperatedBoothsInput
    menuItems?: MenuItemCreateNestedManyWithoutBoothInput
  }

  export type BoothUncheckedCreateWithoutBoothOperatorInput = {
    id?: string
    name: string
    description?: string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    operatingHours?: string | null
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    festivalId: string
    operatorUserId?: string | null
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutBoothInput
  }

  export type BoothCreateOrConnectWithoutBoothOperatorInput = {
    where: BoothWhereUniqueInput
    create: XOR<BoothCreateWithoutBoothOperatorInput, BoothUncheckedCreateWithoutBoothOperatorInput>
  }

  export type BoothCreateManyBoothOperatorInputEnvelope = {
    data: BoothCreateManyBoothOperatorInput | BoothCreateManyBoothOperatorInput[]
    skipDuplicates?: boolean
  }

  export type BoothUpsertWithWhereUniqueWithoutBoothOperatorInput = {
    where: BoothWhereUniqueInput
    update: XOR<BoothUpdateWithoutBoothOperatorInput, BoothUncheckedUpdateWithoutBoothOperatorInput>
    create: XOR<BoothCreateWithoutBoothOperatorInput, BoothUncheckedCreateWithoutBoothOperatorInput>
  }

  export type BoothUpdateWithWhereUniqueWithoutBoothOperatorInput = {
    where: BoothWhereUniqueInput
    data: XOR<BoothUpdateWithoutBoothOperatorInput, BoothUncheckedUpdateWithoutBoothOperatorInput>
  }

  export type BoothUpdateManyWithWhereWithoutBoothOperatorInput = {
    where: BoothScalarWhereInput
    data: XOR<BoothUpdateManyMutationInput, BoothUncheckedUpdateManyWithoutBoothOperatorInput>
  }

  export type BoothCreateWithoutMenuItemsInput = {
    id?: string
    name: string
    description?: string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    operatingHours?: string | null
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    festival: FestivalCreateNestedOneWithoutBoothsInput
    boothOperator: BoothOperatorCreateNestedOneWithoutBoothsInput
    operatorUser?: UserCreateNestedOneWithoutOperatedBoothsInput
  }

  export type BoothUncheckedCreateWithoutMenuItemsInput = {
    id?: string
    name: string
    description?: string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    operatingHours?: string | null
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    festivalId: string
    boothOperatorId: string
    operatorUserId?: string | null
  }

  export type BoothCreateOrConnectWithoutMenuItemsInput = {
    where: BoothWhereUniqueInput
    create: XOR<BoothCreateWithoutMenuItemsInput, BoothUncheckedCreateWithoutMenuItemsInput>
  }

  export type BoothUpsertWithoutMenuItemsInput = {
    update: XOR<BoothUpdateWithoutMenuItemsInput, BoothUncheckedUpdateWithoutMenuItemsInput>
    create: XOR<BoothCreateWithoutMenuItemsInput, BoothUncheckedCreateWithoutMenuItemsInput>
    where?: BoothWhereInput
  }

  export type BoothUpdateToOneWithWhereWithoutMenuItemsInput = {
    where?: BoothWhereInput
    data: XOR<BoothUpdateWithoutMenuItemsInput, BoothUncheckedUpdateWithoutMenuItemsInput>
  }

  export type BoothUpdateWithoutMenuItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festival?: FestivalUpdateOneRequiredWithoutBoothsNestedInput
    boothOperator?: BoothOperatorUpdateOneRequiredWithoutBoothsNestedInput
    operatorUser?: UserUpdateOneWithoutOperatedBoothsNestedInput
  }

  export type BoothUncheckedUpdateWithoutMenuItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festivalId?: StringFieldUpdateOperationsInput | string
    boothOperatorId?: StringFieldUpdateOperationsInput | string
    operatorUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FestivalCreateWithoutNoticesInput = {
    id?: string
    name: string
    year: number
    startDate: Date | string
    endDate: Date | string
    theme?: string | null
    description?: string | null
    posterUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scheduleEvents?: ScheduleEventCreateNestedManyWithoutFestivalInput
    booths?: BoothCreateNestedManyWithoutFestivalInput
  }

  export type FestivalUncheckedCreateWithoutNoticesInput = {
    id?: string
    name: string
    year: number
    startDate: Date | string
    endDate: Date | string
    theme?: string | null
    description?: string | null
    posterUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scheduleEvents?: ScheduleEventUncheckedCreateNestedManyWithoutFestivalInput
    booths?: BoothUncheckedCreateNestedManyWithoutFestivalInput
  }

  export type FestivalCreateOrConnectWithoutNoticesInput = {
    where: FestivalWhereUniqueInput
    create: XOR<FestivalCreateWithoutNoticesInput, FestivalUncheckedCreateWithoutNoticesInput>
  }

  export type FestivalUpsertWithoutNoticesInput = {
    update: XOR<FestivalUpdateWithoutNoticesInput, FestivalUncheckedUpdateWithoutNoticesInput>
    create: XOR<FestivalCreateWithoutNoticesInput, FestivalUncheckedCreateWithoutNoticesInput>
    where?: FestivalWhereInput
  }

  export type FestivalUpdateToOneWithWhereWithoutNoticesInput = {
    where?: FestivalWhereInput
    data: XOR<FestivalUpdateWithoutNoticesInput, FestivalUncheckedUpdateWithoutNoticesInput>
  }

  export type FestivalUpdateWithoutNoticesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleEvents?: ScheduleEventUpdateManyWithoutFestivalNestedInput
    booths?: BoothUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalUncheckedUpdateWithoutNoticesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleEvents?: ScheduleEventUncheckedUpdateManyWithoutFestivalNestedInput
    booths?: BoothUncheckedUpdateManyWithoutFestivalNestedInput
  }

  export type BoothCreateManyOperatorUserInput = {
    id?: string
    name: string
    description?: string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    operatingHours?: string | null
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    festivalId: string
    boothOperatorId: string
  }

  export type BoothUpdateWithoutOperatorUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festival?: FestivalUpdateOneRequiredWithoutBoothsNestedInput
    boothOperator?: BoothOperatorUpdateOneRequiredWithoutBoothsNestedInput
    menuItems?: MenuItemUpdateManyWithoutBoothNestedInput
  }

  export type BoothUncheckedUpdateWithoutOperatorUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festivalId?: StringFieldUpdateOperationsInput | string
    boothOperatorId?: StringFieldUpdateOperationsInput | string
    menuItems?: MenuItemUncheckedUpdateManyWithoutBoothNestedInput
  }

  export type BoothUncheckedUpdateManyWithoutOperatorUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festivalId?: StringFieldUpdateOperationsInput | string
    boothOperatorId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleEventCreateManyFestivalInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    location: string
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoothCreateManyFestivalInput = {
    id?: string
    name: string
    description?: string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    operatingHours?: string | null
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    boothOperatorId: string
    operatorUserId?: string | null
  }

  export type NoticeCreateManyFestivalInput = {
    id?: string
    title: string
    content: string
    category?: string | null
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleEventUpdateWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistOnScheduleEventUpdateManyWithoutScheduleEventNestedInput
  }

  export type ScheduleEventUncheckedUpdateWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistOnScheduleEventUncheckedUpdateManyWithoutScheduleEventNestedInput
  }

  export type ScheduleEventUncheckedUpdateManyWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoothUpdateWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boothOperator?: BoothOperatorUpdateOneRequiredWithoutBoothsNestedInput
    operatorUser?: UserUpdateOneWithoutOperatedBoothsNestedInput
    menuItems?: MenuItemUpdateManyWithoutBoothNestedInput
  }

  export type BoothUncheckedUpdateWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boothOperatorId?: StringFieldUpdateOperationsInput | string
    operatorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    menuItems?: MenuItemUncheckedUpdateManyWithoutBoothNestedInput
  }

  export type BoothUncheckedUpdateManyWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boothOperatorId?: StringFieldUpdateOperationsInput | string
    operatorUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NoticeUpdateWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeUncheckedUpdateWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeUncheckedUpdateManyWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistOnScheduleEventCreateManyScheduleEventInput = {
    artistId: string
    assignedAt?: Date | string
  }

  export type ArtistOnScheduleEventUpdateWithoutScheduleEventInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artist?: ArtistUpdateOneRequiredWithoutScheduleEventsNestedInput
  }

  export type ArtistOnScheduleEventUncheckedUpdateWithoutScheduleEventInput = {
    artistId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistOnScheduleEventUncheckedUpdateManyWithoutScheduleEventInput = {
    artistId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistOnScheduleEventCreateManyArtistInput = {
    scheduleEventId: string
    assignedAt?: Date | string
  }

  export type ArtistOnScheduleEventUpdateWithoutArtistInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleEvent?: ScheduleEventUpdateOneRequiredWithoutArtistsNestedInput
  }

  export type ArtistOnScheduleEventUncheckedUpdateWithoutArtistInput = {
    scheduleEventId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistOnScheduleEventUncheckedUpdateManyWithoutArtistInput = {
    scheduleEventId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemCreateManyBoothInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    isSignature?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemUpdateWithoutBoothInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isSignature?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemUncheckedUpdateWithoutBoothInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isSignature?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemUncheckedUpdateManyWithoutBoothInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isSignature?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoothCreateManyBoothOperatorInput = {
    id?: string
    name: string
    description?: string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    operatingHours?: string | null
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    festivalId: string
    operatorUserId?: string | null
  }

  export type BoothUpdateWithoutBoothOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festival?: FestivalUpdateOneRequiredWithoutBoothsNestedInput
    operatorUser?: UserUpdateOneWithoutOperatedBoothsNestedInput
    menuItems?: MenuItemUpdateManyWithoutBoothNestedInput
  }

  export type BoothUncheckedUpdateWithoutBoothOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festivalId?: StringFieldUpdateOperationsInput | string
    operatorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    menuItems?: MenuItemUncheckedUpdateManyWithoutBoothNestedInput
  }

  export type BoothUncheckedUpdateManyWithoutBoothOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mapCoordinates?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festivalId?: StringFieldUpdateOperationsInput | string
    operatorUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}