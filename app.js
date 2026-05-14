import { app } from './firebase-config.js';
import { askGemini } from './gemini.js';

console.log("AIRA-CRED Firebase Connected");

async function testAI(){

    const result = await askGemini(
        "Apa fungsi sistem kredensial rumah sakit?"
    );

    console.log(result);

}

testAI();
