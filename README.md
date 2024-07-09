## bayrolas5-nodered

# Using Nodered to connect to Bayrol MQTT broker and send incoming messages to local Mosquitto Broker ( including Home Assistant configuration )
This tutorial suppose you already connect your Bayrol AS5 to Bayrol web portal.
Everything is for Home Assistant, but you can adapt for other systems.
You need : \
Home Assistant ... \
Nodered (i use the HA addon)\
MQTT Home Assistant integration and use the split configuration (https://www.home-assistant.io/docs/configuration/splitting_configuration/) \
create a mqtt.yaml in your config directory.

based on the discussion here ( https://community.home-assistant.io/t/multiscrape-please-help-with-scraping-bayrol-site/617419 )\
Thanks to [@Duntch144](https://github.com/Duntch144)

1) How to connect to Bayrol MQTT broker 

connect to the web portal\
clic on “Direct Access”\
on dev tools, clic network, search for the websocket connexion wss://www.bayrol-poolaccess.de:8083/ \
Clic on Messages and find the 1st one \
you will find the username to use. \

![Capture May 12 Multiscrape](https://github.com/harb70/bayrolas5-nodered/assets/93473437/23f56564-1a91-4faf-809b-81a76febc617)
Dev tool screenshot (Red line is the username to copy)

You can test with a MQTT tool like MQTT Explorer

MQTT Explorer connexion setup (no password)

![Capture May 12 Multiscrape (1)](https://github.com/harb70/bayrolas5-nodered/assets/93473437/e0f4fa69-650d-40c1-9142-188c920980fb)


2) use mqtt.yaml from this repo or add the entities to your already existing mqtt.yaml (refer to all existing documentation about using Visual Studio Code addon etc ...)
   
4) In Nodered import bayrol-nodered.json from this repo.

<img width="881" alt="Capture d’écran 2024-07-09 à 14 34 56" src="https://github.com/harb70/bayrolas5-nodered/assets/93473437/2beeada6-ae8b-47c5-b853-18bc88754a24">

5) configure the nodes with little red triangle (your mosquitto broker, and the Bayrol broker with the right credentials as explained)
   don't forget to modify the topic name with your Bayrol AS5 ID
<img width="574" alt="Capture d’écran 2024-07-09 à 14 35 22" src="https://github.com/harb70/bayrolas5-nodered/assets/93473437/7435b2cf-ccb9-4f9a-98e8-2ca4ccdc5652">

The nodered flow will read your mqtt.yaml and send the refresh message accordingly.
If we find another values, you will only have to add them in mqtt.yaml, and no modification in the nodered flow. MAGIC !

At Home Assistant restart, the inject node will wait 2 minutes before injecting (it needs mqtt integration to be up) you can change the refresh timer in the inject node (defined to 15 minutes)

There are some values not actually working well, work in progress !
