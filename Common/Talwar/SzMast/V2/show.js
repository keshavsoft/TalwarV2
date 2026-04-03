import { readFileSync } from "fs";
import MDBReader from "mdb-reader";
const dataPath = "\\\\tally\\e\\talwar\\V1\\Data\\2026\\IAM.mdb";

const buffer = readFileSync(dataPath);
const reader = new MDBReader(buffer);
const tableName = "SzMast";

// Get data from a specific table
const usersTable = reader.getTable(tableName);
const data = usersTable.getData();
console.log(data[0]); // e.g., [{ id: 1, name: 'Alice' }, ...]
