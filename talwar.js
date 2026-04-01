import ADODB from 'node-adodb';

const connection = ADODB.open(
    "Provider=Microsoft.Jet.OLEDB.4.0;" +
    "Data Source=IAM.mdb;" +
    "Jet OLEDB:Database Password=sekhar;"
);

await connection.execute(
    "INSERT INTO Table1 (Id, Field1) VALUES (4, 'Test')"
);