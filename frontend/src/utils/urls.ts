import { EnvironmentVariable } from "./EnvironmentVariables";


export const url = {
coffees: `${EnvironmentVariable.BACKEND_URL}:${EnvironmentVariable.BACKEND_PORT}/coffees`,
};