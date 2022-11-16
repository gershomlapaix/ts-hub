/** instanceof */

class Customer {
  isCreditAllowed(): boolean {
    return true;
  }
}

class Supplier {
  isInShortList(): boolean {
    return true;
  }
}

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner): string {
  let message: string = "o";

  if (partner instanceof Customer) {
    message = partner.isCreditAllowed()
      ? "Sign a new contract with the customer"
      : "Credit issue";
  }

  if (partner instanceof Supplier) {
    message = partner.isInShortList()
      ? "Sign a new contract the supplier"
      : "Need to evaluate further";
  }

  return message;
}

/** in: to check if the existence of ppty to an object */
function signContract2(partner: BusinessPartner): string {
  let message: string = "";
  if ("isCreditAllowed" in partner) {
    message = partner.isCreditAllowed()
      ? "Sign a new contract with the customer"
      : "Credit issue";
  } else {
    // must be Supplier
    message = partner.isInShortList()
      ? "Sign a new contract the supplier "
      : "Need to evaluate further";
  }
  return message;
}

/** User-defined Type guards */
function isCustomer(partner: any): partner is Customer {
  return partner instanceof Customer;
}

function signContract3(partner: BusinessPartner): string {
  let message: string = "";

  if (isCustomer(partner)) {
    message = partner.isCreditAllowed()
      ? "Sign a new contract with the customer"
      : "Credit issue";
  } else {
    message = partner.isInShortList()
      ? "Sign a new contract with the supplier"
      : "Need to evaluate further";
  }
  return message;
}
export {};
