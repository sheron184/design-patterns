export class DBConnection {
  // Private constructor
  private static instance : DBConnection;

  private constructor(){
    DBConnection.instance = new DBConnection();
  }

  public static getDbInstance() : DBConnection {
    if (!DBConnection.instance){
      DBConnection.instance = new DBConnection();
    }
    return DBConnection.instance;
  }
}
