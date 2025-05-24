/* 
  * 
  * Basically creates an interface as the implementable class
  * Implement this interface by real class
  * Use a mock class of real class to iplement the injectable class later for testing
  * Use the real class in application.
*/ 

// Interface to be implemented
export interface ILogger {
  log(message: string): void;
}

// Real Logger class implemented for app use
export class Logger implements ILogger {
  private static instance : Logger;
  private constructor(){}
  
  public static getInstance() : Logger {
    if (!Logger.instance){
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string): void {
    console.log(message);
  }
}

// Usage with service
export class UserService {
  // Now can use the Logger class here after injecting 
  public constructor(private logger: ILogger){}

  createUser(name: string) {
    // Using Ilogger implementation's log function
    this.logger.log(`[Log]: ${name} created`);
  }
}

// Usage in the real app

// Initiate the logger class 
// this class is implmented by Ilogger interface
const logger = Logger.getInstance();

// From here we inject the real Logger class
const userService = new UserService(logger);
userService.createUser("Sheron");


// Using this to testing purposes
// Usage with mock class for testing

class MockLogger implements ILogger {
  public loggerMsgs: string[] = [];
  
  log(message: string) {
    console.log(`Testing creating: ${message}`);
    this.loggerMsgs.push(message);
  }
}

const mockLogger = new MockLogger();
const newTestUserService = new UserService(mockLogger);
newTestUserService.createUser("Test Sheron");






