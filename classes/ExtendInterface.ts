interface Mailable {
  send(email: string): boolean;
  queue(email: string): boolean;
}

interface FutureMail extends Mailable {
  // interface extending Mailable
  later(email: string, after: number): boolean;
}

class Mail implements FutureMail {
  later(email: string, after: number): boolean {
    console.log(`Send email to ${email} in ${after} ms.`);
    return true;
  }

  send(email: string): boolean {
    console.log(`Sent email to ${email}.`);
    return true;
  }
  queue(email: string): boolean {
    console.log(`Queue an email to ${email}.`);
    return true;
  }
}


// interfaces extending classes

class Control {
    private state: boolean;
}

interface StatefulControl extends Control {
    enable(): void
}

class Button extends Control implements StatefulControl {
    enable() { }
}

/** 
 // Error: cannot implement
class Chart implements StatefulControl {
    enable() { }

} */