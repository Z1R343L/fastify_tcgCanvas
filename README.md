# fastify_tcgCanvas
<a href="https://deepscan.io/dashboard#view=project&tid=14008&pid=17093&bid=378871"><img src="https://deepscan.io/api/teams/14008/projects/17093/branches/378871/badge/grade.svg" alt="DeepScan grade"></a>
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/40c784c72bc14040bfcddc56e66174f9)](https://app.codacy.com/gh/Z1R343L/fastify_tcgCanvas?utm_source=github.com&utm_medium=referral&utm_content=Z1R343L/fastify_tcgCanvas&utm_campaign=Badge_Grade_Settings)
<hr>
<img src=https://cdn.discordapp.com/attachments/745028626206031973/840394228811038761/Download_1.png>
<img alt="Discord" src="https://img.shields.io/discord/705294862248837192?label=support%20Server&logo=discord&logoColor=white">
<hr>
<h2> how to run: </h2>
<pre>
  <code>
    git clone https://github.com/Z1R343L/fastify_tcgcanvas
    cd _fastify_tcgcanvas
    npm i
    npm start
  </code>
</pre>
or:

<a href="https://repl.it/github/z1r343l/fastify_tcgcanvas" rel="nofollow"><img src="https://camo.githubusercontent.com/155692ac00709d7852f891ab2c42d28a1e836beecb8e1413ff8e098d5ff70d38/68747470733a2f2f7265706c2e69742f62616467652f6769746875622f6b6f676e6973652f7265706c2e69742d6d6f62696c65" alt="Run on Repl.it" 
data-canonical-src="https://repl.it/badge/github/z1r343l/fastify_tcgcanvas" style="max-width: 300%;"></a>
<a href="https://heroku.com/deploy?template=https://github.com/Z1R343L/fastify_tcgCanvas">
<img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
<h2> usage examples: </h2>
<pre>
python:
  <code>
    from requests import PreparedRequest
pr = PreparedRequest()
pr.prepare_url(
        url = "https://fastifytcgcanvas.jane4.repl.co",
        params = {
        "bg": "https://cdn.discordapp.com/attachments/745028626206031973/839715940416618496/table_up.jpg",
        "col": 4,
        "padding": 10,
        "c0": "swsh5-1",
        "c1": "swsh5-2",
        "c2": "swsh5-3",
        "c3": "swsh5-4",
        "c4": "swsh5-5",
        "c5": "swsh5-6",
        "c6": "swsh5-7",
        "c7": "swsh5-8",
        "c8": "swsh5-9",
        "c9": "swsh5-10"
        }
    )
print(pr.url)
  </code>
  result:
  <code>
  https://fastifytcgcanvas.jane4.repl.co/?bg=https%3A%2F%2Fcdn.discordapp.com%2Fattachments%2F745028626206031973%2F839715940416618496%2Ftable_up.jpg&col=4&padding=10&c0=swsh5-1&c1=swsh5-2&c2=swsh5-3&c3=swsh5-4&c4=swsh5-5&c5=swsh5-6&c6=swsh5-7&c7=swsh5-8&c8=swsh5-9&c9=swsh5-10
  
  [Program finished]
  </code>
 </pre>
 <img src=https://cdn.discordapp.com/attachments/745028626206031973/840536239962718208/Download_2.png>
 <hr>