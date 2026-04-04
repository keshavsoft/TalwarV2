import { readFileSync } from "fs";
import MDBReader from "mdb-reader";

const buffer = readFileSync("Data/IAM.mdb");
const reader = new MDBReader(buffer);

// Get table names
const tableNames = reader.getTableNames();
// console.log(tableNames); // e.g., ['Users', 'Products']

// Get data from a specific table
const usersTable = reader.getTable("PgMast");
const data = usersTable.getData();
const lastRecord = data.find(col => col.PgCode === data.length - 1);

console.log("data:", data, "lastRecord", lastRecord); // e.g., [{ id: 1, name: 'Alice' }, ...]
