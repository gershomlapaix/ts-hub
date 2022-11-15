// function that will return nothing
function log(message): void {
  console.log(message);
}

/**  Never type */
function raiseError(message: string): never {
  throw new Error(message);
}
       
    // if the function has expression containing an indefinite loo, the return type is "never"
    let loop = function forever(){
        while(true){
            console.log("I'm an infinite oh.....");
            
        }
    }

export {};
