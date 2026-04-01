import { readFileSync } from "fs";
import MDBReader from "mdb-reader";

const buffer = readFileSync("IAM.mdb");
const reader = new MDBReader(buffer);

// Get table names
const tableNames = reader.getTableNames();
// console.log(tableNames); // e.g., ['Users', 'Products']

// Get data from a specific table
const usersTable = reader.getTable("PgMast");
const data = usersTable.getData();
console.log(data); // e.g., [{ id: 1, name: 'Alice' }, ...]
