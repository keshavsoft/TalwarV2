import { readFileSync } from "fs";
import MDBReader from "mdb-reader";
// const dataPath = "\\\\tally\\e\\talwar\\V1\\Data\\2026\\IAM.mdb";

const buffer = readFileSync("Data/IAM.mdb");
const reader = new MDBReader(buffer);
const tableName = "PSMast";

// Get data from a specific table
const usersTable = reader.getTable(tableName);
const data = usersTable.getData();
const recodLength = data.length;

console.log("recodLength -->", recodLength); // e.g., [{ id: 1, name: 'Alice' }, ...]