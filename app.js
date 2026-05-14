async function testAI(){

    try{

        const result = await askGemini(
            "Buat slogan singkat untuk sistem kredensial rumah sakit berbasis AI"
        );

        document.getElementById("aiResult").innerHTML = result;

    }catch(error){

        document.getElementById("aiResult").innerHTML =
        "⚠ Gemini quota limit / API belum aktif penuh";

        console.log(error);

    }

}

testAI();
