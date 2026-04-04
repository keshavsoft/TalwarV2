import ADODB from 'node-adodb';
// const dataPath = "\\\\tally\\e\\talwar\\V1\\Data\\2026\\IAM.mdb";
const dataPath = "Data/IAM.mdb";

const tableName = "POD";

const connection = ADODB.open(
    "Provider=Microsoft.Jet.OLEDB.4.0;" +
    `Data Source=${dataPath};` +
    "Jet OLEDB:Database Password=sekhar;"
);

async function run() {
    const res = await connection.execute(
        `INSERT INTO ${tableName} (Icode,MRP) VALUES (8902,21)`
    );

    console.log(res);
};

run();
