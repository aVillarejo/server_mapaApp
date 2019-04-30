import { merge } from "lodash";
import { resolvers as USER_RESOLVERS } from "./usuario";

export const RESOLVERS = merge(USER_RESOLVERS);
