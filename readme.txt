pouzil jsem docker compose na vytvoreni flask a mongodb contejneru na nasazeni jednoduchych webovych stranek ktere servirujou informace z mongodb databaze

staci spustit prikaz 'docker compose up --build' a dat do prohlizece 127.0.0.1:5000

na mem windows 11 pocitaci to funguje, zkousel jsem to na ubuntu VM a pri buildu jsem dostal error:

WARNING: MongoDB 5.0+ requires a CPU with AVX support, and your current system does not appear to have that!
mongoDB exited with code 132

a nevim co s tim ale flask funguje