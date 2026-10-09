
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
 * Model Agency
 * 
 */
export type Agency = $Result.DefaultSelection<Prisma.$AgencyPayload>
/**
 * Model Agent
 * 
 */
export type Agent = $Result.DefaultSelection<Prisma.$AgentPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model RouteSchedule
 * 
 */
export type RouteSchedule = $Result.DefaultSelection<Prisma.$RouteSchedulePayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model BotConfig
 * 
 */
export type BotConfig = $Result.DefaultSelection<Prisma.$BotConfigPayload>
/**
 * Model BotRule
 * 
 */
export type BotRule = $Result.DefaultSelection<Prisma.$BotRulePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ShiftStatus: {
  ON_DUTY: 'ON_DUTY',
  OFF_DUTY: 'OFF_DUTY'
};

export type ShiftStatus = (typeof ShiftStatus)[keyof typeof ShiftStatus]


export const BusType: {
  MINIBUS: 'MINIBUS',
  COASTER: 'COASTER',
  ULTRA_VIP: 'ULTRA_VIP',
  VIP_2X2: 'VIP_2X2',
  CLASSIC_3X2: 'CLASSIC_3X2'
};

export type BusType = (typeof BusType)[keyof typeof BusType]


export const ScheduleStatus: {
  ON_TIME: 'ON_TIME',
  BOARDING: 'BOARDING',
  DEPARTED: 'DEPARTED',
  CANCELLED: 'CANCELLED'
};

export type ScheduleStatus = (typeof ScheduleStatus)[keyof typeof ScheduleStatus]


export const TicketStatus: {
  CONFIRMED: 'CONFIRMED',
  BOARDED: 'BOARDED',
  CANCELLED: 'CANCELLED'
};

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus]


export const ResponseType: {
  AUTO_REPLY: 'AUTO_REPLY',
  SCHEDULE_LOOKUP: 'SCHEDULE_LOOKUP',
  SEAT_RESERVATION: 'SEAT_RESERVATION'
};

export type ResponseType = (typeof ResponseType)[keyof typeof ResponseType]

}

export type ShiftStatus = $Enums.ShiftStatus

export const ShiftStatus: typeof $Enums.ShiftStatus

export type BusType = $Enums.BusType

export const BusType: typeof $Enums.BusType

export type ScheduleStatus = $Enums.ScheduleStatus

export const ScheduleStatus: typeof $Enums.ScheduleStatus

export type TicketStatus = $Enums.TicketStatus

export const TicketStatus: typeof $Enums.TicketStatus

export type ResponseType = $Enums.ResponseType

export const ResponseType: typeof $Enums.ResponseType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Agencies
 * const agencies = await prisma.agency.findMany()
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
   * // Fetch zero or more Agencies
   * const agencies = await prisma.agency.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.agency`: Exposes CRUD operations for the **Agency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agencies
    * const agencies = await prisma.agency.findMany()
    * ```
    */
  get agency(): Prisma.AgencyDelegate<ExtArgs>;

  /**
   * `prisma.agent`: Exposes CRUD operations for the **Agent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agents
    * const agents = await prisma.agent.findMany()
    * ```
    */
  get agent(): Prisma.AgentDelegate<ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.routeSchedule`: Exposes CRUD operations for the **RouteSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RouteSchedules
    * const routeSchedules = await prisma.routeSchedule.findMany()
    * ```
    */
  get routeSchedule(): Prisma.RouteScheduleDelegate<ExtArgs>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs>;

  /**
   * `prisma.botConfig`: Exposes CRUD operations for the **BotConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BotConfigs
    * const botConfigs = await prisma.botConfig.findMany()
    * ```
    */
  get botConfig(): Prisma.BotConfigDelegate<ExtArgs>;

  /**
   * `prisma.botRule`: Exposes CRUD operations for the **BotRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BotRules
    * const botRules = await prisma.botRule.findMany()
    * ```
    */
  get botRule(): Prisma.BotRuleDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Agency: 'Agency',
    Agent: 'Agent',
    Customer: 'Customer',
    RouteSchedule: 'RouteSchedule',
    Ticket: 'Ticket',
    BotConfig: 'BotConfig',
    BotRule: 'BotRule'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "agency" | "agent" | "customer" | "routeSchedule" | "ticket" | "botConfig" | "botRule"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Agency: {
        payload: Prisma.$AgencyPayload<ExtArgs>
        fields: Prisma.AgencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          findFirst: {
            args: Prisma.AgencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          findMany: {
            args: Prisma.AgencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>[]
          }
          create: {
            args: Prisma.AgencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          createMany: {
            args: Prisma.AgencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgencyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>[]
          }
          delete: {
            args: Prisma.AgencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          update: {
            args: Prisma.AgencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          deleteMany: {
            args: Prisma.AgencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AgencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          aggregate: {
            args: Prisma.AgencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgency>
          }
          groupBy: {
            args: Prisma.AgencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgencyCountArgs<ExtArgs>
            result: $Utils.Optional<AgencyCountAggregateOutputType> | number
          }
        }
      }
      Agent: {
        payload: Prisma.$AgentPayload<ExtArgs>
        fields: Prisma.AgentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findFirst: {
            args: Prisma.AgentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findMany: {
            args: Prisma.AgentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          create: {
            args: Prisma.AgentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          createMany: {
            args: Prisma.AgentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          delete: {
            args: Prisma.AgentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          update: {
            args: Prisma.AgentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          deleteMany: {
            args: Prisma.AgentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AgentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          aggregate: {
            args: Prisma.AgentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgent>
          }
          groupBy: {
            args: Prisma.AgentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentCountArgs<ExtArgs>
            result: $Utils.Optional<AgentCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      RouteSchedule: {
        payload: Prisma.$RouteSchedulePayload<ExtArgs>
        fields: Prisma.RouteScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSchedulePayload>
          }
          findFirst: {
            args: Prisma.RouteScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSchedulePayload>
          }
          findMany: {
            args: Prisma.RouteScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSchedulePayload>[]
          }
          create: {
            args: Prisma.RouteScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSchedulePayload>
          }
          createMany: {
            args: Prisma.RouteScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RouteScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSchedulePayload>[]
          }
          delete: {
            args: Prisma.RouteScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSchedulePayload>
          }
          update: {
            args: Prisma.RouteScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSchedulePayload>
          }
          deleteMany: {
            args: Prisma.RouteScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RouteScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSchedulePayload>
          }
          aggregate: {
            args: Prisma.RouteScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRouteSchedule>
          }
          groupBy: {
            args: Prisma.RouteScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<RouteScheduleCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      BotConfig: {
        payload: Prisma.$BotConfigPayload<ExtArgs>
        fields: Prisma.BotConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BotConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BotConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotConfigPayload>
          }
          findFirst: {
            args: Prisma.BotConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BotConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotConfigPayload>
          }
          findMany: {
            args: Prisma.BotConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotConfigPayload>[]
          }
          create: {
            args: Prisma.BotConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotConfigPayload>
          }
          createMany: {
            args: Prisma.BotConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BotConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotConfigPayload>[]
          }
          delete: {
            args: Prisma.BotConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotConfigPayload>
          }
          update: {
            args: Prisma.BotConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotConfigPayload>
          }
          deleteMany: {
            args: Prisma.BotConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BotConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BotConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotConfigPayload>
          }
          aggregate: {
            args: Prisma.BotConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBotConfig>
          }
          groupBy: {
            args: Prisma.BotConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<BotConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.BotConfigCountArgs<ExtArgs>
            result: $Utils.Optional<BotConfigCountAggregateOutputType> | number
          }
        }
      }
      BotRule: {
        payload: Prisma.$BotRulePayload<ExtArgs>
        fields: Prisma.BotRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BotRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BotRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotRulePayload>
          }
          findFirst: {
            args: Prisma.BotRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BotRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotRulePayload>
          }
          findMany: {
            args: Prisma.BotRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotRulePayload>[]
          }
          create: {
            args: Prisma.BotRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotRulePayload>
          }
          createMany: {
            args: Prisma.BotRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BotRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotRulePayload>[]
          }
          delete: {
            args: Prisma.BotRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotRulePayload>
          }
          update: {
            args: Prisma.BotRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotRulePayload>
          }
          deleteMany: {
            args: Prisma.BotRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BotRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BotRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotRulePayload>
          }
          aggregate: {
            args: Prisma.BotRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBotRule>
          }
          groupBy: {
            args: Prisma.BotRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<BotRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.BotRuleCountArgs<ExtArgs>
            result: $Utils.Optional<BotRuleCountAggregateOutputType> | number
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
   * Count Type AgencyCountOutputType
   */

  export type AgencyCountOutputType = {
    schedules: number
    tickets: number
    agents: number
  }

  export type AgencyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | AgencyCountOutputTypeCountSchedulesArgs
    tickets?: boolean | AgencyCountOutputTypeCountTicketsArgs
    agents?: boolean | AgencyCountOutputTypeCountAgentsArgs
  }

  // Custom InputTypes
  /**
   * AgencyCountOutputType without action
   */
  export type AgencyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyCountOutputType
     */
    select?: AgencyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgencyCountOutputType without action
   */
  export type AgencyCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteScheduleWhereInput
  }

  /**
   * AgencyCountOutputType without action
   */
  export type AgencyCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * AgencyCountOutputType without action
   */
  export type AgencyCountOutputTypeCountAgentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWhereInput
  }


  /**
   * Count Type AgentCountOutputType
   */

  export type AgentCountOutputType = {
    scannedTickets: number
  }

  export type AgentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scannedTickets?: boolean | AgentCountOutputTypeCountScannedTicketsArgs
  }

  // Custom InputTypes
  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentCountOutputType
     */
    select?: AgentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountScannedTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    tickets: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | CustomerCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type RouteScheduleCountOutputType
   */

  export type RouteScheduleCountOutputType = {
    tickets: number
  }

  export type RouteScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | RouteScheduleCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * RouteScheduleCountOutputType without action
   */
  export type RouteScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteScheduleCountOutputType
     */
    select?: RouteScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RouteScheduleCountOutputType without action
   */
  export type RouteScheduleCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type BotConfigCountOutputType
   */

  export type BotConfigCountOutputType = {
    rules: number
  }

  export type BotConfigCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rules?: boolean | BotConfigCountOutputTypeCountRulesArgs
  }

  // Custom InputTypes
  /**
   * BotConfigCountOutputType without action
   */
  export type BotConfigCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotConfigCountOutputType
     */
    select?: BotConfigCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BotConfigCountOutputType without action
   */
  export type BotConfigCountOutputTypeCountRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BotRuleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Agency
   */

  export type AggregateAgency = {
    _count: AgencyCountAggregateOutputType | null
    _min: AgencyMinAggregateOutputType | null
    _max: AgencyMaxAggregateOutputType | null
  }

  export type AgencyMinAggregateOutputType = {
    id: string | null
    name: string | null
    agencyCode: string | null
    hqLocation: string | null
    activeFleetCount: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgencyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    agencyCode: string | null
    hqLocation: string | null
    activeFleetCount: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgencyCountAggregateOutputType = {
    id: number
    name: number
    agencyCode: number
    hqLocation: number
    activeFleetCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AgencyMinAggregateInputType = {
    id?: true
    name?: true
    agencyCode?: true
    hqLocation?: true
    activeFleetCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgencyMaxAggregateInputType = {
    id?: true
    name?: true
    agencyCode?: true
    hqLocation?: true
    activeFleetCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgencyCountAggregateInputType = {
    id?: true
    name?: true
    agencyCode?: true
    hqLocation?: true
    activeFleetCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AgencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agency to aggregate.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agencies
    **/
    _count?: true | AgencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgencyMaxAggregateInputType
  }

  export type GetAgencyAggregateType<T extends AgencyAggregateArgs> = {
        [P in keyof T & keyof AggregateAgency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgency[P]>
      : GetScalarType<T[P], AggregateAgency[P]>
  }




  export type AgencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgencyWhereInput
    orderBy?: AgencyOrderByWithAggregationInput | AgencyOrderByWithAggregationInput[]
    by: AgencyScalarFieldEnum[] | AgencyScalarFieldEnum
    having?: AgencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgencyCountAggregateInputType | true
    _min?: AgencyMinAggregateInputType
    _max?: AgencyMaxAggregateInputType
  }

  export type AgencyGroupByOutputType = {
    id: string
    name: string
    agencyCode: string
    hqLocation: string
    activeFleetCount: string
    createdAt: Date
    updatedAt: Date
    _count: AgencyCountAggregateOutputType | null
    _min: AgencyMinAggregateOutputType | null
    _max: AgencyMaxAggregateOutputType | null
  }

  type GetAgencyGroupByPayload<T extends AgencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgencyGroupByOutputType[P]>
            : GetScalarType<T[P], AgencyGroupByOutputType[P]>
        }
      >
    >


  export type AgencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    agencyCode?: boolean
    hqLocation?: boolean
    activeFleetCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schedules?: boolean | Agency$schedulesArgs<ExtArgs>
    tickets?: boolean | Agency$ticketsArgs<ExtArgs>
    agents?: boolean | Agency$agentsArgs<ExtArgs>
    botConfig?: boolean | Agency$botConfigArgs<ExtArgs>
    _count?: boolean | AgencyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agency"]>

  export type AgencySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    agencyCode?: boolean
    hqLocation?: boolean
    activeFleetCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["agency"]>

  export type AgencySelectScalar = {
    id?: boolean
    name?: boolean
    agencyCode?: boolean
    hqLocation?: boolean
    activeFleetCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AgencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | Agency$schedulesArgs<ExtArgs>
    tickets?: boolean | Agency$ticketsArgs<ExtArgs>
    agents?: boolean | Agency$agentsArgs<ExtArgs>
    botConfig?: boolean | Agency$botConfigArgs<ExtArgs>
    _count?: boolean | AgencyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgencyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AgencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agency"
    objects: {
      schedules: Prisma.$RouteSchedulePayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      agents: Prisma.$AgentPayload<ExtArgs>[]
      botConfig: Prisma.$BotConfigPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      agencyCode: string
      hqLocation: string
      activeFleetCount: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["agency"]>
    composites: {}
  }

  type AgencyGetPayload<S extends boolean | null | undefined | AgencyDefaultArgs> = $Result.GetResult<Prisma.$AgencyPayload, S>

  type AgencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AgencyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AgencyCountAggregateInputType | true
    }

  export interface AgencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agency'], meta: { name: 'Agency' } }
    /**
     * Find zero or one Agency that matches the filter.
     * @param {AgencyFindUniqueArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgencyFindUniqueArgs>(args: SelectSubset<T, AgencyFindUniqueArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Agency that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AgencyFindUniqueOrThrowArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgencyFindUniqueOrThrowArgs>(args: SelectSubset<T, AgencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Agency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyFindFirstArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgencyFindFirstArgs>(args?: SelectSubset<T, AgencyFindFirstArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Agency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyFindFirstOrThrowArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgencyFindFirstOrThrowArgs>(args?: SelectSubset<T, AgencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Agencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agencies
     * const agencies = await prisma.agency.findMany()
     * 
     * // Get first 10 Agencies
     * const agencies = await prisma.agency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agencyWithIdOnly = await prisma.agency.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgencyFindManyArgs>(args?: SelectSubset<T, AgencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Agency.
     * @param {AgencyCreateArgs} args - Arguments to create a Agency.
     * @example
     * // Create one Agency
     * const Agency = await prisma.agency.create({
     *   data: {
     *     // ... data to create a Agency
     *   }
     * })
     * 
     */
    create<T extends AgencyCreateArgs>(args: SelectSubset<T, AgencyCreateArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Agencies.
     * @param {AgencyCreateManyArgs} args - Arguments to create many Agencies.
     * @example
     * // Create many Agencies
     * const agency = await prisma.agency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgencyCreateManyArgs>(args?: SelectSubset<T, AgencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agencies and returns the data saved in the database.
     * @param {AgencyCreateManyAndReturnArgs} args - Arguments to create many Agencies.
     * @example
     * // Create many Agencies
     * const agency = await prisma.agency.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agencies and only return the `id`
     * const agencyWithIdOnly = await prisma.agency.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgencyCreateManyAndReturnArgs>(args?: SelectSubset<T, AgencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Agency.
     * @param {AgencyDeleteArgs} args - Arguments to delete one Agency.
     * @example
     * // Delete one Agency
     * const Agency = await prisma.agency.delete({
     *   where: {
     *     // ... filter to delete one Agency
     *   }
     * })
     * 
     */
    delete<T extends AgencyDeleteArgs>(args: SelectSubset<T, AgencyDeleteArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Agency.
     * @param {AgencyUpdateArgs} args - Arguments to update one Agency.
     * @example
     * // Update one Agency
     * const agency = await prisma.agency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgencyUpdateArgs>(args: SelectSubset<T, AgencyUpdateArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Agencies.
     * @param {AgencyDeleteManyArgs} args - Arguments to filter Agencies to delete.
     * @example
     * // Delete a few Agencies
     * const { count } = await prisma.agency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgencyDeleteManyArgs>(args?: SelectSubset<T, AgencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agencies
     * const agency = await prisma.agency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgencyUpdateManyArgs>(args: SelectSubset<T, AgencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agency.
     * @param {AgencyUpsertArgs} args - Arguments to update or create a Agency.
     * @example
     * // Update or create a Agency
     * const agency = await prisma.agency.upsert({
     *   create: {
     *     // ... data to create a Agency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agency we want to update
     *   }
     * })
     */
    upsert<T extends AgencyUpsertArgs>(args: SelectSubset<T, AgencyUpsertArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Agencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyCountArgs} args - Arguments to filter Agencies to count.
     * @example
     * // Count the number of Agencies
     * const count = await prisma.agency.count({
     *   where: {
     *     // ... the filter for the Agencies we want to count
     *   }
     * })
    **/
    count<T extends AgencyCountArgs>(
      args?: Subset<T, AgencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgencyAggregateArgs>(args: Subset<T, AgencyAggregateArgs>): Prisma.PrismaPromise<GetAgencyAggregateType<T>>

    /**
     * Group by Agency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyGroupByArgs} args - Group by arguments.
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
      T extends AgencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgencyGroupByArgs['orderBy'] }
        : { orderBy?: AgencyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agency model
   */
  readonly fields: AgencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedules<T extends Agency$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Agency$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteSchedulePayload<ExtArgs>, T, "findMany"> | Null>
    tickets<T extends Agency$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Agency$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany"> | Null>
    agents<T extends Agency$agentsArgs<ExtArgs> = {}>(args?: Subset<T, Agency$agentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany"> | Null>
    botConfig<T extends Agency$botConfigArgs<ExtArgs> = {}>(args?: Subset<T, Agency$botConfigArgs<ExtArgs>>): Prisma__BotConfigClient<$Result.GetResult<Prisma.$BotConfigPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Agency model
   */ 
  interface AgencyFieldRefs {
    readonly id: FieldRef<"Agency", 'String'>
    readonly name: FieldRef<"Agency", 'String'>
    readonly agencyCode: FieldRef<"Agency", 'String'>
    readonly hqLocation: FieldRef<"Agency", 'String'>
    readonly activeFleetCount: FieldRef<"Agency", 'String'>
    readonly createdAt: FieldRef<"Agency", 'DateTime'>
    readonly updatedAt: FieldRef<"Agency", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Agency findUnique
   */
  export type AgencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency findUniqueOrThrow
   */
  export type AgencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency findFirst
   */
  export type AgencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agencies.
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agencies.
     */
    distinct?: AgencyScalarFieldEnum | AgencyScalarFieldEnum[]
  }

  /**
   * Agency findFirstOrThrow
   */
  export type AgencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agencies.
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agencies.
     */
    distinct?: AgencyScalarFieldEnum | AgencyScalarFieldEnum[]
  }

  /**
   * Agency findMany
   */
  export type AgencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agencies to fetch.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agencies.
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    distinct?: AgencyScalarFieldEnum | AgencyScalarFieldEnum[]
  }

  /**
   * Agency create
   */
  export type AgencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * The data needed to create a Agency.
     */
    data: XOR<AgencyCreateInput, AgencyUncheckedCreateInput>
  }

  /**
   * Agency createMany
   */
  export type AgencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agencies.
     */
    data: AgencyCreateManyInput | AgencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agency createManyAndReturn
   */
  export type AgencyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Agencies.
     */
    data: AgencyCreateManyInput | AgencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agency update
   */
  export type AgencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * The data needed to update a Agency.
     */
    data: XOR<AgencyUpdateInput, AgencyUncheckedUpdateInput>
    /**
     * Choose, which Agency to update.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency updateMany
   */
  export type AgencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agencies.
     */
    data: XOR<AgencyUpdateManyMutationInput, AgencyUncheckedUpdateManyInput>
    /**
     * Filter which Agencies to update
     */
    where?: AgencyWhereInput
  }

  /**
   * Agency upsert
   */
  export type AgencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * The filter to search for the Agency to update in case it exists.
     */
    where: AgencyWhereUniqueInput
    /**
     * In case the Agency found by the `where` argument doesn't exist, create a new Agency with this data.
     */
    create: XOR<AgencyCreateInput, AgencyUncheckedCreateInput>
    /**
     * In case the Agency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgencyUpdateInput, AgencyUncheckedUpdateInput>
  }

  /**
   * Agency delete
   */
  export type AgencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter which Agency to delete.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency deleteMany
   */
  export type AgencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agencies to delete
     */
    where?: AgencyWhereInput
  }

  /**
   * Agency.schedules
   */
  export type Agency$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSchedule
     */
    select?: RouteScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteScheduleInclude<ExtArgs> | null
    where?: RouteScheduleWhereInput
    orderBy?: RouteScheduleOrderByWithRelationInput | RouteScheduleOrderByWithRelationInput[]
    cursor?: RouteScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteScheduleScalarFieldEnum | RouteScheduleScalarFieldEnum[]
  }

  /**
   * Agency.tickets
   */
  export type Agency$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Agency.agents
   */
  export type Agency$agentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    where?: AgentWhereInput
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    cursor?: AgentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agency.botConfig
   */
  export type Agency$botConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotConfig
     */
    select?: BotConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotConfigInclude<ExtArgs> | null
    where?: BotConfigWhereInput
  }

  /**
   * Agency without action
   */
  export type AgencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
  }


  /**
   * Model Agent
   */

  export type AggregateAgent = {
    _count: AgentCountAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  export type AgentMinAggregateOutputType = {
    id: string | null
    agencyId: string | null
    agentCode: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: string | null
    station: string | null
    shiftStatus: $Enums.ShiftStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgentMaxAggregateOutputType = {
    id: string | null
    agencyId: string | null
    agentCode: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: string | null
    station: string | null
    shiftStatus: $Enums.ShiftStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgentCountAggregateOutputType = {
    id: number
    agencyId: number
    agentCode: number
    name: number
    email: number
    password: number
    phone: number
    role: number
    station: number
    shiftStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AgentMinAggregateInputType = {
    id?: true
    agencyId?: true
    agentCode?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    station?: true
    shiftStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgentMaxAggregateInputType = {
    id?: true
    agencyId?: true
    agentCode?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    station?: true
    shiftStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgentCountAggregateInputType = {
    id?: true
    agencyId?: true
    agentCode?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    station?: true
    shiftStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AgentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agent to aggregate.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agents
    **/
    _count?: true | AgentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentMaxAggregateInputType
  }

  export type GetAgentAggregateType<T extends AgentAggregateArgs> = {
        [P in keyof T & keyof AggregateAgent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgent[P]>
      : GetScalarType<T[P], AggregateAgent[P]>
  }




  export type AgentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWhereInput
    orderBy?: AgentOrderByWithAggregationInput | AgentOrderByWithAggregationInput[]
    by: AgentScalarFieldEnum[] | AgentScalarFieldEnum
    having?: AgentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentCountAggregateInputType | true
    _min?: AgentMinAggregateInputType
    _max?: AgentMaxAggregateInputType
  }

  export type AgentGroupByOutputType = {
    id: string
    agencyId: string
    agentCode: string
    name: string
    email: string
    password: string
    phone: string
    role: string
    station: string
    shiftStatus: $Enums.ShiftStatus
    createdAt: Date
    updatedAt: Date
    _count: AgentCountAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  type GetAgentGroupByPayload<T extends AgentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentGroupByOutputType[P]>
            : GetScalarType<T[P], AgentGroupByOutputType[P]>
        }
      >
    >


  export type AgentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agencyId?: boolean
    agentCode?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    station?: boolean
    shiftStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    scannedTickets?: boolean | Agent$scannedTicketsArgs<ExtArgs>
    _count?: boolean | AgentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agencyId?: boolean
    agentCode?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    station?: boolean
    shiftStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectScalar = {
    id?: boolean
    agencyId?: boolean
    agentCode?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    station?: boolean
    shiftStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AgentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    scannedTickets?: boolean | Agent$scannedTicketsArgs<ExtArgs>
    _count?: boolean | AgentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
  }

  export type $AgentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agent"
    objects: {
      agency: Prisma.$AgencyPayload<ExtArgs>
      scannedTickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agencyId: string
      agentCode: string
      name: string
      email: string
      password: string
      phone: string
      role: string
      station: string
      shiftStatus: $Enums.ShiftStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["agent"]>
    composites: {}
  }

  type AgentGetPayload<S extends boolean | null | undefined | AgentDefaultArgs> = $Result.GetResult<Prisma.$AgentPayload, S>

  type AgentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AgentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AgentCountAggregateInputType | true
    }

  export interface AgentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agent'], meta: { name: 'Agent' } }
    /**
     * Find zero or one Agent that matches the filter.
     * @param {AgentFindUniqueArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentFindUniqueArgs>(args: SelectSubset<T, AgentFindUniqueArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Agent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AgentFindUniqueOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Agent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentFindFirstArgs>(args?: SelectSubset<T, AgentFindFirstArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Agent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agents
     * const agents = await prisma.agent.findMany()
     * 
     * // Get first 10 Agents
     * const agents = await prisma.agent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentWithIdOnly = await prisma.agent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentFindManyArgs>(args?: SelectSubset<T, AgentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Agent.
     * @param {AgentCreateArgs} args - Arguments to create a Agent.
     * @example
     * // Create one Agent
     * const Agent = await prisma.agent.create({
     *   data: {
     *     // ... data to create a Agent
     *   }
     * })
     * 
     */
    create<T extends AgentCreateArgs>(args: SelectSubset<T, AgentCreateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Agents.
     * @param {AgentCreateManyArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentCreateManyArgs>(args?: SelectSubset<T, AgentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agents and returns the data saved in the database.
     * @param {AgentCreateManyAndReturnArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agents and only return the `id`
     * const agentWithIdOnly = await prisma.agent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Agent.
     * @param {AgentDeleteArgs} args - Arguments to delete one Agent.
     * @example
     * // Delete one Agent
     * const Agent = await prisma.agent.delete({
     *   where: {
     *     // ... filter to delete one Agent
     *   }
     * })
     * 
     */
    delete<T extends AgentDeleteArgs>(args: SelectSubset<T, AgentDeleteArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Agent.
     * @param {AgentUpdateArgs} args - Arguments to update one Agent.
     * @example
     * // Update one Agent
     * const agent = await prisma.agent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentUpdateArgs>(args: SelectSubset<T, AgentUpdateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Agents.
     * @param {AgentDeleteManyArgs} args - Arguments to filter Agents to delete.
     * @example
     * // Delete a few Agents
     * const { count } = await prisma.agent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentDeleteManyArgs>(args?: SelectSubset<T, AgentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentUpdateManyArgs>(args: SelectSubset<T, AgentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agent.
     * @param {AgentUpsertArgs} args - Arguments to update or create a Agent.
     * @example
     * // Update or create a Agent
     * const agent = await prisma.agent.upsert({
     *   create: {
     *     // ... data to create a Agent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agent we want to update
     *   }
     * })
     */
    upsert<T extends AgentUpsertArgs>(args: SelectSubset<T, AgentUpsertArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentCountArgs} args - Arguments to filter Agents to count.
     * @example
     * // Count the number of Agents
     * const count = await prisma.agent.count({
     *   where: {
     *     // ... the filter for the Agents we want to count
     *   }
     * })
    **/
    count<T extends AgentCountArgs>(
      args?: Subset<T, AgentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgentAggregateArgs>(args: Subset<T, AgentAggregateArgs>): Prisma.PrismaPromise<GetAgentAggregateType<T>>

    /**
     * Group by Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentGroupByArgs} args - Group by arguments.
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
      T extends AgentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentGroupByArgs['orderBy'] }
        : { orderBy?: AgentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agent model
   */
  readonly fields: AgentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agency<T extends AgencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgencyDefaultArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    scannedTickets<T extends Agent$scannedTicketsArgs<ExtArgs> = {}>(args?: Subset<T, Agent$scannedTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Agent model
   */ 
  interface AgentFieldRefs {
    readonly id: FieldRef<"Agent", 'String'>
    readonly agencyId: FieldRef<"Agent", 'String'>
    readonly agentCode: FieldRef<"Agent", 'String'>
    readonly name: FieldRef<"Agent", 'String'>
    readonly email: FieldRef<"Agent", 'String'>
    readonly password: FieldRef<"Agent", 'String'>
    readonly phone: FieldRef<"Agent", 'String'>
    readonly role: FieldRef<"Agent", 'String'>
    readonly station: FieldRef<"Agent", 'String'>
    readonly shiftStatus: FieldRef<"Agent", 'ShiftStatus'>
    readonly createdAt: FieldRef<"Agent", 'DateTime'>
    readonly updatedAt: FieldRef<"Agent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Agent findUnique
   */
  export type AgentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findUniqueOrThrow
   */
  export type AgentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findFirst
   */
  export type AgentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findFirstOrThrow
   */
  export type AgentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findMany
   */
  export type AgentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent create
   */
  export type AgentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to create a Agent.
     */
    data: XOR<AgentCreateInput, AgentUncheckedCreateInput>
  }

  /**
   * Agent createMany
   */
  export type AgentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agent createManyAndReturn
   */
  export type AgentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agent update
   */
  export type AgentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to update a Agent.
     */
    data: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
    /**
     * Choose, which Agent to update.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent updateMany
   */
  export type AgentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
  }

  /**
   * Agent upsert
   */
  export type AgentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The filter to search for the Agent to update in case it exists.
     */
    where: AgentWhereUniqueInput
    /**
     * In case the Agent found by the `where` argument doesn't exist, create a new Agent with this data.
     */
    create: XOR<AgentCreateInput, AgentUncheckedCreateInput>
    /**
     * In case the Agent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
  }

  /**
   * Agent delete
   */
  export type AgentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter which Agent to delete.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent deleteMany
   */
  export type AgentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agents to delete
     */
    where?: AgentWhereInput
  }

  /**
   * Agent.scannedTickets
   */
  export type Agent$scannedTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Agent without action
   */
  export type AgentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    whatsappPhone: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    whatsappPhone: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    whatsappPhone: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    whatsappPhone?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    whatsappPhone?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    whatsappPhone?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    whatsappPhone: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    whatsappPhone?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tickets?: boolean | Customer$ticketsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    whatsappPhone?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    whatsappPhone?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | Customer$ticketsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      whatsappPhone: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends Customer$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly whatsappPhone: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer.tickets
   */
  export type Customer$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model RouteSchedule
   */

  export type AggregateRouteSchedule = {
    _count: RouteScheduleCountAggregateOutputType | null
    _avg: RouteScheduleAvgAggregateOutputType | null
    _sum: RouteScheduleSumAggregateOutputType | null
    _min: RouteScheduleMinAggregateOutputType | null
    _max: RouteScheduleMaxAggregateOutputType | null
  }

  export type RouteScheduleAvgAggregateOutputType = {
    totalSeats: number | null
    bookedSeats: number | null
    pricePerSeat: number | null
  }

  export type RouteScheduleSumAggregateOutputType = {
    totalSeats: number | null
    bookedSeats: number | null
    pricePerSeat: number | null
  }

  export type RouteScheduleMinAggregateOutputType = {
    id: string | null
    agencyId: string | null
    origin: string | null
    destination: string | null
    departureTime: string | null
    busNumber: string | null
    busName: string | null
    busType: $Enums.BusType | null
    totalSeats: number | null
    bookedSeats: number | null
    pricePerSeat: number | null
    status: $Enums.ScheduleStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RouteScheduleMaxAggregateOutputType = {
    id: string | null
    agencyId: string | null
    origin: string | null
    destination: string | null
    departureTime: string | null
    busNumber: string | null
    busName: string | null
    busType: $Enums.BusType | null
    totalSeats: number | null
    bookedSeats: number | null
    pricePerSeat: number | null
    status: $Enums.ScheduleStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RouteScheduleCountAggregateOutputType = {
    id: number
    agencyId: number
    origin: number
    destination: number
    departureTime: number
    busNumber: number
    busName: number
    busType: number
    totalSeats: number
    bookedSeats: number
    pricePerSeat: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RouteScheduleAvgAggregateInputType = {
    totalSeats?: true
    bookedSeats?: true
    pricePerSeat?: true
  }

  export type RouteScheduleSumAggregateInputType = {
    totalSeats?: true
    bookedSeats?: true
    pricePerSeat?: true
  }

  export type RouteScheduleMinAggregateInputType = {
    id?: true
    agencyId?: true
    origin?: true
    destination?: true
    departureTime?: true
    busNumber?: true
    busName?: true
    busType?: true
    totalSeats?: true
    bookedSeats?: true
    pricePerSeat?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RouteScheduleMaxAggregateInputType = {
    id?: true
    agencyId?: true
    origin?: true
    destination?: true
    departureTime?: true
    busNumber?: true
    busName?: true
    busType?: true
    totalSeats?: true
    bookedSeats?: true
    pricePerSeat?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RouteScheduleCountAggregateInputType = {
    id?: true
    agencyId?: true
    origin?: true
    destination?: true
    departureTime?: true
    busNumber?: true
    busName?: true
    busType?: true
    totalSeats?: true
    bookedSeats?: true
    pricePerSeat?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RouteScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteSchedule to aggregate.
     */
    where?: RouteScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteSchedules to fetch.
     */
    orderBy?: RouteScheduleOrderByWithRelationInput | RouteScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RouteSchedules
    **/
    _count?: true | RouteScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteScheduleMaxAggregateInputType
  }

  export type GetRouteScheduleAggregateType<T extends RouteScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateRouteSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRouteSchedule[P]>
      : GetScalarType<T[P], AggregateRouteSchedule[P]>
  }




  export type RouteScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteScheduleWhereInput
    orderBy?: RouteScheduleOrderByWithAggregationInput | RouteScheduleOrderByWithAggregationInput[]
    by: RouteScheduleScalarFieldEnum[] | RouteScheduleScalarFieldEnum
    having?: RouteScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteScheduleCountAggregateInputType | true
    _avg?: RouteScheduleAvgAggregateInputType
    _sum?: RouteScheduleSumAggregateInputType
    _min?: RouteScheduleMinAggregateInputType
    _max?: RouteScheduleMaxAggregateInputType
  }

  export type RouteScheduleGroupByOutputType = {
    id: string
    agencyId: string
    origin: string
    destination: string
    departureTime: string
    busNumber: string
    busName: string
    busType: $Enums.BusType
    totalSeats: number
    bookedSeats: number
    pricePerSeat: number
    status: $Enums.ScheduleStatus
    createdAt: Date
    updatedAt: Date
    _count: RouteScheduleCountAggregateOutputType | null
    _avg: RouteScheduleAvgAggregateOutputType | null
    _sum: RouteScheduleSumAggregateOutputType | null
    _min: RouteScheduleMinAggregateOutputType | null
    _max: RouteScheduleMaxAggregateOutputType | null
  }

  type GetRouteScheduleGroupByPayload<T extends RouteScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], RouteScheduleGroupByOutputType[P]>
        }
      >
    >


  export type RouteScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agencyId?: boolean
    origin?: boolean
    destination?: boolean
    departureTime?: boolean
    busNumber?: boolean
    busName?: boolean
    busType?: boolean
    totalSeats?: boolean
    bookedSeats?: boolean
    pricePerSeat?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    tickets?: boolean | RouteSchedule$ticketsArgs<ExtArgs>
    _count?: boolean | RouteScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeSchedule"]>

  export type RouteScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agencyId?: boolean
    origin?: boolean
    destination?: boolean
    departureTime?: boolean
    busNumber?: boolean
    busName?: boolean
    busType?: boolean
    totalSeats?: boolean
    bookedSeats?: boolean
    pricePerSeat?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeSchedule"]>

  export type RouteScheduleSelectScalar = {
    id?: boolean
    agencyId?: boolean
    origin?: boolean
    destination?: boolean
    departureTime?: boolean
    busNumber?: boolean
    busName?: boolean
    busType?: boolean
    totalSeats?: boolean
    bookedSeats?: boolean
    pricePerSeat?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RouteScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    tickets?: boolean | RouteSchedule$ticketsArgs<ExtArgs>
    _count?: boolean | RouteScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RouteScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
  }

  export type $RouteSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RouteSchedule"
    objects: {
      agency: Prisma.$AgencyPayload<ExtArgs>
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agencyId: string
      origin: string
      destination: string
      departureTime: string
      busNumber: string
      busName: string
      busType: $Enums.BusType
      totalSeats: number
      bookedSeats: number
      pricePerSeat: number
      status: $Enums.ScheduleStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["routeSchedule"]>
    composites: {}
  }

  type RouteScheduleGetPayload<S extends boolean | null | undefined | RouteScheduleDefaultArgs> = $Result.GetResult<Prisma.$RouteSchedulePayload, S>

  type RouteScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RouteScheduleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RouteScheduleCountAggregateInputType | true
    }

  export interface RouteScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RouteSchedule'], meta: { name: 'RouteSchedule' } }
    /**
     * Find zero or one RouteSchedule that matches the filter.
     * @param {RouteScheduleFindUniqueArgs} args - Arguments to find a RouteSchedule
     * @example
     * // Get one RouteSchedule
     * const routeSchedule = await prisma.routeSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteScheduleFindUniqueArgs>(args: SelectSubset<T, RouteScheduleFindUniqueArgs<ExtArgs>>): Prisma__RouteScheduleClient<$Result.GetResult<Prisma.$RouteSchedulePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RouteSchedule that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RouteScheduleFindUniqueOrThrowArgs} args - Arguments to find a RouteSchedule
     * @example
     * // Get one RouteSchedule
     * const routeSchedule = await prisma.routeSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteScheduleClient<$Result.GetResult<Prisma.$RouteSchedulePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RouteSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteScheduleFindFirstArgs} args - Arguments to find a RouteSchedule
     * @example
     * // Get one RouteSchedule
     * const routeSchedule = await prisma.routeSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteScheduleFindFirstArgs>(args?: SelectSubset<T, RouteScheduleFindFirstArgs<ExtArgs>>): Prisma__RouteScheduleClient<$Result.GetResult<Prisma.$RouteSchedulePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RouteSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteScheduleFindFirstOrThrowArgs} args - Arguments to find a RouteSchedule
     * @example
     * // Get one RouteSchedule
     * const routeSchedule = await prisma.routeSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteScheduleClient<$Result.GetResult<Prisma.$RouteSchedulePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RouteSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RouteSchedules
     * const routeSchedules = await prisma.routeSchedule.findMany()
     * 
     * // Get first 10 RouteSchedules
     * const routeSchedules = await prisma.routeSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeScheduleWithIdOnly = await prisma.routeSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteScheduleFindManyArgs>(args?: SelectSubset<T, RouteScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteSchedulePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RouteSchedule.
     * @param {RouteScheduleCreateArgs} args - Arguments to create a RouteSchedule.
     * @example
     * // Create one RouteSchedule
     * const RouteSchedule = await prisma.routeSchedule.create({
     *   data: {
     *     // ... data to create a RouteSchedule
     *   }
     * })
     * 
     */
    create<T extends RouteScheduleCreateArgs>(args: SelectSubset<T, RouteScheduleCreateArgs<ExtArgs>>): Prisma__RouteScheduleClient<$Result.GetResult<Prisma.$RouteSchedulePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RouteSchedules.
     * @param {RouteScheduleCreateManyArgs} args - Arguments to create many RouteSchedules.
     * @example
     * // Create many RouteSchedules
     * const routeSchedule = await prisma.routeSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteScheduleCreateManyArgs>(args?: SelectSubset<T, RouteScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RouteSchedules and returns the data saved in the database.
     * @param {RouteScheduleCreateManyAndReturnArgs} args - Arguments to create many RouteSchedules.
     * @example
     * // Create many RouteSchedules
     * const routeSchedule = await prisma.routeSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RouteSchedules and only return the `id`
     * const routeScheduleWithIdOnly = await prisma.routeSchedule.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RouteScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, RouteScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteSchedulePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RouteSchedule.
     * @param {RouteScheduleDeleteArgs} args - Arguments to delete one RouteSchedule.
     * @example
     * // Delete one RouteSchedule
     * const RouteSchedule = await prisma.routeSchedule.delete({
     *   where: {
     *     // ... filter to delete one RouteSchedule
     *   }
     * })
     * 
     */
    delete<T extends RouteScheduleDeleteArgs>(args: SelectSubset<T, RouteScheduleDeleteArgs<ExtArgs>>): Prisma__RouteScheduleClient<$Result.GetResult<Prisma.$RouteSchedulePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RouteSchedule.
     * @param {RouteScheduleUpdateArgs} args - Arguments to update one RouteSchedule.
     * @example
     * // Update one RouteSchedule
     * const routeSchedule = await prisma.routeSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteScheduleUpdateArgs>(args: SelectSubset<T, RouteScheduleUpdateArgs<ExtArgs>>): Prisma__RouteScheduleClient<$Result.GetResult<Prisma.$RouteSchedulePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RouteSchedules.
     * @param {RouteScheduleDeleteManyArgs} args - Arguments to filter RouteSchedules to delete.
     * @example
     * // Delete a few RouteSchedules
     * const { count } = await prisma.routeSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteScheduleDeleteManyArgs>(args?: SelectSubset<T, RouteScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RouteSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RouteSchedules
     * const routeSchedule = await prisma.routeSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteScheduleUpdateManyArgs>(args: SelectSubset<T, RouteScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RouteSchedule.
     * @param {RouteScheduleUpsertArgs} args - Arguments to update or create a RouteSchedule.
     * @example
     * // Update or create a RouteSchedule
     * const routeSchedule = await prisma.routeSchedule.upsert({
     *   create: {
     *     // ... data to create a RouteSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RouteSchedule we want to update
     *   }
     * })
     */
    upsert<T extends RouteScheduleUpsertArgs>(args: SelectSubset<T, RouteScheduleUpsertArgs<ExtArgs>>): Prisma__RouteScheduleClient<$Result.GetResult<Prisma.$RouteSchedulePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RouteSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteScheduleCountArgs} args - Arguments to filter RouteSchedules to count.
     * @example
     * // Count the number of RouteSchedules
     * const count = await prisma.routeSchedule.count({
     *   where: {
     *     // ... the filter for the RouteSchedules we want to count
     *   }
     * })
    **/
    count<T extends RouteScheduleCountArgs>(
      args?: Subset<T, RouteScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RouteSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RouteScheduleAggregateArgs>(args: Subset<T, RouteScheduleAggregateArgs>): Prisma.PrismaPromise<GetRouteScheduleAggregateType<T>>

    /**
     * Group by RouteSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteScheduleGroupByArgs} args - Group by arguments.
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
      T extends RouteScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteScheduleGroupByArgs['orderBy'] }
        : { orderBy?: RouteScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RouteScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RouteSchedule model
   */
  readonly fields: RouteScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RouteSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agency<T extends AgencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgencyDefaultArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tickets<T extends RouteSchedule$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, RouteSchedule$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the RouteSchedule model
   */ 
  interface RouteScheduleFieldRefs {
    readonly id: FieldRef<"RouteSchedule", 'String'>
    readonly agencyId: FieldRef<"RouteSchedule", 'String'>
    readonly origin: FieldRef<"RouteSchedule", 'String'>
    readonly destination: FieldRef<"RouteSchedule", 'String'>
    readonly departureTime: FieldRef<"RouteSchedule", 'String'>
    readonly busNumber: FieldRef<"RouteSchedule", 'String'>
    readonly busName: FieldRef<"RouteSchedule", 'String'>
    readonly busType: FieldRef<"RouteSchedule", 'BusType'>
    readonly totalSeats: FieldRef<"RouteSchedule", 'Int'>
    readonly bookedSeats: FieldRef<"RouteSchedule", 'Int'>
    readonly pricePerSeat: FieldRef<"RouteSchedule", 'Float'>
    readonly status: FieldRef<"RouteSchedule", 'ScheduleStatus'>
    readonly createdAt: FieldRef<"RouteSchedule", 'DateTime'>
    readonly updatedAt: FieldRef<"RouteSchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RouteSchedule findUnique
   */
  export type RouteScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSchedule
     */
    select?: RouteScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteScheduleInclude<ExtArgs> | null
    /**
     * Filter, which RouteSchedule to fetch.
     */
    where: RouteScheduleWhereUniqueInput
  }

  /**
   * RouteSchedule findUniqueOrThrow
   */
  export type RouteScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSchedule
     */
    select?: RouteScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteScheduleInclude<ExtArgs> | null
    /**
     * Filter, which RouteSchedule to fetch.
     */
    where: RouteScheduleWhereUniqueInput
  }

  /**
   * RouteSchedule findFirst
   */
  export type RouteScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSchedule
     */
    select?: RouteScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteScheduleInclude<ExtArgs> | null
    /**
     * Filter, which RouteSchedule to fetch.
     */
    where?: RouteScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteSchedules to fetch.
     */
    orderBy?: RouteScheduleOrderByWithRelationInput | RouteScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteSchedules.
     */
    cursor?: RouteScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteSchedules.
     */
    distinct?: RouteScheduleScalarFieldEnum | RouteScheduleScalarFieldEnum[]
  }

  /**
   * RouteSchedule findFirstOrThrow
   */
  export type RouteScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSchedule
     */
    select?: RouteScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteScheduleInclude<ExtArgs> | null
    /**
     * Filter, which RouteSchedule to fetch.
     */
    where?: RouteScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteSchedules to fetch.
     */
    orderBy?: RouteScheduleOrderByWithRelationInput | RouteScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteSchedules.
     */
    cursor?: RouteScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteSchedules.
     */
    distinct?: RouteScheduleScalarFieldEnum | RouteScheduleScalarFieldEnum[]
  }

  /**
   * RouteSchedule findMany
   */
  export type RouteScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSchedule
     */
    select?: RouteScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteScheduleInclude<ExtArgs> | null
    /**
     * Filter, which RouteSchedules to fetch.
     */
    where?: RouteScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteSchedules to fetch.
     */
    orderBy?: RouteScheduleOrderByWithRelationInput | RouteScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RouteSchedules.
     */
    cursor?: RouteScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteSchedules.
     */
    skip?: number
    distinct?: RouteScheduleScalarFieldEnum | RouteScheduleScalarFieldEnum[]
  }

  /**
   * RouteSchedule create
   */
  export type RouteScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSchedule
     */
    select?: RouteScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a RouteSchedule.
     */
    data: XOR<RouteScheduleCreateInput, RouteScheduleUncheckedCreateInput>
  }

  /**
   * RouteSchedule createMany
   */
  export type RouteScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RouteSchedules.
     */
    data: RouteScheduleCreateManyInput | RouteScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RouteSchedule createManyAndReturn
   */
  export type RouteScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSchedule
     */
    select?: RouteScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RouteSchedules.
     */
    data: RouteScheduleCreateManyInput | RouteScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RouteSchedule update
   */
  export type RouteScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSchedule
     */
    select?: RouteScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a RouteSchedule.
     */
    data: XOR<RouteScheduleUpdateInput, RouteScheduleUncheckedUpdateInput>
    /**
     * Choose, which RouteSchedule to update.
     */
    where: RouteScheduleWhereUniqueInput
  }

  /**
   * RouteSchedule updateMany
   */
  export type RouteScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RouteSchedules.
     */
    data: XOR<RouteScheduleUpdateManyMutationInput, RouteScheduleUncheckedUpdateManyInput>
    /**
     * Filter which RouteSchedules to update
     */
    where?: RouteScheduleWhereInput
  }

  /**
   * RouteSchedule upsert
   */
  export type RouteScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSchedule
     */
    select?: RouteScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the RouteSchedule to update in case it exists.
     */
    where: RouteScheduleWhereUniqueInput
    /**
     * In case the RouteSchedule found by the `where` argument doesn't exist, create a new RouteSchedule with this data.
     */
    create: XOR<RouteScheduleCreateInput, RouteScheduleUncheckedCreateInput>
    /**
     * In case the RouteSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteScheduleUpdateInput, RouteScheduleUncheckedUpdateInput>
  }

  /**
   * RouteSchedule delete
   */
  export type RouteScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSchedule
     */
    select?: RouteScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteScheduleInclude<ExtArgs> | null
    /**
     * Filter which RouteSchedule to delete.
     */
    where: RouteScheduleWhereUniqueInput
  }

  /**
   * RouteSchedule deleteMany
   */
  export type RouteScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteSchedules to delete
     */
    where?: RouteScheduleWhereInput
  }

  /**
   * RouteSchedule.tickets
   */
  export type RouteSchedule$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * RouteSchedule without action
   */
  export type RouteScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSchedule
     */
    select?: RouteScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteScheduleInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    amount: number | null
  }

  export type TicketSumAggregateOutputType = {
    amount: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: string | null
    ticketId: string | null
    orderId: string | null
    agencyId: string | null
    scheduleId: string | null
    customerId: string | null
    seatNo: string | null
    amount: number | null
    status: $Enums.TicketStatus | null
    validatedById: string | null
    boardedAt: Date | null
    qrCodeSignature: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: string | null
    ticketId: string | null
    orderId: string | null
    agencyId: string | null
    scheduleId: string | null
    customerId: string | null
    seatNo: string | null
    amount: number | null
    status: $Enums.TicketStatus | null
    validatedById: string | null
    boardedAt: Date | null
    qrCodeSignature: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    ticketId: number
    orderId: number
    agencyId: number
    scheduleId: number
    customerId: number
    seatNo: number
    amount: number
    status: number
    validatedById: number
    boardedAt: number
    qrCodeSignature: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    amount?: true
  }

  export type TicketSumAggregateInputType = {
    amount?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    ticketId?: true
    orderId?: true
    agencyId?: true
    scheduleId?: true
    customerId?: true
    seatNo?: true
    amount?: true
    status?: true
    validatedById?: true
    boardedAt?: true
    qrCodeSignature?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    ticketId?: true
    orderId?: true
    agencyId?: true
    scheduleId?: true
    customerId?: true
    seatNo?: true
    amount?: true
    status?: true
    validatedById?: true
    boardedAt?: true
    qrCodeSignature?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    ticketId?: true
    orderId?: true
    agencyId?: true
    scheduleId?: true
    customerId?: true
    seatNo?: true
    amount?: true
    status?: true
    validatedById?: true
    boardedAt?: true
    qrCodeSignature?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: string
    ticketId: string
    orderId: string
    agencyId: string
    scheduleId: string
    customerId: string
    seatNo: string
    amount: number
    status: $Enums.TicketStatus
    validatedById: string | null
    boardedAt: Date | null
    qrCodeSignature: string
    createdAt: Date
    updatedAt: Date
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    orderId?: boolean
    agencyId?: boolean
    scheduleId?: boolean
    customerId?: boolean
    seatNo?: boolean
    amount?: boolean
    status?: boolean
    validatedById?: boolean
    boardedAt?: boolean
    qrCodeSignature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    schedule?: boolean | RouteScheduleDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    validatedBy?: boolean | Ticket$validatedByArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    orderId?: boolean
    agencyId?: boolean
    scheduleId?: boolean
    customerId?: boolean
    seatNo?: boolean
    amount?: boolean
    status?: boolean
    validatedById?: boolean
    boardedAt?: boolean
    qrCodeSignature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    schedule?: boolean | RouteScheduleDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    validatedBy?: boolean | Ticket$validatedByArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    ticketId?: boolean
    orderId?: boolean
    agencyId?: boolean
    scheduleId?: boolean
    customerId?: boolean
    seatNo?: boolean
    amount?: boolean
    status?: boolean
    validatedById?: boolean
    boardedAt?: boolean
    qrCodeSignature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    schedule?: boolean | RouteScheduleDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    validatedBy?: boolean | Ticket$validatedByArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    schedule?: boolean | RouteScheduleDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    validatedBy?: boolean | Ticket$validatedByArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      agency: Prisma.$AgencyPayload<ExtArgs>
      schedule: Prisma.$RouteSchedulePayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
      validatedBy: Prisma.$AgentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketId: string
      orderId: string
      agencyId: string
      scheduleId: string
      customerId: string
      seatNo: string
      amount: number
      status: $Enums.TicketStatus
      validatedById: string | null
      boardedAt: Date | null
      qrCodeSignature: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agency<T extends AgencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgencyDefaultArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    schedule<T extends RouteScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteScheduleDefaultArgs<ExtArgs>>): Prisma__RouteScheduleClient<$Result.GetResult<Prisma.$RouteSchedulePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    validatedBy<T extends Ticket$validatedByArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$validatedByArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Ticket model
   */ 
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'String'>
    readonly ticketId: FieldRef<"Ticket", 'String'>
    readonly orderId: FieldRef<"Ticket", 'String'>
    readonly agencyId: FieldRef<"Ticket", 'String'>
    readonly scheduleId: FieldRef<"Ticket", 'String'>
    readonly customerId: FieldRef<"Ticket", 'String'>
    readonly seatNo: FieldRef<"Ticket", 'String'>
    readonly amount: FieldRef<"Ticket", 'Float'>
    readonly status: FieldRef<"Ticket", 'TicketStatus'>
    readonly validatedById: FieldRef<"Ticket", 'String'>
    readonly boardedAt: FieldRef<"Ticket", 'DateTime'>
    readonly qrCodeSignature: FieldRef<"Ticket", 'String'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
  }

  /**
   * Ticket.validatedBy
   */
  export type Ticket$validatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    where?: AgentWhereInput
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model BotConfig
   */

  export type AggregateBotConfig = {
    _count: BotConfigCountAggregateOutputType | null
    _min: BotConfigMinAggregateOutputType | null
    _max: BotConfigMaxAggregateOutputType | null
  }

  export type BotConfigMinAggregateOutputType = {
    id: string | null
    agencyId: string | null
    botPhoneNumber: string | null
    welcomeMessage: string | null
    status: string | null
    updatedAt: Date | null
  }

  export type BotConfigMaxAggregateOutputType = {
    id: string | null
    agencyId: string | null
    botPhoneNumber: string | null
    welcomeMessage: string | null
    status: string | null
    updatedAt: Date | null
  }

  export type BotConfigCountAggregateOutputType = {
    id: number
    agencyId: number
    botPhoneNumber: number
    welcomeMessage: number
    status: number
    updatedAt: number
    _all: number
  }


  export type BotConfigMinAggregateInputType = {
    id?: true
    agencyId?: true
    botPhoneNumber?: true
    welcomeMessage?: true
    status?: true
    updatedAt?: true
  }

  export type BotConfigMaxAggregateInputType = {
    id?: true
    agencyId?: true
    botPhoneNumber?: true
    welcomeMessage?: true
    status?: true
    updatedAt?: true
  }

  export type BotConfigCountAggregateInputType = {
    id?: true
    agencyId?: true
    botPhoneNumber?: true
    welcomeMessage?: true
    status?: true
    updatedAt?: true
    _all?: true
  }

  export type BotConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BotConfig to aggregate.
     */
    where?: BotConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotConfigs to fetch.
     */
    orderBy?: BotConfigOrderByWithRelationInput | BotConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BotConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BotConfigs
    **/
    _count?: true | BotConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BotConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BotConfigMaxAggregateInputType
  }

  export type GetBotConfigAggregateType<T extends BotConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateBotConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBotConfig[P]>
      : GetScalarType<T[P], AggregateBotConfig[P]>
  }




  export type BotConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BotConfigWhereInput
    orderBy?: BotConfigOrderByWithAggregationInput | BotConfigOrderByWithAggregationInput[]
    by: BotConfigScalarFieldEnum[] | BotConfigScalarFieldEnum
    having?: BotConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BotConfigCountAggregateInputType | true
    _min?: BotConfigMinAggregateInputType
    _max?: BotConfigMaxAggregateInputType
  }

  export type BotConfigGroupByOutputType = {
    id: string
    agencyId: string
    botPhoneNumber: string
    welcomeMessage: string
    status: string
    updatedAt: Date
    _count: BotConfigCountAggregateOutputType | null
    _min: BotConfigMinAggregateOutputType | null
    _max: BotConfigMaxAggregateOutputType | null
  }

  type GetBotConfigGroupByPayload<T extends BotConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BotConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BotConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BotConfigGroupByOutputType[P]>
            : GetScalarType<T[P], BotConfigGroupByOutputType[P]>
        }
      >
    >


  export type BotConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agencyId?: boolean
    botPhoneNumber?: boolean
    welcomeMessage?: boolean
    status?: boolean
    updatedAt?: boolean
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    rules?: boolean | BotConfig$rulesArgs<ExtArgs>
    _count?: boolean | BotConfigCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["botConfig"]>

  export type BotConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agencyId?: boolean
    botPhoneNumber?: boolean
    welcomeMessage?: boolean
    status?: boolean
    updatedAt?: boolean
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["botConfig"]>

  export type BotConfigSelectScalar = {
    id?: boolean
    agencyId?: boolean
    botPhoneNumber?: boolean
    welcomeMessage?: boolean
    status?: boolean
    updatedAt?: boolean
  }

  export type BotConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    rules?: boolean | BotConfig$rulesArgs<ExtArgs>
    _count?: boolean | BotConfigCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BotConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
  }

  export type $BotConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BotConfig"
    objects: {
      agency: Prisma.$AgencyPayload<ExtArgs>
      rules: Prisma.$BotRulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agencyId: string
      botPhoneNumber: string
      welcomeMessage: string
      status: string
      updatedAt: Date
    }, ExtArgs["result"]["botConfig"]>
    composites: {}
  }

  type BotConfigGetPayload<S extends boolean | null | undefined | BotConfigDefaultArgs> = $Result.GetResult<Prisma.$BotConfigPayload, S>

  type BotConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BotConfigFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BotConfigCountAggregateInputType | true
    }

  export interface BotConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BotConfig'], meta: { name: 'BotConfig' } }
    /**
     * Find zero or one BotConfig that matches the filter.
     * @param {BotConfigFindUniqueArgs} args - Arguments to find a BotConfig
     * @example
     * // Get one BotConfig
     * const botConfig = await prisma.botConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BotConfigFindUniqueArgs>(args: SelectSubset<T, BotConfigFindUniqueArgs<ExtArgs>>): Prisma__BotConfigClient<$Result.GetResult<Prisma.$BotConfigPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BotConfig that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BotConfigFindUniqueOrThrowArgs} args - Arguments to find a BotConfig
     * @example
     * // Get one BotConfig
     * const botConfig = await prisma.botConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BotConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, BotConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BotConfigClient<$Result.GetResult<Prisma.$BotConfigPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BotConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotConfigFindFirstArgs} args - Arguments to find a BotConfig
     * @example
     * // Get one BotConfig
     * const botConfig = await prisma.botConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BotConfigFindFirstArgs>(args?: SelectSubset<T, BotConfigFindFirstArgs<ExtArgs>>): Prisma__BotConfigClient<$Result.GetResult<Prisma.$BotConfigPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BotConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotConfigFindFirstOrThrowArgs} args - Arguments to find a BotConfig
     * @example
     * // Get one BotConfig
     * const botConfig = await prisma.botConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BotConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, BotConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__BotConfigClient<$Result.GetResult<Prisma.$BotConfigPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BotConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BotConfigs
     * const botConfigs = await prisma.botConfig.findMany()
     * 
     * // Get first 10 BotConfigs
     * const botConfigs = await prisma.botConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const botConfigWithIdOnly = await prisma.botConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BotConfigFindManyArgs>(args?: SelectSubset<T, BotConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BotConfigPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BotConfig.
     * @param {BotConfigCreateArgs} args - Arguments to create a BotConfig.
     * @example
     * // Create one BotConfig
     * const BotConfig = await prisma.botConfig.create({
     *   data: {
     *     // ... data to create a BotConfig
     *   }
     * })
     * 
     */
    create<T extends BotConfigCreateArgs>(args: SelectSubset<T, BotConfigCreateArgs<ExtArgs>>): Prisma__BotConfigClient<$Result.GetResult<Prisma.$BotConfigPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BotConfigs.
     * @param {BotConfigCreateManyArgs} args - Arguments to create many BotConfigs.
     * @example
     * // Create many BotConfigs
     * const botConfig = await prisma.botConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BotConfigCreateManyArgs>(args?: SelectSubset<T, BotConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BotConfigs and returns the data saved in the database.
     * @param {BotConfigCreateManyAndReturnArgs} args - Arguments to create many BotConfigs.
     * @example
     * // Create many BotConfigs
     * const botConfig = await prisma.botConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BotConfigs and only return the `id`
     * const botConfigWithIdOnly = await prisma.botConfig.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BotConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, BotConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BotConfigPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BotConfig.
     * @param {BotConfigDeleteArgs} args - Arguments to delete one BotConfig.
     * @example
     * // Delete one BotConfig
     * const BotConfig = await prisma.botConfig.delete({
     *   where: {
     *     // ... filter to delete one BotConfig
     *   }
     * })
     * 
     */
    delete<T extends BotConfigDeleteArgs>(args: SelectSubset<T, BotConfigDeleteArgs<ExtArgs>>): Prisma__BotConfigClient<$Result.GetResult<Prisma.$BotConfigPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BotConfig.
     * @param {BotConfigUpdateArgs} args - Arguments to update one BotConfig.
     * @example
     * // Update one BotConfig
     * const botConfig = await prisma.botConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BotConfigUpdateArgs>(args: SelectSubset<T, BotConfigUpdateArgs<ExtArgs>>): Prisma__BotConfigClient<$Result.GetResult<Prisma.$BotConfigPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BotConfigs.
     * @param {BotConfigDeleteManyArgs} args - Arguments to filter BotConfigs to delete.
     * @example
     * // Delete a few BotConfigs
     * const { count } = await prisma.botConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BotConfigDeleteManyArgs>(args?: SelectSubset<T, BotConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BotConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BotConfigs
     * const botConfig = await prisma.botConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BotConfigUpdateManyArgs>(args: SelectSubset<T, BotConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BotConfig.
     * @param {BotConfigUpsertArgs} args - Arguments to update or create a BotConfig.
     * @example
     * // Update or create a BotConfig
     * const botConfig = await prisma.botConfig.upsert({
     *   create: {
     *     // ... data to create a BotConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BotConfig we want to update
     *   }
     * })
     */
    upsert<T extends BotConfigUpsertArgs>(args: SelectSubset<T, BotConfigUpsertArgs<ExtArgs>>): Prisma__BotConfigClient<$Result.GetResult<Prisma.$BotConfigPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BotConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotConfigCountArgs} args - Arguments to filter BotConfigs to count.
     * @example
     * // Count the number of BotConfigs
     * const count = await prisma.botConfig.count({
     *   where: {
     *     // ... the filter for the BotConfigs we want to count
     *   }
     * })
    **/
    count<T extends BotConfigCountArgs>(
      args?: Subset<T, BotConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BotConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BotConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BotConfigAggregateArgs>(args: Subset<T, BotConfigAggregateArgs>): Prisma.PrismaPromise<GetBotConfigAggregateType<T>>

    /**
     * Group by BotConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotConfigGroupByArgs} args - Group by arguments.
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
      T extends BotConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BotConfigGroupByArgs['orderBy'] }
        : { orderBy?: BotConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BotConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBotConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BotConfig model
   */
  readonly fields: BotConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BotConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BotConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agency<T extends AgencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgencyDefaultArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    rules<T extends BotConfig$rulesArgs<ExtArgs> = {}>(args?: Subset<T, BotConfig$rulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BotRulePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the BotConfig model
   */ 
  interface BotConfigFieldRefs {
    readonly id: FieldRef<"BotConfig", 'String'>
    readonly agencyId: FieldRef<"BotConfig", 'String'>
    readonly botPhoneNumber: FieldRef<"BotConfig", 'String'>
    readonly welcomeMessage: FieldRef<"BotConfig", 'String'>
    readonly status: FieldRef<"BotConfig", 'String'>
    readonly updatedAt: FieldRef<"BotConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BotConfig findUnique
   */
  export type BotConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotConfig
     */
    select?: BotConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotConfigInclude<ExtArgs> | null
    /**
     * Filter, which BotConfig to fetch.
     */
    where: BotConfigWhereUniqueInput
  }

  /**
   * BotConfig findUniqueOrThrow
   */
  export type BotConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotConfig
     */
    select?: BotConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotConfigInclude<ExtArgs> | null
    /**
     * Filter, which BotConfig to fetch.
     */
    where: BotConfigWhereUniqueInput
  }

  /**
   * BotConfig findFirst
   */
  export type BotConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotConfig
     */
    select?: BotConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotConfigInclude<ExtArgs> | null
    /**
     * Filter, which BotConfig to fetch.
     */
    where?: BotConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotConfigs to fetch.
     */
    orderBy?: BotConfigOrderByWithRelationInput | BotConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BotConfigs.
     */
    cursor?: BotConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BotConfigs.
     */
    distinct?: BotConfigScalarFieldEnum | BotConfigScalarFieldEnum[]
  }

  /**
   * BotConfig findFirstOrThrow
   */
  export type BotConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotConfig
     */
    select?: BotConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotConfigInclude<ExtArgs> | null
    /**
     * Filter, which BotConfig to fetch.
     */
    where?: BotConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotConfigs to fetch.
     */
    orderBy?: BotConfigOrderByWithRelationInput | BotConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BotConfigs.
     */
    cursor?: BotConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BotConfigs.
     */
    distinct?: BotConfigScalarFieldEnum | BotConfigScalarFieldEnum[]
  }

  /**
   * BotConfig findMany
   */
  export type BotConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotConfig
     */
    select?: BotConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotConfigInclude<ExtArgs> | null
    /**
     * Filter, which BotConfigs to fetch.
     */
    where?: BotConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotConfigs to fetch.
     */
    orderBy?: BotConfigOrderByWithRelationInput | BotConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BotConfigs.
     */
    cursor?: BotConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotConfigs.
     */
    skip?: number
    distinct?: BotConfigScalarFieldEnum | BotConfigScalarFieldEnum[]
  }

  /**
   * BotConfig create
   */
  export type BotConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotConfig
     */
    select?: BotConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a BotConfig.
     */
    data: XOR<BotConfigCreateInput, BotConfigUncheckedCreateInput>
  }

  /**
   * BotConfig createMany
   */
  export type BotConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BotConfigs.
     */
    data: BotConfigCreateManyInput | BotConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BotConfig createManyAndReturn
   */
  export type BotConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotConfig
     */
    select?: BotConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BotConfigs.
     */
    data: BotConfigCreateManyInput | BotConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BotConfig update
   */
  export type BotConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotConfig
     */
    select?: BotConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a BotConfig.
     */
    data: XOR<BotConfigUpdateInput, BotConfigUncheckedUpdateInput>
    /**
     * Choose, which BotConfig to update.
     */
    where: BotConfigWhereUniqueInput
  }

  /**
   * BotConfig updateMany
   */
  export type BotConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BotConfigs.
     */
    data: XOR<BotConfigUpdateManyMutationInput, BotConfigUncheckedUpdateManyInput>
    /**
     * Filter which BotConfigs to update
     */
    where?: BotConfigWhereInput
  }

  /**
   * BotConfig upsert
   */
  export type BotConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotConfig
     */
    select?: BotConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the BotConfig to update in case it exists.
     */
    where: BotConfigWhereUniqueInput
    /**
     * In case the BotConfig found by the `where` argument doesn't exist, create a new BotConfig with this data.
     */
    create: XOR<BotConfigCreateInput, BotConfigUncheckedCreateInput>
    /**
     * In case the BotConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BotConfigUpdateInput, BotConfigUncheckedUpdateInput>
  }

  /**
   * BotConfig delete
   */
  export type BotConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotConfig
     */
    select?: BotConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotConfigInclude<ExtArgs> | null
    /**
     * Filter which BotConfig to delete.
     */
    where: BotConfigWhereUniqueInput
  }

  /**
   * BotConfig deleteMany
   */
  export type BotConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BotConfigs to delete
     */
    where?: BotConfigWhereInput
  }

  /**
   * BotConfig.rules
   */
  export type BotConfig$rulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotRule
     */
    select?: BotRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotRuleInclude<ExtArgs> | null
    where?: BotRuleWhereInput
    orderBy?: BotRuleOrderByWithRelationInput | BotRuleOrderByWithRelationInput[]
    cursor?: BotRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BotRuleScalarFieldEnum | BotRuleScalarFieldEnum[]
  }

  /**
   * BotConfig without action
   */
  export type BotConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotConfig
     */
    select?: BotConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotConfigInclude<ExtArgs> | null
  }


  /**
   * Model BotRule
   */

  export type AggregateBotRule = {
    _count: BotRuleCountAggregateOutputType | null
    _min: BotRuleMinAggregateOutputType | null
    _max: BotRuleMaxAggregateOutputType | null
  }

  export type BotRuleMinAggregateOutputType = {
    id: string | null
    botConfigId: string | null
    keyword: string | null
    responseType: $Enums.ResponseType | null
    replyTemplate: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type BotRuleMaxAggregateOutputType = {
    id: string | null
    botConfigId: string | null
    keyword: string | null
    responseType: $Enums.ResponseType | null
    replyTemplate: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type BotRuleCountAggregateOutputType = {
    id: number
    botConfigId: number
    keyword: number
    responseType: number
    replyTemplate: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type BotRuleMinAggregateInputType = {
    id?: true
    botConfigId?: true
    keyword?: true
    responseType?: true
    replyTemplate?: true
    isActive?: true
    createdAt?: true
  }

  export type BotRuleMaxAggregateInputType = {
    id?: true
    botConfigId?: true
    keyword?: true
    responseType?: true
    replyTemplate?: true
    isActive?: true
    createdAt?: true
  }

  export type BotRuleCountAggregateInputType = {
    id?: true
    botConfigId?: true
    keyword?: true
    responseType?: true
    replyTemplate?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type BotRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BotRule to aggregate.
     */
    where?: BotRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotRules to fetch.
     */
    orderBy?: BotRuleOrderByWithRelationInput | BotRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BotRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BotRules
    **/
    _count?: true | BotRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BotRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BotRuleMaxAggregateInputType
  }

  export type GetBotRuleAggregateType<T extends BotRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateBotRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBotRule[P]>
      : GetScalarType<T[P], AggregateBotRule[P]>
  }




  export type BotRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BotRuleWhereInput
    orderBy?: BotRuleOrderByWithAggregationInput | BotRuleOrderByWithAggregationInput[]
    by: BotRuleScalarFieldEnum[] | BotRuleScalarFieldEnum
    having?: BotRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BotRuleCountAggregateInputType | true
    _min?: BotRuleMinAggregateInputType
    _max?: BotRuleMaxAggregateInputType
  }

  export type BotRuleGroupByOutputType = {
    id: string
    botConfigId: string
    keyword: string
    responseType: $Enums.ResponseType
    replyTemplate: string
    isActive: boolean
    createdAt: Date
    _count: BotRuleCountAggregateOutputType | null
    _min: BotRuleMinAggregateOutputType | null
    _max: BotRuleMaxAggregateOutputType | null
  }

  type GetBotRuleGroupByPayload<T extends BotRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BotRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BotRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BotRuleGroupByOutputType[P]>
            : GetScalarType<T[P], BotRuleGroupByOutputType[P]>
        }
      >
    >


  export type BotRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    botConfigId?: boolean
    keyword?: boolean
    responseType?: boolean
    replyTemplate?: boolean
    isActive?: boolean
    createdAt?: boolean
    botConfig?: boolean | BotConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["botRule"]>

  export type BotRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    botConfigId?: boolean
    keyword?: boolean
    responseType?: boolean
    replyTemplate?: boolean
    isActive?: boolean
    createdAt?: boolean
    botConfig?: boolean | BotConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["botRule"]>

  export type BotRuleSelectScalar = {
    id?: boolean
    botConfigId?: boolean
    keyword?: boolean
    responseType?: boolean
    replyTemplate?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type BotRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    botConfig?: boolean | BotConfigDefaultArgs<ExtArgs>
  }
  export type BotRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    botConfig?: boolean | BotConfigDefaultArgs<ExtArgs>
  }

  export type $BotRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BotRule"
    objects: {
      botConfig: Prisma.$BotConfigPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      botConfigId: string
      keyword: string
      responseType: $Enums.ResponseType
      replyTemplate: string
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["botRule"]>
    composites: {}
  }

  type BotRuleGetPayload<S extends boolean | null | undefined | BotRuleDefaultArgs> = $Result.GetResult<Prisma.$BotRulePayload, S>

  type BotRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BotRuleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BotRuleCountAggregateInputType | true
    }

  export interface BotRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BotRule'], meta: { name: 'BotRule' } }
    /**
     * Find zero or one BotRule that matches the filter.
     * @param {BotRuleFindUniqueArgs} args - Arguments to find a BotRule
     * @example
     * // Get one BotRule
     * const botRule = await prisma.botRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BotRuleFindUniqueArgs>(args: SelectSubset<T, BotRuleFindUniqueArgs<ExtArgs>>): Prisma__BotRuleClient<$Result.GetResult<Prisma.$BotRulePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BotRule that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BotRuleFindUniqueOrThrowArgs} args - Arguments to find a BotRule
     * @example
     * // Get one BotRule
     * const botRule = await prisma.botRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BotRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, BotRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BotRuleClient<$Result.GetResult<Prisma.$BotRulePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BotRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotRuleFindFirstArgs} args - Arguments to find a BotRule
     * @example
     * // Get one BotRule
     * const botRule = await prisma.botRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BotRuleFindFirstArgs>(args?: SelectSubset<T, BotRuleFindFirstArgs<ExtArgs>>): Prisma__BotRuleClient<$Result.GetResult<Prisma.$BotRulePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BotRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotRuleFindFirstOrThrowArgs} args - Arguments to find a BotRule
     * @example
     * // Get one BotRule
     * const botRule = await prisma.botRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BotRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, BotRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__BotRuleClient<$Result.GetResult<Prisma.$BotRulePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BotRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BotRules
     * const botRules = await prisma.botRule.findMany()
     * 
     * // Get first 10 BotRules
     * const botRules = await prisma.botRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const botRuleWithIdOnly = await prisma.botRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BotRuleFindManyArgs>(args?: SelectSubset<T, BotRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BotRulePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BotRule.
     * @param {BotRuleCreateArgs} args - Arguments to create a BotRule.
     * @example
     * // Create one BotRule
     * const BotRule = await prisma.botRule.create({
     *   data: {
     *     // ... data to create a BotRule
     *   }
     * })
     * 
     */
    create<T extends BotRuleCreateArgs>(args: SelectSubset<T, BotRuleCreateArgs<ExtArgs>>): Prisma__BotRuleClient<$Result.GetResult<Prisma.$BotRulePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BotRules.
     * @param {BotRuleCreateManyArgs} args - Arguments to create many BotRules.
     * @example
     * // Create many BotRules
     * const botRule = await prisma.botRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BotRuleCreateManyArgs>(args?: SelectSubset<T, BotRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BotRules and returns the data saved in the database.
     * @param {BotRuleCreateManyAndReturnArgs} args - Arguments to create many BotRules.
     * @example
     * // Create many BotRules
     * const botRule = await prisma.botRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BotRules and only return the `id`
     * const botRuleWithIdOnly = await prisma.botRule.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BotRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, BotRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BotRulePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BotRule.
     * @param {BotRuleDeleteArgs} args - Arguments to delete one BotRule.
     * @example
     * // Delete one BotRule
     * const BotRule = await prisma.botRule.delete({
     *   where: {
     *     // ... filter to delete one BotRule
     *   }
     * })
     * 
     */
    delete<T extends BotRuleDeleteArgs>(args: SelectSubset<T, BotRuleDeleteArgs<ExtArgs>>): Prisma__BotRuleClient<$Result.GetResult<Prisma.$BotRulePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BotRule.
     * @param {BotRuleUpdateArgs} args - Arguments to update one BotRule.
     * @example
     * // Update one BotRule
     * const botRule = await prisma.botRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BotRuleUpdateArgs>(args: SelectSubset<T, BotRuleUpdateArgs<ExtArgs>>): Prisma__BotRuleClient<$Result.GetResult<Prisma.$BotRulePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BotRules.
     * @param {BotRuleDeleteManyArgs} args - Arguments to filter BotRules to delete.
     * @example
     * // Delete a few BotRules
     * const { count } = await prisma.botRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BotRuleDeleteManyArgs>(args?: SelectSubset<T, BotRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BotRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BotRules
     * const botRule = await prisma.botRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BotRuleUpdateManyArgs>(args: SelectSubset<T, BotRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BotRule.
     * @param {BotRuleUpsertArgs} args - Arguments to update or create a BotRule.
     * @example
     * // Update or create a BotRule
     * const botRule = await prisma.botRule.upsert({
     *   create: {
     *     // ... data to create a BotRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BotRule we want to update
     *   }
     * })
     */
    upsert<T extends BotRuleUpsertArgs>(args: SelectSubset<T, BotRuleUpsertArgs<ExtArgs>>): Prisma__BotRuleClient<$Result.GetResult<Prisma.$BotRulePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BotRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotRuleCountArgs} args - Arguments to filter BotRules to count.
     * @example
     * // Count the number of BotRules
     * const count = await prisma.botRule.count({
     *   where: {
     *     // ... the filter for the BotRules we want to count
     *   }
     * })
    **/
    count<T extends BotRuleCountArgs>(
      args?: Subset<T, BotRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BotRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BotRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BotRuleAggregateArgs>(args: Subset<T, BotRuleAggregateArgs>): Prisma.PrismaPromise<GetBotRuleAggregateType<T>>

    /**
     * Group by BotRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotRuleGroupByArgs} args - Group by arguments.
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
      T extends BotRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BotRuleGroupByArgs['orderBy'] }
        : { orderBy?: BotRuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BotRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBotRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BotRule model
   */
  readonly fields: BotRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BotRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BotRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    botConfig<T extends BotConfigDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BotConfigDefaultArgs<ExtArgs>>): Prisma__BotConfigClient<$Result.GetResult<Prisma.$BotConfigPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the BotRule model
   */ 
  interface BotRuleFieldRefs {
    readonly id: FieldRef<"BotRule", 'String'>
    readonly botConfigId: FieldRef<"BotRule", 'String'>
    readonly keyword: FieldRef<"BotRule", 'String'>
    readonly responseType: FieldRef<"BotRule", 'ResponseType'>
    readonly replyTemplate: FieldRef<"BotRule", 'String'>
    readonly isActive: FieldRef<"BotRule", 'Boolean'>
    readonly createdAt: FieldRef<"BotRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BotRule findUnique
   */
  export type BotRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotRule
     */
    select?: BotRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotRuleInclude<ExtArgs> | null
    /**
     * Filter, which BotRule to fetch.
     */
    where: BotRuleWhereUniqueInput
  }

  /**
   * BotRule findUniqueOrThrow
   */
  export type BotRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotRule
     */
    select?: BotRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotRuleInclude<ExtArgs> | null
    /**
     * Filter, which BotRule to fetch.
     */
    where: BotRuleWhereUniqueInput
  }

  /**
   * BotRule findFirst
   */
  export type BotRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotRule
     */
    select?: BotRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotRuleInclude<ExtArgs> | null
    /**
     * Filter, which BotRule to fetch.
     */
    where?: BotRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotRules to fetch.
     */
    orderBy?: BotRuleOrderByWithRelationInput | BotRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BotRules.
     */
    cursor?: BotRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BotRules.
     */
    distinct?: BotRuleScalarFieldEnum | BotRuleScalarFieldEnum[]
  }

  /**
   * BotRule findFirstOrThrow
   */
  export type BotRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotRule
     */
    select?: BotRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotRuleInclude<ExtArgs> | null
    /**
     * Filter, which BotRule to fetch.
     */
    where?: BotRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotRules to fetch.
     */
    orderBy?: BotRuleOrderByWithRelationInput | BotRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BotRules.
     */
    cursor?: BotRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BotRules.
     */
    distinct?: BotRuleScalarFieldEnum | BotRuleScalarFieldEnum[]
  }

  /**
   * BotRule findMany
   */
  export type BotRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotRule
     */
    select?: BotRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotRuleInclude<ExtArgs> | null
    /**
     * Filter, which BotRules to fetch.
     */
    where?: BotRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotRules to fetch.
     */
    orderBy?: BotRuleOrderByWithRelationInput | BotRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BotRules.
     */
    cursor?: BotRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotRules.
     */
    skip?: number
    distinct?: BotRuleScalarFieldEnum | BotRuleScalarFieldEnum[]
  }

  /**
   * BotRule create
   */
  export type BotRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotRule
     */
    select?: BotRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a BotRule.
     */
    data: XOR<BotRuleCreateInput, BotRuleUncheckedCreateInput>
  }

  /**
   * BotRule createMany
   */
  export type BotRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BotRules.
     */
    data: BotRuleCreateManyInput | BotRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BotRule createManyAndReturn
   */
  export type BotRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotRule
     */
    select?: BotRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BotRules.
     */
    data: BotRuleCreateManyInput | BotRuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotRuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BotRule update
   */
  export type BotRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotRule
     */
    select?: BotRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a BotRule.
     */
    data: XOR<BotRuleUpdateInput, BotRuleUncheckedUpdateInput>
    /**
     * Choose, which BotRule to update.
     */
    where: BotRuleWhereUniqueInput
  }

  /**
   * BotRule updateMany
   */
  export type BotRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BotRules.
     */
    data: XOR<BotRuleUpdateManyMutationInput, BotRuleUncheckedUpdateManyInput>
    /**
     * Filter which BotRules to update
     */
    where?: BotRuleWhereInput
  }

  /**
   * BotRule upsert
   */
  export type BotRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotRule
     */
    select?: BotRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the BotRule to update in case it exists.
     */
    where: BotRuleWhereUniqueInput
    /**
     * In case the BotRule found by the `where` argument doesn't exist, create a new BotRule with this data.
     */
    create: XOR<BotRuleCreateInput, BotRuleUncheckedCreateInput>
    /**
     * In case the BotRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BotRuleUpdateInput, BotRuleUncheckedUpdateInput>
  }

  /**
   * BotRule delete
   */
  export type BotRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotRule
     */
    select?: BotRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotRuleInclude<ExtArgs> | null
    /**
     * Filter which BotRule to delete.
     */
    where: BotRuleWhereUniqueInput
  }

  /**
   * BotRule deleteMany
   */
  export type BotRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BotRules to delete
     */
    where?: BotRuleWhereInput
  }

  /**
   * BotRule without action
   */
  export type BotRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotRule
     */
    select?: BotRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotRuleInclude<ExtArgs> | null
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


  export const AgencyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    agencyCode: 'agencyCode',
    hqLocation: 'hqLocation',
    activeFleetCount: 'activeFleetCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AgencyScalarFieldEnum = (typeof AgencyScalarFieldEnum)[keyof typeof AgencyScalarFieldEnum]


  export const AgentScalarFieldEnum: {
    id: 'id',
    agencyId: 'agencyId',
    agentCode: 'agentCode',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    role: 'role',
    station: 'station',
    shiftStatus: 'shiftStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AgentScalarFieldEnum = (typeof AgentScalarFieldEnum)[keyof typeof AgentScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    whatsappPhone: 'whatsappPhone',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const RouteScheduleScalarFieldEnum: {
    id: 'id',
    agencyId: 'agencyId',
    origin: 'origin',
    destination: 'destination',
    departureTime: 'departureTime',
    busNumber: 'busNumber',
    busName: 'busName',
    busType: 'busType',
    totalSeats: 'totalSeats',
    bookedSeats: 'bookedSeats',
    pricePerSeat: 'pricePerSeat',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RouteScheduleScalarFieldEnum = (typeof RouteScheduleScalarFieldEnum)[keyof typeof RouteScheduleScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    orderId: 'orderId',
    agencyId: 'agencyId',
    scheduleId: 'scheduleId',
    customerId: 'customerId',
    seatNo: 'seatNo',
    amount: 'amount',
    status: 'status',
    validatedById: 'validatedById',
    boardedAt: 'boardedAt',
    qrCodeSignature: 'qrCodeSignature',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const BotConfigScalarFieldEnum: {
    id: 'id',
    agencyId: 'agencyId',
    botPhoneNumber: 'botPhoneNumber',
    welcomeMessage: 'welcomeMessage',
    status: 'status',
    updatedAt: 'updatedAt'
  };

  export type BotConfigScalarFieldEnum = (typeof BotConfigScalarFieldEnum)[keyof typeof BotConfigScalarFieldEnum]


  export const BotRuleScalarFieldEnum: {
    id: 'id',
    botConfigId: 'botConfigId',
    keyword: 'keyword',
    responseType: 'responseType',
    replyTemplate: 'replyTemplate',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type BotRuleScalarFieldEnum = (typeof BotRuleScalarFieldEnum)[keyof typeof BotRuleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'ShiftStatus'
   */
  export type EnumShiftStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShiftStatus'>
    


  /**
   * Reference to a field of type 'ShiftStatus[]'
   */
  export type ListEnumShiftStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShiftStatus[]'>
    


  /**
   * Reference to a field of type 'BusType'
   */
  export type EnumBusTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BusType'>
    


  /**
   * Reference to a field of type 'BusType[]'
   */
  export type ListEnumBusTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BusType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ScheduleStatus'
   */
  export type EnumScheduleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScheduleStatus'>
    


  /**
   * Reference to a field of type 'ScheduleStatus[]'
   */
  export type ListEnumScheduleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScheduleStatus[]'>
    


  /**
   * Reference to a field of type 'TicketStatus'
   */
  export type EnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus'>
    


  /**
   * Reference to a field of type 'TicketStatus[]'
   */
  export type ListEnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus[]'>
    


  /**
   * Reference to a field of type 'ResponseType'
   */
  export type EnumResponseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResponseType'>
    


  /**
   * Reference to a field of type 'ResponseType[]'
   */
  export type ListEnumResponseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResponseType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type AgencyWhereInput = {
    AND?: AgencyWhereInput | AgencyWhereInput[]
    OR?: AgencyWhereInput[]
    NOT?: AgencyWhereInput | AgencyWhereInput[]
    id?: StringFilter<"Agency"> | string
    name?: StringFilter<"Agency"> | string
    agencyCode?: StringFilter<"Agency"> | string
    hqLocation?: StringFilter<"Agency"> | string
    activeFleetCount?: StringFilter<"Agency"> | string
    createdAt?: DateTimeFilter<"Agency"> | Date | string
    updatedAt?: DateTimeFilter<"Agency"> | Date | string
    schedules?: RouteScheduleListRelationFilter
    tickets?: TicketListRelationFilter
    agents?: AgentListRelationFilter
    botConfig?: XOR<BotConfigNullableRelationFilter, BotConfigWhereInput> | null
  }

  export type AgencyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    agencyCode?: SortOrder
    hqLocation?: SortOrder
    activeFleetCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schedules?: RouteScheduleOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
    agents?: AgentOrderByRelationAggregateInput
    botConfig?: BotConfigOrderByWithRelationInput
  }

  export type AgencyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    agencyCode?: string
    AND?: AgencyWhereInput | AgencyWhereInput[]
    OR?: AgencyWhereInput[]
    NOT?: AgencyWhereInput | AgencyWhereInput[]
    name?: StringFilter<"Agency"> | string
    hqLocation?: StringFilter<"Agency"> | string
    activeFleetCount?: StringFilter<"Agency"> | string
    createdAt?: DateTimeFilter<"Agency"> | Date | string
    updatedAt?: DateTimeFilter<"Agency"> | Date | string
    schedules?: RouteScheduleListRelationFilter
    tickets?: TicketListRelationFilter
    agents?: AgentListRelationFilter
    botConfig?: XOR<BotConfigNullableRelationFilter, BotConfigWhereInput> | null
  }, "id" | "agencyCode">

  export type AgencyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    agencyCode?: SortOrder
    hqLocation?: SortOrder
    activeFleetCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AgencyCountOrderByAggregateInput
    _max?: AgencyMaxOrderByAggregateInput
    _min?: AgencyMinOrderByAggregateInput
  }

  export type AgencyScalarWhereWithAggregatesInput = {
    AND?: AgencyScalarWhereWithAggregatesInput | AgencyScalarWhereWithAggregatesInput[]
    OR?: AgencyScalarWhereWithAggregatesInput[]
    NOT?: AgencyScalarWhereWithAggregatesInput | AgencyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agency"> | string
    name?: StringWithAggregatesFilter<"Agency"> | string
    agencyCode?: StringWithAggregatesFilter<"Agency"> | string
    hqLocation?: StringWithAggregatesFilter<"Agency"> | string
    activeFleetCount?: StringWithAggregatesFilter<"Agency"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Agency"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Agency"> | Date | string
  }

  export type AgentWhereInput = {
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    id?: StringFilter<"Agent"> | string
    agencyId?: StringFilter<"Agent"> | string
    agentCode?: StringFilter<"Agent"> | string
    name?: StringFilter<"Agent"> | string
    email?: StringFilter<"Agent"> | string
    password?: StringFilter<"Agent"> | string
    phone?: StringFilter<"Agent"> | string
    role?: StringFilter<"Agent"> | string
    station?: StringFilter<"Agent"> | string
    shiftStatus?: EnumShiftStatusFilter<"Agent"> | $Enums.ShiftStatus
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    updatedAt?: DateTimeFilter<"Agent"> | Date | string
    agency?: XOR<AgencyRelationFilter, AgencyWhereInput>
    scannedTickets?: TicketListRelationFilter
  }

  export type AgentOrderByWithRelationInput = {
    id?: SortOrder
    agencyId?: SortOrder
    agentCode?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    station?: SortOrder
    shiftStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    agency?: AgencyOrderByWithRelationInput
    scannedTickets?: TicketOrderByRelationAggregateInput
  }

  export type AgentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    agentCode?: string
    email?: string
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    agencyId?: StringFilter<"Agent"> | string
    name?: StringFilter<"Agent"> | string
    password?: StringFilter<"Agent"> | string
    phone?: StringFilter<"Agent"> | string
    role?: StringFilter<"Agent"> | string
    station?: StringFilter<"Agent"> | string
    shiftStatus?: EnumShiftStatusFilter<"Agent"> | $Enums.ShiftStatus
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    updatedAt?: DateTimeFilter<"Agent"> | Date | string
    agency?: XOR<AgencyRelationFilter, AgencyWhereInput>
    scannedTickets?: TicketListRelationFilter
  }, "id" | "agentCode" | "email">

  export type AgentOrderByWithAggregationInput = {
    id?: SortOrder
    agencyId?: SortOrder
    agentCode?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    station?: SortOrder
    shiftStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AgentCountOrderByAggregateInput
    _max?: AgentMaxOrderByAggregateInput
    _min?: AgentMinOrderByAggregateInput
  }

  export type AgentScalarWhereWithAggregatesInput = {
    AND?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    OR?: AgentScalarWhereWithAggregatesInput[]
    NOT?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agent"> | string
    agencyId?: StringWithAggregatesFilter<"Agent"> | string
    agentCode?: StringWithAggregatesFilter<"Agent"> | string
    name?: StringWithAggregatesFilter<"Agent"> | string
    email?: StringWithAggregatesFilter<"Agent"> | string
    password?: StringWithAggregatesFilter<"Agent"> | string
    phone?: StringWithAggregatesFilter<"Agent"> | string
    role?: StringWithAggregatesFilter<"Agent"> | string
    station?: StringWithAggregatesFilter<"Agent"> | string
    shiftStatus?: EnumShiftStatusWithAggregatesFilter<"Agent"> | $Enums.ShiftStatus
    createdAt?: DateTimeWithAggregatesFilter<"Agent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Agent"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    whatsappPhone?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    tickets?: TicketListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    whatsappPhone?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    whatsappPhone?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    tickets?: TicketListRelationFilter
  }, "id" | "whatsappPhone">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    whatsappPhone?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    whatsappPhone?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type RouteScheduleWhereInput = {
    AND?: RouteScheduleWhereInput | RouteScheduleWhereInput[]
    OR?: RouteScheduleWhereInput[]
    NOT?: RouteScheduleWhereInput | RouteScheduleWhereInput[]
    id?: StringFilter<"RouteSchedule"> | string
    agencyId?: StringFilter<"RouteSchedule"> | string
    origin?: StringFilter<"RouteSchedule"> | string
    destination?: StringFilter<"RouteSchedule"> | string
    departureTime?: StringFilter<"RouteSchedule"> | string
    busNumber?: StringFilter<"RouteSchedule"> | string
    busName?: StringFilter<"RouteSchedule"> | string
    busType?: EnumBusTypeFilter<"RouteSchedule"> | $Enums.BusType
    totalSeats?: IntFilter<"RouteSchedule"> | number
    bookedSeats?: IntFilter<"RouteSchedule"> | number
    pricePerSeat?: FloatFilter<"RouteSchedule"> | number
    status?: EnumScheduleStatusFilter<"RouteSchedule"> | $Enums.ScheduleStatus
    createdAt?: DateTimeFilter<"RouteSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"RouteSchedule"> | Date | string
    agency?: XOR<AgencyRelationFilter, AgencyWhereInput>
    tickets?: TicketListRelationFilter
  }

  export type RouteScheduleOrderByWithRelationInput = {
    id?: SortOrder
    agencyId?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    departureTime?: SortOrder
    busNumber?: SortOrder
    busName?: SortOrder
    busType?: SortOrder
    totalSeats?: SortOrder
    bookedSeats?: SortOrder
    pricePerSeat?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    agency?: AgencyOrderByWithRelationInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type RouteScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RouteScheduleWhereInput | RouteScheduleWhereInput[]
    OR?: RouteScheduleWhereInput[]
    NOT?: RouteScheduleWhereInput | RouteScheduleWhereInput[]
    agencyId?: StringFilter<"RouteSchedule"> | string
    origin?: StringFilter<"RouteSchedule"> | string
    destination?: StringFilter<"RouteSchedule"> | string
    departureTime?: StringFilter<"RouteSchedule"> | string
    busNumber?: StringFilter<"RouteSchedule"> | string
    busName?: StringFilter<"RouteSchedule"> | string
    busType?: EnumBusTypeFilter<"RouteSchedule"> | $Enums.BusType
    totalSeats?: IntFilter<"RouteSchedule"> | number
    bookedSeats?: IntFilter<"RouteSchedule"> | number
    pricePerSeat?: FloatFilter<"RouteSchedule"> | number
    status?: EnumScheduleStatusFilter<"RouteSchedule"> | $Enums.ScheduleStatus
    createdAt?: DateTimeFilter<"RouteSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"RouteSchedule"> | Date | string
    agency?: XOR<AgencyRelationFilter, AgencyWhereInput>
    tickets?: TicketListRelationFilter
  }, "id">

  export type RouteScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    agencyId?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    departureTime?: SortOrder
    busNumber?: SortOrder
    busName?: SortOrder
    busType?: SortOrder
    totalSeats?: SortOrder
    bookedSeats?: SortOrder
    pricePerSeat?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RouteScheduleCountOrderByAggregateInput
    _avg?: RouteScheduleAvgOrderByAggregateInput
    _max?: RouteScheduleMaxOrderByAggregateInput
    _min?: RouteScheduleMinOrderByAggregateInput
    _sum?: RouteScheduleSumOrderByAggregateInput
  }

  export type RouteScheduleScalarWhereWithAggregatesInput = {
    AND?: RouteScheduleScalarWhereWithAggregatesInput | RouteScheduleScalarWhereWithAggregatesInput[]
    OR?: RouteScheduleScalarWhereWithAggregatesInput[]
    NOT?: RouteScheduleScalarWhereWithAggregatesInput | RouteScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RouteSchedule"> | string
    agencyId?: StringWithAggregatesFilter<"RouteSchedule"> | string
    origin?: StringWithAggregatesFilter<"RouteSchedule"> | string
    destination?: StringWithAggregatesFilter<"RouteSchedule"> | string
    departureTime?: StringWithAggregatesFilter<"RouteSchedule"> | string
    busNumber?: StringWithAggregatesFilter<"RouteSchedule"> | string
    busName?: StringWithAggregatesFilter<"RouteSchedule"> | string
    busType?: EnumBusTypeWithAggregatesFilter<"RouteSchedule"> | $Enums.BusType
    totalSeats?: IntWithAggregatesFilter<"RouteSchedule"> | number
    bookedSeats?: IntWithAggregatesFilter<"RouteSchedule"> | number
    pricePerSeat?: FloatWithAggregatesFilter<"RouteSchedule"> | number
    status?: EnumScheduleStatusWithAggregatesFilter<"RouteSchedule"> | $Enums.ScheduleStatus
    createdAt?: DateTimeWithAggregatesFilter<"RouteSchedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RouteSchedule"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: StringFilter<"Ticket"> | string
    ticketId?: StringFilter<"Ticket"> | string
    orderId?: StringFilter<"Ticket"> | string
    agencyId?: StringFilter<"Ticket"> | string
    scheduleId?: StringFilter<"Ticket"> | string
    customerId?: StringFilter<"Ticket"> | string
    seatNo?: StringFilter<"Ticket"> | string
    amount?: FloatFilter<"Ticket"> | number
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    validatedById?: StringNullableFilter<"Ticket"> | string | null
    boardedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    qrCodeSignature?: StringFilter<"Ticket"> | string
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    agency?: XOR<AgencyRelationFilter, AgencyWhereInput>
    schedule?: XOR<RouteScheduleRelationFilter, RouteScheduleWhereInput>
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    validatedBy?: XOR<AgentNullableRelationFilter, AgentWhereInput> | null
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    orderId?: SortOrder
    agencyId?: SortOrder
    scheduleId?: SortOrder
    customerId?: SortOrder
    seatNo?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    validatedById?: SortOrderInput | SortOrder
    boardedAt?: SortOrderInput | SortOrder
    qrCodeSignature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    agency?: AgencyOrderByWithRelationInput
    schedule?: RouteScheduleOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    validatedBy?: AgentOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ticketId?: string
    orderId?: string
    qrCodeSignature?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    agencyId?: StringFilter<"Ticket"> | string
    scheduleId?: StringFilter<"Ticket"> | string
    customerId?: StringFilter<"Ticket"> | string
    seatNo?: StringFilter<"Ticket"> | string
    amount?: FloatFilter<"Ticket"> | number
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    validatedById?: StringNullableFilter<"Ticket"> | string | null
    boardedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    agency?: XOR<AgencyRelationFilter, AgencyWhereInput>
    schedule?: XOR<RouteScheduleRelationFilter, RouteScheduleWhereInput>
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    validatedBy?: XOR<AgentNullableRelationFilter, AgentWhereInput> | null
  }, "id" | "ticketId" | "orderId" | "qrCodeSignature">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    orderId?: SortOrder
    agencyId?: SortOrder
    scheduleId?: SortOrder
    customerId?: SortOrder
    seatNo?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    validatedById?: SortOrderInput | SortOrder
    boardedAt?: SortOrderInput | SortOrder
    qrCodeSignature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticket"> | string
    ticketId?: StringWithAggregatesFilter<"Ticket"> | string
    orderId?: StringWithAggregatesFilter<"Ticket"> | string
    agencyId?: StringWithAggregatesFilter<"Ticket"> | string
    scheduleId?: StringWithAggregatesFilter<"Ticket"> | string
    customerId?: StringWithAggregatesFilter<"Ticket"> | string
    seatNo?: StringWithAggregatesFilter<"Ticket"> | string
    amount?: FloatWithAggregatesFilter<"Ticket"> | number
    status?: EnumTicketStatusWithAggregatesFilter<"Ticket"> | $Enums.TicketStatus
    validatedById?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    boardedAt?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    qrCodeSignature?: StringWithAggregatesFilter<"Ticket"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type BotConfigWhereInput = {
    AND?: BotConfigWhereInput | BotConfigWhereInput[]
    OR?: BotConfigWhereInput[]
    NOT?: BotConfigWhereInput | BotConfigWhereInput[]
    id?: StringFilter<"BotConfig"> | string
    agencyId?: StringFilter<"BotConfig"> | string
    botPhoneNumber?: StringFilter<"BotConfig"> | string
    welcomeMessage?: StringFilter<"BotConfig"> | string
    status?: StringFilter<"BotConfig"> | string
    updatedAt?: DateTimeFilter<"BotConfig"> | Date | string
    agency?: XOR<AgencyRelationFilter, AgencyWhereInput>
    rules?: BotRuleListRelationFilter
  }

  export type BotConfigOrderByWithRelationInput = {
    id?: SortOrder
    agencyId?: SortOrder
    botPhoneNumber?: SortOrder
    welcomeMessage?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    agency?: AgencyOrderByWithRelationInput
    rules?: BotRuleOrderByRelationAggregateInput
  }

  export type BotConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    agencyId?: string
    AND?: BotConfigWhereInput | BotConfigWhereInput[]
    OR?: BotConfigWhereInput[]
    NOT?: BotConfigWhereInput | BotConfigWhereInput[]
    botPhoneNumber?: StringFilter<"BotConfig"> | string
    welcomeMessage?: StringFilter<"BotConfig"> | string
    status?: StringFilter<"BotConfig"> | string
    updatedAt?: DateTimeFilter<"BotConfig"> | Date | string
    agency?: XOR<AgencyRelationFilter, AgencyWhereInput>
    rules?: BotRuleListRelationFilter
  }, "id" | "agencyId">

  export type BotConfigOrderByWithAggregationInput = {
    id?: SortOrder
    agencyId?: SortOrder
    botPhoneNumber?: SortOrder
    welcomeMessage?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    _count?: BotConfigCountOrderByAggregateInput
    _max?: BotConfigMaxOrderByAggregateInput
    _min?: BotConfigMinOrderByAggregateInput
  }

  export type BotConfigScalarWhereWithAggregatesInput = {
    AND?: BotConfigScalarWhereWithAggregatesInput | BotConfigScalarWhereWithAggregatesInput[]
    OR?: BotConfigScalarWhereWithAggregatesInput[]
    NOT?: BotConfigScalarWhereWithAggregatesInput | BotConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BotConfig"> | string
    agencyId?: StringWithAggregatesFilter<"BotConfig"> | string
    botPhoneNumber?: StringWithAggregatesFilter<"BotConfig"> | string
    welcomeMessage?: StringWithAggregatesFilter<"BotConfig"> | string
    status?: StringWithAggregatesFilter<"BotConfig"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"BotConfig"> | Date | string
  }

  export type BotRuleWhereInput = {
    AND?: BotRuleWhereInput | BotRuleWhereInput[]
    OR?: BotRuleWhereInput[]
    NOT?: BotRuleWhereInput | BotRuleWhereInput[]
    id?: StringFilter<"BotRule"> | string
    botConfigId?: StringFilter<"BotRule"> | string
    keyword?: StringFilter<"BotRule"> | string
    responseType?: EnumResponseTypeFilter<"BotRule"> | $Enums.ResponseType
    replyTemplate?: StringFilter<"BotRule"> | string
    isActive?: BoolFilter<"BotRule"> | boolean
    createdAt?: DateTimeFilter<"BotRule"> | Date | string
    botConfig?: XOR<BotConfigRelationFilter, BotConfigWhereInput>
  }

  export type BotRuleOrderByWithRelationInput = {
    id?: SortOrder
    botConfigId?: SortOrder
    keyword?: SortOrder
    responseType?: SortOrder
    replyTemplate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    botConfig?: BotConfigOrderByWithRelationInput
  }

  export type BotRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BotRuleWhereInput | BotRuleWhereInput[]
    OR?: BotRuleWhereInput[]
    NOT?: BotRuleWhereInput | BotRuleWhereInput[]
    botConfigId?: StringFilter<"BotRule"> | string
    keyword?: StringFilter<"BotRule"> | string
    responseType?: EnumResponseTypeFilter<"BotRule"> | $Enums.ResponseType
    replyTemplate?: StringFilter<"BotRule"> | string
    isActive?: BoolFilter<"BotRule"> | boolean
    createdAt?: DateTimeFilter<"BotRule"> | Date | string
    botConfig?: XOR<BotConfigRelationFilter, BotConfigWhereInput>
  }, "id">

  export type BotRuleOrderByWithAggregationInput = {
    id?: SortOrder
    botConfigId?: SortOrder
    keyword?: SortOrder
    responseType?: SortOrder
    replyTemplate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: BotRuleCountOrderByAggregateInput
    _max?: BotRuleMaxOrderByAggregateInput
    _min?: BotRuleMinOrderByAggregateInput
  }

  export type BotRuleScalarWhereWithAggregatesInput = {
    AND?: BotRuleScalarWhereWithAggregatesInput | BotRuleScalarWhereWithAggregatesInput[]
    OR?: BotRuleScalarWhereWithAggregatesInput[]
    NOT?: BotRuleScalarWhereWithAggregatesInput | BotRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BotRule"> | string
    botConfigId?: StringWithAggregatesFilter<"BotRule"> | string
    keyword?: StringWithAggregatesFilter<"BotRule"> | string
    responseType?: EnumResponseTypeWithAggregatesFilter<"BotRule"> | $Enums.ResponseType
    replyTemplate?: StringWithAggregatesFilter<"BotRule"> | string
    isActive?: BoolWithAggregatesFilter<"BotRule"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"BotRule"> | Date | string
  }

  export type AgencyCreateInput = {
    id?: string
    name: string
    agencyCode: string
    hqLocation: string
    activeFleetCount: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: RouteScheduleCreateNestedManyWithoutAgencyInput
    tickets?: TicketCreateNestedManyWithoutAgencyInput
    agents?: AgentCreateNestedManyWithoutAgencyInput
    botConfig?: BotConfigCreateNestedOneWithoutAgencyInput
  }

  export type AgencyUncheckedCreateInput = {
    id?: string
    name: string
    agencyCode: string
    hqLocation: string
    activeFleetCount: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: RouteScheduleUncheckedCreateNestedManyWithoutAgencyInput
    tickets?: TicketUncheckedCreateNestedManyWithoutAgencyInput
    agents?: AgentUncheckedCreateNestedManyWithoutAgencyInput
    botConfig?: BotConfigUncheckedCreateNestedOneWithoutAgencyInput
  }

  export type AgencyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    agencyCode?: StringFieldUpdateOperationsInput | string
    hqLocation?: StringFieldUpdateOperationsInput | string
    activeFleetCount?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: RouteScheduleUpdateManyWithoutAgencyNestedInput
    tickets?: TicketUpdateManyWithoutAgencyNestedInput
    agents?: AgentUpdateManyWithoutAgencyNestedInput
    botConfig?: BotConfigUpdateOneWithoutAgencyNestedInput
  }

  export type AgencyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    agencyCode?: StringFieldUpdateOperationsInput | string
    hqLocation?: StringFieldUpdateOperationsInput | string
    activeFleetCount?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: RouteScheduleUncheckedUpdateManyWithoutAgencyNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutAgencyNestedInput
    agents?: AgentUncheckedUpdateManyWithoutAgencyNestedInput
    botConfig?: BotConfigUncheckedUpdateOneWithoutAgencyNestedInput
  }

  export type AgencyCreateManyInput = {
    id?: string
    name: string
    agencyCode: string
    hqLocation: string
    activeFleetCount: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgencyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    agencyCode?: StringFieldUpdateOperationsInput | string
    hqLocation?: StringFieldUpdateOperationsInput | string
    activeFleetCount?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    agencyCode?: StringFieldUpdateOperationsInput | string
    hqLocation?: StringFieldUpdateOperationsInput | string
    activeFleetCount?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentCreateInput = {
    id?: string
    agentCode: string
    name: string
    email: string
    password: string
    phone: string
    role: string
    station: string
    shiftStatus?: $Enums.ShiftStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    agency: AgencyCreateNestedOneWithoutAgentsInput
    scannedTickets?: TicketCreateNestedManyWithoutValidatedByInput
  }

  export type AgentUncheckedCreateInput = {
    id?: string
    agencyId: string
    agentCode: string
    name: string
    email: string
    password: string
    phone: string
    role: string
    station: string
    shiftStatus?: $Enums.ShiftStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    scannedTickets?: TicketUncheckedCreateNestedManyWithoutValidatedByInput
  }

  export type AgentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    station?: StringFieldUpdateOperationsInput | string
    shiftStatus?: EnumShiftStatusFieldUpdateOperationsInput | $Enums.ShiftStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencyUpdateOneRequiredWithoutAgentsNestedInput
    scannedTickets?: TicketUpdateManyWithoutValidatedByNestedInput
  }

  export type AgentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    agentCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    station?: StringFieldUpdateOperationsInput | string
    shiftStatus?: EnumShiftStatusFieldUpdateOperationsInput | $Enums.ShiftStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scannedTickets?: TicketUncheckedUpdateManyWithoutValidatedByNestedInput
  }

  export type AgentCreateManyInput = {
    id?: string
    agencyId: string
    agentCode: string
    name: string
    email: string
    password: string
    phone: string
    role: string
    station: string
    shiftStatus?: $Enums.ShiftStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    station?: StringFieldUpdateOperationsInput | string
    shiftStatus?: EnumShiftStatusFieldUpdateOperationsInput | $Enums.ShiftStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    agentCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    station?: StringFieldUpdateOperationsInput | string
    shiftStatus?: EnumShiftStatusFieldUpdateOperationsInput | $Enums.ShiftStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    whatsappPhone: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    whatsappPhone: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsappPhone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsappPhone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    whatsappPhone: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsappPhone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsappPhone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteScheduleCreateInput = {
    id?: string
    origin: string
    destination: string
    departureTime: string
    busNumber: string
    busName: string
    busType: $Enums.BusType
    totalSeats: number
    bookedSeats?: number
    pricePerSeat: number
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    agency: AgencyCreateNestedOneWithoutSchedulesInput
    tickets?: TicketCreateNestedManyWithoutScheduleInput
  }

  export type RouteScheduleUncheckedCreateInput = {
    id?: string
    agencyId: string
    origin: string
    destination: string
    departureTime: string
    busNumber: string
    busName: string
    busType: $Enums.BusType
    totalSeats: number
    bookedSeats?: number
    pricePerSeat: number
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type RouteScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureTime?: StringFieldUpdateOperationsInput | string
    busNumber?: StringFieldUpdateOperationsInput | string
    busName?: StringFieldUpdateOperationsInput | string
    busType?: EnumBusTypeFieldUpdateOperationsInput | $Enums.BusType
    totalSeats?: IntFieldUpdateOperationsInput | number
    bookedSeats?: IntFieldUpdateOperationsInput | number
    pricePerSeat?: FloatFieldUpdateOperationsInput | number
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencyUpdateOneRequiredWithoutSchedulesNestedInput
    tickets?: TicketUpdateManyWithoutScheduleNestedInput
  }

  export type RouteScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureTime?: StringFieldUpdateOperationsInput | string
    busNumber?: StringFieldUpdateOperationsInput | string
    busName?: StringFieldUpdateOperationsInput | string
    busType?: EnumBusTypeFieldUpdateOperationsInput | $Enums.BusType
    totalSeats?: IntFieldUpdateOperationsInput | number
    bookedSeats?: IntFieldUpdateOperationsInput | number
    pricePerSeat?: FloatFieldUpdateOperationsInput | number
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type RouteScheduleCreateManyInput = {
    id?: string
    agencyId: string
    origin: string
    destination: string
    departureTime: string
    busNumber: string
    busName: string
    busType: $Enums.BusType
    totalSeats: number
    bookedSeats?: number
    pricePerSeat: number
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureTime?: StringFieldUpdateOperationsInput | string
    busNumber?: StringFieldUpdateOperationsInput | string
    busName?: StringFieldUpdateOperationsInput | string
    busType?: EnumBusTypeFieldUpdateOperationsInput | $Enums.BusType
    totalSeats?: IntFieldUpdateOperationsInput | number
    bookedSeats?: IntFieldUpdateOperationsInput | number
    pricePerSeat?: FloatFieldUpdateOperationsInput | number
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureTime?: StringFieldUpdateOperationsInput | string
    busNumber?: StringFieldUpdateOperationsInput | string
    busName?: StringFieldUpdateOperationsInput | string
    busType?: EnumBusTypeFieldUpdateOperationsInput | $Enums.BusType
    totalSeats?: IntFieldUpdateOperationsInput | number
    bookedSeats?: IntFieldUpdateOperationsInput | number
    pricePerSeat?: FloatFieldUpdateOperationsInput | number
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    id?: string
    ticketId: string
    orderId: string
    seatNo: string
    amount: number
    status?: $Enums.TicketStatus
    boardedAt?: Date | string | null
    qrCodeSignature: string
    createdAt?: Date | string
    updatedAt?: Date | string
    agency: AgencyCreateNestedOneWithoutTicketsInput
    schedule: RouteScheduleCreateNestedOneWithoutTicketsInput
    customer: CustomerCreateNestedOneWithoutTicketsInput
    validatedBy?: AgentCreateNestedOneWithoutScannedTicketsInput
  }

  export type TicketUncheckedCreateInput = {
    id?: string
    ticketId: string
    orderId: string
    agencyId: string
    scheduleId: string
    customerId: string
    seatNo: string
    amount: number
    status?: $Enums.TicketStatus
    validatedById?: string | null
    boardedAt?: Date | string | null
    qrCodeSignature: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    seatNo?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    boardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCodeSignature?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencyUpdateOneRequiredWithoutTicketsNestedInput
    schedule?: RouteScheduleUpdateOneRequiredWithoutTicketsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutTicketsNestedInput
    validatedBy?: AgentUpdateOneWithoutScannedTicketsNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    seatNo?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    boardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCodeSignature?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyInput = {
    id?: string
    ticketId: string
    orderId: string
    agencyId: string
    scheduleId: string
    customerId: string
    seatNo: string
    amount: number
    status?: $Enums.TicketStatus
    validatedById?: string | null
    boardedAt?: Date | string | null
    qrCodeSignature: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    seatNo?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    boardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCodeSignature?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    seatNo?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    boardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCodeSignature?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BotConfigCreateInput = {
    id?: string
    botPhoneNumber: string
    welcomeMessage: string
    status?: string
    updatedAt?: Date | string
    agency: AgencyCreateNestedOneWithoutBotConfigInput
    rules?: BotRuleCreateNestedManyWithoutBotConfigInput
  }

  export type BotConfigUncheckedCreateInput = {
    id?: string
    agencyId: string
    botPhoneNumber: string
    welcomeMessage: string
    status?: string
    updatedAt?: Date | string
    rules?: BotRuleUncheckedCreateNestedManyWithoutBotConfigInput
  }

  export type BotConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    botPhoneNumber?: StringFieldUpdateOperationsInput | string
    welcomeMessage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencyUpdateOneRequiredWithoutBotConfigNestedInput
    rules?: BotRuleUpdateManyWithoutBotConfigNestedInput
  }

  export type BotConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    botPhoneNumber?: StringFieldUpdateOperationsInput | string
    welcomeMessage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rules?: BotRuleUncheckedUpdateManyWithoutBotConfigNestedInput
  }

  export type BotConfigCreateManyInput = {
    id?: string
    agencyId: string
    botPhoneNumber: string
    welcomeMessage: string
    status?: string
    updatedAt?: Date | string
  }

  export type BotConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    botPhoneNumber?: StringFieldUpdateOperationsInput | string
    welcomeMessage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BotConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    botPhoneNumber?: StringFieldUpdateOperationsInput | string
    welcomeMessage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BotRuleCreateInput = {
    id?: string
    keyword: string
    responseType: $Enums.ResponseType
    replyTemplate: string
    isActive?: boolean
    createdAt?: Date | string
    botConfig: BotConfigCreateNestedOneWithoutRulesInput
  }

  export type BotRuleUncheckedCreateInput = {
    id?: string
    botConfigId: string
    keyword: string
    responseType: $Enums.ResponseType
    replyTemplate: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type BotRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    responseType?: EnumResponseTypeFieldUpdateOperationsInput | $Enums.ResponseType
    replyTemplate?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    botConfig?: BotConfigUpdateOneRequiredWithoutRulesNestedInput
  }

  export type BotRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    botConfigId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    responseType?: EnumResponseTypeFieldUpdateOperationsInput | $Enums.ResponseType
    replyTemplate?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BotRuleCreateManyInput = {
    id?: string
    botConfigId: string
    keyword: string
    responseType: $Enums.ResponseType
    replyTemplate: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type BotRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    responseType?: EnumResponseTypeFieldUpdateOperationsInput | $Enums.ResponseType
    replyTemplate?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BotRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    botConfigId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    responseType?: EnumResponseTypeFieldUpdateOperationsInput | $Enums.ResponseType
    replyTemplate?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type RouteScheduleListRelationFilter = {
    every?: RouteScheduleWhereInput
    some?: RouteScheduleWhereInput
    none?: RouteScheduleWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type AgentListRelationFilter = {
    every?: AgentWhereInput
    some?: AgentWhereInput
    none?: AgentWhereInput
  }

  export type BotConfigNullableRelationFilter = {
    is?: BotConfigWhereInput | null
    isNot?: BotConfigWhereInput | null
  }

  export type RouteScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgencyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    agencyCode?: SortOrder
    hqLocation?: SortOrder
    activeFleetCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgencyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    agencyCode?: SortOrder
    hqLocation?: SortOrder
    activeFleetCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgencyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    agencyCode?: SortOrder
    hqLocation?: SortOrder
    activeFleetCount?: SortOrder
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

  export type EnumShiftStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftStatus | EnumShiftStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftStatus[] | ListEnumShiftStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftStatus[] | ListEnumShiftStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftStatusFilter<$PrismaModel> | $Enums.ShiftStatus
  }

  export type AgencyRelationFilter = {
    is?: AgencyWhereInput
    isNot?: AgencyWhereInput
  }

  export type AgentCountOrderByAggregateInput = {
    id?: SortOrder
    agencyId?: SortOrder
    agentCode?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    station?: SortOrder
    shiftStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentMaxOrderByAggregateInput = {
    id?: SortOrder
    agencyId?: SortOrder
    agentCode?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    station?: SortOrder
    shiftStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentMinOrderByAggregateInput = {
    id?: SortOrder
    agencyId?: SortOrder
    agentCode?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    station?: SortOrder
    shiftStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumShiftStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftStatus | EnumShiftStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftStatus[] | ListEnumShiftStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftStatus[] | ListEnumShiftStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftStatusWithAggregatesFilter<$PrismaModel> | $Enums.ShiftStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShiftStatusFilter<$PrismaModel>
    _max?: NestedEnumShiftStatusFilter<$PrismaModel>
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    whatsappPhone?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    whatsappPhone?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    whatsappPhone?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumBusTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BusType | EnumBusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BusType[] | ListEnumBusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusType[] | ListEnumBusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBusTypeFilter<$PrismaModel> | $Enums.BusType
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumScheduleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleStatusFilter<$PrismaModel> | $Enums.ScheduleStatus
  }

  export type RouteScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    agencyId?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    departureTime?: SortOrder
    busNumber?: SortOrder
    busName?: SortOrder
    busType?: SortOrder
    totalSeats?: SortOrder
    bookedSeats?: SortOrder
    pricePerSeat?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RouteScheduleAvgOrderByAggregateInput = {
    totalSeats?: SortOrder
    bookedSeats?: SortOrder
    pricePerSeat?: SortOrder
  }

  export type RouteScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    agencyId?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    departureTime?: SortOrder
    busNumber?: SortOrder
    busName?: SortOrder
    busType?: SortOrder
    totalSeats?: SortOrder
    bookedSeats?: SortOrder
    pricePerSeat?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RouteScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    agencyId?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    departureTime?: SortOrder
    busNumber?: SortOrder
    busName?: SortOrder
    busType?: SortOrder
    totalSeats?: SortOrder
    bookedSeats?: SortOrder
    pricePerSeat?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RouteScheduleSumOrderByAggregateInput = {
    totalSeats?: SortOrder
    bookedSeats?: SortOrder
    pricePerSeat?: SortOrder
  }

  export type EnumBusTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusType | EnumBusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BusType[] | ListEnumBusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusType[] | ListEnumBusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBusTypeWithAggregatesFilter<$PrismaModel> | $Enums.BusType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBusTypeFilter<$PrismaModel>
    _max?: NestedEnumBusTypeFilter<$PrismaModel>
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumScheduleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ScheduleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScheduleStatusFilter<$PrismaModel>
    _max?: NestedEnumScheduleStatusFilter<$PrismaModel>
  }

  export type EnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
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

  export type RouteScheduleRelationFilter = {
    is?: RouteScheduleWhereInput
    isNot?: RouteScheduleWhereInput
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type AgentNullableRelationFilter = {
    is?: AgentWhereInput | null
    isNot?: AgentWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    orderId?: SortOrder
    agencyId?: SortOrder
    scheduleId?: SortOrder
    customerId?: SortOrder
    seatNo?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    validatedById?: SortOrder
    boardedAt?: SortOrder
    qrCodeSignature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    orderId?: SortOrder
    agencyId?: SortOrder
    scheduleId?: SortOrder
    customerId?: SortOrder
    seatNo?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    validatedById?: SortOrder
    boardedAt?: SortOrder
    qrCodeSignature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    orderId?: SortOrder
    agencyId?: SortOrder
    scheduleId?: SortOrder
    customerId?: SortOrder
    seatNo?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    validatedById?: SortOrder
    boardedAt?: SortOrder
    qrCodeSignature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
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

  export type BotRuleListRelationFilter = {
    every?: BotRuleWhereInput
    some?: BotRuleWhereInput
    none?: BotRuleWhereInput
  }

  export type BotRuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BotConfigCountOrderByAggregateInput = {
    id?: SortOrder
    agencyId?: SortOrder
    botPhoneNumber?: SortOrder
    welcomeMessage?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type BotConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    agencyId?: SortOrder
    botPhoneNumber?: SortOrder
    welcomeMessage?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type BotConfigMinOrderByAggregateInput = {
    id?: SortOrder
    agencyId?: SortOrder
    botPhoneNumber?: SortOrder
    welcomeMessage?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumResponseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ResponseType | EnumResponseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResponseType[] | ListEnumResponseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResponseType[] | ListEnumResponseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResponseTypeFilter<$PrismaModel> | $Enums.ResponseType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BotConfigRelationFilter = {
    is?: BotConfigWhereInput
    isNot?: BotConfigWhereInput
  }

  export type BotRuleCountOrderByAggregateInput = {
    id?: SortOrder
    botConfigId?: SortOrder
    keyword?: SortOrder
    responseType?: SortOrder
    replyTemplate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type BotRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    botConfigId?: SortOrder
    keyword?: SortOrder
    responseType?: SortOrder
    replyTemplate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type BotRuleMinOrderByAggregateInput = {
    id?: SortOrder
    botConfigId?: SortOrder
    keyword?: SortOrder
    responseType?: SortOrder
    replyTemplate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumResponseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResponseType | EnumResponseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResponseType[] | ListEnumResponseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResponseType[] | ListEnumResponseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResponseTypeWithAggregatesFilter<$PrismaModel> | $Enums.ResponseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResponseTypeFilter<$PrismaModel>
    _max?: NestedEnumResponseTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RouteScheduleCreateNestedManyWithoutAgencyInput = {
    create?: XOR<RouteScheduleCreateWithoutAgencyInput, RouteScheduleUncheckedCreateWithoutAgencyInput> | RouteScheduleCreateWithoutAgencyInput[] | RouteScheduleUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: RouteScheduleCreateOrConnectWithoutAgencyInput | RouteScheduleCreateOrConnectWithoutAgencyInput[]
    createMany?: RouteScheduleCreateManyAgencyInputEnvelope
    connect?: RouteScheduleWhereUniqueInput | RouteScheduleWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutAgencyInput = {
    create?: XOR<TicketCreateWithoutAgencyInput, TicketUncheckedCreateWithoutAgencyInput> | TicketCreateWithoutAgencyInput[] | TicketUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAgencyInput | TicketCreateOrConnectWithoutAgencyInput[]
    createMany?: TicketCreateManyAgencyInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type AgentCreateNestedManyWithoutAgencyInput = {
    create?: XOR<AgentCreateWithoutAgencyInput, AgentUncheckedCreateWithoutAgencyInput> | AgentCreateWithoutAgencyInput[] | AgentUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutAgencyInput | AgentCreateOrConnectWithoutAgencyInput[]
    createMany?: AgentCreateManyAgencyInputEnvelope
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
  }

  export type BotConfigCreateNestedOneWithoutAgencyInput = {
    create?: XOR<BotConfigCreateWithoutAgencyInput, BotConfigUncheckedCreateWithoutAgencyInput>
    connectOrCreate?: BotConfigCreateOrConnectWithoutAgencyInput
    connect?: BotConfigWhereUniqueInput
  }

  export type RouteScheduleUncheckedCreateNestedManyWithoutAgencyInput = {
    create?: XOR<RouteScheduleCreateWithoutAgencyInput, RouteScheduleUncheckedCreateWithoutAgencyInput> | RouteScheduleCreateWithoutAgencyInput[] | RouteScheduleUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: RouteScheduleCreateOrConnectWithoutAgencyInput | RouteScheduleCreateOrConnectWithoutAgencyInput[]
    createMany?: RouteScheduleCreateManyAgencyInputEnvelope
    connect?: RouteScheduleWhereUniqueInput | RouteScheduleWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutAgencyInput = {
    create?: XOR<TicketCreateWithoutAgencyInput, TicketUncheckedCreateWithoutAgencyInput> | TicketCreateWithoutAgencyInput[] | TicketUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAgencyInput | TicketCreateOrConnectWithoutAgencyInput[]
    createMany?: TicketCreateManyAgencyInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type AgentUncheckedCreateNestedManyWithoutAgencyInput = {
    create?: XOR<AgentCreateWithoutAgencyInput, AgentUncheckedCreateWithoutAgencyInput> | AgentCreateWithoutAgencyInput[] | AgentUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutAgencyInput | AgentCreateOrConnectWithoutAgencyInput[]
    createMany?: AgentCreateManyAgencyInputEnvelope
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
  }

  export type BotConfigUncheckedCreateNestedOneWithoutAgencyInput = {
    create?: XOR<BotConfigCreateWithoutAgencyInput, BotConfigUncheckedCreateWithoutAgencyInput>
    connectOrCreate?: BotConfigCreateOrConnectWithoutAgencyInput
    connect?: BotConfigWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RouteScheduleUpdateManyWithoutAgencyNestedInput = {
    create?: XOR<RouteScheduleCreateWithoutAgencyInput, RouteScheduleUncheckedCreateWithoutAgencyInput> | RouteScheduleCreateWithoutAgencyInput[] | RouteScheduleUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: RouteScheduleCreateOrConnectWithoutAgencyInput | RouteScheduleCreateOrConnectWithoutAgencyInput[]
    upsert?: RouteScheduleUpsertWithWhereUniqueWithoutAgencyInput | RouteScheduleUpsertWithWhereUniqueWithoutAgencyInput[]
    createMany?: RouteScheduleCreateManyAgencyInputEnvelope
    set?: RouteScheduleWhereUniqueInput | RouteScheduleWhereUniqueInput[]
    disconnect?: RouteScheduleWhereUniqueInput | RouteScheduleWhereUniqueInput[]
    delete?: RouteScheduleWhereUniqueInput | RouteScheduleWhereUniqueInput[]
    connect?: RouteScheduleWhereUniqueInput | RouteScheduleWhereUniqueInput[]
    update?: RouteScheduleUpdateWithWhereUniqueWithoutAgencyInput | RouteScheduleUpdateWithWhereUniqueWithoutAgencyInput[]
    updateMany?: RouteScheduleUpdateManyWithWhereWithoutAgencyInput | RouteScheduleUpdateManyWithWhereWithoutAgencyInput[]
    deleteMany?: RouteScheduleScalarWhereInput | RouteScheduleScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutAgencyNestedInput = {
    create?: XOR<TicketCreateWithoutAgencyInput, TicketUncheckedCreateWithoutAgencyInput> | TicketCreateWithoutAgencyInput[] | TicketUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAgencyInput | TicketCreateOrConnectWithoutAgencyInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutAgencyInput | TicketUpsertWithWhereUniqueWithoutAgencyInput[]
    createMany?: TicketCreateManyAgencyInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutAgencyInput | TicketUpdateWithWhereUniqueWithoutAgencyInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutAgencyInput | TicketUpdateManyWithWhereWithoutAgencyInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type AgentUpdateManyWithoutAgencyNestedInput = {
    create?: XOR<AgentCreateWithoutAgencyInput, AgentUncheckedCreateWithoutAgencyInput> | AgentCreateWithoutAgencyInput[] | AgentUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutAgencyInput | AgentCreateOrConnectWithoutAgencyInput[]
    upsert?: AgentUpsertWithWhereUniqueWithoutAgencyInput | AgentUpsertWithWhereUniqueWithoutAgencyInput[]
    createMany?: AgentCreateManyAgencyInputEnvelope
    set?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    disconnect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    delete?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    update?: AgentUpdateWithWhereUniqueWithoutAgencyInput | AgentUpdateWithWhereUniqueWithoutAgencyInput[]
    updateMany?: AgentUpdateManyWithWhereWithoutAgencyInput | AgentUpdateManyWithWhereWithoutAgencyInput[]
    deleteMany?: AgentScalarWhereInput | AgentScalarWhereInput[]
  }

  export type BotConfigUpdateOneWithoutAgencyNestedInput = {
    create?: XOR<BotConfigCreateWithoutAgencyInput, BotConfigUncheckedCreateWithoutAgencyInput>
    connectOrCreate?: BotConfigCreateOrConnectWithoutAgencyInput
    upsert?: BotConfigUpsertWithoutAgencyInput
    disconnect?: BotConfigWhereInput | boolean
    delete?: BotConfigWhereInput | boolean
    connect?: BotConfigWhereUniqueInput
    update?: XOR<XOR<BotConfigUpdateToOneWithWhereWithoutAgencyInput, BotConfigUpdateWithoutAgencyInput>, BotConfigUncheckedUpdateWithoutAgencyInput>
  }

  export type RouteScheduleUncheckedUpdateManyWithoutAgencyNestedInput = {
    create?: XOR<RouteScheduleCreateWithoutAgencyInput, RouteScheduleUncheckedCreateWithoutAgencyInput> | RouteScheduleCreateWithoutAgencyInput[] | RouteScheduleUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: RouteScheduleCreateOrConnectWithoutAgencyInput | RouteScheduleCreateOrConnectWithoutAgencyInput[]
    upsert?: RouteScheduleUpsertWithWhereUniqueWithoutAgencyInput | RouteScheduleUpsertWithWhereUniqueWithoutAgencyInput[]
    createMany?: RouteScheduleCreateManyAgencyInputEnvelope
    set?: RouteScheduleWhereUniqueInput | RouteScheduleWhereUniqueInput[]
    disconnect?: RouteScheduleWhereUniqueInput | RouteScheduleWhereUniqueInput[]
    delete?: RouteScheduleWhereUniqueInput | RouteScheduleWhereUniqueInput[]
    connect?: RouteScheduleWhereUniqueInput | RouteScheduleWhereUniqueInput[]
    update?: RouteScheduleUpdateWithWhereUniqueWithoutAgencyInput | RouteScheduleUpdateWithWhereUniqueWithoutAgencyInput[]
    updateMany?: RouteScheduleUpdateManyWithWhereWithoutAgencyInput | RouteScheduleUpdateManyWithWhereWithoutAgencyInput[]
    deleteMany?: RouteScheduleScalarWhereInput | RouteScheduleScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutAgencyNestedInput = {
    create?: XOR<TicketCreateWithoutAgencyInput, TicketUncheckedCreateWithoutAgencyInput> | TicketCreateWithoutAgencyInput[] | TicketUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAgencyInput | TicketCreateOrConnectWithoutAgencyInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutAgencyInput | TicketUpsertWithWhereUniqueWithoutAgencyInput[]
    createMany?: TicketCreateManyAgencyInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutAgencyInput | TicketUpdateWithWhereUniqueWithoutAgencyInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutAgencyInput | TicketUpdateManyWithWhereWithoutAgencyInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type AgentUncheckedUpdateManyWithoutAgencyNestedInput = {
    create?: XOR<AgentCreateWithoutAgencyInput, AgentUncheckedCreateWithoutAgencyInput> | AgentCreateWithoutAgencyInput[] | AgentUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutAgencyInput | AgentCreateOrConnectWithoutAgencyInput[]
    upsert?: AgentUpsertWithWhereUniqueWithoutAgencyInput | AgentUpsertWithWhereUniqueWithoutAgencyInput[]
    createMany?: AgentCreateManyAgencyInputEnvelope
    set?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    disconnect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    delete?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    update?: AgentUpdateWithWhereUniqueWithoutAgencyInput | AgentUpdateWithWhereUniqueWithoutAgencyInput[]
    updateMany?: AgentUpdateManyWithWhereWithoutAgencyInput | AgentUpdateManyWithWhereWithoutAgencyInput[]
    deleteMany?: AgentScalarWhereInput | AgentScalarWhereInput[]
  }

  export type BotConfigUncheckedUpdateOneWithoutAgencyNestedInput = {
    create?: XOR<BotConfigCreateWithoutAgencyInput, BotConfigUncheckedCreateWithoutAgencyInput>
    connectOrCreate?: BotConfigCreateOrConnectWithoutAgencyInput
    upsert?: BotConfigUpsertWithoutAgencyInput
    disconnect?: BotConfigWhereInput | boolean
    delete?: BotConfigWhereInput | boolean
    connect?: BotConfigWhereUniqueInput
    update?: XOR<XOR<BotConfigUpdateToOneWithWhereWithoutAgencyInput, BotConfigUpdateWithoutAgencyInput>, BotConfigUncheckedUpdateWithoutAgencyInput>
  }

  export type AgencyCreateNestedOneWithoutAgentsInput = {
    create?: XOR<AgencyCreateWithoutAgentsInput, AgencyUncheckedCreateWithoutAgentsInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutAgentsInput
    connect?: AgencyWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutValidatedByInput = {
    create?: XOR<TicketCreateWithoutValidatedByInput, TicketUncheckedCreateWithoutValidatedByInput> | TicketCreateWithoutValidatedByInput[] | TicketUncheckedCreateWithoutValidatedByInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutValidatedByInput | TicketCreateOrConnectWithoutValidatedByInput[]
    createMany?: TicketCreateManyValidatedByInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutValidatedByInput = {
    create?: XOR<TicketCreateWithoutValidatedByInput, TicketUncheckedCreateWithoutValidatedByInput> | TicketCreateWithoutValidatedByInput[] | TicketUncheckedCreateWithoutValidatedByInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutValidatedByInput | TicketCreateOrConnectWithoutValidatedByInput[]
    createMany?: TicketCreateManyValidatedByInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type EnumShiftStatusFieldUpdateOperationsInput = {
    set?: $Enums.ShiftStatus
  }

  export type AgencyUpdateOneRequiredWithoutAgentsNestedInput = {
    create?: XOR<AgencyCreateWithoutAgentsInput, AgencyUncheckedCreateWithoutAgentsInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutAgentsInput
    upsert?: AgencyUpsertWithoutAgentsInput
    connect?: AgencyWhereUniqueInput
    update?: XOR<XOR<AgencyUpdateToOneWithWhereWithoutAgentsInput, AgencyUpdateWithoutAgentsInput>, AgencyUncheckedUpdateWithoutAgentsInput>
  }

  export type TicketUpdateManyWithoutValidatedByNestedInput = {
    create?: XOR<TicketCreateWithoutValidatedByInput, TicketUncheckedCreateWithoutValidatedByInput> | TicketCreateWithoutValidatedByInput[] | TicketUncheckedCreateWithoutValidatedByInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutValidatedByInput | TicketCreateOrConnectWithoutValidatedByInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutValidatedByInput | TicketUpsertWithWhereUniqueWithoutValidatedByInput[]
    createMany?: TicketCreateManyValidatedByInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutValidatedByInput | TicketUpdateWithWhereUniqueWithoutValidatedByInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutValidatedByInput | TicketUpdateManyWithWhereWithoutValidatedByInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutValidatedByNestedInput = {
    create?: XOR<TicketCreateWithoutValidatedByInput, TicketUncheckedCreateWithoutValidatedByInput> | TicketCreateWithoutValidatedByInput[] | TicketUncheckedCreateWithoutValidatedByInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutValidatedByInput | TicketCreateOrConnectWithoutValidatedByInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutValidatedByInput | TicketUpsertWithWhereUniqueWithoutValidatedByInput[]
    createMany?: TicketCreateManyValidatedByInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutValidatedByInput | TicketUpdateWithWhereUniqueWithoutValidatedByInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutValidatedByInput | TicketUpdateManyWithWhereWithoutValidatedByInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput> | TicketCreateWithoutCustomerInput[] | TicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCustomerInput | TicketCreateOrConnectWithoutCustomerInput[]
    createMany?: TicketCreateManyCustomerInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput> | TicketCreateWithoutCustomerInput[] | TicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCustomerInput | TicketCreateOrConnectWithoutCustomerInput[]
    createMany?: TicketCreateManyCustomerInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput> | TicketCreateWithoutCustomerInput[] | TicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCustomerInput | TicketCreateOrConnectWithoutCustomerInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCustomerInput | TicketUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TicketCreateManyCustomerInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCustomerInput | TicketUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCustomerInput | TicketUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput> | TicketCreateWithoutCustomerInput[] | TicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCustomerInput | TicketCreateOrConnectWithoutCustomerInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCustomerInput | TicketUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TicketCreateManyCustomerInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCustomerInput | TicketUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCustomerInput | TicketUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type AgencyCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<AgencyCreateWithoutSchedulesInput, AgencyUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutSchedulesInput
    connect?: AgencyWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutScheduleInput = {
    create?: XOR<TicketCreateWithoutScheduleInput, TicketUncheckedCreateWithoutScheduleInput> | TicketCreateWithoutScheduleInput[] | TicketUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutScheduleInput | TicketCreateOrConnectWithoutScheduleInput[]
    createMany?: TicketCreateManyScheduleInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<TicketCreateWithoutScheduleInput, TicketUncheckedCreateWithoutScheduleInput> | TicketCreateWithoutScheduleInput[] | TicketUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutScheduleInput | TicketCreateOrConnectWithoutScheduleInput[]
    createMany?: TicketCreateManyScheduleInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type EnumBusTypeFieldUpdateOperationsInput = {
    set?: $Enums.BusType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumScheduleStatusFieldUpdateOperationsInput = {
    set?: $Enums.ScheduleStatus
  }

  export type AgencyUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<AgencyCreateWithoutSchedulesInput, AgencyUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutSchedulesInput
    upsert?: AgencyUpsertWithoutSchedulesInput
    connect?: AgencyWhereUniqueInput
    update?: XOR<XOR<AgencyUpdateToOneWithWhereWithoutSchedulesInput, AgencyUpdateWithoutSchedulesInput>, AgencyUncheckedUpdateWithoutSchedulesInput>
  }

  export type TicketUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<TicketCreateWithoutScheduleInput, TicketUncheckedCreateWithoutScheduleInput> | TicketCreateWithoutScheduleInput[] | TicketUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutScheduleInput | TicketCreateOrConnectWithoutScheduleInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutScheduleInput | TicketUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: TicketCreateManyScheduleInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutScheduleInput | TicketUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutScheduleInput | TicketUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<TicketCreateWithoutScheduleInput, TicketUncheckedCreateWithoutScheduleInput> | TicketCreateWithoutScheduleInput[] | TicketUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutScheduleInput | TicketCreateOrConnectWithoutScheduleInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutScheduleInput | TicketUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: TicketCreateManyScheduleInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutScheduleInput | TicketUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutScheduleInput | TicketUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type AgencyCreateNestedOneWithoutTicketsInput = {
    create?: XOR<AgencyCreateWithoutTicketsInput, AgencyUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutTicketsInput
    connect?: AgencyWhereUniqueInput
  }

  export type RouteScheduleCreateNestedOneWithoutTicketsInput = {
    create?: XOR<RouteScheduleCreateWithoutTicketsInput, RouteScheduleUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: RouteScheduleCreateOrConnectWithoutTicketsInput
    connect?: RouteScheduleWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutTicketsInput = {
    create?: XOR<CustomerCreateWithoutTicketsInput, CustomerUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTicketsInput
    connect?: CustomerWhereUniqueInput
  }

  export type AgentCreateNestedOneWithoutScannedTicketsInput = {
    create?: XOR<AgentCreateWithoutScannedTicketsInput, AgentUncheckedCreateWithoutScannedTicketsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutScannedTicketsInput
    connect?: AgentWhereUniqueInput
  }

  export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AgencyUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<AgencyCreateWithoutTicketsInput, AgencyUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutTicketsInput
    upsert?: AgencyUpsertWithoutTicketsInput
    connect?: AgencyWhereUniqueInput
    update?: XOR<XOR<AgencyUpdateToOneWithWhereWithoutTicketsInput, AgencyUpdateWithoutTicketsInput>, AgencyUncheckedUpdateWithoutTicketsInput>
  }

  export type RouteScheduleUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<RouteScheduleCreateWithoutTicketsInput, RouteScheduleUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: RouteScheduleCreateOrConnectWithoutTicketsInput
    upsert?: RouteScheduleUpsertWithoutTicketsInput
    connect?: RouteScheduleWhereUniqueInput
    update?: XOR<XOR<RouteScheduleUpdateToOneWithWhereWithoutTicketsInput, RouteScheduleUpdateWithoutTicketsInput>, RouteScheduleUncheckedUpdateWithoutTicketsInput>
  }

  export type CustomerUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<CustomerCreateWithoutTicketsInput, CustomerUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTicketsInput
    upsert?: CustomerUpsertWithoutTicketsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutTicketsInput, CustomerUpdateWithoutTicketsInput>, CustomerUncheckedUpdateWithoutTicketsInput>
  }

  export type AgentUpdateOneWithoutScannedTicketsNestedInput = {
    create?: XOR<AgentCreateWithoutScannedTicketsInput, AgentUncheckedCreateWithoutScannedTicketsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutScannedTicketsInput
    upsert?: AgentUpsertWithoutScannedTicketsInput
    disconnect?: AgentWhereInput | boolean
    delete?: AgentWhereInput | boolean
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutScannedTicketsInput, AgentUpdateWithoutScannedTicketsInput>, AgentUncheckedUpdateWithoutScannedTicketsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AgencyCreateNestedOneWithoutBotConfigInput = {
    create?: XOR<AgencyCreateWithoutBotConfigInput, AgencyUncheckedCreateWithoutBotConfigInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutBotConfigInput
    connect?: AgencyWhereUniqueInput
  }

  export type BotRuleCreateNestedManyWithoutBotConfigInput = {
    create?: XOR<BotRuleCreateWithoutBotConfigInput, BotRuleUncheckedCreateWithoutBotConfigInput> | BotRuleCreateWithoutBotConfigInput[] | BotRuleUncheckedCreateWithoutBotConfigInput[]
    connectOrCreate?: BotRuleCreateOrConnectWithoutBotConfigInput | BotRuleCreateOrConnectWithoutBotConfigInput[]
    createMany?: BotRuleCreateManyBotConfigInputEnvelope
    connect?: BotRuleWhereUniqueInput | BotRuleWhereUniqueInput[]
  }

  export type BotRuleUncheckedCreateNestedManyWithoutBotConfigInput = {
    create?: XOR<BotRuleCreateWithoutBotConfigInput, BotRuleUncheckedCreateWithoutBotConfigInput> | BotRuleCreateWithoutBotConfigInput[] | BotRuleUncheckedCreateWithoutBotConfigInput[]
    connectOrCreate?: BotRuleCreateOrConnectWithoutBotConfigInput | BotRuleCreateOrConnectWithoutBotConfigInput[]
    createMany?: BotRuleCreateManyBotConfigInputEnvelope
    connect?: BotRuleWhereUniqueInput | BotRuleWhereUniqueInput[]
  }

  export type AgencyUpdateOneRequiredWithoutBotConfigNestedInput = {
    create?: XOR<AgencyCreateWithoutBotConfigInput, AgencyUncheckedCreateWithoutBotConfigInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutBotConfigInput
    upsert?: AgencyUpsertWithoutBotConfigInput
    connect?: AgencyWhereUniqueInput
    update?: XOR<XOR<AgencyUpdateToOneWithWhereWithoutBotConfigInput, AgencyUpdateWithoutBotConfigInput>, AgencyUncheckedUpdateWithoutBotConfigInput>
  }

  export type BotRuleUpdateManyWithoutBotConfigNestedInput = {
    create?: XOR<BotRuleCreateWithoutBotConfigInput, BotRuleUncheckedCreateWithoutBotConfigInput> | BotRuleCreateWithoutBotConfigInput[] | BotRuleUncheckedCreateWithoutBotConfigInput[]
    connectOrCreate?: BotRuleCreateOrConnectWithoutBotConfigInput | BotRuleCreateOrConnectWithoutBotConfigInput[]
    upsert?: BotRuleUpsertWithWhereUniqueWithoutBotConfigInput | BotRuleUpsertWithWhereUniqueWithoutBotConfigInput[]
    createMany?: BotRuleCreateManyBotConfigInputEnvelope
    set?: BotRuleWhereUniqueInput | BotRuleWhereUniqueInput[]
    disconnect?: BotRuleWhereUniqueInput | BotRuleWhereUniqueInput[]
    delete?: BotRuleWhereUniqueInput | BotRuleWhereUniqueInput[]
    connect?: BotRuleWhereUniqueInput | BotRuleWhereUniqueInput[]
    update?: BotRuleUpdateWithWhereUniqueWithoutBotConfigInput | BotRuleUpdateWithWhereUniqueWithoutBotConfigInput[]
    updateMany?: BotRuleUpdateManyWithWhereWithoutBotConfigInput | BotRuleUpdateManyWithWhereWithoutBotConfigInput[]
    deleteMany?: BotRuleScalarWhereInput | BotRuleScalarWhereInput[]
  }

  export type BotRuleUncheckedUpdateManyWithoutBotConfigNestedInput = {
    create?: XOR<BotRuleCreateWithoutBotConfigInput, BotRuleUncheckedCreateWithoutBotConfigInput> | BotRuleCreateWithoutBotConfigInput[] | BotRuleUncheckedCreateWithoutBotConfigInput[]
    connectOrCreate?: BotRuleCreateOrConnectWithoutBotConfigInput | BotRuleCreateOrConnectWithoutBotConfigInput[]
    upsert?: BotRuleUpsertWithWhereUniqueWithoutBotConfigInput | BotRuleUpsertWithWhereUniqueWithoutBotConfigInput[]
    createMany?: BotRuleCreateManyBotConfigInputEnvelope
    set?: BotRuleWhereUniqueInput | BotRuleWhereUniqueInput[]
    disconnect?: BotRuleWhereUniqueInput | BotRuleWhereUniqueInput[]
    delete?: BotRuleWhereUniqueInput | BotRuleWhereUniqueInput[]
    connect?: BotRuleWhereUniqueInput | BotRuleWhereUniqueInput[]
    update?: BotRuleUpdateWithWhereUniqueWithoutBotConfigInput | BotRuleUpdateWithWhereUniqueWithoutBotConfigInput[]
    updateMany?: BotRuleUpdateManyWithWhereWithoutBotConfigInput | BotRuleUpdateManyWithWhereWithoutBotConfigInput[]
    deleteMany?: BotRuleScalarWhereInput | BotRuleScalarWhereInput[]
  }

  export type BotConfigCreateNestedOneWithoutRulesInput = {
    create?: XOR<BotConfigCreateWithoutRulesInput, BotConfigUncheckedCreateWithoutRulesInput>
    connectOrCreate?: BotConfigCreateOrConnectWithoutRulesInput
    connect?: BotConfigWhereUniqueInput
  }

  export type EnumResponseTypeFieldUpdateOperationsInput = {
    set?: $Enums.ResponseType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BotConfigUpdateOneRequiredWithoutRulesNestedInput = {
    create?: XOR<BotConfigCreateWithoutRulesInput, BotConfigUncheckedCreateWithoutRulesInput>
    connectOrCreate?: BotConfigCreateOrConnectWithoutRulesInput
    upsert?: BotConfigUpsertWithoutRulesInput
    connect?: BotConfigWhereUniqueInput
    update?: XOR<XOR<BotConfigUpdateToOneWithWhereWithoutRulesInput, BotConfigUpdateWithoutRulesInput>, BotConfigUncheckedUpdateWithoutRulesInput>
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

  export type NestedEnumShiftStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftStatus | EnumShiftStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftStatus[] | ListEnumShiftStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftStatus[] | ListEnumShiftStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftStatusFilter<$PrismaModel> | $Enums.ShiftStatus
  }

  export type NestedEnumShiftStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftStatus | EnumShiftStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftStatus[] | ListEnumShiftStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftStatus[] | ListEnumShiftStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftStatusWithAggregatesFilter<$PrismaModel> | $Enums.ShiftStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShiftStatusFilter<$PrismaModel>
    _max?: NestedEnumShiftStatusFilter<$PrismaModel>
  }

  export type NestedEnumBusTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BusType | EnumBusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BusType[] | ListEnumBusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusType[] | ListEnumBusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBusTypeFilter<$PrismaModel> | $Enums.BusType
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

  export type NestedEnumScheduleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleStatusFilter<$PrismaModel> | $Enums.ScheduleStatus
  }

  export type NestedEnumBusTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusType | EnumBusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BusType[] | ListEnumBusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusType[] | ListEnumBusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBusTypeWithAggregatesFilter<$PrismaModel> | $Enums.BusType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBusTypeFilter<$PrismaModel>
    _max?: NestedEnumBusTypeFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumScheduleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ScheduleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScheduleStatusFilter<$PrismaModel>
    _max?: NestedEnumScheduleStatusFilter<$PrismaModel>
  }

  export type NestedEnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
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

  export type NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
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

  export type NestedEnumResponseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ResponseType | EnumResponseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResponseType[] | ListEnumResponseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResponseType[] | ListEnumResponseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResponseTypeFilter<$PrismaModel> | $Enums.ResponseType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumResponseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResponseType | EnumResponseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResponseType[] | ListEnumResponseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResponseType[] | ListEnumResponseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResponseTypeWithAggregatesFilter<$PrismaModel> | $Enums.ResponseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResponseTypeFilter<$PrismaModel>
    _max?: NestedEnumResponseTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RouteScheduleCreateWithoutAgencyInput = {
    id?: string
    origin: string
    destination: string
    departureTime: string
    busNumber: string
    busName: string
    busType: $Enums.BusType
    totalSeats: number
    bookedSeats?: number
    pricePerSeat: number
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketCreateNestedManyWithoutScheduleInput
  }

  export type RouteScheduleUncheckedCreateWithoutAgencyInput = {
    id?: string
    origin: string
    destination: string
    departureTime: string
    busNumber: string
    busName: string
    busType: $Enums.BusType
    totalSeats: number
    bookedSeats?: number
    pricePerSeat: number
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type RouteScheduleCreateOrConnectWithoutAgencyInput = {
    where: RouteScheduleWhereUniqueInput
    create: XOR<RouteScheduleCreateWithoutAgencyInput, RouteScheduleUncheckedCreateWithoutAgencyInput>
  }

  export type RouteScheduleCreateManyAgencyInputEnvelope = {
    data: RouteScheduleCreateManyAgencyInput | RouteScheduleCreateManyAgencyInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutAgencyInput = {
    id?: string
    ticketId: string
    orderId: string
    seatNo: string
    amount: number
    status?: $Enums.TicketStatus
    boardedAt?: Date | string | null
    qrCodeSignature: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedule: RouteScheduleCreateNestedOneWithoutTicketsInput
    customer: CustomerCreateNestedOneWithoutTicketsInput
    validatedBy?: AgentCreateNestedOneWithoutScannedTicketsInput
  }

  export type TicketUncheckedCreateWithoutAgencyInput = {
    id?: string
    ticketId: string
    orderId: string
    scheduleId: string
    customerId: string
    seatNo: string
    amount: number
    status?: $Enums.TicketStatus
    validatedById?: string | null
    boardedAt?: Date | string | null
    qrCodeSignature: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutAgencyInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutAgencyInput, TicketUncheckedCreateWithoutAgencyInput>
  }

  export type TicketCreateManyAgencyInputEnvelope = {
    data: TicketCreateManyAgencyInput | TicketCreateManyAgencyInput[]
    skipDuplicates?: boolean
  }

  export type AgentCreateWithoutAgencyInput = {
    id?: string
    agentCode: string
    name: string
    email: string
    password: string
    phone: string
    role: string
    station: string
    shiftStatus?: $Enums.ShiftStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    scannedTickets?: TicketCreateNestedManyWithoutValidatedByInput
  }

  export type AgentUncheckedCreateWithoutAgencyInput = {
    id?: string
    agentCode: string
    name: string
    email: string
    password: string
    phone: string
    role: string
    station: string
    shiftStatus?: $Enums.ShiftStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    scannedTickets?: TicketUncheckedCreateNestedManyWithoutValidatedByInput
  }

  export type AgentCreateOrConnectWithoutAgencyInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutAgencyInput, AgentUncheckedCreateWithoutAgencyInput>
  }

  export type AgentCreateManyAgencyInputEnvelope = {
    data: AgentCreateManyAgencyInput | AgentCreateManyAgencyInput[]
    skipDuplicates?: boolean
  }

  export type BotConfigCreateWithoutAgencyInput = {
    id?: string
    botPhoneNumber: string
    welcomeMessage: string
    status?: string
    updatedAt?: Date | string
    rules?: BotRuleCreateNestedManyWithoutBotConfigInput
  }

  export type BotConfigUncheckedCreateWithoutAgencyInput = {
    id?: string
    botPhoneNumber: string
    welcomeMessage: string
    status?: string
    updatedAt?: Date | string
    rules?: BotRuleUncheckedCreateNestedManyWithoutBotConfigInput
  }

  export type BotConfigCreateOrConnectWithoutAgencyInput = {
    where: BotConfigWhereUniqueInput
    create: XOR<BotConfigCreateWithoutAgencyInput, BotConfigUncheckedCreateWithoutAgencyInput>
  }

  export type RouteScheduleUpsertWithWhereUniqueWithoutAgencyInput = {
    where: RouteScheduleWhereUniqueInput
    update: XOR<RouteScheduleUpdateWithoutAgencyInput, RouteScheduleUncheckedUpdateWithoutAgencyInput>
    create: XOR<RouteScheduleCreateWithoutAgencyInput, RouteScheduleUncheckedCreateWithoutAgencyInput>
  }

  export type RouteScheduleUpdateWithWhereUniqueWithoutAgencyInput = {
    where: RouteScheduleWhereUniqueInput
    data: XOR<RouteScheduleUpdateWithoutAgencyInput, RouteScheduleUncheckedUpdateWithoutAgencyInput>
  }

  export type RouteScheduleUpdateManyWithWhereWithoutAgencyInput = {
    where: RouteScheduleScalarWhereInput
    data: XOR<RouteScheduleUpdateManyMutationInput, RouteScheduleUncheckedUpdateManyWithoutAgencyInput>
  }

  export type RouteScheduleScalarWhereInput = {
    AND?: RouteScheduleScalarWhereInput | RouteScheduleScalarWhereInput[]
    OR?: RouteScheduleScalarWhereInput[]
    NOT?: RouteScheduleScalarWhereInput | RouteScheduleScalarWhereInput[]
    id?: StringFilter<"RouteSchedule"> | string
    agencyId?: StringFilter<"RouteSchedule"> | string
    origin?: StringFilter<"RouteSchedule"> | string
    destination?: StringFilter<"RouteSchedule"> | string
    departureTime?: StringFilter<"RouteSchedule"> | string
    busNumber?: StringFilter<"RouteSchedule"> | string
    busName?: StringFilter<"RouteSchedule"> | string
    busType?: EnumBusTypeFilter<"RouteSchedule"> | $Enums.BusType
    totalSeats?: IntFilter<"RouteSchedule"> | number
    bookedSeats?: IntFilter<"RouteSchedule"> | number
    pricePerSeat?: FloatFilter<"RouteSchedule"> | number
    status?: EnumScheduleStatusFilter<"RouteSchedule"> | $Enums.ScheduleStatus
    createdAt?: DateTimeFilter<"RouteSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"RouteSchedule"> | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutAgencyInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutAgencyInput, TicketUncheckedUpdateWithoutAgencyInput>
    create: XOR<TicketCreateWithoutAgencyInput, TicketUncheckedCreateWithoutAgencyInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutAgencyInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutAgencyInput, TicketUncheckedUpdateWithoutAgencyInput>
  }

  export type TicketUpdateManyWithWhereWithoutAgencyInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutAgencyInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: StringFilter<"Ticket"> | string
    ticketId?: StringFilter<"Ticket"> | string
    orderId?: StringFilter<"Ticket"> | string
    agencyId?: StringFilter<"Ticket"> | string
    scheduleId?: StringFilter<"Ticket"> | string
    customerId?: StringFilter<"Ticket"> | string
    seatNo?: StringFilter<"Ticket"> | string
    amount?: FloatFilter<"Ticket"> | number
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    validatedById?: StringNullableFilter<"Ticket"> | string | null
    boardedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    qrCodeSignature?: StringFilter<"Ticket"> | string
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type AgentUpsertWithWhereUniqueWithoutAgencyInput = {
    where: AgentWhereUniqueInput
    update: XOR<AgentUpdateWithoutAgencyInput, AgentUncheckedUpdateWithoutAgencyInput>
    create: XOR<AgentCreateWithoutAgencyInput, AgentUncheckedCreateWithoutAgencyInput>
  }

  export type AgentUpdateWithWhereUniqueWithoutAgencyInput = {
    where: AgentWhereUniqueInput
    data: XOR<AgentUpdateWithoutAgencyInput, AgentUncheckedUpdateWithoutAgencyInput>
  }

  export type AgentUpdateManyWithWhereWithoutAgencyInput = {
    where: AgentScalarWhereInput
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyWithoutAgencyInput>
  }

  export type AgentScalarWhereInput = {
    AND?: AgentScalarWhereInput | AgentScalarWhereInput[]
    OR?: AgentScalarWhereInput[]
    NOT?: AgentScalarWhereInput | AgentScalarWhereInput[]
    id?: StringFilter<"Agent"> | string
    agencyId?: StringFilter<"Agent"> | string
    agentCode?: StringFilter<"Agent"> | string
    name?: StringFilter<"Agent"> | string
    email?: StringFilter<"Agent"> | string
    password?: StringFilter<"Agent"> | string
    phone?: StringFilter<"Agent"> | string
    role?: StringFilter<"Agent"> | string
    station?: StringFilter<"Agent"> | string
    shiftStatus?: EnumShiftStatusFilter<"Agent"> | $Enums.ShiftStatus
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    updatedAt?: DateTimeFilter<"Agent"> | Date | string
  }

  export type BotConfigUpsertWithoutAgencyInput = {
    update: XOR<BotConfigUpdateWithoutAgencyInput, BotConfigUncheckedUpdateWithoutAgencyInput>
    create: XOR<BotConfigCreateWithoutAgencyInput, BotConfigUncheckedCreateWithoutAgencyInput>
    where?: BotConfigWhereInput
  }

  export type BotConfigUpdateToOneWithWhereWithoutAgencyInput = {
    where?: BotConfigWhereInput
    data: XOR<BotConfigUpdateWithoutAgencyInput, BotConfigUncheckedUpdateWithoutAgencyInput>
  }

  export type BotConfigUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    botPhoneNumber?: StringFieldUpdateOperationsInput | string
    welcomeMessage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rules?: BotRuleUpdateManyWithoutBotConfigNestedInput
  }

  export type BotConfigUncheckedUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    botPhoneNumber?: StringFieldUpdateOperationsInput | string
    welcomeMessage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rules?: BotRuleUncheckedUpdateManyWithoutBotConfigNestedInput
  }

  export type AgencyCreateWithoutAgentsInput = {
    id?: string
    name: string
    agencyCode: string
    hqLocation: string
    activeFleetCount: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: RouteScheduleCreateNestedManyWithoutAgencyInput
    tickets?: TicketCreateNestedManyWithoutAgencyInput
    botConfig?: BotConfigCreateNestedOneWithoutAgencyInput
  }

  export type AgencyUncheckedCreateWithoutAgentsInput = {
    id?: string
    name: string
    agencyCode: string
    hqLocation: string
    activeFleetCount: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: RouteScheduleUncheckedCreateNestedManyWithoutAgencyInput
    tickets?: TicketUncheckedCreateNestedManyWithoutAgencyInput
    botConfig?: BotConfigUncheckedCreateNestedOneWithoutAgencyInput
  }

  export type AgencyCreateOrConnectWithoutAgentsInput = {
    where: AgencyWhereUniqueInput
    create: XOR<AgencyCreateWithoutAgentsInput, AgencyUncheckedCreateWithoutAgentsInput>
  }

  export type TicketCreateWithoutValidatedByInput = {
    id?: string
    ticketId: string
    orderId: string
    seatNo: string
    amount: number
    status?: $Enums.TicketStatus
    boardedAt?: Date | string | null
    qrCodeSignature: string
    createdAt?: Date | string
    updatedAt?: Date | string
    agency: AgencyCreateNestedOneWithoutTicketsInput
    schedule: RouteScheduleCreateNestedOneWithoutTicketsInput
    customer: CustomerCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutValidatedByInput = {
    id?: string
    ticketId: string
    orderId: string
    agencyId: string
    scheduleId: string
    customerId: string
    seatNo: string
    amount: number
    status?: $Enums.TicketStatus
    boardedAt?: Date | string | null
    qrCodeSignature: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutValidatedByInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutValidatedByInput, TicketUncheckedCreateWithoutValidatedByInput>
  }

  export type TicketCreateManyValidatedByInputEnvelope = {
    data: TicketCreateManyValidatedByInput | TicketCreateManyValidatedByInput[]
    skipDuplicates?: boolean
  }

  export type AgencyUpsertWithoutAgentsInput = {
    update: XOR<AgencyUpdateWithoutAgentsInput, AgencyUncheckedUpdateWithoutAgentsInput>
    create: XOR<AgencyCreateWithoutAgentsInput, AgencyUncheckedCreateWithoutAgentsInput>
    where?: AgencyWhereInput
  }

  export type AgencyUpdateToOneWithWhereWithoutAgentsInput = {
    where?: AgencyWhereInput
    data: XOR<AgencyUpdateWithoutAgentsInput, AgencyUncheckedUpdateWithoutAgentsInput>
  }

  export type AgencyUpdateWithoutAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    agencyCode?: StringFieldUpdateOperationsInput | string
    hqLocation?: StringFieldUpdateOperationsInput | string
    activeFleetCount?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: RouteScheduleUpdateManyWithoutAgencyNestedInput
    tickets?: TicketUpdateManyWithoutAgencyNestedInput
    botConfig?: BotConfigUpdateOneWithoutAgencyNestedInput
  }

  export type AgencyUncheckedUpdateWithoutAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    agencyCode?: StringFieldUpdateOperationsInput | string
    hqLocation?: StringFieldUpdateOperationsInput | string
    activeFleetCount?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: RouteScheduleUncheckedUpdateManyWithoutAgencyNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutAgencyNestedInput
    botConfig?: BotConfigUncheckedUpdateOneWithoutAgencyNestedInput
  }

  export type TicketUpsertWithWhereUniqueWithoutValidatedByInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutValidatedByInput, TicketUncheckedUpdateWithoutValidatedByInput>
    create: XOR<TicketCreateWithoutValidatedByInput, TicketUncheckedCreateWithoutValidatedByInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutValidatedByInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutValidatedByInput, TicketUncheckedUpdateWithoutValidatedByInput>
  }

  export type TicketUpdateManyWithWhereWithoutValidatedByInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutValidatedByInput>
  }

  export type TicketCreateWithoutCustomerInput = {
    id?: string
    ticketId: string
    orderId: string
    seatNo: string
    amount: number
    status?: $Enums.TicketStatus
    boardedAt?: Date | string | null
    qrCodeSignature: string
    createdAt?: Date | string
    updatedAt?: Date | string
    agency: AgencyCreateNestedOneWithoutTicketsInput
    schedule: RouteScheduleCreateNestedOneWithoutTicketsInput
    validatedBy?: AgentCreateNestedOneWithoutScannedTicketsInput
  }

  export type TicketUncheckedCreateWithoutCustomerInput = {
    id?: string
    ticketId: string
    orderId: string
    agencyId: string
    scheduleId: string
    seatNo: string
    amount: number
    status?: $Enums.TicketStatus
    validatedById?: string | null
    boardedAt?: Date | string | null
    qrCodeSignature: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutCustomerInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput>
  }

  export type TicketCreateManyCustomerInputEnvelope = {
    data: TicketCreateManyCustomerInput | TicketCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type TicketUpsertWithWhereUniqueWithoutCustomerInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutCustomerInput, TicketUncheckedUpdateWithoutCustomerInput>
    create: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutCustomerInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutCustomerInput, TicketUncheckedUpdateWithoutCustomerInput>
  }

  export type TicketUpdateManyWithWhereWithoutCustomerInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutCustomerInput>
  }

  export type AgencyCreateWithoutSchedulesInput = {
    id?: string
    name: string
    agencyCode: string
    hqLocation: string
    activeFleetCount: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketCreateNestedManyWithoutAgencyInput
    agents?: AgentCreateNestedManyWithoutAgencyInput
    botConfig?: BotConfigCreateNestedOneWithoutAgencyInput
  }

  export type AgencyUncheckedCreateWithoutSchedulesInput = {
    id?: string
    name: string
    agencyCode: string
    hqLocation: string
    activeFleetCount: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutAgencyInput
    agents?: AgentUncheckedCreateNestedManyWithoutAgencyInput
    botConfig?: BotConfigUncheckedCreateNestedOneWithoutAgencyInput
  }

  export type AgencyCreateOrConnectWithoutSchedulesInput = {
    where: AgencyWhereUniqueInput
    create: XOR<AgencyCreateWithoutSchedulesInput, AgencyUncheckedCreateWithoutSchedulesInput>
  }

  export type TicketCreateWithoutScheduleInput = {
    id?: string
    ticketId: string
    orderId: string
    seatNo: string
    amount: number
    status?: $Enums.TicketStatus
    boardedAt?: Date | string | null
    qrCodeSignature: string
    createdAt?: Date | string
    updatedAt?: Date | string
    agency: AgencyCreateNestedOneWithoutTicketsInput
    customer: CustomerCreateNestedOneWithoutTicketsInput
    validatedBy?: AgentCreateNestedOneWithoutScannedTicketsInput
  }

  export type TicketUncheckedCreateWithoutScheduleInput = {
    id?: string
    ticketId: string
    orderId: string
    agencyId: string
    customerId: string
    seatNo: string
    amount: number
    status?: $Enums.TicketStatus
    validatedById?: string | null
    boardedAt?: Date | string | null
    qrCodeSignature: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutScheduleInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutScheduleInput, TicketUncheckedCreateWithoutScheduleInput>
  }

  export type TicketCreateManyScheduleInputEnvelope = {
    data: TicketCreateManyScheduleInput | TicketCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type AgencyUpsertWithoutSchedulesInput = {
    update: XOR<AgencyUpdateWithoutSchedulesInput, AgencyUncheckedUpdateWithoutSchedulesInput>
    create: XOR<AgencyCreateWithoutSchedulesInput, AgencyUncheckedCreateWithoutSchedulesInput>
    where?: AgencyWhereInput
  }

  export type AgencyUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: AgencyWhereInput
    data: XOR<AgencyUpdateWithoutSchedulesInput, AgencyUncheckedUpdateWithoutSchedulesInput>
  }

  export type AgencyUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    agencyCode?: StringFieldUpdateOperationsInput | string
    hqLocation?: StringFieldUpdateOperationsInput | string
    activeFleetCount?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutAgencyNestedInput
    agents?: AgentUpdateManyWithoutAgencyNestedInput
    botConfig?: BotConfigUpdateOneWithoutAgencyNestedInput
  }

  export type AgencyUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    agencyCode?: StringFieldUpdateOperationsInput | string
    hqLocation?: StringFieldUpdateOperationsInput | string
    activeFleetCount?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutAgencyNestedInput
    agents?: AgentUncheckedUpdateManyWithoutAgencyNestedInput
    botConfig?: BotConfigUncheckedUpdateOneWithoutAgencyNestedInput
  }

  export type TicketUpsertWithWhereUniqueWithoutScheduleInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutScheduleInput, TicketUncheckedUpdateWithoutScheduleInput>
    create: XOR<TicketCreateWithoutScheduleInput, TicketUncheckedCreateWithoutScheduleInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutScheduleInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutScheduleInput, TicketUncheckedUpdateWithoutScheduleInput>
  }

  export type TicketUpdateManyWithWhereWithoutScheduleInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutScheduleInput>
  }

  export type AgencyCreateWithoutTicketsInput = {
    id?: string
    name: string
    agencyCode: string
    hqLocation: string
    activeFleetCount: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: RouteScheduleCreateNestedManyWithoutAgencyInput
    agents?: AgentCreateNestedManyWithoutAgencyInput
    botConfig?: BotConfigCreateNestedOneWithoutAgencyInput
  }

  export type AgencyUncheckedCreateWithoutTicketsInput = {
    id?: string
    name: string
    agencyCode: string
    hqLocation: string
    activeFleetCount: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: RouteScheduleUncheckedCreateNestedManyWithoutAgencyInput
    agents?: AgentUncheckedCreateNestedManyWithoutAgencyInput
    botConfig?: BotConfigUncheckedCreateNestedOneWithoutAgencyInput
  }

  export type AgencyCreateOrConnectWithoutTicketsInput = {
    where: AgencyWhereUniqueInput
    create: XOR<AgencyCreateWithoutTicketsInput, AgencyUncheckedCreateWithoutTicketsInput>
  }

  export type RouteScheduleCreateWithoutTicketsInput = {
    id?: string
    origin: string
    destination: string
    departureTime: string
    busNumber: string
    busName: string
    busType: $Enums.BusType
    totalSeats: number
    bookedSeats?: number
    pricePerSeat: number
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    agency: AgencyCreateNestedOneWithoutSchedulesInput
  }

  export type RouteScheduleUncheckedCreateWithoutTicketsInput = {
    id?: string
    agencyId: string
    origin: string
    destination: string
    departureTime: string
    busNumber: string
    busName: string
    busType: $Enums.BusType
    totalSeats: number
    bookedSeats?: number
    pricePerSeat: number
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteScheduleCreateOrConnectWithoutTicketsInput = {
    where: RouteScheduleWhereUniqueInput
    create: XOR<RouteScheduleCreateWithoutTicketsInput, RouteScheduleUncheckedCreateWithoutTicketsInput>
  }

  export type CustomerCreateWithoutTicketsInput = {
    id?: string
    whatsappPhone: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUncheckedCreateWithoutTicketsInput = {
    id?: string
    whatsappPhone: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutTicketsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutTicketsInput, CustomerUncheckedCreateWithoutTicketsInput>
  }

  export type AgentCreateWithoutScannedTicketsInput = {
    id?: string
    agentCode: string
    name: string
    email: string
    password: string
    phone: string
    role: string
    station: string
    shiftStatus?: $Enums.ShiftStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    agency: AgencyCreateNestedOneWithoutAgentsInput
  }

  export type AgentUncheckedCreateWithoutScannedTicketsInput = {
    id?: string
    agencyId: string
    agentCode: string
    name: string
    email: string
    password: string
    phone: string
    role: string
    station: string
    shiftStatus?: $Enums.ShiftStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentCreateOrConnectWithoutScannedTicketsInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutScannedTicketsInput, AgentUncheckedCreateWithoutScannedTicketsInput>
  }

  export type AgencyUpsertWithoutTicketsInput = {
    update: XOR<AgencyUpdateWithoutTicketsInput, AgencyUncheckedUpdateWithoutTicketsInput>
    create: XOR<AgencyCreateWithoutTicketsInput, AgencyUncheckedCreateWithoutTicketsInput>
    where?: AgencyWhereInput
  }

  export type AgencyUpdateToOneWithWhereWithoutTicketsInput = {
    where?: AgencyWhereInput
    data: XOR<AgencyUpdateWithoutTicketsInput, AgencyUncheckedUpdateWithoutTicketsInput>
  }

  export type AgencyUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    agencyCode?: StringFieldUpdateOperationsInput | string
    hqLocation?: StringFieldUpdateOperationsInput | string
    activeFleetCount?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: RouteScheduleUpdateManyWithoutAgencyNestedInput
    agents?: AgentUpdateManyWithoutAgencyNestedInput
    botConfig?: BotConfigUpdateOneWithoutAgencyNestedInput
  }

  export type AgencyUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    agencyCode?: StringFieldUpdateOperationsInput | string
    hqLocation?: StringFieldUpdateOperationsInput | string
    activeFleetCount?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: RouteScheduleUncheckedUpdateManyWithoutAgencyNestedInput
    agents?: AgentUncheckedUpdateManyWithoutAgencyNestedInput
    botConfig?: BotConfigUncheckedUpdateOneWithoutAgencyNestedInput
  }

  export type RouteScheduleUpsertWithoutTicketsInput = {
    update: XOR<RouteScheduleUpdateWithoutTicketsInput, RouteScheduleUncheckedUpdateWithoutTicketsInput>
    create: XOR<RouteScheduleCreateWithoutTicketsInput, RouteScheduleUncheckedCreateWithoutTicketsInput>
    where?: RouteScheduleWhereInput
  }

  export type RouteScheduleUpdateToOneWithWhereWithoutTicketsInput = {
    where?: RouteScheduleWhereInput
    data: XOR<RouteScheduleUpdateWithoutTicketsInput, RouteScheduleUncheckedUpdateWithoutTicketsInput>
  }

  export type RouteScheduleUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureTime?: StringFieldUpdateOperationsInput | string
    busNumber?: StringFieldUpdateOperationsInput | string
    busName?: StringFieldUpdateOperationsInput | string
    busType?: EnumBusTypeFieldUpdateOperationsInput | $Enums.BusType
    totalSeats?: IntFieldUpdateOperationsInput | number
    bookedSeats?: IntFieldUpdateOperationsInput | number
    pricePerSeat?: FloatFieldUpdateOperationsInput | number
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencyUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type RouteScheduleUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureTime?: StringFieldUpdateOperationsInput | string
    busNumber?: StringFieldUpdateOperationsInput | string
    busName?: StringFieldUpdateOperationsInput | string
    busType?: EnumBusTypeFieldUpdateOperationsInput | $Enums.BusType
    totalSeats?: IntFieldUpdateOperationsInput | number
    bookedSeats?: IntFieldUpdateOperationsInput | number
    pricePerSeat?: FloatFieldUpdateOperationsInput | number
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUpsertWithoutTicketsInput = {
    update: XOR<CustomerUpdateWithoutTicketsInput, CustomerUncheckedUpdateWithoutTicketsInput>
    create: XOR<CustomerCreateWithoutTicketsInput, CustomerUncheckedCreateWithoutTicketsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutTicketsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutTicketsInput, CustomerUncheckedUpdateWithoutTicketsInput>
  }

  export type CustomerUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsappPhone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsappPhone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentUpsertWithoutScannedTicketsInput = {
    update: XOR<AgentUpdateWithoutScannedTicketsInput, AgentUncheckedUpdateWithoutScannedTicketsInput>
    create: XOR<AgentCreateWithoutScannedTicketsInput, AgentUncheckedCreateWithoutScannedTicketsInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutScannedTicketsInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutScannedTicketsInput, AgentUncheckedUpdateWithoutScannedTicketsInput>
  }

  export type AgentUpdateWithoutScannedTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    station?: StringFieldUpdateOperationsInput | string
    shiftStatus?: EnumShiftStatusFieldUpdateOperationsInput | $Enums.ShiftStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencyUpdateOneRequiredWithoutAgentsNestedInput
  }

  export type AgentUncheckedUpdateWithoutScannedTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    agentCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    station?: StringFieldUpdateOperationsInput | string
    shiftStatus?: EnumShiftStatusFieldUpdateOperationsInput | $Enums.ShiftStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyCreateWithoutBotConfigInput = {
    id?: string
    name: string
    agencyCode: string
    hqLocation: string
    activeFleetCount: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: RouteScheduleCreateNestedManyWithoutAgencyInput
    tickets?: TicketCreateNestedManyWithoutAgencyInput
    agents?: AgentCreateNestedManyWithoutAgencyInput
  }

  export type AgencyUncheckedCreateWithoutBotConfigInput = {
    id?: string
    name: string
    agencyCode: string
    hqLocation: string
    activeFleetCount: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: RouteScheduleUncheckedCreateNestedManyWithoutAgencyInput
    tickets?: TicketUncheckedCreateNestedManyWithoutAgencyInput
    agents?: AgentUncheckedCreateNestedManyWithoutAgencyInput
  }

  export type AgencyCreateOrConnectWithoutBotConfigInput = {
    where: AgencyWhereUniqueInput
    create: XOR<AgencyCreateWithoutBotConfigInput, AgencyUncheckedCreateWithoutBotConfigInput>
  }

  export type BotRuleCreateWithoutBotConfigInput = {
    id?: string
    keyword: string
    responseType: $Enums.ResponseType
    replyTemplate: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type BotRuleUncheckedCreateWithoutBotConfigInput = {
    id?: string
    keyword: string
    responseType: $Enums.ResponseType
    replyTemplate: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type BotRuleCreateOrConnectWithoutBotConfigInput = {
    where: BotRuleWhereUniqueInput
    create: XOR<BotRuleCreateWithoutBotConfigInput, BotRuleUncheckedCreateWithoutBotConfigInput>
  }

  export type BotRuleCreateManyBotConfigInputEnvelope = {
    data: BotRuleCreateManyBotConfigInput | BotRuleCreateManyBotConfigInput[]
    skipDuplicates?: boolean
  }

  export type AgencyUpsertWithoutBotConfigInput = {
    update: XOR<AgencyUpdateWithoutBotConfigInput, AgencyUncheckedUpdateWithoutBotConfigInput>
    create: XOR<AgencyCreateWithoutBotConfigInput, AgencyUncheckedCreateWithoutBotConfigInput>
    where?: AgencyWhereInput
  }

  export type AgencyUpdateToOneWithWhereWithoutBotConfigInput = {
    where?: AgencyWhereInput
    data: XOR<AgencyUpdateWithoutBotConfigInput, AgencyUncheckedUpdateWithoutBotConfigInput>
  }

  export type AgencyUpdateWithoutBotConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    agencyCode?: StringFieldUpdateOperationsInput | string
    hqLocation?: StringFieldUpdateOperationsInput | string
    activeFleetCount?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: RouteScheduleUpdateManyWithoutAgencyNestedInput
    tickets?: TicketUpdateManyWithoutAgencyNestedInput
    agents?: AgentUpdateManyWithoutAgencyNestedInput
  }

  export type AgencyUncheckedUpdateWithoutBotConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    agencyCode?: StringFieldUpdateOperationsInput | string
    hqLocation?: StringFieldUpdateOperationsInput | string
    activeFleetCount?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: RouteScheduleUncheckedUpdateManyWithoutAgencyNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutAgencyNestedInput
    agents?: AgentUncheckedUpdateManyWithoutAgencyNestedInput
  }

  export type BotRuleUpsertWithWhereUniqueWithoutBotConfigInput = {
    where: BotRuleWhereUniqueInput
    update: XOR<BotRuleUpdateWithoutBotConfigInput, BotRuleUncheckedUpdateWithoutBotConfigInput>
    create: XOR<BotRuleCreateWithoutBotConfigInput, BotRuleUncheckedCreateWithoutBotConfigInput>
  }

  export type BotRuleUpdateWithWhereUniqueWithoutBotConfigInput = {
    where: BotRuleWhereUniqueInput
    data: XOR<BotRuleUpdateWithoutBotConfigInput, BotRuleUncheckedUpdateWithoutBotConfigInput>
  }

  export type BotRuleUpdateManyWithWhereWithoutBotConfigInput = {
    where: BotRuleScalarWhereInput
    data: XOR<BotRuleUpdateManyMutationInput, BotRuleUncheckedUpdateManyWithoutBotConfigInput>
  }

  export type BotRuleScalarWhereInput = {
    AND?: BotRuleScalarWhereInput | BotRuleScalarWhereInput[]
    OR?: BotRuleScalarWhereInput[]
    NOT?: BotRuleScalarWhereInput | BotRuleScalarWhereInput[]
    id?: StringFilter<"BotRule"> | string
    botConfigId?: StringFilter<"BotRule"> | string
    keyword?: StringFilter<"BotRule"> | string
    responseType?: EnumResponseTypeFilter<"BotRule"> | $Enums.ResponseType
    replyTemplate?: StringFilter<"BotRule"> | string
    isActive?: BoolFilter<"BotRule"> | boolean
    createdAt?: DateTimeFilter<"BotRule"> | Date | string
  }

  export type BotConfigCreateWithoutRulesInput = {
    id?: string
    botPhoneNumber: string
    welcomeMessage: string
    status?: string
    updatedAt?: Date | string
    agency: AgencyCreateNestedOneWithoutBotConfigInput
  }

  export type BotConfigUncheckedCreateWithoutRulesInput = {
    id?: string
    agencyId: string
    botPhoneNumber: string
    welcomeMessage: string
    status?: string
    updatedAt?: Date | string
  }

  export type BotConfigCreateOrConnectWithoutRulesInput = {
    where: BotConfigWhereUniqueInput
    create: XOR<BotConfigCreateWithoutRulesInput, BotConfigUncheckedCreateWithoutRulesInput>
  }

  export type BotConfigUpsertWithoutRulesInput = {
    update: XOR<BotConfigUpdateWithoutRulesInput, BotConfigUncheckedUpdateWithoutRulesInput>
    create: XOR<BotConfigCreateWithoutRulesInput, BotConfigUncheckedCreateWithoutRulesInput>
    where?: BotConfigWhereInput
  }

  export type BotConfigUpdateToOneWithWhereWithoutRulesInput = {
    where?: BotConfigWhereInput
    data: XOR<BotConfigUpdateWithoutRulesInput, BotConfigUncheckedUpdateWithoutRulesInput>
  }

  export type BotConfigUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    botPhoneNumber?: StringFieldUpdateOperationsInput | string
    welcomeMessage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencyUpdateOneRequiredWithoutBotConfigNestedInput
  }

  export type BotConfigUncheckedUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    botPhoneNumber?: StringFieldUpdateOperationsInput | string
    welcomeMessage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteScheduleCreateManyAgencyInput = {
    id?: string
    origin: string
    destination: string
    departureTime: string
    busNumber: string
    busName: string
    busType: $Enums.BusType
    totalSeats: number
    bookedSeats?: number
    pricePerSeat: number
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateManyAgencyInput = {
    id?: string
    ticketId: string
    orderId: string
    scheduleId: string
    customerId: string
    seatNo: string
    amount: number
    status?: $Enums.TicketStatus
    validatedById?: string | null
    boardedAt?: Date | string | null
    qrCodeSignature: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentCreateManyAgencyInput = {
    id?: string
    agentCode: string
    name: string
    email: string
    password: string
    phone: string
    role: string
    station: string
    shiftStatus?: $Enums.ShiftStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteScheduleUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureTime?: StringFieldUpdateOperationsInput | string
    busNumber?: StringFieldUpdateOperationsInput | string
    busName?: StringFieldUpdateOperationsInput | string
    busType?: EnumBusTypeFieldUpdateOperationsInput | $Enums.BusType
    totalSeats?: IntFieldUpdateOperationsInput | number
    bookedSeats?: IntFieldUpdateOperationsInput | number
    pricePerSeat?: FloatFieldUpdateOperationsInput | number
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutScheduleNestedInput
  }

  export type RouteScheduleUncheckedUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureTime?: StringFieldUpdateOperationsInput | string
    busNumber?: StringFieldUpdateOperationsInput | string
    busName?: StringFieldUpdateOperationsInput | string
    busType?: EnumBusTypeFieldUpdateOperationsInput | $Enums.BusType
    totalSeats?: IntFieldUpdateOperationsInput | number
    bookedSeats?: IntFieldUpdateOperationsInput | number
    pricePerSeat?: FloatFieldUpdateOperationsInput | number
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type RouteScheduleUncheckedUpdateManyWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureTime?: StringFieldUpdateOperationsInput | string
    busNumber?: StringFieldUpdateOperationsInput | string
    busName?: StringFieldUpdateOperationsInput | string
    busType?: EnumBusTypeFieldUpdateOperationsInput | $Enums.BusType
    totalSeats?: IntFieldUpdateOperationsInput | number
    bookedSeats?: IntFieldUpdateOperationsInput | number
    pricePerSeat?: FloatFieldUpdateOperationsInput | number
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    seatNo?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    boardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCodeSignature?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: RouteScheduleUpdateOneRequiredWithoutTicketsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutTicketsNestedInput
    validatedBy?: AgentUpdateOneWithoutScannedTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    seatNo?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    boardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCodeSignature?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    seatNo?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    boardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCodeSignature?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    station?: StringFieldUpdateOperationsInput | string
    shiftStatus?: EnumShiftStatusFieldUpdateOperationsInput | $Enums.ShiftStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scannedTickets?: TicketUpdateManyWithoutValidatedByNestedInput
  }

  export type AgentUncheckedUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    station?: StringFieldUpdateOperationsInput | string
    shiftStatus?: EnumShiftStatusFieldUpdateOperationsInput | $Enums.ShiftStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scannedTickets?: TicketUncheckedUpdateManyWithoutValidatedByNestedInput
  }

  export type AgentUncheckedUpdateManyWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    station?: StringFieldUpdateOperationsInput | string
    shiftStatus?: EnumShiftStatusFieldUpdateOperationsInput | $Enums.ShiftStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyValidatedByInput = {
    id?: string
    ticketId: string
    orderId: string
    agencyId: string
    scheduleId: string
    customerId: string
    seatNo: string
    amount: number
    status?: $Enums.TicketStatus
    boardedAt?: Date | string | null
    qrCodeSignature: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateWithoutValidatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    seatNo?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    boardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCodeSignature?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencyUpdateOneRequiredWithoutTicketsNestedInput
    schedule?: RouteScheduleUpdateOneRequiredWithoutTicketsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutValidatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    seatNo?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    boardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCodeSignature?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyWithoutValidatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    seatNo?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    boardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCodeSignature?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyCustomerInput = {
    id?: string
    ticketId: string
    orderId: string
    agencyId: string
    scheduleId: string
    seatNo: string
    amount: number
    status?: $Enums.TicketStatus
    validatedById?: string | null
    boardedAt?: Date | string | null
    qrCodeSignature: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    seatNo?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    boardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCodeSignature?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencyUpdateOneRequiredWithoutTicketsNestedInput
    schedule?: RouteScheduleUpdateOneRequiredWithoutTicketsNestedInput
    validatedBy?: AgentUpdateOneWithoutScannedTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    seatNo?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    boardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCodeSignature?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    seatNo?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    boardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCodeSignature?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyScheduleInput = {
    id?: string
    ticketId: string
    orderId: string
    agencyId: string
    customerId: string
    seatNo: string
    amount: number
    status?: $Enums.TicketStatus
    validatedById?: string | null
    boardedAt?: Date | string | null
    qrCodeSignature: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    seatNo?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    boardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCodeSignature?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencyUpdateOneRequiredWithoutTicketsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutTicketsNestedInput
    validatedBy?: AgentUpdateOneWithoutScannedTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    seatNo?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    boardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCodeSignature?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    seatNo?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    boardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCodeSignature?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BotRuleCreateManyBotConfigInput = {
    id?: string
    keyword: string
    responseType: $Enums.ResponseType
    replyTemplate: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type BotRuleUpdateWithoutBotConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    responseType?: EnumResponseTypeFieldUpdateOperationsInput | $Enums.ResponseType
    replyTemplate?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BotRuleUncheckedUpdateWithoutBotConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    responseType?: EnumResponseTypeFieldUpdateOperationsInput | $Enums.ResponseType
    replyTemplate?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BotRuleUncheckedUpdateManyWithoutBotConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    responseType?: EnumResponseTypeFieldUpdateOperationsInput | $Enums.ResponseType
    replyTemplate?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AgencyCountOutputTypeDefaultArgs instead
     */
    export type AgencyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AgencyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AgentCountOutputTypeDefaultArgs instead
     */
    export type AgentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AgentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
     */
    export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RouteScheduleCountOutputTypeDefaultArgs instead
     */
    export type RouteScheduleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RouteScheduleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BotConfigCountOutputTypeDefaultArgs instead
     */
    export type BotConfigCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BotConfigCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AgencyDefaultArgs instead
     */
    export type AgencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AgencyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AgentDefaultArgs instead
     */
    export type AgentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AgentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RouteScheduleDefaultArgs instead
     */
    export type RouteScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RouteScheduleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TicketDefaultArgs instead
     */
    export type TicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TicketDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BotConfigDefaultArgs instead
     */
    export type BotConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BotConfigDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BotRuleDefaultArgs instead
     */
    export type BotRuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BotRuleDefaultArgs<ExtArgs>

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