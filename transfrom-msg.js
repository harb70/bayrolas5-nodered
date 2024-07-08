// 'd02/23ASE2-05145/v/4.1', 'homeassistant/pool/bayrolAS5/salt' g/l /10
// 'd02/23ASE2-05145/v/4.102', 'homeassistant/pool/bayrolAS5/conductivity'mS/cm /10
// 'd02/23ASE2-05145/v/4.104', 'homeassistant/pool/bayrolAS5/electrolyser-voltage' V /10
// 'd02/23ASE2-05145/v/4.105', 'homeassistant/pool/bayrolAS5/electrolyser-current' A /10
// 'd02/23ASE2-05145/v/4.107', 'homeassistant/pool/bayrolAS5/battery-voltage' V /100
// 'd02/23ASE2-05145/v/4.112', 'homeassistant/pool/bayrolAS5/timer-polarity-reversal' s
// 'd02/23ASE2-05145/v/4.119', 'homeassistant/pool/bayrolAS5/time-since-last-reversal' s
// 'd02/23ASE2-05145/v/4.182', 'homeassistant/pool/bayrolAS5/ph' pH /10
// 'd02/23ASE2-05145/v/4.2', 'homeassistant/pool/bayrolAS5/ph-target' 
// 'd02/23ASE2-05145/v/4.26', 'homeassistant/pool/bayrolAS5/redox-alert-max'
// 'd02/23ASE2-05145/v/4.27', 'homeassistant/pool/bayrolAS5/redox-alert-min'
// 'd02/23ASE2-05145/v/4.28', 'homeassistant/pool/bayrolAS5/redox-alert'
// 'd02/23ASE2-05145/v/4.3', 'homeassistant/pool/bayrolAS5/ph-alert-max' /10
// 'd02/23ASE2-05145/v/4.34', 'homeassistant/pool/bayrolAS5/min-control-ph' /100
// 'd02/23ASE2-05145/v/4.38', 'homeassistant/pool/bayrolAS5/ph-dosing-cycle' s
// 'd02/23ASE2-05145/v/4.4', 'homeassistant/pool/bayrolAS5/ph-alert-min' /10
// 'd02/23ASE2-05145/v/4.47', 'homeassistant/pool/bayrolAS5/ph-dosing-speed' %
// 'd02/23ASE2-05145/v/4.5', 'homeassistant/pool/bayrolAS5/ph-dosage-control-time' m
// 'd02/23ASE2-05145/v/4.51', 'homeassistant/pool/bayrolAS5/polarity-reversal-times' m
// 'd02/23ASE2-05145/v/4.69', 'homeassistant/pool/bayrolAS5/hour-count' h
// 'd02/23ASE2-05145/v/4.7', 'homeassistant/pool/bayrolAS5/min-count' m
// 'd02/23ASE2-05145/v/4.82', 'homeassistant/pool/bayrolAS5/redox' mv
// 'd02/23ASE2-05145/v/4.89', 'homeassistant/pool/bayrolAS5/ph-dosing-rate' %
// 'd02/23ASE2-05145/v/4.91', 'homeassistant/pool/bayrolAS5/electrolyser-prod-rate' %
// 'd02/23ASE2-05145/v/4.92', 'homeassistant/pool/bayrolAS5/startup-delay' m
// 'd02/23ASE2-05145/v/4.98', 'homeassistant/pool/bayrolAS5/temperature' C /10
// 'd02/23ASE2-05145/v/5.3', 'homeassistant/pool/bayrolAS5/ph-prod-rate' %
// 'd02/23ASE2-05145/v/5.4', 'homeassistant/pool/bayrolAS5/redox-state'
// 'd02/23ASE2-05145/v/5.41', 'homeassistant/pool/bayrolAS5/redox-mode'
// 'd02/23ASE2-05145/v/5.98', 'homeassistant/pool/bayrolAS5/filtration-state'



msg.topic = msg.topic.replace('d02/23ASE2-05145/v/4.1', 'homeassistant/pool/bayrolAS5/salt').replace('d02/23ASE2-05145/v/4.102', 'homeassistant/pool/bayrolAS5/conductivity').replace('d02/23ASE2-05145/v/4.104', 'homeassistant/pool/bayrolAS5/electrolyser-voltage').replace('d02/23ASE2-05145/v/4.105', 'homeassistant/pool/bayrolAS5/electrolyser-current').replace('d02/23ASE2-05145/v/4.107', 'homeassistant/pool/bayrolAS5/battery-voltage').replace('d02/23ASE2-05145/v/4.112', 'homeassistant/pool/bayrolAS5/timer-polarity-reversal').replace('d02/23ASE2-05145/v/4.119', 'homeassistant/pool/bayrolAS5/time-since-last-reversal').replace('d02/23ASE2-05145/v/4.182', 'homeassistant/pool/bayrolAS5/ph').replace('d02/23ASE2-05145/v/4.2', 'homeassistant/pool/bayrolAS5/ph-target').replace('d02/23ASE2-05145/v/4.26', 'homeassistant/pool/bayrolAS5/redox-alert-max').replace('d02/23ASE2-05145/v/4.27', 'homeassistant/pool/bayrolAS5/redox-alert-min').replace('d02/23ASE2-05145/v/4.28', 'homeassistant/pool/bayrolAS5/redox-alert').replace('d02/23ASE2-05145/v/4.3', 'homeassistant/pool/bayrolAS5/ph-alert-max').replace('d02/23ASE2-05145/v/4.34', 'homeassistant/pool/bayrolAS5/min-control-ph').replace('d02/23ASE2-05145/v/4.38', 'homeassistant/pool/bayrolAS5/ph-dosing-cycle').replace('d02/23ASE2-05145/v/4.4', 'homeassistant/pool/bayrolAS5/ph-alert-min').replace('d02/23ASE2-05145/v/4.47', 'homeassistant/pool/bayrolAS5/ph-dosing-speed').replace('d02/23ASE2-05145/v/4.5', 'homeassistant/pool/bayrolAS5/ph-dosage-control-time').replace('d02/23ASE2-05145/v/4.51', 'homeassistant/pool/bayrolAS5/polarity-reversal-times').replace('d02/23ASE2-05145/v/4.69', 'homeassistant/pool/bayrolAS5/hour-count').replace('d02/23ASE2-05145/v/4.7', 'homeassistant/pool/bayrolAS5/min-count').replace('d02/23ASE2-05145/v/4.82', 'homeassistant/pool/bayrolAS5/redox').replace('d02/23ASE2-05145/v/4.89', 'homeassistant/pool/bayrolAS5/ph-dosing-rate').replace('d02/23ASE2-05145/v/4.91', 'homeassistant/pool/bayrolAS5/electrolyser-prod-rate').replace('d02/23ASE2-05145/v/4.92', 'homeassistant/pool/bayrolAS5/startup-delay').replace('d02/23ASE2-05145/v/4.98', 'homeassistant/pool/bayrolAS5/temperature').replace('d02/23ASE2-05145/v/5.3', 'homeassistant/pool/bayrolAS5/ph-prod-rate').replace('d02/23ASE2-05145/v/5.4', 'homeassistant/pool/bayrolAS5/redox-state').replace('d02/23ASE2-05145/v/5.41', 'homeassistant/pool/bayrolAS5/redox-mode').replace('d02/23ASE2-05145/v/5.98', 'homeassistant/pool/bayrolAS5/filtration-state');
return msg;