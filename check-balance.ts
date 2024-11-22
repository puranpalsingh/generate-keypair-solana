import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";

function validateSolAdress(address : String) {
    try {
        let pubkey = new PublicKey(address);
        let isSolana = PublicKey.isOnCurve(pubkey.toBuffer());
        return isSolana;
    } catch(error) {
        return false;
    }
}

async function doConnection() {
    const conncetion = new Connection(clusterApiUrl("devnet"));

    const address = "2K6cSJaK5tXtEWcZ5Gq7qN8JYHL1t52Gnd6Fbo35sTNT";
    if(!validateSolAdress(address)) {
        return;
    }
    const publicKey = new PublicKey("2K6cSJaK5tXtEWcZ5Gq7qN8JYHL1t52Gnd6Fbo35sTNT");

    

    const balance = await conncetion.getBalance(publicKey);

    const balanceInSOL = balance/ LAMPORTS_PER_SOL;

    console.log(
        `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,
      );
}
doConnection();