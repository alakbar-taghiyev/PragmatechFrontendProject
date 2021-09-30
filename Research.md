## Araşdırma mövzuları:

HTML Elementləri üçün CSS Default Brauzer Dəyərləri hansılardır? 

### h1-h6 tags:
-	display: block;
- font-size: 2em;
- margin-top: 0.67em;
- margin-bottom: 0.67em;
- margin-left: 0;
- margin-right: 0;
- font-weight: bold;

#### display:
   - display-block: bu xüsusiyyətə malik olan element olduğu sətri bütövlükdə tutur. Bütöv sətir tutulduğu üşün ondan sonra yazılan elemenetlər asağıdan yazılır. div, h1-h6, p, ul, li, ol və s. bunlar block elementlerdir. Block elementləri ölçü ala bilir

  - display:inline: blockdan fərqli olaraq ölçü  qəbul etmədiyi üçün olduğu yer ilə kifayətlənir. a, i, span, img və s. bunlar

  - display:inline-block: həm ölçü qəbul edir, həm də ki olduğu yer ilə kifayətlənir
 
#### font-size: 
   - em - fontsize bağlıdır, əgər özümüz font-size verməmişdiksə onda default dəyərin emini hesablayır (1em = 16px). Em vahidi, əsas elementin şrift ölçüsünün hesablanmış dəyərinə əsaslanan nisbi bir vahiddir. Bu o deməkdir ki, uşaq elementləri font ölçüsünü təyin etmək üçün həmişə valideynlərindən asılıdır.
   - rem - 16px (kök elementin ölçüsü) * x hesablanır. Rem vahidlərində isə şrift ölçüsü kök elementin (və ya htmlelementin) dəyərindən asılıdır .
   - Vw (Viewport-Width) - səhifənin görünən tərəfinin x%ni tutur. Mətn ölçüsü brauzer pəncərəsinin ölçüsünə uyğun olacaq (1vw = 1%)
   - vh (viewport-Height) - sehifənin görünən tərəfinin x%ni tutur (1vh = 1%)

### a tag:
   - color: (internal value);
   - text-decoration: underline;
   - cursor: auto;

#### text-decoration:
   - text-decoration-color (xəttin rəngini təyin edir)
     - text-decoration-color: red; 
     - text-decoration-color: #21ff21;
     - text-decoration-color: rgb(255, 90, 255);
     - text-decoration-color: hsl(70, 100%, 40%);
     - text-decoration-color: currentColor;
   - text-decoration-line (xəttin növünü təyin edir)
     - text-decoration-line: none;
     - text-decoration-line: underline; 
     - text-decoration-line: overline; 
     - text-decoration-line: line-through;  
     - text-decoration-line: underline overline;  
     - text-decoration-line: underline line-through;
     - text-decoration-line: overline underline line-through;
     - text-decoration-line: blink;
   - text-decoration-style ()
     - text-decoration-style: solid;
     - text-decoration-style: double;
     - text-decoration-style: dotted;
     - text-decoration-style: dashed;
     - text-decoration-style: wavy;
  
  
   - initial
   - inherit
   - revert
   - unset

### button tag:

### ul tag:

### li tag:

### section tag:

### img tag:

### span tag:
