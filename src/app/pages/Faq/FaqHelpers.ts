type FaqHelpersItem = {
  question: string;
  answer: string;
};

export const FaqHelpers: FaqHelpersItem[] = [
  {
    question: 'How it works?',
    answer:
      'Once you have sent a donation, the smart contract support feature doubles your donation with a 33% chance and automatically transfers the winnings to your wallet.',
  },
  {
    question: 'Is it safe to link a wallet?',
    answer:
      'Yes. Our service does not collect or store any personal data of customers, the whole procedure takes place without human intervention through the program. All transactions and conditions are written in an open smart contract, which you can read here.',
  },
  {
    question: 'What to do if the transaction did not go through?',
    answer:
      'Check if you have connected the wallet to the service, and also check if there are enough tokens on the wallet.',
  },
];
