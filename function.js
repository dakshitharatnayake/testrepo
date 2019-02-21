function configuredbDataBase(callback) {
mysql.getSession({
    host: 'localhost',
    port: '33080',
    dbUser: 'root',
    dbPassword: ''pwd_
  }).then(function (session) {
    var schema = session.getSchema('mysqlPname');
    schema.existsInDatabase().then(function (exists) {
      if (!exists) {
        session.createSchema('mysqlPname').then(function (Pnamechema) {
        Promise.all([
        newSchema.createCollection('Pname').then(function (PnameColl) {
           PnameColl.add(initialData).execute().then(function (PnameAdded) {
                  var rowsAffected = PnameAdded.getAffectedItemsCount();
                  if (rowsAffected1 <= 0) {
                    console.log('No Pname Added');
                  }
                  else {
                    console.log(rowsAffected1 + 'Pname Added');
                  }
                }).catch(function (err) {
                  console.log(err.message);
                  console.log(err.stack);
                });
              }).catch(function (err) {
                console.log(err.message);
                console.log(err.stack);
              })
          ]).then(function () {
            session.close();
            callback(Done: Collection initialized');
          });
        }).catch(function (err) {
          console.log(err.message);
          console.log(err.stack);
        });
      }
      else {
        session.close();
        callback('Database Already Configured');
      }
    });
 
  }).catch(function (err) {
    console.log(err.message);
    console.log(err.stack);
  });
}
 
function configureDataBase(callback) {
  mysql.getSession({
    host: 'localhost',
    port: '33080',
    dbUser: 'root',
    dbPassword: ''
  }).then(function (session) {
    var schema = session.getSchema('mysqlPname');
 
    schema.existsInDatabase().then(function (exists) {
      if (!exists) {
        session.createSchema('mysqlPname').then(function (newSchema) {
          Promise.all([
               newSchema.createCollection('Pname').then(function (PnameColl) {
                PnameColl.add(initialData).execute().then(function (PnameAdded) {
                  var rowsAffected1 = PnameAdded.getAffectedItemsCount();
                  if (rowsAffected1 <= 0) {
                    console.log('No Pname Added');
                  }
                  else {
                    console.log(rowsAffected1 + ' Pname Added');
                  }
                }).catch(function (err) {
                  console.log(err.message);
                  console.log(err.stack);
                });
                }
      else {
        session.close();
        callback('Database Configured');
      }
    });
  }).catch(function (err) {
    console.log(err.message);
    console.log(err.stack);
  });
}
