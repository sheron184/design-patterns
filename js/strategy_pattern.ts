interface AuthStraegy {
  login(userData: any): Promise<string>; // Returns token
  logout(userData: any): Promise<string>; // Return confirmation
  getUser(sessionData: any) : Promise<string>; // Get user data 
}

export class JWTAuthStrategy implements AuthStraegy {
  async login(userData :any) : Promise<string> {
    if(userData){
      return "User logged In";
    }
    return "404";
  }

  async logout(userData: any) : Promise<string> {
    return "LoggedOut";
  }

  async getUser(sessionData: any): Promise<string> {
    return "User data";
  }
  
}

export class UserAuthContext {
  private strategy : AuthStraegy;

  public constructor(authStrategy: AuthStraegy){
    this.strategy = authStrategy;
  }

  public login(userData: any) {
    this.strategy.login(userData);
  }
  
  public logout(userData: any) {
    this.strategy.logout(userData);
  }
    
  public getUser(session: any) {
    this.strategy.getUser(session);
  }

}


async function login(){
  const authContext : UserAuthContext = new UserAuthContext(new JWTAuthStrategy());
  const login = authContext.login({
    username: "sheron",
    password: "1234"
  });
}

login();

