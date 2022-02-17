//mssql server configuration

const config = {
    user :'.',
    password :'',
    server:'127.0.0.1',
    database:'Node',
    options:{
        trustedconnection: true,
        enableArithAbort : true, 
        instancename :'SQLEXPRESS'
    },
    port : 55892
}

module.exports = config; 