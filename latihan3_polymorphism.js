class Payment {
  process(amount) {
    console.log(`Memproses pembayaran sebesar Rp${amount.toLocaleString}`);
  }
}

class CreditCardPayment extends Payment {
  process(amount) {
    console.log(`Membayar Rp${amount} dengan kartu kredit.`);
  }
}

class EWalletPayment extends Payment {
  process(amount) {
    console.log(`Membayar Rp${amount} dengan e-wallet.`);
  }
}

class BankTransferPayment extends Payment {
  process(amount) {
    console.log(`Membayar Rp${amount} lewat transfer bank.`);
  }
}

const creditCard = new CreditCardPayment();
creditCard.process(250000); 

const ewallet = new EWalletPayment();
ewallet.process(100000); 

const bankTransfer = new BankTransferPayment();
bankTransfer.process(750000);