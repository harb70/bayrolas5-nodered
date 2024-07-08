## bayrolas5-nodered

# Using Nodered to connect to Bayrol MQTT broker and send incoming messages to local Mosquitto Broker ( including Home Assistant configuration )

1) How to connect to Bayrol MQTT broker 

connect to the web portal
clic on “Direct Access”
on dev tools, clic network, search for the websocket connexion wss://www.bayrol-poolaccess.de:8083/
Clic on Messages and find the 1st one
you will find the username to use.

![Capture May 12 Multiscrape](https://github.com/harb70/bayrolas5-nodered/assets/93473437/23f56564-1a91-4faf-809b-81a76febc617)
Dev tool screenshot (Red line is the username to copy)

You can test with a MQTT tool like MQTT Explorer

MQTT Explorer connexion setup (no password)

![Capture May 12 Multiscrape (1)](https://github.com/harb70/bayrolas5-nodered/assets/93473437/e0f4fa69-650d-40c1-9142-188c920980fb)
