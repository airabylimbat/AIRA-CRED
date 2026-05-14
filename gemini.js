const API_KEY = "AIzaSyBJ14J0sFw1JMgKMGli_wlzrpYkPJ839gU";

async function askGemini(prompt){

    const response = await fetch(

`https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,

        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                contents:[
                    {
                        parts:[
                            {
                                text:prompt
                            }
                        ]
                    }
                ]

            })

        }

    );

    const data = await response.json();

    console.log(data);

    return data.candidates[0].content.parts[0].text;

}

export { askGemini };
