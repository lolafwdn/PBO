class Payment {
  process(amount) {
    console.log(`Memproses pembayaran sebesar Rp${amount.toLocaleString("id-ID")}`);
  }
}

class CreditCardPayment extends Payment {
  // overriding
  process(amount) {
    console.log(`Membayar Rp${amount.toLocaleString("id-ID")} dengan kartu kredit.`);
  }
}

class EWalletPayment extends Payment {
  // overriding
  process(amount) {
    console.log(`Membayar Rp${amount.toLocaleString("id-ID")} dengan e-wallet.`);
  }
}

class BankTransferPayment extends Payment {
  // overriding
  process(amount) {
    console.log(`Membayar Rp${amount.toLocaleString("id-ID")} lewat transfer bank.`);
  }
}


const creditCard = new CreditCardPayment();
creditCard.process(250000); 
const ewallet = new EWalletPayment();
ewallet.process(100000); 

const bankTransfer = new BankTransferPayment();
bankTransfer.process(750000); 
