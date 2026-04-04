import { readFileSync } from "fs";
import MDBReader from "mdb-reader";
// const dataPath = "\\\\tally\\e\\talwar\\V1\\Data\\2026\\IAM.mdb";

const buffer = readFileSync("Data/IAM.mdb");
const reader = new MDBReader(buffer);
const tableName = "SzMast";

// Get table names
const tableNames = reader.getTableNames();
// console.log(tableNames); // e.g., ['Users', 'Products']

// Get data from a specific table
const usersTable = reader.getTable(tableName);
const data = usersTable.getData();

const lastRecord = data.find(col => col.SzCode === data.length - 1);

console.log("data",  "lastRecord", lastRecord); // e.g., [{ id: 1, name: 'Alice' }, ...]
